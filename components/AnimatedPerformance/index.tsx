"use client";

import { m } from "framer-motion";
import { CountingNumbers } from "../CountingNumbers";

export const AnimatedPerformance = () => {
  return (
    <div className="relative w-full h-full">
      <m.svg
        className="absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        width={140}
        height={140}
      >
        <m.circle
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 2, ease: "linear" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="45"
          fill="#DCFCE7"
          stroke="#22C55E"
        />
      </m.svg>
      <CountingNumbers
        value={100}
        duration={2500}
        className="absolute inset-0 flex items-center justify-center mx-auto text-5xl text-green-500 font-display"
      />
    </div>
  );
};
