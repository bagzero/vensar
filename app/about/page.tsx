import { Hero } from "@/components";
import About from "@/components/About";
import Industries from "@/components/Industries";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
    </main>
  );
}
