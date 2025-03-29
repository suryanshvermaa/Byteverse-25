
import ContactUs from "@/components/ContactUs";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import Judges from "@/components/Judges";
import { PrizesSection } from "@/components/PrizesSection";
import AboutUs from "@/components/AboutUs";
import Sponsors from "./sponsers";
import Rulebook from "@/components/Rulebook";


export default function Home() {
  return (
    <>

    <div className="bg-cover w-full bg-top" >
      <HeroSection/>
      <AboutUs/>
      <Rulebook/>
      <Judges/>
      {/* <Sponsors/>  */}
      <PrizesSection/>
      <FAQ/>   
      <ContactUs/>
    </div>
    </>
  );
}
