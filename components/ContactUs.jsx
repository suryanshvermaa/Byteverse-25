import React from 'react';
import { Krona_One } from 'next/font/google';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const kronaOne = Krona_One({
    weight: '400',
    subsets: ['latin'],
    style: 'normal'
})

const ContactUs = () => {
    const placeholderClassname = `p-3 border-b-2 border-gray-800 bg-transparent  placeholder-gray-800 text-lg outline-none ${kronaOne.className}`;

    return (
        <div className={kronaOne.className}>
            {/* Title Section */}
            <div className="w-full max-w-3xl ml-auto border-b-4 border-cyan-500 pb-2 text-center md:text-left">
                <h1 className="text-4xl lg:text-5xl font-semibold">Contact <span className="text-cyan-500">Us</span></h1>
            </div>

            <div className="flex flex-col items-center px-6 py-12 text-white relative">
                <div className="flex flex-col lg:flex-row lg:items-start items-center justify-between w-full max-w-6xl gap-10">
                    {/* Contact Details Section */}
                    <div className="flex flex-col items-start bg-opacity-20 backdrop-blur-md border-2 border-cyan-500 rounded-2xl p-4 sm:p-6 w-full lg:w-2/5 shadow-lg">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-4"></h2>
                        <div className="text-xs sm:text-sm md:text-base font-medium mb-4 sm:mb-6 leading-relaxed">
                           National Institute of Technology Patna,Bihta Campus , Kateshar,Bihta, Bihar 801103.
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                            <FaPhone className="text-sm sm:text-lg md:text-xl font-semibold" />
                            <div className="text-xs sm:text-sm md:text-base font-medium">+91 6398098155</div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <FaEnvelope className="text-sm sm:text-lg md:text-xl font-semibold" />
                            <div className="text-xs sm:text-sm md:text-base font-medium">hackslashclub@nitp.ac.in</div>
                        </div>
                    </div>



                    {/* Get In Touch Section */}
                    <div className="relative w-full lg:w-3/5 bg-opacity-40 backdrop-blur-md border-2 border-cyan-500 rounded-2xl p-8 shadow-lg bg-cyan-500">
                        <div className="absolute inset-0 bg-anchor-pattern bg-no-repeat bg-center opacity-20 bg-contain "></div>

                        {/* Form Content */}
                        <div className="relative z-10 text-white">
                            <h2 className="text-2xl font-semibold mb-6 text-center">Get in <span className='text-gray-400'>Touch</span></h2>
                            <form className="flex flex-col gap-6">
                                <input
                                    type="text" placeholder='Name' className={placeholderClassname} />
                                <input
                                    type="email" placeholder='E-mail' className={placeholderClassname} />
                                <textarea
                                    placeholder='Type Message Here' rows="3" className={placeholderClassname}></textarea>
                                <button type="submit" className="bg-transparent border-2 border-gray-800 rounded-2xl text-white py-2 px-6 mx-auto font-semibold hover:bg-cyan-600 hover:text-gray-900 transition">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
