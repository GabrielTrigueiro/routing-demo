"use client";

import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <>
      <h1>Pedir produto</h1>
      <button onClick={handleClick}>Pedir</button>
    </>
  );
}
