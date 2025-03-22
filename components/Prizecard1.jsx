"use client"; 

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import img1 from "../public/firstprice.png";
import img2 from "../public/secondprice.png";
import img3 from "../public/thirdprice.png";
import img4 from "../public/price2.png";

export function PrizesCard() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-[300px] h-[400px] m-auto my-8 sm:my-10 relative perspective-1000">
      <AnimatePresence mode="wait">
        {!showDetails && (
          <motion.div
            key="front"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-[#022E51] text-white p-6 rounded-3xl shadow-[0_0_20px_1px_#FAD000] overflow-hidden flex flex-col justify-between"
          >
          
            <div className="absolute top-[-300px] left-[-50px] w-[400px] h-[500px] bg-[#1A93A5] rounded-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-[23px] sm:text-[25px] font-extrabold text-[#D6AE7D]">
                First Prize
              </h2>
              <p className="text-xl sm:text-2xl mt-3 leading-none font-bold text-[#D6AE7D]">
                INR
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#D6AE7D]">
                10000
              </p>

              <p className="text-[#D6AE7D] mt-[80px] md:mt-[60px] w-[200px] text-sm ">
                One-way system drives, mock interviews with unlimited practice by Interview Buddyy.
                {/* One-way system drives, mock interviews with unlimited practice by Interview Buddyy. */}
              </p>

              <button
                className="mt-2 px-2 py-1 w-[100px] h-[30px] bg-black text-sm text-white rounded-3xl"
                onClick={() => setShowDetails(true)}
              >
                Read more
              </button>
            </div>
            <Image
              src={img1}
              alt="First Prize"
              className="absolute bottom-0 right-0 w-[130px] z-10"
            />
          </motion.div>
        )}

        {showDetails && (
          <motion.div
            key="back"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-[#022E51] text-white p-6 rounded-3xl shadow-[0_0_20px_1px_#FAD000] overflow-hidden flex flex-col justify-between"
          >
            
            <div className="absolute top-[-300px] left-[-50px] w-[400px] h-[500px] bg-[#1A93A5] rounded-full z-0"></div>

            <div className="relative z-10">
              <h2 className="text-[23px] sm:text-[25px] font-extrabold text-[#D6AE7D]">
                Prize Benefits
              </h2>
              <p className="text-sm text-[#D6AE7D] mt-2">
                 Includes mock interviews with industry experts.  
                 Exclusive mentorship from top professionals.  
                 Certificate of Excellence & Internship Offers.
              </p>

              <button
                className="mt-4 px-4 py-2 bg-black text-sm text-white rounded-3xl"
                onClick={() => setShowDetails(false)}
              >
                Go Back
              </button>
            </div>

            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PrizesCard2() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-[300px] h-[400px] m-auto my-8 sm:my-10 relative perspective-1000">
      <AnimatePresence mode="wait">
        {!showDetails && (
          <motion.div
            key="front"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-[#022E51] text-white p-6 rounded-3xl shadow-[0_0_20px_1px_#FAD000] overflow-hidden flex flex-col justify-between"
          >
          
            <div className="absolute top-[-300px] left-[-50px] w-[400px] h-[500px] bg-[#1A93A5] rounded-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-[23px] sm:text-[25px] font-extrabold text-[#D6AE7D]">
                Second Prize
              </h2>
              <p className="text-xl sm:text-2xl mt-3 leading-none font-bold text-[#D6AE7D]">
                INR
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#D6AE7D]">
                7000
              </p>

              <p className="text-[#D6AE7D] mt-[80px] md:mt-[60px] w-[200px] text-sm ">
                One-way system drives, mock interviews with unlimited practice by Interview Buddyy.
              </p>

              <button
                className="mt-2 px-2 py-1 w-[100px] h-[30px] bg-black text-sm text-white rounded-3xl"
                onClick={() => setShowDetails(true)}
              >
                Read more
              </button>
            </div>
            <Image
              src={img2}
              alt="second Prize"
              className="absolute bottom-0 right-0 w-[110px] z-10"
            />
          </motion.div>
        )}

        {showDetails && (
          <motion.div
            key="back"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-[#022E51] text-white p-6 rounded-3xl shadow-[0_0_20px_1px_#FAD000] overflow-hidden flex flex-col justify-between"
          >
            
            <div className="absolute top-[-300px] left-[-50px] w-[400px] h-[500px] bg-[#1A93A5] rounded-full z-0"></div>

            <div className="relative z-10">
              <h2 className="text-[23px] sm:text-[25px] font-extrabold text-[#D6AE7D]">
                Prize Benefits
              </h2>
              <p className="text-sm text-[#D6AE7D] mt-2">
                 Includes mock interviews with industry experts.  
                 Exclusive mentorship from top professionals.  
                 Certificate of Excellence & Internship Offers.
              </p>

              <button
                className="mt-4 px-4 py-2 bg-black text-sm text-white rounded-3xl"
                onClick={() => setShowDetails(false)}
              >
                Go Back
              </button>
            </div>

            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export function PrizesCard3() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-[300px] h-[400px] m-auto my-8 sm:my-10 relative perspective-1000">
      <AnimatePresence mode="wait">
        {!showDetails && (
          <motion.div
            key="front"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-[#022E51] text-white p-6 rounded-3xl shadow-[0_0_20px_1px_#FAD000] overflow-hidden flex flex-col justify-between"
          >
          
            <div className="absolute top-[-300px] left-[-50px] w-[400px] h-[500px] bg-[#1A93A5] rounded-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-[23px] sm:text-[25px] font-extrabold text-[#D6AE7D]">
                 Third Prize
              </h2>
              <p className="text-xl sm:text-2xl mt-3 leading-none font-bold text-[#D6AE7D]">
                INR
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#D6AE7D]">
                5000
              </p>

              <p className="text-[#D6AE7D] mt-[80px] md:mt-[60px] w-[200px] text-sm ">
                One-way system drives, mock interviews with unlimited practice by Interview Buddyy.
                
              </p>

              <button
                className="mt-2 px-2 py-1 w-[100px] h-[30px] bg-black text-sm text-white rounded-3xl"
                onClick={() => setShowDetails(true)}
              >
                Read more
              </button>
            </div>
            <Image
              src={img3}
              alt="THIRD Prize"
              className="absolute bottom-0 right-0 w-[95px] z-10"
            />
          </motion.div>
        )}

        {showDetails && (
          <motion.div
            key="back"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-[#022E51] text-white p-6 rounded-3xl shadow-[0_0_20px_1px_#FAD000] overflow-hidden flex flex-col justify-between"
          >
            
            <div className="absolute top-[-300px] left-[-50px] w-[400px] h-[500px] bg-[#1A93A5] rounded-full z-0"></div>

            <div className="relative z-10">
              <h2 className="text-[23px] sm:text-[25px] font-extrabold text-[#D6AE7D]">
                Prize Benefits
              </h2>
              <p className="text-sm text-[#D6AE7D] mt-2">
                 Includes mock interviews with industry experts.  
                 Exclusive mentorship from top professionals.  
                 Certificate of Excellence & Internship Offers.
              </p>

              <button
                className="mt-4 px-4 py-2 bg-black text-sm text-white rounded-3xl"
                onClick={() => setShowDetails(false)}
              >
                Go Back
              </button>
            </div>

            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function PrizesCard4({title}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="w-[300px] h-[400px] m-auto my-8 sm:my-10 relative perspective-1000">
      <AnimatePresence mode="wait">
        {!showDetails && (
          <motion.div
            key="front"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-[#022E51] text-white p-6 rounded-3xl shadow-[0_0_20px_1px_#FAD000] overflow-hidden flex flex-col justify-between"
          >
          
            <div className="absolute top-[-300px] left-[-50px] w-[400px] h-[500px] bg-[#1A93A5] rounded-full z-0"></div>
            <div className="relative z-10">
              <h2 className="text-[20px] sm:text-[23px] font-extrabold text-[#D6AE7D]">
                {title}
              </h2>
              <p className="text-xl sm:text-2xl mt-3 leading-none font-bold text-[#D6AE7D]">
                INR
              </p>
              <p className="text-2xl sm:text-3xl font-extrabold text-[#D6AE7D]">
                3000
              </p>
               <div className="text-center mt-[80px] md:mt-[70px] flex flex-col items-center">
              <p className="text-[#D6AE7D]  text-sm ">
                One-way system drives, mock interviews with unlimited practice by Interview Buddyy.
              </p>

              <button
                className=" mt-2 px-2 py-1 w-[100px] h-[30px] bg-black text-sm text-white rounded-3xl"
                onClick={() => setShowDetails(true)}
              >
                Read more
              </button>
              </div>
            </div>
            <Image
              src={img4}
              alt="First Prize"
              className="absolute top-10 right-0 w-[130px] z-10"
            />
          </motion.div>
        )}

        {showDetails && (
          <motion.div
            key="back"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: -90, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full bg-[#022E51] text-white p-6 rounded-3xl shadow-[0_0_20px_1px_#FAD000] overflow-hidden flex flex-col justify-between"
          >
            
            <div className="absolute top-[-300px] left-[-50px] w-[400px] h-[500px] bg-[#1A93A5] rounded-full z-0"></div>

            <div className="relative z-10">
              <h2 className="text-[23px] sm:text-[25px] font-extrabold text-[#D6AE7D]">
                Prize Benefits
              </h2>
              <p className="text-sm text-[#D6AE7D] mt-2">
                 Includes mock interviews with industry experts.  
                 Exclusive mentorship from top professionals.  
                 Certificate of Excellence & Internship Offers.
              </p>

              <button
                className="mt-4 px-4 py-2 bg-black text-sm text-white rounded-3xl"
                onClick={() => setShowDetails(false)}
              >
                Go Back
              </button>
            </div>

            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}