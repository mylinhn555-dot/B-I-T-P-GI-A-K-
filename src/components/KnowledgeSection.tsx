import React, { useState } from 'react';
import { TabType } from '../types';
import { WEBSITE_HOTSPOTS } from '../data/lessonData';
import { sounds } from '../utils/soundEffects';
import { ThamTuTi, RobotKey } from './chibi/Stickers';
import { Search, Compass, CheckCircle2, ArrowRight, Volume2, Sparkles } from 'lucide-react';

interface KnowledgeSectionProps {
  onNavigate: (tab: TabType) => void;
  onExploreHotspot: (hotspotId: string) => void;
  exploredHotspots: string[];
}

export const KnowledgeSection: React.FC<KnowledgeSectionProps> = ({
  onNavigate,
  onExploreHotspot,
  exploredHotspots
}) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('search-input');
  const [demoMethod, setDemoMethod] = useState<'category' | 'search'>('category');
  const [demoCategory, setDemoCategory] = useState<string>('sports');
  const [demoKeyword, setDemoKeyword] = useState<string>('');
  const [demoSearched, setDemoSearched] = useState<boolean>(false);

  const activeHotspot = WEBSITE_HOTSPOTS.find((h) => h.id === activeHotspotId) || WEBSITE_HOTSPOTS[0];

  const handleSelectHotspot = (id: string) => {
    sounds.playPop();
    setActiveHotspotId(id);
    onExploreHotspot(id);
  };

  const handleReadAloud = (text: string) => {
    sounds.speakVietnamese(text);
  };

  const handleDemoSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!demoKeyword.trim()) return;
    sounds.playSearch();
    setDemoSearched(true);
  };

  return (
    <div className="space-y-12 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 border border-sky-300 text-xs font-bold">
          <span>🧭 TIẾT 1 · HOẠT ĐỘNG 2 (22 PHÚT)</span>
          <span>·</span>
          <span>KHÁM PHÁ CẤU TẠO WEBSITE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          CÁCH TÌM THÔNG TIN TRÊN WEBSITE
        </h2>
        <p className="text-base text-slate-600">
          Một thám tử giỏi cần nắm rõ bản đồ địa hình. Hãy cùng bấm vào các khu vực trên giao diện website mẫu để tìm hiểu chức năng của từng bộ phận nhé!
        </p>
      </div>

      {/* 1. MÔ PHỎNG GIAO DIỆN WEBSITE & 9 KHU VỰC TƯƠNG TÁC */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div>
            <h3 className="font-display text-xl font-bold text-slate-900 flex items-center gap-2">
              <span>Giao diện Website mô phỏng:</span>
              <span className="text-amber-600">GÓC THÔNG TIN THIẾU NHI</span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Bấm vào các nút số màu vàng cam trên website hoặc danh sách bên dưới để soi kính lúp!
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-900 border border-amber-200">
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>Đã khám phá: <strong>{exploredHotspots.length} / {WEBSITE_HOTSPOTS.length}</strong> khu vực</span>
          </div>
        </div>

        {/* The Visual Mockup of the Website with Interactive Pins */}
        <div className="rounded-2xl border-2 border-slate-300 overflow-hidden bg-slate-100 shadow-inner">
          {/* Mock Browser Title Bar */}
          <div className="bg-slate-200 px-4 py-2 border-b border-slate-300 flex items-center gap-2 text-xs text-slate-600">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
            </div>
            <div className="bg-white px-3 py-1 rounded-md text-[11px] font-mono text-slate-500 flex-1 max-w-sm truncate border border-slate-300 ml-2">
              https://thieunien.vn/goc-thong-tin-thieu-nhi
            </div>
          </div>

          {/* Mock Header Zone with Hotspots 1, 2, 3, 4, 5 */}
          <div className="bg-white p-4 border-b border-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Logo & Home Button */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleSelectHotspot('logo')}
                  className={`p-2 rounded-xl flex items-center gap-2 transition-all cursor-pointer relative ${
                    activeHotspotId === 'logo'
                      ? 'ring-3 ring-amber-400 bg-amber-50'
                      : 'hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  <span className="text-xl">🌟</span>
                  <span className="font-extrabold text-sm text-slate-800">THIẾU NIÊN VN</span>
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                </button>

                <button
                  onClick={() => handleSelectHotspot('home-btn')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    activeHotspotId === 'home-btn'
                      ? 'ring-3 ring-amber-400 bg-amber-500 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>🏠 Trang chủ</span>
                  <span className="w-4 h-4 rounded-full bg-white/30 text-[10px] flex items-center justify-center">
                    2
                  </span>
                </button>
              </div>

              {/* Search Box & Button */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleSelectHotspot('search-input')}
                  className={`px-3 py-1.5 rounded-xl border text-xs text-slate-500 flex items-center gap-2 bg-slate-50 transition-all cursor-pointer ${
                    activeHotspotId === 'search-input'
                      ? 'ring-3 ring-amber-400 border-amber-500 bg-white'
                      : 'border-slate-300 hover:border-slate-400'
                  }`}
                >
                  <Search className="w-3.5 h-3.5 text-slate-400" />
                  <span>Nhập từ khóa cần tìm...</span>
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                    4
                  </span>
                </button>

                <button
                  onClick={() => handleSelectHotspot('search-btn')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold text-white transition-all cursor-pointer flex items-center gap-1 ${
                    activeHotspotId === 'search-btn'
                      ? 'ring-3 ring-amber-400 bg-amber-600'
                      : 'bg-amber-500 hover:bg-amber-600'
                  }`}
                >
                  <span>Tìm kiếm</span>
                  <span className="w-4 h-4 rounded-full bg-white/30 text-[10px] flex items-center justify-center">
                    5
                  </span>
                </button>
              </div>
            </div>

            {/* Category Nav Strip (Hotspot 3) */}
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={() => handleSelectHotspot('categories')}
                className={`p-2 rounded-xl w-full flex items-center justify-between text-xs transition-all cursor-pointer ${
                  activeHotspotId === 'categories'
                    ? 'ring-3 ring-amber-400 bg-amber-50'
                    : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center gap-4 overflow-x-auto font-medium text-slate-700">
                  <span className="font-bold text-amber-600">📑 Danh mục chủ đề:</span>
                  <span>⚽ Thể thao</span>
                  <span>🎈 Thiếu nhi</span>
                  <span>📚 Học tập</span>
                  <span>🏫 Hoạt động trường</span>
                  <span>📖 Văn hóa</span>
                </div>
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0 ml-2">
                  3
                </span>
              </button>
            </div>
          </div>

          {/* Mock Article View (Hotspots 6, 7, 8, 9) */}
          <div className="p-5 bg-white">
            <div className="max-w-2xl mx-auto space-y-4">
              {/* Hotspot 6: Tiêu đề bài viết */}
              <button
                onClick={() => handleSelectHotspot('article-title')}
                className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer flex items-center justify-between gap-3 ${
                  activeHotspotId === 'article-title'
                    ? 'ring-3 ring-amber-400 bg-amber-50'
                    : 'hover:bg-slate-50'
                }`}
              >
                <h4 className="font-extrabold text-lg text-slate-900">
                  Sôi động "Ngày hội Trạng Nguyên nhỏ tuổi": Sân chơi trí tuệ học đường
                </h4>
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  6
                </span>
              </button>

              {/* Hotspot 7: Hình ảnh minh họa */}
              <button
                onClick={() => handleSelectHotspot('article-img')}
                className={`w-full text-left p-3 rounded-2xl transition-all cursor-pointer relative bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 flex flex-col items-center justify-center h-44 ${
                  activeHotspotId === 'article-img'
                    ? 'ring-3 ring-amber-400'
                    : 'hover:opacity-95'
                }`}
              >
                <div className="text-4xl mb-2">📸 🏆 👨‍🎓</div>
                <span className="text-xs font-bold text-amber-900">
                  Hình ảnh minh họa: Sĩ tử nhí tranh tài Bảng Vàng
                </span>
                <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center">
                  7
                </span>
              </button>

              {/* Hotspot 8: Nội dung */}
              <button
                onClick={() => handleSelectHotspot('article-content')}
                className={`w-full text-left p-3.5 rounded-xl transition-all cursor-pointer flex items-start justify-between gap-3 text-xs text-slate-700 leading-relaxed ${
                  activeHotspotId === 'article-content'
                    ? 'ring-3 ring-amber-400 bg-amber-50'
                    : 'hover:bg-slate-50'
                }`}
              >
                <p>
                  Ngày hội Trạng Nguyên nhỏ tuổi là hoạt động thường niên bổ ích dành cho học sinh tiểu học, giúp các em giao lưu tri thức, thể hiện tài năng và tinh thần học hỏi sáng tạo...
                </p>
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  8
                </span>
              </button>

              {/* Hotspot 9: Bài viết liên quan */}
              <button
                onClick={() => handleSelectHotspot('related-articles')}
                className={`w-full text-left p-3 rounded-xl border border-slate-200 transition-all cursor-pointer flex items-center justify-between text-xs text-slate-600 ${
                  activeHotspotId === 'related-articles'
                    ? 'ring-3 ring-amber-400 bg-amber-50 border-amber-400'
                    : 'hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-800">🔗 Bài viết liên quan:</span>
                  <span>Giải bóng đá thiếu nhi · Kế hoạch nhỏ bảo vệ môi trường</span>
                </div>
                <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center shrink-0">
                  9
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Selected Hotspot Explanation Card */}
        <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center text-2xl shrink-0 shadow-xs">
              {activeHotspot.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="font-extrabold text-base text-slate-900">
                  {activeHotspot.name}
                </h4>
                {exploredHotspots.includes(activeHotspot.id) && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Đã soi kính lúp
                  </span>
                )}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 mt-1 leading-relaxed">
                {activeHotspot.description}
              </p>
            </div>
          </div>

          <button
            onClick={() => handleReadAloud(`${activeHotspot.name}. ${activeHotspot.description}`)}
            className="px-4 py-2 bg-white hover:bg-slate-50 text-amber-900 border border-amber-300 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
            title="Nghe giải thích"
          >
            <Volume2 className="w-4 h-4 text-amber-600" />
            <span>Nghe đọc</span>
          </button>
        </div>

        {/* 9 Hotspot Quick Selector Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 pt-2">
          {WEBSITE_HOTSPOTS.map((h, i) => (
            <button
              key={h.id}
              onClick={() => handleSelectHotspot(h.id)}
              className={`p-2.5 rounded-xl border text-xs font-medium text-left flex items-center gap-2 transition-all cursor-pointer ${
                activeHotspotId === h.id
                  ? 'bg-amber-500 text-white font-bold border-amber-600 shadow-xs'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-amber-300 hover:bg-amber-50/40'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-black/10 flex items-center justify-center text-[10px] font-bold shrink-0">
                {i + 1}
              </span>
              <span className="truncate">{h.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* 2. HAI CÁCH TÌM THÔNG TIN PHỔ BIẾN (Chủ đề vs Ô tìm kiếm) */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-xs space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase">
            <Compass className="w-4 h-4 text-amber-600" />
            <span>Kỹ năng thám tử cốt lõi</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-slate-900">
            HAI CÁCH TÌM THÔNG TIN TRÊN WEBSITE
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Tùy theo nhiệm vụ, em có thể chọn duyệt theo chủ đề hoặc dùng ô tìm kiếm:
          </p>
        </div>

        {/* Interactive Method Switcher */}
        <div className="flex items-center justify-center p-1 bg-slate-100 rounded-2xl max-w-md mx-auto">
          <button
            onClick={() => {
              sounds.playPop();
              setDemoMethod('category');
            }}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              demoMethod === 'category'
                ? 'bg-white text-sky-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>📂 Cách 1: Duyệt theo chủ đề</span>
          </button>
          <button
            onClick={() => {
              sounds.playPop();
              setDemoMethod('search');
            }}
            className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              demoMethod === 'search'
                ? 'bg-white text-amber-800 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🔍 Cách 2: Dùng ô tìm kiếm</span>
          </button>
        </div>

        {/* Method 1: Duyệt theo chủ đề */}
        {demoMethod === 'category' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-sky-50/60 border border-sky-200">
            <div className="md:col-span-5 space-y-3">
              <span className="text-xs font-bold text-sky-800 uppercase">Trải nghiệm tương tác</span>
              <h4 className="font-bold text-lg text-slate-900">
                Khi nào nên duyệt theo chủ đề?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Khi em muốn xem thông tin thuộc một lĩnh vực chung (ví dụ: muốn xem tất cả các tin về <strong>Thể thao</strong> hoặc <strong>Hoạt động trường</strong>) mà chưa có một từ khóa cụ thể nào.
              </p>

              <div className="space-y-1.5 text-xs text-slate-700">
                <p><strong>Bước 1:</strong> Quan sát các chủ đề trên thanh menu.</p>
                <p><strong>Bước 2:</strong> Chọn danh mục tương ứng với nhiệm vụ.</p>
                <p><strong>Bước 3:</strong> Đọc tiêu đề các bài viết hiển thị và chọn bài có ích.</p>
              </div>
            </div>

            <div className="md:col-span-7 bg-white p-4 rounded-xl border border-sky-200 shadow-xs space-y-3">
              <span className="text-xs font-bold text-slate-700 block">Thử bấm chọn danh mục:</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'sports', label: '⚽ Thể thao' },
                  { id: 'children', label: '🎈 Thiếu nhi' },
                  { id: 'study', label: '📚 Học tập' },
                  { id: 'school', label: '🏫 Hoạt động trường' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      sounds.playPop();
                      setDemoCategory(cat.id);
                    }}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      demoCategory === cat.id
                        ? 'bg-sky-500 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Simulated Result Box */}
              <div className="p-3 rounded-lg bg-sky-50 border border-sky-100 text-xs space-y-1">
                <span className="font-bold text-sky-900">
                  {demoCategory === 'sports'
                    ? '⚽ Bài viết hiển thị trong Thể thao:'
                    : demoCategory === 'children'
                    ? '🎈 Bài viết hiển thị trong Thiếu nhi:'
                    : demoCategory === 'study'
                    ? '📚 Bài viết hiển thị trong Học tập:'
                    : '🏫 Bài viết hiển thị trong Hoạt động trường:'}
                </span>
                <p className="text-slate-700">
                  {demoCategory === 'sports'
                    ? '→ "Giải bóng đá Thiếu niên Nhi đồng toàn quốc: Đội tuyển nhí tỏa sáng trên sân cỏ"'
                    : demoCategory === 'children'
                    ? '→ "Sôi động Ngày hội Trạng Nguyên nhỏ tuổi: Sân chơi trí tuệ học đường"'
                    : demoCategory === 'study'
                    ? '→ "Nhân vật Dế Mèn trong tác phẩm Dế Mèn phiêu lưu ký của Tô Hoài"'
                    : '→ "Thông báo Lịch hoạt động tháng 11 của trường: Tuần lễ Tri ân 20/11"'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Method 2: Dùng ô tìm kiếm */}
        {demoMethod === 'search' && (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-6 rounded-2xl bg-amber-50/60 border border-amber-200">
            <div className="md:col-span-5 space-y-3">
              <span className="text-xs font-bold text-amber-800 uppercase">Trải nghiệm tương tác</span>
              <h4 className="font-bold text-lg text-slate-900">
                Khi nào nên dùng ô tìm kiếm?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Khi em cần tìm <strong>nhanh một sự kiện, một nhân vật hoặc nội dung cụ thể</strong> (ví dụ: "Ngày hội Trạng Nguyên", "Dế Mèn").
              </p>

              <div className="space-y-1.5 text-xs text-slate-700">
                <p><strong>Bước 1:</strong> Xác định thông tin cần tìm.</p>
                <p><strong>Bước 2:</strong> Chọn từ khóa ngắn gọn, đúng trọng tâm.</p>
                <p><strong>Bước 3:</strong> Nhập vào ô tìm kiếm và bấm Enter.</p>
                <p><strong>Bước 4:</strong> Quan sát kết quả và mở bài viết phù hợp.</p>
              </div>
            </div>

            <div className="md:col-span-7 bg-white p-4 rounded-xl border border-amber-200 shadow-xs space-y-3">
              <span className="text-xs font-bold text-slate-700 block">Thử nhập từ khóa vào ô tìm kiếm:</span>
              <form onSubmit={handleDemoSearch} className="flex gap-2">
                <input
                  type="text"
                  value={demoKeyword}
                  onChange={(e) => {
                    setDemoKeyword(e.target.value);
                    setDemoSearched(false);
                  }}
                  placeholder="Gợi ý: gõ 'bóng đá' hoặc 'trạng nguyên'..."
                  className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Tìm kiếm
                </button>
              </form>

              {/* Sample keyword chips */}
              <div className="flex flex-wrap gap-1.5 text-[11px] items-center text-slate-500">
                <span>Gợi ý bấm nhanh:</span>
                {['bóng đá', 'trạng nguyên', 'dế mèn', 'lịch hoạt động'].map((kw) => (
                  <button
                    key={kw}
                    type="button"
                    onClick={() => {
                      setDemoKeyword(kw);
                      setDemoSearched(true);
                      sounds.playSearch();
                    }}
                    className="px-2 py-0.5 rounded-md bg-slate-100 hover:bg-amber-100 hover:text-amber-800 text-slate-700 cursor-pointer font-medium"
                  >
                    "{kw}"
                  </button>
                ))}
              </div>

              {demoSearched && (
                <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs space-y-1">
                  <span className="font-bold text-emerald-900">
                    🎉 Kết quả tìm thấy cho từ khóa "{demoKeyword}":
                  </span>
                  <p className="text-slate-700">
                    Hệ thống đã quét nhanh và hiển thị bài viết khớp nhất với từ khóa của em!
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 3. KẾT LUẬN KIẾN THỨC (SƠ ĐỒ LỚN) */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-3xl">🧭</span>
            <div>
              <h4 className="font-display text-lg font-extrabold">
                KẾT LUẬN QUY TẮC VÀNG CỦA THÁM TỬ TÌM KIẾM
              </h4>
              <p className="text-xs text-amber-100">
                Dù dùng cách nào, đích đến duy nhất là tìm được thông tin có ích cho nhiệm vụ!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
            <div className="p-3 bg-white/15 rounded-xl backdrop-blur-xs font-medium">
              1. TÌM THEO CHỦ ĐỀ
              <div className="text-[11px] text-amber-100 mt-1">Dành cho việc duyệt khám phá một lĩnh vực</div>
            </div>
            <div className="p-3 bg-white/25 rounded-xl backdrop-blur-xs font-bold text-amber-100 flex items-center justify-center">
              HOẶC
            </div>
            <div className="p-3 bg-white/15 rounded-xl backdrop-blur-xs font-medium">
              2. TÌM BẰNG Ô TÌM KIẾM
              <div className="text-[11px] text-amber-100 mt-1">Dành cho việc tra cứu nhanh thông tin cụ thể</div>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/20">
            <p className="text-xs font-bold">
              👉 Bước tiếp theo: Làm thế nào để chọn từ khóa ngắn gọn, đúng trọng tâm?
            </p>
            <button
              onClick={() => {
                sounds.playPop();
                onNavigate('keywords');
              }}
              className="px-5 py-2.5 bg-white hover:bg-slate-100 text-amber-900 font-bold rounded-xl text-xs shadow-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
            >
              <span>Khám phá Bí mật từ khóa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
