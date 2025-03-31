import Description from "@/common/Description";
import Heading from "@/common/Heading";
import Image from "next/image";
import React from "react";

const PumpMap = () => {
  return (
    <div className="pb-[183px] max-lg:pb-[130px] max-md:pb-[66px] max-w-[1164px] mx-auto max-xl:px-6 max-lg:px-4 flex items-center justify-between flex-wrap-reverse max-xl:justify-center max-xl:gap-14 max-md:gap-12">
      <div className="w-full max-w-[407.36px] min-h-[374px] flex items-center justify-center overflow-hidden max-md:min-h-[306px]">
        <Image
          width={407.36}
          height={374}
          className="absolute w-full h-full max-w-[407.36px] max-h-[374px] max-sm:max-w-[333px] max-sm:min-h-[306px] max-sm:max-h-[306px]"
          src="/assets/images/pumpmap-img-bg.webp"
          alt="pumpmap bg"
        />
        <Image
          width={387.5}
          height={345}
          className="pointer-events-none max-w-[387px] w-full relative z-10 max-sm:max-w-[293px] max-sm:min-h-[263px]"
          src="/assets/images/pumpmap-img.webp"
          alt="pumpmap img"
        />
      </div>
      <div className="text-white max-w-[699px] max-xl:mx-auto max-xl:text-center">
        <Heading text="PUMPMAP" />
        <Description
          myClass="pt-4 max-md:pt-[25px]"
          text="We want to avoid overpromising from the get go. For that, we are approaching roadmaps slightly differently. Pumpions will continue to evolve overtime as a brand and move closer to its biggest goal. To empower individuals with art."
        />
        <Description
          myClass="pt-4 max-md:pt-[30px]"
          text="By owning a Pumpion you will have access to a vibrant, positive, and rewarding community, meet like-minded and kind human beings, and most importantly, you will be supporting and celebrating the next generation of artists and animations studios."
        />
      </div>
    </div>
  );
};

export default PumpMap;
