import React, { useState } from 'react';
import { TabType } from '../types';
import { KEYWORD_SELECTION_QUIZZES } from '../data/lessonData';
import { sounds } from '../utils/soundEffects';
import { RobotKey, ThamTuTi } from './chibi/Stickers';
import { Key, CheckCircle2, XCircle, ArrowRight, Sparkles, Send, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface KeywordsPracticeProps {
  onNavigate: (tab: TabType) => void;
  onCompleteKeywords: () => void;
}

export const KeywordsPractice: React.FC<KeywordsPracticeProps> = ({
  onNavigate,
  onCompleteKeywords
}) => {
  // Quiz state
  const [currentQuizIdx, setCurrentQuizIdx] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  // Interactive Typing Tester State
  const [activeTask, setActiveTask] = useState<number>(1);
  const [typedKeyword, setTypedKeyword] = useState<string>('');
  const [evaluation, setEvaluation] = useState<{
    status: 'success' | 'too-long' | 'too-vague' | 'good' | null;
    message: string;
    suggestion?: string;
  }>({ status: null, message: '' });

  const currentQuiz = KEYWORD_SELECTION_QUIZZES[currentQuizIdx];

  const handleSelectQuizOption = (optIdx: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(optIdx);

    const isCorrect = optIdx === currentQuiz.correct;
    if (isCorrect) {
      sounds.playSuccess();
      setQuizScore((prev) => prev + 1);
    } else {
      sounds.playError();
    }
  };

  const handleNextQuiz = () => {
    sounds.playPop();
    if (currentQuizIdx < KEYWORD_SELECTION_QUIZZES.length - 1) {
      setCurrentQuizIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
      sounds.playFanfare();
      confetti({ particleCount: 50, spread: 60 });
      onCompleteKeywords();
    }
  };

  const handleResetQuiz = () => {
    sounds.playPop();
    setCurrentQuizIdx(0);
    setSelectedOption(null);
    setQuizScore(0);
    setQuizFinished(false);
  };

  // Evaluate student typed keyword
  const handleEvaluateTypedKeyword = (e: React.FormEvent) => {
    e.preventDefault();
    const kw = typedKeyword.trim().toLowerCase();
    if (!kw) return;

    sounds.playPop();
    const wordCount = kw.split(/\s+/).length;

    if (wordCount > 7) {
      sounds.playError();
      setEvaluation({
        status: 'too-long',
        message: 'Từ khóa hơi dài rồi em ơi! Khi tìm kiếm, máy tính hoạt động tốt nhất với cụm từ ngắn gọn (1–4 từ).',
        suggestion: activeTask === 1 ? 'Gợi ý: "thể thao" hoặc "bóng đá"' : activeTask === 2 ? 'Gợi ý: "lịch hoạt động"' : 'Gợi ý: "dế mèn"'
      });
      return;
    }

    if (kw === 'mọi thứ' || kw === 'tất cả' || kw === 'bài viết' || kw === 'thông tin' || kw === 'tìm kiếm') {
      sounds.playError();
      setEvaluation({
        status: 'too-vague',
        message: 'Từ khóa này còn quá chung chung, máy tính sẽ trả về rất nhiều kết quả không liên quan!',
        suggestion: 'Hãy thêm nội dung cụ thể vào từ khóa nhé.'
      });
      return;
    }

    // Task specific match logic
    if (activeTask === 1) {
      // Sports
      if (kw.includes('thể thao') || kw.includes('bóng đá') || kw.includes('bơi lội') || kw.includes('cờ vua')) {
        sounds.playSuccess();
        confetti({ particleCount: 30, spread: 45 });
        setEvaluation({
          status: 'success',
          message: `Xuất sắc! Từ khóa "${typedKeyword}" rất đúng trọng tâm môn thể thao. Công cụ sẽ tìm thấy ngay các giải đấu thiếu nhi!`
        });
      } else {
        setEvaluation({
          status: 'good',
          message: `Từ khóa "${typedKeyword}" có độ dài tốt! Em có thể thử thêm từ "thể thao" hoặc "bóng đá" để kết quả sát hơn.`
        });
      }
    } else if (activeTask === 2) {
      // School schedule
      if (kw.includes('lịch') || kw.includes('hoạt động') || kw.includes('trường') || kw.includes('tháng 11') || kw.includes('20/11')) {
        sounds.playSuccess();
        confetti({ particleCount: 30, spread: 45 });
        setEvaluation({
          status: 'success',
          message: `Tuyệt vời! Từ khóa "${typedKeyword}" thể hiện rõ nhu cầu tra cứu lịch trình sự kiện trường học.`
        });
      } else {
        setEvaluation({
          status: 'good',
          message: `Từ khóa "${typedKeyword}" hợp lệ! Để tìm chính xác thông báo lịch trường, nên dùng "lịch hoạt động của trường".`
        });
      }
    } else {
      // Character
      if (kw.includes('dế mèn') || kw.includes('tô hoài') || kw.includes('kim đồng') || kw.includes('nhân vật')) {
        sounds.playSuccess();
        confetti({ particleCount: 30, spread: 45 });
        setEvaluation({
          status: 'success',
          message: `Chính xác 100%! Gõ trực tiếp tên riêng nhân vật "${typedKeyword}" là cách tìm nhanh nhất!`
        });
      } else {
        setEvaluation({
          status: 'good',
          message: `Em đã nhập: "${typedKeyword}". Em có thể nhập tên cụ thể như "Dế Mèn" hoặc "Kim Đồng" nhé!`
        });
      }
    }
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300 text-xs font-bold">
          <span>🔑 TIẾT 2 · HOẠT ĐỘNG 1 (5 PHÚT)</span>
          <span>·</span>
          <span>BÍ MẬT CỦA TỪ KHÓA</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          BÍ MẬT CHỌN TỪ KHÓA THÔNG MINH
        </h2>
        <p className="text-base text-slate-600">
          Từ khóa chính là chìa khóa mở cánh cửa thông tin. Cùng Robot Key khám phá bí quyết chọn từ khóa ngắn gọn, trúng đích!
        </p>
      </div>

      {/* 1. KHÁM PHÁ QUY TẮC TỪ KHÓA */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 space-y-4">
            <h3 className="font-display text-2xl font-bold text-slate-900 flex items-center gap-2">
              <span>Từ khóa (Keyword) là gì?</span>
            </h3>

            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Từ khóa</strong> là từ hoặc cụm từ <strong>ngắn gọn</strong> thể hiện nội dung cốt lõi mà em muốn tìm kiếm trên website hoặc Internet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-2">
                <span className="text-xs font-extrabold text-rose-800 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  NÊN TRÁNH (Câu dài lan man):
                </span>
                <p className="text-xs text-rose-950 italic">
                  "Em muốn biết trên thế giới này môn bóng đá chơi như thế nào và có những ai tham gia..."
                </p>
                <span className="text-[11px] text-rose-700 block">
                  → Quá nhiều từ phụ, máy tính dễ bị rối và trả về kết quả sai!
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
                <span className="text-xs font-extrabold text-emerald-800 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  NÊN CHỌN (Từ khóa ngắn gọn):
                </span>
                <p className="text-xs text-emerald-950 font-bold">
                  "Bóng đá thiếu nhi" hoặc "Bóng đá"
                </p>
                <span className="text-[11px] text-emerald-700 block">
                  → Ngắn gọn, đúng trọng tâm, máy tính tìm ra bài viết trong 1 giây!
                </span>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex flex-col items-center justify-center">
            <RobotKey expression="suggesting" size={120} speech="Ngắn gọn & Đúng trọng tâm nhé!" />
          </div>
        </div>
      </section>

      {/* 2. TRÒ CHƠI: CHỌN ĐÚNG TỪ KHÓA (5 Missions) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 uppercase">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Trò chơi tương tác</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              TRÒ CHƠI: CHỌN ĐÚNG TỪ KHÓA
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-indigo-50 text-indigo-900 border border-indigo-200">
              Câu {currentQuizIdx + 1} / {KEYWORD_SELECTION_QUIZZES.length} · Điểm: <strong>{quizScore}</strong>
            </span>
          </div>
        </div>

        {!quizFinished ? (
          <div className="max-w-2xl mx-auto space-y-5">
            {/* Mission Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <span className="text-xs font-bold text-indigo-800 uppercase block">Nhiệm vụ:</span>
                  <p className="font-bold text-sm sm:text-base text-slate-900">
                    {currentQuiz.mission}
                  </p>
                </div>
              </div>
              <button
                onClick={() => sounds.speakVietnamese(currentQuiz.mission)}
                className="p-2 rounded-xl bg-white border border-indigo-200 text-indigo-700 hover:bg-indigo-50"
                title="Nghe nhiệm vụ"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-slate-700">
              Em hãy chọn từ khóa phù hợp nhất để nhập vào ô tìm kiếm:
            </p>

            {/* Options */}
            <div className="space-y-3">
              {currentQuiz.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                let btnStyle = 'bg-slate-50 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50/40 text-slate-800';

                if (selectedOption !== null) {
                  if (idx === currentQuiz.correct) {
                    btnStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={selectedOption !== null}
                    onClick={() => handleSelectQuizOption(idx)}
                    className={`w-full p-4 rounded-2xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full border border-current text-xs font-bold flex items-center justify-center shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>"{opt}"</span>
                    </div>

                    {selectedOption !== null && idx === currentQuiz.correct && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {selectedOption === idx && idx !== currentQuiz.correct && (
                      <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback and next button */}
            {selectedOption !== null && (
              <div className="space-y-3 pt-2">
                <div
                  className={`p-3.5 rounded-xl text-xs flex items-center gap-2 ${
                    selectedOption === currentQuiz.correct
                      ? 'bg-emerald-100 text-emerald-900 font-medium'
                      : 'bg-rose-100 text-rose-900'
                  }`}
                >
                  <span>{selectedOption === currentQuiz.correct ? '🎉' : '💡'}</span>
                  <span>{currentQuiz.explanation}</span>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNextQuiz}
                    className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                  >
                    <span>{currentQuizIdx < KEYWORD_SELECTION_QUIZZES.length - 1 ? 'Câu tiếp theo' : 'Hoàn thành mini-game'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Finished State */
          <div className="text-center py-8 max-w-md mx-auto space-y-4">
            <div className="text-5xl">🏆</div>
            <h4 className="font-display text-2xl font-bold text-slate-900">
              XUẤT SẮC! EM ĐÃ CHINH PHỤC BÍ MẬT TỪ KHÓA!
            </h4>
            <p className="text-sm text-slate-600">
              Em đã trả lời đúng <strong>{quizScore} / {KEYWORD_SELECTION_QUIZZES.length}</strong> thử thách chọn từ khóa cùng Robot Key.
            </p>
            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleResetQuiz}
                className="px-4 py-2 border border-slate-300 hover:bg-slate-50 text-slate-700 font-bold rounded-xl text-xs cursor-pointer"
              >
                Chơi lại
              </button>
              <button
                onClick={() => {
                  sounds.playPop();
                  onNavigate('detective');
                }}
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
              >
                <span>Vào Phòng Thực hành Web</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </section>

      {/* 3. THỰC HÀNH: EM TỰ NHẬP TỪ KHÓA (AI Keyword Evaluator) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase">
              <Key className="w-4 h-4 text-emerald-600" />
              <span>Luyện tập chủ động</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              EM TỰ TAY NHẬP TỪ KHÓA & NHẬN PHẢN HỒI
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Chọn một nhiệm vụ và thử gõ từ khóa của riêng em. Hệ thống sẽ phân tích độ dài và mức độ phù hợp!
            </p>
          </div>

          <ThamTuTi expression="thinking" size={60} />
        </div>

        {/* Task Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 1, label: 'Nhiệm vụ 1: Tìm thông tin Thể thao' },
            { id: 2, label: 'Nhiệm vụ 2: Tìm Lịch hoạt động của trường' },
            { id: 3, label: 'Nhiệm vụ 3: Tìm Nhân vật trong bài đọc' }
          ].map((task) => (
            <button
              key={task.id}
              onClick={() => {
                sounds.playPop();
                setActiveTask(task.id);
                setTypedKeyword('');
                setEvaluation({ status: null, message: '' });
              }}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTask === task.id
                  ? 'bg-emerald-500 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {task.label}
            </button>
          ))}
        </div>

        {/* Typing Form */}
        <form onSubmit={handleEvaluateTypedKeyword} className="max-w-2xl space-y-3">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={typedKeyword}
                onChange={(e) => setTypedKeyword(e.target.value)}
                placeholder={
                  activeTask === 1
                    ? 'Ví dụ: bóng đá, thể thao thiếu nhi...'
                    : activeTask === 2
                    ? 'Ví dụ: lịch hoạt động của trường...'
                    : 'Ví dụ: dế mèn, tô hoài...'
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 pl-10"
              />
              <Key className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>

            <button
              type="submit"
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Kiểm tra</span>
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* Evaluation Result */}
          {evaluation.status && (
            <div
              className={`p-4 rounded-2xl text-xs sm:text-sm border space-y-1 ${
                evaluation.status === 'success'
                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                  : evaluation.status === 'too-long'
                  ? 'bg-amber-50 border-amber-300 text-amber-950'
                  : evaluation.status === 'too-vague'
                  ? 'bg-rose-50 border-rose-300 text-rose-950'
                  : 'bg-sky-50 border-sky-300 text-sky-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                <span>{evaluation.status === 'success' ? '🌟' : '💡'}</span>
                <span>{evaluation.message}</span>
              </div>
              {evaluation.suggestion && (
                <p className="text-slate-600 font-medium pl-6">
                  {evaluation.suggestion}
                </p>
              )}
            </div>
          )}
        </form>

        {/* Bottom CTA to simulated browser */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Đã sẵn sàng thử sức trên website thật chưa?
          </span>
          <button
            onClick={() => {
              sounds.playPop();
              onNavigate('detective');
            }}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs shadow-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Đến Phòng Thực hành Web</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
