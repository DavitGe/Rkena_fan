'use client';

import { motion } from 'framer-motion';

interface NewsCardProps {
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

export default function NewsCard({ title, date, excerpt, category }: NewsCardProps) {
  return (
    <motion.div 
      className="relative bg-zinc-900 border-4 border-rkena-red p-6 overflow-hidden cursor-pointer"
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { 
          scale: 1,
          boxShadow: "8px 8px 0px #d10d25"
        },
        hover: { 
          scale: 1.02,
          boxShadow: "12px 12px 0px #ecedd8",
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        }
      }}
    >
      {/* Flash Effect */}
      <motion.div 
        className="absolute inset-0 bg-rkena-light z-0 pointer-events-none"
        variants={{
          rest: { opacity: 0 },
          hover: { 
            opacity: [0, 0.2, 0],
            transition: { duration: 0.2, times: [0, 0.5, 1] }
          }
        }}
      />

      {/* Shake Container */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-between"
        variants={{
          hover: {
            x: [-2, 2, -2, 2, 0],
            transition: { duration: 0.4 }
          }
        }}
      >
        <div>
          <div className="flex justify-between items-start mb-6 border-b-4 border-rkena-red pb-4">
            <span className="bg-rkena-red text-black font-black px-2 py-1 text-sm uppercase transform -skew-x-12">
              {category}
            </span>
            <span className="text-rkena-light font-mono text-sm font-bold">{date}</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black uppercase leading-[0.9] text-rkena-light mb-4">
            {title}
          </h3>
          
          <p className="text-zinc-400 font-mono text-sm leading-relaxed border-l-2 border-zinc-700 pl-4">
            {excerpt}
          </p>
        </div>
        
        <div className="mt-8 flex justify-end">
          <motion.span 
            className="text-rkena-red text-2xl font-black uppercase"
            variants={{
              hover: { x: 10 }
            }}
          >
            Read →
          </motion.span>
        </div>
      </motion.div>
    </motion.div>
  );
}
