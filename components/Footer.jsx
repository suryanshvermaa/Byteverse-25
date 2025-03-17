"use client";
import React from "react";
import { FaDiscord, FaCopy } from "react-icons/fa6";
import { BsQrCodeScan } from "react-icons/bs";
import { Krona_One } from "next/font/google"
import Image from "next/image";
import { Instagram, LinkedIn, Twitter, YouTube } from "@mui/icons-material";

const kronaOne = Krona_One({
    weight: '400',
    subsets: ['latin'],
    style: 'normal'
})

const Footer = () => {
    return (
        <div className="p-8 md:p-12 lg:mx-16">
            {/* Footer Section */}
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                {/* Left Section */}
                <div className="flex flex-col items-center md:items-start">
                    <div className="flex items-center gap-4">
                        <Image src="/logos/NitPlogo.png" alt="NIT Patna Logo" width={70} height={70} />
                        <p className={`${kronaOne.className} text-sm leading-5`}>
                            NATIONAL INSTITUTE OF TECHNOLOGY <br /> PATNA/BIHTA - BIHAR 800005.
                        </p>
                    </div>
                    <div className="flex gap-10 mt-4">
                        <a href="https://www.instagram.com/byteverse.nitp/" target="_blank" rel="noopener noreferrer">
                            <Instagram/>
                        </a>
                        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                            <Twitter/>
                        </a>
                        <a href="https://www.linkedin.com/company/hackslash/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                            <LinkedIn/>
                        </a>
                        <a href="https://www.youtube.com/@HackSlashDevelopersClub" target="_blank" rel="noopener noreferrer">
                            <YouTube/>
                        </a>


                    </div>
                </div>

                {/* Center Section */}
                <div className="flex flex-col items-center justify-center">
                    <div className="flex space-x-8">
                        <div className="flex flex-col items-center gap-2">
                            <p className={`${kronaOne.className} font-semibold`}>Host</p>
                            <a href="https://www.instagram.com/hackslash.nitp/" target="_blank" rel="noopener noreferrer"> 
                            <Image src="/logos/hackslashLogo.png" alt="Hackslash" width={100} height={50} />
                            </a>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                            <p className={`${kronaOne.className} font-semibold`}>Design</p>
                            <a href="https://www.instagram.com/desco.nitp/" target="_blank" rel="noopener noreferrer">
                             <Image src="/logos/descoLogo.png" alt="Desco" width={30} height={30} />
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 flex gap-4 items-center">
                        <Image src="/logos/copyright.png" alt="©" width={20} height={20} />
                        <Image src="/logos/byteverse.png" alt="Byteverse" width={100} height={100} />
                        <p className={` ${kronaOne.className} mt-2 text-sm`}>NIT PATNA 2025</p>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-row justify-center md:justify-start lg:justify-end" >
                    <div className="flex flex-col justify-start items-start space-y-3 max-w-fit">
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                            <FaCopy className="text-lg" />
                            <p className={`${kronaOne.className} text-sm`}>Terms & Conditions</p>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                            <FaDiscord className="text-lg" />
                            <p className={`${kronaOne.className} text-sm`}>Join us @Discord</p>
                        </div>
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                            <BsQrCodeScan className="text-lg" />
                            <p className={`${kronaOne.className} text-sm`}>Code of Conduct</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;