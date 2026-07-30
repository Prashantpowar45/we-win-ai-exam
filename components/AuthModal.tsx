'use me';
'use client';

import React, { useState } from 'react';
import { UserProfile } from '@/lib/types';
import { User, Lock, Mail, GraduationCap, MapPin, Target, Sparkles, CheckCircle2, X } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: UserProfile) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess
}) => {
  const [tab, setTab] = useState<'login' | 'register'>('register');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [targetExam, setTargetExam] = useState('SSC CGL 2026');
  const [state, setState] = useState('Maharashtra');
  const [college, setCollege] = useState('University');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleDemoLogin = () => {
    const demoUser: UserProfile = {
      id: 'usr-prashant',
      name: 'Prashant Powar',
      email: 'prashant.powar@wewin23.com',
      targetExam: 'SSC CGL & MPSC Rajyaseva',
      state: 'Maharashtra',
      college: 'Shivaji University',
      xp: 3800,
      streakDays: 7,
      testsCompleted: 24,
      averageScore: 182.5,
      accuracy: 94.2
    };
    if (typeof window !== 'undefined') {
      localStorage.setItem('we_win23_user', JSON.stringify(demoUser));
    }
    onLoginSuccess(demoUser);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: tab,
          name: name || email.split('@')[0],
          email,
          targetExam,
          state,
          college
        })
      });

      const data = await res.json();
      if (data.success && data.user) {
        if (typeof window !== 'undefined') {
          localStorage.setItem('we_win23_user', JSON.stringify(data.user));
        }
        onLoginSuccess(data.user);
      }
    } catch (err) {
      console.error('Auth submit error:', err);
      // Local fallback
      const fallbackUser: UserProfile = {
        id: `usr-${Date.now()}`,
        name: name || 'Aspirant Student',
        email: email || 'student@wewin23.com',
        targetExam,
        state,
        college,
        xp: 1000,
        streakDays: 1,
        testsCompleted: 0,
        averageScore: 0,
        accuracy: 0
      };
      if (typeof window !== 'undefined') {
        localStorage.setItem('we_win23_user', JSON.stringify(fallbackUser));
      }
      onLoginSuccess(fallbackUser);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800">
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-win-600 text-white flex items-center justify-center font-black text-xl mx-auto shadow-lg shadow-win-500/30">
            W
          </div>
          <h3 className="text-2xl font-black text-white">We_Win23 Account Access</h3>
          <p className="text-xs text-slate-400">Create your independent candidate profile to access AI Proctored Exams</p>
        </div>

        {/* Demo 1-Click Login Button */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-r from-win-950 to-slate-950 border border-win-500/30 text-center space-y-2">
          <div className="text-xs font-bold text-win-300 flex items-center justify-center gap-1.5">
            <Sparkles className="w-4 h-4 text-win-400" />
            <span>Evaluation Quick Login</span>
          </div>
          <button
            onClick={handleDemoLogin}
            className="w-full py-2.5 px-4 rounded-xl bg-win-600 hover:bg-win-500 text-white font-bold text-xs shadow-lg shadow-win-500/20"
          >
            Demo Login as Prashant Powar
          </button>
        </div>

        {/* Login / Register Tabs */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs font-bold">
          <button
            onClick={() => setTab('register')}
            className={`flex-1 py-2 rounded-lg transition-all ${tab === 'register' ? 'bg-win-600 text-white' : 'text-slate-400'}`}
          >
            Register Account
          </button>
          <button
            onClick={() => setTab('login')}
            className={`flex-1 py-2 rounded-lg transition-all ${tab === 'login' ? 'bg-win-600 text-white' : 'text-slate-400'}`}
          >
            Log In
          </button>
        </div>

        {/* Form Elements */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {tab === 'register' && (
            <div className="space-y-1.5">
              <label className="block font-bold text-slate-300">Your Full Name *</label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Aarav Deshmukh"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-win-500"
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className="block font-bold text-slate-300">Your Email Address *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="email"
                required
                placeholder="candidate@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-win-500"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block font-bold text-slate-300">Password *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:outline-none focus:border-win-500"
              />
            </div>
          </div>

          {tab === 'register' && (
            <>
              <div className="space-y-1.5">
                <label className="block font-bold text-slate-300">Target Exam Goal</label>
                <select
                  value={targetExam}
                  onChange={(e) => setTargetExam(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-win-500"
                >
                  <option value="SSC CGL 2026">SSC CGL 2026</option>
                  <option value="IBPS PO & SBI PO">IBPS PO & SBI PO</option>
                  <option value="RRB NTPC & Group D">RRB NTPC & Group D</option>
                  <option value="MPSC Rajyaseva">MPSC Rajyaseva</option>
                  <option value="Police Bharti Maharashtra">Police Bharti Maharashtra</option>
                  <option value="BSF & Defense Exams">BSF & Defense Exams</option>
                  <option value="UPSC Prelims & CSAT">UPSC Prelims & CSAT</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="block font-bold text-slate-300">State</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block font-bold text-slate-300">College / Univ</label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white"
                  />
                </div>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-win-600 to-indigo-600 text-white font-bold text-xs shadow-xl shadow-win-500/20 hover:scale-[1.01] transition-all disabled:opacity-50"
          >
            {loading ? 'Connecting to Database...' : tab === 'login' ? 'Log In to Your Account' : 'Create My Independent Profile'}
          </button>
        </form>

      </div>
    </div>
  );
};
