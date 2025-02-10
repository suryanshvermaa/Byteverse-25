"use client"
import { Grid2 } from "@mui/material"
import QuestionCard from "./QuestionCard"
import Image from "next/image"

const data=[
    {
        "question":"Question 1",
        "answer":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus tenetur expedita fugit illo commodi odio distinctio dicta, nostrum ipsa, quibusdam quis blanditiis vel. Molestiae reprehenderit iure repudiandae at modi optio?"
    },
    {
        "question":"Question 2",
        "answer":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus tenetur expedita fugit illo commodi odio distinctio dicta, nostrum ipsa, quibusdam quis blanditiis vel. Molestiae reprehenderit iure repudiandae at modi optio?"
    },
    {
        "question":"Question 3",
        "answer":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus tenetur expedita fugit illo commodi odio distinctio dicta, nostrum ipsa, quibusdam quis blanditiis vel. Molestiae reprehenderit iure repudiandae at modi optio?"
    },
    {
        "question":"Question 4",
        "answer":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus tenetur expedita fugit illo commodi odio distinctio dicta, nostrum ipsa, quibusdam quis blanditiis vel. Molestiae reprehenderit iure repudiandae at modi optio?"
    },
    {
        "question":"Question 5",
        "answer":"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus tenetur expedita fugit illo commodi odio distinctio dicta, nostrum ipsa, quibusdam quis blanditiis vel. Molestiae reprehenderit iure repudiandae at modi optio?"
    },
]
export function FAQ () {
  return (
    <div className="py-2">
        <div className="border-b-4 w-full lg:w-1/2 border-cyan-500 text-center mb-4 pb-1">

        <h1 className="text-2xl lg:text-5xl text-white font-semibold">Have Questions?</h1>
        </div>
    <Grid2 container className="flex justify-center items-center w-full   mt-2 ">
        <Grid2 size={{xs:12,lg:6}} >
            
            <Grid2>
                <h1 className="text-lg font-semibold text-center">Get All your questions answered here</h1>
            </Grid2>

            <Grid2 className="max-xl:hidden">
            <Image
              
              src="/jellyFishFAQ1.png"
              alt=""
              width={2000}
              height={2000}
            />
            </Grid2>
        </Grid2>
        <Grid2 container size={{xs:12,lg:6}} className="space-y-2 py-2 max-xl:bg-[url('/jellyFishFAQ1.png')] bg-cover object-top">
                {data.map(item=>(
                    <QuestionCard item={item} key={item.question}/>
                ))}
        </Grid2>
    </Grid2>
    </div>
  )
}

