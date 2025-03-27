import React from "react";
import TitleBar from "./TitleBar";
import Image from "next/image";

const TitleSponser = () => {
  return (
    <div className="mt-8 flex flex-col gap-8 text-white">
      {/* Title sponser */}
      <div>
        <TitleBar side="left" title={"TITLE SPONSER"} />

        <div className="flex flex-row justify-center mt-4">
          <div className="relative py-4 px-8">
            <Image
              src={"/sponsers/mongodb.png"}
              height={200}
              width={250}
              alt="mongodb"
            />

            {/* Border elements */}
            <div className="absolute h-[50%] w-1 top-0 left-0 bg-[#5B9ABC] z-50"></div>
            <div className="absolute h-1 w-[15%] top-0 left-0 bg-[#5B9ABC] z-50"></div>

            <div className="absolute h-[50%] w-1 bottom-0 right-0 bg-[#5B9ABC] z-50"></div>
            <div className="absolute h-1 w-[15%] bottom-0 right-0 bg-[#5B9ABC] z-50"></div>
          </div>
        </div>
      </div>

      {/* Random Sponsers */}

      <div>
        <TitleBar side="right" title={"RANDOM SPONSER"} />

        <div className="mt-4 flex flex-col gap-[50px] items-center">
            <div className="flex flex-col md:flex-row gap-[50px] md:gap-[150px]">
                <Image src={'/sponsers/echo.png'} className="object-contain" alt="sponsers" height={100} width={200} />
                <Image src={'/sponsers/interview.png'} className="object-contain" alt="sponsers" height={100} width={200} />
                <Image src={'/sponsers/taskade.png'} className="object-contain" alt="sponsers" height={100} width={200} />
            </div>

            <div className="flex flex-col md:flex-row gap-[50px] md:gap-[150px] ">
            <Image src={'/sponsers/replit1.png'} className="object-contain" alt="sponsers" height={100} width={200} />
            <Image src={'/sponsers/replit2.png'} className="object-contain" alt="sponsers" height={100} width={200} />
            </div>

            <div className="flex flex-row ">
            <Image src={'/sponsers/certificate.png'} className="object-contain" alt="sponsers" height={100} width={200} />
        
            </div>
        </div>
      </div>
    </div>
  );
};

export default TitleSponser;
