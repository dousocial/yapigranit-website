import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Resolve upward to the repo root where node_modules lives
// Worktree path: <repo>/.claude/worktrees/<name> → 3 levels up = <repo>
const repoRoot = resolve(__dirname, "../../..");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: repoRoot,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com"
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io"
      },
      {
        protocol: "https",
        hostname: "cdn.midjourney.com"
      },
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com"
      },
      {
        protocol: "https",
        hostname: "cdn.msisurfaces.com"
      },
      {
        protocol: "https",
        hostname: "eaglestonesusa.com"
      },
      {
        protocol: "https",
        hostname: "biesso.com"
      },
      {
        protocol: "https",
        hostname: "i.ibb.co"
      },
      {
        protocol: "https",
        hostname: "www.dektontr.com"
      },
      {
        protocol: "https",
        hostname: "www.igscountertops.com"
      },
      {
        protocol: "https",
        hostname: "media.architonic.com"
      },
      {
        protocol: "https",
        hostname: "imperior-stone.ru"
      },
      {
        protocol: "https",
        hostname: "www.marble.co.uk"
      },
      {
        protocol: "https",
        hostname: "www.infinitysurfaces.it"
      },
      {
        protocol: "https",
        hostname: "florim-cdn.thron.com"
      },
      {
        protocol: "https",
        hostname: "storage.atlasplan.com"
      },
      {
        protocol: "https",
        hostname: "laminamtr.com"
      },
      {
        protocol: "https",
        hostname: "www.materiaslab.com"
      },
      {
        protocol: "https",
        hostname: "nuovocorso.it"
      },
      {
        protocol: "https",
        hostname: "cdn.imweb.me"
      },
      {
        protocol: "https",
        hostname: "optimise2.assets-servd.host"
      },
      {
        protocol: "https",
        hostname: "www.ozatagrup.com.tr"
      },
      {
        protocol: "https",
        hostname: "www.yapimarka.com"
      }
    ]
  }
};

export default nextConfig;
