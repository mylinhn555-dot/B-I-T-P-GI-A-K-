import React from 'react';
import { sounds } from '../../utils/soundEffects';

interface MascotProps {
  expression?: 'waving' | 'thinking' | 'searching' | 'celebrating' | 'explaining';
  className?: string;
  size?: number;
  interactive?: boolean;
  speech?: string;
}

// 1. THÁM TỬ TÍ (Detective Boy Chibi)
export const ThamTuTi: React.FC<MascotProps> = ({
  expression = 'waving',
  className = '',
  size = 120,
  interactive = true,
  speech
}) => {
  const handleClick = () => {
    if (interactive) {
      sounds.playPop();
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative inline-flex flex-col items-center select-none ${interactive ? 'cursor-pointer transform hover:scale-105 active:scale-95 transition-transform' : ''} ${className}`}
      title="Thám tử Tí - Bạn đồng hành thông minh"
    >
      {speech && (
        <div className="mb-2 px-3 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-xl text-xs font-semibold shadow-sm animate-gentle-bounce relative max-w-[180px] text-center">
          {speech}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-100 border-b border-r border-amber-300 transform rotate-45"></div>
        </div>
      )}

      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-md overflow-visible"
      >
        {/* Shadow */}
        <ellipse cx="80" cy="148" rx="42" ry="7" fill="#CBD5E1" />

        {/* Detective Backpack */}
        <rect x="36" y="94" width="18" height="34" rx="7" fill="#854D0E" />
        <rect x="38" y="98" width="14" height="12" rx="3" fill="#A16207" />

        {/* Legs & Shoes */}
        <rect x="62" y="128" width="12" height="16" rx="5" fill="#1E293B" />
        <rect x="86" y="128" width="12" height="16" rx="5" fill="#1E293B" />
        <ellipse cx="66" cy="144" rx="10" ry="5" fill="#475569" />
        <ellipse cx="94" cy="144" rx="10" ry="5" fill="#475569" />

        {/* Body / Coat */}
        <path
          d="M54 92 C54 82, 106 82, 106 92 L112 130 C112 134, 48 134, 48 130 Z"
          fill="#D97706"
        />
        {/* Trench Coat Collars */}
        <path d="M68 84 L80 102 L92 84 Z" fill="#FEF3C7" />
        <path d="M58 88 L78 116 L76 130 L52 128 Z" fill="#B45309" />
        <path d="M102 88 L82 116 L84 130 L108 128 Z" fill="#B45309" />

        {/* Belt & Detective Gold Badge */}
        <rect x="52" y="112" width="56" height="7" fill="#78350F" />
        <polygon points="80,109 85,116 80,123 75,116" fill="#FBBF24" stroke="#D97706" strokeWidth="1" />

        {/* Neck */}
        <rect x="74" y="74" width="12" height="12" fill="#FCD34D" />

        {/* Head */}
        <ellipse cx="80" cy="52" rx="34" ry="30" fill="#FED7AA" />

        {/* Rosy Cheeks */}
        <circle cx="56" cy="60" r="6" fill="#F43F5E" opacity="0.35" />
        <circle cx="104" cy="60" r="6" fill="#F43F5E" opacity="0.35" />

        {/* Hair bangs */}
        <path
          d="M48 42 C48 42, 60 48, 70 42 C78 36, 88 44, 98 40 C106 44, 112 42, 112 42 C112 28, 48 28, 48 42 Z"
          fill="#451A03"
        />

        {/* Eyes according to expression */}
        {expression === 'searching' ? (
          <>
            <circle cx="64" cy="52" r="5" fill="#1E293B" />
            <circle cx="65.5" cy="50.5" r="2" fill="white" />
            {/* Winking right eye */}
            <path d="M92 53 Q96 48 100 53" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </>
        ) : expression === 'thinking' ? (
          <>
            <circle cx="62" cy="50" r="4.5" fill="#1E293B" />
            <circle cx="63" cy="48" r="1.5" fill="white" />
            <circle cx="94" cy="50" r="4.5" fill="#1E293B" />
            <circle cx="95" cy="48" r="1.5" fill="white" />
          </>
        ) : (
          <>
            <circle cx="66" cy="52" r="5" fill="#1E293B" />
            <circle cx="67.5" cy="50.5" r="2" fill="white" />
            <circle cx="94" cy="52" r="5" fill="#1E293B" />
            <circle cx="95.5" cy="50.5" r="2" fill="white" />
          </>
        )}

        {/* Mouth */}
        {expression === 'celebrating' || expression === 'waving' ? (
          <path d="M74 62 Q80 70 86 62" fill="#E11D48" stroke="#9F1239" strokeWidth="1" />
        ) : expression === 'thinking' ? (
          <ellipse cx="80" cy="62" rx="3" ry="2" fill="#78350F" />
        ) : (
          <path d="M75 62 Q80 66 85 62" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />
        )}

        {/* Detective Fedora Hat */}
        <ellipse cx="80" cy="34" rx="44" ry="11" fill="#78350F" />
        <path
          d="M54 32 C54 18, 62 10, 80 10 C98 10, 106 18, 106 32 Z"
          fill="#92400E"
        />
        <rect x="55" y="27" width="50" height="6" fill="#F59E0B" rx="1" />

        {/* Arms & Hands */}
        {expression === 'waving' ? (
          <>
            {/* Left arm waving */}
            <path d="M52 92 Q36 82 34 68" stroke="#D97706" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="34" cy="66" r="6" fill="#FED7AA" />
            {/* Right arm down */}
            <path d="M108 92 Q116 104 118 116" stroke="#D97706" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="118" cy="116" r="6" fill="#FED7AA" />
          </>
        ) : expression === 'celebrating' ? (
          <>
            <path d="M52 92 Q38 72 38 56" stroke="#D97706" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="38" cy="54" r="6" fill="#FED7AA" />
            <path d="M108 92 Q122 72 122 56" stroke="#D97706" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="122" cy="54" r="6" fill="#FED7AA" />
          </>
        ) : expression === 'thinking' ? (
          <>
            {/* Left arm resting */}
            <path d="M52 92 Q42 105 50 114" stroke="#D97706" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="50" cy="114" r="6" fill="#FED7AA" />
            {/* Right arm touching chin */}
            <path d="M108 92 Q98 84 86 68" stroke="#D97706" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="86" cy="68" r="6" fill="#FED7AA" />
          </>
        ) : (
          <>
            {/* Default holding magnifying glass */}
            <path d="M52 92 Q42 102 46 112" stroke="#D97706" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="46" cy="112" r="6" fill="#FED7AA" />
            {/* Right arm holding glass */}
            <path d="M108 92 Q118 96 112 108" stroke="#D97706" strokeWidth="8" strokeLinecap="round" fill="none" />
            <circle cx="112" cy="108" r="6" fill="#FED7AA" />
          </>
        )}

        {/* Magnifying Glass (The Detective Signature Icon) */}
        <g transform="translate(100, 72) rotate(18)">
          <rect x="22" y="32" width="7" height="24" rx="3" fill="#78350F" stroke="#451A03" strokeWidth="1" />
          <circle cx="25" cy="20" r="16" fill="#93C5FD" fillOpacity="0.4" stroke="#F59E0B" strokeWidth="4" />
          <path d="M16 12 Q20 10 24 12" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="32,10 34,14 38,14 35,17 36,21 32,18 28,21 29,17 26,14 30,14" fill="#FBBF24" />
        </g>
      </svg>
    </div>
  );
};

// 2. ROBOT KEY (Keyboard Chibi Companion)
export const RobotKey: React.FC<{
  expression?: 'happy' | 'suggesting' | 'puzzled';
  size?: number;
  className?: string;
  speech?: string;
}> = ({ expression = 'happy', size = 96, className = '', speech }) => {
  const handleClick = () => {
    sounds.playPop();
  };

  return (
    <div
      onClick={handleClick}
      className={`relative inline-flex flex-col items-center select-none cursor-pointer transform hover:scale-105 active:scale-95 transition-transform ${className}`}
      title="Robot Key - Chuyên gia từ khóa"
    >
      {speech && (
        <div className="mb-2 px-3 py-1 bg-cyan-100 text-cyan-900 border border-cyan-300 rounded-xl text-xs font-semibold shadow-sm animate-gentle-bounce relative max-w-[160px] text-center">
          {speech}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-100 border-b border-r border-cyan-300 transform rotate-45"></div>
        </div>
      )}

      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Antenna */}
        <line x1="60" y1="26" x2="60" y2="12" stroke="#0284C7" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="10" r="6" fill="#38BDF8" className="animate-pulse" />

        {/* Head */}
        <rect x="25" y="24" width="70" height="52" rx="14" fill="#0EA5E9" />
        <rect x="30" y="29" width="60" height="42" rx="10" fill="#0369A1" />

        {/* Screen Eyes (Cyan digital glow) */}
        {expression === 'puzzled' ? (
          <>
            <text x="40" y="56" fill="#67E8F9" fontSize="20" fontWeight="bold" fontFamily="monospace">?</text>
            <text x="66" y="56" fill="#67E8F9" fontSize="20" fontWeight="bold" fontFamily="monospace">?</text>
          </>
        ) : (
          <>
            <circle cx="45" cy="50" r="7" fill="#67E8F9" />
            <circle cx="75" cy="50" r="7" fill="#67E8F9" />
            <circle cx="46.5" cy="48" r="2.5" fill="white" />
            <circle cx="76.5" cy="48" r="2.5" fill="white" />
            <path d="M53 60 Q60 64 67 60" stroke="#67E8F9" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </>
        )}

        {/* Body (Keyboard Style) */}
        <rect x="32" y="80" width="56" height="34" rx="8" fill="#F8FAFC" stroke="#0284C7" strokeWidth="3" />
        {/* Keyboard keys */}
        <rect x="38" y="85" width="8" height="6" rx="2" fill="#BAE6FD" />
        <rect x="50" y="85" width="8" height="6" rx="2" fill="#BAE6FD" />
        <rect x="62" y="85" width="8" height="6" rx="2" fill="#BAE6FD" />
        <rect x="74" y="85" width="8" height="6" rx="2" fill="#BAE6FD" />

        <rect x="42" y="94" width="8" height="6" rx="2" fill="#BAE6FD" />
        <rect x="54" y="94" width="12" height="6" rx="2" fill="#38BDF8" />
        <rect x="70" y="94" width="8" height="6" rx="2" fill="#BAE6FD" />

        <rect x="46" y="103" width="28" height="6" rx="2" fill="#0284C7" />

        {/* Little metallic hands */}
        <circle cx="22" cy="88" r="6" fill="#0284C7" />
        <circle cx="98" cy="88" r="6" fill="#0284C7" />

        {expression === 'suggesting' && (
          <g transform="translate(86, 60)">
            <circle cx="12" cy="12" r="10" fill="#FEF08A" stroke="#EAB308" strokeWidth="2" />
            <polygon points="12,5 15,14 9,14" fill="#F59E0B" />
          </g>
        )}
      </svg>
    </div>
  );
};

// 3. AI BOT (Smart AI Companion with Screen Facial Matrix)
export const AiBot: React.FC<{
  expression?: 'idle' | 'thinking' | 'warning' | 'verified';
  size?: number;
  className?: string;
  speech?: string;
}> = ({ expression = 'idle', size = 96, className = '', speech }) => {
  const handleClick = () => {
    sounds.playAiChime();
  };

  return (
    <div
      onClick={handleClick}
      className={`relative inline-flex flex-col items-center select-none cursor-pointer transform hover:scale-105 active:scale-95 transition-transform ${className}`}
      title="AI Bot - Trợ lý số thông minh (Hãy kiểm tra lại khi dùng!)"
    >
      {speech && (
        <div className={`mb-2 px-3 py-1.5 rounded-xl text-xs font-semibold shadow-sm animate-gentle-bounce relative max-w-[170px] text-center ${
          expression === 'warning'
            ? 'bg-amber-100 text-amber-900 border border-amber-300'
            : 'bg-purple-100 text-purple-900 border border-purple-300'
        }`}>
          {speech}
          <div className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 border-b border-r transform rotate-45 ${
            expression === 'warning' ? 'bg-amber-100 border-amber-300' : 'bg-purple-100 border-purple-300'
          }`}></div>
        </div>
      )}

      <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Floating Ring Orbits */}
        <ellipse cx="60" cy="62" rx="48" ry="14" stroke="#C084FC" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />

        {/* Hovering Side Thrusters */}
        <ellipse cx="20" cy="58" rx="6" ry="12" fill="#7C3AED" />
        <ellipse cx="100" cy="58" rx="6" ry="12" fill="#7C3AED" />

        {/* Spherical Head/Body */}
        <circle cx="60" cy="58" r="34" fill="#6D28D9" />
        <circle cx="60" cy="58" r="30" fill="#1E1B4B" />

        {/* Antenna Crown */}
        <line x1="60" y1="28" x2="60" y2="16" stroke="#A855F7" strokeWidth="4" strokeLinecap="round" />
        <circle cx="60" cy="14" r="5" fill="#E879F9" className="animate-pulse" />

        {/* Digital Matrix Face */}
        {expression === 'warning' ? (
          <>
            <text x="44" y="65" fill="#F59E0B" fontSize="22" fontWeight="900" fontFamily="sans-serif">!</text>
            <text x="68" y="65" fill="#F59E0B" fontSize="22" fontWeight="900" fontFamily="sans-serif">!</text>
            <path d="M52 74 Q60 70 68 74" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" fill="none" />
          </>
        ) : expression === 'thinking' ? (
          <>
            <circle cx="48" cy="56" r="3" fill="#38BDF8" className="animate-ping" />
            <circle cx="60" cy="56" r="3" fill="#38BDF8" />
            <circle cx="72" cy="56" r="3" fill="#38BDF8" />
            <path d="M50 68 Q60 68 70 68" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" fill="none" />
          </>
        ) : expression === 'verified' ? (
          <>
            <path d="M42 58 L48 64 L56 52" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M64 58 L70 64 L78 52" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M52 72 Q60 76 68 72" stroke="#10B981" strokeWidth="2" strokeLinecap="round" fill="none" />
          </>
        ) : (
          <>
            {/* Friendly ^_^ eyes */}
            <path d="M44 58 Q49 50 54 58" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M66 58 Q71 50 76 58" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M54 68 Q60 73 66 68" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </>
        )}

        {/* Small base glow */}
        <ellipse cx="60" cy="102" rx="18" ry="4" fill="#C084FC" opacity="0.4" />
      </svg>
    </div>
  );
};

// 4. BÉ SAO (Cheering Golden Star)
export const BeSao: React.FC<{
  size?: number;
  className?: string;
  speech?: string;
}> = ({ size = 80, className = '', speech }) => {
  const handleClick = () => {
    sounds.playFanfare();
  };

  return (
    <div
      onClick={handleClick}
      className={`relative inline-flex flex-col items-center select-none cursor-pointer transform hover:scale-110 active:scale-95 transition-transform ${className}`}
      title="Bé Sao - Trao thưởng và cổ vũ"
    >
      {speech && (
        <div className="mb-2 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded-xl text-xs font-semibold shadow-sm animate-gentle-bounce relative max-w-[150px] text-center">
          {speech}
          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-100 border-b border-r border-amber-300 transform rotate-45"></div>
        </div>
      )}

      <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Star Body */}
        <polygon
          points="50,6 63,34 94,38 71,60 77,91 50,76 23,91 29,60 6,38 37,34"
          fill="#FBBF24"
          stroke="#D97706"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Cute Face */}
        <circle cx="42" cy="50" r="3.5" fill="#78350F" />
        <circle cx="58" cy="50" r="3.5" fill="#78350F" />
        <circle cx="43" cy="48.5" r="1.2" fill="white" />
        <circle cx="59" cy="48.5" r="1.2" fill="white" />

        {/* Rosy Cheeks */}
        <circle cx="36" cy="54" r="3" fill="#F43F5E" opacity="0.5" />
        <circle cx="64" cy="54" r="3" fill="#F43F5E" opacity="0.5" />

        {/* Big Happy Smile */}
        <path d="M46 56 Q50 63 54 56" stroke="#78350F" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Detective Badge Ribbon */}
        <rect x="44" y="68" width="12" height="14" rx="2" fill="#DC2626" />
        <polygon points="50,78 44,86 50,83 56,86" fill="#DC2626" />
      </svg>
    </div>
  );
};
