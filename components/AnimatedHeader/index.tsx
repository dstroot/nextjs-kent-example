"use client"; // necessary for motion to work

import Image from "next/image";
import { m } from "framer-motion";

// data
import {
  FADE_UP_ANIMATION_VARIANTS,
  SHRINK_ANIMATION_VARIANTS,
} from "@/data/index";

// images
import rocket from "../../public/img/rocket.webp";

export const AnimatedHeader = () => {
  return (
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
      <div className="flex flex-col lg:items-center lg:mt-16 lg:flex-row">
        <div className="mb-12 lg:order-last lg:mb-0 basis-1/2">
          {/* fade in and shrink */}
          <m.div variants={SHRINK_ANIMATION_VARIANTS}>
            {/* <div className="relative"> */}
            <Image
              alt="Illustration of a rocket"
              src={rocket}
              className="object-contain max-h-[20vh]"
              // fill
              // sizes="(max-width: 1280px) 90vw, 1496px"
              priority
            />
            {/* </div> */}
          </m.div>
        </div>
        <div className="basis-1/2">
          <m.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <h2 className="text-3xl leading-tight text-gray-900 md:text-4xl dark:text-gray-100">
              What Kent uses.
            </h2>
          </m.div>
          <m.div variants={FADE_UP_ANIMATION_VARIANTS}>
            <p className="mt-3 text-xl leading-tight text-gray-400 md:text-2xl dark:text-slate-400">
              The tools I use to get the job done.
            </p>
          </m.div>
        </div>
      </div>
      <m.div variants={FADE_UP_ANIMATION_VARIANTS}>
        <p className="mt-16 text-lg leading-tight text-gray-400 md:text-xl dark:text-slate-400">
          I regularly get asked about the specifics of some piece of software or
          hardware I use. I always send them here. This is the stuff I find
          useful!
        </p>
      </m.div>
    </m.div>
  );
};
