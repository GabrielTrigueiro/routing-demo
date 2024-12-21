"user client";

type Props = {
  params: Promise<{ reviewId: string; productId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function Product({ params }: Props) {
  const productId = (await params).productId;
  return <h1>Product {productId}</h1>;
}
