'use client';

import { motion } from 'framer-motion';

interface EventCardProps {
  number: string;
  mainEvent: string;
  date: string;
  location: string;
  status: 'UPCOMING' | 'PAST';
  onClick: () => void;
}

export default function EventCard({ number, mainEvent, date, location, status, onClick }: EventCardProps) {
  const isUpcoming = status === 'UPCOMING';

  return (
    <motion.div 
      className="relative group cursor-pointer h-96 overflow-hidden border-4 border-transparent"
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
    >
       {/* Split Screen Backgrounds */}
      <motion.div 
        className={`absolute top-0 left-0 w-full h-1/2 ${isUpcoming ? 'bg-zinc-900' : 'bg-zinc-800'} z-0`}
        variants={{
          rest: { y: 0 },
          hover: { y: -10 },
        }}
        transition={{ duration: 0.3, ease: "circOut" }}
      />
      <motion.div 
        className={`absolute bottom-0 left-0 w-full h-1/2 ${isUpcoming ? 'bg-zinc-900' : 'bg-zinc-800'} z-0 border-t-2 border-rkena-red`}
        variants={{
          rest: { y: 0 },
          hover: { y: 10 },
        }}
        transition={{ duration: 0.3, ease: "circOut" }}
      />

      {/* Hover Reveal Background */}
      <div className={`absolute inset-0 bg-rkena-red -z-10 ${isUpcoming ? 'opacity-100' : 'opacity-50'}`}></div>

      {/* Content Container */}
      <div className="relative z-10 h-full p-6 flex flex-col justify-between">
        {/* Header */}
        <div className="flex justify-between items-start">
           <motion.span 
             className="bg-black text-white px-3 py-1 font-bold text-sm uppercase tracking-widest"
             variants={{ hover: { backgroundColor: "#ecedd8", color: "#000" } }}
           >
             {status}
           </motion.span>
           <span className="font-mono text-xl font-bold text-rkena-red mix-blend-difference">#{number}</span>
        </div>

        {/* Main Content */}
        <div className="space-y-2">
          <motion.h2 
            className="text-4xl md:text-5xl font-black uppercase leading-[0.85] tracking-tighter text-rkena-light break-words"
            variants={{
              rest: { x: 0 },
              hover: { x: 10, color: "#fff" }
            }}
          >
            {mainEvent}
          </motion.h2>
          <motion.p 
             className="text-lg font-bold text-rkena-red uppercase tracking-tight"
             variants={{
               hover: { x: 10, color: "#000" }
             }}
          >
            {location}
          </motion.p>
        </div>

        {/* Footer / Date */}
        <div className="border-t-4 border-black pt-4 mt-4">
           <span className="text-2xl font-black text-transparent text-stroke stroke-white block">
             {date}
           </span>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-2 right-2 w-4 h-4 bg-rkena-red"></div>
      <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
      
      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1px var(--rkena-light);
        }
      `}</style>
    </motion.div>
  );
}
