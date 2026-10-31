import React, { useState } from 'react';
import { TabType } from '../types';
import { FINAL_QUIZ_QUESTIONS } from '../data/lessonData';
import { sounds } from '../utils/soundEffects';
import { ThamTuTi, BeSao } from './chibi/Stickers';
import { Award, CheckCircle2, XCircle, RotateCcw, ArrowRight, Volume2, Sparkles, BookOpen } from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalQuizProps {
  onNavigate: (tab: TabType) => void;
  onCompleteQuiz: (score: number) => void;
  savedQuizScore: number | null;
}

export const FinalQuiz: React.FC<FinalQuizProps> = ({
  onNavigate,
  onCompleteQuiz,
  savedQuizScore
}) => {
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(savedQuizScore !== null);
  const [currentScore, setCurrentScore] = useState<number>(savedQuizScore || 0);

  const handleSelectOption = (qId: number, optIdx: number) => {
    if (isSubmitted) return;
    sounds.playPop();
    setUserAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  const handleSubmitQuiz = () => {
    sounds.playPop();
    let correctCount = 0;
    FINAL_QUIZ_QUESTIONS.forEach((q) => {
      if (userAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });

    const percent = Math.round((correctCount / FINAL_QUIZ_QUESTIONS.length) * 100);
    setCurrentScore(percent);
    setIsSubmitted(true);
    onCompleteQuiz(percent);

    if (percent >= 70) {
      sounds.playFanfare();
      confetti({ particleCount: 70, spread: 70, origin: { y: 0.5 } });
    } else {
      sounds.playSuccess();
    }
  };

  const handleRetake = () => {
    sounds.playPop();
    setUserAnswers({});
    setIsSubmitted(false);
  };

  const answeredCount = Object.keys(userAnswers).length;
  const isAllAnswered = answeredCount === FINAL_QUIZ_QUESTIONS.length;

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold">
          <span>🏆 ĐÁNH GIÁ CUỐI BÀI HỌC</span>
          <span>·</span>
          <span>10 CÂU HỎI CHUẨN GDPT 2018</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          KIỂM TRA & ĐÁNH GIÁ NĂNG LỰC
        </h2>
        <p className="text-base text-slate-600">
          Hãy vận dụng các kiến thức về chọn từ khóa, duyệt chủ đề và kiểm tra thông tin để hoàn thành 10 câu hỏi dưới đây!
        </p>
      </div>

      {/* Result Card when submitted */}
      {isSubmitted && (
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white shadow-lg space-y-4 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-xs text-3xl mb-1">
            {currentScore >= 90 ? '🥇' : currentScore >= 70 ? '🥈' : '⭐'}
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-extrabold">
            {currentScore >= 90
              ? 'XUẤT SẮC! EM ĐÃ TRỞ THÀNH THÁM TỬ TÀI BA!'
              : currentScore >= 70
              ? 'RẤT TỐT! EM ĐÃ BIẾT CÁCH TÌM KIẾM & KIỂM TRA!'
              : currentScore >= 50
              ? 'EM ĐANG TIẾN BỘ! HÃY LUYỆN THÊM TỪ KHÓA NHÉ!'
              : 'ĐỪNG LO LẮNG! HÃY CÙNG THÁM TỬ TÍ ÔN LẠI BÀI NHÉ!'}
          </h3>

          <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-amber-100">
            {currentScore}% <span className="text-lg font-normal text-white">({Math.round((currentScore / 100) * 10)} / 10 câu đúng)</span>
          </div>

          <p className="text-xs sm:text-sm text-amber-100 max-w-md mx-auto">
            {currentScore >= 70
              ? 'Em đã nắm vững kỹ năng xác định nhiệm vụ, chọn từ khóa ngắn gọn và sử dụng AI có trách nhiệm.'
              : 'Hãy xem lại các câu giải thích màu xanh bên dưới để củng cố thêm kiến thức nhé!'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={handleRetake}
              className="px-5 py-2.5 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại bài</span>
            </button>

            <button
              onClick={() => {
                sounds.playPop();
                onNavigate('profile');
              }}
              className="px-6 py-2.5 bg-white hover:bg-slate-50 text-amber-900 font-extrabold rounded-xl text-xs shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Award className="w-4 h-4 text-amber-600" />
              <span>Xem Hồ Sơ & Chứng Nhận</span>
            </button>
          </div>
        </div>
      )}

      {/* 10 Questions Form */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-8 max-w-4xl mx-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            <span className="font-bold text-sm text-slate-800">
              Tiến độ làm bài: {answeredCount} / {FINAL_QUIZ_QUESTIONS.length} câu đã chọn
            </span>
          </div>

          {!isSubmitted && (
            <span className="text-xs text-slate-500">
              Chọn đáp án A, B hoặc C cho mỗi câu
            </span>
          )}
        </div>

        <div className="space-y-8">
          {FINAL_QUIZ_QUESTIONS.map((q, idx) => {
            const selectedOpt = userAnswers[q.id];
            const isAnswered = selectedOpt !== undefined;
            const isCorrect = isAnswered && selectedOpt === q.correctAnswer;

            return (
              <div
                key={q.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-7 h-7 rounded-full bg-amber-500 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <h4 className="font-bold text-sm sm:text-base text-slate-900 leading-snug">
                      {q.question}
                    </h4>
                  </div>

                  <button
                    onClick={() => sounds.speakVietnamese(`Câu ${idx + 1}: ${q.question}`)}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-amber-600 hover:bg-amber-50 shrink-0"
                    title="Nghe câu hỏi"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* 3 Options */}
                <div className="grid grid-cols-1 gap-2.5 pl-0 sm:pl-10">
                  {q.options.map((opt, optIdx) => {
                    const isThisSelected = selectedOpt === optIdx;
                    let optStyle = 'bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-amber-50/40';

                    if (isSubmitted) {
                      if (optIdx === q.correctAnswer) {
                        optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                      } else if (isThisSelected) {
                        optStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                      }
                    } else if (isThisSelected) {
                      optStyle = 'bg-amber-50 border-amber-500 text-amber-950 font-bold ring-1 ring-amber-400';
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={isSubmitted}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${optStyle}`}
                      >
                        <span>{opt}</span>
                        {isSubmitted && optIdx === q.correctAnswer && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        )}
                        {isSubmitted && isThisSelected && optIdx !== q.correctAnswer && (
                          <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Detailed explanation after submission */}
                {isSubmitted && (
                  <div
                    className={`pl-0 sm:pl-10 text-xs p-3 rounded-xl flex items-center gap-2 ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-950 font-medium'
                        : 'bg-rose-100 text-rose-950'
                    }`}
                  >
                    <span>{isCorrect ? '🌟' : '💡'}</span>
                    <span>{q.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Button */}
        {!isSubmitted && (
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-100">
            <span className="text-xs text-slate-500">
              {isAllAnswered
                ? '✅ Em đã chọn đủ 10 câu. Hãy bấm nộp bài nhé!'
                : `Còn ${FINAL_QUIZ_QUESTIONS.length - answeredCount} câu chưa chọn.`}
            </span>

            <button
              onClick={handleSubmitQuiz}
              className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-2xl text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <Award className="w-5 h-5 fill-white" />
              <span>Nộp bài & Chấm điểm</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
