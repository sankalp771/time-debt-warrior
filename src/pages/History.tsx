import { useTime } from '../context/TimeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Clock, BookText } from 'lucide-react';

export function History() {
    const { activities } = useTime();

    return (
        <div className="app-shell border-b-4 border-black">
            <aside className="avatar-panel bg-[#2d3436] border-r-4 border-black">
                <div className="w-24 h-24 bg-black/40 border-4 border-black flex items-center justify-center text-[var(--color-blue)] shadow-[4px_4px_0px_#000]">
                    <BookText size={40} className="animate-pulse" />
                </div>
                <div className="mt-8 text-center">
                    <h2 className="font-pixel text-[10px] text-white">CHRONICLE</h2>
                    <p className="font-pixel text-[6px] text-[var(--text-muted)] mt-2">THE DEBT RECORD</p>
                </div>
            </aside>

            <main className="content-panel space-y-12 bg-black/5">
                <header>
                    <h1 className="font-pixel text-2xl mb-2 [text-shadow:4px_4px_0px_#000]">QUEST LOG</h1>
                    <div className="h-1 w-24 bg-[var(--color-blue)]" />
                </header>

                <div className="space-y-4">
                    <AnimatePresence mode="popLayout">
                        {activities.length === 0 ? (
                            <div className="pixel-box text-center py-20 bg-black/10 border-dashed border-gray-600">
                                <p className="font-pixel text-[8px] text-[var(--text-muted)] uppercase tracking-widest">The archives are empty...</p>
                            </div>
                        ) : (
                            activities.map((activity, idx) => (
                                <motion.div
                                    key={activity.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`pixel-box flex items-center justify-between border-l-[8px] hover:bg-white/5 transition-colors ${activity.type === 'expense' ? 'border-l-[var(--color-red)]' : 'border-l-[var(--color-green)]'
                                        }`}
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`w-10 h-10 flex items-center justify-center border-2 border-black bg-black/20 ${activity.type === 'expense' ? 'text-[var(--color-red)]' : 'text-[var(--color-green)]'
                                            }`}>
                                            {activity.type === 'expense' ? <Clock size={18} /> : <Shield size={18} />}
                                        </div>
                                        <div>
                                            <h3 className="font-pixel text-[8px] mb-2 uppercase">{activity.name}</h3>
                                            <div className="flex items-center gap-3 font-pixel text-[6px] text-[var(--text-muted)]">
                                                {activity.durationHours}H &bull; {new Date(activity.timestamp).toLocaleTimeString()}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={`font-pixel text-[8px] ${activity.type === 'expense' ? 'text-[var(--color-red)]' : 'text-[var(--color-green)]'
                                        }`}>
                                        {activity.type === 'expense' ? '-' : '+'}{Math.abs(activity.futureImpact).toFixed(1)} {activity.type === 'expense' ? 'HP' : 'XP'}
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
}
