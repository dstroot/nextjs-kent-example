"use client";

import Image from "next/image";
import {
  m,
  LazyMotion,
  domAnimation,
  AnimatePresence,
  useCycle,
} from "framer-motion";

//images
import profile from "../public/img/kody_profile_white.webp";
import hero from "../public/img/kody-flying_red.webp";

//components
import { NavBar } from "../components/NavBar";

export default function Home() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <LazyMotion features={domAnimation}>
        <NavBar />
        {/* <m.nav animate={isOpen ? "open" : "closed"}>
          <HamburgerToggle toggle={() => toggleOpen()} />
        </m.nav> */}

        <header className="relative mx-10vw">
          <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
            <div className="flex items-center justify-center mb-12 col-span-full lg:mb-0 lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0">
              {/* fade in and shrink */}
              <m.div
                initial={{ opacity: 0, scale: 1.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0, duration: 0.5 }}
              >
                <Image
                  className="object-contain w-full h-auto px-16 max-h-75vh"
                  alt="Illustration of Kody the Koala standing on a snowboard surrounded by green leaves, a battery, two skies, a one-wheel, a solar panel, and a recycle logo."
                  src={hero}
                  priority
                />
              </m.div>
            </div>
            <div className="pt-6 col-span-full lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
              <div className="flex flex-col flex-auto" style={{ opacity: 1 }}>
                <m.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                >
                  <h2 className="text-3xl leading-tight text-slate-700 md:text-4xl dark:text-gray-100">
                    Helping people make the world a better place through quality
                    software.
                  </h2>
                </m.div>
                <m.div
                  className="flex flex-col space-y-4 mt-14"
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <div className="flex flex-col gap-4 mr-auto">
                    <a
                      className="relative inline-flex text-lg font-medium transition opacity-100 group focus:outline-none disabled:opacity-50"
                      href="/blog"
                    >
                      <div className="absolute inset-0 transition transform border-2 rounded-full opacity-100 focus-ring disabled:opacity-50 bg-inverse bg-slate-800 dark:bg-white group-hover:bg-transparent"></div>
                      <div className="relative flex items-center justify-center w-full h-full px-12 py-4 space-x-5 text-white whitespace-nowrap text-inverse group-hover:dark:text-white dark:text-black">
                        Read the blog
                      </div>
                    </a>
                    <a
                      className="relative inline-flex text-lg font-medium transition opacity-100 group focus:outline-none disabled:opacity-50"
                      href="/courses"
                    >
                      <div className="absolute inset-0 transition transform border-2 rounded-full opacity-100 focus-ring border-secondary bg-primary group-hover:border-transparent group-hover:bg-white group-focus:border-transparent"></div>
                      <div className="relative flex items-center justify-center w-full h-full px-12 py-4 space-x-5 whitespace-nowrap text-primary dark:text-white group-hover:text-black">
                        Take a course
                      </div>
                    </a>
                  </div>
                </m.div>
              </div>
              <m.div
                className="hidden pt-12 lg:block"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
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
                          // style={{
                          //   strokeDasharray: "175.929, 175.929",
                          //   transform: "rotate(-90deg)",
                          //   transformOrigin: "30px 30px",
                          // }}
                        ></circle>
                      </svg>
                    </div>
                    {/* <span style={{ transform: "none" }}> */}
                    {/* <span style={{transform: "translateY(12px) translateZ(0px)"}}>
                      
                    </span> */}
                    <svg
                      // className="transform rotate-0 animate-bounce hover:translate-y-1 dark:text-white"
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
                    {/* </span> */}
                  </div>
                  <span className="ml-4 text-xl font-medium dark:text-gray-400 group-hover:dark:text-gray-200">
                    Learn more about Kent
                  </span>
                </a>
              </m.div>
            </div>
          </div>
        </header>
      </LazyMotion>
    </>
  );
}
