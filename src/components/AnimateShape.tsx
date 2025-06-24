import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ImageProps {
  image: string;
  type: boolean;
}

export default function ImageComponent({ image, type }: ImageProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // bir marta scroll bo‘lsa bas

  return (
    <motion.img
      ref={ref}
      src={image}
      initial={{ x: type ? "100px" : "-100px", opacity: 50 }}
      animate={isInView ? { x: 0, opacity: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 1.2,
      }}
      viewport={{ once: true, amount: 0.3 }} // <-- bu qo‘shildi
      style={{ width: "150px", height: "auto", position: "absolute" }}
      className="absolute translate-[-75%]"
    />
  );
}
