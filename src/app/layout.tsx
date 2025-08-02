import "./globals.css";
import { siteConfig } from "@/content/site";

export const metadata = {
  title: siteConfig.options?.seo?.title || siteConfig.title,
  description: siteConfig.options?.seo?.description || siteConfig.tagline,
  openGraph: {
    images: [siteConfig.options?.seo?.image || siteConfig.avatar],
    url: siteConfig.options?.seo?.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
