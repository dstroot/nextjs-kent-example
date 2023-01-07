"use client";

import Link from "next/link";
import { menu } from "./menu";
import { NavLink } from "./navlink";
import { Fragment, useState } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import Image from "next/image";

import profile from "../../public/img/kody_profile_white.webp";

export function NavBar() {
  let [isOpen, setIsOpen] = useState(false); // state of mobile menu

  return (
    <>
      <header className="py-9 lg:py-12">
        <nav className="flex items-center justify-between mx-auto">
          <div className="flex justify-center gap-4 align-middle">
            <Link
              className="block text-2xl font-medium transition text-primary underlined whitespace-nowrap focus:outline-none dark:text-white"
              href="/"
            >
              Kent C. Dodds
            </Link>
          </div>
          <ul className="hidden lg:flex">
            {menu.map((item, index) => {
              return (
                <li className="px-5 py-2" key={`${index}`}>
                  <NavLink
                    href={item.path}
                    exact
                    className="block text-lg font-medium underlined whitespace-nowrap hover:text-team-current focus:text-team-current focus:outline-none dark:text-white"
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="flex items-center justify-center">
            <div className="block lg:hidden">
              <Menu>
                <Menu.Button className="inline-flex items-center justify-center p-1 transition focus:border-primary hover:border-primary h-14 w-14 focus:outline-none">
                  {({ open }) => (
                    <>
                      {!open ? (
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
                            // style={{ transform: "none", transformOrigin: "0px 0px" }}
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
                            // style={{ transform: "none", transformOrigin: "0px 0px" }}
                          ></rect>
                        </svg>
                      ) : (
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
                            style={{
                              transform: "translateY(7px) rotate(45deg)",
                              transformOrigin: "16px 10px",
                            }}
                            // transform-origin="16px 10px"
                          ></rect>
                          <rect
                            x="6"
                            y="15"
                            width="20"
                            height="2"
                            rx="1"
                            fill="currentColor"
                            opacity="0"
                          ></rect>
                          <rect
                            x="6"
                            y="21"
                            width="20"
                            height="2"
                            rx="1"
                            fill="currentColor"
                            style={{
                              transform: "translateY(-5px) rotate(-45deg)",
                              transformOrigin: "16px 22px",
                            }}
                            // transform-origin="16px 22px"
                          ></rect>
                        </svg>
                      )}
                    </>
                  )}
                </Menu.Button>
                <div
                  className="z-50"
                  style={{
                    position: "absolute",
                    display: "block",
                    inset: "calc(92px + 2.25rem) 0px 0px",
                  }}
                >
                  <Menu.Items className="flex flex-col h-full pb-12 overflow-y-scroll border-t border-gray-200 bg-primary dark:border-gray-600">
                    {menu.map((item, index) => {
                      return (
                        <Menu.Item
                          key={`${index}`}
                          className="px-6 py-8 text-right bg-white border-b border-gray-200 hover:bg-secondary focus:bg-secondary text-primary hover:text-team-current dark:border-gray-600"
                        >
                          <NavLink
                            href={item.path}
                            exact
                            className=""
                            onClick={() => setIsOpen(false)}
                          >
                            {item.name}
                          </NavLink>
                        </Menu.Item>
                      );
                    })}
                  </Menu.Items>
                </div>
              </Menu>
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
          </div>
        </nav>
      </header>

      {/*
        Pop over mobile menu
      */}
      {/* <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="fixed max-w-xs p-6 ml-4 text-xl font-semibold bg-white rounded-lg shadow-lg top-2 right-2 text-primary dark:bg-slate-800 dark:highlight-white/5">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="absolute flex items-center justify-center w-8 h-8 top-2 right-2 text-primary text-hover focus:outline-none"
                tabIndex={0}
              >
                <span className="sr-only">Close navigation</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="mt-4 space-y-6">
                {menu.map((item, index) => {
                  return (
                    <li key={`${index}`}>
                      <NavLink
                        href={item.path}
                        exact
                        className="px-8 text-hover"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                        {item.new ? (
                          <span className="ml-2 font-medium text-xs leading-5 rounded-full px-2 py-0.5 text-new">
                            New
                          </span>
                        ) : null}
                      </NavLink>
                      <div className="mt-5 border-b border-gray-300 dark:border-gray-500"></div>
                    </li>
                  );
                })}
              </ul>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition> */}
    </>
  );
}
