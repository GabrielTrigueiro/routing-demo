export default function ProductDetaiLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <h1>Detalhes do produto layout</h1>
    </>
  );
}
