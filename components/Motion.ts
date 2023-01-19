"use client";

/* 

  You can wrap third-party components that rely on client-only features in your own Client Components

*/

import { LazyMotion, domAnimation, m } from "framer-motion";

export function MotionProvider({ children }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}

export m;
