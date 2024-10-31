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
  ],
];

export default function TestimonialMultiple() {
  return (
    <div
      className="relative isolate pb-32 pt-3 lg:pt-14"
      style={{
        background: "linear-gradient(180deg, #1B1340 0%, #121829 100%)",
      }}
    >
      {/* Background Gradient and Animation */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#5C3DFF] to-[#8A66FF] opacity-20 animate-gradientMove"
        aria-hidden="true"
      ></div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-[#E0E0F1] sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure className="rounded-2xl bg-[rgba(255,255,255,0.1)] backdrop-blur-lg shadow-lg ring-1 ring-[rgba(255,255,255,0.1)] p-6">
            <blockquote className="text-xl font-semibold text-[#F0EFFF]">
              <p>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="mt-4 text-[#8A66FF]">
              <div>{featuredTestimonial.author.name}</div>
              <div className="text-sm">{featuredTestimonial.author.handle}</div>
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column: any[], columnIdx: Key | null | undefined) => (
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
                      className="rounded-2xl p-6 bg-[rgba(255,255,255,0.07)] backdrop-blur-md shadow-md ring-1 ring-[rgba(255,255,255,0.15)] hover:shadow-xl transition duration-300 ease-in-out"
                      style={{
                        boxShadow: "0px 4px 15px rgba(92, 61, 255, 0.15)",
                      }}
                    >
                      <blockquote className="text-[#D8D8E2]">
                        <p>{`“${testimonial.body}”`}</p>
                        {testimonial.icon && (
                          <div className="mt-6 flex items-center gap-x-4">
                            {testimonial.icon}
                          </div>
                        )}
                      </blockquote>

                      <figcaption className="mt-4 flex items-center gap-x-4">
                        <div>
                          <div className="text-[#8A66FF] font-semibold">
                            {testimonial.author.name}
                          </div>
                          <div className="text-sm text-[#F0EFFF]">{testimonial.author.handle}</div>
                        </div>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 10s ease infinite;
        }
      `}</style>
    </div>
  );
}
