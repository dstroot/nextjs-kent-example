// "use client";

import Image from "next/image";
// import { m } from "framer-motion";

// // data
// import {
//   FADE_UP_ANIMATION_VARIANTS,
//   SHRINK_ANIMATION_VARIANTS,
// } from "@/data/index";

const cards = [
  {
    id: 1,
    title: "How I help you build better websites",
    date: "March 2, 2022",
    text: "We should always ship fast experiences to our users, but sometimes something slips through our PR review process and our users start having a slow experience. Unless they complain to us, we often have no way of knowing that things are going so slow for them. User complaints is not a great policy for quality control.",
    imageUrl: "/img/kent-speaking.webp",
    imageAlt: "Kent Speaking at a Podium",
  },
  {
    id: 2,
    title: "React Production Performance Monitoring",
    date: "March 2, 2022",
    text: "Hundreds of thousands of software engineers like yourself have learned something about quality software from my content, both paid and free. I've heard of job promotions and successful applications built and improved as a direct result of what people have learned from me.",
    imageUrl: "/img/react-monitoring.webp",
    imageAlt: "React Montitoring Panel",
  },
];

export const AnimatedCards = () => {
  return (
    <>
      {cards.map((card) => (
        <div
          key={card.id}
          className="max-w-sm mb-16 overflow-hidden rounded shadow-lg"
        >
          <div className="relative w-full h-48 overflow-hidden">
            <Image
              className="object-cover"
              src={card.imageUrl}
              alt={card.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{card.title}</div>
            <p className="text-base text-gray-700">{card.text}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #photography
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #travel
            </span>
            <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
              #winter
            </span>
          </div>
        </div>
      ))}
    </>
  );
};
