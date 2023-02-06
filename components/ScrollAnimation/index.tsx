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
    <m.div
      className=""
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.8 }}
    >
      <m.div className="card" variants={SHRINK_ANIMATION_VARIANTS}>
        <Image
          alt="Illustration of a snowboard"
          src={image}
          className="object-cover rounded-lg"
          fill
        />
      </m.div>
    </m.div>
  );
};
