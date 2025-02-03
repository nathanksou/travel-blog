import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  // TODO: update domain
  metadataBase: new URL("https://your-domain.com"),
  title: {
    template: "%s | Travel Blog",
    default: "Travel Blog",
  },
  description: "Explore travel destinations around the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
