import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

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
    <div>
      <div className="[background-image:url(../images/about/about-bg.png)] bg-no-repeat w-[99dvw] bg-cover">
        <div className="container py-[227px] text-center text-white">
          <h1 className="heading text-[60px]">About Us</h1>
          <div className="flex items-center w-[130px] mx-auto">
            <Link to="/">Home</Link> <ChevronRight />
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-[100px] text-dark-500">
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
        <div></div>
      </div>
    </div>
  );
}

export default About;
