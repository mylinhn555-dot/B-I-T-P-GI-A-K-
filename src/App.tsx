/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType, UserProgress } from './types';
import { sounds } from './utils/soundEffects';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { WarmupSection } from './components/WarmupSection';
import { KnowledgeSection } from './components/KnowledgeSection';
import { KeywordsPractice } from './components/KeywordsPractice';
import { SimulatedBrowser } from './components/SimulatedBrowser';
import { AiResponsibilitySection } from './components/AiResponsibilitySection';
import { GroupWorksheet } from './components/GroupWorksheet';
import { DetectivePlayground } from './components/DetectivePlayground';
import { FinalQuiz } from './components/FinalQuiz';
import { DetectiveProfile } from './components/DetectiveProfile';
import { ThamTuTi, BeSao } from './components/chibi/Stickers';
import { Sparkles, Shield, Heart } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(sounds.isEnabled());

  // User Progress persisted in localStorage
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('thamtu_user_progress');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    return {
      completedMissions: [],
      completedGames: [],
      quizScore: null,
      quizAnswers: {},
      unlockedBadges: [],
      exploredHotspots: ['logo', 'search-input'],
      soundEnabled: true,
      studentName: 'Em Học Sinh Lớp 5'
    };
  });

  // Sync progress to localStorage
  useEffect(() => {
    localStorage.setItem('thamtu_user_progress', JSON.stringify(progress));
  }, [progress]);

  // Sound toggle
  const handleToggleSound = () => {
    const newState = sounds.toggleSound();
    setSoundEnabled(newState);
  };

  // Badge unlocking helper
  const unlockBadge = (badgeId: string) => {
    setProgress((prev) => {
      if (prev.unlockedBadges.includes(badgeId)) return prev;
      sounds.playFanfare();
      return {
        ...prev,
        unlockedBadges: [...prev.unlockedBadges, badgeId]
      };
    });
  };

  // Handlers for student activities
  const handleCompleteWarmup = () => {
    unlockBadge('badge-explorer');
  };

  const handleExploreHotspot = (hotspotId: string) => {
    setProgress((prev) => {
      if (prev.exploredHotspots.includes(hotspotId)) return prev;
      const updated = [...prev.exploredHotspots, hotspotId];
      if (updated.length >= 7) {
        unlockBadge('badge-explorer');
      }
      return { ...prev, exploredHotspots: updated };
    });
  };

  const handleCompleteKeywords = () => {
    unlockBadge('badge-keywords');
  };

  const handleCompleteMission = (missionId: number) => {
    setProgress((prev) => {
      if (prev.completedMissions.includes(missionId)) return prev;
      const updated = [...prev.completedMissions, missionId];
      if (updated.length >= 2) {
        unlockBadge('badge-inspector');
      }
      return { ...prev, completedMissions: updated };
    });
  };

  const handleCompleteAiSection = () => {
    unlockBadge('badge-responsible-ai');
  };

  const handleCompleteGroupSheet = () => {
    unlockBadge('badge-teammate');
  };

  const handleGameWin = (gameId: string) => {
    setProgress((prev) => {
      if (prev.completedGames.includes(gameId)) return prev;
      return { ...prev, completedGames: [...prev.completedGames, gameId] };
    });
  };

  const handleCompleteQuiz = (score: number) => {
    setProgress((prev) => ({
      ...prev,
      quizScore: score
    }));
    if (score >= 70) {
      unlockBadge('badge-inspector');
    }
  };

  const handleUpdateStudentName = (name: string) => {
    setProgress((prev) => ({
      ...prev,
      studentName: name
    }));
  };

  // Calculate overall progress percentage
  const calculateProgress = (): number => {
    let score = 0;
    // 4 missions (25 pts)
    score += Math.min(25, progress.completedMissions.length * 6.25);
    // Badges (25 pts)
    score += Math.min(25, progress.unlockedBadges.length * 5);
    // Quiz (25 pts)
    if (progress.quizScore !== null) {
      score += (progress.quizScore / 100) * 25;
    }
    // Hotspots (25 pts)
    score += Math.min(25, progress.exploredHotspots.length * 2.8);

    return Math.min(100, Math.round(score));
  };

  const progressPercent = calculateProgress();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-amber-200 selection:text-amber-900">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        progressPercent={progressPercent}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        {currentTab === 'home' && (
          <HeroBanner onNavigate={setCurrentTab} />
        )}

        {currentTab === 'warmup' && (
          <WarmupSection
            onNavigate={setCurrentTab}
            onCompleteWarmup={handleCompleteWarmup}
          />
        )}

        {currentTab === 'knowledge' && (
          <KnowledgeSection
            onNavigate={setCurrentTab}
            onExploreHotspot={handleExploreHotspot}
            exploredHotspots={progress.exploredHotspots}
          />
        )}

        {currentTab === 'keywords' && (
          <KeywordsPractice
            onNavigate={setCurrentTab}
            onCompleteKeywords={handleCompleteKeywords}
          />
        )}

        {currentTab === 'detective' && (
          <SimulatedBrowser
            onNavigate={setCurrentTab}
            completedMissions={progress.completedMissions}
            onCompleteMission={handleCompleteMission}
          />
        )}

        {currentTab === 'ai-literacy' && (
          <AiResponsibilitySection
            onNavigate={setCurrentTab}
            onCompleteAiSection={handleCompleteAiSection}
          />
        )}

        {currentTab === 'group-sheet' && (
          <GroupWorksheet
            onNavigate={setCurrentTab}
            onCompleteSheet={handleCompleteGroupSheet}
          />
        )}

        {currentTab === 'playground' && (
          <DetectivePlayground
            onNavigate={setCurrentTab}
            onGameWin={handleGameWin}
          />
        )}

        {currentTab === 'assessment' && (
          <FinalQuiz
            onNavigate={setCurrentTab}
            onCompleteQuiz={handleCompleteQuiz}
            savedQuizScore={progress.quizScore}
          />
        )}

        {currentTab === 'profile' && (
          <DetectiveProfile
            progress={progress}
            onUpdateStudentName={handleUpdateStudentName}
            onNavigate={setCurrentTab}
          />
        )}
      </main>

      {/* Footer conforming to anti-slop rules (quiet, useful links, no fake engines) */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-8 print:hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Thám Tử Website</span>
            <span aria-hidden="true">·</span>
            <span>Tin học Lớp 5 · Chủ đề 2, Bài 2</span>
            <span aria-hidden="true">·</span>
            <span>Chương trình GDPT 2018</span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => {
                sounds.playPop();
                setCurrentTab('home');
              }}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Trang chủ
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setCurrentTab('warmup');
              }}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Video Khởi động
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setCurrentTab('detective');
              }}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Phòng thực hành
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setCurrentTab('group-sheet');
              }}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Phiếu nhóm
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setCurrentTab('profile');
              }}
              className="hover:text-amber-600 transition-colors cursor-pointer"
            >
              Hồ sơ thành tích
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
