import Image from "next/image";
import Judges from "@/components/Judges";

export default function Home() {
  return (
    <>
    <div className="h-screen bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }} >
      <Judges/>
    </div>
    </>
  );
}
