import { Heart, Plus, Share2 } from "lucide-react";

import { motion } from "framer-motion";

type User = {
  name: string;
  title: string;
  secondTitle: string;
  price: number;
  profileImage: string;
  image: string;
};

interface Usern {
  user: User;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

function Card({ user }: Usern) {
  const { name, title, price, profileImage, image, secondTitle } = user;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="p-5 rounded-2xl bg-white relative"
    >
      <button className="button-share absolute right-8 top-9 z-10">
        <Heart />
      </button>
      <img src={image} className="mb-4" alt="" />
      <h4 className="font-secondary font-bold text-dark-500 text-2xl">
        {title}
        <br />
        {secondTitle}
      </h4>
      <span className="mt-2.5 text-dark-500 text-[20px]">${price}</span>
      <p className="text-gray-500 mt-2.5">
        Using it can make you sound like you have been studying english for a
        long time.
      </p>
      <div className="my-4 flex gap-5">
        <span className="flex items-center gap-[10px] ">
          <img src="../icons/pro-sleep.svg" alt="" />
          <span>2</span>
        </span>
        <span className="flex items-center gap-[10px] ">
          <img src="../icons/pro-shower.svg" alt="" />
          <span>2</span>
        </span>
        <span className="flex items-center gap-[10px] ">
          <img src="../icons/pro-car.svg" alt="" />
          <span>1</span>
        </span>
      </div>
      <hr />
      <div className="flex justify-between mt-4">
        <div className="flex gap-2.5 items-center">
          <img className="rounded-full " src={profileImage} alt="user logo" />
          <span>{name}</span>
        </div>
        <div className="flex gap-2 items-center">
          <button className="button-share">
            <Plus />
          </button>
          <button className="button-share">
            <Heart />
          </button>
          <button className="button-share">
            <Share2 />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
