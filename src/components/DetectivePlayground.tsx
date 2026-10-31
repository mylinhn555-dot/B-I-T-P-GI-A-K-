import React, { useState } from 'react';
import { TabType } from '../types';
import { sounds } from '../utils/soundEffects';
import { ThamTuTi, RobotKey, AiBot, BeSao } from './chibi/Stickers';
import { Gamepad2, Sparkles, CheckCircle2, RotateCcw, ArrowRight, Zap, Target, HelpCircle, Layers } from 'lucide-react';
import confetti from 'canvas-confetti';

interface DetectivePlaygroundProps {
  onNavigate: (tab: TabType) => void;
  onGameWin: (gameId: string) => void;
}

export const DetectivePlayground: React.FC<DetectivePlaygroundProps> = ({
  onNavigate,
  onGameWin
}) => {
  const [activeGameId, setActiveGameId] = useState<number>(5); // Default to game 5 (Ordering) or 1
  const [totalPlayScore, setTotalPlayScore] = useState<number>(100);

  // GAME 1: Từ khóa siêu tốc state
  const [g1Idx, setG1Idx] = useState<number>(0);
  const [g1Answer, setG1Answer] = useState<number | null>(null);
  const [g1Score, setG1Score] = useState<number>(0);

  // GAME 2: Tìm đúng khu vực state
  const [g2Idx, setG2Idx] = useState<number>(0);
  const [g2Answer, setG2Answer] = useState<string | null>(null);

  // GAME 4: AI Đúng hay Sai state
  const [g4Idx, setG4Idx] = useState<number>(0);
  const [g4Answer, setG4Answer] = useState<boolean | null>(null);

  // GAME 5: Ghép quy trình 5 bước state
  const CORRECT_PROCESS = [
    'Xác định nhiệm vụ cần tìm',
    'Chọn từ khóa hoặc chủ đề phù hợp',
    'Tìm kiếm thông tin trên website',
    'Kiểm tra và đánh giá kết quả',
    'Chia sẻ thông tin với bạn bè'
  ];

  // Shuffled items for Game 5
  const [orderedSteps, setOrderedSteps] = useState<string[]>([]);
  const [availableSteps, setAvailableSteps] = useState<string[]>([
    'Tìm kiếm thông tin trên website',
    'Xác định nhiệm vụ cần tìm',
    'Chia sẻ thông tin với bạn bè',
    'Chọn từ khóa hoặc chủ đề phù hợp',
    'Kiểm tra và đánh giá kết quả'
  ]);
  const [g5Success, setG5Success] = useState<boolean>(false);

  // Game 5 logic
  const handleSelectStep = (stepText: string) => {
    sounds.playPop();
    const newOrdered = [...orderedSteps, stepText];
    const newAvailable = availableSteps.filter((s) => s !== stepText);

    setOrderedSteps(newOrdered);
    setAvailableSteps(newAvailable);

    // If all 5 selected, check correctness
    if (newOrdered.length === CORRECT_PROCESS.length) {
      const isCorrect = newOrdered.every((s, i) => s === CORRECT_PROCESS[i]);
      if (isCorrect) {
        sounds.playFanfare();
        confetti({ particleCount: 70, spread: 60 });
        setG5Success(true);
        setTotalPlayScore((prev) => prev + 50);
        onGameWin('game-process');
      } else {
        sounds.playError();
      }
    }
  };

  const handleResetGame5 = () => {
    sounds.playPop();
    setOrderedSteps([]);
    setAvailableSteps([
      'Tìm kiếm thông tin trên website',
      'Xác định nhiệm vụ cần tìm',
      'Chia sẻ thông tin với bạn bè',
      'Chọn từ khóa hoặc chủ đề phù hợp',
      'Kiểm tra và đánh giá kết quả'
    ]);
    setG5Success(false);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-900 border border-indigo-300 text-xs font-bold">
          <span>🎮 SÂN CHƠI TƯƠNG TÁC</span>
          <span>·</span>
          <span>5 TRÒ CHƠI LUYỆN TẬP THÁM TỬ</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          SÂN CHƠI THÁM TỬ WEBSITE
        </h2>
        <p className="text-base text-slate-600">
          Vừa học vừa chơi, rèn luyện phản xạ tìm kiếm và rinh điểm thưởng cùng 4 người bạn đồng hành!
        </p>
      </div>

      {/* 5 Games Navigation Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
        {[
          { id: 1, name: '1. Từ khóa siêu tốc', icon: Zap },
          { id: 2, name: '2. Nhận diện khu vực', icon: Target },
          { id: 4, name: '3. AI Đúng hay Sai?', icon: HelpCircle },
          { id: 5, name: '4. Ghép quy trình 5 bước', icon: Layers }
        ].map((g) => (
          <button
            key={g.id}
            onClick={() => {
              sounds.playPop();
              setActiveGameId(g.id);
            }}
            className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeGameId === g.id
                ? 'bg-amber-500 text-white shadow-md scale-105'
                : 'bg-white border border-slate-200 text-slate-700 hover:bg-amber-50/60 hover:border-amber-300'
            }`}
          >
            <g.icon className="w-4 h-4" />
            <span>{g.name}</span>
          </button>
        ))}
      </div>

      {/* GAME 5: GHÉP QUY TRÌNH TÌM KIẾM 5 BƯỚC (Featured) */}
      {activeGameId === 5 && (
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase">Trò chơi trọng tâm</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                GHÉP ĐÚNG QUY TRÌNH TÌM KIẾM 5 BƯỚC
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Bấm vào các bước bên dưới theo đúng trình tự từ Bước 1 đến Bước 5 để tạo thành quy trình chuẩn!
              </p>
            </div>

            <button
              onClick={handleResetGame5}
              className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Ghép lại</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Target Slots (Steps 1 to 5) */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm text-slate-800 flex items-center gap-2">
                <span>📋 Quy trình của em:</span>
                <span className="text-xs font-medium text-slate-500">
                  ({orderedSteps.length}/5 bước)
                </span>
              </h4>

              <div className="space-y-2">
                {[0, 1, 2, 3, 4].map((idx) => {
                  const step = orderedSteps[idx];
                  return (
                    <div
                      key={idx}
                      className={`p-3.5 rounded-2xl border-2 transition-all flex items-center gap-3 ${
                        step
                          ? 'border-amber-400 bg-amber-50/70 text-amber-950 font-bold'
                          : 'border-dashed border-slate-300 bg-slate-50/50 text-slate-400'
                      }`}
                    >
                      <span className="w-6 h-6 rounded-full bg-slate-200 text-slate-700 text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm">
                        {step || `Bước ${idx + 1}: (Chưa chọn)`}
                      </span>
                    </div>
                  );
                })}
              </div>

              {g5Success && (
                <div className="p-4 rounded-2xl bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs sm:text-sm font-bold flex items-center gap-3">
                  <BeSao size={50} speech="Em giỏi quá!" />
                  <div>
                    <h5 className="font-bold text-base">CHÚC MỪNG EM ĐÃ GHÉP CHÍNH XÁC!</h5>
                    <p className="text-xs text-emerald-800">
                      Quy tắc 5 bước này sẽ giúp em luôn tìm đúng thông tin trong học tập và cuộc sống!
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Available step buttons */}
            <div className="space-y-3">
              <h4 className="font-extrabold text-sm text-slate-800">
                👉 Bấm chọn bước tiếp theo:
              </h4>

              {availableSteps.length > 0 ? (
                <div className="space-y-2">
                  {availableSteps.map((step, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectStep(step)}
                      className="w-full p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:bg-amber-50/50 text-slate-800 text-left text-xs sm:text-sm font-medium transition-all shadow-xs cursor-pointer flex items-center justify-between group"
                    >
                      <span>{step}</span>
                      <span className="text-amber-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        + Chọn
                      </span>
                    </button>
                  ))}
                </div>
              ) : !g5Success ? (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs space-y-2">
                  <p className="font-bold">Chưa đúng thứ tự rồi em ơi!</p>
                  <p>Hãy bấm "Ghép lại" và nhớ nguyên tắc: Xác định nhiệm vụ phải là bước đầu tiên nhé!</p>
                  <button
                    onClick={handleResetGame5}
                    className="px-3 py-1.5 bg-rose-600 text-white rounded-lg font-bold text-xs cursor-pointer"
                  >
                    Thử lại ngay
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      )}

      {/* GAME 1: TỪ KHÓA SIÊU TỐC */}
      {activeGameId === 1 && (
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase">Trò chơi 1</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                TỪ KHÓA SIÊU TỐC
              </h3>
            </div>
            <RobotKey expression="happy" size={54} speech="Nhanh tay nào!" />
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1">
              <span className="text-xs font-bold text-amber-800">NHIỆM VỤ:</span>
              <h4 className="font-bold text-base text-slate-900">
                Tìm thông tin về "Hoạt động thiếu nhi vẽ tranh vì môi trường"
              </h4>
            </div>

            <p className="text-xs text-slate-600 text-center">
              Từ khóa nào dưới đây là ngắn gọn và chính xác nhất?
            </p>

            <div className="space-y-2.5">
              {[
                { text: 'Thiếu nhi vẽ tranh', correct: true },
                { text: 'Tất cả các bài viết về tranh trên toàn thế giới', correct: false },
                { text: 'Một ngày của em rất thích tô màu', correct: false }
              ].map((item, idx) => {
                const isSelected = g1Answer === idx;
                let style = 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-amber-50/50 hover:border-amber-300';
                if (isSelected) {
                  style = item.correct
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold'
                    : 'bg-rose-50 border-rose-400 text-rose-900';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      sounds.playPop();
                      setG1Answer(idx);
                      if (item.correct) {
                        sounds.playSuccess();
                        confetti({ particleCount: 30, spread: 50 });
                        setG1Score((prev) => prev + 10);
                      } else {
                        sounds.playError();
                      }
                    }}
                    className={`w-full p-3.5 rounded-2xl border text-left text-xs sm:text-sm font-medium transition-all cursor-pointer ${style}`}
                  >
                    "{item.text}"
                  </button>
                );
              })}
            </div>

            {g1Answer !== null && (
              <div className="p-3 bg-emerald-100 text-emerald-950 rounded-xl text-xs font-bold text-center">
                {g1Answer === 0 ? '🎉 Chính xác! Từ khóa rất ngắn gọn và trúng chủ đề!' : '💡 Chưa chính xác, hãy chọn từ khóa ngắn gọn và đúng trọng tâm nhé!'}
              </div>
            )}
          </div>
        </section>
      )}

      {/* GAME 2: NHẬN DIỆN KHU VỰC TRÊN WEBSITE */}
      {activeGameId === 2 && (
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-sky-700 uppercase">Trò chơi 2</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                TÌM ĐÚNG KHU VỰC TRÊN WEBSITE
              </h3>
            </div>
            <ThamTuTi expression="searching" size={60} />
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-1">
              <span className="text-xs font-bold text-sky-800">CÂU HỎI TÌNH HUỐNG:</span>
              <h4 className="font-bold text-base text-slate-900">
                Khi em có một từ khóa cụ thể như "Dế Mèn", em sẽ tìm ở khu vực nào nhanh nhất?
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'search', label: '🔍 Ô tìm kiếm', correct: true },
                { id: 'footer', label: '📄 Chân trang', correct: false },
                { id: 'banner', label: '🖼️ Ảnh nền', correct: false },
                { id: 'exit', label: '❌ Nút thoát', correct: false }
              ].map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => {
                    sounds.playPop();
                    setG2Answer(opt.id);
                    if (opt.correct) {
                      sounds.playSuccess();
                      confetti({ particleCount: 30, spread: 45 });
                    } else {
                      sounds.playError();
                    }
                  }}
                  className={`p-4 rounded-2xl border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    g2Answer === opt.id
                      ? opt.correct
                        ? 'bg-emerald-500 text-white border-emerald-600'
                        : 'bg-rose-500 text-white border-rose-600'
                      : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-sky-50 hover:border-sky-300'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {g2Answer && (
              <div className="p-3 bg-sky-100 text-sky-950 rounded-xl text-xs font-bold text-center">
                {g2Answer === 'search'
                  ? '🌟 Hoan hô! Dùng ô tìm kiếm để tra cứu nhanh từ khóa là chuẩn nhất!'
                  : '💡 Chưa đúng rồi! Hãy nhớ dùng ô tìm kiếm nhé!'}
              </div>
            )}
          </div>
        </section>
      )}

      {/* GAME 4: AI ĐÚNG HAY SAI? */}
      {activeGameId === 4 && (
        <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-purple-700 uppercase">Trò chơi 3</span>
              <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                AI BOT: ĐÚNG HAY SAI?
              </h3>
            </div>
            <AiBot expression="thinking" size={60} />
          </div>

          <div className="max-w-xl mx-auto space-y-4">
            <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-1">
              <span className="text-xs font-bold text-purple-800">KHẲNG ĐỊNH:</span>
              <h4 className="font-bold text-base text-slate-900">
                "Công cụ AI và tìm kiếm có thể gợi ý thông tin rất nhanh, nhưng em KHÔNG NÊN tin tưởng tuyệt đối 100% mà luôn cần kiểm tra lại."
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => {
                  sounds.playPop();
                  setG4Answer(true);
                  sounds.playSuccess();
                  confetti({ particleCount: 30, spread: 45 });
                }}
                className={`p-4 rounded-2xl border text-sm font-bold transition-all cursor-pointer ${
                  g4Answer === true
                    ? 'bg-emerald-500 text-white border-emerald-600'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-emerald-50'
                }`}
              >
                ✅ ĐÚNG (Hoàn toàn chính xác)
              </button>

              <button
                onClick={() => {
                  sounds.playPop();
                  setG4Answer(false);
                  sounds.playError();
                }}
                className={`p-4 rounded-2xl border text-sm font-bold transition-all cursor-pointer ${
                  g4Answer === false
                    ? 'bg-rose-500 text-white border-rose-600'
                    : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-rose-50'
                }`}
              >
                ❌ SAI (AI luôn luôn đúng)
              </button>
            </div>

            {g4Answer !== null && (
              <div className="p-3 bg-purple-100 text-purple-950 rounded-xl text-xs font-bold text-center">
                {g4Answer === true
                  ? '🌟 Chính xác! Thám tử thông minh luôn biết kiểm tra lại nội dung gợi ý!'
                  : '💡 Sai rồi! AI vẫn có thể nhầm lẫn hoặc đưa tin cũ, em cần kiểm tra nhé!'}
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA To Assessment */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm sm:text-base">
            ĐÃ SẴN SÀNG LÀM BÀI KIỂM TRA ĐÁNH GIÁ CUỐI BÀI?
          </h4>
          <p className="text-xs text-indigo-100">
            10 câu trắc nghiệm thú vị đang chờ đón em rinh chứng nhận Thám tử Website!
          </p>
        </div>

        <button
          onClick={() => {
            sounds.playPop();
            onNavigate('assessment');
          }}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-indigo-950 font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
        >
          <span>Làm bài kiểm tra 10 câu</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
