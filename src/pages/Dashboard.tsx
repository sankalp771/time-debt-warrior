import { motion } from 'framer-motion';
import { useTime } from '../context/TimeContext';

export function Dashboard() {
    const { availableTimeToday, totalTimeDebt, futureHealthScore } = useTime();

    // Calculate Health (Life Debt). 200 hours is 0% health.
    const healthPercent = Math.max(0, 100 - (totalTimeDebt / 2));
    const manaPercent = (availableTimeToday / 24) * 100;

    return (
        <div className="app-shell border-b-4 border-black">
            {/* Identity Anchor (Left) */}
            <aside className="avatar-panel bg-[#2a2640]">
                <div className="relative group/avatar">
                    <img
                        src="/warrior.png"
                        alt="Warrior"
                        className="avatar-image"
                    />
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black border-2 border-[var(--color-yellow)] text-[8px] font-pixel px-3 py-1 text-[var(--color-yellow)] shadow-lg">
                        LVL 24
                    </div>
                </div>
                <div className="mt-12 text-center space-y-2">
                    <h2 className="font-pixel text-[10px] text-white">TIME WARRIOR</h2>
                    <p className="font-pixel text-[6px] text-[var(--text-muted)] tracking-widest uppercase">ID: 8842 / RECRUIT</p>
                </div>
            </aside>

            {/* Information Stream (Right) */}
            <main className="content-panel space-y-12 bg-[rgba(0,0,0,0.15)]">
                <header className="mb-16">
                    <h1 className="font-pixel text-2xl mb-2 [text-shadow:4px_4px_0px_#000]">PLAYER STATUS</h1>
                    <div className="h-1 w-24 bg-[var(--color-yellow)] shadow-[2px_2px_0px_#000]" />
                </header>

                <div className="grid grid-cols-1 gap-8">
                    {/* Primary Stats Panel */}
                    <div className="pixel-box bg-[var(--bg-card)] p-8 space-y-8">
                        <div className="space-y-4">
                            <div className="flex justify-between font-pixel text-[10px]">
                                <span>LIFE CAPACITY (HEALTH)</span>
                                <span>{Math.round(healthPercent)}%</span>
                            </div>
                            <div className="rpg-bar h-6 border-4 border-black">
                                <motion.div
                                    className="rpg-bar-fill rpg-bar-health"
                                    animate={{ width: `${healthPercent}%` }}
                                    transition={{ type: 'spring', damping: 20 }}
                                />
                                <div className="absolute inset-0 flex items-center justify-center font-pixel text-[8px] text-white drop-shadow-md">
                                    DEBT: {totalTimeDebt.toFixed(2)}h
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex justify-between font-pixel text-[8px] text-[var(--text-muted)]">
                                    <span>EXPERIENCE</span>
                                    <span>{futureHealthScore}/100</span>
                                </div>
                                <div className="rpg-bar h-4">
                                    <motion.div
                                        className="rpg-bar-fill rpg-bar-xp"
                                        animate={{ width: `${futureHealthScore}%` }}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between font-pixel text-[8px] text-[var(--text-muted)]">
                                    <span>MANA</span>
                                    <span>{availableTimeToday.toFixed(2)}h</span>
                                </div>
                                <div className="rpg-bar h-4">
                                    <motion.div
                                        className="rpg-bar-fill rpg-bar-mana"
                                        animate={{ width: `${manaPercent}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Secondary Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="pixel-box bg-[#1a1625] border-[var(--color-blue)] group hover:bg-[#211d33] transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-[var(--color-blue)] animate-pulse" />
                                <h4 className="font-pixel text-[10px] text-[var(--color-blue)]">ACTIVE DEBUFFS</h4>
                            </div>
                            <p className="font-pixel text-[8px] text-[var(--text-muted)] leading-relaxed indent-4">
                                &gt; SLEEP DEPLETION: -1.2 MP/H <br />
                                &gt; PROCRASTINATION AURA: +0.05% DEBT COMPOUND
                            </p>
                        </div>
                        <div className="pixel-box bg-[#16251a] border-[var(--color-green)] group hover:bg-[#1d3321] transition-colors">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-[var(--color-green)] animate-bounce" />
                                <h4 className="font-pixel text-[10px] text-[var(--color-green)]">ACTIVE BUFFS</h4>
                            </div>
                            <p className="font-pixel text-[8px] text-[var(--text-muted)] leading-relaxed indent-4">
                                &gt; MOMENTUM: +5% XP GAIN <br />
                                &gt; DISCIPLINE SHIELD: 0% SNEAK DEBT
                            </p>
                        </div>
                    </div>

                    <div className="pixel-box bg-black/40 border-dashed border-gray-700 py-12 text-center">
                        <p className="font-pixel text-[8px] leading-relaxed text-[var(--text-muted)] max-w-sm mx-auto italic opacity-60">
                            "The clock is a sword. Every second you don't swing it, it swings at you."
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
