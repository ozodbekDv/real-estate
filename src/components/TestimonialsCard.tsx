interface User {
  name: string;
  image: string;
}

interface UserProps {
  user: User;
}

function TestimonialsCard({ user }: UserProps) {
  const { name, image } = user;
  return (
    <div className="flex flex-col gap-5 items-start bg-white rounded-10 p-5 [box-shadow:0px_8px_8px_-4px_#10182805,_0px_10px_40px_-4px_#10182805]">
      <img src="../icons/stars.svg" alt="stars" />
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="flex gap-2.5">
        <img src={image} alt="user image" />
        <div>
          <p className="font-bold text-[20px]">{name}</p>
          <p className="text-[14px] text-gray-500">California, United State</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialsCard;
