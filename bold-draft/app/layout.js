import "./globals.css";

export const metadata = {
  title: "Bold Draft — We Create Content People Stop Scrolling For",
  description:
    "Bold Draft is a Gen-Z creative agency for social media marketing, content creation, branding, short-form video and creative campaigns. From draft to dominance.",
  openGraph: {
    title: "Bold Draft",
    description: "We create content people stop scrolling for.",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#16001a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
