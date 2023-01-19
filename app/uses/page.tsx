// "use client"; // necessary for motion to work

import Image from "next/image";
// import { m } from "framer-motion";
import { processMarkdown } from "../../lib/processMarkdown";

// images
import rocket from "../../public/img/rocket.webp";

export default async function Index() {
  const data = await processMarkdown("/uses/uses.md");

  return (
    <>
      <div className="flex flex-col lg:items-center lg:mt-16 lg:flex-row">
        <div className="mb-12 lg:order-last lg:mb-0 basis-1/2 ">
          {/* fade in and shrink */}
          {/* <m.div
            initial={{ opacity: 0, scale: 1.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0, duration: 0.5 }}
          > */}
          <Image
            alt="Illustration of a rocket"
            src={rocket}
            className="object-contain max-h-[20vh] w-auto"
            //className="w-1/2 mx-auto lg:w-4/5"
            priority
          />
          {/* </m.div> */}
        </div>
        <div className="basis-1/2">
          {/* <m.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
          > */}
          <h2 className="text-3xl leading-tight text-gray-900 md:text-4xl dark:text-gray-100">
            What Kent uses.
          </h2>
          {/* </m.div> */}
          {/* <m.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          > */}
          <p className="mt-3 text-xl leading-tight text-gray-400 md:text-2xl dark:text-slate-400">
            The tools I use to get the job done.
          </p>
          {/* </m.div> */}
        </div>
      </div>

      <div
        className="mt-16 prose max-w-none dark:prose-invert prose-a:no-underline"
        dangerouslySetInnerHTML={{ __html: data?.html }}
      />
    </>
  );
}
