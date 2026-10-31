import React, { useState } from 'react';
import { TabType, UserProgress } from '../types';
import { BADGES_LIST } from '../data/lessonData';
import { sounds } from '../utils/soundEffects';
import { ThamTuTi, RobotKey, AiBot, BeSao } from './chibi/Stickers';
import { Award, Printer, CheckCircle2, Sparkles, User, Shield, Share2 } from 'lucide-react';

interface DetectiveProfileProps {
  progress: UserProgress;
  onUpdateStudentName: (name: string) => void;
  onNavigate: (tab: TabType) => void;
}

export const DetectiveProfile: React.FC<DetectiveProfileProps> = ({
  progress,
  onUpdateStudentName,
  onNavigate
}) => {
  const [editingName, setEditingName] = useState<string>(progress.studentName || 'Học Sinh Lớp 5');
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSaveName = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playPop();
    onUpdateStudentName(editingName.trim() || 'Học Sinh Lớp 5');
    setIsEditing(false);
  };

  const handlePrintCertificate = () => {
    sounds.playPop();
    window.print();
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
          <span>🌟 HỒ SƠ THÀNH TÍCH</span>
          <span>·</span>
          <span>DANH HIỆU THÁM TỬ WEBSITE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          HỒ SƠ THÁM TỬ CỦA EM
        </h2>
        <p className="text-base text-slate-600">
          Ghi nhận toàn bộ hành trình rèn luyện kỹ năng tìm kiếm thông tin, bảng huy hiệu danh dự và chứng nhận tốt nghiệp!
        </p>
      </div>

      {/* 1. Student Info & Quick KPI Strip */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 text-white flex items-center justify-center text-3xl shadow-sm shrink-0">
              🕵️‍♂️
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider block">
                THÁM TỬ VIÊN NHÍ
              </span>
              {isEditing ? (
                <form onSubmit={handleSaveName} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editingName}
                    onChange={(e) => setEditingName(e.target.value)}
                    className="px-3 py-1 rounded-lg border border-amber-400 text-base font-bold text-slate-900 focus:outline-none"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 bg-amber-500 text-white rounded-lg text-xs font-bold"
                  >
                    Lưu
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-extrabold text-slate-900">
                    {progress.studentName}
                  </h3>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-xs text-amber-600 hover:underline font-medium cursor-pointer"
                  >
                    [Đổi tên]
                  </button>
                </div>
              )}
              <p className="text-xs text-slate-500">
                Lớp 5 · Bài học: Tìm kiếm thông tin trên website
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrintCertificate}
              className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>In Giấy Chứng Nhận</span>
            </button>
          </div>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-center space-y-1">
            <span className="text-2xl">📋</span>
            <span className="text-2xl font-extrabold text-amber-950 font-display block">
              {progress.completedMissions.length} / 4
            </span>
            <span className="text-xs text-amber-800 font-medium">Nhiệm vụ hoàn thành</span>
          </div>

          <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 text-center space-y-1">
            <span className="text-2xl">🧭</span>
            <span className="text-2xl font-extrabold text-sky-950 font-display block">
              {progress.exploredHotspots.length} / 9
            </span>
            <span className="text-xs text-sky-800 font-medium">Khu vực đã khám phá</span>
          </div>

          <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-center space-y-1">
            <span className="text-2xl">🤖</span>
            <span className="text-2xl font-extrabold text-purple-950 font-display block">
              {progress.unlockedBadges.includes('badge-responsible-ai') ? 'Đã đạt' : 'Đang làm'}
            </span>
            <span className="text-xs text-purple-800 font-medium">Năng lực AI có trách nhiệm</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-1">
            <span className="text-2xl">🏆</span>
            <span className="text-2xl font-extrabold text-emerald-950 font-display block">
              {progress.quizScore !== null ? `${progress.quizScore}%` : 'Chưa thi'}
            </span>
            <span className="text-xs text-emerald-800 font-medium">Điểm kiểm tra 10 câu</span>
          </div>
        </div>
      </section>

      {/* 2. BỘ 5 HUY HIỆU DANH DỰ THÁM TỬ */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-xs font-bold text-amber-700 uppercase">Huy hiệu danh giá</span>
            <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
              BỘ 5 HUY HIỆU THÁM TỬ WEBSITE
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500">
            {progress.unlockedBadges.length} / {BADGES_LIST.length} huy hiệu đã mở
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {BADGES_LIST.map((badge) => {
            const isUnlocked = progress.unlockedBadges.includes(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border text-center flex flex-col items-center justify-between space-y-3 transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/70 border-amber-300 shadow-sm scale-102'
                    : 'bg-slate-50 border-slate-200 opacity-60 grayscale'
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-3xl shadow-xs">
                  {badge.icon}
                </div>

                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">
                    {badge.title}
                  </h4>
                  <p className="text-[11px] text-slate-600 leading-snug">
                    {badge.description}
                  </p>
                </div>

                <div className="w-full pt-2 border-t border-slate-200/60">
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isUnlocked
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isUnlocked ? '✓ Đã nhận' : 'Khóa'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. GIẤY CHỨNG NHẬN HOÀN THÀNH BÀI HỌC (PRINTABLE CERTIFICATE) */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 rounded-3xl border-4 border-amber-400 p-8 md:p-12 shadow-lg space-y-6 text-center max-w-4xl mx-auto relative overflow-hidden print:border-8 print:p-8">
        {/* Decorative corner ribbons */}
        <div className="absolute top-3 left-4 text-3xl opacity-30 select-none">⭐</div>
        <div className="absolute top-3 right-4 text-3xl opacity-30 select-none">⭐</div>
        <div className="absolute bottom-3 left-4 text-3xl opacity-30 select-none">🏆</div>
        <div className="absolute bottom-3 right-4 text-3xl opacity-30 select-none">🔍</div>

        <div className="space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500 text-white text-xs font-black tracking-widest uppercase">
            CHỨNG NHẬN HOÀN THÀNH XUẤT SẮC
          </div>

          <h3 className="font-display text-3xl sm:text-4xl font-black text-amber-950 uppercase tracking-tight">
            THÁM TỬ TÌM KIẾM THÔNG TIN
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 italic">
            Chứng nhận em học sinh:
          </p>

          <div className="font-display text-2xl sm:text-3xl font-extrabold text-amber-700 py-1 border-b-2 border-dashed border-amber-300 max-w-md mx-auto">
            {progress.studentName}
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pt-2">
            Đã hoàn thành xuất sắc chương trình học tập <strong>Tin học Lớp 5 · Chủ đề 2, Bài 2: Tìm kiếm thông tin trên website</strong>. Đạt năng lực xác định nhiệm vụ, chọn từ khóa thông minh, duyệt theo chủ đề, hợp tác nhóm và sử dụng trí tuệ nhân tạo (AI) có trách nhiệm.
          </p>
        </div>

        {/* Mascots Parade */}
        <div className="flex items-center justify-center gap-6 pt-4 flex-wrap">
          <ThamTuTi expression="celebrating" size={80} />
          <RobotKey expression="happy" size={70} />
          <AiBot expression="verified" size={70} />
          <BeSao size={65} />
        </div>

        <div className="pt-6 border-t border-amber-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <span>Ngày hoàn thành: {new Date().toLocaleDateString('vi-VN')}</span>
          <span className="font-bold text-amber-900">Ban Tổ Chức Thám Tử Website Lớp 5</span>
        </div>
      </section>
    </div>
  );
};
