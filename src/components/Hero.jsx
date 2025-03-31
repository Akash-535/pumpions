import CustomButton from "@/common/CustomButton";
import Header from "@/common/Header";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="max-xl:px-8 max-md:px-4 pt-[30px] max-lg:pt-5 xl:min-h-[853px] min-h-screen bg-[url('/assets/images/hero-bg.webp')] bg-cover bg-center bg-no-repeat relative min-h-[854px] overflow-hidden max-w-[1920px] mx-auto max-md:min-h-[400px]">
      <Header />
      <Image
        width={166.34}
        height={85}
        className="absolute left-5 top-[17%] max-xl:-left-20 max-xl:top-[15%] pointer-events-none max-lg:left-[-11%] max-lg:top-[15%] max-md:-left-[30%] max-md:top-[13%]"
        src="/assets/images/cloud.webp"
        alt="cloud img"
      />
      <Image
        width={152.65}
        height={78}
        className="absolute right-5 top-[15%] max-xl:top-[17%] max-xl:-right-5 pointer-events-none max-lg:right-0 max-lg:h-14 max-lg:w-[108px] max-md:-right-[15%]"
        src="/assets/images/cloud.webp"
        alt="cloud img"
      />
      <div
        id="home"
        className="flex flex-col justify-center w-full items-center pt-[71px] max-md:pt-10"
      >
        <Image
          width={890}
          height={225.72}
          className="max-lg:max-w-[612px] max-lg:w-full max-md:max-w-[282px] pointer-events-none"
          src="/assets/images/pumpions-heading-text.webp"
          alt="heading text"
        />
        <p className="text-xl leading-229 uppercase pt-[26.28px] max-lg:pt-[18.28px] text-center max-md:max-w-[225px] max-md:mx-auto max-md:text-sm">
          Own, support & celebrate art.
        </p>
        <CustomButton
          myClass="mt-[75px] max-lg:mt-[58px] max-md:mt-[38px]"
          text="GET STARTED"
          textTwo="GET STARTED"
        />
      </div>
    </div>
  );
};

export default Hero;
