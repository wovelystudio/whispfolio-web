import type { Metadata } from "next";
import "./globals.css";
import RevealObserver from "@/components/ui/RevealObserver";

export const metadata: Metadata = {
  title: "Wispfolio — From Idea to Launch",
  description:
    "A platform that helps creators, artists, students, indie developers, and startup founders grow their projects from idea to launch while sharing the journey with others.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <RevealObserver />
      </body>
    </html>
  );
}
