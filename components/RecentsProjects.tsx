import { projects } from "@/data";
import React from "react";
import dynamic from "next/dynamic";
const PinContainer = dynamic(
  () => import("./ui/3d-pin").then((mod) => mod.PinContainer),

  { ssr: false }
);
import { FaLocationArrow } from "react-icons/fa6";

const RecentsProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Une selection de <span className="text-purple">mes projets</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={"Visiter"} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[30vh] h-[30vh] mb-10 rounded-lg">
                <img src={img} alt={title} className="h-[28vh] rounded-lg" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Voir site live
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentsProjects;
