import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dimas Eka Putra",
  description: "Your Software Engineering Buddy",
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
