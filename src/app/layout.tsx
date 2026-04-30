import "./globals.css";

// Root layout — bu sadece pass-through.
// HTML+body+font+i18n provider [locale]/layout.tsx içinde.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
