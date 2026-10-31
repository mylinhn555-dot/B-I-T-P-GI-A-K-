import React, { useState } from 'react';
import { TabType } from '../types';
import { AI_BOT_SCENARIOS } from '../data/lessonData';
import { sounds } from '../utils/soundEffects';
import { AiBot, ThamTuTi } from './chibi/Stickers';
import { ShieldCheck, AlertTriangle, HelpCircle, CheckCircle2, ArrowRight, Sparkles, Scale, Info } from 'lucide-react';
import confetti from 'canvas-confetti';

interface AiResponsibilitySectionProps {
  onNavigate: (tab: TabType) => void;
  onCompleteAiSection: () => void;
}

export const AiResponsibilitySection: React.FC<AiResponsibilitySectionProps> = ({
  onNavigate,
  onCompleteAiSection
}) => {
  // 3 choices interaction
  const [selectedChoiceCard, setSelectedChoiceCard] = useState<string | null>('check');

  // AI Classification game state
  const [userClassifications, setUserClassifications] = useState<Record<number, string>>({});
  const [showGameResults, setShowGameResults] = useState<boolean>(false);

  // Source comparison challenge
  const [selectedSource, setSelectedSource] = useState<'A' | 'B' | null>(null);

  const handleClassify = (scenarioId: number, tag: 'usable' | 'check-needed' | 'not-suitable') => {
    sounds.playPop();
    const updated = { ...userClassifications, [scenarioId]: tag };
    setUserClassifications(updated);

    if (Object.keys(updated).length === AI_BOT_SCENARIOS.length) {
      setShowGameResults(true);
      const allCorrect = AI_BOT_SCENARIOS.every(
        (s) => updated[s.id] === s.correctTag
      );
      if (allCorrect) {
        sounds.playFanfare();
        confetti({ particleCount: 50, spread: 55 });
        onCompleteAiSection();
      } else {
        sounds.playSuccess();
      }
    }
  };

  const handleSelectSource = (src: 'A' | 'B') => {
    sounds.playPop();
    setSelectedSource(src);
    if (src === 'A') {
      sounds.playSuccess();
      confetti({ particleCount: 30, spread: 45 });
    } else {
      sounds.playError();
    }
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-bold">
          <span>🤖 NĂNG LỰC SỐ & TRÍ TUỆ NHÂN TẠO</span>
          <span>·</span>
          <span>SỬ DỤNG CÔNG CỤ SỐ CÓ TRÁCH NHIỆM</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          KIỂM TRA THÔNG TIN & SỬ DỤNG AI
        </h2>
        <p className="text-base text-slate-600">
          AI và công cụ tìm kiếm rất thông minh, nhưng AI có luôn luôn đúng không? Cùng AI Bot học cách kiểm chứng thông tin nhé!
        </p>
      </div>

      {/* 1. BA LỰA CHỌN KHI TIẾP NHẬN THÔNG TIN */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 uppercase">
            <Info className="w-4 h-4 text-purple-600" />
            <span>Kỹ năng đánh giá</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-900">
            3 LỰA CHỌN KHI TIẾP NHẬN KẾT QUẢ TÌM KIẾM
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Bấm vào từng thẻ bên dưới để xem thám tử thông minh nên hành động như thế nào:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Choice 1: TIN NGAY */}
          <div
            onClick={() => {
              sounds.playPop();
              setSelectedChoiceCard('trust');
            }}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
              selectedChoiceCard === 'trust'
                ? 'border-rose-500 bg-rose-50/70 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:border-rose-300'
            }`}
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl font-bold">
                ⚠️
              </div>
              <h4 className="font-extrabold text-base text-rose-950">
                1. TIN NGAY LẬP TỨC
              </h4>
              <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-rose-200 text-rose-900">
                KHÔNG NÊN DÙNG
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhiều bạn có thói quen bấm vào bài đầu tiên và sao chép ngay mà không đọc. Điều này rất nguy hiểm vì có thể gặp tin cũ, tin sai hoặc không đúng yêu cầu!
              </p>
            </div>
          </div>

          {/* Choice 2: KIỂM TRA LẠI */}
          <div
            onClick={() => {
              sounds.playPop();
              setSelectedChoiceCard('check');
            }}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
              selectedChoiceCard === 'check'
                ? 'border-emerald-500 bg-emerald-50/70 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:border-emerald-300'
            }`}
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                🔍
              </div>
              <h4 className="font-extrabold text-base text-emerald-950">
                2. ĐỌC KỸ & KIỂM TRA LẠI
              </h4>
              <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-200 text-emerald-900">
                KHUYÊN DÙNG HÀNG ĐẦU
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Đọc kỹ tiêu đề và nội dung bài viết, xem ngày tháng đăng tin, kiểm tra nguồn tin uy tín (báo thiếu nhi, website trường) và đối chiếu với nhiệm vụ.
              </p>
            </div>
          </div>

          {/* Choice 3: HỎI THẦY CÔ / NGƯỜI LỚN */}
          <div
            onClick={() => {
              sounds.playPop();
              setSelectedChoiceCard('ask');
            }}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
              selectedChoiceCard === 'ask'
                ? 'border-sky-500 bg-sky-50/70 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:border-sky-300'
            }`}
          >
            <div className="space-y-2">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center text-2xl font-bold">
                🙋‍♂️
              </div>
              <h4 className="font-extrabold text-base text-sky-950">
                3. HỎI THẦY CÔ / NGƯỜI LỚN
              </h4>
              <span className="inline-block text-[11px] font-bold px-2 py-0.5 rounded-md bg-sky-200 text-sky-900">
                KHI CẦN TRỢ GIÚP
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Khi gặp thông tin khó hiểu, có hai kết quả mâu thuẫn nhau hoặc em không chắc chắn về độ an toàn của trang web, hãy giơ tay nhờ thầy cô hướng dẫn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRÒ CHƠI: AI BOT CÓ LUÔN ĐÚNG KHÔNG? */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 uppercase">
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span>Trò chơi phân loại gợi ý AI</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              AI BOT CÓ LUÔN ĐÚNG KHÔNG?
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              AI Bot vừa đưa ra 3 gợi ý. Em hãy giúp bạn ấy phân loại: Có thể sử dụng, Cần kiểm tra lại, hay Không phù hợp nhé!
            </p>
          </div>

          <AiBot expression="thinking" size={72} speech="Hãy giúp tớ phân loại nhé!" />
        </div>

        <div className="space-y-6">
          {AI_BOT_SCENARIOS.map((scenario) => {
            const userTag = userClassifications[scenario.id];
            const isEvaluated = showGameResults && userTag;
            const isCorrect = userTag === scenario.correctTag;

            return (
              <div
                key={scenario.id}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <span className="text-xs font-bold text-purple-800 bg-purple-100 px-3 py-1 rounded-full w-fit">
                    {scenario.mission}
                  </span>
                  <span className="text-xs italic text-slate-500">
                    {scenario.aiBotNote}
                  </span>
                </div>

                {/* AI Suggestion Card */}
                <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">
                    {scenario.suggestionTitle}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {scenario.suggestionSnippet}
                  </p>
                </div>

                {/* 3 Classification Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <span className="text-xs font-bold text-slate-700 mr-2">Em đánh giá:</span>

                  <button
                    onClick={() => handleClassify(scenario.id, 'usable')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      userTag === 'usable'
                        ? 'bg-emerald-500 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-emerald-400'
                    }`}
                  >
                    ✅ Có thể sử dụng
                  </button>

                  <button
                    onClick={() => handleClassify(scenario.id, 'check-needed')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      userTag === 'check-needed'
                        ? 'bg-amber-500 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-amber-400'
                    }`}
                  >
                    ⚠️ Cần kiểm tra lại
                  </button>

                  <button
                    onClick={() => handleClassify(scenario.id, 'not-suitable')}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      userTag === 'not-suitable'
                        ? 'bg-rose-500 text-white shadow-xs'
                        : 'bg-white border border-slate-200 text-slate-700 hover:border-rose-400'
                    }`}
                  >
                    ❌ Không phù hợp
                  </button>
                </div>

                {/* Result Feedback */}
                {userTag && (
                  <div
                    className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                      isCorrect
                        ? 'bg-emerald-100 text-emerald-900 font-medium'
                        : 'bg-rose-100 text-rose-900'
                    }`}
                  >
                    <span>{isCorrect ? '🌟' : '💡'}</span>
                    <span>{scenario.explanation}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. THỬ THÁCH: PHÁT HIỆN THÔNG TIN CHƯA PHÙ HỢP (SO SÁNH 2 NGUỒN) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Thử thách đối chiếu nguồn tin</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              SO SÁNH HAI KẾT QUẢ TÌM KIẾM
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Nhiệm vụ: Nhóm em chuẩn bị bài giới thiệu về "Ngày hội Trạng Nguyên nhỏ tuổi". Giữa 2 kết quả dưới đây, nguồn nào phù hợp hơn?
            </p>
          </div>

          <ThamTuTi expression="searching" size={60} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option A (Good Source) */}
          <div
            onClick={() => handleSelectSource('A')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
              selectedSource === 'A'
                ? 'border-emerald-500 bg-emerald-50/60 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:border-emerald-300'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800">
                  KẾT QUẢ A
                </span>
                <span className="text-[11px] text-slate-500">15/10/2026 · thieunien.vn</span>
              </div>

              <h4 className="font-bold text-sm sm:text-base text-slate-900">
                Sôi động "Ngày hội Trạng Nguyên nhỏ tuổi": Sân chơi trí tuệ của tuổi thơ
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                Bài viết đăng trên trang tin thiếu nhi, có tên tác giả, ngày tháng gần đây, mô tả chi tiết các phần thi Bảng Vàng và trò chơi dân gian dành cho học sinh tiểu học.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>{selectedSource === 'A' ? '✅ Em đã chọn nguồn này (Rất chính xác!)' : '👉 Bấm để chọn nguồn A'}</span>
            </div>
          </div>

          {/* Option B (Unverified / Irrelevant Source) */}
          <div
            onClick={() => handleSelectSource('B')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
              selectedSource === 'B'
                ? 'border-rose-400 bg-rose-50/60 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:border-rose-300'
            }`}
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-rose-100 text-rose-800">
                  KẾT QUẢ B
                </span>
                <span className="text-[11px] text-slate-500">Không rõ ngày tháng · Diễn đàn tự do</span>
              </div>

              <h4 className="font-bold text-sm sm:text-base text-slate-900">
                Kinh nghiệm luyện thi đại học và bí quyết đỗ thủ khoa năm 2012
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                Bài viết từ một trang blog cá nhân không kiểm duyệt, viết về kỳ thi tốt nghiệp phổ thông của người lớn từ 14 năm trước, không liên quan đến ngày hội tiểu học.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-bold text-rose-700">
              <span>{selectedSource === 'B' ? '❌ Nguồn này không phù hợp!' : '👉 Bấm để chọn nguồn B'}</span>
            </div>
          </div>
        </div>

        {selectedSource && (
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-200 text-xs sm:text-sm text-sky-950 space-y-1">
            <strong>BÀI HỌC KHI ĐỐI CHIẾU NGUỒN TIN:</strong>
            <p className="text-xs text-slate-700">
              Một bài viết đáng tin cậy cho nhiệm vụ cần đáp ứng: <strong>Đúng đối tượng học sinh</strong>, <strong>thời gian cập nhật gần đây</strong>, và <strong>được xuất bản bởi nguồn tin chính thống</strong>.
            </p>
          </div>
        )}

        {/* 4. GHI NHỚ LỚN CỦA BÀI HỌC */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <span className="text-4xl">🤖</span>
            <div>
              <h4 className="font-display text-lg font-extrabold">
                GHI NHỚ QUAN TRỌNG VỀ TRÍ TUỆ NHÂN TẠO
              </h4>
              <p className="text-xs sm:text-sm text-purple-100 font-medium">
                "AI CÓ THỂ HỖ TRỢ EM, NHƯNG EM PHẢI BIẾT KIỂM TRA THÔNG TIN!"
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playPop();
              onNavigate('group-sheet');
            }}
            className="px-5 py-2.5 bg-white hover:bg-slate-50 text-purple-950 font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
          >
            <span>Đến Phiếu học tập nhóm</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
