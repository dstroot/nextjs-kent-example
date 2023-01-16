// Nullish coalescing: the `??` operator is a way to “fall back” to
// a default value when dealing with `null` or `undefined`.

// Best approach: create a config file in your project where you export an
// object containing all configuration values for your project. There, you
// can set default values for variables coming from the environment. In this way,
// you guarantee a value will be present for the execution of your program:

export const config = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  openAIKey: process.env.OPENAI_API_KEY ?? "",
  statusPage: process.env.STATUS_PAGE_ID ?? "",
};

export const menu = [
  { path: "/", name: "Home", new: false },
  { path: "/about", name: "About", new: false },
  { path: "/blog", name: "Blog", new: true },
  { path: "/uses", name: "Uses", new: true },
  { path: "/credits", name: "Credits", new: true },
];

export const creditsData = [
  {
    img: "/img/haze.webp",
    service: "Video Editing",
    name: "Haze Provinsal",
    description: "Haze did additional video editing.",
    social: [{ icon: "twitter", url: "https://twitter.com/hazeprovinsal" }],
  },
  {
    img: "/img/mohamed.webp",
    service: "Illustration",
    name: "Mohamed Chahin",
    description:
      "All these beautiful illustrations you see on the website were created by Mohamed.",
    social: [
      { icon: "twitter", url: "https://twitter.com/beastochahin" },
      { icon: "dribbble", url: "https://dribbble.com/MohChahin" },
      { icon: "behance", url: "https://www.behance.net/MChahin" },
    ],
  },
  {
    img: "/img/kevin.webp",
    service: "Video Production",
    name: "Kevin Winzeler",
    description: "Kevin directed, shot, and edited Kent's bio video.",
    social: [{ icon: "website", url: "https://www.kevinwinzeler.com/" }],
  },
  {
    img: "/img/sean-olszewski.webp",
    service: "Audio Magic",
    name: "Sean Olszewski",
    description:
      "Sean worked on the audio for the launch video as well as the Chats with Kent podcast.",
    social: [
      { icon: "github", url: "https://github.com/SeanROlszewski" },
      { icon: "twitter", url: "https://twitter.com/__chefski__" },
    ],
  },
  {
    img: "/img/daniel.webp",
    service: "Project Manager",
    name: " Daniel Miller",
    description:
      "Daniel managed the redesign project, acting as phone switch operator and document creator.",
    social: [
      { icon: "website", url: "https://www.daniel.industries/" },
      { icon: "github", url: "https://github.com/dealingwith" },
      { icon: "twitter", url: "https://twitter.com/hazeprovinsal" },
    ],
  },
  {
    img: "/img/jhey.webp",
    service: "Motion Wizard",
    name: " Jhey Tompkins",
    description:
      'Jhey worked on making using the site visually interesting by adding motion. In particular he "built the audio recorder visualizer and the parallax experience on the homepage.',
    social: [
      { icon: "website", url: "https://jhey.dev/links" },
      { icon: "github", url: "https://github.com/jh3" },
      { icon: "twitter", url: "https://twitter.com/jh3yy" },
      { icon: "codepen", url: "https://codepen.io/jh3y" },
      { icon: "twitch", url: "https://twitch.tv/jh3yy" },
    ],
  },
];

/**
 * Motion Constants
 */

/* Settings Usage:

<motion.div
  className="border border-black rounded-full"
  {...FADE_IN_ANIMATION_SETTINGS}
>
  {stuff}
</div>
*/

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.2 },
};

export const SHRINK_ANIMATION_SETTINGS = {
  initial: { opacity: 0, scale: 1.4 },
  animate: { opacity: 1, scale: 1 },
  transition: { delay: 0, duration: 0.5 },
};

/* Variants Usage:

<motion.div
  className="border border-black rounded-full"
  variants={FADE_DOWN_ANIMATION_VARIANTS}
>
  {stuff}
</div>
*/

export const SHRINK_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, scale: 1.4 },
  show: { opacity: 1, scale: 1, transition: { type: "spring" } },
};

export const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};
