import Image from "next/image";

// images
import onewheel from "../../public/img/one_wheel.webp";

// components
import { icons } from "../Icons";

// types
import { IconType } from "react-icons/lib";

export const Footer = () => {
  const social = [
    {
      icon: "github",
      aria: "Visit me on Github",
      url: "https://github.com/kentcdodds",
    },
    {
      icon: "youtube",
      aria: "Visit me on YouTube",
      url: "https://youtube.com/c/KentCDodds-vids/videos",
    },
    {
      icon: "twitter",
      aria: "Visit me on Twitter",
      url: "https://twitter.com/kentcdodds",
    },
    {
      icon: "rss",
      aria: "Get my RSS feed",
      url: "https://kentcdodds.com/blog/rss.xml",
    },
  ];

  const links = [
    { name: "github", url: "https://github.com/kentcdodds" },
    { name: "youtube", url: "https://youtube.com/c/KentCDodds-vids/videos" },
    { name: "twitter", url: "https://twitter.com/kentcdodds" },
    { name: "rss", url: "https://kentcdodds.com/blog/rss.xml" },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-gray-600">
      <div className="flex flex-col mt-8 sm:mt-16 mx-10vw lg:flex-row lg:justify-between">
        {/* Block with Kent's name */}
        <div className="">
          <div className="text-xl font-medium text-black md:text-2xl dark:text-white">
            Kent C. Dodds
          </div>
          <p className="mt-3 text-lg leading-tight text-gray-600 dark:text-gray-400 md:text-xl">
            Full time educator making our world better
          </p>
          <div className="flex items-center mt-4">
            {/* Social Icons */}
            <div className="flex gap-4">
              {social.map((service, index) => (
                <a
                  href={service.url}
                  aria-label={service.aria}
                  className="text-2xl text-gray-700 hover:text-gray-400 dark:hover:text-gray-600 dark:text-gray-300"
                  key={index}
                >
                  {/*
                        If you're getting the TypeScript error '...expression of type string cannot be used to index...'
                        then simply specify that the 'expression of type string' is a key of the type of that object.
                      */}
                  {icons[service.icon as keyof IconType]}
                </a>
              ))}
            </div>
            <div className="flex h-12 ml-10">
              <svg
                viewBox="0 0 208 110"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m10.7 8.7c-0.4 4.3-2.7 19-5.2 32.7s-4.5 25.7-4.5 26.5c0 2.6 1.6 4.2 3.3 3.5 2.1-0.8 2.2-2.4 0.2-2.4-1.2 0-1.5-0.7-1-3.3 0.3-1.7 1.2-6.8 1.9-11.2 1.1-7 1.5-8 3.2-7.7 10.1 1.7 21.1 1.2 43.4-2.2 28.3-4.2 50-6.9 50.7-6.3 0.2 0.3-0.1 3.3-0.7 6.7s-0.9 6.4-0.6 6.7c1.2 1.3 2.4-1.1 2.9-6.3 0.3-3.1 1-6.1 1.5-6.6 0.6-0.6 9.9-1.8 20.9-2.8 33-3.1 38.7-3.4 38-2.3-0.4 0.6-1.9 1.4-3.4 1.8-1.6 0.3-8 2.6-14.3 5-6.3 2.5-23.2 8.7-37.5 13.9s-33.2 12.2-42 15.6c-28.5 10.9-50.4 19-51.5 19-0.5 0-1 0.4-1 1 0 0.5 0.2 1 0.4 1 1.2 0 28-9.7 60.6-22 20.6-7.8 42.5-15.9 48.5-18 6.1-2.1 13.6-4.8 16.8-6s6-2 6.3-1.8c0.2 0.3-0.5 1.7-1.6 3.1-1.2 1.4-2.7 4.3-3.4 6.4-1.1 3.2-1.7 3.8-4.5 3.9-3.9 0.2-7.1 2.9-7.1 6 0 2.3 2.5 4.4 4.5 3.9 0.6-0.2 2.2-0.6 3.8-0.9 4.2-1 3.2-2.5-1.3-1.9-3.6 0.5-4 0.3-4-1.5 0-2.9 4.4-4 6.9-1.8 1.7 1.5 1.8 1.3 3-3.7 0.6-2.9 2.3-7 3.6-9 1.4-2 2.5-4.2 2.5-5s1.9-1.9 4.3-2.7c2.3-0.6 7.1-2.5 10.7-4.2 5-2.2 6.1-3.1 5-3.8-2.5-1.6-12-1.2-46.6 2-37.5 3.5-49.3 4.9-71.9 8.5-28.1 4.4-43.5 4.3-43.5-0.3 0-2.9 13.9-15.2 26.9-24 10.2-6.9 12.5-8.1 13.8-7 1.2 1 1.8 0.8 3.4-1.2 2.3-3.1 2.4-4 0.1-4-4 0-27.1 15.3-37.3 24.7-3.5 3.3-5.9 4.9-5.9 4 0-0.8 0.9-5.9 2-11.2 2-9.9 2.7-22.5 1.1-22.5-0.4 0-1.1 3.5-1.4 7.7z"></path>
                <path d="m165.1 40.7c-0.7 1.6-1.6 5.4-1.9 8.6-0.5 5.6-0.6 5.8-2.9 5.2-3.2-0.8-8.6 2.6-11.4 7.1-2.6 4.2-1.5 6.1 2.8 4.9 1.5-0.5 3.3-0.7 3.8-0.6 0.6 0.2 8.2 1.8 17 3.6 26.5 5.5 31.5 6.8 31.5 8 0 1.6-15.1 4-41 6.5-33.2 3.2-75.6 9.8-115.5 18-8.2 1.7-19.2 3.4-24.2 3.7-2.2066 0.132-5.0134 0.952-8.2618-0.36-1.2736-0.678-2.2382-1.25-0.5001-3.327 0.1923-0.577-0.7381-2.1132-2.0381-1.013-2 1.7-1.9 3.3 0.3 5.3 3 2.7 13.2 2.1 35.4-2.2 51.6-10 83.4-14.9 118.3-18.1 12.7-1.2 26.1-2.8 29.9-3.6 6.7-1.3 11.6-3.6 11.6-5.3 0-2.1-17.4-6.7-40.3-10.7-5.3-1-9.6-2.2-9.4-2.8 0.4-1.3 18.2-7.2 27.4-9.1 3.9-0.8 8.6-1.2 10.4-0.8 2.5 0.5 3.1 0.3 2.7-0.8-1-2.9-20.9 0-32 4.6-1.5 0.6-1.8 0.1-1.8-3.2 0-2.1 0.7-6.5 1.5-9.6 1.8-6.8 1.7-6.7 0.7-6.7-0.5 0-1.4 1.2-2.1 2.7zm-3.1 17.3c0 0.5-2 1.9-4.5 3.1s-4.8 2.5-5.1 3c-0.7 1.3-2.4 1.1-2.4-0.2 0-2.2 6.2-6.9 9.1-6.9 1.6 0 2.9 0.4 2.9 1z"></path>
                <path d="m84.2 49.6c-2.4 1.6-3 5.4-0.9 5.4 2.4 0 10.7-3.2 10.7-4.1 0-1.2-0.1-1.2-4.3 0.6-4.3 1.8-4.7 1.8-4.7 0.5 0-0.6 1.1-1.5 2.5-2s2.5-1.2 2.5-1.5c0-1.1-3.7-0.4-5.8 1.1z"></path>
                <path d="m27.6 54.4c-2.9 2.5-6.6 4.6-8 4.8-1.5 0.2-2.5 0.7-2.4 1.3 0.5 1.7 7.9 0.5 13.7-2.1 6.5-2.9 7.3-3 8.9-0.4 1.2 2 4.6 2.7 5.6 1.1 0.3-0.5-0.5-1.2-1.8-1.5s-2.6-1.5-2.9-2.7c-0.4-1.6-1.1-1.9-2.6-1.4-1.7 0.5-2.1 0.2-2.1-1.4 0-3.2-2.4-2.5-8.4 2.3zm5.1 0.3c-0.9 0.9-1.9 1.4-2.3 1.1-1-1 0.6-2.8 2.4-2.8 1.5 0 1.5 0.1-0.1 1.7z"></path>
                <path d="m59.2 52.3c-2.5 2.7-3 7.7-0.8 7.7 0.9 0 1.6-1.2 1.8-2.7 0.2-1.9 1.2-3.2 3.1-4.1 1.5-0.7 2.5-1.7 2.2-2.3-1.1-1.6-4.1-1-6.3 1.4z"></path>
                <path d="m116.1 57.6c-4.4 3.7-4.1 5.8 0.5 5.1 4.3-0.7 11.7-5.3 10.9-6.7-1.3-2.1-8.3-1.1-11.4 1.6zm6.9 0.2c0 0.9-4.4 3.2-6 3.2-2.3 0-0.7-2 2.3-2.9 1.7-0.5 3.3-1 3.5-1 0.1-0.1 0.2 0.3 0.2 0.7z"></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-0">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:ml-12 md:gap-6 md:grid-cols-3">
            <div>
              <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                Contact
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="underlined whitespace-nowrap hover:text-team-current focus:text-team-current focus:outline-none">
                  <a
                    href="https://flowbite.com/"
                    aria-label="Read more about our privacy policy"
                  >
                    Flowbite
                  </a>
                </li>
                <li className="underlined whitespace-nowrap hover:text-team-current focus:text-team-current focus:outline-none">
                  <a
                    href="https://tailwindcss.com/"
                    aria-label="Read more about our privacy policy"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                General
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="underlined whitespace-nowrap hover:text-team-current focus:text-team-current focus:outline-none">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    aria-label="Visit the flowbite theme"
                  >
                    Github
                  </a>
                </li>
                <li className="underlined whitespace-nowrap hover:text-team-current focus:text-team-current focus:outline-none">
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    aria-label="Go to our discord"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">
                Sitemap
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="underlined whitespace-nowrap hover:text-team-current focus:text-team-current focus:outline-none">
                  <a href="#" aria-label="Read more about our privacy policy">
                    Privacy Policy
                  </a>
                </li>
                <li className="underlined whitespace-nowrap hover:text-team-current focus:text-team-current focus:outline-none">
                  <a href="#" aria-label="Read more about our terms">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
        © Kent C. Dodds 2023. All rights reserved.
      </p>
    </footer>
  );
};

/*

<footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
  <div className="md:flex md:justify-between">
    <div className="mb-6 md:mb-0">
      <a href="https://flowbite.com/" className="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="h-8 mr-3"
          alt="FlowBite Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite
        </span>
      </a>
    </div>
    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Resources
        </h2>
        <ul className="text-gray-600 dark:text-gray-400">
          <li className="mb-4">
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" className="hover:underline">
              Tailwind CSS
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Follow us
        </h2>
        <ul className="text-gray-600 dark:text-gray-400">
          <li className="mb-4">
            <a
              href="https://github.com/themesberg/flowbite"
              className="hover:underline "
            >
              Github
            </a>
          </li>
          <li>
            <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
              Discord
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Legal
        </h2>
        <ul className="text-gray-600 dark:text-gray-400">
          <li className="mb-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div className="sm:flex sm:items-center sm:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      © 2023{" "}
      <a href="https://flowbite.com/" className="hover:underline">
        Flowbite™
      </a>
      . All Rights Reserved.
    </span>
    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="sr-only">Facebook page</span>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="sr-only">Instagram page</span>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
        <span className="sr-only">Twitter page</span>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="sr-only">GitHub account</span>
      </a>
      <a
        href="#"
        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="sr-only">Dribbbel account</span>
      </a>
    </div>
  </div>
</footer>;

*/
