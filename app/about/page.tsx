"use client"; // necessary for motion to work

import Image from "next/image";
import { m } from "framer-motion";

// images
import snowboard from "../../public/img/snowboard.webp";

// data
import {
  FADE_UP_ANIMATION_VARIANTS,
  SHRINK_ANIMATION_VARIANTS,
} from "@/data/index";

export default function Index() {
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
                  alt="Illustration of a snowboard"
                  src={snowboard}
                  className="object-contain"
                  priority
                />
              </m.div>
            </div>
            <div className="basis-1/2">
              <m.div variants={FADE_UP_ANIMATION_VARIANTS}>
                <h2 className="text-3xl leading-tight text-gray-900 md:text-4xl dark:text-gray-100">
                  Hi, I&apos;m Kent C. Dodds, I&apos;m a full time educator.
                </h2>
              </m.div>
              <m.div variants={FADE_UP_ANIMATION_VARIANTS}>
                <p className="mt-3 text-xl leading-tight text-gray-400 md:text-2xl dark:text-slate-400">
                  I make the world a better place by teaching people like you
                  how to make quality software.
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
      </header>
      <div className="relative mx-10vw">
        <h2 className="mb-10 text-3xl leading-tight text-black md:text-4xl dark:text-white">
          Here are some of the values I live by.
        </h2>
        <div className="relative grid grid-cols-4 mx-auto mb-24 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 max-w-7xl lg:mb-64">
          <div className="col-span-full lg:col-span-6 lg:col-start-7">
            <div className="mb-12 lg:mb-0">
              {/* <img
                className="object-cover rounded-lg"
                alt="Kent smiling covered in snow"
                src="https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_1316,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder"
                srcset="https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_512,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder 512w, https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_650,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder 650w, https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_840,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder 840w, https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_1024,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder 1024w, https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_1300,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder 1300w, https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_1680,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder 1680w, https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_2000,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder 2000w, https://res.cloudinary.com/kentcdodds-com/image/upload/c_fill,w_2520,ar_3:4,q_auto,f_auto,g_faces/kent/video-stills/happy-snowboarder 2520w"
                sizes="(max-width: 1023px) 80vw, (min-width: 1024px) and (max-width: 1620px) 40vw, 650px"
                crossorigin="anonymous"
              /> */}
            </div>
          </div>
          <div className="col-span-full lg:col-span-5 lg:col-start-1 lg:row-start-1">
            <h3 className="mb-4 text-lg font-medium text-black dark:text-white">
              Kindness
            </h3>
            <p className="max-w-full mb-12 text-lg prose dark:prose-invert">
              You can be the smartest and most skilled software engineer in the
              world, but if you&apos;re not kind to those with whom you
              interact, you&apos;ll never reach your full potential and
              you&apos;ll always be chasing the next thing to bring you
              happiness in life. Be kind.
            </p>
            <h3 className="mb-4 text-lg font-medium text-black dark:text-white">
              Share knowledge
            </h3>
            <p className="max-w-full mb-12 text-lg prose dark:prose-invert">
              One of the biggest things that has helped me learn is by
              committing myself to sharing what I know with others. Between
              podcasts, blog posts, talks, and workshops, I force myself into
              situations where I have to be accountable to those I&apos;m
              teaching to really know my stuff. And as a result, a lot of people
              have learned from me as well.
            </p>
            <h3 className="mb-4 text-lg font-medium text-black dark:text-white">
              Collaborate with others
            </h3>
            <p className="max-w-full mb-12 text-lg prose dark:prose-invert">
              I&apos;ve worked with a ton of developers in my role as a team
              member at companies I&apos;ve worked at as well as in the open
              source community. I&apos;ve found it to be invaluable to
              collaborate well with others. I value giving credit where it is
              due and celebrating the successes of others with them. We can
              accomplish much more together than separately.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
