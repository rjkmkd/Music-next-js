import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "./ui/text-generate-effect";


const HeroSection = () => {
  const words = `Unlock your musical potential with our in-depth course, covering
          everything from music theory and composition to performance
          techniques, perfect for beginners and advanced musicians alike.`;
          
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0  md:left-20 md:-top-20 lg:left-80 lg:top-100"
        fill="white"
      />

      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
          Master the art of Music
        </h1>
        {/* <p className="mt-4 font-semibold text-base md:text-lg  max-w-lg mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300 ">
          
        </p> */}
        <TextGenerateEffect  words={words} />

        <div className="mt-4">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link href={"/courses"}>Explore Courses</Link>
          </Button>
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection
