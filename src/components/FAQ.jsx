import { PlusIcon } from "@/utils/icons";
import React, { useState } from "react";

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const FaqHandler = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className="max-w-[1920px] mx-auto bg-[url(/assets/images/faq-bg.webp)] bg-cover bg-center bg-no-repeat lg:min-h-[942px] flex flex-col justify-center items-center lg:-mt-16 max-lg:mt-[53px] max-md:mt-[68px] max-lg:pt-[97px] max-lg:pb-[168px] max-md:pb-[49px] max-md:pt-[37px]">
      <h2 className="text-32 text-white leading-202 uppercase text-center max-md:text-2xl pb-[46px] max-lg:pb-[50px] max-md:pb-[15px]">
        Faq
      </h2>
      <div className="w-full flex flex-col gap-6 items-center max-w-[735px] max-md:gap-2.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-full bg-[url(/assets/images/faq-content-bg.webp)] bg-cover bg-no-repeat bg-center pt-[15px] pb-2 px-[31px] max-md:px-[15px] max-md:pt-[7px] max-md:pb-1 flex items-center justify-center flex-col max-w-[735px] max-md:max-w-[343px]"
          >
            <div
              onClick={() => FaqHandler(i)}
              className="flex w-full items-center justify-between cursor-pointer max-md:text-[9px] pb-[7px] max-md:pb-[3px]"
            >
              Aliquam eget libero vitae velit?{" "}
              <span
                className={`size-[41px] max-md:size-[19.13px] rounded-full flex items-center justify-center bg-gradient-to-b from-orange-v1 to-orange-v2 duration-300 ease-linear faq-icon ${
                  open === i ? "rotate-180" : "rotate-0"
                } `}
              >
                {open === i ? (
                  <span className="w-[21px] h-1 bg-white rounded max-md:w-[7.31px] max-md:h-0.5"></span>
                ) : (
                  <PlusIcon />
                )}
              </span>
            </div>
            <div
              className={`duration-500 ease-linear overflow-hidden ${
                open === i
                  ? "max-h-[90px] h-full min-h-[90px] max-md:pb-2 max-md:min-h-9"
                  : "max-h-0 min-h-0"
              }`}
            >
              <p className="text-sm max-md:text-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo iusto iste tempora qui temporibus nobis dignissimos
                exercitationem commodi soluta aperiam!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
