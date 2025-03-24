import { Iceland } from "next/font/google";

const Iceland_font = Iceland({
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

const Timeline = () => {
    const timelineEvents = [
        { title: "Hackathon Registration Opens", date: "1st March, 2025", imgSrc: "/timeline/timeline1.webp" },
        { title: "Info Session", date: "1st April, 2025", imgSrc: "/timeline/timeline2.webp" },
        { title: "PPT Submission Commences", date: "2nd April, 2025", imgSrc: "/timeline/timeline3.webp" },
        { title: "PPT Submission Deadline", date: "9th April, 2025", imgSrc: "/timeline/timeline4.webp" },
        { title: "Inauguration Ceremony", date: "10th April, 2025", imgSrc: "/timeline/timeline5.webp" },
        { title: "Presentation Round", date: "10th April, 2025", imgSrc: "/timeline/timeline6.webp" },
        { title: "Hackathon Registration Closes", date: "11th April, 2025", imgSrc: "/timeline/timeline7.webp" },
        { title: "Hackathon Commences", date: "12th April, 2025", imgSrc: "/timeline/timeline8.webp" },
        { title: "Mid Evaluation", date: "13th April, 2025", imgSrc: "/timeline/timeline9.webp" },
        { title: "Hackathon Concludes", date: "13th April, 2025", imgSrc: "/timeline/timeline10.webp" },
        { title: "Result Declaration", date: "14th April, 2025", imgSrc: "/timeline/timeline11.webp" },
    ];

    return (
        <div className={`${Iceland_font.className} py-20 overflow-hidden`}>
            
            <div className="flex items-center text-center">
                <span className="flex-1 border-t-4 rounded-md border-[#E5C701]"></span>
                <span className="text-white text-3xl md:text-4xl lg:text-5xl mx-8 md:mx-10 lg:12px">TIMELINE</span>
                <span className="flex-1 border-t-4 rounded-md border-[#E5C701]"></span>
            </div>

            <div className="flex justify-center items-start">
                <div className="flex flex-col w-5 sm:w-6 md:w-8 lg:w-10 rounded-full border-2 md:border-4 lg:border-4 border-[#E5C701] bg-[#57A1C1] gap-28 justify-center items-center mt-20">
                    {timelineEvents.map((event, index) => (
                        <div 
                            key={index} 
                            className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                        >

                            <img 
                                src="/timeline/timeline.webp"
                                width={64} 
                                alt={event.title} 
                            />

                            <div 
                                className="absolute top-1/2 w-auto flex items-center transform -translate-y-1/2"
                                style={{
                                    left: index % 2 === 0 ? "100%" : "auto",
                                    right: index % 2 !== 0 ? "100%" : "auto",
                                }}
                            >
                                {index % 2 !== 0 ? (
                                    <>
                                        <div className="absolute left-[-260px] sm:left-[-280px] text-end break-words whitespace-normal w-64 mt-[18px]">
                                            <div className="flex flex-row gap-2 items-center justify-end">
                                            <img src={event.imgSrc} width={18} className="hidden sm:flex"></img>
                                            <span className="text-white text-sm sm:text-base lg:text-xl  ">{event.title}</span>
                                            </div>
                                            <div>
                                                <span className="text-white text-xs sm:text-sm lg:text-base mt-1">- {event.date}</span>
                                            </div>
                                        </div>

                                        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#E5C701] rounded-full"></span>

                                        <span className=" w-[40px] sm:w-[50px] md:w-[90px] lg:w-[160px] xl:w-[240px] 2xl:[300px] h-1 bg-[#E5C701]"></span>
                                    </>
                                ) : (
                                    <>
                                        <span className="w-[40px] sm:w-[50px] md:w-[90px] lg:w-[160px] xl:w-[240px] 2xl:[300px] h-1 bg-[#E5C701]"></span>

                                        <span className="w-3 h-3 sm:w-4 sm:h-4 bg-[#E5C701] rounded-full"></span>

                                        <div className="absolute right-[-390px] sm:right-[-400px] text-left w-96 mt-[18px] sm:mt-[25px]">
                                            <div className="flex flex-row gap-2 items-center justify-start">
                                              <span className="text-white text-sm sm:text-base lg:text-xl">{event.title}</span>
                                              <img src={event.imgSrc} width={18} className="hidden sm:flex"></img>
                                            </div>
                                            <span className="text-white text-xs sm:text-sm lg:text-base block mt-1">- {event.date}</span>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
