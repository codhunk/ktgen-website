"use client";

import React from "react";
import Image from "next/image";

const directors = [
  {
    name: "Dr. Y. K. Hamied",
    role: "Non-Executive Chairman",
    image: "/directors/yk-hamied.png",
    description:
      "Dr Y.K. Hamied is Non-Executive Chairman of the Company, and represents the second generation of Cipla’s founding family. A world-renowned scientist, Dr Hamied obtained his PhD in organic chemistry in 1960 from the University of Cambridge under the tutelage of the Nobel laureate Lord Alexander Todd.",
    align: "left",
  },
  {
    name: "Mr. Umang Vohra",
    role: "Managing Director & Global Chief Executive Officer",
    image: "/directors/umang-vohra.png",
    description:
      "Umang Vohra is Managing Director and Global Chief Executive Officer (MD and GCEO) of Cipla since September 2016. Umang joined Cipla in October 2015 as its Global Chief Financial Officer, and from January 2016 to August 2016 was Cipla’s Global Chief Operating Officer.",
    align: "right",
  },
];

const BoardOfDirectors = () => {
  return (
    <>
      {/* Breadcrumb Header */}
      <section className="bg-gradient-to-r from-green-400 to-sky-500 py-10 px-8 text-white">
        <p className="text-sm opacity-90">
          Home &nbsp;›&nbsp; About Us &nbsp;›&nbsp; Board of Directors
        </p>
      </section>

      {/* Title Card */}
      <section className="relative -mt-14 flex justify-center">
        <div className="bg-white w-[70%] p-12 shadow-xl rounded-sm">
          <h1 className="text-4xl font-bold text-gray-900">
            Board Of Directors
          </h1>
        </div>
      </section>

      {/* Directors Section */}
      <section className="py-24 space-y-28">
        {directors.map((director, index) => (
          <div key={index} className="relative max-w-6xl mx-auto">
            <div
              className={`flex ${
                director.align === "right" ? "flex-row-reverse" : ""
              } bg-white border rounded-xl overflow-hidden`}
            >
              {/* Image */}
              <div className="w-1/2 bg-gray-100 flex justify-center items-center">
                <Image
                  src={director.image}
                  alt={director.name}
                  width={420}
                  height={520}
                  priority
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-1/2 p-10">
                <h2 className="text-4xl font-bold text-gray-900">
                  {director.name}
                </h2>

                <p className="text-lg mt-2 text-gray-800">
                  {director.role}
                </p>

                <p className="mt-6 text-gray-600 leading-relaxed">
                  {director.description}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-blue-600 mt-6 font-medium hover:underline"
                >
                  → Read More
                </a>
              </div>
            </div>

            {/* Dotted Decoration */}
            <div
              className={`absolute ${
                director.align === "right" ? "-right-20" : "-left-20"
              } bottom-0`}
            >
              <div className="grid grid-cols-6 gap-2 opacity-30">
                {Array.from({ length: 36 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-sky-400 rounded-full"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default BoardOfDirectors;
