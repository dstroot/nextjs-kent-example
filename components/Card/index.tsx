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
