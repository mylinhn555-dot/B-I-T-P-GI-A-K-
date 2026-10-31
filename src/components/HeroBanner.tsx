import React, { useState } from 'react';
import { TabType } from '../types';
import { sounds } from '../utils/soundEffects';
import { ThamTuTi, RobotKey, AiBot, BeSao } from './chibi/Stickers';
import { Play, Sparkles, BookOpen, Clock, Users, ShieldAlert, Award } from 'lucide-react';

interface HeroBannerProps {
  onNavigate: (tab: TabType) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate }) => {
  const [selectedLesson, setSelectedLesson] = useState<1 | 2>(1);

  const handleAction = (tab: TabType) => {
    sounds.playPop();
    onNavigate(tab);
  };

  return (
    <div className="space-y-12 pb-8">
      {/* 1. MAIN HERO BANNER */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-sky-50 to-indigo-50 border border-amber-200/60 p-6 md:p-10 shadow-sm">
        {/* Decorative Background Elements */}
        <div className="absolute top-4 right-10 text-6xl opacity-15 select-none pointer-events-none">🔍</div>
        <div className="absolute bottom-6 left-1/3 text-5xl opacity-15 select-none pointer-events-none">🌐</div>
        <div className="absolute top-1/2 right-1/4 text-4xl opacity-15 select-none pointer-events-none">⭐</div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Zone */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 border border-amber-300/80 text-xs font-bold tracking-wide">
              <span>🕵️ SÂN CHƠI HỌC TẬP SỐ</span>
              <span className="text-amber-500">·</span>
              <span>TIN HỌC LỚP 5 · CHỦ ĐỀ 2 · BÀI 2</span>
            </div>

            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 leading-tight text-balance">
              TRỞ THÀNH THÁM TỬ TÌM KIẾM THÔNG TIN!
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              Em đã biết cách tìm đúng thông tin trên website chưa? Hãy cùng Thám tử Tí, Robot Key và AI Bot khám phá, thực hành tìm kiếm và chinh phục những thử thách công nghệ thú vị nhé!
            </p>

            {/* Core Slogan Banner */}
            <div className="p-3.5 bg-white/80 rounded-2xl border border-amber-200 shadow-xs flex items-center gap-3">
              <span className="text-2xl">💡</span>
              <p className="text-xs sm:text-sm font-bold text-amber-950">
                QUY TRÌNH VÀNG: Xác định nhiệm vụ → Chọn từ khóa/chủ đề → Tìm kiếm → Kiểm tra → Chia sẻ!
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => handleAction('warmup')}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-white" />
                <span>Xem Video Khởi động</span>
              </button>

              <button
                onClick={() => handleAction('detective')}
                className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-bold rounded-2xl border border-slate-300 shadow-xs hover:border-amber-400 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <BookOpen className="w-5 h-5 text-amber-600" />
                <span>Phòng Thực hành Web</span>
              </button>

              <button
                onClick={() => handleAction('playground')}
                className="px-5 py-3.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 font-bold rounded-2xl border border-indigo-200 transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-indigo-600" />
                <span>Sân chơi mini</span>
              </button>
            </div>
          </div>

          {/* Right Sticker Mascot Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-4">
            <div className="relative w-full max-w-sm flex items-center justify-center">
              {/* Central Detective Ti */}
              <div className="z-20 transform hover:scale-105 transition-transform">
                <ThamTuTi expression="searching" size={170} speech="Chào các bạn học sinh lớp 5! Hãy cùng mình giải mã nhé!" />
              </div>

              {/* Robot Key */}
              <div className="absolute -left-2 top-2 z-10 transform -rotate-6 hover:rotate-0 transition-transform">
                <RobotKey expression="suggesting" size={90} speech="Từ khóa ngắn gọn!" />
              </div>

              {/* AI Bot */}
              <div className="absolute -right-2 top-0 z-10 transform rotate-6 hover:rotate-0 transition-transform">
                <AiBot expression="idle" size={95} speech="Nhớ kiểm tra lại tớ nhé!" />
              </div>

              {/* Bé Sao */}
              <div className="absolute -bottom-4 right-8 z-30 transform hover:rotate-12 transition-transform">
                <BeSao size={72} speech="Cố lên nào!" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HÔM NAY CHÚNG TA SẼ HỌC GÌ? (8 OBJECTIVES) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Mục tiêu bài học</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
            HÔM NAY CHÚNG TA SẼ HỌC GÌ?
          </h2>
          <p className="text-sm text-slate-600">
            Sau 2 tiết học lý thú, em sẽ làm chủ 8 kỹ năng thám tử số thông minh:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: '🎯',
              title: 'Xác định thông tin',
              desc: 'Biết rõ mình cần tìm gì trước khi mở website để không mất thời gian.'
            },
            {
              icon: '🔑',
              title: 'Chọn từ khóa phù hợp',
              desc: 'Chọn từ ngắn gọn, đúng trọng tâm, tránh gõ câu văn dài dòng.'
            },
            {
              icon: '📂',
              title: 'Tìm theo chủ đề',
              desc: 'Biết bấm vào các danh mục Thể thao, Học tập, Thiếu nhi trên thanh menu.'
            },
            {
              icon: '🔍',
              title: 'Dùng ô tìm kiếm',
              desc: 'Sử dụng ô tìm kiếm và phím Enter để lọc bài viết trong tích tắc.'
            },
            {
              icon: '✅',
              title: 'Chọn tin phù hợp',
              desc: 'Nhận biết bài viết nào thực sự có ích và đúng với nhiệm vụ được giao.'
            },
            {
              icon: '🛡️',
              title: 'Kiểm tra thông tin',
              desc: 'Biết đọc kỹ, kiểm chứng nguồn tin trước khi tin tưởng và sử dụng.'
            },
            {
              icon: '🤝',
              title: 'Chia sẻ với bạn bè',
              desc: 'Hợp tác nhóm, ghi lại kết quả vào phiếu và thuyết trình rõ ràng.'
            },
            {
              icon: '🤖',
              title: 'Dùng AI có trách nhiệm',
              desc: 'Hiểu AI chỉ hỗ trợ gợi ý, không lạm dụng và không tin tuyệt đối.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-amber-300 hover:bg-amber-50/50 transition-all flex items-start gap-3.5 group"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform shadow-xs">
                {item.icon}
              </div>
              <div>
                <h3 className="font-bold text-sm text-slate-900 group-hover:text-amber-800 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BẢN ĐỒ HÀNH TRÌNH HỌC TẬP (5 STAGES) */}
      <section className="bg-gradient-to-r from-sky-50 via-white to-amber-50 rounded-3xl border border-sky-200/80 p-6 sm:p-8 shadow-xs">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-wider">Lộ trình 5 bước</span>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            BẢN ĐỒ HÀNH TRÌNH THÁM TỬ
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Chinh phục từng chặng để rinh trọn 5 huy hiệu thám tử danh giá!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {[
            {
              step: 'Chặng 1',
              title: 'Nhận nhiệm vụ',
              tab: 'warmup',
              icon: '📋',
              desc: 'Xem video của nhóm An & xác định mục tiêu',
              color: 'from-amber-400 to-amber-500'
            },
            {
              step: 'Chặng 2',
              title: 'Khám phá website',
              tab: 'knowledge',
              icon: '🧭',
              desc: 'Nhận biết 9 khu vực then chốt trên trang web',
              color: 'from-sky-400 to-sky-500'
            },
            {
              step: 'Chặng 3',
              title: 'Từ khóa thông minh',
              tab: 'keywords',
              icon: '🔑',
              desc: 'Bí mật chọn từ khóa chuẩn cùng Robot Key',
              color: 'from-indigo-400 to-indigo-500'
            },
            {
              step: 'Chặng 4',
              title: 'Thực hành tìm kiếm',
              tab: 'detective',
              icon: '🕵️',
              desc: 'Trực tiếp thao tác trên website mô phỏng thật',
              color: 'from-emerald-400 to-emerald-500'
            },
            {
              step: 'Chặng 5',
              title: 'Kiểm tra & Chia sẻ',
              tab: 'ai-literacy',
              icon: '🌟',
              desc: 'Thử thách cùng AI Bot & hoàn thành phiếu nhóm',
              color: 'from-purple-400 to-purple-500'
            }
          ].map((stage, idx) => (
            <div
              key={idx}
              onClick={() => handleAction(stage.tab as TabType)}
              className="bg-white rounded-2xl border border-slate-200 p-4 text-center hover:border-amber-400 hover:shadow-md transition-all cursor-pointer group flex flex-col items-center justify-between"
            >
              <div className="w-full flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold text-slate-500 uppercase">{stage.step}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold">
                  Bước {idx + 1}
                </span>
              </div>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stage.color} flex items-center justify-center text-2xl text-white shadow-sm mb-3 group-hover:scale-110 transition-transform`}>
                {stage.icon}
              </div>

              <h4 className="font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors">
                {stage.title}
              </h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                {stage.desc}
              </p>

              <div className="mt-3 text-xs font-semibold text-amber-600 group-hover:translate-x-0.5 transition-transform">
                Khám phá ngay →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CHƯƠNG TRÌNH PHÂN PHỐI 2 TIẾT HỌC (TEACHER & STUDENT AID) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wide">
              <Clock className="w-4 h-4 text-emerald-600" />
              <span>Thời lượng bài học: 2 tiết (Chương trình GDPT 2018)</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-1">
              KẾ HOẠCH HỌC TẬP TRÊN LỚP
            </h3>
          </div>

          {/* Switcher Tiết 1 vs Tiết 2 */}
          <div className="flex items-center p-1 bg-slate-100 rounded-xl shrink-0">
            <button
              onClick={() => {
                sounds.playPop();
                setSelectedLesson(1);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedLesson === 1
                  ? 'bg-white text-amber-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tiết 1: Khám phá cách tìm
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setSelectedLesson(2);
              }}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                selectedLesson === 2
                  ? 'bg-white text-amber-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Tiết 2: Thực hành & Chia sẻ
            </button>
          </div>
        </div>

        {selectedLesson === 1 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 uppercase">Hoạt động 1 · 5 phút</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-200/70 text-amber-900">Khởi động</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Nhiệm vụ của nhóm An</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Xem video AI tình huống, quan sát các bạn đang băn khoăn tìm thông tin về "Ngày hội Trạng Nguyên nhỏ tuổi", giải 3 câu hỏi trắc nghiệm mở đầu.
              </p>
              <button
                onClick={() => handleAction('warmup')}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Vào phần Khởi động</span> →
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-800 uppercase">Hoạt động 2 · 22 phút</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-sky-200/70 text-sky-900">Trọng tâm</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Khám phá website cho trước</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Khám phá giao diện mẫu "Góc thông tin thiếu nhi", tương tác 9 khu vực quan trọng, thực hành duyệt theo chủ đề và nhập từ khóa vào ô tìm kiếm.
              </p>
              <button
                onClick={() => handleAction('knowledge')}
                className="text-xs font-bold text-sky-700 hover:text-sky-800 flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Xem Cấu tạo Website</span> →
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 uppercase">Hoạt động 3 · 8 phút</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-200/70 text-emerald-900">Củng cố</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Chọn cách tìm phù hợp</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                So sánh khi nào nên duyệt theo chủ đề, khi nào nên dùng ô tìm kiếm cho 3 nhiệm vụ cụ thể. Khái quát quy trình tìm kiếm chuẩn.
              </p>
              <button
                onClick={() => handleAction('keywords')}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Học Bí mật từ khóa</span> →
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-indigo-800 uppercase">Hoạt động 1 · 5 phút</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-indigo-200/70 text-indigo-900">Khởi động</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Từ khóa bí mật</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Phân biệt từ khóa rõ nghĩa với từ khóa quá chung chung hoặc câu văn dài. Trò chơi chọn nhanh từ khóa phù hợp.
              </p>
              <button
                onClick={() => handleAction('keywords')}
                className="text-xs font-bold text-indigo-700 hover:text-indigo-800 flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Thực hành từ khóa</span> →
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 uppercase">Hoạt động 2 · 24 phút</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-amber-200/70 text-amber-900">Nhóm 4 bạn</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Thám tử website & Phiếu nhóm</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Nhóm 4 bạn phân công vai trò (Đọc nhiệm vụ, Tìm kiếm, Ghi kết quả, Báo cáo), hoàn thành 4 nhiệm vụ trên website mẫu và điền Phiếu học tập số.
              </p>
              <button
                onClick={() => handleAction('detective')}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Vào Phòng thực hành</span> →
              </button>
            </div>

            <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-800 uppercase">Hoạt động 3 · 6 phút</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-purple-200/70 text-purple-900">Tổng kết</span>
              </div>
              <h4 className="font-bold text-slate-900 text-base">Quy tắc tìm kiếm & Đánh giá</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ghi nhớ 3 nguyên tắc sử dụng AI có trách nhiệm, làm bài kiểm tra trắc nghiệm 10 câu và nhận chứng nhận Thám tử Website xuất sắc.
              </p>
              <button
                onClick={() => handleAction('assessment')}
                className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1 cursor-pointer pt-1"
              >
                <span>Làm bài kiểm tra</span> →
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
