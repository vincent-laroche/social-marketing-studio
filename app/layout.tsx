import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Social Marketing Studio | Hair Solutions Co.",
  description: "Private Hair Solutions Co. studio for social content planning, creative review, content calendars, and production systems.",
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
