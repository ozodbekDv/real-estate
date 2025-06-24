import AgentCard from "@/components/AgentCard";
import BackForwardBtns from "@/components/BackForwardBtns";
import Hero from "@/components/Hero";

import AnimateShape from "../components/AnimateShape";

import { LucidePlay } from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";

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

const carousel = [
  {
    image: "../images/about/carousel-1.jpg",
  },
  {
    image: "../images/about/carousel-2.jpg",
  },
  {
    image: "../images/about/carousel-3.jpg",
  },
  {
    image: "../images/about/carousel-4.jpg",
  },
  {
    image: "../images/about/carousel-5.webp",
  },
];

function About() {
  const [playVideo, setPlayVideo] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const next = () =>
    setCarouselIndex((prev) =>
      carouselIndex === carousel.length - 2 ? 1 : prev + 1
    );
  const prev = () =>
    setCarouselIndex((prev) =>
      carouselIndex === 1 ? carousel.length - 2 : prev - 1
    );

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
        <div className="relative h-[600px]">
          {playVideo && (
            <video
              className="rounded-2xl"
              autoPlay
              onEnded={() => setPlayVideo(false)}
              src="./about.mp4"
            />
          )}
          {!playVideo && (
            <div className="relative">
              <img
                className="rounded-2xl"
                src="../images/about/about-video-bg.png"
                alt="video background"
              />
              <div
                onClick={() => setPlayVideo((prev) => !prev)}
                className="bg-primary-500 cursor-pointer text-white rounded-full w-14 h-14 flex items-center justify-center absolute top-[50%] right-[50%] translate-y-[-50%] active:scale-85 transition-transform duration-100"
              >
                <div className="absolute inset-0 rounded-full bg-white/10 scale-[1.6]"></div>
                <div className="absolute inset-0 rounded-full bg-white/20 scale-[1.2]"></div>
                <button className="absolute inset-0 flex items-center justify-center cursor-pointer">
                  <LucidePlay />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-[60px] relative">
          <AnimateShape
            image="../images/about/projects-middle.svg"
            type={false}
          />

          {/* TEXT PART */}
          <div className="order-1 lg:order-2">
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
            <BackForwardBtns next={next} prev={prev} />
          </div>

          {/* IMAGE PART */}
          <div className="order-2 lg:order-1 w-[500px] flex items-center gap-[60px]">
            {carousel
              .slice(carouselIndex, carouselIndex + 1)
              .map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  className="h-[300px] w-[200px] object-cover rounded-2xl"
                  alt="image"
                />
              ))}
            {carousel
              .slice(carouselIndex + 1, carouselIndex + 2)
              .map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  className="h-[400px] w-[250px] object-cover rounded-2xl"
                  alt="image"
                />
              ))}
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
