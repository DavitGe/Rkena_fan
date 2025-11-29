"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function VideoHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="h-[100dvh] w-full overflow-hidden border-b-8 border-rkena-red sticky top-0 z-0"
    >
      {/* Image/GIF Background */}
      <div className="absolute inset-0 bg-black">
        <img
          src="/rkena.webp"
          alt="Background Animation"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Overlay gradient/grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none px-4">
        <motion.h1
          className="text-[20vw] md:text-[15vw] leading-none font-black tracking-tighter text-rkena-light pointer-events-auto mix-blend-difference select-none text-center"
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <span className="animate-glitch block">RKENA</span>
        </motion.h1>
        <motion.p
          className="text-base md:text-3xl font-bold tracking-[0.3em] md:tracking-[0.5em] text-rkena-red uppercase mt-2 md:mt-4 bg-black px-4 md:px-6 py-1 md:py-2 pointer-events-auto border-2 border-rkena-red text-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Georgian MMA Promotion
        </motion.p>
      </div>

      {/* Interactive Layer */}
      <div className="absolute bottom-24 md:bottom-32 w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 z-20 px-6">
        <Link href="/events" className="w-full md:w-auto block">
          <motion.div
            className="brutalist-button group relative overflow-hidden w-full md:w-auto text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Enter Events</span>
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-white animate-pulse transition-all duration-75"></div>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 skew-x-12 transition-opacity duration-300"></div>
          </motion.div>
        </Link>
        <Link href="/rankings" className="w-full md:w-auto block">
          <motion.div
            className="brutalist-button bg-transparent border-rkena-light text-rkena-light hover:bg-rkena-light hover:text-black shadow-none hover:shadow-[4px_4px_0px_#d10d25] relative overflow-hidden w-full md:w-auto text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Rankings</span>
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-rkena-red animate-pulse transition-all duration-75"></div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}
