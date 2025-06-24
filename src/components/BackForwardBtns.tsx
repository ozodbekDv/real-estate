import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

interface ChildComponentProps {
  prev?: () => void;
  next?: () => void;
}

const BackForwardBtns: React.FC<ChildComponentProps> = ({ next, prev }) => {
  return (
    <div className="flex gap-5">
      <button
        onClick={prev}
        className="p-4 rounded-10 bg-primary-500 hover:bg-primary-700 cursor-pointer"
      >
        <ArrowLeft className="text-white" />
      </button>
      <button
        onClick={next}
        className="p-4 rounded-10 bg-primary-500 hover:bg-primary-700 cursor-pointer"
      >
        <ArrowRight className="text-white" />
      </button>
    </div>
  );
};

export default React.memo(BackForwardBtns);
