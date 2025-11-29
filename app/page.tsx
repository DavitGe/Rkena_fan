import VideoHero from "@/components/VideoHero";
import NewsCard from "@/components/NewsCard";

const NEWS_ITEMS = [
  {
    title: "GIGA CHIKADZE RETURNS TO TBILISI",
    date: "29.11.2025",
    excerpt:
      "The Georgian Ninja comes home to defend his legacy against a mystery opponent.",
    category: "FIGHT NEWS",
  },
  {
    title: "TOPURIA TAKES P4P SPOT",
    date: "28.11.2025",
    excerpt:
      "After a stunning knockout victory, Ilia Topuria ascends to the throne.",
    category: "RANKINGS",
  },
  {
    title: "NEW GYM IN KUTAISI",
    date: "25.11.2025",
    excerpt:
      "Expanding the reach of combat sports, RKENA launches a state-of-the-art facility.",
    category: "COMMUNITY",
  },
  {
    title: "DVALISHVILI VS MERAB",
    date: "24.11.2025",
    excerpt: "Contracts are signed. The machine faces the unbreakable.",
    category: "ANNOUNCEMENT",
  },
  {
    title: "GURAM KUTATELADZE SECURES WIN",
    date: "20.11.2025",
    excerpt: "A dominant performance puts Guram back in title contention.",
    category: "FIGHT RESULT",
  },
];

export default function Home() {
  return (
    <main className="bg-transparent min-h-screen">
      {/* Hero Section - Sticky & animated internally */}
      <VideoHero />

      {/* News Section - Slides over hero */}
      <div className="relative z-10 bg-rkena-black min-h-screen border-t-8 border-rkena-red mt-[-10vh]">
        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* Sticky Header for News */}
          <div className="sticky top-20 z-20 bg-rkena-black/90 backdrop-blur-sm py-8 mb-12 border-b-8 border-rkena-light flex items-end justify-between">
            <div>
              <h2 className="text-6xl md:text-9xl font-black text-rkena-light uppercase tracking-tighter leading-none skew-x-[-5deg]">
                NEWS<span className="text-rkena-red">FEED</span>
              </h2>
            </div>
            <div className="hidden md:block animate-spin w-12 h-12 border-8 border-rkena-red border-t-transparent rounded-full mb-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {NEWS_ITEMS.map((item, idx) => (
              <NewsCard
                key={idx}
                title={item.title}
                date={item.date}
                excerpt={item.excerpt}
                category={item.category}
              />
            ))}
          </div>

          <div className="mt-24 text-center pb-20">
            <button className="brutalist-button text-3xl w-full md:w-auto hover:skew-x-12 transition-transform">
              LOAD ARCHIVES
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
