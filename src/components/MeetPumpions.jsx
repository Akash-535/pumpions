import Description from "@/common/Description";
import Heading from "@/common/Heading";
import React from "react";

const MeetPumpions = () => {
  return (
    <div className="max-w-[1140px] mx-auto pt-[150px] pb-11 flex justify-center items-center">
      <div className="bg-[url(/assets/images/meet-pumpions-bg.webp)] bg-cover bg-no-repeat bg-center w-full min-h-[333px] flex items-center justify-center">
        <div className="max-w-[1046px] w-full mx-auto text-center text-white">
          <Heading myClass="pb-2.5" text="MEET THE PUMPIONS" />
          <Description text="They’re an exclusive collection of 1,000 utility-enabled (& weirdly familiar) PFPs. Each Pumpion unlocks a sunset club membership, exclusive merch, allowlists, giveaways, raffles and  contributes to supporting artists & animations studios all over the world." />
        </div>
      </div>
    </div>
  );
};

export default MeetPumpions;
