"use client";
import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ThemesMainCard from "./ThemesMainCard";
import { Button } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import { themeData } from "@/data/Themes";

const items = themeData.map((item, index) => (
  <ThemesMainCard data={item} key={index} />
));

export const ThemesCarousel = () => {
  const carousel = useRef(null);

  return [
    <AliceCarousel
      key="carousel"
      mouseTracking
      disableDotsControls
      disableButtonsControls
      items={items}
      ref={carousel}
    />,
    <nav key="nav" className="b-refs-navs">
      {items.map((item, i) => {
        return <span key={i} onClick={() => carousel?.current?.slideTo(i)} />;
      })}
    </nav>,
    <div
      className="w-full flex justify-center items-center p-3 lg:p-5"
      key="btns"
    >
      <div className="flex justify-around w-1/2">
        <Button
          variant="outlined"
          color="white"
          className="font-bold px-4 py-2 "
          size="large"
          startIcon={<ArrowRightAlt className="transform rotate-180" />}
          onClick={(e) => carousel?.current?.slidePrev(e)}
        >
          Prev
        </Button>
        {
          <Button
            variant="outlined"
            color="white"
            className="font-bold px-4 py-2 "
            size="large"
            endIcon={<ArrowRightAlt />}
            onClick={(e) => {
              carousel?.current?.slideNext(e);
            }}
          >
            Next
          </Button>
        }
      </div>
    </div>,
  ];
};
