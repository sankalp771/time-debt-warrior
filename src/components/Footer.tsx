export function Footer() {
    return (
        <footer className="py-20 px-6 text-center bg-black/40 border-t-4 border-black mt-20">
            <div className="max-w-3xl mx-auto space-y-8">
                <h2 className="font-pixel text-lg md:text-xl leading-tight">
                    <span className="block text-[var(--color-yellow)] mb-4">GAME SAVED...</span>
                    <span className="block text-white">YOUR FUTURE AWAITS.</span>
                </h2>

                <p className="font-pixel text-[8px] text-[var(--color-red)] tracking-widest animate-pulse">
                    &gt; LOGOUT INCOMPLETE: DEBT PERSISTS
                </p>

                <div className="pt-12">
                    <p className="font-pixel text-[8px] text-[var(--text-muted)] mb-2 uppercase">
                        A Concept by Antigravity
                    </p>
                    <p className="font-pixel text-[6px] text-white/20">
                        V 1.2.0 - CHRONOS REGION
                    </p>
                </div>
            </div>
        </footer>
    );
}
