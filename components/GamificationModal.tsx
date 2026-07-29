'use me';
'use client';

import React from 'react';
import { USER_BADGES } from '@/lib/mockExamData';
import { Trophy, Flame, Zap, Award, X, CheckCircle2, Lock } from 'lucide-react';

interface GamificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GamificationModal: React.FC<GamificationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold">
            <Flame className="w-3.5 h-3.5 fill-amber-400" />
            <span>Gamification & Aspirant Level</span>
          </div>
          <h3 className="text-2xl font-black text-white">Your Achievements & XP Badges</h3>
        </div>

        {/* Level & XP Progress Card */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-win-950 to-slate-950 border border-win-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-win-400">Level 12 Candidate</div>
              <div className="text-lg font-black text-white">3,800 XP Earned</div>
            </div>
            <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/30">
              🔥 7 Day Streak Active
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>Progress to Level 13</span>
              <span>200 XP to next rank</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-2.5 overflow-hidden">
              <div className="bg-gradient-to-r from-win-500 to-indigo-500 h-2.5 rounded-full w-[85%]" />
            </div>
          </div>
        </div>

        {/* Badges Grid */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Unlocked Badges
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {USER_BADGES.map((badge) => (
              <div
                key={badge.id}
                className={`p-3.5 rounded-xl border flex items-center gap-3 transition-colors ${
                  badge.unlocked
                    ? 'bg-slate-950 border-slate-800 text-white'
                    : 'bg-slate-950/40 border-slate-800/50 text-slate-500 opacity-60'
                }`}
              >
                <div className="text-2xl">{badge.icon}</div>
                <div>
                  <div className="font-bold text-xs flex items-center gap-1">
                    <span>{badge.name}</span>
                    {badge.unlocked ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Lock className="w-3.5 h-3.5 text-slate-500" />}
                  </div>
                  <div className="text-[10px] text-slate-400">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
