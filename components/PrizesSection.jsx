import { PrizesCard,PrizesCard2,PrizesCard3,PrizesCard4 } from "./PrizesCard";

export function PrizesSection() {
    return(
        <>
        
       <div className="flex flex-col items-center gap-5 justify-center">
       <h1 className="text-[50px] font-[600] my-[40px] tracking-wider ">PRIZES</h1>
  <div className="flex flex-col  md:flex-row gap-12 relative">
    <PrizesCard2 />
    <div className="sm:-mt-[60px]">
      <PrizesCard />
    </div>
    <PrizesCard3 />
  </div>
  <div className="flex flex-col md:flex-row gap-12 relative">
    <PrizesCard4 title="Best All Girl Team" />
    <div className="sm:-mt-[30px]">
    <PrizesCard4 title="Best 1st Year Team" />
     </div>   
   
    <PrizesCard4 title="Best 20 Team" />
  </div>

</div>

        </>
    )
}
