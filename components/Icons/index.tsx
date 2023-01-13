import {
  IoLogoJavascript,
  IoLogoReact,
  IoLogoHtml5,
  IoLogoCss3,
} from "react-icons/io5";
import { VscTerminalBash } from "react-icons/vsc";
import { GiEarthAfricaEurope } from "react-icons/gi";
import {
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import {
  BsMarkdownFill,
  BsBehance,
  BsDribbble,
  BsTwitter,
  BsTwitch,
  BsGithub,
} from "react-icons/bs";
import { CgTimelapse, CgFramer, CgBrowser } from "react-icons/cg";
import { FiCodepen } from "react-icons/fi";

type Icons = any;

export const icons: Icons = {
  opgp: <GiEarthAfricaEurope />,
  ga: <SiGoogleanalytics />,
  gtm: <SiGoogletagmanager />,
  mdx: <BsMarkdownFill />,
  timeout: <CgTimelapse />,
  fm: <CgFramer />,
  tailwind: <SiTailwindcss />,
  js: <IoLogoJavascript />,
  react: <IoLogoReact />,
  html: <IoLogoHtml5 />,
  css: <IoLogoCss3 />,
  bash: <VscTerminalBash />,
  next: <SiNextdotjs />,
  //
  website: <CgBrowser />,
  github: <BsGithub />,
  twitter: <BsTwitter />,
  codepen: <FiCodepen />,
  twitch: <BsTwitch />,
  dribbble: <BsDribbble />,
  behance: <BsBehance />,
};
