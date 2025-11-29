import RankingTable from "@/components/RankingTable";

const FEATHERWEIGHT = [
  { rank: 'C', name: "ILIA TOPURIA", record: "16-0-0", country: "ESP/GEO" },
  { rank: 1, name: "MAX HOLLOWAY", record: "26-7-0", country: "USA" },
  { rank: 2, name: "GIGA CHIKADZE", record: "15-3-0", country: "GEO" },
  { rank: 3, name: "MOVSAR EVLOEV", record: "18-0-0", country: "RUS" },
  { rank: 4, name: "BRIAN ORTEGA", record: "16-3-0", country: "USA" },
];

const BANTAMWEIGHT = [
  { rank: 'C', name: "SEAN O'MALLEY", record: "18-1-0", country: "USA" },
  { rank: 1, name: "MERAB DVALISHVILI", record: "17-4-0", country: "GEO" },
  { rank: 2, name: "CORY SANDHAGEN", record: "17-4-0", country: "USA" },
  { rank: 3, name: "PETR YAN", record: "17-5-0", country: "RUS" },
  { rank: 4, name: "MARLON VERA", record: "23-9-1", country: "ECU" },
];

const MIDDLEWEIGHT = [
  { rank: 'C', name: "DRICUS DU PLESSIS", record: "21-2-0", country: "RSA" },
  { rank: 1, name: "SEAN STRICKLAND", record: "28-6-0", country: "USA" },
  { rank: 2, name: "ISRAEL ADESANYA", record: "24-3-0", country: "NGR" },
  { rank: 3, name: "ROMAN DOLIDZE", record: "13-3-0", country: "GEO" },
  { rank: 4, name: "ROBERT WHITTAKER", record: "25-7-0", country: "AUS" },
];

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-black text-rkena-light p-4 md:p-12 pb-32">
      <div className="max-w-5xl mx-auto">
        <header className="mb-16 md:mb-24">
           <div className="border-l-8 md:border-l-[16px] border-rkena-red pl-4 md:pl-8 py-4">
             <h1 className="text-[12vw] md:text-9xl font-black uppercase tracking-tighter leading-[0.85]">
               RANKINGS
             </h1>
             <p className="mt-4 md:mt-6 text-sm md:text-xl font-mono text-rkena-red font-bold tracking-widest">
               OFFICIAL STANDINGS // UPDATED NOV 29
             </p>
           </div>
        </header>

        <div className="space-y-20 md:space-y-32">
           <RankingTable weightClass="FEATHERWEIGHT" fighters={FEATHERWEIGHT as any} />
           <RankingTable weightClass="BANTAMWEIGHT" fighters={BANTAMWEIGHT as any} />
           <RankingTable weightClass="MIDDLEWEIGHT" fighters={MIDDLEWEIGHT as any} />
        </div>
        
        <footer className="mt-32 border-t-4 border-rkena-red pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
           <div>
             <h4 className="text-2xl md:text-3xl font-black uppercase mb-4">CRITERIA</h4>
             <p className="text-zinc-500 font-mono text-sm md:text-base leading-relaxed">
               Rankings are determined by a voting panel of media members. Fighters are eligible to be ranked in multiple weight classes if they have competed in those weight classes in the last 18 months.
             </p>
           </div>
           <div className="flex flex-col justify-end items-start md:items-end overflow-hidden">
              <span className="block text-[15vw] md:text-9xl font-black text-zinc-900 select-none leading-none">
                RKENA
              </span>
           </div>
        </footer>
      </div>
    </div>
  );
}
