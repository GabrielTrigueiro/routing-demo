function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetaiLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  const random = getRandomInt(2);

  if (random === 1) {
    throw new Error("Erro ao carregar review");
  }

  return (
    <>
      {children}
      <h1>Detalhes do produto layout</h1>
    </>
  );
}
