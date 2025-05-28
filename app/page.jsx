import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import TypewriterText from "@/components/TypewriterText";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-12">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Frontend Developer</span>
            <TypewriterText text={`Hello I'm \nSerhii Kokorskyi`} />
            <p className="max-w-[500px] mb-9 text-white/80">
              I’m a frontend developer with over 2 years of experience building
              responsive and high-performance web applications using JavaScript,
              React, and Next.js. I’ve delivered multiple e-commerce projects,
              improving UX and optimizing performance. Skilled in SCSS and
              Tailwind, I focus on clean, maintainable code and intuitive user
              interfaces. Passionate about building modern web products and
              continuously advancing my skills.
            </p>
            <div className="flex flex-col xl:flex-row gap-8 items-center">
              <a href="/SerhiiCV.pdf" download className="inline-block">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center uppercase gap-2"
                >
                  <span className="mr-2">Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
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
