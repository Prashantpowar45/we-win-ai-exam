'use me';
'use client';

import React, { useState } from 'react';
import { Language } from '@/lib/types';
import { Trophy, Flame, Zap, Search, Globe, User, ShieldCheck, Sparkles, Bot, Menu, X, Settings } from 'lucide-react';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenAiTutor: () => void;
  onOpenAdmin: () => void;
  onOpenGamification: () => void;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  onOpenAiTutor,
  onOpenAdmin,
  onOpenGamification,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const langLabels = {
    en: 'English',
    hi: 'हिंदी (Hindi)',
    mr: 'मराठी (Marathi)',
  };

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
                  We Win
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-win-500/20 text-win-300 rounded border border-win-500/30">
                  AI Platform
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-medium">
                Govt Exam & Aptitude Master
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800">
            <button
              onClick={() => onNavigate('home')}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
              Dashboard
            </button>
            <button
              onClick={() => onNavigate('categories')}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
              Exams & Categories
            </button>
            <button
              onClick={() => onNavigate('leaderboard')}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            >
              Leaderboard
            </button>
          </nav>

          {/* Stats, Language, & Action Tools */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Streak & XP Gamification Pills */}
            <button
              onClick={onOpenGamification}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-colors"
              title="Click to view Badges & XP"
            >
              <div className="flex items-center gap-1 text-amber-400 font-extrabold text-xs">
                <Flame className="w-4 h-4 fill-amber-400 animate-pulse" />
                <span>7 Days</span>
              </div>
              <span className="text-slate-700">|</span>
              <div className="flex items-center gap-1 text-win-400 font-extrabold text-xs">
                <Zap className="w-4 h-4 fill-win-400" />
                <span>3,800 XP</span>
              </div>
            </button>

            {/* Multi-Language Dropdown */}
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

            {/* We Win AI Tutor Button */}
            <button
              onClick={onOpenAiTutor}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-win-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-win-500/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4 text-win-200 animate-bounce" />
              <span>We Win AI</span>
            </button>

            {/* Admin Console Trigger */}
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-win-500/40 transition-colors"
              title="Open Admin Console"
            >
              <Settings className="w-4 h-4" />
            </button>

          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onOpenAiTutor}
              className="p-2 rounded-xl bg-win-600 text-white"
            >
              <Bot className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
            >
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
              <span>7 Day Streak</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold text-win-400">
              <Zap className="w-4 h-4 fill-win-400" />
              <span>3,800 XP</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-2 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <span className="text-slate-400">Language:</span>
            <div className="flex gap-2 font-bold">
              {(['en', 'hi', 'mr'] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => onLanguageChange(l)}
                  className={`px-2.5 py-1 rounded ${language === l ? 'bg-win-600 text-white' : 'text-slate-400'}`}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <nav className="flex flex-col space-y-1">
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('home'); }}
              className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              Dashboard
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('categories'); }}
              className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              Exams & Categories
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onNavigate('leaderboard'); }}
              className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              Leaderboard
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenAdmin(); }}
              className="text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900 flex items-center justify-between"
            >
              <span>Admin Management</span>
              <Settings className="w-4 h-4 text-win-400" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
