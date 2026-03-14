export const metadata = {
  title: "CentiCove",
  description: "Simple money tools for students and beginners.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
