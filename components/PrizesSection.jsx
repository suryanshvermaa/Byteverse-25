import { PrizesCard, PrizesCard2, PrizesCard3, PrizesCard4 } from "./Prizecard1";

export function PrizesSection() {
    return (
        <>
            <div className="flex flex-col items-center gap-5 justify-center">
                <h1 className="text-[50px] font-[600] my-[40px] tracking-wider">PRIZES</h1>

                {/* First Row */}
                <div className="flex flex-col md:flex-row gap-12 relative">
                    
                    <div className="order-2 md:order-none">
                        <PrizesCard2 />
                    </div>
                    <div className="order-1 md:order-none sm:-mt-[60px]">
                        <PrizesCard />
                    </div>
                    <div className="order-3 md:order-none">
                        <PrizesCard3 />
                    </div>
                </div>

                {/* Second Row */}
                <div className="flex flex-col md:flex-row gap-12 relative">
                    <div className="order-2 md:order-none">
                        <PrizesCard4 title="Best All Girl Team" />
                    </div>
                    <div className="order-1 md:order-none sm:-mt-[30px]">
                        <PrizesCard4 title="Best 1st Year Team" />
                    </div>
                    <div className="order-3 md:order-none">
                        <PrizesCard4 title="Best 20 Team" />
                    </div>
                </div>
            </div>
        </>
    );
}
