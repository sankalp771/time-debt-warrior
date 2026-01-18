# Time Debt Warrior (RPG) ⚔️🛡️

> *"The clock is a sword. Every second you don't swing it, it swings at you."*

**Time Debt Warrior** is a gamified productivity application that transforms your relationship with time. Instead of boring charts, it treats your life as an RPG where poor time choices (doomscrolling, procrastination) accumulate **"Time Debt"** (damage) and productive habits (deep work, gym) build **XP** and restore your **Mana**.

![App Screenshot](public/vite.svg) *Note: Replace with actual screenshot*

## 🎮 The Concept

This isn't just a tracker; it's a battle for your future self.

*   **HP (Life Capacity)**: Represents your long-term potential. Accumulating Time Debt reduces your max HP. If it hits 0, you reach "System Collapse."
*   **Time Debt**: The enemy. Every hour wasted adds to a compounding debt that must be paid off.
*   **Mana (Daily Energy)**: You get 24 hours of Mana every day. Spending it wisely (Investments) vs. poorly (Expenses) determines your fate.

## ✨ Key Features

### 1. 📊 Status Dashboard (Two-Column Layout)
*   **Identity Anchor**: A persistent left column featuring your pixel-art avatar (Warrior), Level, and visual stats.
*   **Data Stream**: A rich, scrolling right column displaying your real-time HP, XP, and active Debuffs (e.g., "Procrastination Aura").
*   **Habitica-Inspired Design**: Focuses on data density without clutter, separating "Identity" from "Content."

### 2. 👹 Boss Encounter (Analytics)
*   **Chronos, The-Debt Eater**: Your debt is visualized as a massive World Boss.
*   **Corruption Metrics**: Track how much of your "Soul" (HP) has been corrupted by the boss.
*   **Void Prophecies**: Algorithmic warnings about where you'll be in 6 months if you don't change your habits.

### 3. 📜 Quest Log & History
*   **Daily Quests**: Choose your actions (e.g., "Scroll Reels" -> +Debt, "Deep Work" -> +XP).
*   **Immediate Feedback**: Get instant "Corrupted" or "Purified" notifications based on your choices.
*   **Ledger**: A complete history of your time transactions.

### 4. 🕯️ Purification Temple
*   **Pay Your Debts**: Special actions (Wake Early, Gym, Meditation) that actively reduce your accumulated Time Debt.
*   **Ritual Mechanics**: "Transmute" physical effort into time wealth.

## 🛠️ Tech Stack

*   **Frontend**: React 18 (Vite)
*   **Language**: TypeScript
*   **Styling**: 
    *   **Tailwind CSS** (Utility-first)
    *   **Vanilla CSS Variables** (Theming & RPG Palette)
    *   **Pixel Art Typography** (`Press Start 2P`)
*   **Animations**: Framer Motion (Smooth page transitions & bar fills)
*   **State Management**: React Context API (`TimeContext`)
*   **Storage**: LocalStorage (Persistence)

## 🚀 Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/sankalp771/time-debt-warrior.git
    cd time-debt-warrior
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Run Development Server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 🎨 Design Philosophy

*   **Pixel Perfect**: Uses a strict 8-bit aesthetic for fonts and borders.
*   **Dark Mode Only**: Designed for focus and immersion (colors: `#241c30`, `#34315e`).
*   **Feedback Loops**: Every interaction should feel weighty. Animation is used to deliver dopamine (or regret).

## 🤝 Contributing

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

*Built with failure and caffeine by [Sankalp].*
