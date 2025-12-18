import { Info, HelpCircle } from 'lucide-react';

export function WarriorManual() {
    return (
        <div className="app-shell border-b-4 border-black">
            <aside className="avatar-panel bg-[#4e4a67]/30 border-r-4 border-black">
                <div className="w-24 h-24 bg-black/40 border-4 border-black flex items-center justify-center text-[var(--color-yellow)] shadow-[4px_4px_0px_#000]">
                    <HelpCircle size={40} className="animate-spin-slow" />
                </div>
                <div className="mt-8 text-center px-4">
                    <h2 className="font-pixel text-[10px] text-white">MANUAL</h2>
                    <p className="font-pixel text-[6px] text-white/40 mt-2 leading-relaxed uppercase">The Laws of Chronos</p>
                </div>
            </aside>

            <main className="content-panel space-y-12">
                <header>
                    <h1 className="font-pixel text-2xl mb-2 [text-shadow:4px_4px_0px_#000]">WARRIOR MANUAL</h1>
                    <div className="h-1 w-24 bg-[var(--color-gold)]" />
                </header>

                <div className="space-y-12 max-w-2xl">
                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-[var(--color-yellow)]">
                            <Info size={18} />
                            <h3 className="font-pixel text-[10px] uppercase">Core Mechanics</h3>
                        </div>
                        <div className="pixel-box bg-[#1a1625] p-6 space-y-6">
                            <div className="space-y-3">
                                <h4 className="font-pixel text-[8px] text-white underline">Health (HP)</h4>
                                <p className="font-pixel text-[7px] text-[var(--text-muted)] leading-relaxed">
                                    Represents your future health-score. Losing HP means you are trading your future longevity for temporary dopamine. HP decreases as Debt increases.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-pixel text-[8px] text-white underline">Experience (XP)</h4>
                                <p className="font-pixel text-[7px] text-[var(--text-muted)] leading-relaxed">
                                    Earned by completing high-impact quests like Deep Work or Skill Study. High XP reflects a person who owns their time.
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h4 className="font-pixel text-[8px] text-white underline">Mana (MP)</h4>
                                <p className="font-pixel text-[7px] text-[var(--text-muted)] leading-relaxed">
                                    Your daily energy pool. It resets every 24 hours. If your Mana drops too low, you become vulnerable to Debuffs.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-[var(--color-red)]">
                            <Info size={18} />
                            <h3 className="font-pixel text-[10px] uppercase">The Concept of Debt</h3>
                        </div>
                        <div className="pixel-box bg-black/40 p-6">
                            <p className="font-pixel text-[7px] text-[var(--text-muted)] leading-loose">
                                Every hour spent on high-corruption activities (Social Media, Junk TV, Late Sleep) creates
                                <span className="text-[var(--color-red)]"> TIME DEBT</span>.
                                <br /><br />
                                This debt is not free. It is borrowed from your 50-year-old self. Chronos the Debt-Eater collects interest in the form of your metabolic energy and cognitive focus.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-4 text-[var(--color-green)]">
                            <Info size={18} />
                            <h3 className="font-pixel text-[10px] uppercase">Rituals of Purity</h3>
                        </div>
                        <div className="pixel-box bg-green-900/10 p-6">
                            <p className="font-pixel text-[7px] text-[var(--text-muted)] leading-loose">
                                To fight back, you must perform <span className="text-[var(--color-green)]">Purification Rituals</span>.
                                Waking early, exercising, and deep meditation transmute your debt back into pure Time Wealth.
                            </p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
