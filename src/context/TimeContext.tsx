import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ActivityType = 'expense' | 'investment';

export interface Activity {
    id: string;
    name: string;
    type: ActivityType;
    durationHours: number;
    futureImpact: number; // Positive for investment, Negative for expense
    timestamp: number;
}

interface TimeContextType {
    availableTimeToday: number;
    totalTimeDebt: number;
    futureHealthScore: number;
    activities: Activity[];
    addActivity: (activity: Omit<Activity, 'id' | 'timestamp'>) => void;
    payDebt: (amount: number) => void;
}

const TimeContext = createContext<TimeContextType | undefined>(undefined);

export function TimeProvider({ children }: { children: ReactNode }) {
    // AVAILABLE TIME:
    // We sync this to real wall - clock time for the "24h" feel.
    // But strictly speaking, the prompt says "Available Time Today: 24h... Ring slowly drains".
    // Let's make it the remaining hours in the day.
    const calculateRemainingTime = () => {
        const now = new Date();
        const endOfDay = new Date(now);
        endOfDay.setHours(24, 0, 0, 0);
        const diffMs = endOfDay.getTime() - now.getTime();
        return Math.max(0, diffMs / (1000 * 60 * 60)); // Convert to hours
    };

    const [availableTimeToday, setAvailableTimeToday] = useState(calculateRemainingTime());

    // DEBT:
    // Starts at a scary number for the demo.
    const [totalTimeDebt, setTotalTimeDebt] = useState(127.42);

    // HEALTH:
    const [futureHealthScore, setFutureHealthScore] = useState(65);

    const [activities, setActivities] = useState<Activity[]>([]);

    // THE TICKER
    useEffect(() => {
        const interval = setInterval(() => {
            // 1. Update Remaining Time
            setAvailableTimeToday(calculateRemainingTime());

            // 2. Accumulate Interest on Debt (Compound slightly)
            // Only if debt > 0
            setTotalTimeDebt(prev => {
                if (prev <= 0) return 0;
                // Interest rate: roughly 0.0001 hours per tick? 
                // We want it to be visible but slow. 
                // 127 hours * some rate.
                const interestRate = 0.0000005;
                return prev + (prev * interestRate);
            });

        }, 100); // 10Hz update for smooth UI

        return () => clearInterval(interval);
    }, []);

    const addActivity = (partial: Omit<Activity, 'id' | 'timestamp'>) => {
        const newActivity: Activity = {
            ...partial,
            id: crypto.randomUUID(),
            timestamp: Date.now(),
        };

        setActivities(prev => [newActivity, ...prev]);

        // Apply immediate effects
        if (newActivity.type === 'expense') {
            // Expense increases debt (roughly equal to duration? Or just the impact?)
            // Prompt says: "Scroll / Reels" -> "+5.2 hours added to future debt"
            // So use futureImpact.
            setTotalTimeDebt(prev => prev + Math.abs(newActivity.futureImpact));
            // Does it affect available time? Available time is fixed to wall clock, 
            // BUT "Time Borrowed Today" stats might update.
        } else {
            // Investment reduces debt?
            // Prompt: "Clicking actions: Debt number decreases"
            // But adding "Gym" is an activity.
            // Let's say Investments reduce debt (payback).
            setTotalTimeDebt(prev => Math.max(0, prev - newActivity.futureImpact));
        }
    };

    const payDebt = (amount: number) => {
        setTotalTimeDebt(prev => Math.max(0, prev - amount));
    };

    return (
        <TimeContext.Provider value={{
            availableTimeToday,
            totalTimeDebt,
            futureHealthScore,
            activities,
            addActivity,
            payDebt
        }}>
            {children}
        </TimeContext.Provider>
    );
}

export function useTime() {
    const context = useContext(TimeContext);
    if (!context) {
        throw new Error('useTime must be used within a TimeProvider');
    }
    return context;
}
