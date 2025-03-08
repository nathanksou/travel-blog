import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nathansou.com"),
  title: {
    template: "%s | Nate's Travel Recs",
    default: "Nate's Travel Recs",
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
