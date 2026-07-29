'use me';
'use client';

import React, { useState } from 'react';
import { SAMPLE_LEADERBOARD } from '@/lib/mockExamData';
import { Language } from '@/lib/types';
import { Trophy, Award, Zap, Shield, Users, MapPin, GraduationCap } from 'lucide-react';

interface LeaderboardProps {
  language: Language;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ language }) => {
  const [filter, setFilter] = useState<'global' | 'state' | 'college'>('global');

  return (
    <section id="leaderboard" className="py-16 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-extrabold">
            <Trophy className="w-3.5 h-3.5" />
            <span>National Aspirant Rankings</span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight">
            We Win <span className="gradient-gold">Leaderboard</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Top performers across India based on accuracy, speed, and total mock test XP points.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center bg-slate-900 p-1.5 rounded-2xl border border-slate-800 max-w-md mx-auto text-xs">
          <button
            onClick={() => setFilter('global')}
            className={`flex-1 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
              filter === 'global' ? 'bg-win-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Global Rank</span>
          </button>
          <button
            onClick={() => setFilter('state')}
            className={`flex-1 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
              filter === 'state' ? 'bg-win-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>State (MH)</span>
          </button>
          <button
            onClick={() => setFilter('college')}
            className={`flex-1 py-2.5 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
              filter === 'college' ? 'bg-win-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>College</span>
          </button>
        </div>

        {/* Leaderboard Table */}
        <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
          <div className="divide-y divide-slate-800/80">
            {SAMPLE_LEADERBOARD.map((user) => {
              let rankBg = 'bg-slate-800 text-slate-300';
              if (user.rank === 1) rankBg = 'bg-amber-500 text-slate-950 font-black';
              if (user.rank === 2) rankBg = 'bg-slate-300 text-slate-950 font-black';
              if (user.rank === 3) rankBg = 'bg-amber-700 text-white font-black';

              return (
                <div
                  key={user.rank}
                  className={`p-4 flex items-center justify-between gap-4 transition-colors hover:bg-slate-900/60 ${
                    user.name.includes('Prashant') ? 'bg-win-950/40 border-l-4 border-win-500' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs ${rankBg}`}>
                      #{user.rank}
                    </div>
                    <div className="text-2xl">{user.avatar}</div>
                    <div>
                      <div className="font-bold text-sm text-white flex items-center gap-2">
                        <span>{user.name}</span>
                        {user.name.includes('Prashant') && (
                          <span className="text-[10px] px-2 py-0.5 rounded bg-win-500/20 text-win-300 border border-win-500/30">
                            YOU
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400">
                        {user.college} • {user.state}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right hidden sm:block">
                      <div className="text-xs font-bold text-emerald-400">{user.accuracy}% Accuracy</div>
                      <div className="text-[10px] text-slate-400">{user.badge}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-black text-white">{user.score} pts</div>
                      <div className="text-[11px] font-bold text-amber-400 flex items-center justify-end gap-0.5">
                        <Zap className="w-3 h-3 fill-amber-400" />
                        <span>{user.xp} XP</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
