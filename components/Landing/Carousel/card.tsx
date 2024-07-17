"use client";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

const Card = ({
  i,
  progress,
  range,
  targetScale,
  children,
}: FramerCardProps) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="lg:h-screen  w-full flex top-0 justify-center items-center sticky"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 50}px)`,
        }}
        className="p-2 w-full rounded-sm flex justify-center items-center relative"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Card;
