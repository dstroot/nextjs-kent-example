"use client";

import { ThemeProvider } from "next-themes";
import { LazyMotion, domAnimation } from "framer-motion"

// see: https://beta.nextjs.org/docs/rendering/server-and-client-components
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <LazyMotion features={domAnimation}>
        {children}
      </LazyMotion>
    </ThemeProvider>
  );
};
