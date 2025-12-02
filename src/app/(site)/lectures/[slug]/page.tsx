import { reader } from "@/utils/reader";
import { notFound } from "next/navigation";
import { DocumentRenderer } from '@keystatic/core/renderer';
import Link from "next/link";

export async function generateStaticParams() {
    const lectures = await reader.collections.lectures.all();
    return lectures.map((lecture) => ({
        slug: lecture.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const lecture = await reader.collections.lectures.read(slug);

    if (!lecture) return {};

    return {
        title: `${lecture.title} | 国際教養大学 ゲスト講演会`,
        description: lecture.summary,
    };
}

export default async function LecturePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const lecture = await reader.collections.lectures.read(slug);

    if (!lecture) {
        notFound();
    }

    const content = await lecture.content();

    return (
        <div className="bg-[#F9F8F4] min-h-screen pb-20">
            {/* Hero / Header for the lecture */}
            {/* Hero / Header for the lecture */}
            <div className="relative h-[50vh] min-h-[400px] flex items-end">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    {lecture.coverImage ? (
                        <img
                            src={lecture.coverImage}
                            alt={lecture.title}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-[var(--color-cedar-green)] flex items-center justify-center">
                            <span className="text-white/20 text-9xl font-bold tracking-tighter">CEDAR</span>
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-cedar-green)]/90 via-[var(--color-cedar-green)]/60 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 pb-12 text-white">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors font-medium backdrop-blur-sm bg-black/10 px-4 py-2 rounded-full">
                            ← 一覧に戻る
                        </Link>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight tracking-wide drop-shadow-lg">
                            {lecture.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-white/90">
                            {lecture.date && (
                                <span className="bg-[var(--color-cedar-wood)] text-white px-4 py-1.5 rounded-full font-bold shadow-md tracking-wide">
                                    {lecture.date}
                                </span>
                            )}
                            <span className="font-medium bg-black/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                講師: {lecture.speaker}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 -mt-8 relative z-20">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-8 md:p-12 border border-gray-100">
                    {/* Speaker Bio */}
                    <div className="mb-12 p-8 bg-[#F5F7FA] rounded-xl border-l-4 border-[var(--color-cedar-green)]">
                        <h3 className="text-lg font-bold text-[var(--color-cedar-green)] mb-3">講師紹介</h3>
                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{lecture.speakerBio}</p>
                    </div>

                    {/* Summary */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">概要</h2>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-lg">
                            {lecture.summary}
                        </p>
                    </div>

                    {/* Main Content / Report */}
                    <div className="prose prose-lg max-w-none prose-headings:text-[var(--color-cedar-green)] prose-a:text-[var(--color-cedar-wood)] prose-p:leading-loose prose-img:rounded-xl">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">講演レポート</h2>
                        <DocumentRenderer document={content} />
                    </div>
                </div>
            </div>
        </div>
    );
}
