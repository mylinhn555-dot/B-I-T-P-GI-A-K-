export type TabType = 
  | 'home' 
  | 'warmup' 
  | 'knowledge' 
  | 'keywords' 
  | 'detective' 
  | 'ai-literacy' 
  | 'group-sheet' 
  | 'playground' 
  | 'assessment' 
  | 'profile';

export interface Article {
  id: string;
  title: string;
  category: 'sports' | 'children' | 'study' | 'school' | 'culture';
  summary: string;
  content: string[];
  date: string;
  author: string;
  source: string;
  keywords: string[];
  isAppropriateForStudent: boolean;
  imageUrl?: string;
  highlights?: string[];
}

export interface DetectiveMission {
  id: number;
  title: string;
  badgeTitle: string;
  description: string;
  targetCategory?: string;
  expectedKeywords: string[];
  targetArticleId: string;
  hint: string;
  question: string;
  options: string[];
  correctOptionIndex: number;
}

export interface GroupSheetData {
  groupName: string;
  members: string;
  roleReader: string;
  roleSearcher: string;
  roleWriter: string;
  rolePresenter: string;
  missionGoal: string;
  chosenKeyword: string;
  foundInfo: string;
  checkMethod: string;
  shareMethod: string;
  trustFirstResultReason: string;
  savedAt?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface UserProgress {
  completedMissions: number[];
  completedGames: string[];
  quizScore: number | null;
  quizAnswers: Record<number, number>;
  unlockedBadges: string[];
  exploredHotspots: string[];
  soundEnabled: boolean;
  studentName: string;
}
