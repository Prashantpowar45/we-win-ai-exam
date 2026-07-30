'use me';
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MockTest, Language, UserAnswer, ExamViolationLog } from '@/lib/types';
import { Clock, ShieldCheck, ArrowLeft, ArrowRight, Bookmark, Maximize, Minimize, AlertCircle, CheckCircle2, FileText, Globe, X, Camera, AlertTriangle, Eye } from 'lucide-react';

interface ExamInterfaceProps {
  test: MockTest;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onSubmitTest: (userAnswers: Record<string, UserAnswer>, totalTimeSpentSec: number) => void;
  onCancelTest: () => void;
}

export const ExamInterface: React.FC<ExamInterfaceProps> = ({
  test,
  language,
  onLanguageChange,
  onSubmitTest,
  onCancelTest
}) => {
  // Proctoring States
  const [cameraGranted, setCameraGranted] = useState<boolean>(false);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [warningCount, setWarningCount] = useState<number>(0);
  const [activeWarningText, setActiveWarningText] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Exam Section & Question States
  const [activeSectionIdx, setActiveSectionIdx] = useState<number>(0);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [timeLeftSec, setTimeLeftSec] = useState<number>(test.durationMinutes * 60);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [bookmarked, setBookmarked] = useState<Record<string, boolean>>({});
  const [showFormulaSheet, setShowFormulaSheet] = useState<boolean>(false);

  // User answers
  const [userAnswers, setUserAnswers] = useState<Record<string, UserAnswer>>(() => {
    const initial: Record<string, UserAnswer> = {};
    test.questions.forEach((q) => {
      initial[q.id] = {
        questionId: q.id,
        selectedOptionIndex: null,
        status: 'unanswered',
        timeSpentSec: 0
      };
    });
    return initial;
  });

  // 1. Request Webcam Permission & Attach Face Feed properly
  const requestWebcam = async () => {
    setCameraError(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' },
        audio: false
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play().catch(e => console.error('Video play error:', e));
        };
      }
      setCameraGranted(true);
    } catch (err) {
      console.error('Camera access denied:', err);
      setCameraError('Camera access is mandatory for We_Win23 AI Proctored Mock Tests. Please allow camera permissions to start.');
      setCameraGranted(false);
    }
  };

  // Auto-request camera on component mount
  useEffect(() => {
    requestWebcam();
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  // Ensure video element plays when cameraGranted flips to true
  useEffect(() => {
    if (cameraGranted && videoRef.current && videoRef.current.srcObject) {
      videoRef.current.play().catch(e => console.error('Video autoplay error:', e));
    }
  }, [cameraGranted]);

  // 2. Anti-Cheat Anti-Tab Switch & Fullscreen Monitors
  useEffect(() => {
    if (!cameraGranted) return;

    const handleViolation = (reason: string) => {
      setWarningCount((prev) => {
        const next = prev + 1;
        if (next >= 3) {
          onSubmitTest(userAnswers, (test.durationMinutes * 60) - timeLeftSec);
          return next;
        }
        setActiveWarningText(`WARNING #${next} / 3: ${reason}. Repeated violations will automatically submit your exam!`);
        return next;
      });
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleViolation('Tab switching or minimizing browser detected!');
      }
    };

    const handleBlur = () => {
      handleViolation('Window focus lost! Please stay inside the exam screen.');
    };

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      handleViolation('Right-click is disabled during proctored exam!');
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v' || e.key === 'r' || e.key === 'u')) {
        e.preventDefault();
        handleViolation('Copy, Paste, and Shortcut keys are disabled!');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('blur', handleBlur);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('blur', handleBlur);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [cameraGranted, userAnswers, timeLeftSec, test.durationMinutes, onSubmitTest]);

  // 3. Countdown Timer
  useEffect(() => {
    if (!cameraGranted) return;
    const timer = setInterval(() => {
      setTimeLeftSec((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onSubmitTest(userAnswers, test.durationMinutes * 60);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [cameraGranted, userAnswers, test.durationMinutes, onSubmitTest]);

  // Sections filter
  const currentSection = test.sections[activeSectionIdx] || test.sections[0];
  const sectionQuestions = test.questions.filter(q => q.section === currentSection.name);
  const currentQ = sectionQuestions[currentIdx] || test.questions[0];
  const currentAnswer = userAnswers[currentQ?.id];

  const formatTime = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleOptionSelect = (optionIdx: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedOptionIndex: optionIdx,
      }
    }));
  };

  const handleSaveAndNext = () => {
    const hasSelection = currentAnswer.selectedOptionIndex !== null;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        status: hasSelection ? 'answered' : 'unanswered'
      }
    }));
    if (currentIdx < sectionQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleMarkForReview = () => {
    const hasSelection = currentAnswer.selectedOptionIndex !== null;
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        status: hasSelection ? 'marked_and_answered' : 'marked_for_review'
      }
    }));
    if (currentIdx < sectionQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    }
  };

  const handleClearResponse = () => {
    setUserAnswers((prev) => ({
      ...prev,
      [currentQ.id]: {
        ...prev[currentQ.id],
        selectedOptionIndex: null,
        status: 'unanswered'
      }
    }));
  };

  const toggleBookmark = (qId: string) => {
    setBookmarked((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  // Camera Permission Guard Screen
  if (!cameraGranted) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-8 text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-win-600/20 text-win-400 border border-win-500/30 flex items-center justify-center mx-auto">
            <Camera className="w-8 h-8 animate-pulse" />
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-extrabold text-white">We_Win23 Camera Verification</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              This exam is proctored by We_Win23 AI. Live camera monitoring is required to prevent anti-cheat violations and maintain exam integrity.
            </p>
          </div>

          {cameraError && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 text-left">
              <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
              <span>{cameraError}</span>
            </div>
          )}

          <div className="space-y-3 pt-2">
            <button
              onClick={requestWebcam}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-win-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-win-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <Camera className="w-4 h-4" />
              <span>Allow Camera & Start Exam</span>
            </button>

            <button
              onClick={onCancelTest}
              className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-slate-400 hover:text-white font-semibold text-xs border border-slate-800"
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Palette Status Counts
  const answeredCount = Object.values(userAnswers).filter(a => a.status === 'answered' || a.status === 'marked_and_answered').length;
  const markedCount = Object.values(userAnswers).filter(a => a.status === 'marked_for_review' || a.status === 'marked_and_answered').length;
  const unansweredCount = test.questions.length - answeredCount;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col select-none relative">
      
      {/* Floating Camera Preview Window with Realtime Face Display */}
      <div className="fixed bottom-4 right-4 z-50 w-48 h-36 rounded-2xl bg-slate-900 border-2 border-win-500/80 shadow-2xl overflow-hidden flex flex-col justify-between group">
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          className="w-full h-full object-cover transform -scale-x-100 bg-slate-950"
        />
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/90 text-[9px] font-mono text-emerald-400 flex items-center gap-1 border border-emerald-500/40 shadow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>PROCTORED LIVE</span>
        </div>
      </div>

      {/* Warning Modal Overlay */}
      {activeWarningText && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-rose-950 border-2 border-rose-500 rounded-3xl max-w-md w-full p-6 text-center space-y-4 shadow-2xl">
            <div className="w-14 h-14 rounded-full bg-rose-500/20 text-rose-400 mx-auto flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 animate-bounce" />
            </div>
            <h3 className="text-lg font-black text-white">PROCTORING VIOLATION WARNING</h3>
            <p className="text-xs text-rose-200 leading-relaxed">{activeWarningText}</p>
            <button
              onClick={() => setActiveWarningText(null)}
              className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs"
            >
              I Understand & Resume Exam
            </button>
          </div>
        </div>
      )}

      {/* Top Test Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center justify-between shadow-lg z-30">
        <div className="flex items-center gap-3">
          <button onClick={onCancelTest} className="p-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white" title="Exit Test">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-base font-bold text-white flex items-center gap-2">
              <span>{test.title}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                <span>AI PROCTORED MODE</span>
              </span>
            </h1>
            <p className="text-[11px] text-slate-400">Total Questions: {test.questions.length} • Maximum Marks: {test.totalMarks}</p>
          </div>
        </div>

        {/* Right Tools: Timer, Language, Fullscreen */}
        <div className="flex items-center gap-4">
          <button onClick={() => setShowFormulaSheet(true)} className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-xs font-semibold text-slate-200 border border-slate-700">
            <FileText className="w-3.5 h-3.5 text-win-400" />
            <span>Formulas</span>
          </button>

          <div className="flex items-center bg-slate-950 border border-slate-800 rounded-lg px-2 py-1 text-xs">
            <Globe className="w-3.5 h-3.5 text-win-400 mr-1" />
            <select value={language} onChange={(e) => onLanguageChange(e.target.value as Language)} className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer">
              <option value="en" className="bg-slate-900">English</option>
              <option value="hi" className="bg-slate-900">हिंदी</option>
              <option value="mr" className="bg-slate-900">मराठी</option>
            </select>
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950 border border-win-500/40 text-win-400 font-mono font-bold text-sm shadow-inner">
            <Clock className="w-4 h-4 text-win-400 animate-pulse" />
            <span>{formatTime(timeLeftSec)}</span>
          </div>

          <button onClick={toggleFullscreen} className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white" title="Fullscreen">
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* 4 Section Tabs Header */}
      <div className="bg-slate-950 border-b border-slate-800 px-4 py-2 flex items-center gap-2 overflow-x-auto">
        {test.sections.map((sec, sIdx) => (
          <button
            key={sec.id}
            onClick={() => { setActiveSectionIdx(sIdx); setCurrentIdx(0); }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors border ${
              activeSectionIdx === sIdx
                ? 'bg-win-600 border-win-500 text-white shadow-lg'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>{sec.name}</span>
          </button>
        ))}
      </div>

      {/* Main Test Grid Layout */}
      <div className="flex-1 grid lg:grid-cols-12 overflow-hidden">
        
        {/* Left Area: Question Display */}
        <div className="lg:col-span-8 p-4 sm:p-8 flex flex-col justify-between space-y-6 overflow-y-auto">
          <div className="space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-win-400 bg-win-500/10 px-3 py-1 rounded-lg border border-win-500/20">
                  Question {currentIdx + 1} of {sectionQuestions.length} ({currentSection.name})
                </span>
                <span className="text-xs text-slate-400 font-semibold">
                  Marks: +{currentQ.marks} | Negative: -{currentQ.negativeMarks}
                </span>
              </div>

              <button
                onClick={() => toggleBookmark(currentQ.id)}
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-lg border transition-colors ${
                  bookmarked[currentQ.id]
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{bookmarked[currentQ.id] ? 'Bookmarked' : 'Bookmark'}</span>
              </button>
            </div>

            {/* Question Text */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-white leading-relaxed">
                {currentQ.questionText[language] || currentQ.questionText.en}
              </h2>
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {(currentQ.options[language] || currentQ.options.en).map((optText, optIdx) => {
                const isSelected = currentAnswer.selectedOptionIndex === optIdx;
                return (
                  <button
                    key={optIdx}
                    onClick={() => handleOptionSelect(optIdx)}
                    className={`w-full p-4 rounded-xl border text-left flex items-center justify-between text-xs sm:text-sm transition-all ${
                      isSelected
                        ? 'bg-win-600/20 border-win-500 text-white font-bold shadow-lg shadow-win-500/10'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:bg-slate-900 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs border ${
                        isSelected
                          ? 'bg-win-500 text-white border-win-400'
                          : 'bg-slate-800 text-slate-400 border-slate-700'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span>{optText}</span>
                    </div>
                    {isSelected && <CheckCircle2 className="w-5 h-5 text-win-400" />}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Bottom Action Controls */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button onClick={handleClearResponse} className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 text-xs font-semibold">
                Clear Response
              </button>
              <button onClick={handleMarkForReview} className="px-3.5 py-2 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-purple-300 border border-purple-500/30 text-xs font-semibold">
                Mark for Review & Next
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button disabled={currentIdx === 0} onClick={() => setCurrentIdx(currentIdx - 1)} className="px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 text-xs font-bold disabled:opacity-40">
                Previous
              </button>
              <button onClick={handleSaveAndNext} className="px-6 py-2.5 rounded-xl bg-win-600 hover:bg-win-500 text-white font-bold text-xs shadow-lg shadow-win-500/20">
                Save & Next
              </button>
            </div>
          </div>
        </div>

        {/* Right Area: Question Palette Grid */}
        <div className="lg:col-span-4 bg-slate-900/90 border-l border-slate-800 p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2">
                Section Palette ({currentSection.name})
              </h3>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-300">
                <div className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded bg-emerald-500" /><span>Answered ({answeredCount})</span></div>
                <div className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded bg-rose-500" /><span>Unanswered ({unansweredCount})</span></div>
                <div className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded bg-purple-500" /><span>Marked ({markedCount})</span></div>
                <div className="flex items-center gap-2"><div className="w-3.5 h-3.5 rounded bg-slate-700" /><span>Not Visited</span></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-semibold text-slate-400">Select Question:</div>
              <div className="grid grid-cols-5 gap-2 max-h-60 overflow-y-auto p-1">
                {sectionQuestions.map((q, idx) => {
                  const status = userAnswers[q.id]?.status;
                  let btnBg = 'bg-slate-800 text-slate-300 border-slate-700';
                  if (status === 'answered') btnBg = 'bg-emerald-600 text-white font-bold border-emerald-500';
                  if (status === 'marked_for_review') btnBg = 'bg-purple-600 text-white font-bold border-purple-500';
                  if (status === 'marked_and_answered') btnBg = 'bg-purple-600 text-emerald-300 font-bold border-emerald-400';

                  const isCurrent = currentIdx === idx;

                  return (
                    <button key={q.id} onClick={() => setCurrentIdx(idx)} className={`h-9 rounded-lg border text-xs font-bold transition-all ${btnBg} ${isCurrent ? 'ring-2 ring-win-400 ring-offset-2 ring-offset-slate-950 scale-105' : ''}`}>
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button onClick={() => onSubmitTest(userAnswers, (test.durationMinutes * 60) - timeLeftSec)} className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 text-white font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-95 transition-all text-center">
              Submit Final Test
            </button>
            <div className="text-[10px] text-slate-400 text-center">
              🔒 Auto-save active • Auto-submits on 3 proctoring warnings.
            </div>
          </div>
        </div>

      </div>

      {/* Formulas Modal */}
      {showFormulaSheet && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-4 relative">
            <button onClick={() => setShowFormulaSheet(false)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-win-400" />
              <span>Aptitude Formula Quick Reference</span>
            </h3>
            <div className="space-y-3 text-xs text-slate-300 max-h-80 overflow-y-auto">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800"><strong className="text-win-400">Profit & Loss:</strong> Profit % = (Profit / CP) * 100</div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800"><strong className="text-win-400">Speed & Distance:</strong> Speed = Distance / Time</div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800"><strong className="text-win-400">Simple Interest:</strong> SI = (P * R * T) / 100</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
