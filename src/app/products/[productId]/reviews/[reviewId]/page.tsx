"use client";

import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ reviewId: string; productId: string }>;
};

export default async function Review({ params }: Props) {
  const reviewId = (await params).reviewId;
  const productId = (await params).productId;

  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Review {reviewId} for product {productId}
    </h1>
  );
}
