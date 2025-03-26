import { PrizesCard, PrizesCard2, PrizesCard3, PrizesCard4 } from "./Prizecard1";

export function PrizesSection() {
    return (
        <div className="flex flex-col items-center gap-5 justify-center px-4 md:px-8 text-white">
            <h1 className="text-[40px] md:text-[50px] font-[600] my-[30px] md:my-[40px] tracking-wider">PRIZES</h1>

            {/* First Row */}
            <div className="flex flex-col lg:flex-row gap-7 md:gap-9  mx-auto">
                <div className="order-2 lg:order-none">
                    <PrizesCard2 />
                </div>
                <div className="order-1 lg:order-none md:-mt-[40px]">
                    <PrizesCard />
                </div>
                <div className="order-3 lg:order-none">
                    <PrizesCard3 />
                </div>
            </div>

            {/* Second Row */}
            <div className="flex flex-col lg:flex-row gap-7 md:gap-9  mx-auto">
                {/* <div className="order-2 lg:order-none">
                    <PrizesCard4 title="Best All Girl Team" />
                </div> */}
                <div className="order-1 lg:order-none md:-mt-[20px]">
                    <PrizesCard4 title="Best 1st Year Team" />
                </div>
                {/* <div className="order-3 lg:order-none">
                    <PrizesCard4 title="Best 20 Team" />
                </div> */}
            </div>
        </div>
    );
}
