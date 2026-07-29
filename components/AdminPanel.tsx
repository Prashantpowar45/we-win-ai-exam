'use me';
'use client';

import React, { useState } from 'react';
import { SAMPLE_MOCK_TESTS } from '@/lib/mockExamData';
import { Settings, Plus, Upload, Trash2, Edit3, Database, Users, CheckCircle2, X, Sparkles, Bot } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'questions' | 'create-test' | 'csv' | 'ai-gen'>('questions');
  const [questionsList, setQuestionsList] = useState(SAMPLE_MOCK_TESTS[0].questions);
  const [successNotice, setSuccessNotice] = useState<string | null>(null);
  const [aiLoading, setAiLoading] = useState(false);

  if (!isOpen) return null;

  const handleDeleteQ = (id: string) => {
    setQuestionsList(questionsList.filter(q => q.id !== id));
  };

  const handleTriggerAiGen = async () => {
    setAiLoading(true);
    try {
      const res = await fetch('/api/generate-questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject: 'General Knowledge / Current Affairs', topic: 'Union Budget & ISRO', count: 3 })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setQuestionsList((prev) => [...data.questions, ...prev]);
        setSuccessNotice('AI Engine generated 3 new verified MCQs into Database!');
        setTimeout(() => setSuccessNotice(null), 4000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setAiLoading(false);
    }
  };

  const handleSimulateCsv = () => {
    setSuccessNotice('Successfully processed CSV: 50 new questions imported into Database!');
    setTimeout(() => setSuccessNotice(null), 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close */}
        <button onClick={onClose} className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800">
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-win-600 text-white flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">We_Win23 Admin Console</h3>
              <p className="text-xs text-slate-400">Manage question banks, AI generators, and bulk question imports</p>
            </div>
          </div>

          <button
            onClick={handleTriggerAiGen}
            disabled={aiLoading}
            className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-win-600 text-white font-bold text-xs shadow-lg flex items-center gap-1.5 disabled:opacity-50"
          >
            <Bot className="w-4 h-4 text-indigo-300 animate-spin" />
            <span>{aiLoading ? 'Generating...' : '1-Click AI Generate Questions'}</span>
          </button>
        </div>

        {/* Success Alert */}
        {successNotice && (
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{successNotice}</span>
          </div>
        )}

        {/* Tabs */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('questions')}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'questions' ? 'bg-win-600 text-white' : 'text-slate-400'
            }`}
          >
            Question Bank ({questionsList.length})
          </button>
          <button
            onClick={() => setActiveTab('create-test')}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'create-test' ? 'bg-win-600 text-white' : 'text-slate-400'
            }`}
          >
            Create New Mock Test
          </button>
          <button
            onClick={() => setActiveTab('csv')}
            className={`flex-1 py-2 rounded-lg font-bold transition-all ${
              activeTab === 'csv' ? 'bg-win-600 text-white' : 'text-slate-400'
            }`}
          >
            Bulk CSV/Excel Upload
          </button>
        </div>

        {/* Tab 1: Question Bank */}
        {activeTab === 'questions' && (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-bold text-slate-400">
              <span>Managed Question Items</span>
              <button className="px-3 py-1.5 rounded-lg bg-win-600 text-white font-bold flex items-center gap-1">
                <Plus className="w-3.5 h-3.5" />
                <span>Add Question</span>
              </button>
            </div>

            <div className="space-y-3">
              {questionsList.map((q, idx) => (
                <div key={q.id} className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-win-400">
                      Q{idx + 1}. {q.category} • {q.subject} {q.isAiGenerated && <span className="text-[9px] px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">AI GENERATED</span>}
                    </span>
                    <div className="flex items-center gap-2">
                      <button onClick={() => handleDeleteQ(q.id)} className="p-1 text-rose-400 hover:text-rose-300">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-white font-semibold">{q.questionText.en}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Create Test */}
        {activeTab === 'create-test' && (
          <div className="space-y-4 text-xs">
            <div className="space-y-1.5">
              <label className="block font-bold text-slate-300">Test Title</label>
              <input type="text" placeholder="e.g. MPSC Rajyaseva Practice Mock #02" className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block font-bold text-slate-300">Duration (Minutes)</label>
                <input type="number" defaultValue={60} className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white" />
              </div>
              <div className="space-y-1.5">
                <label className="block font-bold text-slate-300">Total Marks</label>
                <input type="number" defaultValue={200} className="w-full p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white" />
              </div>
            </div>
            <button onClick={() => { setSuccessNotice('New Mock Test Created!'); setTimeout(() => setSuccessNotice(null), 3000); }} className="w-full py-3 rounded-xl bg-win-600 text-white font-bold">
              Publish Mock Test
            </button>
          </div>
        )}

        {/* Tab 3: CSV Upload */}
        {activeTab === 'csv' && (
          <div className="space-y-4 text-center py-6 text-xs">
            <div className="w-16 h-16 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto text-win-400">
              <Upload className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-white text-sm">Upload Question Bank (.CSV or .XLSX)</h4>
              <p className="text-slate-400">Columns required: question_en, question_hi, question_mr, opt1, opt2, opt3, opt4, answer_idx, explanation</p>
            </div>
            <button onClick={handleSimulateCsv} className="px-6 py-3 rounded-xl bg-win-600 text-white font-bold">
              Simulate Bulk Import
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
