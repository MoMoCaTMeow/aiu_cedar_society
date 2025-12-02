import { reader } from "@/utils/reader";
import LectureCard from "@/components/LectureCard";

export default async function Home() {
  const lectures = await reader.collections.lectures.all();

  // Sort lectures by date (descending)
  const sortedLectures = lectures.sort((a, b) => {
    const dateA = a.entry.date ? new Date(a.entry.date).getTime() : 0;
    const dateB = b.entry.date ? new Date(b.entry.date).getTime() : 0;
    return dateB - dateA;
  });

  return (
    <div className="pb-20 bg-[var(--color-akita-snow)]">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[var(--color-cedar-green)]">
          {/* Abstract Cedar Texture */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[var(--color-cedar-green)] to-transparent"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center text-white">
          <p className="text-[var(--color-cedar-wood)] font-bold tracking-[0.2em] mb-4 uppercase text-sm md:text-base">
            Official Student Organization
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-wide leading-tight">
            AIU Cedar Society
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/80 leading-relaxed font-light tracking-wide mb-12">
            秋田の未来を、<br className="md:hidden" />学生と経済界の対話で拓く。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#mission" className="px-8 py-3 border border-white/30 hover:bg-white hover:text-[var(--color-cedar-green)] transition-all duration-300 rounded-full backdrop-blur-sm">
              私たちの使命
            </a>
            <a href="#lectures" className="px-8 py-3 bg-[var(--color-cedar-wood)] text-white hover:bg-[#8a6e51] transition-all duration-300 rounded-full shadow-lg">
              最新の講演会
            </a>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[var(--color-cedar-green)] font-bold tracking-widest text-sm uppercase mb-2 block">Mission</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-main)] mb-12">
              「挑戦」と「共創」の<br />エコシステムを作る
            </h2>
            <p className="text-gray-600 leading-loose text-lg mb-12 text-justify md:text-center">
              AIU Cedar Societyは、国際教養大学（AIU）の学生と秋田の経済界をつなぐ架け橋です。<br />
              若者の流出という課題に対し、私たちは「秋田でこそ得られる学び」と「実践の場」を創出します。<br />
              20年後、秋田に関わるすべての人が笑顔でいられる未来を目指して。
            </p>
          </div>
        </div>
      </section>

      {/* Lecture List Section */}
      <section id="lectures" className="container mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-16 border-b border-gray-200 pb-6">
          <div>
            <span className="text-[var(--color-cedar-wood)] font-bold tracking-widest text-xs uppercase mb-2 block">Events</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-cedar-green)]">
              Lecture Series
            </h2>
          </div>
          <div className="hidden md:block text-sm text-gray-500">
            各界のトップランナーによる特別講義
          </div>
        </div>

        {sortedLectures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {sortedLectures.map((lecture) => (
              <LectureCard key={lecture.slug} slug={lecture.slug} entry={lecture.entry} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-sm border border-gray-100 shadow-sm">
            <p className="text-gray-400 text-lg font-light">Coming Soon...</p>
          </div>
        )}
      </section>
    </div>
  );
}
