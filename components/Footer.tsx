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
              <span className="font-black text-lg text-white">We_Win23</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              India's premier AI Proctored mock examination system for SSC CGL, Banking, Railways, UPSC, MPSC & Police Bharti.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">Exam Hubs</h4>
            <ul className="space-y-1.5">
              <li><a href="#categories" className="hover:text-win-300">SSC CGL / CHSL / MTS</a></li>
              <li><a href="#categories" className="hover:text-win-300">Banking (IBPS PO / SBI PO)</a></li>
              <li><a href="#categories" className="hover:text-win-300">Railways (RRB NTPC / ALP)</a></li>
              <li><a href="#categories" className="hover:text-win-300">State Exams (MPSC / Police Bharti)</a></li>
            </ul>
          </div>

          <div className="space-y-2 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">AI Proctoring Features</h4>
            <ul className="space-y-1.5">
              <li>Live Webcam Camera Monitoring</li>
              <li>Tab-Switch & Blur Detection</li>
              <li>Anti-Cheat Warning & Auto-Submit</li>
              <li>4-Section 80-Question Test Engine</li>
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
          <p>© {new Date().getFullYear()} We_Win23 AI Platform (Prashant Powar). All rights reserved.</p>
          <div className="flex items-center gap-2 text-slate-500">
            <span>Built with Next.js App Router, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
