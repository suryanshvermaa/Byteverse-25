import { Grid2 } from "@mui/material";
import Image from "next/image";

const ThemesMainCard = ({ data }) => {
  return (
    <Grid2
      container
      className="w-full p-5 max-lg:p-5 rounded-xl bg-[rgba(255,255,255,0.08)] justify-evenly"
      // columnGap={{ xs: 0, lg: 10 }}
    >
      {data?.map((item, index) => (
        <Grid2
          container
          size={{ xs: 11.5, lg: 5 }}
          key={index}
          className="hover:bg-cyan-600/40 transform transition duration-500 
                                hover:scale-110 rounded-lg p-2"
          sx={{
            borderRadius: {
              xs: "15px",
            },
            marginTop: {
              xs: "10px",
              lg: `${index % 2 === 0 ? "0px" : "100px"} `,
            },
            marginBottom: {
              sm: "10px",
              lg: `${index % 2 === 0 ? "100px" : "0px"}`,
            },
          }}
        >
          <Grid2 className="" size={{ xs: 2.5, lg: 3, xl: 3.5 }}>
            <Grid2 className=" max-lg:text-[70px] lg:text-[100px] xl:text-[120px]  2xl:text-[160px] text-center font-bold h-1/2 text-[#63DAFC] leading-none">
              {item.id}
            </Grid2>
          </Grid2>
          <Grid2
            container
            size={{ xs: 9.5, lg: 9, xl: 8.5 }}
            direction={"column"}
            rowSpacing={{ sm: 2, lg: 1 }}
          >
            <Grid2 className="text-[28px] xl:text-[38px]  2xl:text-[48px] font-bold uppercase text-[#FFD700]">
              {item.topic}
            </Grid2>
            <Grid2 container>
              <Grid2
                size={{ xs: 6, lg: 7 }}
                className="lg:text-lg leading-tight pl-2 lg:pl-4"
              >
                {item.description}
              </Grid2>
              <Grid2 size={{ xs: 6, lg: 5 }}>
                <Image src={item.src} alt="" height={220} width={220} />
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ThemesMainCard;
