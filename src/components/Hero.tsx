import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  image: string;
}

function Hero({ title, image }: HeroProps) {
  return (
    <div className={`relative`}>
      <img
        className="absolute -z-0 w-[99dvw] h-[570px]"
        src={image}
        alt="hero background image"
      />
      <div className="container py-[227px] text-center text-white relative z-10">
        <h1 className="heading text-[60px]">{title}</h1>
        <div className="flex items-center w-[150px] mx-auto text-[14px]">
          <Link to="/">Home</Link> <ChevronRight />
          <Link className="w-[90px]" to="">
            {title}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Hero);
