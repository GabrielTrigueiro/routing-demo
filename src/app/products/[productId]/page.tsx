export default function Product({
  params,
}: Readonly<{
  params: {
    productId: string;
  };
}>) {
  return <h1>Product {params.productId}</h1>;
}
