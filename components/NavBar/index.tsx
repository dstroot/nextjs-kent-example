"use client";

// import Link from "next/link";
import { m } from "framer-motion";
import { menu } from "../../data";
import { Menu } from "@headlessui/react";
import { NavLink } from "./navlink";
import { Fragment } from "react";

// components
import { HamburgerToggle } from "../HamburgerToggle";
import { ThemeSwitch } from "../ThemeSwitch";

export function NavBar() {
  return (
    <>
      <header className="py-9 lg:py-12">
        <nav className="flex items-center justify-between mx-auto">
          {/*
            Left Side 
          */}
          <a
            className="block text-2xl font-medium transition text-primary underlined whitespace-nowrap focus:outline-none dark:text-white"
            href="https://kentcdodds.com/"
          >
            Kent C. Dodds
          </a>

          {/*
            Main Nav Section
          */}
          <ul className="hidden lg:flex">
            {menu.map((item, index) => {
              return (
                <li className="px-5 py-2" key={`${index}`}>
                  <NavLink
                    href={item.path}
                    exact
                    className="block text-lg font-medium text-gray-500 underlined whitespace-nowrap dark:text-gray-400 hover:text-team-current focus:text-team-current focus:outline-none"
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>

          {/*
            Mobile Menu
          */}
          <div className="flex items-center justify-center">
            <div className="block lg:hidden">
              <Menu as={Fragment}>
                <Menu.Button className="inline-flex items-center justify-center h-14 w-14 focus:outline-none">
                  {/* 
                    Here we are passing the menu open status to motion, and 
                    using motion to animate the hamburger menu. Cool!
                  */}
                  {({ open }) => (
                    <m.div animate={open ? "open" : "closed"}>
                      <HamburgerToggle />
                    </m.div>
                  )}
                </Menu.Button>
                <Menu.Items>
                  <div
                    className="absolute z-50 block"
                    style={{
                      inset: "calc(92px + 2.25rem) 0px 0px",
                    }}
                  >
                    <div className="flex flex-col h-full border-t border-gray-200 bg-primary dark:border-gray-600">
                      {menu.map((item, index) => {
                        return (
                          <Menu.Item key={`${index}`}>
                            <NavLink
                              href={item.path}
                              exact
                              className="py-8 pr-16 text-xl text-right text-gray-500 bg-white border-b border-gray-200 dark:bg-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-200 hover:bg-gray-100 focus:bg-gray-200 text-primary hover:text-gray-900 dark:border-gray-600 dark:text-gray-400"
                            >
                              {item.name}
                            </NavLink>
                          </Menu.Item>
                        );
                      })}
                      <Menu.Item>
                        <div className="w-full py-8 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
                          <ThemeSwitch />
                        </div>
                      </Menu.Item>
                    </div>
                  </div>
                </Menu.Items>
              </Menu>
            </div>

            {/*
              Dark Mode Toggle
            */}
            <div className="hidden noscript-hidden lg:block">
              <ThemeSwitch />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
