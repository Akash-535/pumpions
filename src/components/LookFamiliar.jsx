import Heading from "@/common/Heading";
import {
  LOOK_FAMILIAR_BOTTOM_LIST,
  LOOK_FAMILIAR_TOP_LIST,
} from "@/utils/helper";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const LookFamiliar = () => {
  return (
    <div className="min-h-[1105px] bg-[url(/assets/images/familier-bg.webp)] bg-cover bg-bottom bg-no-repeat flex items-center justify-end pb-[158.8px] flex-col max-lg:pb-[148px] max-md:justify-center max-lg:min-h-screen max-md:pb-[68px] overflow-hidden">
      <div className="pb-[102px] max-lg:max-w-[770px] mx-auto max-lg:pb-[85px] pt-16 max-md:pb-12">
        <p className="text-xl leading-204 pb-5 text-white uppercase text-center max-md:text-base max-md:pb-3">
          PEAK AT THE SUNSET
        </p>
        <Heading
          myClass="text-center text-white"
          text="THEY SURE LOOK FAMILIAR "
        />
      </div>
      <div className="max-w-[1920px] mx-auto flex flex-col gap-[28.8px]">
        <Marquee>
          {LOOK_FAMILIAR_TOP_LIST.map((obj, i) => (
            <Image
              key={i}
              width={175.14}
              height={193.2}
              className="ml-[26px] max-md:max-w-[107.13px] max-md:w-full max-md:ml-4"
              src={obj}
              alt="img"
            />
          ))}
        </Marquee>
        <Marquee direction="right">
          {LOOK_FAMILIAR_BOTTOM_LIST.map((obj, i) => (
            <Image
              key={i}
              width={175.14}
              height={193.2}
              className="ml-[26px] max-md:max-w-[107.13px] max-md:w-full max-md:ml-4"
              src={obj}
              alt="img"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default LookFamiliar;
