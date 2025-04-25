import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-accent">Serhii Kokorskyi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eaque rem, architecto corrupti
              laboriosam dolorem? Laboriosam optio itaque dicta, mollitia sunt, nisi, fuga nulla nemo ipsam incidunt
              consequatur provident autem?
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <Button variant="outline" size="lg" className="flex items-center uppercase gap-2">
                <span className="mr-2">Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent text-accent rounded-full flex items-center justify-center justify-center text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
