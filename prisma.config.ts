import path from "node:path";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
  },
});

// Prisma adapter ismi uyumu — node_modules içinde PrismaBetterSqlite3
// (camelCase) olarak export ediliyor. lib/prisma.ts içinde de aynı isim
// kullanılmalı.
