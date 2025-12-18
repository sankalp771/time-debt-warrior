import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTime } from '../context/TimeContext';
import { Sun, Dumbbell, Brain, Moon, Sparkles, Heart } from 'lucide-react';

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

const ACTIONS = [
    { id: 'early', label: 'Wake Early', impact: 1.2, icon: <Sun className="w-5 h-5" />, desc: 'Reset circadian mana flow' },
    { id: 'gym', label: 'Purge Weakness', impact: 1.5, icon: <Dumbbell className="w-5 h-5" />, desc: 'Transmute physical energy' },
    { id: 'deep', label: 'Mana Focus', impact: 2.4, icon: <Brain className="w-5 h-5" />, desc: 'Deep restoration of focus' },
    { id: 'sleep', label: 'Restoration', impact: 3.1, icon: <Moon className="w-5 h-5" />, desc: 'Full system cycle recharge' },
];

export function Purification() {
    const { payDebt } = useTime();
    const [completed, setCompleted] = useState<Record<string, boolean>>({});

    const handlePay = (id: string, amount: number) => {
        if (completed[id]) return;
        payDebt(amount);
        setCompleted(prev => ({ ...prev, [id]: true }));
    };

    return (
        <div className="app-shell border-b-4 border-black">
            <aside className="avatar-panel bg-[#27ae60]/10 border-r-4 border-black group">
                <div className="w-24 h-24 bg-black/40 border-4 border-black flex items-center justify-center text-[var(--color-green)] shadow-[4px_4px_0px_#000] transition-transform group-hover:scale-110">
                    <Heart size={40} className="animate-pulse" />
                </div>
                <div className="mt-8 text-center">
                    <h2 className="font-pixel text-[10px] text-white">TEMPLE</h2>
                    <p className="font-pixel text-[6px] text-[var(--color-green)] mt-2">RESTORATION RITES</p>
                </div>
            </aside>

            <main className="content-panel space-y-12 bg-green-900/5">
                <header>
                    <h1 className="font-pixel text-2xl mb-2 [text-shadow:4px_4px_0px_#000]">PURIFICATION</h1>
                    <div className="h-1 w-24 bg-[var(--color-green)]" />
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {ACTIONS.map((action) => (
                        <motion.button
                            key={action.id}
                            layout
                            onClick={() => handlePay(action.id, action.impact)}
                            disabled={completed[action.id]}
                            className={cn(
                                "pixel-box pixel-box-interactive flex flex-col items-start gap-4 transition-all text-left group",
                                completed[action.id] ? "bg-black/40 border-black grayscale opacity-50" : "bg-[#4e4a67] border-black"
                            )}
                        >
                            <div className="flex items-center gap-4 w-full">
                                <div className={cn(
                                    "w-10 h-10 border-2 border-black flex items-center justify-center bg-black/20 text-white",
                                    completed[action.id] && "bg-green-500/20 text-green-400"
                                )}>
                                    {completed[action.id] ? (
                                        <Sparkles className="w-5 h-5 animate-pulse" />
                                    ) : action.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className={cn("font-pixel text-[8px]", completed[action.id] && "line-through text-[var(--color-green)]")}>{action.label}</h3>
                                    <div className="text-[6px] font-pixel text-[var(--text-muted)] mt-1 uppercase">Instant Heal</div>
                                </div>
                            </div>

                            <p className="font-pixel text-[7px] text-[var(--text-secondary)] leading-relaxed italic opacity-80 min-h-[3em]">
                                "{action.desc}"
                            </p>

                            <div className={cn(
                                "w-full text-right font-pixel text-[8px] border-t-2 border-black/20 pt-4 mt-2",
                                completed[action.id] ? "text-[var(--text-muted)]" : "text-[var(--color-green)]"
                            )}>
                                +{action.impact.toFixed(1)} HP
                            </div>
                        </motion.button>
                    ))}
                </div>

                {Object.values(completed).filter(Boolean).length > 0 && (
                    <div className="pixel-box bg-slate-900/50 text-center border-dashed mt-12">
                        <p className="font-pixel text-[8px] text-[var(--text-muted)] uppercase tracking-widest">
                            Current Session Healing: +{
                                Object.entries(completed)
                                    .filter(([_, val]) => val)
                                    .reduce((acc, [id]) => acc + (ACTIONS.find(a => a.id === id)?.impact || 0), 0)
                                    .toFixed(1)
                            } HP TOTAL
                        </p>
                    </div>
                )}
            </main>
        </div>
    );
}
