import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    default: "Four Friends Kitchen | Food, friendship & JASS",
    template: "%s | Four Friends Kitchen",
  },
  description:
    "Discover Four Friends Kitchen in Canada and JASS, a cookbook about food, creativity and finding your own path.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="skip-link"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
