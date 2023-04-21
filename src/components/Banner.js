/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const Banner = () => {
  return (
    <div className="relative h-[200px] sm:h-[300px] lg:h-[400px] xl:h-[500px] 2xl:h-[700px] ">
      <Image 
      src="https://links.papareact.com/0fm"
      alt=""
      layout="fill"
      object-fit="cover"
      />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-xs sm:text-sm md:text-lg ">
          Not sure where to go? Perfect.
        </p>
        <button className="text-purple-500 bg-white px-8 py-3 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition-150">I'm flexible</button>
      </div>
    </div>
  )
}

export default Banner