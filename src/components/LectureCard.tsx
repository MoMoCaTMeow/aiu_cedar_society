import Link from 'next/link';

interface LectureProps {
    slug: string;
    entry: {
        title: string;
        date: string | null;
        speaker: string;
        summary: string;
        coverImage?: string | null;
    };
}

export default function LectureCard({ slug, entry }: LectureProps) {
    return (
        <Link href={`/lectures/${slug}`} className="group block h-full">
            <div className="bg-white h-full flex flex-col transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                {/* Image Container */}
                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                    {entry.coverImage ? (
                        <img
                            src={entry.coverImage}
                            alt={entry.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[var(--color-cedar-green)] text-white/20">
                            <span className="text-5xl font-bold tracking-tighter">CEDAR</span>
                        </div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-[var(--color-text-main)] text-xs font-bold px-3 py-1 tracking-widest uppercase">
                        {entry.date}
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col border-b-4 border-transparent group-hover:border-[var(--color-cedar-wood)] transition-colors">
                    <div className="mb-4">
                        <span className="text-xs font-bold text-[var(--color-cedar-wood)] tracking-widest uppercase border-b border-[var(--color-cedar-wood)] pb-1">
                            Guest Speaker
                        </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[var(--color-text-main)] leading-snug group-hover:text-[var(--color-cedar-green)] transition-colors">
                        {entry.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 font-medium">
                        {entry.speaker}
                    </p>
                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed opacity-80 mt-auto font-light">
                        {entry.summary}
                    </p>
                </div>
            </div>
        </Link>
    );
}
