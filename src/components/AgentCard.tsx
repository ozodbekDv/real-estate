interface CardProps {
  name: string;
  image: string;
}

function AgentCard({ name, image }: CardProps) {
  return (
    <div>
      <img className="mb-5" src={image} alt="" />
      <h3 className="font-bold font-secondary text-[24px] mb-2.5">{name}</h3>
      <p className="text-gray-500 mb-5">Real Estate Agent</p>
      <p className="w-[339px]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
    </div>
  );
}

export default AgentCard;
