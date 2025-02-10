import Image from "next/image";
import img1 from "../public/firstprice.png";
import img2 from "../public/secondprice.png";
import img3 from "../public/thirdprice.png";
import img4 from "../public/price2.png";

export function PrizesCard() {
    return (   
        <>
        <div className="relative h-[400px] w-[300px] bg-[#022E51] text-white p-6 m-auto my-8 sm:my-10 rounded-3xl overflow-hidden shadow-[0_0_20px_1px_#FAD000]">

  <div className="absolute top-[-200px] left-[-45px] w-[400px] h-[400px] bg-[#1A93A5] rounded-full"></div>

 
  <div className="relative z-10 flex flex-col ">
    <h2 className="text-[23px] sm:text-[25px]   font-extrabold text-[#D6AE7D]">First Prize</h2>
    <p className="text-[xl] sm:text-2xl mt-3 leading-none font-bold text-[#D6AE7D]">INR</p>
    <p className="text-[2xl] sm:text-3xl  font-extrabold text-[#D6AE7D] ">10000</p>
    <div className=" mt-[50px] md:mt-[20px] w-[200px]">
    <p className="text-[#D6AE7D] text-sm">
    One-way system drives,mock interviews with unlimited practice by interview Buddyy
One-way system drives,mock interviews with unlimited practice by interview Buddyy
One-way system drives,mock interviews with unlimited practice by interview Buddyy
 
    </p>
    <button className="mt-2 px-2 py-1 w-[100px] h-[30px] bg-black text-sm text-white rounded-3xl ">Read more</button>
    </div>
    
  </div>

  <div>
    <Image src={img1} alt="First Prize" className="absolute bottom-0 right-0 w-[130px] z-10" />
  </div>

</div>



        </>
    );
}

export function PrizesCard2() {
    return (   
        <>
        <div className="relative h-[400px] w-[300px] bg-[#022E51] text-white p-6 m-auto my-8 sm:my-10 rounded-3xl overflow-hidden shadow-[0_0_20px_1px_#FAD000]">

  <div className="absolute top-[-200px] left-[-45px] w-[400px] h-[400px] bg-[#1A93A5] rounded-full"></div>

 
  <div className="relative z-10 flex flex-col ">
    <h2 className="text-[23px] sm:text-[25px]    font-extrabold text-[#D6AE7D]">Second Prize</h2>
    <p className="text-[xl] sm:text-2xl mt-3 leading-none font-bold text-[#D6AE7D]">INR</p>
    <p className="text-[2xl] sm:text-3xl font-extrabold text-[#D6AE7D] ">10000</p>
    <div className="mt-[50px] md:mt-[20px] w-[200px]">
    <p className="text-[#D6AE7D] text-sm">
    One-way system drives,mock interviews with unlimited practice by interview Buddyy
One-way system drives,mock interviews with unlimited practice by interview Buddyy
One-way system drives,mock interviews with unlimited practice by interview Buddyy
 
    </p>
    <button className="mt-2 px-2 py-1 w-[100px] h-[30px] bg-black text-sm text-white rounded-3xl ">Read more</button>
    </div>
    
  </div>

  <div>
    <Image src={img2} alt="second Prize" className="absolute bottom-0 right-0 w-[110px] z-10" />
  </div>

</div>



        </>
    );
}

export function PrizesCard3() {
    return (   
        <>
        <div className="relative h-[400px] w-[300px] bg-[#022E51] text-white p-6 m-auto my-8 sm:my-10 rounded-3xl overflow-hidden shadow-[0_0_20px_1px_#FAD000]">

  <div className="absolute top-[-200px] left-[-45px] w-[400px] h-[400px] bg-[#1A93A5] rounded-full"></div>

 
  <div className="relative z-10 flex flex-col ">
    <h2 className="text-[23px] sm:text-[25px]    font-extrabold text-[#D6AE7D]">Third Prize</h2>
    <p className="text-[xl] sm:text-2xl mt-3 leading-none font-bold text-[#D6AE7D]">INR</p>
    <p className="text-[2xl] sm:text-3xl  font-extrabold text-[#D6AE7D] ">10000</p>
    <div className="mt-[50px] md:mt-[20px] w-[200px]">
    <p className="text-[#D6AE7D] text-sm">
    One-way system drives,mock interviews with unlimited practice by interview Buddyy
One-way system drives,mock interviews with unlimited practice by interview Buddyy
One-way system drives,mock interviews with unlimited practice by interview Buddyy
 
    </p>
    <button className="mt-2 px-2 py-1 w-[100px] h-[30px] bg-black text-smtext-white rounded-3xl ">Read more</button>
    </div>
    
  </div>

  <div>
    <Image src={img3} alt="third Prize" className="absolute bottom-0 right-0 w-[90px] z-10" />
  </div>

</div>



        </>
    );
}


export function PrizesCard4({title}) {
    return (   
        <>
        <div className="relative h-[400px] w-[300px] bg-[#022E51] text-white p-6 m-auto my-8 sm:my-10 rounded-3xl overflow-hidden shadow-[0_0_20px_1px_#FAD000]">

  <div className="absolute top-[-200px] left-[-45px] w-[400px] h-[400px] bg-[#1A93A5] rounded-full"></div>

 
  <div className="relative z-10 flex flex-col ">
    <h2 className="text-[23px] sm:text-[20px]    font-extrabold text-[#D6AE7D]">{title}</h2>
    <p className="text-[xl] sm:text-2xl mt-3  leading-none font-bold text-[#D6AE7D]">INR</p>
    <p className="text-[2xl] sm:text-3xl font-extrabold text-[#D6AE7D] ">10000</p>
    <div className="mt-[80px] md:mt-[60px] flex flex-col items-center">
    <p className="text-[#D6AE7D] text-sm text-center">
    One-way system drives,mock interviews with unlimited practice by interview Buddyy
One-way system drives,mock interviews with unlimited practice by interview Buddyy
One-way system drives,mock interviews with unlimited practice by interview Buddyy
 
    </p>
    <button className="mt-2 px-2 py-1 w-[100px] h-[30px] bg-black text-sm text-white rounded-3xl ">Read more</button>
    </div>
    
  </div>

  <div>
    <Image src={img4} alt="third Prize" className="absolute top-5 right-0 w-[130px] z-10" />
  </div>

</div>



        </>
    );
}
