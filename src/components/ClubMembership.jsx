import Heading from "@/common/Heading";
import { CLUB_MEMNERSHIP_LIST } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ClubMembership = () => {
  return (
    <div className="relative pb-[102px] max-lg:pb-[127px] max-md:pb-[50px] max-w-[1920px] mx-auto">
      <Image
        width={1920}
        height={147}
        className="w-full absolute 2xl:-top-[10%] top-[-8%] max-xl:-top-[3%] z-10 max-lg:top-[-2%]"
        src="/assets/images/sunset-club-top-layer.webp"
        alt="layer"
      />
      <div className="max-lg:max-w-[770px] mx-auto pt-[97px] max-lg:pt-[70px] max-md:pt-[34px] px-5">
        <p className="text-xl leading-204 pb-5 text-white uppercase text-center max-md:text-base max-md:pb-3">
          Community + Funding + Sunset
        </p>
        <Heading
          myClass="text-white text-center"
          text="SUNSET CLUB MEMBERSHIP PERKS"
        />
      </div>
      <div className="pt-[125px] flex items-center gap-7 max-xl:gap-6 max-w-[1440px] mx-auto max-xl:flex-wrap max-xl:justify-center max-xl:px-8 max-xl:pt-[25px] max-md:px-4">
        <Image
          width={892}
          height={446}
          className="max-xl:max-w-[770px] max-xl:w-full"
          src="/assets/images/clubhouse.webp"
          alt="club house"
        />
        <div className="max-md:hidden flex flex-wrap w-4/12 gap-[7px] max-xl:gap-2.5 max-xl:w-10/12 max-xl:items-center max-xl:justify-center">
          {CLUB_MEMNERSHIP_LIST.map((obj, i) => (
            <div
              key={i}
              className="w-full max-w-[181.89px] max-xl:max-w-[278.46px] min-h-[200.55px] max-xl:min-h-[307px] bg-[url(/assets/images/membership-card-bg-white.webp)] hover:bg-[url(/assets/images/membership-card-bg-orange.webp)] duration-300 ease-linear bg-cover bg-center flex flex-col justify-center items-center hover:text-white"
            >
              <div className="w-full max-w-[135.14px] mx-auto flex items-center justify-cente flex-col max-xl:max-w-[207px]">
                <Image
                  width={48}
                  height={49}
                  className="max-w-12"
                  src={obj.icon}
                  alt="icons"
                />
                <p className="text-center text-xs leading-204 pt-[18px] max-xl:text-base">
                  {obj.title}
                </p>
                <p className="opacity-70 text-6 text-center pt-1 leading-204 max-xl:text-[10px]">
                  {obj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Swiper
          spaceBetween={24}
          slidesPerView={1.2}
          pagination={true}
          modules={[Pagination]}
          className="mySwiper md:!hidden !pb-9"
        >
          {CLUB_MEMNERSHIP_LIST.map((obj, i) => (
            <SwiperSlide
              key={i}
              className="w-full max-w-[278.46px] mx-auto min-h-[307px] bg-[url(/assets/images/membership-card-bg-white.webp)] hover:bg-[url(/assets/images/membership-card-bg-orange.webp)] duration-300 ease-linear bg-cover bg-center !flex !flex-col !justify-center !items-center hover:text-white"
            >
              <div className="w-full mx-auto flex items-center justify-cente flex-col max-w-[207px]">
                <Image
                  width={48}
                  height={49}
                  className="max-w-12"
                  src={obj.icon}
                  alt="icons"
                />
                <p className="text-center leading-204 pt-[18px] text-base">
                  {obj.title}
                </p>
                <p className="opacity-70 text-center pt-1 leading-204 text-[10px]">
                  {obj.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ClubMembership;
