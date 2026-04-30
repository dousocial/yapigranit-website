import { NextResponse } from "next/server";
import { z } from "zod";

import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";

const schema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  category: z.string().min(1),
  categoryLabel: z.string().min(1),
  type: z.string().min(1),
  location: z.string().min(1),
  year: z.number().min(1990).max(2100),
  material: z.string().min(1),
  area: z.string().optional(),
  scope: z.string().min(2),
  summary: z.string().min(10),
  cover: z.string().url(),
  gallery: z.string().optional(),
  published: z.boolean(),
});

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user) return NextResponse.json({ ok: false }, { status: 401 });

  const body = await req.json();
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.issues },
      { status: 400 },
    );
  }

  const project = await prisma.project.create({ data: parsed.data });
  return NextResponse.json({ ok: true, project });
}
