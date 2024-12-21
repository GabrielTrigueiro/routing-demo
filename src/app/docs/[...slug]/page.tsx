type tParams = Promise<{ slug: string[] }>;

export default async function Docs(props: { params: tParams }) {
  const { slug } = await props.params;

  if (slug.length === 2) {
    return (
      <h1>
        Vendo o documento da feature {slug[0]} e conceito
        {slug[1]}
      </h1>
    );
  } else if (slug.length === 1) {
    return <h1>Vendo o documento da feature {slug[0]}</h1>;
  }
  return <h1>Vendo a lista de documentos</h1>;
}
