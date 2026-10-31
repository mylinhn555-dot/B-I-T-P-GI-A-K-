import { QuizQuestion } from '../types';

export const WARMUP_QUESTIONS = [
  {
    id: 1,
    question: 'Trước khi tìm kiếm thông tin trên website, nhóm An cần làm gì trước tiên?',
    options: [
      'Xác định rõ thông tin cần tìm (nhiệm vụ cần giải quyết)',
      'Nhấn vào tất cả các đường link có trên trang',
      'Chọn ngẫu nhiên một bài viết bất kỳ'
    ],
    correctAnswer: 0,
    explanation: 'Chính xác! Biết rõ mình cần tìm gì là bước đầu tiên quan trọng nhất của một thám tử website.'
  },
  {
    id: 2,
    question: 'Sau khi xác định nhiệm vụ, nhóm An có thể làm gì để tìm thông tin nhanh và đúng?',
    options: [
      'Chọn từ khóa ngắn gọn hoặc chọn chủ đề phù hợp trên website',
      'Đọc lần lượt tất cả mọi thông tin trên Internet',
      'Tin ngay kết quả đầu tiên xuất hiện mà không cần đọc'
    ],
    correctAnswer: 0,
    explanation: 'Rất tốt! Sử dụng từ khóa đúng trọng tâm hoặc duyệt theo chủ đề giúp tiết kiệm thời gian và tìm chính xác.'
  },
  {
    id: 3,
    question: 'Sau khi tìm được thông tin trên website, nhóm An cần làm gì trước khi sử dụng để thuyết trình?',
    options: [
      'Chia sẻ ngay cho cả lớp mà không cần đọc kỹ',
      'Kiểm tra xem thông tin có phù hợp, chính xác và có ích không rồi mới chia sẻ',
      'Tự ý bịa thêm nội dung cho hấp dẫn hơn'
    ],
    correctAnswer: 1,
    explanation: 'Chuẩn xác! Thám tử thông minh luôn kiểm tra thông tin cẩn thận trước khi tin tưởng và chia sẻ với bạn bè.'
  }
];

export const WEBSITE_HOTSPOTS = [
  {
    id: 'logo',
    name: 'Logo Website',
    icon: '🏷️',
    description: 'Biểu tượng thương hiệu nhận diện website. Bấm vào logo thường giúp em quay trở lại trang chủ ngay lập tức.'
  },
  {
    id: 'home-btn',
    name: 'Nút Trang chủ',
    icon: '🏠',
    description: 'Nơi hiển thị những thông tin mới nhất, nổi bật nhất của website.'
  },
  {
    id: 'categories',
    name: 'Thanh Danh mục / Chủ đề',
    icon: '📑',
    description: 'Sắp xếp thông tin theo từng lĩnh vực (Thể thao, Học tập, Thiếu nhi...). Rất hữu ích khi em muốn tìm tin theo nhóm chủ đề.'
  },
  {
    id: 'search-input',
    name: 'Ô Tìm kiếm (Search Box)',
    icon: '🔍',
    description: 'Nơi em nhập từ khóa ngắn gọn, đúng trọng tâm để máy tính tìm nhanh các bài viết chứa nội dung đó.'
  },
  {
    id: 'search-btn',
    name: 'Nút Tìm kiếm',
    icon: '⚡',
    description: 'Nhấn vào đây (hoặc nhấn phím Enter trên bàn phím) để ra lệnh cho website thực hiện tìm kiếm.'
  },
  {
    id: 'article-title',
    name: 'Tiêu đề bài viết',
    icon: '📌',
    description: 'Tên bài viết in đậm, giúp em biết ngay bài viết nói về điều gì trước khi quyết định bấm vào đọc.'
  },
  {
    id: 'article-img',
    name: 'Hình ảnh minh họa',
    icon: '🖼️',
    description: 'Giúp bài viết sinh động, trực quan và hỗ trợ người đọc hiểu rõ hơn về nội dung sự kiện.'
  },
  {
    id: 'article-content',
    name: 'Khu vực nội dung',
    icon: '📖',
    description: 'Chứa thông tin chi tiết, số liệu, diễn biến của bài viết để em chọn lọc thông tin cần thiết.'
  },
  {
    id: 'related-articles',
    name: 'Bài viết liên quan',
    icon: '🔗',
    description: 'Gợi ý các bài viết cùng chủ đề để em mở rộng hiểu biết hoặc kiểm chứng thêm thông tin.'
  }
];

export const KEYWORD_SELECTION_QUIZZES = [
  {
    id: 1,
    mission: 'Tìm thông tin về môn bóng đá thiếu nhi',
    options: [
      'Bóng đá',
      'Em muốn biết tất cả mọi thứ trên thế giới về quả bóng',
      'Những điều em thích'
    ],
    correct: 0,
    explanation: '"Bóng đá" là từ khóa ngắn gọn, đúng trọng tâm nội dung cần tìm. Không nên nhập cả câu văn dài dòng.'
  },
  {
    id: 2,
    mission: 'Tìm thông tin về hoạt động dành cho thiếu nhi',
    options: [
      'Thiếu nhi',
      'Mọi thứ trên mạng',
      'Hôm nay trời đẹp quá bạn ơi'
    ],
    correct: 0,
    explanation: 'Từ khóa "Thiếu nhi" thể hiện rõ chủ đề cần tìm.'
  },
  {
    id: 3,
    mission: 'Tìm lịch các hoạt động của trường học',
    options: [
      'Lịch hoạt động của trường',
      'Trường của em to và đẹp lắm',
      'Tất cả mọi sự kiện xảy ra hôm nay'
    ],
    correct: 0,
    explanation: '"Lịch hoạt động của trường" là cụm từ khóa rõ nghĩa, giúp công cụ tìm kiếm lọc đúng thông báo lịch trình.'
  },
  {
    id: 4,
    mission: 'Tìm thông tin về một nhân vật trong bài đọc (Chú Dế Mèn)',
    options: [
      'Dế Mèn',
      'Một con côn trùng biết nhảy',
      'Bài học Tiếng Việt lớp 5 mà cô giáo vừa dạy sáng nay'
    ],
    correct: 0,
    explanation: 'Nhập trực tiếp tên riêng của nhân vật "Dế Mèn" sẽ cho kết quả chính xác nhất!'
  },
  {
    id: 5,
    mission: 'Tìm thông tin về sự kiện "Ngày hội Trạng Nguyên nhỏ tuổi"',
    options: [
      'Ngày hội Trạng Nguyên nhỏ tuổi',
      'Tìm cho em xem có cuộc thi nào vui không',
      'Trạng Nguyên ngày xưa thi đỗ làm quan'
    ],
    correct: 0,
    explanation: 'Sử dụng cụm từ khóa chính xác "Ngày hội Trạng Nguyên nhỏ tuổi" giúp website tìm trúng bài viết về sự kiện này.'
  }
];

export const AI_BOT_SCENARIOS = [
  {
    id: 1,
    mission: 'Nhiệm vụ: Tìm thông tin về Ngày hội Trạng Nguyên nhỏ tuổi',
    suggestionTitle: 'Bài viết: "Kỳ thi tuyển sinh Đại học năm 2026 dành cho thí sinh 18 tuổi"',
    suggestionSnippet: 'Bộ Giáo dục công bố quy chế thi tốt nghiệp THPT và xét tuyển Đại học trên toàn quốc...',
    aiBotNote: 'AI Bot: "Tôi tìm thấy thông tin về một kỳ thi rất quan trọng này!"',
    correctTag: 'not-suitable', // 'usable' | 'check-needed' | 'not-suitable'
    explanation: 'Không phù hợp! Nhiệm vụ là tìm ngày hội của học sinh tiểu học, còn gợi ý này là thi Đại học của người lớn.'
  },
  {
    id: 2,
    mission: 'Nhiệm vụ: Tìm thông tin về giải bóng đá học sinh tiểu học',
    suggestionTitle: 'Bài viết: "Khai mạc Giải bóng đá Thiếu niên Nhi đồng Cúp Mùa Thu"',
    suggestionSnippet: 'Sáng nay tại sân trường, giải bóng đá thiếu nhi chính thức khởi tranh với 16 đội tuyển...',
    aiBotNote: 'AI Bot: "Bài viết này có đúng từ khóa bóng đá thiếu nhi mà em cần!"',
    correctTag: 'usable',
    explanation: 'Có thể sử dụng! Nội dung đúng đối tượng học sinh thiếu nhi, đúng môn bóng đá và nguồn tin phù hợp.'
  },
  {
    id: 3,
    mission: 'Nhiệm vụ: Tìm Lịch hoạt động tháng 11 của trường em',
    suggestionTitle: 'Bài viết: "Lịch hoạt động tháng 11 năm 2020 của Trường THCS Nguyễn Du"',
    suggestionSnippet: 'Lịch thi học kỳ I và kế hoạch cắm trại năm học 2020-2021...',
    aiBotNote: 'AI Bot: "Tôi tìm thấy lịch tháng 11 cho em rồi này!"',
    correctTag: 'check-needed',
    explanation: 'Cần kiểm tra lại! Lịch này đã cũ từ năm 2020 và thuộc trường khác (THCS), không phải trường tiểu học của em.'
  }
];

export const FINAL_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Trước khi tìm kiếm thông tin trên website, em cần làm gì?',
    options: [
      'A. Xác định nhiệm vụ cần tìm.',
      'B. Nhấn vào tất cả các nút.',
      'C. Mở nhiều trang ngẫu nhiên.'
    ],
    correctAnswer: 0,
    explanation: 'Xác định rõ nhiệm vụ giúp em biết mình cần tìm thông tin gì, tránh mất thời gian tìm kiếm lan man.'
  },
  {
    id: 2,
    question: 'Muốn tìm thông tin về bóng đá trên một website tin tức, em có thể chọn chủ đề nào?',
    options: [
      'A. Thể thao.',
      'B. Ẩm thực.',
      'C. Âm nhạc.'
    ],
    correctAnswer: 0,
    explanation: 'Bóng đá thuộc lĩnh vực thể dục thể thao, vì vậy chọn danh mục "Thể thao" là chính xác nhất.'
  },
  {
    id: 3,
    question: 'Muốn tìm nhanh một sự kiện cụ thể trên website, em có thể sử dụng công cụ nào?',
    options: [
      'A. Ô tìm kiếm.',
      'B. Nút thoát.',
      'C. Nút thu nhỏ.'
    ],
    correctAnswer: 0,
    explanation: 'Ô tìm kiếm cho phép nhập từ khóa để website quét và trả về đúng sự kiện em cần trong vài giây.'
  },
  {
    id: 4,
    question: 'Từ khóa nào dưới đây phù hợp nhất khi tìm thông tin về các hoạt động thiếu nhi?',
    options: [
      'A. Thiếu nhi.',
      'B. Những điều em muốn biết trên thế giới.',
      'C. Mọi thứ.'
    ],
    correctAnswer: 0,
    explanation: '"Thiếu nhi" là từ khóa ngắn gọn, đúng trọng tâm nhất.'
  },
  {
    id: 5,
    question: 'Khi kết quả tìm kiếm không liên quan đến nhiệm vụ được giao, em nên làm gì?',
    options: [
      'A. Sử dụng ngay.',
      'B. Điều chỉnh từ khóa hoặc chọn chủ đề phù hợp hơn.',
      'C. Chép lại toàn bộ.'
    ],
    correctAnswer: 1,
    explanation: 'Em hãy thử thay đổi từ khóa ngắn gọn, rõ nghĩa hơn hoặc chọn lại danh mục chủ đề chính xác.'
  },
  {
    id: 6,
    question: 'Khi AI đưa ra thông tin có vẻ liên quan nhưng chưa đầy đủ, em nên làm gì?',
    options: [
      'A. Tin tuyệt đối.',
      'B. Kiểm tra lại bằng nguồn phù hợp hoặc hỏi thầy cô.',
      'C. Chia sẻ ngay cho các bạn.'
    ],
    correctAnswer: 1,
    explanation: 'AI chỉ là công cụ hỗ trợ gợi ý, em không nên tin tuyệt đối mà luôn cần kiểm tra lại thông tin.'
  },
  {
    id: 7,
    question: 'Khi tìm được thông tin phù hợp, em nên làm gì trước khi sử dụng?',
    options: [
      'A. Kiểm tra nội dung và nguồn thông tin.',
      'B. Xóa tên nguồn.',
      'C. Tự ý thêm nội dung không có thật.'
    ],
    correctAnswer: 0,
    explanation: 'Kiểm tra nội dung, thời gian và nguồn tin là phẩm chất trung thực, trách nhiệm trong môi trường số.'
  },
  {
    id: 8,
    question: 'Khi làm việc nhóm, em nên chia sẻ thông tin như thế nào?',
    options: [
      'A. Nói rõ thông tin đã tìm được và nguồn thông tin.',
      'B. Giấu thông tin không cho bạn biết.',
      'C. Chỉ nghe ý kiến của một mình mình.'
    ],
    correctAnswer: 0,
    explanation: 'Hợp tác nhóm đòi hỏi chia sẻ cởi mở, nói rõ thông tin và nguồn tin để cả nhóm cùng thảo luận.'
  },
  {
    id: 9,
    question: 'Nếu hai kết quả tìm kiếm khác nhau, nhóm em nên làm gì để thống nhất?',
    options: [
      'A. Chọn kết quả đầu tiên ngay lập tức.',
      'B. So sánh nhiệm vụ, nội dung và nguồn để kiểm tra.',
      'C. Chọn kết quả dài hơn.'
    ],
    correctAnswer: 1,
    explanation: 'So sánh đối chiếu cả hai kết quả với yêu cầu nhiệm vụ và độ tin cậy của nguồn tin.'
  },
  {
    id: 10,
    question: 'Đâu là quy trình tìm kiếm thông tin khoa học và hiệu quả?',
    options: [
      'A. Xác định nhiệm vụ → Chọn từ khóa/chủ đề → Tìm kiếm → Kiểm tra → Chia sẻ.',
      'B. Tìm kiếm → Chia sẻ ngay → Kiểm tra sau.',
      'C. Mở website → Chọn ngẫu nhiên → Sao chép.'
    ],
    correctAnswer: 0,
    explanation: 'Đây là quy tắc vàng 5 bước chuẩn của thám tử tìm kiếm thông tin!'
  }
];

export const BADGES_LIST = [
  {
    id: 'badge-keywords',
    title: 'Thám tử Từ khóa',
    icon: '🔑',
    description: 'Thành thạo chọn từ khóa ngắn gọn, đúng trọng tâm và không dài dòng.',
    condition: 'Hoàn thành bài tập Bí mật của từ khóa'
  },
  {
    id: 'badge-explorer',
    title: 'Chuyên gia Khám phá Website',
    icon: '🧭',
    description: 'Nắm vững các khu vực trên website và thành thạo duyệt theo chủ đề.',
    condition: 'Khám phá tất cả các khu vực trên website mẫu'
  },
  {
    id: 'badge-inspector',
    title: 'Người Kiểm tra Thông tin',
    icon: '🔍',
    description: 'Biết kiểm chứng độ chính xác, nguồn tin và không tin mù quáng vào kết quả.',
    condition: 'Hoàn thành các nhiệm vụ thám tử website'
  },
  {
    id: 'badge-teammate',
    title: 'Bạn Đồng Đội Tuyệt Vời',
    icon: '🤝',
    description: 'Biết lắng nghe, phân công vai trò và hoàn thành Phiếu Thám tử cùng nhóm.',
    condition: 'Điền và lưu Phiếu học tập nhóm'
  },
  {
    id: 'badge-responsible-ai',
    title: 'Nhà Thám hiểm AI Có Trách Nhiệm',
    icon: '🤖',
    description: 'Sử dụng AI thông minh như người trợ lý, luôn kiểm tra lại và không lạm dụng.',
    condition: 'Phân loại đúng các gợi ý của AI Bot'
  }
];
