import { PropertiesCard, TestimonialsCard } from "@/components";
import { ArrowLeft, ArrowRight, Bath, Bed, CarFront } from "lucide-react";
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

const testimonialsData = [
  {
    name: "Robert Hawkins",
    image: "../images/testimonials-robert.png",
  },
  {
    name: "Dianne Russell",
    image: "../images/testimonials-dianne.png",
  },
  {
    name: "Cody Fisher",
    image: "../images/testimonials-cody.png",
  },
  {
    name: "Cameron Williamson",
    image: "../images/testimonials-cameron.png",
  },
  {
    name: "Wade Warren",
    image: "../images/testimonials-wade.png",
  },
  {
    name: "Marvin McKinney",
    image: "../images/testimonials-marvin.png",
  },
];

function Home() {
  return (
    <main className="[background-image:url(../icons/hero-pattern-top.svg)] bg-right-top bg-no-repeat text-dark-500">
      <section className="container flex justify-between my-[50px] flex-col md:flex-row items-center text-center">
        <h1 className="font-secondary font-bold lg:text-[60px] text-[28px] md:text-[36px]">
          Let’s start search <br /> for your dream home
        </h1>
        <div className="flex flex-col gap-[30px] items-start">
          <p className="lg:text-[20px] w-[200px] md:w-[400px] md:text-[16px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
          <Link
            to="/login"
            className="rounded-[10px] bg-primary-500 py-4 text-white inline-block px-10 md:px-[60px] lg:px-[90px] mx-auto"
          >
            Get Started
          </Link>
        </div>
      </section>
      <div className="left-0 right-0">
        <img
          className="object-cover w-full -z-1"
          src="../images/hero-banner.png"
          alt="hero house"
        />
      </div>
      <section className="container relative">
        <img
          src="../icons/hero-pattern-bottom.svg"
          alt="pattern"
          className="absolute right-0"
        />
        <div className="translate-y-[-50%] h-[100px] bg-primary-500 rounded-10 p-5 flex justify-center sm:gap-3 lg:gap-9 lg:w-[945px]">
          <div className="flex gap-4">
            <div className="w-[60px] md:h-[50px] lg:h-[60px] bg-white-10 rounded-full flex items-center justify-center">
              <img src="../icons/location.svg" alt="location icon" />
            </div>
            <div>
              <h4 className="font-bold md:text-[16px] lg:text-[20px] mb-[7px] text-white-500">
                Location
              </h4>
              <p className="text-white/50 text-[12px]">
                California, United State
              </p>
            </div>
          </div>
          <span className="h-[60px] w-[1px] bg-white-10" />
          <div className="flex gap-4">
            <div className="w-[60px] md:h-[50px] lg:h-[60px] bg-white-10 rounded-full flex items-center justify-center">
              <img src="../icons/coin-dollar.svg" alt="coin icon" />
            </div>
            <div>
              <h4 className="font-bold md:text-[16px] lg:text-[20px] mb-[7px] text-white-500">
                Price
              </h4>
              <p className="text-white/50 text-[12px]">$1000 - $10,000</p>
            </div>
          </div>
          <span className="h-[60px] w-[1px] bg-white-10" />
          <div className="flex gap-4">
            <div className="w-[60px] md:h-[50px] lg:h-[60px] bg-white-10 rounded-full flex items-center justify-center">
              <img src="../icons/home.svg" alt="home icon" />
            </div>
            <div>
              <h4 className="font-bold md:text-[16px] lg:text-[20px] mb-[7px] text-white-500">
                Type of Property
              </h4>
              <p className="text-white/50 text-[12px]">Apartment</p>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-10 p-4 bg-white-500">
            <img src="./icons/search-normal.svg" alt="search icon" />
          </div>
        </div>
        <div className="mt-[100px] mb-[100px] relative">
          <h2 className="font-secondary font-bold text-[40px]">
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
                className="flex flex-col gap-5 border-b lg:w-[573px] pb-5"
              >
                <div className="h-[50px] w-[50px] bg-primary-5 rounded-10 flex items-center justify-center">
                  <img src={item.icon} alt={item.title + " icon"} />
                </div>
                <h4 className="font-bold text-[20px]">{item.title}</h4>
                <p className="text-gray-500">
                  Using it can make you sound like you have been studying
                  english <br />
                  for a long time. Here’s the challenge
                </p>
              </div>
            ))}
            <img
              className="absolute top-[74px] right-0 w-[571px] h-[800px] hidden lg:block"
              src="../images/hero.png"
              alt="happy bro"
            />
          </div>
        </div>
      </section>
      {/* Explore the latest properties available */}
      <section className="bg-gray-5 py-[70px]">
        <div className="container">
          <div className="flex justify-between items-baseline">
            <h2 className="font-bold text-[40px] font-secondary">
              Explore the latest properties <br /> available
            </h2>
            <div className="flex gap-5">
              <button className="p-4 rounded-10 bg-gray-5 hover:bg-gray-10">
                <ArrowLeft className="" />
              </button>
              <button className="p-4 rounded-10 bg-primary-500 hover:bg-primary-600">
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {userData.map((user, index) => (
              <PropertiesCard user={user} key={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="pt-[100px] pb-[100px] md:pb-[200px] container text-center relative">
        <img
          className="absolute top-[52px] translate-x-[-50%]"
          src="../images/features-top.svg"
          alt="sheet shape"
        />
        <h2 className="font-bold text-[40px] font-secondary mb-2.5">
          Featured Properties
        </h2>
        <p className="text-gray-500 mb-[50px]">
          Using it can make you sound like you have been studying english for a
          long time. Here’s the challenge
        </p>
        <img
          className="rounded-2xl"
          src="../images/features-bg.png"
          alt="house image"
        />
        <div className="md:absolute bottom-[100px] right-[100px] mt-[30px] md:w-[516px] text-left text-white bg-primary-500 rounded-10 p-5">
          <h2 className="font-secondary font-bold mb-2.5 text-[24px]">
            Modern luxury sea view villa sale in California
          </h2>
          <p className="md:text-[20px] text-[14px] mb-2.5">$8500000</p>
          <p className="mb-4">
            Using it can make you sound like you have been studying english for
            a long time.
          </p>
          <div className="mb-[30px] flex gap-5 ">
            <span className="flex items-center gap-1 md:gap-[10px] ">
              <Bed />
              <span>2</span>
            </span>
            <span className="flex items-center gap-1 md:gap-[10px]">
              <Bath />
              <span>2</span>
            </span>
            <span className="flex items-center gap-1 md:gap-[10px] ">
              <CarFront />
              <span>1</span>
            </span>
          </div>
          <button className="border border-white rounded-10 py-4 px-12 hover:bg-white hover:text-primary-500 transition-colors duration-300 cursor-pointer">
            More Details
          </button>
        </div>
      </section>

      {/* Our agents */}
      <section className="container pb-[100px] relative">
        <h2 className="font-secondary mb-2.5 font-bold text-[40px]">
          Our Agents
        </h2>
        <p className="text-gray-500 mb-[50px]">
          Using it can make you sound like you have been studying english for
          <br /> a long time. Here’s the challenge
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-[30px] items-center">
          <div>
            <img className="mb-5" src="../images/agent-Leasie.png" alt="" />
            <h3 className="font-bold font-secondary text-[24px] mb-2.5">
              Leasie Willions
            </h3>
            <p className="text-gray-500 mb-5">Real Estate Agent</p>
            <p className="w-[339px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <span className="hidden md:block w-[1px] bg-gray-20" />
          <div>
            <img className="mb-5" src="../images/agent-johnson.png" alt="" />
            <h3 className="font-bold font-secondary text-[24px] mb-2.5">
              Johnson Watson
            </h3>
            <p className="text-gray-500 mb-5">Real Estate Agent</p>
            <p className="w-[339px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <span className="hidden md:block w-[1px] bg-gray-20" />
          <div>
            <img className="mb-5" src="../images/agent-mark.png" alt="" />
            <h3 className="font-bold font-secondary text-[24px] mb-2.5">
              Mark Allen
            </h3>
            <p className="text-gray-500 mb-5">Real Estate Agent</p>
            <p className="w-[339px]">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
        </div>
        <img
          className="absolute right-0 bottom-[-25px] hidden xl:block xl:translate-x-[219%]"
          src="../images/agents-bottom.svg"
          alt="shape"
        />
      </section>

      {/* Testimonials */}
      <div className="bg-gray-5 py-[70px] mb-[100px]">
        <div className="container">
          <div className="flex justify-between items-baseline mb-[50px]">
            <h2 className="font-bold text-[40px] font-secondary">
              Testimonials
            </h2>
            <div className="flex gap-5">
              <button className="p-4 rounded-10 bg-gray-5 hover:bg-gray-10">
                <ArrowLeft className="" />
              </button>
              <button className="p-4 rounded-10 bg-primary-500 hover:bg-primary-600">
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {testimonialsData.map((user, index) => (
              <TestimonialsCard user={user} key={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
