import { MEDIA_ICONS_LIST_TWO } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[url(/assets/images/footer-bg.webp)] bg-cover bg-no-repeat bg-center lg:pt-[90px] pb-[77px] max-md:pb-[30px] max-w-[1920px] mx-auto">
      <div className="w-full items-center flex justify-center flex-col">
        <Image
          width={322.61}
          height={81}
          className="max-md:max-w-[193px] max-md:w-full max-md:h-[42px]"
          src="/assets/images/pumpions-footer-text.webp"
          alt="footer text"
        />
        <p className="max-w-[425px] mx-auto text-white opacity-70 uppercase text-center text-xs leading-202 max-md:max-w-[198px] max-md:text-[8px]">
          Suspendisse vestibulum a tellus sit amet mattis
        </p>
        <div className="flex gap-[11px] items-center pt-6">
          {MEDIA_ICONS_LIST_TWO.map((obj, i) => (
            <Link
              key={i}
              onClick={() => setOpen(false)}
              href={obj.link}
              target="_blank"
              className="hover:-translate-y-1 duration-300 ease-linear footer-media-icon"
            >
              {obj.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
