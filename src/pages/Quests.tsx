import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTime } from '../context/TimeContext';
import { Smartphone, Tv, Moon, Dumbbell, Brain, BookOpen, Clock, Sword } from 'lucide-react';

const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ');

type ActivityOption = {
    id: string;
    label: string;
    icon: React.ReactNode;
    type: 'expense' | 'investment';
    multiplier: number;
};

const OPTIONS: ActivityOption[] = [
    { id: 'scroll', label: 'Scroll Reals', icon: <Smartphone className="w-5 h-5" />, type: 'expense', multiplier: 1.5 },
    { id: 'binge', label: 'Binge Watch', icon: <Tv className="w-5 h-5" />, type: 'expense', multiplier: 1.8 },
    { id: 'sleep', label: 'Late Sleep', icon: <Moon className="w-5 h-5" />, type: 'expense', multiplier: 2.0 },
    { id: 'gym', label: 'Gym / Health', icon: <Dumbbell className="w-5 h-5" />, type: 'investment', multiplier: 1.5 },
    { id: 'deepwork', label: 'Deep Work', icon: <Brain className="w-5 h-5" />, type: 'investment', multiplier: 2.0 },
    { id: 'learn', label: 'Skill Study', icon: <BookOpen className="w-5 h-5" />, type: 'investment', multiplier: 1.2 },
];

export function Quests() {
    const { addActivity } = useTime();
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [duration, setDuration] = useState(1);
    const [feedback, setFeedback] = useState<{ visible: boolean, message: string, type: 'good' | 'bad' } | null>(null);

    const handleSubmit = () => {
        if (!selectedId) return;
        const option = OPTIONS.find(o => o.id === selectedId)!;
        const baseImpact = duration * option.multiplier;
        const isExpense = option.type === 'expense';
        const impact = isExpense ? -baseImpact : baseImpact;

        addActivity({
            name: option.label,
            type: option.type,
            durationHours: duration,
            futureImpact: impact
        });

        setFeedback({
            visible: true,
            message: isExpense ? `-${baseImpact.toFixed(1)} HP (CORRUPTION)` : `+${baseImpact.toFixed(1)} XP (PURITY)`,
            type: isExpense ? 'bad' : 'good'
        });

        setTimeout(() => {
            setFeedback(null);
            setSelectedId(null);
            setDuration(1);
        }, 2000);
    };

    return (
        <div className="app-shell border-b-4 border-black">
            <aside className="avatar-panel bg-[#212b36] border-r-4 border-black">
                <div className="w-24 h-24 bg-black/40 border-4 border-black flex items-center justify-center text-[var(--color-yellow)] shadow-[4px_4px_0px_#000]">
                    <Sword size={40} className="animate-pulse" />
                </div>
                <div className="mt-8 text-center">
                    <h2 className="font-pixel text-[10px] text-white">ACTIVE DUTY</h2>
                    <p className="font-pixel text-[6px] text-[var(--text-muted)] mt-2">CHOOSE YOUR FATE</p>
                </div>
            </aside>

            <main className="content-panel space-y-12 bg-black/10">
                <header>
                    <h1 className="font-pixel text-2xl mb-2 [text-shadow:4px_4px_0px_#000]">DAILY QUESTS</h1>
                    <div className="h-1 w-24 bg-[var(--color-yellow)]" />
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {OPTIONS.map(opt => (
                        <button
                            key={opt.id}
                            onClick={() => setSelectedId(opt.id)}
                            className={cn(
                                "pixel-box pixel-box-interactive flex flex-col items-center gap-4 transition-all",
                                selectedId === opt.id ? "border-[var(--color-yellow)] bg-[var(--bg-card-light)] shadow-lg scale-105" : "opacity-80",
                                opt.type === 'expense' ? 'hover:border-[var(--color-red)]' : 'hover:border-[var(--color-green)]'
                            )}
                        >
                            <div className={cn(
                                "w-10 h-10 flex items-center justify-center border-2 border-black bg-black/20",
                                opt.type === 'expense' ? 'text-[var(--color-red)]' : 'text-[var(--color-green)]'
                            )}>
                                {opt.icon}
                            </div>
                            <span className="font-pixel text-[8px] uppercase">{opt.label}</span>
                        </button>
                    ))}
                </div>

                <div className="pixel-box bg-[var(--bg-card)] mt-12 p-8">
                    <label className="flex items-center justify-between mb-8 font-pixel text-[10px]">
                        <span className="flex items-center gap-2">
                            <Clock className="w-4 h-4" /> QUEST DURATION
                        </span>
                        <span className="text-[var(--color-yellow)] font-pixel text-lg">{duration}H</span>
                    </label>
                    <input
                        type="range"
                        min="0.5" max="5" step="0.5"
                        value={duration}
                        onChange={(e) => setDuration(parseFloat(e.target.value))}
                        className="w-full h-4 appearance-none bg-black border-2 border-black cursor-pointer rounded-none
                             [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 
                             [&::-webkit-slider-thumb]:bg-[var(--color-yellow)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-black"
                    />
                </div>

                <button
                    disabled={!selectedId}
                    onClick={handleSubmit}
                    className={cn(
                        "pixel-button w-full h-16 text-xs",
                        !selectedId && "opacity-50 grayscale cursor-not-allowed"
                    )}
                >
                    COMMIT TO QUEST
                </button>
            </main>

            <AnimatePresence>
                {feedback && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm">
                        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="pixel-box bg-black border-[var(--color-yellow)] p-12 text-center max-w-sm">
                            <h3 className={cn("font-pixel text-2xl mb-6", feedback.type === 'bad' ? 'text-[var(--color-red)]' : 'text-[var(--color-green)]')}>
                                {feedback.type === 'bad' ? 'CORRUPTED!' : 'PURIFIED!'}
                            </h3>
                            <div className="font-pixel text-sm text-white">{feedback.message}</div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
