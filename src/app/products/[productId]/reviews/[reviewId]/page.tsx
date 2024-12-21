import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ reviewId: string; productId: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function Review({ params }: Props) {
  const reviewId = (await params).reviewId;
  const productId = (await params).productId;

  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Erro ao carregar review");
  }
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
