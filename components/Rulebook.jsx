import { Iceland } from 'next/font/google';
import React from 'react';

const Iceland_font = Iceland({
    weight: "400",
    style: "normal",
    subsets: ['latin']
});

const Rulebook = () => {
    return (
        <div className="relative flex items-center justify-center h-52">
            <div className="absolute inset-0 bg-wood-plank bg-no-repeat bg-center bg-contain"></div>
            <div
                className={`${Iceland_font.className} relative z-10 text-[rgba(255, 255, 255, 0.71)] text-4xl md:text-6xl lg:text-7xl tracking-widest`}
            >
                RULEBOOK
            </div>
        </div>
    );
}

export default Rulebook;