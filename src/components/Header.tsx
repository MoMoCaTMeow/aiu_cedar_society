import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-[var(--color-cedar-wood)]/20 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-xl md:text-2xl font-bold tracking-widest text-[var(--color-cedar-green)] hover:opacity-80 transition-opacity uppercase">
          AIU Cedar Society
        </Link>
        <nav>
          <ul className="flex space-x-8 text-sm font-medium text-[var(--color-text-main)] tracking-wide">
            <li>
              <Link href="/" className="hover:text-[var(--color-cedar-green)] transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-cedar-green)] transition-all group-hover:w-full"></span>
              </Link>
            </li>
            <li>
              <Link href="#mission" className="hover:text-[var(--color-cedar-green)] transition-colors relative group">
                Mission
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-cedar-green)] transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
