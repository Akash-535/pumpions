import Description from "@/common/Description";
import Heading from "@/common/Heading";
import Image from "next/image";
import React from "react";

const MeetPumpions = () => {
  return (
    <div
      id="about"
      className="max-w-[1140px] mx-auto pt-[150px] max-xl:pt-32 max-lg:pt-[101px] max-md:pt-5 pb-11 max-lg:pb-[84px] max-md:pb-[42px] flex justify-center items-center max-lg:px-8 max-md:px-4"
    >
      <div className="w-full min-h-[333px] relative z-[1] flex items-center justify-center max-lg:min-h-[318px] max-md:min-h-[530px]">
        <Image
          width={9999}
          height={333}
          src="/assets/images/meet-pumpions-bg.webp"
          alt="img bg"
          className="absolute min-h-[333px] w-full max-lg:min-h-[318px] max-md:min-h-[530px]"
        />
        <div className="max-w-[1046px] w-full mx-auto text-center text-white relative z-10 px-3 max-md:px-[18px] max-md:pb-6 max-md:pt-[26px]">
          <Heading
            myClass="pb-2.5 max-lg:pb-1.5 max-lg:text-2xl max-md:text-xl max-md:leading-136 max-md:pb-[11px]"
            text="MEET THE PUMPIONS"
          />
          <Description text="They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership, exclusive merch, allowlists, giveaways, raffles and  contributes to supporting artists & animations studios all over the world." />
        </div>
      </div>
    </div>
  );
};

export default MeetPumpions;
