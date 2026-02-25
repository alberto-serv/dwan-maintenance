import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dwan Elevator - First Year of Maintenance Free | California's Trusted Elevator Service Since 1919",
  description: "Switch to Dwan Elevator and get your first year of commercial elevator maintenance absolutely free. Serving San Francisco Bay Area and Los Angeles with union-certified technicians since 1919.",
  keywords: "elevator maintenance, commercial elevator service, California elevator, San Francisco elevator, Los Angeles elevator, elevator repair, Cal/OSHA compliance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
