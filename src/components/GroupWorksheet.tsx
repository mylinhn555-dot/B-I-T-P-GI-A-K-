import React, { useState, useEffect } from 'react';
import { TabType, GroupSheetData } from '../types';
import { sounds } from '../utils/soundEffects';
import { ThamTuTi, BeSao } from './chibi/Stickers';
import { Save, Printer, Eye, Users, CheckCircle2, RotateCcw, ArrowRight, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface GroupWorksheetProps {
  onNavigate: (tab: TabType) => void;
  onCompleteSheet: () => void;
}

const DEFAULT_SHEET: GroupSheetData = {
  groupName: 'Nhóm Thám Tử Số 1',
  members: 'An, Bình, Lan, Minh',
  roleReader: 'Bạn Lan (Đọc nhiệm vụ)',
  roleSearcher: 'Bạn An (Tìm kiếm trên website)',
  roleWriter: 'Bạn Bình (Ghi nhận thông tin)',
  rolePresenter: 'Bạn Minh (Báo cáo trước lớp)',
  missionGoal: 'Tìm hiểu về Ngày hội Trạng Nguyên nhỏ tuổi để chuẩn bị bài thuyết trình',
  chosenKeyword: 'Ngày hội Trạng Nguyên nhỏ tuổi (Chủ đề: Thiếu nhi)',
  foundInfo: 'Hoạt động thường niên bổ ích dành cho học sinh tiểu học, gồm 3 phần: Khai mạc, Tranh tài tri thức và Trao giải vinh danh Trạng Nguyên, Bảng Nhãn, Thám Hoa.',
  checkMethod: 'Đọc kỹ nội dung bài viết, kiểm tra ngày tháng đăng tin gần đây và xem nguồn có phải từ báo thiếu nhi thieunien.vn không.',
  shareMethod: 'Trao đổi cùng các bạn trong nhóm, đọc to thông tin tìm được, giải thích lí do chọn và cùng nhau hoàn thiện bài trình chiếu.',
  trustFirstResultReason: 'Không tin ngay kết quả đầu tiên, vì kết quả đầu tiên có thể là quảng cáo, tin cũ hoặc không đúng yêu cầu của nhiệm vụ.'
};

export const GroupWorksheet: React.FC<GroupWorksheetProps> = ({
  onNavigate,
  onCompleteSheet
}) => {
  const [sheet, setSheet] = useState<GroupSheetData>(() => {
    const saved = localStorage.getItem('thamtu_groupsheet');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return DEFAULT_SHEET;
  });

  const [savedNotification, setSavedNotification] = useState<boolean>(false);
  const [showPresentationModal, setShowPresentationModal] = useState<boolean>(false);

  const handleFieldChange = (field: keyof GroupSheetData, value: string) => {
    setSheet((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    sounds.playPop();
    const updated = { ...sheet, savedAt: new Date().toLocaleTimeString('vi-VN') };
    setSheet(updated);
    localStorage.setItem('thamtu_groupsheet', JSON.stringify(updated));
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 3000);
    sounds.playSuccess();
    confetti({ particleCount: 40, spread: 50 });
    onCompleteSheet();
  };

  const handlePrint = () => {
    sounds.playPop();
    window.print();
  };

  const handleLoadSample = () => {
    sounds.playPop();
    setSheet(DEFAULT_SHEET);
  };

  return (
    <div className="space-y-10 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold">
          <span>🤝 TIẾT 2 · HOẠT ĐỘNG NHÓM (24 PHÚT)</span>
          <span>·</span>
          <span>SẢN PHẨM HỌC TẬP SỐ</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          PHIẾU HỌC TẬP: THÁM TỬ WEBSITE
        </h2>
        <p className="text-base text-slate-600">
          Các nhóm hãy cùng nhau thảo luận, phân công 4 vai trò rõ ràng và điền đầy đủ các mục dưới đây để chuẩn bị báo cáo trước lớp nhé!
        </p>
      </div>

      {/* Main Worksheet Container */}
      <section className="bg-white rounded-3xl border-2 border-amber-300 p-6 md:p-10 shadow-md space-y-8 print:shadow-none print:border-none print:p-0">
        {/* Worksheet Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b-2 border-amber-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shadow-xs">
              📝
            </div>
            <div>
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider block">
                BÀI TẬP NHÓM 4 HỌC SINH · TIN HỌC LỚP 5
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900">
                PHIẾU BÁO CÁO THÁM TỬ WEBSITE
              </h3>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2 print:hidden">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>Lưu phiếu</span>
            </button>

            <button
              onClick={() => {
                sounds.playPop();
                setShowPresentationModal(true);
              }}
              className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-800 border border-indigo-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Eye className="w-4 h-4 text-indigo-600" />
              <span>Xem báo cáo lớp</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="In phiếu hoặc lưu file PDF"
            >
              <Printer className="w-4 h-4 text-slate-600" />
              <span>In / Lưu PDF</span>
            </button>
          </div>
        </div>

        {/* Save confirmation toast */}
        {savedNotification && (
          <div className="p-3 bg-emerald-100 border border-emerald-300 text-emerald-950 rounded-xl text-xs font-bold flex items-center gap-2 animate-bounce print:hidden">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Đã lưu thành công phiếu học tập của nhóm!</span>
          </div>
        )}

        {/* 1. Group Information & Role Allocation (4 Roles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-2xl bg-amber-50/60 border border-amber-200">
          <div className="space-y-3">
            <div>
              <label className="text-xs font-extrabold text-slate-800 uppercase block mb-1">
                Tên Nhóm:
              </label>
              <input
                type="text"
                value={sheet.groupName}
                onChange={(e) => handleFieldChange('groupName', e.target.value)}
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-sm font-bold text-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="text-xs font-extrabold text-slate-800 uppercase block mb-1">
                Các thành viên trong nhóm:
              </label>
              <input
                type="text"
                value={sheet.members}
                onChange={(e) => handleFieldChange('members', e.target.value)}
                placeholder="Ví dụ: An, Bình, Lan, Minh"
                className="w-full px-3 py-2 bg-white rounded-xl border border-slate-300 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>
          </div>

          {/* 4 Group Roles */}
          <div className="space-y-2">
            <span className="text-xs font-extrabold text-amber-900 uppercase block">
              Phân công 4 vai trò trong nhóm:
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="text-[11px] font-bold text-slate-600 block">1. Đọc nhiệm vụ:</span>
                <input
                  type="text"
                  value={sheet.roleReader}
                  onChange={(e) => handleFieldChange('roleReader', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-600 block">2. Người tìm kiếm:</span>
                <input
                  type="text"
                  value={sheet.roleSearcher}
                  onChange={(e) => handleFieldChange('roleSearcher', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-600 block">3. Người ghi kết quả:</span>
                <input
                  type="text"
                  value={sheet.roleWriter}
                  onChange={(e) => handleFieldChange('roleWriter', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-amber-400"
                />
              </div>

              <div>
                <span className="text-[11px] font-bold text-slate-600 block">4. Người báo cáo:</span>
                <input
                  type="text"
                  value={sheet.rolePresenter}
                  onChange={(e) => handleFieldChange('rolePresenter', e.target.value)}
                  className="w-full px-2.5 py-1.5 bg-white rounded-lg border border-slate-300 text-xs focus:ring-1 focus:ring-amber-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 2. Six Core Questions from GDPT 2018 Specification */}
        <div className="space-y-6">
          {/* Question 1 */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold text-slate-900 block flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0">1</span>
              <span>Nhiệm vụ cần tìm của nhóm em là gì?</span>
            </label>
            <textarea
              rows={2}
              value={sheet.missionGoal}
              onChange={(e) => handleFieldChange('missionGoal', e.target.value)}
              placeholder="Nhập nhiệm vụ mà cô giáo hoặc bài học giao..."
              className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Question 2 */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold text-slate-900 block flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0">2</span>
              <span>Từ khóa hoặc chủ đề em chọn để tìm kiếm:</span>
            </label>
            <input
              type="text"
              value={sheet.chosenKeyword}
              onChange={(e) => handleFieldChange('chosenKeyword', e.target.value)}
              placeholder="Nhập từ khóa ngắn gọn hoặc tên danh mục..."
              className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Question 3 */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold text-slate-900 block flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0">3</span>
              <span>Thông tin cốt lõi nhóm em đã tìm thấy (kết quả có ích):</span>
            </label>
            <textarea
              rows={3}
              value={sheet.foundInfo}
              onChange={(e) => handleFieldChange('foundInfo', e.target.value)}
              placeholder="Ghi lại các thông tin chính, số liệu hoặc sự kiện đã tìm được..."
              className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Question 4 */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold text-slate-900 block flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0">4</span>
              <span>Cách kiểm tra khi công cụ gợi ý chưa đúng hoặc chưa đủ:</span>
            </label>
            <textarea
              rows={2}
              value={sheet.checkMethod}
              onChange={(e) => handleFieldChange('checkMethod', e.target.value)}
              placeholder="Ví dụ: Thay đổi từ khóa ngắn gọn hơn, kiểm tra nguồn tin, hỏi thầy cô..."
              className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Question 5 */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold text-slate-900 block flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0">5</span>
              <span>Em chia sẻ kết quả tìm kiếm với các bạn trong nhóm bằng cách nào?</span>
            </label>
            <input
              type="text"
              value={sheet.shareMethod}
              onChange={(e) => handleFieldChange('shareMethod', e.target.value)}
              placeholder="Ví dụ: Đọc to kết quả, cùng thảo luận, ghi vào phiếu học tập..."
              className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Question 6 */}
          <div className="space-y-1.5">
            <label className="text-xs sm:text-sm font-bold text-slate-900 block flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[11px] font-bold flex items-center justify-center shrink-0">6</span>
              <span>Em có tin ngay kết quả đầu tiên xuất hiện không? Vì sao?</span>
            </label>
            <textarea
              rows={2}
              value={sheet.trustFirstResultReason}
              onChange={(e) => handleFieldChange('trustFirstResultReason', e.target.value)}
              placeholder="Giải thích vì sao cần kiểm tra lại trước khi tin..."
              className="w-full p-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 print:hidden">
          <button
            onClick={handleLoadSample}
            className="text-xs font-semibold text-slate-500 hover:text-amber-700 flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Nạp lại nội dung mẫu</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Lưu phiếu & Báo cáo</span>
            </button>

            <button
              onClick={() => {
                sounds.playPop();
                onNavigate('playground');
              }}
              className="px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Vào Sân chơi mini</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Presentation Modal for Class Reporting */}
      {showPresentationModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl border-4 border-amber-300">
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🎤</span>
                <div>
                  <h3 className="font-display text-xl font-extrabold text-slate-900">
                    BẢN BÁO CÁO TRƯỚC LỚP
                  </h3>
                  <p className="text-xs text-amber-700 font-bold">
                    {sheet.groupName} · Báo cáo viên: {sheet.rolePresenter}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowPresentationModal(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 font-bold flex items-center justify-center cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-slate-800">
              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200">
                <strong className="text-amber-950 block mb-1">1. Nhiệm vụ nhóm:</strong>
                <p>{sheet.missionGoal}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-200">
                <strong className="text-sky-950 block mb-1">2. Từ khóa & Chủ đề đã chọn:</strong>
                <p>{sheet.chosenKeyword}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200">
                <strong className="text-emerald-950 block mb-1">3. Thông tin tìm được:</strong>
                <p>{sheet.foundInfo}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200">
                <strong className="text-purple-950 block mb-1">4. Cách kiểm tra thông tin:</strong>
                <p>{sheet.checkMethod}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">5. Cách thức chia sẻ nhóm:</strong>
                <p>{sheet.shareMethod}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200">
                <strong className="text-rose-950 block mb-1">6. Lí do không tin ngay kết quả đầu tiên:</strong>
                <p>{sheet.trustFirstResultReason}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => {
                  sounds.speakVietnamese(`Kính thưa cô và các bạn, đại diện cho nhóm ${sheet.groupName}, em xin trình bày kết quả tìm kiếm: Nhiệm vụ của nhóm em là ${sheet.missionGoal}. Từ khóa nhóm em chọn là ${sheet.chosenKeyword}. Thông tin nhóm em tìm thấy là ${sheet.foundInfo}. Nhóm em đã kiểm tra thông tin cẩn thận trước khi sử dụng. Em xin cảm ơn cô và các bạn đã lắng nghe.`);
                }}
                className="px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl text-xs font-bold cursor-pointer"
              >
                🔊 Đọc bài thuyết trình
              </button>
              <button
                onClick={() => setShowPresentationModal(false)}
                className="px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-xl text-xs font-bold cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
