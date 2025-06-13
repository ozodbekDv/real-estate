import { PropertiesCard } from "@/components";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceData = [
  {
    icon: "../icons/medal.svg",
    title: "Best Platform",
  },
  {
    icon: "../icons/home-setting.svg",
    title: "Guaranteed Service",
  },
  {
    icon: "../icons/badge-percent.svg",
    title: "Verified Platform",
  },
];

const userData = [
  {
    name: "Alexa Mate",
    title: "Luxury Apartment in",
    secondTitle: "California",
    price: 250000,
    profileImage: "../images/alexa-mate.png",
    image: "../images/alexa-bg.png",
  },
  {
    name: "Joe Smith",
    title: "Elegant Villa sale in",
    secondTitle: "Miami",
    price: 7500000,
    profileImage: "../images/joe-smith.png",
    image: "../images/joe-bg.png",
  },
  {
    name: "Perry John",
    title: "Duplex Apartment for",
    secondTitle: "Rent in California ",
    price: 4378,
    profileImage: "../images/perry-john.png",
    image: "../images/perry-bg.png",
  },
  {
    name: "Wade Warren",
    title: "Elegant Villa sale in",
    secondTitle: "Miami",
    price: 400000,
    profileImage: "../images/wade-warren.png",
    image: "../images/wade-bg.png",
  },
  {
    name: "John Willions",
    title: "Duplex Apartment for",
    secondTitle: "Rent in California",
    price: 7865,
    profileImage: "../images/john-willions.png",
    image: "../images/john-bg.png",
  },
  {
    name: "Robert Fox",
    title: "Luxury Apartment in",
    secondTitle: "California",
    price: 4579920,
    profileImage: "../images/robert-fox.png",
    image: "../images/robert-bg.png",
  },
];

function Home() {
  return (
    <div className="[background-image:url(../icons/hero-pattern-top.svg)] bg-right-top bg-no-repeat">
      <div className="container flex justify-between my-[50px] ">
        <h1 className="font-secondary font-bold text-[60px] text-dark-500">
          Let’s start search <br /> for your dream home
        </h1>
        <div className="flex flex-col gap-[30px] items-start">
          <p className="w-[437px] text-[20px] text-dark-500">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Link
            to="/login"
            className="rounded-[10px] bg-primary-500 py-4 text-white w-[262px] inline-block px-[90px]"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="left-0 right-0">
        <img
          className="object-cover w-full -z-1"
          src="../images/hero-banner.png"
          alt="hero house"
        />
      </div>
      <div className="container relative">
        <img
          src="../icons/hero-pattern-bottom.svg"
          alt="pattern"
          className="absolute right-0"
        />
        <div className="w-[945px] translate-y-[-50%] h-[100px] bg-primary-500 rounded-10 p-5 flex gap-9">
          <div className="flex gap-4">
            <div className="w-[60px] h-[60px] bg-white-10 rounded-full flex items-center justify-center">
              <img src="../icons/location.svg" alt="location icon" />
            </div>
            <div>
              <h4 className="font-bold text-[20px] mb-[7px] text-white-500">
                Location
              </h4>
              <p className="text-white/50">California, United State</p>
            </div>
          </div>
          <span className="h-[60px] w-[1px] bg-white-10" />
          <div className="flex gap-4">
            <div className="w-[60px] h-[60px] bg-white-10 rounded-full flex items-center justify-center">
              <img src="../icons/coin-dollar.svg" alt="coin icon" />
            </div>
            <div>
              <h4 className="font-bold text-[20px] mb-[7px] text-white-500">
                Price
              </h4>
              <p className="text-white/50">$1000 - $10,000</p>
            </div>
          </div>
          <span className="h-[60px] w-[1px] bg-white-10" />
          <div className="flex gap-4">
            <div className="w-[60px] h-[60px] bg-white-10 rounded-full flex items-center justify-center">
              <img src="../icons/home.svg" alt="home icon" />
            </div>
            <div>
              <h4 className="font-bold text-[20px] mb-[7px] text-white-500">
                Type of Property
              </h4>
              <p className="text-white/50">Apartment</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-10 p-4 bg-white-500">
            <img src="./icons/search-normal.svg" alt="search icon" />
          </div>
        </div>
        <div className="mt-[100px] mb-[100px] relative">
          <h2 className="font-secondary font-bold text-dark-500 text-[40px]">
            Why should good house for you?
          </h2>
          <p className="text-gray-500 mt-[10px]">
            Using it can make you sound like you have been studying english
            <br /> for a long time. Here’s the challenge
          </p>
          <div className="flex gap-5 flex-col mt-[50px]">
            {serviceData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 border-b w-[573px] pb-5"
              >
                <div className="h-[50px] w-[50px] bg-primary-5 rounded-10 flex items-center justify-center">
                  <img src={item.icon} alt={item.title + " icon"} />
                </div>
                <h4 className="font-bold text-[20px] text-dark-500">
                  {item.title}
                </h4>
                <p className="text-gray-500">
                  Using it can make you sound like you have been studying
                  english <br />
                  for a long time. Here’s the challenge
                </p>
              </div>
            ))}
            <img
              className="absolute top-[74px] right-0 w-[571px] h-[800px]"
              src="../images/hero.png"
              alt="happy bro"
            />
          </div>
        </div>
      </div>
      {/* Explore the latest properties available */}
      <div className="bg-gray-5 py-[70px]">
        <div className="container">
          <div className="flex justify-between items-baseline">
            <h2 className="font-bold text-dark-500 text-[40px] font-secondary">
              Explore the latest properties <br /> available
            </h2>
            <div className="flex gap-5">
              <button className="p-4 rounded-10 bg-gray-5 hover:bg-gray-10">
                <ArrowLeft className="text-dark-500" />
              </button>
              <button className="p-4 rounded-10 bg-primary-500 hover:bg-primary-600">
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-[30px]">
            {userData.map((user, index) => (
              <PropertiesCard user={user} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
