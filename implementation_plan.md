# Implementation Plan: Time Debt Tracker

## 1. Executive Summary
This project is a high-fidelity, frontend-only visualization tool designed to track "Time Debt" with the aesthetic gravity of a premium banking application. The goal is to create emotional resonance through numerical visualization of time usage.

**Core Philosophy:** "Every scroll is a loan. Every effort is an investment."

## 2. Technology Stack
*   **Framework:** React (via Vite) - For robust state management of "ticking" time and component interactions.
*   **Language:** TypeScript - For clear data modeling of time "transactions".
*   **Styling:** Vanilla CSS (CSS Modules) - To allow for absolute creative control over gradients, glows, and animations without framework constraints.
*   **Animation:** Framer Motion - For complex entrance animations, smooth number counting, and layout transitions.
*   **Icons:** Lucide-React - Minimal, clean iconography.

## 3. Design System Strategy
*   **Aesthetic:** "Dark Future Finance".
*   **Color Palette (Strict Adherence):**
    *   **Background:** `#0B0F14` (Deep Void)
    *   **Debt Red:** `#FF4D4D` (High Contrast Warning)
    *   **Investment Green:** `#4ADE80` (Growth/Recovery)
    *   **Warning Yellow:** `#FACC15` (Caution)
    *   **Text:** White / Light Grey with varying opacity for hierarchy.
*   **Typography:** Large, tabular numbers (for stability in animations). San-serif clean fonts (Inter or Roboto).
*   **Visual Motifs:**
    *   Subtle noise/grain overlays to prevent "flatness".
    *   Slow, breathing glows (Red/Green).
    *   Glassmorphism for panels (blur filters).

## 4. Architecture & Data Model

### Data Structure (Dummy Data)
All state will be held in a global `TimeContext`.

```typescript
type ActivityType = 'expense' | 'investment';

interface Activity {
  id: string;
  name: string; // e.g., "Doom Scrolling"
  durationHours: number;
  futureImpact: number; // e.g., -5.2 or +2.1
  timestamp: number;
}

interface UserState {
  availableTimeToday: number; // Starts at 24.0, ticks down
  totalTimeDebt: number; // The scary number (accumulates interest)
  futureHealthScore: number; // 0-100
  history: Activity[];
}
```

### State Management
*   **The Ticker:** A `useEffect` hook will run every ~100ms to decrement `availableTimeToday` and slightly increment `totalTimeDebt` (simulating compound interest) when the user is idle, creating a sense of urgency.

## 5. Component Breakdown (Single Page Flow)

1.  **`HeroSection`**
    *   Visual: Full height, grainy dark bg. 
    *   Key Element: A giant counter ticking down milliseconds of the current day.
    *   Action: "View Your Time Wallet" (Scrolls down).

2.  **`TimeWalletDashboard`**
    *   Visual: The "Ring" chart.
    *   Logic: SVG Circle with `stroke-dasharray` animated based on `availableTimeToday`.
    *   Stats: "Invested" vs "Borrowed" summaries.

3.  **`ActivityInput` (The "Transaction" Terminal)**
    *   UI: Slider for hours + Grid of buttons for activity types.
    *   Feedback: When submitted, the screen dims, and a large Floating Counter animation plays (`+5 hrs DEBT`).

4.  **`DebtVisualizer`**
    *   Visual: A "Snowball" graph (Area chart).
    *   Animation: The red area slowly expands nicely.
    *   Message: "Interest accumulates daily."

5.  **`FutureSelfCards`**
    *   UI: Horizontal scroll-snap cards.
    *   Content: Hard-hitting facts calculated from the debt.

6.  **`RecoveryPlan`**
    *   UI: Checklist of "Payments".
    *   Interaction: Clicking an item creates a satisfying "green flash" and reduces the debt number.

## 6. Implementation Workflow

### Phase 1: Foundation (Day 1)
*   Initialize Vite + React + TS.
*   Setup `index.css` with CSS Variables for the strict color palette and global typography.
*   Create the "Noise" background overlay component.

### Phase 2: The Core Engine
*   Build `TimeContext` to manage the dummy data and the "Ticking" logic.
*   Ensure the numbers format correctly (e.g., `23.95h`).

### Phase 3: The Dashboard (Wallet)
*   Build the `HeroSection` and the `TimeWallet` ring.
*   Implement the "smooth scroll" behavior.

### Phase 4: Interactions (Getting into Debt)
*   Build the `ActivityInput` section.
*   Implement the logic: Adding "Netflix" -> Increases Debt, Reduces Available Time.
*   Add the "Heavy" animation feedback on submit.

### Phase 5: Consequence & Recovery
*   Build the `DebtVisualizer` and `FutureSelfCards`.
*   Build the `RecoveryPlan` section.

### Phase 6: Polish
*   Add sound effects (optional/muted by default) - user asked for "ticking sound".
*   Tune animations (Framer Motion).
*   Responsive check.

