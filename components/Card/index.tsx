import Image from "next/image";

// components
import { icons } from "../Icons";

type Person = {
  name: string;
  service: string;
  img: string;
  description: string;
  social: Social[];
};

type Social = {
  icon: string;
  url: string;
};

export const Card = ({ person }: { person: Person }) => {
  return (
    <div className="flex flex-col w-full p-6 bg-gray-200 rounded-lg dark:bg-gray-800">
      {/*
        It usually is best practice to wrap images in a div and set height and width with it. HTML treats images as foreign objects so they don't follow the same rules as everything else. A simple div is the best way to work with an img as a normal block level element.
      */}
      <div className="relative flex-none w-full mb-8 aspect-[3/4]">
        <Image
          className="object-cover overflow-hidden rounded-lg"
          alt={person.name}
          src={person.img}
          fill
          sizes="(max-width: 1024px) 80vw, (max-width: 1280px) 40vw, 30vw"
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
      <div className="flex space-x-4">
        {person.social
          ? person.social.map((service, index) => (
              <a
                href={service.url}
                className="text-2xl text-gray-700 hover:text-gray-400 dark:hover:text-gray-600 dark:text-gray-300"
                key={index}
              >
                {icons[service.icon]}
              </a>
            ))
          : null}
      </div>
    </div>
  );
};
