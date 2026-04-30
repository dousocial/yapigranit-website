import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";

import { projects } from "../src/lib/data/projects";
import { blogPosts } from "../src/lib/data/blog";

const url = (process.env.DATABASE_URL ?? "file:./prisma/dev.db").replace(
  /^file:/,
  "",
);

const adapter = new PrismaBetterSqlite3({ url });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("→ Seeding database...");

  // Admin user
  const adminEmail = process.env.ADMIN_EMAIL ?? "admin@yapigranit.com.tr";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "changeme123";
  const existing = await prisma.user.findUnique({
    where: { email: adminEmail },
  });
  if (!existing) {
    const hash = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: "Yönetici",
        passwordHash: hash,
        role: "admin",
      },
    });
    console.log(`  ✓ Admin user created: ${adminEmail}`);
  } else {
    console.log(`  ↳ Admin user already exists: ${adminEmail}`);
  }

  // Projects
  for (const p of projects) {
    await prisma.project.upsert({
      where: { slug: p.slug },
      create: {
        slug: p.slug,
        title: p.title,
        category: p.category,
        categoryLabel: p.categoryLabel,
        type: p.type,
        location: p.location,
        year: p.year,
        material: p.material.join(", "),
        area: p.area,
        scope: p.scope,
        summary: p.summary,
        cover: p.cover,
        gallery: p.gallery.join(","),
        published: true,
      },
      update: {},
    });
  }
  console.log(`  ✓ ${projects.length} projects seeded`);

  // Blog posts
  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        body: `${post.excerpt}\n\nBu yazı yer tutucu içerikle hazırlanmıştır. Admin panelinden düzenleyerek gerçek içeriğinizi ekleyebilirsiniz.`,
        category: post.category,
        categoryLabel: post.categoryLabel,
        cover: post.cover,
        readMinutes: post.readMinutes,
        featured: !!post.featured,
        published: true,
        publishedAt: new Date(post.date),
      },
      update: {},
    });
  }
  console.log(`  ✓ ${blogPosts.length} blog posts seeded`);

  console.log("✓ Seed complete.\n");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
