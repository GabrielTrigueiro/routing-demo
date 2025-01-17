export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightBlue", padding: "1rem" }}>
          <p>header</p>
        </header>
        {children}
        <footer style={{ backgroundColor: "ghostWhite", padding: "1rem" }}>
          <p>footer</p>
        </footer>
      </body>
    </html>
  );
}
