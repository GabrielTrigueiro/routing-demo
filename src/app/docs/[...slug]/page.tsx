export default function Docs({
  params,
}: Readonly<{
  params: {
    slug: string[];
  };
}>) {
  if (params.slug.length === 2) {
    return (
      <h1>
        Vendo o documento da feature {params.slug[0]} e conceito
        {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Vendo o documento da feature {params.slug[0]}</h1>;
  }
  return <h1>Vendo a lista de documentos</h1>;
}
