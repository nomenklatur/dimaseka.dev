import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimas Eka Putra",
  description: "Your Software Engineering Partner",
  openGraph: {
    title: "Dimas Eka Putra",
    description: "Your Software Engineering Partner",
    url: "https://dimaseka.my.id",
    siteName: "Dimas Eka Putra",
    images: [
      {
        url: "/logo.png", // Image from the public directory
        width: 1200,
        height: 630,
        alt: "Dimas Eka Putra",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimas Eka Putra",
    description: "Your Software Engineering Partner",
    images: ["/logo.png"], // Image from the public directory
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
