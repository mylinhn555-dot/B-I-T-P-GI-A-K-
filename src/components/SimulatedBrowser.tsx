import React, { useState } from 'react';
import { TabType, Article } from '../types';
import { MOCK_ARTICLES, DETECTIVE_MISSIONS, CATEGORIES } from '../data/mockWebsiteData';
import { sounds } from '../utils/soundEffects';
import { ThamTuTi, RobotKey, BeSao } from './chibi/Stickers';
import {
  Search,
  CheckCircle2,
  Calendar,
  User,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Sparkles,
  Award,
  Volume2,
  BookmarkPlus
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface SimulatedBrowserProps {
  onNavigate: (tab: TabType) => void;
  completedMissions: number[];
  onCompleteMission: (missionId: number) => void;
}

export const SimulatedBrowser: React.FC<SimulatedBrowserProps> = ({
  onNavigate,
  completedMissions,
  onCompleteMission
}) => {
  // Current active mission (1, 2, 3, or 4)
  const [selectedMissionId, setSelectedMissionId] = useState<number>(1);

  // Simulated browser state
  const [currentCategory, setCurrentCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [submittedQuery, setSubmittedQuery] = useState<string>('');
  const [viewingArticle, setViewingArticle] = useState<Article | null>(null);

  // Notebook / Clippings extracted by student
  const [extractedNotes, setExtractedNotes] = useState<string[]>([]);

  // Mission quiz verification answer
  const [missionAnswers, setMissionAnswers] = useState<Record<number, number>>({});
  const [missionChecked, setMissionChecked] = useState<Record<number, boolean>>({});

  const currentMission =
    DETECTIVE_MISSIONS.find((m) => m.id === selectedMissionId) || DETECTIVE_MISSIONS[0];

  // Filter articles based on category and submitted search query
  const filteredArticles = MOCK_ARTICLES.filter((art) => {
    // Category match
    const matchCategory =
      currentCategory === 'all' || art.category === currentCategory;

    // Search query match (title, summary, keywords, content)
    if (!submittedQuery.trim()) {
      return matchCategory;
    }

    const q = submittedQuery.trim().toLowerCase();
    const matchText =
      art.title.toLowerCase().includes(q) ||
      art.summary.toLowerCase().includes(q) ||
      art.keywords.some((kw) => kw.toLowerCase().includes(q)) ||
      art.content.some((c) => c.toLowerCase().includes(q));

    return matchCategory && matchText;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSearch();
    setSubmittedQuery(searchQuery);
    setViewingArticle(null);
  };

  const handleSelectCategory = (catId: string) => {
    sounds.playPop();
    setCurrentCategory(catId);
    setViewingArticle(null);
  };

  const handleOpenArticle = (art: Article) => {
    sounds.playPop();
    setViewingArticle(art);
  };

  const handleExtractNote = (text: string) => {
    sounds.playPop();
    if (!extractedNotes.includes(text)) {
      setExtractedNotes((prev) => [...prev, text]);
    }
  };

  const handleSelectMissionOption = (optionIdx: number) => {
    sounds.playPop();
    setMissionAnswers((prev) => ({ ...prev, [selectedMissionId]: optionIdx }));
    const isCorrect = optionIdx === currentMission.correctOptionIndex;
    setMissionChecked((prev) => ({ ...prev, [selectedMissionId]: isCorrect }));

    if (isCorrect) {
      sounds.playSuccess();
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      onCompleteMission(selectedMissionId);
    } else {
      sounds.playError();
    }
  };

  const handleReadAloud = (text: string) => {
    sounds.speakVietnamese(text);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold">
          <span>🕵️ TIẾT 2 · HOẠT ĐỘNG 2 (24 PHÚT)</span>
          <span>·</span>
          <span>PHÒNG THỰC HÀNH THÁM TỬ WEBSITE</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900">
          TRỰC TIẾP THỰC HÀNH TÌM KIẾM
        </h2>
        <p className="text-base text-slate-600">
          Hãy nhận nhiệm vụ bên trái và trực tiếp thao tác tìm kiếm trên website mô phỏng bên phải để tìm ra manh mối chính xác!
        </p>
      </div>

      {/* Main Two-Zone Sandbox */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT ZONE: Mission Deck & Notebook (4 cols) */}
        <div className="lg:col-span-4 space-y-5">
          {/* Mission Selector Tabs */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wide">
                Nhiệm vụ điều tra
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                {completedMissions.length} / {DETECTIVE_MISSIONS.length} hoàn thành
              </span>
            </div>

            <div className="space-y-2">
              {DETECTIVE_MISSIONS.map((m) => {
                const isCompleted = completedMissions.includes(m.id);
                const isActive = selectedMissionId === m.id;

                return (
                  <button
                    key={m.id}
                    onClick={() => {
                      sounds.playPop();
                      setSelectedMissionId(m.id);
                    }}
                    className={`w-full p-3 rounded-2xl border text-left text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${
                      isActive
                        ? 'bg-amber-500 text-white font-bold border-amber-600 shadow-xs'
                        : isCompleted
                        ? 'bg-emerald-50 text-emerald-900 border-emerald-300 hover:bg-emerald-100/60'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      <span className="text-base">
                        {isCompleted ? '⭐' : isActive ? '🔍' : '📌'}
                      </span>
                      <span className="truncate">{m.title}</span>
                    </div>

                    {isCompleted && (
                      <CheckCircle2 className={`w-4 h-4 shrink-0 ${isActive ? 'text-white' : 'text-emerald-600'}`} />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current Mission Detail Card */}
          <div className="bg-white rounded-3xl border border-amber-200 p-5 shadow-xs space-y-4">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <span className="text-[11px] font-bold text-amber-700 uppercase">
                  {currentMission.badgeTitle}
                </span>
                <h4 className="font-bold text-base text-slate-900">
                  {currentMission.title}
                </h4>
              </div>
              <button
                onClick={() => handleReadAloud(`${currentMission.title}. ${currentMission.description}. Gợi ý: ${currentMission.hint}`)}
                className="p-1.5 rounded-lg bg-amber-50 text-amber-800 hover:bg-amber-100 shrink-0"
                title="Nghe hướng dẫn nhiệm vụ"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              {currentMission.description}
            </p>

            {/* Hint Box */}
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
              <span className="text-base">💡</span>
              <p>
                <strong>Gợi ý:</strong> {currentMission.hint}
              </p>
            </div>

            {/* Mission Verification Question */}
            <div className="pt-3 border-t border-slate-100 space-y-3">
              <span className="text-xs font-bold text-slate-800 block">
                ❓ Kiểm tra kết quả: {currentMission.question}
              </span>

              <div className="space-y-2">
                {currentMission.options.map((opt, optIdx) => {
                  const isSelected = missionAnswers[currentMission.id] === optIdx;
                  let optStyle = 'bg-slate-50 border-slate-200 text-slate-700 hover:border-amber-300';

                  if (isSelected) {
                    if (optIdx === currentMission.correctOptionIndex) {
                      optStyle = 'bg-emerald-50 border-emerald-500 text-emerald-900 font-bold';
                    } else {
                      optStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectMissionOption(optIdx)}
                      className={`w-full p-2.5 rounded-xl border text-left text-xs transition-all flex items-center justify-between gap-2 cursor-pointer ${optStyle}`}
                    >
                      <span>{opt}</span>
                      {isSelected && (
                        <span>
                          {optIdx === currentMission.correctOptionIndex ? '✅' : '❌'}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {missionChecked[currentMission.id] && (
                <div className="p-2.5 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>Chúc mừng em! Đã hoàn thành nhiệm vụ và mở khóa manh mối!</span>
                </div>
              )}
            </div>
          </div>

          {/* Sổ tay thám tử (Extracted Notes) */}
          <div className="bg-white rounded-3xl border border-slate-200 p-5 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <h5 className="font-bold text-xs text-slate-800 uppercase flex items-center gap-1.5">
                <BookmarkPlus className="w-4 h-4 text-amber-600" />
                <span>Sổ tay trích xuất thông tin</span>
              </h5>
              <span className="text-[11px] text-slate-400">
                {extractedNotes.length} ghi chép
              </span>
            </div>

            {extractedNotes.length === 0 ? (
              <p className="text-xs text-slate-400 italic">
                Khi đọc bài viết trên website, hãy bấm "Lưu vào sổ tay" để ghi nhận thông tin quan trọng nhé!
              </p>
            ) : (
              <div className="space-y-2">
                {extractedNotes.map((note, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-start gap-2"
                  >
                    <span className="text-amber-500 font-bold">•</span>
                    <span className="flex-1">{note}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* RIGHT ZONE: Interactive Simulated Website (8 cols) */}
        <div className="lg:col-span-8 bg-white rounded-3xl border-2 border-slate-300 shadow-md overflow-hidden flex flex-col">
          {/* Simulated Browser Bar */}
          <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block"></span>
              </div>
              <span className="text-[11px] font-bold text-slate-600 ml-2">
                WEBSITE MÔ PHỎNG DÀNH CHO TIẾT HỌC
              </span>
            </div>

            <div className="text-[11px] text-amber-700 font-medium bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              📌 Dữ liệu học tập mô phỏng
            </div>
          </div>

          {/* Website Header Bar (Logo, Search box) */}
          <div className="p-4 sm:p-5 border-b border-slate-100 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Site Logo */}
              <button
                onClick={() => {
                  sounds.playPop();
                  setViewingArticle(null);
                  setCurrentCategory('all');
                  setSubmittedQuery('');
                }}
                className="flex items-center gap-2.5 text-left cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-sky-600 text-white flex items-center justify-center font-bold text-lg shadow-xs">
                  🌐
                </div>
                <div>
                  <span className="font-extrabold text-base text-slate-900 tracking-tight block">
                    GÓC THÔNG TIN THIẾU NHI
                  </span>
                  <span className="text-[10px] text-sky-700 font-medium block">
                    Trang tin tổng hợp học sinh tiểu học · thieunien.vn
                  </span>
                </div>
              </button>

              {/* Search Form */}
              <form onSubmit={handleSearchSubmit} className="flex gap-2 max-w-sm w-full">
                <div className="relative flex-1">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Nhập từ khóa tìm kiếm..."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-400 pl-8"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-xl transition-colors cursor-pointer shrink-0"
                >
                  Tìm
                </button>
              </form>
            </div>

            {/* Category Navigation Bar */}
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 shrink-0 ${
                    currentCategory === cat.id
                      ? 'bg-sky-500 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Website Body: List of Articles OR Full Article View */}
          <div className="p-5 flex-1 min-h-[460px] bg-slate-50/50">
            {viewingArticle ? (
              /* Full Article Reader */
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
                <button
                  onClick={() => {
                    sounds.playPop();
                    setViewingArticle(null);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Quay lại danh sách bài viết</span>
                </button>

                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {viewingArticle.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {viewingArticle.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" /> {viewingArticle.author}
                    </span>
                    <span>Nguồn: <strong>{viewingArticle.source}</strong></span>
                  </div>
                </div>

                {/* Article Highlights / Key Clues */}
                {viewingArticle.highlights && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-amber-900 flex items-center gap-1">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        ĐIỂM NỔI BẬT CỦA BÀI VIẾT (MANH MỐI):
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {viewingArticle.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-amber-950 flex items-center justify-between gap-2">
                          <span>• {h}</span>
                          <button
                            onClick={() => handleExtractNote(h)}
                            className="text-[11px] font-bold text-amber-700 hover:text-amber-900 px-2 py-0.5 rounded-md bg-white border border-amber-300 shrink-0 cursor-pointer"
                          >
                            + Lưu vào sổ tay
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Paragraphs */}
                <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  {viewingArticle.content.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {/* Keywords tags */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-slate-500">Từ khóa bài viết:</span>
                  {viewingArticle.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      #{kw}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              /* Articles List */
              <div className="space-y-4">
                {/* Search query feedback banner */}
                {submittedQuery && (
                  <div className="flex items-center justify-between p-3 rounded-xl bg-sky-50 border border-sky-200 text-xs">
                    <span>
                      Kết quả tìm kiếm cho từ khóa: <strong>"{submittedQuery}"</strong> ({filteredArticles.length} bài viết)
                    </span>
                    <button
                      onClick={() => {
                        sounds.playPop();
                        setSubmittedQuery('');
                        setSearchQuery('');
                      }}
                      className="text-sky-700 font-bold hover:underline cursor-pointer"
                    >
                      Xóa tìm kiếm
                    </button>
                  </div>
                )}

                {filteredArticles.length === 0 ? (
                  <div className="text-center py-12 space-y-3">
                    <div className="text-4xl">🔍</div>
                    <h5 className="font-bold text-base text-slate-800">
                      Không tìm thấy bài viết nào phù hợp!
                    </h5>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Em hãy thử sử dụng từ khóa ngắn gọn hơn, kiểm tra lại chính tả hoặc chọn danh mục khác nhé!
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {filteredArticles.map((art) => (
                      <div
                        key={art.id}
                        onClick={() => handleOpenArticle(art)}
                        className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-amber-400 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-bold text-sky-700 uppercase">
                              {art.category === 'sports'
                                ? '⚽ Thể thao'
                                : art.category === 'children'
                                ? '🎈 Thiếu nhi'
                                : art.category === 'study'
                                ? '📚 Học tập'
                                : art.category === 'school'
                                ? '🏫 Hoạt động trường'
                                : '📖 Văn hóa'}
                            </span>
                            <span className="text-[11px] text-slate-400">{art.date}</span>
                          </div>

                          <h4 className="font-bold text-sm text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-2">
                            {art.title}
                          </h4>

                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {art.summary}
                          </p>
                        </div>

                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-amber-600 group-hover:text-amber-700">
                          <span>Xem chi tiết</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Mission Summary & Navigation */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-600 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">🕵️‍♀️</span>
          <div>
            <h5 className="font-bold text-sm sm:text-base">
              LỜI NHẮC THÁM TỬ WEBSITE
            </h5>
            <p className="text-xs text-emerald-100">
              "Thám tử giỏi không phải là người tìm được nhiều thông tin nhất, mà là người tìm được thông tin PHÙ HỢP NHẤT với nhiệm vụ!"
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            sounds.playPop();
            onNavigate('ai-literacy');
          }}
          className="px-5 py-2.5 bg-white hover:bg-slate-50 text-emerald-950 font-bold rounded-xl text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer shrink-0"
        >
          <span>Sang phần Trí tuệ AI</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
