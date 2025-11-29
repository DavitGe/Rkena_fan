'use client';

import { motion } from 'framer-motion';

interface Fighter {
  rank: number | 'C';
  name: string;
  record: string;
  country: string;
}

interface RankingTableProps {
  weightClass: string;
  fighters: Fighter[];
}

export default function RankingTable({ weightClass, fighters }: RankingTableProps) {
  return (
    <div className="mb-24">
      {/* Header */}
      <div className="flex items-end gap-4 mb-6 overflow-x-hidden">
        <h3 className="text-3xl md:text-5xl font-black uppercase bg-rkena-red text-black inline-block px-4 md:px-6 py-2 skew-x-[-10deg] border-4 border-black shadow-[4px_4px_0px_#ecedd8] md:shadow-[8px_8px_0px_#ecedd8]">
          {weightClass}
        </h3>
        <div className="flex-grow h-4 bg-rkena-red skew-x-[-10deg] mb-2 opacity-50"></div>
      </div>
      
      {/* Table Container */}
      <div className="border-t-8 border-rkena-red">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-2 md:gap-4 p-2 md:p-4 bg-black border-b-4 border-rkena-red text-rkena-red font-mono text-xs md:text-sm tracking-widest uppercase">
          <div className="col-span-2 md:col-span-1">Rank</div>
          <div className="col-span-6 md:col-span-5">Fighter</div>
          <div className="col-span-4 md:col-span-2 text-center">Country</div>
          <div className="col-span-0 md:col-span-4 text-right hidden md:block">Record</div>
        </div>

        {/* Rows */}
        <div className="bg-black">
          {fighters.map((fighter, index) => (
            <motion.div 
              key={fighter.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20, 
                delay: index * 0.1 
              }}
              className={`
                relative grid grid-cols-12 gap-2 md:gap-4 p-3 md:p-6 items-center
                border-b-4 border-zinc-900 cursor-default group
                ${fighter.rank === 'C' ? 'bg-zinc-900 border-rkena-red' : 'hover:bg-zinc-900'}
              `}
            >
              {/* Hover Flash */}
              <div className="absolute inset-0 bg-rkena-light opacity-0 group-hover:opacity-5 transition-opacity duration-75 pointer-events-none mix-blend-difference" />

              {/* Rank */}
              <div className="col-span-2 md:col-span-1 relative">
                <span className={`
                  text-2xl md:text-4xl font-black italic
                  ${fighter.rank === 'C' ? 'text-rkena-red' : 'text-zinc-600 group-hover:text-rkena-light'}
                  transition-colors duration-200 group-hover:translate-x-2 inline-block
                `}>
                  {fighter.rank}
                </span>
              </div>

              {/* Name */}
              <div className="col-span-6 md:col-span-5">
                <h4 className={`
                  text-lg md:text-3xl font-bold uppercase tracking-tighter leading-none
                  ${fighter.rank === 'C' ? 'text-rkena-light' : 'text-zinc-400 group-hover:text-rkena-light'}
                  transition-colors duration-200
                `}>
                  {fighter.name}
                </h4>
                {fighter.rank === 'C' && (
                  <span className="inline-block bg-rkena-red text-black text-[10px] font-black px-2 py-0.5 mt-1 skew-x-[-10deg]">
                    CHAMPION
                  </span>
                )}
              </div>

              {/* Country */}
              <div className="col-span-4 md:col-span-2 flex justify-center">
                <span className="text-xs md:text-base font-mono font-bold text-zinc-500 group-hover:text-rkena-red transition-colors border-2 border-zinc-800 px-1 md:px-2 py-1">
                  {fighter.country}
                </span>
              </div>

              {/* Record */}
              <div className="hidden md:block col-span-4 text-right">
                 <span className="text-2xl font-black text-stroke text-transparent stroke-zinc-600 group-hover:stroke-rkena-light transition-colors">
                   {fighter.record}
                 </span>
              </div>

              {/* Brutalist Side Accent on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-rkena-red transform scale-y-0 group-hover:scale-y-100 transition-transform duration-100 origin-bottom" />
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .text-stroke {
          -webkit-text-stroke: 1px;
        }
      `}</style>
    </div>
  );
}
