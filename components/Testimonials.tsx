import Image from "next/image";
import kasey from "@/images/homepage/testimonials/kasey.jpg";
import emerald from "@/images/homepage/testimonials/emerald.jpg";
import bella from "@/images/homepage/testimonials/Bella.jpg";
import victoria from "@/images/homepage/testimonials/victoria.jpg";
import soph from "@/images/homepage/testimonials/Soph.jpg";
import maran from "@/images/homepage/testimonials/maran.jpg";
import cairn from "@/images/homepage/testimonials/cairn.jpg";
import sydney from "@/images/homepage/testimonials/sydney.jpg";
import amanda from "@/images/homepage/testimonials/amanda.jpg";
import amy from "@/images/homepage/testimonials/amy.jpg";
import hope from "@/images/homepage/testimonials/hope.jpg";
import pinkbackgroundwithbluehues from "@/images/homepage/pinkhueswithtintofblue.png";
import testimonialbg1 from "@/images/homepage/testimonials/backgrounds/testbg1.png";
import testimonialbg2 from "@/images/homepage/testimonials/backgrounds/testbg2.png";
import testimonialbg3 from "@/images/homepage/testimonials/backgrounds/testbg3.png";
import testimonialbg4 from "@/images/homepage/testimonials/backgrounds/testbg4.png";
import { Raleway, Dancing_Script } from "next/font/google";
const dancing_script_bold = Dancing_Script({ weight: "700", subsets: ["latin"] });
const raleway_medium = Raleway({ weight: "500", subsets: ["latin"], style: 'italic' });
const raleway_light = Raleway({ weight: "300", subsets: ["latin"] });
const raleway_regular = Raleway({ weight: "400", subsets: ["latin"] });

const backgroundImages = [
  testimonialbg1.src,
  testimonialbg2.src,
  testimonialbg3.src,
  testimonialbg4.src,
];

const featuredTestimonial = {
  body: "I love my Rockwell ponytail so much! It’s incredibly difficult to find anywhere that stocks orange hair first of all, and second the magnets make it so easy to install! I was able to change my hair mid photoshoot with a minimum of fuss and the hair looks great every time with almost no effort. Brush and go!",
  author: {
    name: "Kasey",
    handle: "kaseykupcake",
    imageUrl: kasey,
    logoUrl: "https://www.instagram.com/kaseykupcake/",
  },
};

const testimonials = [
  [
    [
      {
        body: "I absolutely love Carousel Hair Extensions! It is my go to look for an easy quick hairstyle. I always get compliments on it. I highly recommended to anyone who loves to play with different looks and these ponytails are the best on the market. Take it from me I'm a Hair Stylist and have tried so many and the unique magnet attachments help the ponytail feel so secure all day. Do yourself a favor and try one.",
        author: {
          name: "Victora",
          handle: "@victorialoveshair",
          imageUrl: victoria,
        },
      },
      {
        body: "I seriously LIVE in my carousel hair extension ! It's so quick and easy for me to get ready to go any where bc I don't have to pin it I just pop it on- wrap it and I'm done, it's amazing! I love how high quality the hair is, I love that its perfectly matched to my hair color,  I love that I can dance like a maniac and it won't come out ( without pinning it by the way) and I absolutely love that it won't damage my hair -  this invention is revolutionary- THANK YOU SO MUCH CAROUSEL",
        author: {
          name: "Maran",
          handle: "marangorges",
          imageUrl: maran,
        },
      },
      {
        body: "Loving my new hair extensions! THANK YOU",
        author: {
          name: "Emerald",
          handle: "mpressed_curls",
          imageUrl: emerald,
        },
      },
    ],
    [
      {
        body: "I can't believe how long it's been since I felt like myself... recommendating Breanna",
        author: {
          name: "Bella",
          handle: "teamsparkle",
          imageUrl: bella,
        },
      },
      {
        body: "I received so many compliments on my hair and I felt so beautiful. I can't wait to wear it again!",
        author: {
          name: "Carin",
          handle: "__flamingo_florence__",
          imageUrl: cairn,
        },
      },
    ],
  ],
  [
    [
      {
        body: "A touch of magic, the best of hair tools, the creativity of Breanna.. the power of Carousel Hair!",
        author: {
          name: "Soph",
          handle: "sophiacastillo___",
          imageUrl: soph,
        },
      },
      {
        body: "Delighted with my new hair! Perfect for any casual day or a night out - I love it!",
        author: {
          name: "Hope",
          handle: "hopiee_123",
          imageUrl: hope,
        },
      },
    ],
    [
      {
        body: "The quality of the hair is amazing and the color match is perfect. The level of care and attention to detail is unmatched.",
        author: {
          name: "Amanda",
          handle: "amandagabelwng",
          imageUrl: amanda,
        },
      },
      {
        body: "I get all the glamour a girl requires with Carousel Hair. I love the ease of use and the quality of the hair. I can't wait to try more styles!",
        author: {
          name: "Sydney",
          handle: "earthtosydd",
          imageUrl: sydney,
        },
      },
      {
        body: "Nothing feels and looks more natural then Carousel Hair!",
        author: {
          name: "Amy",
          handle: "sleeplesinseattle",
          imageUrl: amy,
        },
      },
    ],
  ],
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Testimonials() {
  return (
    <div
      style={{
        backgroundImage: `url(${pinkbackgroundwithbluehues.src})`,
      }}
      className="relative isolate pb-32 pt-24 sm:pt-32"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#fdd9e5]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#f5347f] xl:ml-0 xl:mr-[calc(50%-12rem)]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          {/* <h2 className="text-lg font-semibold leading-8 tracking-tight text-[#fe036a]">Happy Customers</h2> */}
          <h1 className={`${dancing_script_bold.className} mt-2 text-4xl tracking-tight text-gray-900 sm:text-5xl`}>
            Love from our Customers
          </h1>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <figure 
                style={{
                  backgroundImage: `url(${testimonialbg3.src})`,
                }}
          className="rounded-2xl shadow-2xl ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
            <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
              <p className={`${raleway_medium.className} tracking-wide`}>{`“${featuredTestimonial.body}”`}</p>
            </blockquote>
            <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 px-6 py-4 sm:flex-nowrap">
              <Image
                alt="Carousel Hair Extensions testimonial author"
                src={featuredTestimonial.author.imageUrl}
                width={40}
                height={40}
                className="h-10 w-10 flex-none rounded-full bg-gray-50"
              />
              <div className="flex-auto">
                <div className={`${raleway_regular.className} font-semibold`}>
                  {featuredTestimonial.author.name}
                </div>
                <div className={`${raleway_light.className} text-gray-600`}>{`@${featuredTestimonial.author.handle}`}</div>
              </div>
              {/* <Image  
                  alt="" 
                  src={featuredTestimonial.author.logoUrl} 
                  width={40}
                  height={40}
                  className="h-10 w-auto flex-none" /> */}
            </figcaption>
          </figure>
          {testimonials.map((columnGroup, columnGroupIdx) => (
            <div
              key={columnGroupIdx}
              className="space-y-8 xl:contents xl:space-y-0"
            >
              {columnGroup.map((column, columnIdx) => (
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
                  {column.map((testimonial, testimonialIdx) => (
                    <figure
                      key={testimonial.author.handle}
                      className="rounded-2xl p-6 shadow-2xl ring-1 ring-gray-900/5"
                      style={{
                        backgroundImage: `url(${
                          backgroundImages[
                            testimonialIdx % backgroundImages.length
                          ]
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <blockquote className="text-black">
                        <p className={`${raleway_medium.className} tracking-wide line-clamp-4`}>{`“${testimonial.body}”`}</p>
                      </blockquote>
                      <figcaption className="mt-6 flex items-center gap-x-4">
                        <Image
                          alt="Carousel Hair Extensions testimonial author "
                          width={40}
                          height={40}
                          src={testimonial.author.imageUrl}
                          className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <div>
                          <div className={`${raleway_regular.className} font-semibold`}>
                            {testimonial.author.name}
                          </div>
                          <div className={`${raleway_light.className} text-gray-600`}>{`@${testimonial.author.handle}`}</div>
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
    </div>
  );
}
