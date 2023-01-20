"use client";

import Image from "next/image";
// import { m } from "../components/Motion";
import { m } from "framer-motion"

// images
import hero from "../public/img/kody-flying_red.webp";

// components

// data
import {
  FADE_UP_ANIMATION_VARIANTS,
  SHRINK_ANIMATION_VARIANTS,
} from "@/data/index";

export default function Home() {
  return (
    <>
      <header className="min-h-screen">
        {/* animate structure within */}
        <m.div
          initial="hidden"
          whileInView="show"
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
              {/* fade in and shrink */}
              <m.div variants={SHRINK_ANIMATION_VARIANTS}>
                <Image
                  alt="Illustration of Kody the Koala standing on a snowboard surrounded by green leaves, a battery, two skies, a one-wheel, a solar panel, and a recycle logo."
                  src={hero}
                  className="object-contain max-h-[35vh]"
                  priority
                />
              </m.div>
            </div>
            <div className="basis-1/2">
              {/* fade in and slide up */}
              <m.div variants={FADE_UP_ANIMATION_VARIANTS}>
                <h2 className="text-xl leading-tight text-gray-900 sm:text-3xl md:text-4xl dark:text-gray-100">
                  Helping people make the world a better place through quality
                  software.
                </h2>
              </m.div>
              {/* fade in and slide up */}
              <m.div
                className="flex flex-col mt-6 space-y-4 sm:mt-14"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                <div className="flex flex-col gap-4 mr-auto">
                  <a
                    className="relative inline-flex text-lg font-medium transition opacity-100 group focus:outline-none disabled:opacity-50"
                    href="/blog"
                  >
                    <div className="absolute inset-0 transition transform border-2 rounded-full opacity-100 focus-ring disabled:opacity-50 bg-inverse bg-slate-800 dark:bg-white group-hover:bg-transparent"></div>
                    <div className="relative flex items-center justify-center px-12 py-2 text-white sm:py-4 whitespace-nowrap text-inverse group-hover:dark:text-white dark:text-black">
                      Read the blog
                    </div>
                  </a>
                  <a
                    className="relative inline-flex text-lg font-medium transition opacity-100 group focus:outline-none disabled:opacity-50"
                    href="/courses"
                  >
                    <div className="absolute inset-0 transition transform border-2 rounded-full opacity-100 focus-ring border-secondary bg-primary group-hover:border-transparent group-hover:bg-white group-focus:border-transparent"></div>
                    <div className="relative flex items-center justify-center px-12 py-2 sm:py-4 whitespace-nowrap text-primary dark:text-white group-hover:text-black">
                      Take a course
                    </div>
                  </a>
                </div>
              </m.div>
            </div>
          </div>
          {/* fade in and slide up */}
          <m.div
            className="hidden pt-12 lg:block"
            variants={FADE_UP_ANIMATION_VARIANTS}
          >
            <a
              className="inline-flex items-center text-lg font-medium text-left transition-colors cursor-pointer text-primary focus:outline-none group"
              href="/#intro"
            >
              <div className="relative inline-flex items-center justify-center flex-none p-1 h-14 w-14">
                <div className="absolute text-gray-200 dark:text-gray-600">
                  <svg width="60" height="60">
                    <circle
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      r="18"
                      cx="30"
                      cy="30"
                    ></circle>
                    <circle
                      className="group-hover:dark:text-gray-200 text-primary"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="transparent"
                      r="18"
                      cx="30"
                      cy="30"
                    ></circle>
                  </svg>
                </div>
                <svg
                  className="mt-3 w-7 h-7 animate-bounce dark:text-gray-400 group-hover:dark:text-gray-200"
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
              </div>
              <span className="ml-4 text-xl font-medium dark:text-gray-400 group-hover:dark:text-gray-200">
                Learn more about Kent
              </span>
            </a>
          </m.div>
        </m.div>
      </header>
    </>
  );
}
