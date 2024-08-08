import { About, CallToAction, Growth, Hero, Industries, Lotus } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero/>
      <Lotus />
      <About />
      <Industries />
      <Growth />
      <CallToAction />
    </main>
  );
}
