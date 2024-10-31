"use client"; // Ensure this is a Client Component

import { classNames } from "@/utils/facades/serverFacades/strFacade";
import Image from "next/image";
import { Key } from "react";

export const featuredTestimonial = {
  body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laboriosam id praesentium mollitia, iusto libero quos alias expedita sit recusandae nulla quis consequatur facilis dolorem distinctio numquam accusantium unde quidem.",
  author: {
    name: "Laura G.",
    handle: "SEO Specialist",
  },
};

export const testimonials: any[] = [
  [
    [
      {
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laboriosam id praesentium mollitia, iusto libero quos alias expedita sit recusandae nulla quis consequatur facilis dolorem distinctio numquam accusantium unde quidem.",
        author: {
          name: "Fernanda V.",
          handle: "CTO at Google",
        },
        icon: (
          <Image
            src={"/assets/img/cuban-flag.jpg"}
            alt="Cuban Flag"
            width={20}
            height={20}
            className="inline"
          />
        ),
      },
    ],
    [
      {
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laboriosam id praesentium mollitia, iusto libero quos alias expedita sit recusandae nulla quis consequatur facilis dolorem distinctio numquam accusantium unde quidem.",
        author: {
          name: "Fernanda V.",
          handle: "CTO at Google",
        },
        icon: (
          <Image
            src={"/assets/img/cuban-flag.jpg"}
            alt="Cuban Flag"
            width={20}
            height={20}
            className="inline"
          />
        ),
      },
    ],
  ],
  // Additional testimonials...
];

export default function TestimonialMultiple() {
  return (
    <div className="relative isolate w-full bg-[#1B1340] py-16 lg:py-20">
      {/* Animated Background Overlays */}
      <div
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="w-full bg-gradient-to-tr from-[#5C3DFF] to-[#8A66FF]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-[#E0E0F1] sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-[rgba(92,61,255,0.1)] shadow-lg ring-1 ring-[#5C3DFF]/20 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-white sm:p-12 sm:text-xl sm:leading-8">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-[#8A66FF]/20 px-6 py-4 sm:flex-nowrap">
              <div className="flex-auto">
                <div className="font-semibold text-[#F0EFFF]">
                  {featuredTestimonial.author.name}
                </div>
                <div className="text-[#8A66FF]">{`${featuredTestimonial.author.handle}`}</div>
              </div>
            </figcaption>
          </figure>

          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map(
                (column: any[], columnIdx: Key | null | undefined) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 &&
                          columnIdx === columnGroup.length - 1)
                        ? "xl:row-span-2"
                        : "xl:row-start-1",
                      "space-y-8"
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-[rgba(92,61,255,0.1)] p-6 shadow-lg ring-1 ring-[#5C3DFF]/20"
                      >
                        <blockquote className="text-[#E0E0F1]">
                          <p>{`“${testimonial.body}”`}</p>
                          {testimonial.icon && (
                            <div className="mt-6 flex items-center gap-x-4">
                              {testimonial.icon}
                            </div>
                          )}
                        </blockquote>

                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <div>
                            <div className="font-semibold text-[#F0EFFF]">
                              {testimonial.author.name}
                            </div>
                            <div className="text-[#8A66FF]">{`${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
