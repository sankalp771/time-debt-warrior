import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TimeProvider } from './context/TimeContext';
import { Navbar } from './components/Navbar';
import { Dashboard } from './pages/Dashboard';
import { Quests } from './pages/Quests';
import { History } from './pages/History';
import { Analytics } from './pages/Analytics';
import { Purification } from './pages/Purification';
import { WarriorManual } from './pages/WarriorManual';

function App() {
  return (
    <TimeProvider>
      <BrowserRouter>
        <div className="app-container text-white selection:bg-[var(--color-yellow)] selection:text-black bg-[var(--bg-dark)]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/history" element={<History />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/purification" element={<Purification />} />
            <Route path="/manual" element={<WarriorManual />} />
          </Routes>
          <Navbar />
        </div>
      </BrowserRouter>
    </TimeProvider>
  );
}


export default App;

