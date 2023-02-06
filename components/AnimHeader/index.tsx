"use client";

import Image from "next/image";
import { m } from "framer-motion";

// data
import {
  FADE_UP_ANIMATION_VARIANTS,
  SHRINK_ANIMATION_VARIANTS,
} from "@/data/index";

// // https://github.com/vercel/next.js/issues/29788
// type StaticImageData = {
//   src: string;
//   height: number;
//   width: number;
//   placeholder?: string;
// };

export const AnimHeader = ({
  image,
  text1,
  text2,
}: {
  image: StaticImageData;
  text1: string;
  text2: string;
}) => {
  return (
    <m.div
      initial="hidden"
      // whileInView="show"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <div className="flex flex-col items-center lg:mt-16 lg:flex-row">
        <div className="mb-12 lg:order-last lg:mb-0 basis-1/2">
          <m.div variants={SHRINK_ANIMATION_VARIANTS}>
            <Image
              alt="Illustration of a snowboard"
              src={image}
              className="object-contain"
              priority
            />
          </m.div>
        </div>
        <div className="basis-1/2">
          <m.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h1 className="text-3xl leading-tight text-gray-900 md:text-4xl dark:text-gray-100">
              {text1}
            </h1>
          </m.div>
          <m.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <p className="mt-3 text-xl leading-tight text-gray-400 md:text-2xl dark:text-slate-400">
              {text2}
            </p>
          </m.div>
        </div>
      </div>

      <m.div
        className="hidden pt-12 lg:block"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <a
          className="inline-flex items-center text-lg font-medium text-left transition cursor-pointer text-primary focus:outline-none"
          href="/about#about-me"
        >
          <div className="relative inline-flex items-center justify-center flex-none p-1 h-14 w-14">
            <div className="absolute text-gray-200 dark:text-gray-600">
              <svg width="60" height="60">
                <circle
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  r="28"
                  cx="30"
                  cy="30"
                ></circle>
                <circle
                  className="text-primary"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="transparent"
                  r="28"
                  cx="30"
                  cy="30"
                ></circle>
              </svg>
            </div>
            <span>
              <svg
                className="transform rotate-0"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.101 5.5V23.1094L9.40108 17.4095L8.14807 18.6619L15.9862 26.5L23.852 18.6342L22.5996 17.3817L16.8725 23.1094V5.5H15.101Z"
                  fill="currentColor"
                ></path>
              </svg>
            </span>
          </div>
          <span className="ml-8 text-xl font-medium">
            Get to know more about me
          </span>
        </a>
      </m.div>
    </m.div>
  );
};
