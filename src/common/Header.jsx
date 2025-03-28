import { HEADER_LIST, MEDIA_ICONS_LIST } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);
  return (
    <div className="max-w-[1140px] max-xl:max-w-[900px] max-lg:max-w-[770px] w-full min-h-[76.19px] flex justify-center items-center py-3.5 px-16 mx-auto max-md:min-h-[45px] relative overflow-hidden max-xl:px-10 max-md:px-6">
      <Image
        width={10000}
        height={76.19}
        className="min-h-[76.19px] absolute w-full max-md:min-h-[56px]"
        src="/assets/images/header-bg.webp"
        alt="header img"
      />
      <div className="flex w-full items-center justify-between sticky z-10">
        <div className="flex items-center gap-4">
          <Link href="#">
            <Image
              width={41}
              height={47.83}
              className="max-w-[41px] max-md:w-full max-md:max-w-[27px]"
              src="/assets/images/pumpions-logo.webp"
              alt="pumpions logo"
            />
          </Link>
          <div
            className={`flex items-center gap-8 max-lg:flex-col max-lg:justify-center max-lg:fixed max-lg:w-full max-lg:top-0 max-lg:h-full max-lg:bg-dark-blue-v1 duration-300 ease-linear max-md:z-10 ${
              open ? "max-lg:right-0" : "max-lg:-right-full"
            }`}
          >
            {HEADER_LIST.map((obj, i) => (
              <Link
                onClick={() => setOpen(false)}
                key={i}
                href={obj.link}
                className="relative pb-0.5 leading-130 font-normal text-base uppercase after:absolute after:content-'' after:h-[5px] after:-bottom-0.5 after:left-0 after:bg-yellow-v1 after:w-0 hover:after:w-full after:duration-300 after:ease-linear "
              >
                {obj.title}
              </Link>
            ))}
            <div className="flex gap-[11px] items-center md:hidden">
              {MEDIA_ICONS_LIST.map((obj, i) => (
                <Link
                  key={i}
                  onClick={() => setOpen(false)}
                  href={obj.link}
                  target="_blank"
                  className="hover:-translate-y-1 duration-300 ease-linear media-md-icon"
                >
                  {obj.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex max-lg:gap-[30px]">
          <div className="flex gap-[11px] items-center max-md:hidden">
            {MEDIA_ICONS_LIST.map((obj, i) => (
              <Link
                key={i}
                href={obj.link}
                className="hover:-translate-y-1 duration-300 ease-linear"
              >
                {obj.icon}
              </Link>
            ))}
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="flex flex-col gap-1.5 justify-center items-end cursor-pointer lg:hidden relative z-20"
          >
            <span
              className={`w-[42.75px] bg-black h-1.5 duration-300 ease-linear ${
                open ? " rotate-45 translate-y-[11px]" : ""
              }`}
            ></span>
            <span
              className={`w-[42.75px] bg-black h-1.5 duration-300 ease-linear ${
                open && "translate-x-4 opacity-0"
              } `}
            ></span>
            <span
              className={`w-[21.35px] bg-black h-1.5 duration-300 ease-linear ${
                open ? "-rotate-45 -translate-y-3 w-[42.75px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
