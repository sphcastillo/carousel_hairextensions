import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid';
import GlitzFeaturette from "@/images/glitzFeaturette.jpg";
import Image from "next/image";
import stars from "@/images/logo/pinkStars.png";
import { Lobster, Lora, Poppins } from "next/font/google";

const lobster = Lobster({ weight: "400", subsets: ["latin"] });

const lora_regular = Lora({ weight: "400", subsets: ["latin"] });

const lora_semibold = Lora({ weight: "600", subsets: ["latin"] });

const poppins_light = Poppins({ weight: "300", subsets: ["latin"] });

const poppins_medium = Poppins({ weight: "500", subsets: ["latin"] });

const poppins_semibold = Poppins({ weight: "600", subsets: ["latin"] });
  
  const features = [
    {
      name: 'A Whimsical World of Beauty:',
      description: 'Step into Breanna’s creative vision, where vintage aesthetics meet modern hair trends. Carousel Hair Extensions is a pink-hued haven that celebrates individuality, creativity, and timeless style.',
    },
    {
      name: 'Over 20 Years of Expertise:',
      description: 'With over two decades of experience in the hair industry, Breanna brings unparalleled knowledge and skill to every client. Whether it’s hair extensions or styling advice, you’re in expert hands.',
    },
    {
      name: 'Premium Hair Extensions:',
      description: 'Carousel Hair Extensions offers a handpicked selection of premium extensions in a variety of lengths, textures, and colors, all designed to help you transform your look with ease and confidence.',
    },
    {
      name: 'A Personalized Experience:',
      description: 'Breanna believes in crafting a personalized experience for every client. From color matching to styling tips, she’s here to ensure your hair journey is uniquely yours.',
    },
    {
      name: ' Vintage Meets Modern Style',
      description: 'Inspired by a love for all things vintage, Breanna has curated a space that blends old-school charm with the latest hair trends, offering a unique aesthetic that’s both playful and sophisticated.',
    },
    {
      name: 'Fashion Beyond Hair',
      description: 'Carousel Hair Extensions isn’t just about hair—it’s a lifestyle. Discover our collection of stylish t-shirts and hoodies, each designed with the same creative flair that defines our brand.',
    },
  ]
  
  export default function Feature() {
    return (
      <div className="bg-[#fadde1] py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className={`${lobster.className} text-xl font-semibold leading-7 text-black`}>R.I.P. Bad Hair Days</h2>
            <p className={`${poppins_semibold.className} mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl`}>Welcome to Carousel Hair Extensions: A Whimsical World of Style & Beauty</p>
            <p className={`${poppins_light.className} mt-6 text-lg leading-8 text-gray-600`}>
            Breanna has transformed her space into a whimsical oasis filled with vintage treasures and trinkets, where every detail tells a story. Here, you’ll find not only expert hair care and stunning extensions but also a sense of playfulness and individuality. Whether you’re looking to add length and volume to your hair or snag one of our fun, stylish t-shirts and hoodies, Carousel Hair Extensions is your destination for all things beauty.
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden pt-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App screenshot"
              src={GlitzFeaturette}
              width={2432}
              height={1442}
              className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            {/* <div aria-hidden="true" className="relative">
              <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
            </div> */}
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className={`${poppins_semibold.className} inline font-semibold text-gray-900`}>
                  <Image src={stars} alt='Pink Stars' className="absolute left-1 top-1 h-5 w-5" />
                  {feature.name}
                </dt>{' '}
                <dd className={`${poppins_light.className} inline text-gray-500 ml-1`}>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  