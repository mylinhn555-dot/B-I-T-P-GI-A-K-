import { Article, DetectiveMission } from '../types';

export const MOCK_ARTICLES: Article[] = [
  {
    id: 'art-trang-nguyen',
    title: 'Sôi động "Ngày hội Trạng Nguyên nhỏ tuổi": Sân chơi trí tuệ của tuổi thơ',
    category: 'children',
    summary: 'Hơn 500 học sinh tiểu học đã hội tụ về ngày hội để đua tài kiến thức qua các vòng thi Hương, thi Hội, thi Đình trong không khí tưng bừng phấn khởi.',
    content: [
      'Ngày hội Trạng Nguyên nhỏ tuổi là hoạt động thường niên bổ ích dành cho học sinh tiểu học trên cả nước, nhằm khuyến khích phong trào học tập, rèn luyện đức - trí - thể - mỹ.',
      'Tại ngày hội, các sĩ tử nhí tham gia trải nghiệm thi kiến thức Toán, Tiếng Việt, Lịch sử - Địa lý, Tin học dưới hình thức thi cử truyền thống kết hợp công nghệ số.',
      'Không chỉ là cuộc thi, ngày hội còn có các gian hàng trò chơi dân gian, góc khoa học sáng tạo và lễ vinh danh trao giải Trạng Nguyên, Bảng Nhãn, Thám Hoa.',
      'Thông tin cốt lõi để giới thiệu: Sự kiện diễn ra vào sáng Chủ Nhật tại Cung Thiếu nhi; gồm 3 phần: Lễ khai mạc, Tranh tài tri thức và Trao giải vinh danh.'
    ],
    date: '15/10/2026',
    author: 'Ban Biên Tập Thiếu Nhi',
    source: 'Góc Thông Tin Thiếu Nhi (thieunien.vn mô phỏng)',
    keywords: ['ngày hội trạng nguyên nhỏ tuổi', 'trạng nguyên nhỏ tuổi', 'thiếu nhi', 'sân chơi trí tuệ', 'tiểu học'],
    isAppropriateForStudent: true,
    highlights: [
      'Hoạt động thường niên bổ ích cho học sinh tiểu học',
      'Gồm 3 phần: Khai mạc, Tranh tài tri thức, Trao giải',
      'Vinh danh Trạng Nguyên, Bảng Nhãn, Thám Hoa'
    ]
  },
  {
    id: 'art-bong-da-nhi',
    title: 'Giải bóng đá Thiếu niên Nhi đồng toàn quốc: Những "chân sút nhí" tỏa sáng',
    category: 'sports',
    summary: 'Vòng chung kết bóng đá tiểu học năm nay chứng kiến những trận cầu kịch tính, tinh thần thể thao cao thượng và sự cổ vũ nồng nhiệt của thầy cô, bè bạn.',
    content: [
      'Giải bóng đá Thiếu niên Nhi đồng là sân chơi thể thao sôi động nhất mùa hè dành cho các em học sinh yêu thích trái bóng tròn.',
      'Năm nay, 16 đội tuyển xuất sắc từ các tỉnh thành đã mang đến những pha đi bóng kỹ thuật, những bàn thắng đẹp mắt và tình bạn thắm thiết trên sân cỏ.',
      'Huấn luyện viên chia sẻ: "Bóng đá giúp các em rèn luyện sức bền, sự khéo léo và đặc biệt là tinh thần đồng đội, tính kỷ luật."',
      'Trận chung kết sẽ được truyền hình trực tiếp vào thứ Bảy tuần này tại Sân vận động Thiếu niên.'
    ],
    date: '20/10/2026',
    author: 'Minh Tuấn (PV Thể Thao)',
    source: 'Góc Thông Tin Thiếu Nhi (thieunien.vn mô phỏng)',
    keywords: ['bóng đá', 'thể thao', 'bóng đá thiếu nhi', 'thiếu niên nhi đồng', 'giải bóng đá'],
    isAppropriateForStudent: true,
    highlights: [
      'Giải bóng đá thiếu nhi toàn quốc',
      '16 đội tuyển tiểu học tranh tài',
      'Rèn luyện thể lực và tinh thần đồng đội'
    ]
  },
  {
    id: 'art-de-men',
    title: 'Nhân vật Dế Mèn trong tác phẩm "Dế Mèn phiêu lưu ký" của nhà văn Tô Hoài',
    category: 'study',
    summary: 'Hình tượng chú Dế Mèn cường tráng, biết ân hận sau lỗi lầm và dấn thân chu du giúp đỡ kẻ yếu là bài học đạo đức sâu sắc cho bao thế hệ học trò.',
    content: [
      'Dế Mèn là nhân vật chính trong tác phẩm văn học thiếu nhi nổi tiếng "Dế Mèn phiêu lưu ký" của nhà văn Tô Hoài, được trích dạy trong sách giáo khoa Tiếng Việt.',
      'Ban đầu, Dế Mèn là một chàng dế tự phụ, kiêu ngạo vì nghĩ mình khỏe mạnh, dẫn đến cái chết thương tâm của Dế Choắt.',
      'Sau bài học đắt giá, Dế Mèn biết ăn năn hối lỗi, quyết chí lên đường phiêu lưu, kết nghĩa anh em cùng Dế Trũi và đứng ra trừ hại bênh vực Chị Nhà Trò yếu ớt.',
      'Thông điệp bài đọc: Sống khiêm tốn, biết nhận lỗi và có lòng trượng nghĩa giúp đỡ mọi người.'
    ],
    date: '12/10/2026',
    author: 'Cô Thu Hương (GV Văn - Tiếng Việt)',
    source: 'Góc Thông Tin Thiếu Nhi (thieunien.vn mô phỏng)',
    keywords: ['dế mèn', 'dế mèn phiêu lưu ký', 'tô hoài', 'nhân vật bài đọc', 'văn học tiểu học'],
    isAppropriateForStudent: true,
    highlights: [
      'Nhân vật chính trong kiệt tác của Tô Hoài',
      'Bài học đường đời đầu tiên và lòng ân hận',
      'Tinh thần hiệp nghĩa, giúp đỡ người yếu'
    ]
  },
  {
    id: 'art-lich-hoat-dong-truong',
    title: 'Lịch hoạt động tháng 11 của Trường Tiểu học: Tuần lễ Tri ân Thầy Cô giáo',
    category: 'school',
    summary: 'Toàn trường phát động chuỗi hoạt động văn nghệ, thể thao, hội thi làm thiệp hoa và phong trào hoa điểm mười chào mừng Ngày Nhà giáo Việt Nam 20/11.',
    content: [
      'Ban Giám hiệu trường thông báo lịch hoạt động trọng điểm trong tháng 11 để các chi đội và lớp học chủ động kế hoạch tham gia:',
      '• Tuần 1 (02/11 - 07/11): Khởi động phong trào "Hoa điểm mười dâng thầy cô" và phát động cuộc thi viết báo tường.',
      '• Tuần 2 (09/11 - 14/11): Vòng sơ khảo Hội diễn văn nghệ thiếu nhi và giải thi đấu kéo co giữa các khối lớp.',
      '• Tuần 3 (16/11 - 20/11): Triển lãm báo tường bích báo, chung kết văn nghệ và Lễ Mít-tinh Kỷ niệm Ngày Nhà giáo Việt Nam vào sáng 20/11.',
      'Các bạn học sinh chú ý chuẩn bị đồng phục trang nghiêm và tích cực tham gia các tiết mục tập thể.'
    ],
    date: '28/10/2026',
    author: 'Tổng Phụ Trách Đội Thiếu Niên',
    source: 'Góc Thông Tin Thiếu Nhi (thieunien.vn mô phỏng)',
    keywords: ['lịch hoạt động', 'lịch hoạt động của trường', 'hoạt động trường', 'tháng 11', 'ngày 20-11'],
    isAppropriateForStudent: true,
    highlights: [
      'Lịch hoạt động trường học tháng 11',
      'Chuỗi phong trào tri ân 20/11',
      'Thi văn nghệ, báo tường và hoa điểm mười'
    ]
  },
  {
    id: 'art-kim-dong',
    title: 'Anh Kim Đồng - Người liên lạc nhỏ tuổi mưu trí, dũng cảm',
    category: 'study',
    summary: 'Gương sáng anh hùng Kim Đồng (Nông Văn Dền), người đội trưởng đầu tiên của Đội Thiếu niên Tiền phong Hồ Chí Minh.',
    content: [
      'Anh Kim Đồng tên thật là Nông Văn Dền, người dân tộc Nùng ở tỉnh Cao Bằng, là một trong những đội viên đầu tiên.',
      'Với lòng yêu nước và trí thông minh, anh đã nhiều lần nhanh trí vượt qua trạm gác của địch để chuyển thư mật của cách mạng an toàn.',
      'Sự hy sinh dũng cảm của anh để bảo vệ cán bộ là tấm gương sáng ngời cho thiếu nhi noi theo.'
    ],
    date: '05/10/2026',
    author: 'Ban Tư Liệu Lịch Sử Đội',
    source: 'Góc Thông Tin Thiếu Nhi (thieunien.vn mô phỏng)',
    keywords: ['kim đồng', 'nông văn dền', 'anh hùng nhỏ tuổi', 'nhân vật lịch sử'],
    isAppropriateForStudent: true
  },
  {
    id: 'art-boi-loi',
    title: 'Bơi lội học đường: Kỹ năng sinh tồn và rèn luyện thể lực vàng',
    category: 'sports',
    summary: 'Môn bơi giúp tăng chiều cao, giải tỏa căng thẳng sau giờ học và trang bị kỹ năng phòng tránh tai nạn đuối nước cho học sinh.',
    content: [
      'Bơi lội là môn thể thao toàn diện phù hợp cho lứa tuổi tiểu học phát triển hệ cơ xương và dung tích phổi.',
      'Mỗi tuần dành 2 buổi tập bơi có hướng dẫn viên giúp các em bơi đúng kỹ thuật ếch, bơi sải và an toàn dưới nước.'
    ],
    date: '18/10/2026',
    author: 'Thầy Hoàng Nam (GV Giáo Dục Thể Chất)',
    source: 'Góc Thông Tin Thiếu Nhi (thieunien.vn mô phỏng)',
    keywords: ['bơi lội', 'thể thao', 'kỹ năng sống'],
    isAppropriateForStudent: true
  },
  {
    id: 'art-ke-hoach-nho',
    title: 'Hội chợ Kế hoạch nhỏ: Biến rác tái chế thành đồ dùng học tập xinh xắn',
    category: 'school',
    summary: 'Học sinh toàn trường thu gom giấy báo cũ, chai nhựa để gây quỹ học bổng giúp đỡ các bạn có hoàn cảnh khó khăn.',
    content: [
      'Phong trào Kế hoạch nhỏ nuôi dưỡng tinh thần tương thân tương ái và ý thức bảo vệ môi trường xanh cho thiếu nhi.',
      'Toàn bộ kinh phí thu được trao tặng 30 suất học bổng cho học sinh nghèo vượt khó.'
    ],
    date: '22/10/2026',
    author: 'Ban Công Tác Xã Hội Trường',
    source: 'Góc Thông Tin Thiếu Nhi (thieunien.vn mô phỏng)',
    keywords: ['kế hoạch nhỏ', 'hoạt động trường', 'bảo vệ môi trường'],
    isAppropriateForStudent: true
  },
  {
    id: 'art-sach-khoang-troi',
    title: 'Khám phá tập thơ thiếu nhi "Góc sân và khoảng trời" của Trần Đăng Khoa',
    category: 'culture',
    summary: 'Những vần thơ trong trẻo về hạt gạo làng ta, cây dừa, vầng trăng và tình yêu gia đình quê hương đất nước.',
    content: [
      'Tập thơ "Góc sân và khoảng trời" được ví như ô cửa sổ mở ra thế giới thần tiên dung dị của trẻ thơ làng quê Việt Nam.',
      'Các bạn nhỏ yêu thích đọc sách hãy tìm đọc tại thư viện trường để cảm nhận nét đẹp ngôn từ Tiếng Việt.'
    ],
    date: '10/10/2026',
    author: 'Thư Viện Thiếu Nhi',
    source: 'Góc Thông Tin Thiếu Nhi (thieunien.vn mô phỏng)',
    keywords: ['đọc sách', 'trần đăng khoai', 'văn hóa đọc', 'thơ thiếu nhi'],
    isAppropriateForStudent: true
  }
];

export const DETECTIVE_MISSIONS: DetectiveMission[] = [
  {
    id: 1,
    title: 'Nhiệm vụ 1: Tìm thông tin Thể thao theo Chủ đề',
    badgeTitle: 'Thám tử Khám phá Chủ đề',
    description: 'Em hãy quan sát thanh danh mục chủ đề trên website, bấm vào chủ đề "Thể thao" và tìm bài viết về bóng đá thiếu nhi.',
    targetCategory: 'sports',
    expectedKeywords: ['thể thao', 'bóng đá'],
    targetArticleId: 'art-bong-da-nhi',
    hint: 'Nhìn lên thanh Menu chủ đề: Bấm vào mục "Thể thao"!',
    question: 'Theo bài viết em tìm được, giải bóng đá có bao nhiêu đội tuyển tiểu học tranh tài?',
    options: ['8 đội', '16 đội', '32 đội', '4 đội'],
    correctOptionIndex: 1
  },
  {
    id: 2,
    title: 'Nhiệm vụ 2: Tìm bằng Ô tìm kiếm với Từ khóa',
    badgeTitle: 'Thám tử Từ khóa Thông minh',
    description: 'Nhập từ khóa ngắn gọn, đúng trọng tâm vào Ô tìm kiếm để tìm thông tin về "Ngày hội Trạng Nguyên nhỏ tuổi".',
    expectedKeywords: ['ngày hội trạng nguyên nhỏ tuổi', 'trạng nguyên nhỏ tuổi', 'trạng nguyên'],
    targetArticleId: 'art-trang-nguyen',
    hint: 'Nhập từ khóa "Ngày hội Trạng Nguyên nhỏ tuổi" vào ô tìm kiếm rồi bấm nút Tìm kiếm hoặc Enter!',
    question: 'Tại ngày hội Trạng Nguyên nhỏ tuổi, các sĩ tử nhí tham gia mấy phần chính?',
    options: ['3 phần (Khai mạc, Tranh tài tri thức, Trao giải)', '1 phần duy nhất', '5 phần', 'Không có phần thi nào'],
    correctOptionIndex: 0
  },
  {
    id: 3,
    title: 'Nhiệm vụ 3: Tìm thông tin Nhân vật trong bài đọc',
    badgeTitle: 'Thám tử Văn học & Tri thức',
    description: 'Tìm bài viết về nhân vật chú "Dế Mèn" trong bài đọc em đã học bằng ô tìm kiếm hoặc chủ đề Học tập.',
    expectedKeywords: ['dế mèn', 'dế mèn phiêu lưu ký', 'nhân vật'],
    targetArticleId: 'art-de-men',
    hint: 'Thử nhập từ khóa "dế mèn" hoặc vào chủ đề "Học tập"!',
    question: 'Bài học đắt giá mà chú Dế Mèn rút ra sau chuyến phiêu lưu là gì?',
    options: [
      'Sống kiêu căng và bắt nạt kẻ khác',
      'Sống khiêm tốn, biết nhận lỗi và có lòng trượng nghĩa giúp đỡ mọi người',
      'Chỉ ở trong hang không đi đâu cả',
      'Không cần chơi với bạn bè'
    ],
    correctOptionIndex: 1
  },
  {
    id: 4,
    title: 'Nhiệm vụ 4: Tìm Lịch hoạt động của trường',
    badgeTitle: 'Thám tử Thông tin Học đường',
    description: 'Lớp em muốn biết lịch hoạt động của trường trong tháng 11 để chuẩn bị tham gia.',
    targetCategory: 'school',
    expectedKeywords: ['lịch hoạt động', 'lịch hoạt động của trường', 'hoạt động trường'],
    targetArticleId: 'art-lich-hoat-dong-truong',
    hint: 'Bấm vào chủ đề "Hoạt động trường" hoặc nhập từ khóa "lịch hoạt động"!',
    question: 'Trong tháng 11, ngày Lễ Mít-tinh Kỷ niệm Ngày Nhà giáo Việt Nam diễn ra vào ngày nào?',
    options: ['Ngày 02/11', 'Ngày 10/11', 'Sáng ngày 20/11', 'Ngày 30/11'],
    correctOptionIndex: 2
  }
];

export const CATEGORIES = [
  { id: 'all', name: 'Trang chủ', icon: '🏠' },
  { id: 'children', name: 'Thiếu nhi', icon: '🎈' },
  { id: 'sports', name: 'Thể thao', icon: '⚽' },
  { id: 'study', name: 'Học tập', icon: '📚' },
  { id: 'school', name: 'Hoạt động trường', icon: '🏫' },
  { id: 'culture', name: 'Văn hóa & Đọc sách', icon: '📖' }
];
