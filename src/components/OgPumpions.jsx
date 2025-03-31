import CustomButton from "@/common/CustomButton";
import { OG_PUMPIONS_LIST } from "@/utils/helper";
import { GradientDiscordIcon, GradientTwitterIcon } from "@/utils/icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OgPumpions = () => {
  return (
    <div className="max-w-[1135px] mx-auto flex justify-center items-center flex-col px-4 overflow-hidden">
      <h2 className="text-32 text-white leading-202 uppercase text-center max-md:text-2xl pb-[79px] max-lg:pb-[75px] max-md:pb-[30px]">
        OG PUMPIONS
      </h2>
      <div className="w-full flex items-center justify-between flex-wrap max-lg:gap-11 max-md:hidden">
        {OG_PUMPIONS_LIST.map((obj, i) => (
          <div key={i} className="w-1/3 max-w-[226px]">
            <Image
              width={226}
              height={208}
              className="max-w-[226px]"
              src={obj.image}
              alt="og image"
            />
            <h4 className="text-white pt-[31px] leading-202 uppercase text-center text-2xl font-normal">
              {obj.title}
            </h4>
            <p className="text-white opacity-70 text-base font-normal text-center pb-4 leading-202 uppercase">
              {obj.about}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                target="_blank"
                href="https://discord.com"
                className="hover:-translate-y-1 duration-300 ease-linear"
              >
                <GradientDiscordIcon />
              </Link>
              <Link
                target="_blank"
                href="https://x.com"
                className="hover:-translate-y-1 duration-300 ease-linear"
              >
                <GradientTwitterIcon />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Swiper
        spaceBetween={24}
        slidesPerView={1.5}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper md:!hidden !pb-16 !flex !items-center !justify-between max-lg:!gap-11 max-w-[390px] mx-auto"
      >
        {OG_PUMPIONS_LIST.map((obj, i) => (
          <SwiperSlide key={i} className="w-1/3 max-w-[226px]">
            <Image
              width={226}
              height={208}
              className="max-w-[226px]"
              src={obj.image}
              alt="og image"
            />
            <h4 className="text-white pt-[31px] leading-202 uppercase text-center text-2xl font-normal">
              {obj.title}
            </h4>
            <p className="text-white opacity-70 text-base font-normal text-center pb-4 leading-202 uppercase">
              {obj.about}
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                target="_blank"
                href="https://discord.com"
                className="hover:-translate-y-1 duration-300 ease-linear"
              >
                <GradientDiscordIcon />
              </Link>
              <Link
                target="_blank"
                href="https://x.com"
                className="hover:-translate-y-1 duration-300 ease-linear"
              >
                <GradientTwitterIcon />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <CustomButton
        myClass="mt-[61px] z-[1] max-md:mt-[29px]"
        text="WE ARE HIRING"
        textTwo="WE ARE HIRING"
      />
    </div>
  );
};

export default OgPumpions;
