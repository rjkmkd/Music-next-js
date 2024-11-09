import Link from "next/link";


const HeroSection = () => {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
          Master the art of Music
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg  max-w-lg mx-auto bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-300">
          Unlock your musical potential with our in-depth course, covering
          everything from music theory and composition to performance
          techniques, perfect for beginners and advanced musicians alike.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>Explore Courses</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection