'use me';
'use client';

import React from 'react';
import { Trophy, Globe, Heart, Shield } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-win-600 flex items-center justify-center text-white font-black text-sm">
                W
              </div>
              <span className="font-black text-lg text-white">We Win</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's leading AI-powered mock test platform for SSC, Banking, Railways, UPSC & State Competitive Exams.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">Exam Hubs</h4>
            <ul className="space-y-1.5">
              <li><a href="#categories" className="hover:text-win-300">SSC CGL / CHSL / MTS</a></li>
              <li><a href="#categories" className="hover:text-win-300">Banking (IBPS PO / SBI PO)</a></li>
              <li><a href="#categories" className="hover:text-win-300">Railways (RRB NTPC / ALP)</a></li>
              <li><a href="#categories" className="hover:text-win-300">State Exams (MPSC / Police)</a></li>
            </ul>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">AI Features</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-win-300">AI Step-by-Step Solutions</a></li>
              <li><a href="#" className="hover:text-win-300">AI Mistake Diagnosis</a></li>
              <li><a href="#" className="hover:text-win-300">We Win AI Tutor Assistant</a></li>
              <li><a href="#" className="hover:text-win-300">Adaptive Test Recommender</a></li>
            </ul>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">Languages</h4>
            <ul className="space-y-1.5">
              <li>English Medium Tests</li>
              <li>हिंदी माध्यम मॉक टेस्ट</li>
              <li>मराठी भाषा सराव परीक्षा</li>
            </ul>
          </div>

        </div>

        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} We Win AI Platform (Prashant Powar). All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Built with Next.js App Router, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
