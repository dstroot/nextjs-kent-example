"use client"; // necessary to use Framer Motion

import { m } from "framer-motion";
import { Card } from "../../components/Card";
import Image from "next/image";

// data
import { creditsData } from "../../config/config";

// images
import trophy from "../../public/img/testing-trophy.webp";

const Index = () => {
  return (
    <>
      <header className="">
        <div className="mt-16 flex flex-col items-center lg:flex-row">
          <div className="lg:order-last basis-1/3">
            {/* fade in and shrink */}
            <m.div
              initial={{ opacity: 0, scale: 1.4 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 0.5 }}
            >
              <Image
                alt="Illustration of a trophy"
                src={trophy}
                className="object-contain w-full h-auto max-h-30vh"
                priority
              />
            </m.div>
          </div>
          <div className="basis-2/3">
            <m.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <h2 className="text-3xl leading-tight text-gray-900 md:text-4xl dark:text-gray-100">
                These people make the world a better place. Here&apos;s who
                helped out to make this site awesome!
              </h2>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p className="mt-3 text-xl leading-tight text-gray-400 md:text-2xl dark:text-slate-400">
                My heros, in no particular order:
              </p>
            </m.div>
          </div>
        </div>
      </header>
      <div className="grid w-full grid-cols-1 gap-4 mt-12 mb-16 lg:grid-cols-2 xl:grid-cols-3">
        {creditsData.map((person, index) => {
          return <Card person={person} key={index} />;
        })}
      </div>
    </>
  );
};

export default Index;
