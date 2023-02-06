/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  // https://github.com/react-icons/react-icons/issues/154#issuecomment-895976123
  // modularizeImports: {
  //   "react-icons/io5": {
  //     transform: "@react-icons/all-files/io5/{{member}}.js",
  //   },
  //   "react-icons/vsc": {
  //     transform: "@react-icons/all-files/vsc/{{member}}.js",
  //   },
  //   "react-icons/gi": {
  //     transform: "@react-icons/all-files/gi/{{member}}.js",
  //   },
  //   "react-icons/si": {
  //     transform: "@react-icons/all-files/si/{{member}}.js",
  //   },
  //   "react-icons/bs": {
  //     transform: "@react-icons/all-files/bs/{{member}}.js",
  //   },
  //   "react-icons/cg": {
  //     transform: "@react-icons/all-files/cg/{{member}}.js",
  //   },
  //   "react-icons/fi": {
  //     transform: "@react-icons/all-files/fi/{{member}}.js",
  //   },
  // },
};

module.exports = nextConfig;
