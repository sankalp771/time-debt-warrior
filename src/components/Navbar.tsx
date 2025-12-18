import { NavLink } from 'react-router-dom';
import { Home, Sword, History, BarChart3, Droplet, BookOpen } from 'lucide-react';

export function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <div className="nav-icon"><Home size={20} /></div>
                <span>HOME</span>
            </NavLink>
            <NavLink to="/quests" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <div className="nav-icon"><Sword size={20} /></div>
                <span>QUESTS</span>
            </NavLink>
            <NavLink to="/history" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <div className="nav-icon"><History size={20} /></div>
                <span>LOG</span>
            </NavLink>
            <NavLink to="/analytics" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <div className="nav-icon"><BarChart3 size={20} /></div>
                <span>DEBT</span>
            </NavLink>
            <NavLink to="/purification" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <div className="nav-icon"><Droplet size={20} /></div>
                <span>PURGE</span>
            </NavLink>
            <NavLink to="/manual" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <div className="nav-icon"><BookOpen size={20} /></div>
                <span>MANUAL</span>
            </NavLink>
        </nav>
    );
}
