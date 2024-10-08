"use client";

import { FaArrowRight } from "react-icons/fa6";
import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { BackgroundBeams } from "./ui/background-beams";
import { IoMdDownload } from "react-icons/io";

const handleCV = () => {
  window.open("/antoine-vignes-cv.pdf");
};

const Hero = () => {
  return (
    <div className="pb-12 pt-24">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words="Antoine Vignes, développeur full-stack"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            En formation à la 3W Academy
          </p>
          <div className="flex flex-col gap-2">
            <a href="#projects">
              <MagicButton
                title="Voir mes projets"
                icon={<FaArrowRight />}
                position="right"
              />
            </a>
            <MagicButton
              title="Télécharger mon CV"
              icon={<IoMdDownload />}
              position="right"
              handleClick={handleCV}
            />
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
