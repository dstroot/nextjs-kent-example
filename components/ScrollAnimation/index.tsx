"use client"; // necessary for motion to work

import Image from "next/image";
import { m } from "framer-motion";

// data
import {
  FADE_UP_ANIMATION_VARIANTS,
  SHRINK_ANIMATION_VARIANTS,
} from "@/data/index";

export const ScrollAnimation = ({
  image,
}: //   text1,
//   text2,
{
  image: StaticImageData;
  //   text1: string;
  //   text2: string;
}) => {
  return (
    // <m.div
    //   initial="hidden"
    //   whileInView="show"
    //   viewport={{ once: true, amount: 0.8 }}
    //   variants={{
    //     hidden: {},
    //     show: {
    //       transition: {
    //         staggerChildren: 0.15,
    //       },
    //     },
    //   }}
    // >
    <m.div
      className="relative h-[35vh] md:h-[60vh] mb-12 overflow-hidden lg:mb-0 rounded-lg"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={SHRINK_ANIMATION_VARIANTS}
    >
      <Image
        alt="Illustration of a snowboard"
        src={image}
        className="object-cover rounded-lg"
        fill
      />
    </m.div>
    // </m.div>
  );
};
