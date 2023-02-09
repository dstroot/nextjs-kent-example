"use client"; // necessary for motion to work

import Image from "next/image";
import { m } from "framer-motion";

// data
import { SHRINK_ANIMATION_VARIANTS } from "@/data/index";

/*
 Framer Motion has a prop you can use for when an element comes into view. Using `whileInView` in place of `animate` will enable your animation to trigger when it enters your view port. Voila! It’s literally that easy. Set your start position with `initial` and end position with `whileInView`. Use `viewport` to manage other props like when it triggers.
 */

export const ScrollAnimation = ({ image }: { image: StaticImageData }) => {
  return (
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
  );
};
