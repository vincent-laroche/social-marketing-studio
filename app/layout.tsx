import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Social Media Marketing | Hair Solutions Co.",
  description: "Instagram rebrand launch dashboard, content calendar, and Crown Harbor social design system.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
