import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

interface HeroProps {
  title: string;
  image: string;
}

function Hero({ title, image }: HeroProps) {
  return (
    <div className={`relative`}>
      <img
        className="absolute -z-0 w-[98dvw] h-[570px]"
        src={image}
        alt="hero background image"
      />
      <div className="container py-[227px] text-center text-white relative z-10">
        <h1 className="heading text-[60px]">{title}</h1>
        <div className="flex items-center w-[150px] mx-auto text-[14px]">
          <Link to="/">Home</Link>

          <motion.div
            animate={{
              x: [0, 10, 0], // chapga (0), o‘ngga (10px), yana chapga (0)
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ChevronRight />
          </motion.div>
          <Link className="w-[90px]" to="">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Hero);
