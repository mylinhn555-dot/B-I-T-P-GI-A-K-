import React, { useState, useRef } from 'react';
import { TabType } from '../types';
import { WARMUP_QUESTIONS } from '../data/lessonData';
import { sounds } from '../utils/soundEffects';
import { ThamTuTi, RobotKey } from './chibi/Stickers';
import { Play, Pause, RotateCcw, Volume2, CheckCircle2, XCircle, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';

interface WarmupSectionProps {
  onNavigate: (tab: TabType) => void;
  onCompleteWarmup: () => void;
}

export const WarmupSection: React.FC<WarmupSectionProps> = ({
  onNavigate,
  onCompleteWarmup
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showTranscript, setShowTranscript] = useState<boolean>(true);
  const [userAnswers, setUserAnswers] = useState<Record<number, number>>({});
  const [feedback, setFeedback] = useState<Record<number, boolean>>({});

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
        sounds.playPop();
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
        sounds.playPop();
      }
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      sounds.playPop();
    }
  };

  const handleSelectAnswer = (questionId: number, optionIdx: number) => {
    const q = WARMUP_QUESTIONS.find((item) => item.id === questionId);
    if (!q) return;

    setUserAnswers((prev) => ({ ...prev, [questionId]: optionIdx }));
    const isCorrect = optionIdx === q.correctAnswer;
    setFeedback((prev) => ({ ...prev, [questionId]: isCorrect }));

    if (isCorrect) {
      sounds.playSuccess();
      // Check if all 3 questions answered correctly
      const updatedAnswers = { ...userAnswers, [questionId]: optionIdx };
      const allCorrect = WARMUP_QUESTIONS.every(
        (item) => updatedAnswers[item.id] === item.correctAnswer
      );
      if (allCorrect) {
        sounds.playFanfare();
        confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
        onCompleteWarmup();
      }
    } else {
      sounds.playError();
    }
  };

  const handleReadAloud = (text: string) => {
    sounds.speakVietnamese(text);
  };

  const allAnsweredCorrectly = WARMUP_QUESTIONS.every(
    (q) => userAnswers[q.id] === q.correctAnswer
  );

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
          <span>🎬 TIẾT 1 · HOẠT ĐỘNG 1 (5 PHÚT)</span>
          <span>·</span>
          <span>KHỞI ĐỘNG CÙNG NHÓM AN</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          NHIỆM VỤ CỦA NHÓM BẠN AN
        </h2>
        <p className="text-base text-slate-600">
          Hãy cùng xem video AI tình huống lớp học và giúp nhóm bạn An tìm kiếm thông tin về "Ngày hội Trạng Nguyên nhỏ tuổi" nhé!
        </p>
      </div>

      {/* 1. VIDEO AI PLAYER KHỞI ĐỘNG (User-provided video) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Video Player Box */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-2xl overflow-hidden bg-slate-900 shadow-md border-4 border-amber-300 aspect-video group flex items-center justify-center">
              <video
                ref={videoRef}
                src="/assets/aistudio/B_I_2-_T_M_KI_M_TH_NG_TIN_TR_N_WEBSITE_596688dd.mp4"
                className="w-full h-full object-contain"
                playsInline
                controls
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                poster="/assets/aistudio/Paste_October_31__2026_-_10_39AM_2bec5195"
              >
                Trình duyệt của em không hỗ trợ phát video này.
              </video>

              {/* Custom Overlay play button when paused */}
              {!isPlaying && (
                <div
                  onClick={togglePlay}
                  className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-opacity"
                >
                  <div className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-600 text-white flex items-center justify-center shadow-lg transform hover:scale-110 active:scale-95 transition-all">
                    <Play className="w-8 h-8 fill-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Player Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-amber-50/70 rounded-xl border border-amber-200">
              <div className="flex items-center gap-2">
                <button
                  onClick={togglePlay}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-white" />
                      <span>Tạm dừng</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-white" />
                      <span>Xem Video</span>
                    </>
                  )}
                </button>

                <button
                  onClick={restartVideo}
                  className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  title="Xem lại từ đầu"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-500" />
                  <span>Phát lại</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="text-xs font-semibold text-amber-800 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{showTranscript ? 'Ẩn lời thoại' : 'Hiện lời thoại'}</span>
                </button>

                <button
                  onClick={() =>
                    handleReadAloud(
                      'Các em hãy chuẩn bị bài trình chiếu về Ngày hội Trạng nguyên nhỏ tuổi để thuyết trình trước lớp nhé. Chúng mình cần tìm thông tin ở đâu bây giờ? Trang web thiếu niên chấm v-n!'
                    )
                  }
                  className="px-2.5 py-1.5 bg-sky-100 hover:bg-sky-200 text-sky-800 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  title="Nghe giọng đọc nhân vật"
                >
                  <Volume2 className="w-3.5 h-3.5 text-sky-600" />
                  <span>Đọc lời thoại</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Dialogue & Story Context */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <ThamTuTi expression="explaining" size={68} />
              <div>
                <h3 className="font-bold text-base text-slate-900">
                  Câu chuyện lớp học của bạn An
                </h3>
                <p className="text-xs text-slate-500">
                  Cô giáo vừa giao một nhiệm vụ thuyết trình rất thú vị!
                </p>
              </div>
            </div>

            {/* Interactive Comic Dialogue Cards */}
            {showTranscript && (
              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-purple-50 border border-purple-200 text-slate-800 space-y-1">
                  <div className="flex items-center justify-between font-bold text-purple-900">
                    <span>👩‍🏫 Cô giáo giao nhiệm vụ:</span>
                    <button
                      onClick={() =>
                        handleReadAloud('Các em hãy chuẩn bị bài trình chiếu về Ngày hội Trạng nguyên nhỏ tuổi để thuyết trình trước lớp nhé!')
                      }
                      className="text-purple-600 hover:text-purple-800"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="italic">
                    "Các em hãy chuẩn bị bài trình chiếu về <strong>Ngày hội Trạng Nguyên nhỏ tuổi</strong> để thuyết trình trước lớp nhé!"
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-slate-800 space-y-1">
                  <div className="flex items-center justify-between font-bold text-amber-900">
                    <span>👦 Bạn An băn khoăn:</span>
                    <button
                      onClick={() => handleReadAloud('Chúng mình cần tìm thông tin ở đâu bây giờ?')}
                      className="text-amber-600 hover:text-amber-800"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="italic">
                    "Chúng mình cần tìm thông tin ở đâu bây giờ?"
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-slate-800 space-y-1">
                  <div className="flex items-center justify-between font-bold text-sky-900">
                    <span>👧 Bạn nữ gợi ý:</span>
                    <button
                      onClick={() => handleReadAloud('Trang web thiếu niên chấm v-n!')}
                      className="text-sky-600 hover:text-sky-800"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="italic">
                    "Trang web <strong>thieunien.vn</strong> (Góc thông tin thiếu nhi)!"
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800 space-y-1">
                  <div className="flex items-center justify-between font-bold text-emerald-900">
                    <span>🎉 Cả nhóm hoàn thành:</span>
                    <button
                      onClick={() =>
                        handleReadAloud('Chúng mình đã tìm được thông tin nhờ trang web thieunien.vn! Ồ, ở đây có đầy đủ thông tin chúng mình cần. Hoan hô, chúng ta đã hoàn thành nhiệm vụ rồi!')
                      }
                      className="text-emerald-600 hover:text-emerald-800"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <p className="italic">
                    "Chúng mình đã tìm được thông tin nhờ trang web thieunien.vn! Ồ, ở đây có đầy đủ thông tin chúng mình cần. Hoan hô, chúng ta đã hoàn thành nhiệm vụ rồi!"
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. CÂU HỎI TƯƠNG TÁC KHỞI ĐỘNG (3 Questions from Section V) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Thử thách khởi động</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              EM HÃY GIÚP NHÓM BẠN AN CHỌN HƯỚNG ĐI ĐÚNG!
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <RobotKey expression="happy" size={54} speech="Chọn đáp án đúng nhé!" />
          </div>
        </div>

        <div className="space-y-6">
          {WARMUP_QUESTIONS.map((q, idx) => {
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
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                      {q.question}
                    </h4>
                  </div>
                  <button
                    onClick={() => handleReadAloud(q.question)}
                    className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-amber-600 hover:bg-amber-50 transition-colors shrink-0"
                    title="Nghe câu hỏi"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Options */}
                <div className="grid grid-cols-1 gap-2.5 pl-0 sm:pl-10">
                  {q.options.map((opt, optIdx) => {
                    const isThisSelected = selectedOpt === optIdx;
                    let optStyle = 'bg-white border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-700';

                    if (isThisSelected) {
                      if (optIdx === q.correctAnswer) {
                        optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                      } else {
                        optStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                      }
                    }

                    return (
                      <button
                        key={optIdx}
                        onClick={() => handleSelectAnswer(q.id, optIdx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${optStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-full border border-current text-xs font-bold flex items-center justify-center shrink-0">
                            {String.fromCharCode(65 + optIdx)}
                          </span>
                          <span>{opt}</span>
                        </div>

                        {isThisSelected && (
                          <div className="shrink-0">
                            {optIdx === q.correctAnswer ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            ) : (
                              <XCircle className="w-5 h-5 text-rose-500" />
                            )}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation feedback */}
                {isAnswered && (
                  <div
                    className={`pl-0 sm:pl-10 text-xs p-3 rounded-xl flex items-center gap-2 ${
                      isCorrect
                        ? 'bg-emerald-100/70 text-emerald-900 font-medium'
                        : 'bg-rose-100/70 text-rose-900'
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

        {/* Lesson takeaway banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <span className="text-3xl">🕵️‍♂️</span>
            <div>
              <h5 className="font-extrabold text-sm sm:text-base">
                THÔNG ĐIỆP GHI NHỚ KHỞI ĐỘNG
              </h5>
              <p className="text-xs sm:text-sm text-amber-50 font-medium mt-0.5">
                "Muốn tìm kiếm hiệu quả, em cần biết mình đang tìm gì, tìm ở đâu và kiểm tra kết quả như thế nào."
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              onNavigate('knowledge');
            }}
            className="px-5 py-2.5 bg-white hover:bg-slate-50 text-amber-900 font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <span>Sang phần Khám phá</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
