import Image from "next/image";

type Person = {
  name: string;
  service: string;
  img: string;
  description: string;
  social: Social[];
};

type Social = {
  service: string;
  url: string;
};

const Card = ({ person }: { person: Person }) => {
  return (
    <div className="flex flex-col w-full p-6 bg-gray-200 rounded-lg dark:bg-gray-800">
      <div className="flex-none w-full mb-8 aspect-w-3 aspect-h-4">
        <Image
          className="object-cover rounded-lg"
          alt={person.name}
          src={person.img}
          fill
        />
      </div>
      <div className="flex-auto">
        <div className="mb-2 text-xl font-medium lowercase text-slate-500">
          {person.service}
        </div>
        <h3 className="mb-6 text-2xl font-medium text-black md:text-3xl dark:text-white">
          {person.name}
        </h3>
        <p className="max-w-full mb-6 text-lg prose dark:prose-invert">
          {person.description}
        </p>
      </div>
      <div className="flex space-x-2 text-xs">
        {person.social
          ? person.social.map((service, index) => (
              <a
                href={service.url}
                className="hover:text-primary focus:text-primary"
                key={index}
              >
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                  <title>{service.service}</title>
                  <path
                    fill="currentColor"
                    d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
                  ></path>
                </svg>
              </a>
            ))
          : null}
      </div>
      <div className="flex flex-none space-x-4 text-secondary"></div>
    </div>
  );
};

const Index = () => {
  return (
    <>
      <div className="flex flex-col mb-16 space-y-10 col-span-full lg:flex-row lg:items-end lg:justify-between lg:space-y-0">
        <div className="space-y-2 lg:space-y-0">
          <h2 className="text-3xl leading-tight text-black md:text-4xl dark:text-white">
            Everyone that helped out.
          </h2>
          <p className="text-3xl leading-tight text-gray-400 md:text-4xl dark:text-slate-500">
            In no particular order.
          </p>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 mb-16 lg:grid-cols-2 xl:grid-cols-3">
        {test.map((person, index) => {
          return <Card person={person} key={index} />;
        })}
      </div>
    </>
  );
};

export default Index;

const test: Person[] = [
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
  // {
  //     img: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_955,q_auto,f_auto/kentcdodds.com/content/credits/daniel",

  // service: "Project Manager"
  // name: " Daniel Miller"

  // description: "Daniel managed the redesign project, acting as phone switch operator and document creator."

  // social: [Website](https://www.daniel.industries/)[GitHub](https://github.com/dealingwith)[Twitter](https://twitter.com/hazeprovinsal)
  // },
  // {
  //     img: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_955,q_auto,f_auto/kentcdodds.com/content/credits/jhey",

  // service: "Motion Wizard"
  // name: " Jhey Tompkins"

  // description: "Jhey worked on making using the site visually interesting by adding motion. In particular he "built the audio recorder visualizer and the parallax experience on the homepage.

  // social: [Website](https://jhey.dev/links)[GitHub](https://github.com/jh3y)[Twitter](https://twitter.com/jh3yy)[Codepen](https://codepen.io/jh3y)[Twitch](https://twitch.tv/jh3yy)
  // },
  // {
  //     img: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_955,q_auto,f_auto/kentcdodds.com/content/credits/daniel-nisttahuz",

  // service: "Launch Video"

  // ##name: "niel Nisttahuz"

  // description: "Daniel was the guy behind the amazing launch video."

  // social: [Website](https://www.dniel.io/)[Twitter](https://twitter.com/dnisttahuz)[LinkedIn](https://www.linkedin.com/in/danielnisttahuz)
  // },
  // {
  //     img: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_955,q_auto,f_auto/kentcdodds.com/content/credits/cree",

  // service: "Podcast Production"

  // name: "Cree Provinsal"

  // description: "Cree helped produce and edit the new season of Chats with Kent."

  // social: [Twitter](https://twitter.com/CProvinsal)
  // },
  // {
  //     img: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_955,q_auto,f_auto/kentcdodds.com/content/credits/stephan",

  // service: "Design Implementation"

  // name: "Stephan Meijer"

  // description: "Took the designs and implemented them using Tailwind. Did a terrific job of implementing the "designs and coming up with solutions when unexpected requirements popped up.

  // social: [Website](http://meijer.ws)[GitHub](https://github.com/smeijer)[Twitter](https://twitter.com/meijer_s)
  // },
  // {
  //     img: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_955,q_auto,f_auto/kent/profile",

  // service: "A bit of everything"
  // name: " Kent C. Dodds"

  // description: "Hi! It's me. Yeah, I worked on this project too. I was the "client" for egghead and I implemented "the vast majority of the code on this site and made architectural decisions. I'm also the long-term maintainer.

  // social: [GitHub](https://github.com/kentcdodds)[Twitter](https://twitter.com/kentcdodds)
  // },
  // {
  //     img: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_955,q_auto,f_auto/kentcdodds.com/content/credits/maggie",

  // service: "Art Direction"

  // #name: "aggie Appleton"

  // description: "Maggie led the production of illustrations for the site as well as the overall design."

  // social: [Website](https://maggieappleton.com/)[Twitter](https://twitter.com/Mappletons)
  // },
  // {
  //     img: "https://res.cloudinary.com/kentcdodds-com/image/upload/w_955,q_auto,f_auto/kentcdodds.com/content/credits/gil",

  // service: "Design"
  // name: " Gil Huybrecht"

  // description: "Responsible for the overall web design and the information architecture. Kent and Gil worked "together to get the best possible structure for the website and visual design.

  // social: [Website](https://www.gilhuybrecht.com)[Twitter](https://twitter.com/gilhuybrecht)[Instagram](https://www.instagram.com/gil.huybrecht)[Dribbble](https://dribbble.com/gilhuybrecht)
  // },
];
