import { PropertiesCard } from "@/components";
import Hero from "@/components/Hero";

import { motion } from "framer-motion";

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

function MyFavourite() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Hero image="../images/favourite/hero-bg.png" title="My Favourite" />
      <div className="grid grid-cols-3 gap-[30px] container mt-[50px] mb-[100px]">
        {userData.map((user, index) => (
          <PropertiesCard user={user} key={index} />
        ))}
      </div>
    </motion.div>
  );
}

export default MyFavourite;
