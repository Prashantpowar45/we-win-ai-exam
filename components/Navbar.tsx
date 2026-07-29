'use me';
'use client';

import React, { useState } from 'react';
import { Language, UserProfile } from '@/lib/types';
import { Trophy, Flame, Zap, Globe, User, ShieldCheck, Bot, Menu, X, Settings, LogOut, LogIn, Sparkles } from 'lucide-react';

interface NavbarProps {
  user: UserProfile | null;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenAiTutor: () => void;
  onOpenAiGenerator: () => void;
  onOpenAdmin: () => void;
  onOpenGamification: () => void;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  user,
  language,
  onLanguageChange,
  onOpenAuth,
  onLogout,
  onOpenAiTutor,
  onOpenAiGenerator,
  onOpenAdmin,
  onOpenGamification,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-win-600 via-blue-500 to-indigo-500 p-0.5 shadow-lg shadow-win-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Trophy className="w-5 h-5 text-win-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-black text-xl tracking-tight text-white group-hover:text-win-300 transition-colors">
                  We_Win23
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded border border-emerald-500/30 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>Proctored AI</span>
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">
                Govt Exam & Aptitude System
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800">
            <button onClick={() => onNavigate('home')} className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              Dashboard
            </button>
            <button onClick={() => onNavigate('categories')} className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              Exams & Categories
            </button>
            <button onClick={() => onNavigate('current-affairs')} className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              Current Affairs (2020-2026)
            </button>
            <button onClick={() => onNavigate('leaderboard')} className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors">
              Leaderboard
            </button>
          </nav>

          {/* User & Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* AI Infinite Practice Generator */}
            <button
              onClick={onOpenAiGenerator}
              className="px-3 py-1.5 rounded-xl bg-indigo-950 border border-indigo-500/30 text-indigo-200 font-bold text-xs hover:bg-indigo-900 transition-colors flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>AI Quiz Gen</span>
            </button>

            {/* Gamification Pills */}
            <button
              onClick={onOpenGamification}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors"
              title="Click to view Badges & XP"
            >
              <div className="flex items-center gap-1 text-amber-400 font-extrabold text-xs">
                <Flame className="w-4 h-4 fill-amber-400 animate-pulse" />
                <span>{user ? user.streakDays : 7} Days</span>
              </div>
              <span className="text-slate-700">|</span>
              <div className="flex items-center gap-1 text-win-400 font-extrabold text-xs">
                <Zap className="w-4 h-4 fill-win-400" />
                <span>{user ? user.xp.toLocaleString() : 3800} XP</span>
              </div>
            </button>

            {/* Language Dropdown */}
            <div className="relative flex items-center bg-slate-900 border border-slate-800 rounded-xl px-2 py-1 text-xs text-slate-200">
              <Globe className="w-3.5 h-3.5 text-win-400 mr-1.5" />
              <select
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-xs font-semibold text-white focus:outline-none cursor-pointer"
              >
                <option value="en" className="bg-slate-900 text-white">English</option>
                <option value="hi" className="bg-slate-900 text-white">हिंदी</option>
                <option value="mr" className="bg-slate-900 text-white">मराठी</option>
              </select>
            </div>

            {/* AI Tutor */}
            <button
              onClick={onOpenAiTutor}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-win-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-win-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4 text-win-200 animate-bounce" />
              <span>We_Win23 AI</span>
            </button>

            {/* Admin Console */}
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-win-500/40 transition-colors"
              title="Open Admin Console"
            >
              <Settings className="w-4 h-4" />
            </button>

            {/* User Profile / Auth State */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-win-500/50 transition-colors"
                >
                  <div className="w-7 h-7 rounded-lg bg-win-600 text-white font-black text-xs flex items-center justify-center">
                    {user.name[0]}
                  </div>
                  <span className="text-xs font-bold text-white max-w-[90px] truncate">{user.name.split(' ')[0]}</span>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-2xl bg-slate-900 border border-slate-800 p-2 shadow-2xl space-y-1 text-xs animate-in fade-in duration-150 z-50">
                    <div className="p-2 border-b border-slate-800">
                      <div className="font-bold text-white">{user.name}</div>
                      <div className="text-[10px] text-slate-400">{user.targetExam}</div>
                    </div>
                    <button
                      onClick={() => { setUserDropdownOpen(false); onLogout(); }}
                      className="w-full text-left p-2 rounded-xl text-rose-400 hover:bg-rose-500/10 font-bold flex items-center gap-2"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      <span>Log Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-4 py-2 rounded-xl bg-win-600 hover:bg-win-500 text-white font-bold text-xs shadow-lg flex items-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Log In / Register</span>
              </button>
            )}

          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-2">
            {!user && (
              <button onClick={onOpenAuth} className="p-2 rounded-xl bg-win-600 text-white text-xs font-bold">
                Log In
              </button>
            )}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in duration-200">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <Flame className="w-4 h-4 fill-amber-400" />
              <span>{user ? user.streakDays : 7} Day Streak</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-win-400">
              <Zap className="w-4 h-4 fill-win-400" />
              <span>{user ? user.xp : 3800} XP</span>
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('home'); }} className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900">
              Dashboard
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('categories'); }} className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900">
              Exams & Categories
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('current-affairs'); }} className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900">
              Current Affairs (2020-2026)
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onOpenAiGenerator(); }} className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-indigo-300 hover:bg-slate-900">
              AI Infinite Quiz Generator
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onNavigate('leaderboard'); }} className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900">
              Leaderboard
            </button>
            {user ? (
              <button onClick={() => { setMobileMenuOpen(false); onLogout(); }} className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-rose-400 hover:bg-slate-900">
                Log Out ({user.name})
              </button>
            ) : (
              <button onClick={() => { setMobileMenuOpen(false); onOpenAuth(); }} className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-win-400 hover:bg-slate-900">
                Log In / Register
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};
