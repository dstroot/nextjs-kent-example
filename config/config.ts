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

export const creditsData = [
  {
    img: "/img/haze.webp",
    service: "Video Editing",
    name: "Haze Provinsal",
    description: "Haze did additional video editing.",
    social: [{ service: "Twitter", url: "https://twitter.com/hazeprovinsal" }],
  },
  {
    img: "/img/mohamed.webp",
    service: "Illustration",
    name: "Mohamed Chahin",
    description:
      "All these beautiful illustrations you see on the website were created by Mohamed.",
    social: [
      { service: "Twitter", url: "https://twitter.com/beastochahin" },
      { service: "Dribbble", url: "https://dribbble.com/MohChahin" },
      { service: "Behance", url: "https://www.behance.net/MChahin" },
    ],
  },
  {
    img: "/img/kevin.webp",
    service: "Video Production",
    name: "Kevin Winzeler",
    description: "Kevin directed, shot, and edited Kent's bio video.",
    social: [{ service: "Website", url: "https://www.kevinwinzeler.com/" }],
  },
  {
    img: "/img/sean-olszewski.webp",
    service: "Audio Magic",
    name: "Sean Olszewski",
    description:
      "Sean worked on the audio for the launch video as well as the Chats with Kent podcast.",
    social: [
      { service: "GitHub", url: "https://github.com/SeanROlszewski" },
      { service: "Twitter", url: "https://twitter.com/__chefski__" },
    ],
  },
  {
    img: "/img/daniel.webp",
    service: "Project Manager",
    name: " Daniel Miller",
    description:
      "Daniel managed the redesign project, acting as phone switch operator and document creator.",
    social: [
      { service: "Website", url: "https://www.daniel.industries/" },
      { service: "GitHub", url: "https://github.com/dealingwith" },
      { service: "Twitter", url: "https://twitter.com/hazeprovinsal" },
    ],
  },
  {
    img: "/img/jhey.webp",
    service: "Motion Wizard",
    name: " Jhey Tompkins",
    description:
      'Jhey worked on making using the site visually interesting by adding motion. In particular he "built the audio recorder visualizer and the parallax experience on the homepage.',
    social: [
      { service: "Website", url: "https://jhey.dev/links" },
      { service: "GitHub", url: "https://github.com/jh3" },
      { service: "Twitter", url: "https://twitter.com/jh3yy" },
      { service: "Codepen", url: "https://codepen.io/jh3y" },
      { service: "Twitch", url: "https://twitch.tv/jh3yy" },
    ],
  },
];
