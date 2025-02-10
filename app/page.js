import HeroSection from "@/components/HeroSection";
import Image from "next/image";
import { PrizesSection } from "@/components/PrizesSection";
import { FAQ } from "@/components/FAQ";

export default function Home() {
  return (
    <>
    <div className="bg-cover w-full bg-top" style={{ backgroundImage: "url('/background-images/heroSectionBackground.png')"} } >
      <HeroSection />
      <PrizesSection />
      <FAQ/>
    </div>
    </>
  );
}
