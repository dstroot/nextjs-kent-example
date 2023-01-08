"use client";

// import Link from "next/link";
import { m } from "framer-motion";
import { menu } from "./menu";
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
                <Menu.Button className="inline-flex items-center justify-center p-1 text-gray-500 transition focus:border-primary hover:border-primary h-14 w-14 focus:outline-none dark:text-gray-200">
                  {/* Here we are using motion to animate the hamburger menu */}
                  {({ open }) => (
                    <m.div animate={open ? "open" : "closed"}>
                      <HamburgerToggle />
                    </m.div>
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
                        <Menu.Item key={`${index}`}>
                          <NavLink
                            href={item.path}
                            exact
                            className="py-8 pr-16 text-xl text-right text-gray-500 bg-white border-b border-gray-200 dark:bg-gray-900 hover:bg-secondary focus:bg-secondary text-primary hover:text-team-current dark:border-gray-600 dark:text-gray-400"
                          >
                            {item.name}
                          </NavLink>
                        </Menu.Item>
                      );
                    })}
                    <Menu.Item>
                      <div className="py-8 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600">
                        <ThemeSwitch />
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </div>
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
