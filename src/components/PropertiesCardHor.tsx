import { Heart, Plus, Share2 } from "lucide-react";

type User = {
  name: string;
  title: string;
  price: number;
  profileImage: string;
  image: string;
};

interface Usern {
  user: User;
}

function PropertiesCardHor({ user }: Usern) {
  const { name, title, price, profileImage, image } = user;
  return (
    <div className="p-5 rounded-2xl bg-white relative flex gap-[30px]">
      <button className="button-share absolute left-[286px] top-9 z-10">
        <Heart />
      </button>
      <img src={image} alt="" />
      <div>
        <h4 className="font-secondary font-bold text-dark-500 text-2xl">
          {title}
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
      </div>
    </div>
  );
}

export default PropertiesCardHor;
