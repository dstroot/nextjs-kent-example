// "use client"; // necessary for motion to work

// images
import snowboard from "../../public/img/snowboard.webp";

// components
import { AnimHeader } from "@/components/AnimHeader";

export default function Index() {
  return (
    <>
      <header className="min-h-screen">
        <AnimHeader
          image={snowboard}
          text1="Hi, I'm Kent C. Dodds, I'm a full time educator."
          text2="I make the world a better place by teaching people like you how to
              make quality software."
        />
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
