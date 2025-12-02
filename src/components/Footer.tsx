export default function Footer() {
    return (
        <footer className="bg-[var(--color-akita-snow)] text-[var(--color-text-muted)] py-16 mt-20 border-t border-[var(--color-cedar-wood)]/20">
            <div className="container mx-auto px-6 text-center">
                <p className="mb-4 text-[var(--color-cedar-green)] font-bold text-lg tracking-widest uppercase">AIU Cedar Society</p>
                <p className="text-sm mb-8 max-w-md mx-auto leading-relaxed">
                    秋田の未来を、学生と経済界の対話で拓く。<br />
                    Connecting Students, Empowering Akita.
                </p>
                <p className="text-xs opacity-60 tracking-wider">&copy; {new Date().getFullYear()} AIU Cedar Society. All rights reserved.</p>
            </div>
        </footer>
    );
}
