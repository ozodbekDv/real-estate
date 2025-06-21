import AgentCard from "@/components/AgentCard";
import BackForwardBtns from "@/components/BackForwardBtns";
import Hero from "@/components/Hero";
import { LucidePlay } from "lucide-react";

import { motion } from "framer-motion";

const missionData = [
  {
    title: "Committed Team",
    path: "../images/about/users1.svg",
  },
  {
    title: "Industry Experts",
    path: "../images/about/medal.svg",
  },
  {
    title: "Our Advantages",
    path: "../images/about/like.svg",
  },
  {
    title: "Experienced Agents",
    path: "../images/about/users2.svg",
  },
];

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Hero title={"About Us"} image="../images/about/about-bg.png" />
      <div className="container flex flex-col gap-[100px] text-dark-500 relative">
        <img
          className="absolute right-0 translate-x-[50%]"
          src="../icons/hero-pattern-bottom.svg"
          alt="shape extra"
        />

        <div>
          <h2 className="heading text-[40px] mt-[50px] w-[653px]">
            We are on a mission to change view of real estate field
          </h2>
          <p className="text-gray-500 w-[653px] mt-[10px]">
            Using it can make you sound like you have been studying english for
            a long time. Here’s the challenge
          </p>
          <div className="mt-[50px] grid grid-cols-2 gap-[30px]">
            {missionData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 border-b lg:w-[535px] pb-5"
              >
                <div className="h-[50px] w-[50px] bg-primary-5 rounded-10 flex items-center justify-center">
                  <img src={item.path} alt={item.title + " icon"} />
                </div>
                <h4 className="font-bold text-[20px]">{item.title}</h4>
                <p className="text-gray-500">
                  Using it can make you sound like you have been studying
                  english <br />
                  for a long time. Here’s the challenge
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl"
            src="../images/about/about-video-bg.png"
            alt="video background"
          />
          <div className="bg-primary-500 text-white rounded-full w-14 h-14 flex items-center justify-center absolute top-[50%] right-[50%] translate-y-[-50%]">
            <div className="absolute inset-0 rounded-full bg-white/10 scale-[1.6]"></div>
            <div className="absolute inset-0 rounded-full bg-white/20 scale-[1.2]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <LucidePlay />
            </div>
          </div>
        </div>
        <div className="flex gap-[60px] relative">
          <img
            src="../images/about/projects-middle.svg"
            alt=""
            className="absolute translate-[-75%]"
          />
          <div className="flex gap-[30px] items-center">
            <img src="../images/about/projects-white.png" alt="" />
            <img src="../images/about/projects-brown.png" alt="" />
          </div>
          <div>
            <h2 className="heading text-[40px]">
              250+ Projects all over the world
            </h2>
            <p className="text-gray-500 w-[500px] mb-[50px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem
              sagittis, proin ut lectus sed ut. Enim egestas enim id duis. Eu
              aliquam nec risus bibendum nulla sit et volutpat. Semper proin
              adipiscing sollicitudin et. Ac sed lorem amet, purus. Risus ut
              nulla id lectus mi.
            </p>
            <BackForwardBtns />
          </div>
        </div>
      </div>
      <div className="mb-[100px] mt-[100px] bg-gray-5 py-[70px]">
        <section className="container relative">
          <h2 className="font-secondary mb-2.5 font-bold text-[40px]">
            Our Agents
          </h2>
          <p className="text-gray-500 mb-[50px]">
            Using it can make you sound like you have been studying english for
            <br /> a long time. Here’s the challenge
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-[60px]">
            <AgentCard
              image="../images/agent-Leasie.png"
              name="Leasie Willions"
            />

            <AgentCard
              image="../images/agent-johnson.png"
              name="Johnson Watson"
            />
            <AgentCard image="../images/agent-mark.png" name="Mark Allen" />
          </div>
          <img
            className="absolute right-0 bottom-[-25px] hidden xl:block xl:translate-x-[219%] translate-y-[50%]"
            src="../images/agents-bottom.svg"
            alt="shape"
          />
        </section>
      </div>
    </motion.div>
  );
}

export default About;
