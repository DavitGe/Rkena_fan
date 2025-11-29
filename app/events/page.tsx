'use client';

import EventCard from "@/components/EventCard";
import BrutalistModal from "@/components/BrutalistModal";
import { useState } from "react";
import { motion } from "framer-motion";

const EVENTS = [
  {
    number: "12",
    mainEvent: "CHIKADZE vs KATTAR II",
    date: "DEC 15 2025",
    location: "TBILISI ARENA",
    status: "UPCOMING",
    details: "The highly anticipated rematch. Giga Chikadze looks to settle the score in front of a home crowd. Co-main event features rising star Ilia Topuria defending his title.",
    fights: ["Chikadze vs Kattar", "Topuria vs Volkanovski", "Dvalishvili vs Yan 2", "Dolidze vs Brunson"]
  },
  {
    number: "11",
    mainEvent: "DOLIDZE vs VETTORI",
    date: "NOV 02 2025",
    location: "BATUMI SPORTS PALACE",
    status: "PAST",
    details: "A middleweight clash that determined the next title contender. Dolidze showcased incredible grappling.",
    fights: ["Dolidze vs Vettori", "Kutateladze vs Gamrot", "Gogoladze vs Smith"]
  },
  {
    number: "10",
    mainEvent: "TOPURIA vs HOLLOWAY",
    date: "OCT 10 2025",
    location: "TBILISI ARENA",
    status: "PAST",
    details: "Historical night for Georgian MMA. Topuria solidified his claim as the featherweight king.",
    fights: ["Topuria vs Holloway", "Dvalishvili vs Cejudo", "Chikadze vs Emmett"]
  },
  {
    number: "09",
    mainEvent: "DVALISHVILI vs CEJUDO",
    date: "AUG 22 2025",
    location: "KUTAISI",
    status: "PAST",
    details: "The Machine never stopped. 25 minutes of pure dominance.",
    fights: ["Dvalishvili vs Cejudo", "Dolidze vs Hermansson", "Gogoladze vs Holland"]
  },
  {
    number: "08",
    mainEvent: "GURAM vs GAMROT",
    date: "JUL 05 2025",
    location: "TBILISI",
    status: "PAST",
    details: "Fight of the Night. A technical masterpiece from both lightweights.",
    fights: ["Guram vs Gamrot", "Topuria vs Emmett", "Chikadze vs Yair"]
  }
] as const;

type EventType = typeof EVENTS[number];

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

  return (
    <div className="min-h-screen bg-rkena-black text-rkena-light p-4 md:p-12 pb-32">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 md:mb-20 relative border-b-8 md:border-b-[16px] border-rkena-red pb-4 md:pb-8">
          <motion.h1 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-[20vw] md:text-[15vw] leading-[0.8] font-black uppercase tracking-tighter text-rkena-light"
          >
            EVENTS
          </motion.h1>
          <motion.div 
             initial={{ scaleX: 0 }}
             animate={{ scaleX: 1 }}
             transition={{ delay: 0.5 }}
             className="absolute bottom-0 left-0 w-full h-2 md:h-4 bg-black"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {EVENTS.map((event) => (
            <EventCard
              key={event.number}
              number={event.number}
              mainEvent={event.mainEvent}
              date={event.date}
              location={event.location}
              status={event.status as "UPCOMING" | "PAST"}
              onClick={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      </div>
      
      {/* Modal Integration */}
      <BrutalistModal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.mainEvent || "EVENT DETAILS"}
      >
        {selectedEvent && (
          <div className="space-y-6 md:space-y-8">
             <div className="border-b-4 border-zinc-800 pb-4">
                <span className="block text-rkena-red text-lg md:text-xl font-bold mb-2">
                   {selectedEvent.date} // {selectedEvent.location}
                </span>
                <p className="text-zinc-400 font-mono text-base md:text-lg leading-relaxed">
                   {selectedEvent.details}
                </p>
             </div>
             
             <div>
                <h3 className="text-xl md:text-2xl font-black uppercase mb-4 bg-black text-white inline-block px-2">
                   FIGHT CARD
                </h3>
                <ul className="space-y-2">
                   {selectedEvent.fights.map((fight, idx) => (
                     <li key={idx} className="flex items-center justify-between border-b border-zinc-800 py-3 hover:bg-zinc-900 px-2 transition-colors">
                        <span className="font-bold uppercase tracking-tight text-base md:text-lg">
                          {fight}
                        </span>
                        <span className="text-rkena-red font-mono text-xs md:text-sm">BOUT {idx + 1}</span>
                     </li>
                   ))}
                </ul>
             </div>
             
             <button className="w-full py-3 md:py-4 bg-rkena-red text-black font-black uppercase text-lg md:text-xl hover:skew-x-[-10deg] transition-transform">
                GET TICKETS / WATCH REPLAY
             </button>
          </div>
        )}
      </BrutalistModal>
    </div>
  );
}
