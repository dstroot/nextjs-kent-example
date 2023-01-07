import Image from "next/image";

//images
import profile from "../public/img/kody_profile_white.webp";
import hero from "../public/img/kody-flying_red.webp";

export default function Home() {
  return (
    <>
      <header className="px-5vw py-9 lg:py-12">
        <nav className="flex items-center justify-between mx-auto text-primary max-w-8xl">
          <div className="flex justify-center gap-4 align-middle">
            <a
              className="block text-2xl font-medium transition text-primary underlined whitespace-nowrap focus:outline-none dark:text-white"
              href="/"
            >
              <h1>Kent C. Dodds</h1>
            </a>
          </div>
          <ul className="hidden lg:flex">
            <li className="px-5 py-2">
              <a
                className="block text-lg font-medium underlined whitespace-nowrap hover:text-team-current focus:text-team-current focus:outline-none dark:text-white"
                href="/blog"
              >
                Blog
              </a>
            </li>
            <li className="px-5 py-2">
              <a
                className="block text-lg font-medium text-gray-500 underlined whitespace-nowrap dark:text-gray-400 hover:text-team-current focus:text-team-current focus:outline-none"
                href="/courses"
              >
                Courses
              </a>
            </li>
            <li className="px-5 py-2">
              <a
                className="block text-lg font-medium text-gray-500 underlined whitespace-nowrap dark:text-gray-400 hover:text-team-current focus:text-team-current focus:outline-none"
                href="/discord"
              >
                Discord
              </a>
            </li>
            <li className="px-5 py-2">
              <a
                className="block text-lg font-medium text-gray-500 underlined whitespace-nowrap dark:text-gray-400 hover:text-team-current focus:text-team-current focus:outline-none"
                href="/chats/04"
              >
                Chats
              </a>
            </li>
            <li className="px-5 py-2">
              <a
                className="block text-lg font-medium text-gray-500 underlined whitespace-nowrap dark:text-gray-400 hover:text-team-current focus:text-team-current focus:outline-none"
                href="/calls"
              >
                Calls
              </a>
            </li>
            <li className="px-5 py-2">
              <a
                className="block text-lg font-medium text-gray-500 underlined whitespace-nowrap dark:text-gray-400 hover:text-team-current focus:text-team-current focus:outline-none"
                href="/workshops"
              >
                Workshops
              </a>
            </li>
            <li className="px-5 py-2">
              <a
                className="block text-lg font-medium text-gray-500 underlined whitespace-nowrap dark:text-gray-400 hover:text-team-current focus:text-team-current focus:outline-none"
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
          <div className="flex items-center justify-center">
            <div className="block lg:hidden">
              <button
                aria-haspopup="true"
                aria-controls="menu--:r0:"
                className="inline-flex items-center justify-center p-1 transition border-2 rounded-full focus:border-primary hover:border-primary border-secondary text-primary h-14 w-14 focus:outline-none"
                id="menu-button--menu--:r0:"
                type="button"
                data-reach-menu-button=""
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="6"
                    y="9"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                    style={{ transform: "none", transformOrigin: "0px 0px" }}
                  ></rect>
                  <rect
                    x="6"
                    y="15"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                    opacity="1"
                  ></rect>
                  <rect
                    x="6"
                    y="21"
                    width="20"
                    height="2"
                    rx="1"
                    fill="currentColor"
                    style={{ transform: "none", transformOrigin: "0px 0px" }}
                  ></rect>
                </svg>
              </button>
            </div>
            <div className="hidden noscript-hidden lg:block">
              <button className="inline-flex items-center justify-center p-1 overflow-hidden transition border-2 rounded-full border-secondary hover:border-primary focus:border-primary h-14 focus:outline-none w-14">
                <div className="relative w-8 h-8">
                  <span
                    className="absolute inset-0 rotate-90 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:rotate-0 dark:text-white"
                    style={{ transformOrigin: "50% 100px" }}
                  >
                    <svg
                      className="w-full"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.228 7.9439C10.5176 8.82869 7.75757 12.1054 7.75757 15.9987C7.75757 20.5716 11.5618 24.2919 16.2367 24.2919C19.2323 24.2919 21.9337 22.7699 23.4514 20.3585C23.2779 20.3676 23.1033 20.3722 22.9287 20.3722C17.7826 20.3722 13.5951 16.2772 13.5951 11.2435C13.5951 10.1032 13.8108 8.98914 14.228 7.9439M16.2367 26.4993C10.3171 26.4993 5.50037 21.7899 5.50037 15.9987C5.50037 10.2109 10.3171 5.49927 16.2367 5.49927C16.6598 5.49927 17.0501 5.72963 17.2435 6.09753C17.438 6.46428 17.4087 6.90668 17.1638 7.24363C16.3059 8.42297 15.8535 9.80631 15.8535 11.2435C15.8535 15.06 19.0272 18.1637 22.9287 18.1637C23.6483 18.1637 24.3573 18.0582 25.0359 17.8531C25.4378 17.7293 25.8785 17.8359 26.1738 18.1304C26.4715 18.425 26.5758 18.8559 26.4446 19.2467C25.0019 23.5847 20.9 26.4993 16.2367 26.4993"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span
                    className="absolute inset-0 rotate-0 transform text-black transition duration-1000 motion-reduce:duration-[0s] dark:-rotate-90 dark:text-white"
                    style={{ transformOrigin: "50% 100px" }}
                  >
                    <svg
                      className="w-full"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0003 21.4194C13.0123 21.4194 10.5813 18.9874 10.5813 15.9994C10.5813 13.0114 13.0123 10.5804 16.0003 10.5804C18.9883 10.5804 21.4193 13.0114 21.4193 15.9994C21.4193 18.9874 18.9883 21.4194 16.0003 21.4194M16.0003 8.64136C11.9423 8.64136 8.64233 11.9414 8.64233 15.9994C8.64233 20.0574 11.9423 23.3574 16.0003 23.3574C20.0573 23.3574 23.3583 20.0574 23.3583 15.9994C23.3583 11.9414 20.0573 8.64136 16.0003 8.64136"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0004 7.08447C16.5364 7.08447 16.9704 6.64946 16.9704 6.11446V3.34546C16.9704 2.81046 16.5364 2.37646 16.0004 2.37646C15.4644 2.37646 15.0304 2.81046 15.0304 3.34546V6.11446C15.0304 6.64946 15.4644 7.08447 16.0004 7.08447"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.11559 15.0298H3.34559C2.81059 15.0298 2.37659 15.4648 2.37659 15.9998C2.37659 16.5348 2.81059 16.9688 3.34559 16.9688H6.11559C6.65159 16.9688 7.08459 16.5348 7.08459 15.9998C7.08459 15.4648 6.65159 15.0298 6.11559 15.0298"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.0004 24.9146C15.4644 24.9146 15.0304 25.3496 15.0304 25.8846V28.6536C15.0304 29.1886 15.4644 29.6236 16.0004 29.6236C16.5364 29.6236 16.9704 29.1886 16.9704 28.6536V25.8846C16.9704 25.3496 16.5364 24.9146 16.0004 24.9146"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.6542 15.0298H25.8842C25.3492 15.0298 24.9152 15.4648 24.9152 15.9998C24.9152 16.5348 25.3492 16.9688 25.8842 16.9688H28.6542C29.1902 16.9688 29.6242 16.5348 29.6242 15.9998C29.6242 15.4648 29.1902 15.0298 28.6542 15.0298"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.9896 9.97995C23.2376 9.97995 23.4856 9.88495 23.6756 9.69595L24.7036 8.66795C25.0816 8.28995 25.0816 7.67495 24.7036 7.29595C24.3246 6.91795 23.7106 6.91795 23.3316 7.29595L22.3036 8.32495C21.9256 8.70295 21.9256 9.31695 22.3036 9.69595C22.4926 9.88495 22.7416 9.97995 22.9896 9.97995"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.32507 9.69593C8.51407 9.88493 8.76207 9.97993 9.01107 9.97993C9.25907 9.97993 9.50707 9.88493 9.69607 9.69593C10.0751 9.31693 10.0751 8.70293 9.69607 8.32493L8.66807 7.29693C8.28907 6.91893 7.67507 6.91893 7.29707 7.29693C6.91807 7.67493 6.91807 8.28993 7.29707 8.66793L8.32507 9.69593Z"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.32507 22.3043L7.29707 23.3313C6.91807 23.7093 6.91807 24.3243 7.29707 24.7023C7.48607 24.8923 7.73407 24.9873 7.98207 24.9873C8.23007 24.9873 8.47807 24.8923 8.66807 24.7023L9.69607 23.6753C10.0751 23.2973 10.0751 22.6833 9.69607 22.3043C9.31807 21.9253 8.70307 21.9253 8.32507 22.3043"
                        fill="currentColor"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.6752 22.3043C23.2962 21.9253 22.6822 21.9253 22.3032 22.3043C21.9252 22.6833 21.9252 23.2973 22.3042 23.6753L23.3322 24.7023C23.5212 24.8923 23.7692 24.9873 24.0182 24.9873C24.2662 24.9873 24.5142 24.8923 24.7032 24.7023C25.0822 24.3243 25.0822 23.7093 24.7032 23.3313L23.6752 22.3043Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                </div>
                <span className="ml-4 text-black sr-only dark:text-white">
                  switch to dark mode
                </span>
              </button>
            </div>
            <a
              aria-label="Login"
              className="inline-flex items-center justify-center ml-4 rounded-full h-14 w-14 focus:outline-none"
              href="/login"
            >
              <div
                className="absolute"
                style={{ transform: "rotate(125.463deg) translateZ(0px)" }}
              >
                <svg height="56" width="56" viewBox="0 0 56 56">
                  <path
                    d="M29.465,0.038373A28,28,0,0,1,52.948,40.712L51.166,39.804A26,26,0,0,0,29.361,2.0356Z"
                    className="text-yellow-500"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M51.483,43.250A28,28,0,0,1,4.5172,43.250L6.1946,42.161A26,26,0,0,0,49.805,42.161Z"
                    className="text-blue-500"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M3.0518,40.712A28,28,0,0,1,26.535,0.038373L26.639,2.0356A26,26,0,0,0,4.8338,39.804Z"
                    className="text-red-500"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <Image
                alt="Kody Profile in White"
                src={profile}
                className="inline w-10 rounded-full select-none"
              />
            </a>
          </div>
        </nav>
      </header>
      <header className="relative mx-10vw">
        <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl lg: mb-24 h-auto pt-24 lg:min-h-[40rem] lg:pb-12 lg:mb-64">
          <div className="flex items-center justify-center mb-12 col-span-full lg:mb-0 lg:col-span-7 lg:col-start-6 lg:-mt-24 lg:-mr-5vw lg:px-0">
            <Image
              className="object-contain w-full h-auto px-16 max-h-75vh"
              alt="Illustration of Kody the Koala standing on a snowboard surrounded by green leaves, a battery, two skies, a one-wheel, a solar panel, and a recycle logo."
              src={hero}
              priority
              style={{ opacity: "1", transform: "none" }}
            />
          </div>
          <div className="pt-6 col-span-full lg:col-start-1 lg:row-start-1 lg:flex lg:h-full lg:flex-col lg:col-span-5">
            <div className="flex flex-col flex-auto" style={{ opacity: 1 }}>
              <div style={{ opacity: 1, transform: "none" }}>
                <h2 className="text-3xl leading-tight text-black md:text-4xl dark:text-white">
                  Helping people make the world a better place through quality
                  software.
                </h2>
              </div>
              <div
                className="flex flex-col space-y-4 mt-14"
                style={{ opacity: "1", transform: "none" }}
              >
                <div className="flex flex-col gap-4 mr-auto">
                  <a
                    className="relative inline-flex text-lg font-medium transition opacity-100 group focus:outline-none disabled:opacity-50"
                    href="/blog"
                  >
                    <div className="absolute inset-0 transition transform rounded-full opacity-100 focus-ring disabled:opacity-50 bg-inverse bg-slate-800 dark:bg-white"></div>
                    <div className="relative flex items-center justify-center w-full h-full px-12 py-4 space-x-5 text-white whitespace-nowrap text-inverse dark:text-black">
                      Read the blog
                    </div>
                  </a>
                  <a
                    className="relative inline-flex text-lg font-medium transition opacity-100 group focus:outline-none disabled:opacity-50"
                    href="/courses"
                  >
                    <div className="absolute inset-0 transition transform border-2 rounded-full opacity-100 focus-ring disabled:opacity-50 border-secondary bg-primary group-hover:border-transparent group-focus:border-transparent"></div>
                    <div className="relative flex items-center justify-center w-full h-full px-12 py-4 space-x-5 whitespace-nowrap text-primary dark:text-white">
                      Take a course
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden pt-12 lg:block" style={{ opacity: 1 }}>
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
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
