import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Bem vindo!</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/products"}>Products</Link>
    </>
  );
}
