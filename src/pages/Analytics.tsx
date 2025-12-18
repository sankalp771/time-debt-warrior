import { motion } from 'framer-motion';
import { useTime } from '../context/TimeContext';
import { Skull, AlertTriangle, Activity } from 'lucide-react';

export function Analytics() {
    const { totalTimeDebt } = useTime();

    // Boss Health Calculation (Max 500 hours for boss hp)
    const bossHpPercent = Math.min(100, (totalTimeDebt / 500) * 100);

    const prophecies = [
        {
            title: "SIX-MONTH VOID",
            value: "1.4K HRS",
            desc: "The abyss awaits. You've traded your 30s for the dopamine of today.",
            type: 'bad'
        },
        {
            title: "SLOTH'S CURSE",
            value: "5.8 HRS",
            desc: "Your daily energy pool is shrinking. Mana regeneration is suppressed.",
            type: 'warning'
        },
        {
            title: "FATAL ERROR",
            value: "COLLAPSE",
            desc: "System failure imminent. The Time-Debt boss is winning.",
            type: 'critical'
        },
    ];

    return (
        <div className="app-shell border-b-4 border-black">
            {/* Boss Identity Anchor (Left) */}
            <aside className="avatar-panel bg-[#1a0f1f] border-r-4 border-black">
                <div className="relative">
                    <img
                        src="/boss.png"
                        alt="Time Devourer Boss"
                        className="avatar-image drop-shadow-[0_0_15px_rgba(247,78,82,0.3)]"
                    />
                    <motion.div
                        animate={{ opacity: [0.4, 0.8, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 bg-red-500/10 rounded-full blur-2xl"
                    />
                </div>
                <div className="mt-12 text-center space-y-4">
                    <h2 className="font-pixel text-[10px] text-[var(--color-red)] tracking-widest leading-loose">
                        CHRONOS<br />THE DEBT-EATER
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <Skull size={12} className="text-[var(--color-red)] animate-pulse" />
                        <span className="font-pixel text-[6px] text-white/50">WORLD BOSS</span>
                    </div>
                </div>

                <div className="w-full max-w-[160px] mt-10 space-y-3">
                    <div className="flex justify-between font-pixel text-[6px] text-[var(--color-red)]">
                        <span>CORRUPTION</span>
                        <span>{Math.round(bossHpPercent)}%</span>
                    </div>
                    <div className="rpg-bar h-2 border-black/60 bg-black">
                        <motion.div className="rpg-bar-fill bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" animate={{ width: `${bossHpPercent}%` }} />
                    </div>
                </div>
            </aside>

            {/* Content Stream (Right) */}
            <main className="content-panel space-y-12 bg-black/20">
                <header>
                    <h1 className="font-pixel text-2xl mb-2 text-[var(--color-red)] [text-shadow:4px_4px_0px_#000]">BOSS ENCOUNTER</h1>
                    <div className="h-1 w-32 bg-[var(--color-red)] shadow-[2px_2px_0px_#000]" />
                </header>

                <div className="grid grid-cols-1 gap-12">
                    {/* Boss Stats Block */}
                    <div className="pixel-box bg-slate-900/80 border-[var(--color-red)] p-8">
                        <div className="flex items-center gap-4 mb-8">
                            <Activity className="text-[var(--color-red)]" size={20} />
                            <h3 className="font-pixel text-sm text-white">DEBT OVERLORD STATS</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex justify-between font-pixel text-[8px] text-[var(--text-muted)]">
                                        <span>CURRENT STRENGTH</span>
                                        <span className="text-white">{totalTimeDebt.toFixed(2)}h</span>
                                    </div>
                                    <div className="h-1 bg-gray-800 w-full" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between font-pixel text-[8px] text-[var(--text-muted)]">
                                        <span>CORRUPTION RATE</span>
                                        <span className="text-[var(--color-red)]">0.05% / CYCLE</span>
                                    </div>
                                    <div className="h-1 bg-gray-800 w-full" />
                                </div>
                            </div>

                            <div className="pixel-box bg-black/40 border-black p-4">
                                <div className="flex items-center gap-3 mb-3">
                                    <AlertTriangle size={14} className="text-[var(--color-yellow)]" />
                                    <span className="font-pixel text-[8px] text-[var(--color-yellow)] uppercase">Intelligence Log</span>
                                </div>
                                <p className="font-pixel text-[7px] text-white/60 leading-relaxed italic">
                                    "Chronos feeds on the minutes you discard. Every hour of debt strengthens his grip on your future health-score."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Void Prophecies Grid */}
                    <div className="space-y-8">
                        <h3 className="font-pixel text-lg [text-shadow:3px_3px_0px_#000]">VOID PROPHECIES</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {prophecies.map((prophecy, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="pixel-box bg-[#1a1625] flex flex-col justify-between hover:border-[var(--color-red)] transition-all group"
                                >
                                    <div>
                                        <h4 className="font-pixel text-[8px] text-[var(--color-yellow)] mb-4 uppercase group-hover:text-[var(--color-red)]">{prophecy.title}</h4>
                                        <div className="font-pixel text-2xl text-white mb-4 group-hover:scale-105 transition-transform">{prophecy.value}</div>
                                    </div>
                                    <p className="font-pixel text-[7px] text-[var(--text-muted)] leading-relaxed mb-6">
                                        {prophecy.desc}
                                    </p>
                                    <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                        <Skull size={12} className="text-[var(--color-red)]" />
                                        <span className="font-pixel text-[6px] text-[var(--color-red)] uppercase tracking-widest">Debuff Active</span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
