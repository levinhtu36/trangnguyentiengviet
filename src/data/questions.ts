// Dữ liệu câu hỏi lấy nguyên văn từ file PDF "Luyện tập thành ngữ, tục ngữ"
// KHÔNG thêm, sửa, hoặc diễn giải nội dung

export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: string;
  source: string; // Bài số mấy trong PDF
}

// BÀI 1: Điền từ vào chỗ chấm
export const bai1Questions: Question[] = [
  {
    id: 1,
    question: "Chị ......... em nâng.",
    options: ["ngã", "té", "đứng"],
    correct: "ngã",
    source: "Bài 1"
  },
  {
    id: 2,
    question: "Danh bất hư ..............",
    options: ["truyền", "danh", "tiếng"],
    correct: "truyền",
    source: "Bài 1"
  },
  {
    id: 3,
    question: "Con hơn ........... là nhà có phúc.",
    options: ["cha", "mẹ", "ông"],
    correct: "cha",
    source: "Bài 1"
  },
  {
    id: 4,
    question: "Gà cùng một ......... chớ hoài đá nhau.",
    options: ["mẹ", "cha", "bầy"],
    correct: "mẹ",
    source: "Bài 1"
  },
  {
    id: 5,
    question: "Em ............. anh hòa là nhà có phúc.",
    options: ["thuận", "ngoan", "giỏi"],
    correct: "thuận",
    source: "Bài 1"
  },
  {
    id: 6,
    question: "Lá lành đùm lá ............",
    options: ["rách", "lành", "xanh"],
    correct: "rách",
    source: "Bài 1"
  },
  {
    id: 7,
    question: "................ thử vàng, gian nan thử sức.",
    options: ["Lửa", "Nước", "Gió"],
    correct: "Lửa",
    source: "Bài 1"
  },
  {
    id: 8,
    question: "Một nắng hai ..........",
    options: ["sương", "mưa", "gió"],
    correct: "sương",
    source: "Bài 1"
  },
  {
    id: 9,
    question: "............. cười, tươi khóc.",
    options: ["Mếu", "Méo", "Buồn"],
    correct: "Mếu",
    source: "Bài 1"
  },
  {
    id: 10,
    question: "Chuột .......... chĩnh gạo.",
    options: ["sa", "vào", "rơi"],
    correct: "sa",
    source: "Bài 1"
  },
  {
    id: 11,
    question: "Tay bắt ............ mừng.",
    options: ["mặt", "tay", "chân"],
    correct: "mặt",
    source: "Bài 1"
  },
  {
    id: 12,
    question: "Uống nước nhớ ................",
    options: ["nguồn", "suối", "sông"],
    correct: "nguồn",
    source: "Bài 1"
  },
  {
    id: 13,
    question: "Chậm như ...............",
    options: ["rùa", "sên", "ốc"],
    correct: "rùa",
    source: "Bài 1"
  },
  {
    id: 14,
    question: "Ăn quả nhớ kẻ ............... cây.",
    options: ["trồng", "hái", "vun"],
    correct: "trồng",
    source: "Bài 1"
  },
  {
    id: 15,
    question: "Non ............ nước biếc như tranh họa đồ.",
    options: ["xanh", "cao", "xa"],
    correct: "xanh",
    source: "Bài 1"
  },
  {
    id: 16,
    question: "Trẻ .............. như búp trên cành.",
    options: ["em", "con", "thơ"],
    correct: "em",
    source: "Bài 1"
  },
  {
    id: 17,
    question: "Công ..........., nghĩa mẹ, ơn thầy.",
    options: ["cha", "bố", "ông"],
    correct: "cha",
    source: "Bài 1"
  },
  {
    id: 18,
    question: "Ăn cây nào …………….. cây ấy.",
    options: ["rào", "trồng", "tưới"],
    correct: "rào",
    source: "Bài 1"
  },
  {
    id: 19,
    question: "Cả gió thì……… đuốc.",
    options: ["tắt", "cháy", "sáng"],
    correct: "tắt",
    source: "Bài 1"
  },
  {
    id: 20,
    question: "Tùy cơ ………………biến.",
    options: ["ứng", "thay", "đổi"],
    correct: "ứng",
    source: "Bài 1"
  },
  {
    id: 21,
    question: "Cơm không rau như đau không …………",
    options: ["thuốc", "bác sĩ", "khỏi"],
    correct: "thuốc",
    source: "Bài 1"
  },
  {
    id: 22,
    question: "Yêu trẻ, trẻ hay đến ………",
    options: ["nhà", "chơi", "thăm"],
    correct: "nhà",
    source: "Bài 1"
  },
  {
    id: 23,
    question: "Kính già, ……… để tuổi cho.",
    options: ["già", "trẻ", "con"],
    correct: "già",
    source: "Bài 1"
  },
  {
    id: 24,
    question: "Nước tới ………..mới nhảy.",
    options: ["chân", "đầu", "lưng"],
    correct: "chân",
    source: "Bài 1"
  },
  {
    id: 25,
    question: "Đông sao thì nắng, ………. sao thì mưa.",
    options: ["vắng", "ít", "nhiều"],
    correct: "vắng",
    source: "Bài 1"
  },
  {
    id: 26,
    question: "Lọt sàng…………nia.",
    options: ["xuống", "vào", "ra"],
    correct: "xuống",
    source: "Bài 1"
  },
  {
    id: 27,
    question: "Đầu xuôi…………lọt.",
    options: ["đuôi", "cuối", "sau"],
    correct: "đuôi",
    source: "Bài 1"
  },
  {
    id: 28,
    question: "Vụng chèo khéo ………...",
    options: ["chống", "bơi", "lái"],
    correct: "chống",
    source: "Bài 1"
  },
  {
    id: 29,
    question: "Thẳng như ……..…….ngựa.",
    options: ["ruột", "lưng", "chân"],
    correct: "ruột",
    source: "Bài 1"
  },
  {
    id: 30,
    question: "Cơm tẻ là mẹ …………….. ",
    options: ["ruột", "đẻ", "nuôi"],
    correct: "ruột",
    source: "Bài 1"
  },
  {
    id: 31,
    question: "Bầu ơi thương lấy .............. cùng.",
    options: ["bí", "dưa", "mướp"],
    correct: "bí",
    source: "Bài 1"
  },
  {
    id: 32,
    question: "Nước xôi .........bỏng.",
    options: ["lửa", "nóng", "sôi"],
    correct: "lửa",
    source: "Bài 1"
  },
  {
    id: 33,
    question: "Tuy rằng khác …………….nhưng chung một giàn.",
    options: ["giống", "loại", "cây"],
    correct: "giống",
    source: "Bài 1"
  },
  {
    id: 34,
    question: "Ướt như ............lột.",
    options: ["chuột", "mèo", "chó"],
    correct: "chuột",
    source: "Bài 1"
  },
  {
    id: 35,
    question: "Chó …….. mèo đậy.",
    options: ["treo", "cất", "giấu"],
    correct: "treo",
    source: "Bài 1"
  },
  {
    id: 36,
    question: "Cha ………. con nối.",
    options: ["truyền", "dạy", "bảo"],
    correct: "truyền",
    source: "Bài 1"
  }
];

// BÀI 2: Điền từ thích hợp vào chỗ chấm
export const bai2Questions: Question[] = [
  {
    id: 101,
    question: "Ăn không nên đọi, nói ................ nên lời.",
    options: ["không", "chẳng", "đâu"],
    correct: "không",
    source: "Bài 2"
  },
  {
    id: 102,
    question: "Ăn ............... nói thẳng.",
    options: ["ngay", "thật", "đúng"],
    correct: "ngay",
    source: "Bài 2"
  },
  {
    id: 103,
    question: "Ba ..................... bốn cẳng.",
    options: ["chân", "tay", "đầu"],
    correct: "chân",
    source: "Bài 2"
  },
  {
    id: 104,
    question: "Ở ................. gặp lành.",
    options: ["hiền", "tốt", "ngoan"],
    correct: "hiền",
    source: "Bài 2"
  },
  {
    id: 105,
    question: "Tô ............... điểm phấn.",
    options: ["son", "môi", "má"],
    correct: "son",
    source: "Bài 2"
  },
  {
    id: 106,
    question: "Trẻ người .......... dạ.",
    options: ["non", "nhỏ", "yếu"],
    correct: "non",
    source: "Bài 2"
  },
  {
    id: 107,
    question: "Trời quang mây ...................",
    options: ["tạnh", "tan", "bay"],
    correct: "tạnh",
    source: "Bài 2"
  },
  {
    id: 108,
    question: "Vững như kiềng .......... chân.",
    options: ["ba", "hai", "bốn"],
    correct: "ba",
    source: "Bài 2"
  },
  {
    id: 109,
    question: "Bèo dạt ........... trôi.",
    options: ["mây", "nước", "sông"],
    correct: "mây",
    source: "Bài 2"
  },
  {
    id: 110,
    question: "Đứng núi này ................. núi nọ.",
    options: ["trông", "nhìn", "ngắm"],
    correct: "trông",
    source: "Bài 2"
  },
  {
    id: 111,
    question: "Ăn sung ................... sướng.",
    options: ["mặc", "mang", "đội"],
    correct: "mặc",
    source: "Bài 2"
  },
  {
    id: 112,
    question: "Nhìn ............ trông rộng.",
    options: ["xa", "gần", "cao"],
    correct: "xa",
    source: "Bài 2"
  },
  {
    id: 113,
    question: "Nói như ............. đổ đầu vịt.",
    options: ["nước", "mưa", "sông"],
    correct: "nước",
    source: "Bài 2"
  },
  {
    id: 114,
    question: "Trăm công .................. việc.",
    options: ["nghìn", "trăm", "vạn"],
    correct: "nghìn",
    source: "Bài 2"
  },
  {
    id: 115,
    question: "Trẻ cậy cha, già cậy ..............",
    options: ["con", "cháu", "em"],
    correct: "con",
    source: "Bài 2"
  },
  {
    id: 116,
    question: "Kề .......... sát cánh.",
    options: ["vai", "tay", "chân"],
    correct: "vai",
    source: "Bài 2"
  },
  {
    id: 117,
    question: "Mò .......... đáy biển.",
    options: ["kim", "ngọc", "vàng"],
    correct: "kim",
    source: "Bài 2"
  },
  {
    id: 118,
    question: "Một nắng ........... sương.",
    options: ["hai", "ba", "một"],
    correct: "hai",
    source: "Bài 2"
  },
  {
    id: 119,
    question: "Quê .......... đất tổ.",
    options: ["cha", "mẹ", "ông"],
    correct: "cha",
    source: "Bài 2"
  },
  {
    id: 120,
    question: "Thẳng như .............. ngựa.",
    options: ["ruột", "lưng", "chân"],
    correct: "ruột",
    source: "Bài 2"
  },
  {
    id: 121,
    question: "Bách chiến ........... thắng.",
    options: ["bách", "đại", "toàn"],
    correct: "bách",
    source: "Bài 2"
  },
  {
    id: 122,
    question: "Đất lành ............... đậu.",
    options: ["chim", "ong", "bướm"],
    correct: "chim",
    source: "Bài 2"
  },
  {
    id: 123,
    question: "Đầu .............. đuôi chuột.",
    options: ["voi", "trâu", "hổ"],
    correct: "voi",
    source: "Bài 2"
  },
  {
    id: 124,
    question: "Mẹ tròn ............ vuông.",
    options: ["con", "cha", "bé"],
    correct: "con",
    source: "Bài 2"
  },
  {
    id: 125,
    question: "Chân ............. đá mềm.",
    options: ["cứng", "rắn", "chắc"],
    correct: "cứng",
    source: "Bài 2"
  },
  {
    id: 126,
    question: "Trăm ........  không bằng một thấy.",
    options: ["nghe", "nói", "đọc"],
    correct: "nghe",
    source: "Bài 2"
  },
  {
    id: 127,
    question: "Nước chảy ........ mòn.",
    options: ["đá", "sỏi", "đất"],
    correct: "đá",
    source: "Bài 2"
  },
  {
    id: 128,
    question: "Ngựa quen ................. cũ.",
    options: ["đường", "lối", "ngõ"],
    correct: "đường",
    source: "Bài 2"
  },
  {
    id: 129,
    question: "Còn người .......... của.",
    options: ["còn", "mất", "có"],
    correct: "còn",
    source: "Bài 2"
  },
  {
    id: 130,
    question: "Nhà sạch thì ..........., bát sạch ngon cơm.",
    options: ["mát", "đẹp", "vui"],
    correct: "mát",
    source: "Bài 2"
  },
  {
    id: 131,
    question: "Áo rách khéo vá hơn lành vụng ..........",
    options: ["may", "vá", "khâu"],
    correct: "may",
    source: "Bài 2"
  },
  {
    id: 132,
    question: "Thắng làm .......... thua làm giặc.",
    options: ["vua", "quan", "tướng"],
    correct: "vua",
    source: "Bài 2"
  },
  {
    id: 133,
    question: "Ăn quả nhớ kẻ trồng ...........",
    options: ["cây", "quả", "hoa"],
    correct: "cây",
    source: "Bài 2"
  },
  {
    id: 134,
    question: "Ăn cỗ đi trước, lội nước theo .........",
    options: ["sau", "trước", "cùng"],
    correct: "sau",
    source: "Bài 2"
  },
  {
    id: 135,
    question: "Bằng ......... phải lứa.",
    options: ["chằng", "tuổi", "vừa"],
    correct: "chằng",
    source: "Bài 2"
  },
  {
    id: 136,
    question: "Bảy nổi ........... chìm.",
    options: ["ba", "bảy", "tám"],
    correct: "ba",
    source: "Bài 2"
  },
  {
    id: 137,
    question: "Đồng ........ hiệp lực.",
    options: ["tâm", "lòng", "ý"],
    correct: "tâm",
    source: "Bài 2"
  },
  {
    id: 138,
    question: "Lá lành đùm lá .............",
    options: ["rách", "lành", "xanh"],
    correct: "rách",
    source: "Bài 2"
  },
  {
    id: 139,
    question: "Con trâu là đầu ......... nghiệp.",
    options: ["cơ", "sự", "gia"],
    correct: "cơ",
    source: "Bài 2"
  },
  {
    id: 140,
    question: "Đất khách …….. người.",
    options: ["quê", "xứ", "làng"],
    correct: "quê",
    source: "Bài 2"
  },
  {
    id: 141,
    question: "Đồng ........ cộng khổ.",
    options: ["cam", "vui", "chung"],
    correct: "cam",
    source: "Bài 2"
  },
  {
    id: 142,
    question: "Ăn vóc học  ...............",
    options: ["hay", "giỏi", "tốt"],
    correct: "hay",
    source: "Bài 2"
  },
  {
    id: 143,
    question: "Cơm không rau như đau không .......",
    options: ["thuốc", "khỏi", "bác sĩ"],
    correct: "thuốc",
    source: "Bài 2"
  },
  {
    id: 144,
    question: "Không có ........ làm sao có khói.",
    options: ["lửa", "than", "củi"],
    correct: "lửa",
    source: "Bài 2"
  },
  {
    id: 145,
    question: "Tháp mười đẹp nhất bông .............",
    options: ["sen", "súng", "huệ"],
    correct: "sen",
    source: "Bài 2"
  },
  {
    id: 146,
    question: "Nhớ ngày giỗ tổ mồng mười tháng ..........",
    options: ["ba", "tư", "năm"],
    correct: "ba",
    source: "Bài 2"
  },
  {
    id: 147,
    question: "Đi guốc ........... bụng.",
    options: ["trong", "ngoài", "trên"],
    correct: "trong",
    source: "Bài 2"
  },
  {
    id: 148,
    question: "Đổi trắng ......... đen.",
    options: ["thay", "sang", "ra"],
    correct: "thay",
    source: "Bài 2"
  }
];

// BÀI 3: Điền d, gi hay r
export const bai3Questions: Question[] = [
  {
    id: 201,
    question: "Thức khuya ……..ậy sớm.",
    options: ["d", "gi", "r"],
    correct: "d",
    source: "Bài 3"
  },
  {
    id: 202,
    question: "Nụ cười ……….ạng ………ỡ.",
    options: ["r - r", "d - d", "gi - gi"],
    correct: "r - r",
    source: "Bài 3"
  },
  {
    id: 203,
    question: "Ăn mặc ………ản ………ị.",
    options: ["gi - d", "d - gi", "r - r"],
    correct: "gi - d",
    source: "Bài 3"
  },
  {
    id: 204,
    question: "Tre ……….à măng mọc.",
    options: ["gi", "d", "r"],
    correct: "gi",
    source: "Bài 3"
  },
  {
    id: 205,
    question: "Suối chảy ………..óc ………ách.",
    options: ["r - r", "d - d", "gi - gi"],
    correct: "r - r",
    source: "Bài 3"
  },
  {
    id: 206,
    question: "Sức dài vai ……….ộng.",
    options: ["r", "d", "gi"],
    correct: "r",
    source: "Bài 3"
  },
  {
    id: 207,
    question: "Nước mắt chảy ……….àn ……….ụa.",
    options: ["gi - gi", "d - d", "r - r"],
    correct: "gi - gi",
    source: "Bài 3"
  },
  {
    id: 208,
    question: "Khúc nhạc ………..u……….ương.",
    options: ["d - d", "gi - gi", "r - r"],
    correct: "d - d",
    source: "Bài 3"
  },
  {
    id: 209,
    question: "Núi cao sông …………ài.",
    options: ["d", "r", "gi"],
    correct: "d",
    source: "Bài 3"
  },
  {
    id: 210,
    question: "Sức khỏe …..…..ẻo ………ai.",
    options: ["d - d", "r - r", "gi - gi"],
    correct: "d - d",
    source: "Bài 3"
  },
  {
    id: 211,
    question: "Bước chân ………..ộn ……..àng.",
    options: ["r - r", "d - d", "gi - gi"],
    correct: "r - r",
    source: "Bài 3"
  }
];

// BÀI 4: Điền để hoàn thành các câu sau
export const bai4Questions: Question[] = [
  {
    id: 301,
    question: "……….cây làm chẳng nên non, ……….cây chụm lại nên hòn núi cao.",
    options: ["Một - Ba", "Hai - Ba", "Một - Nhiều"],
    correct: "Một - Ba",
    source: "Bài 4"
  },
  {
    id: 302,
    question: "Bầu ơi thương lấy ……….cùng, Tuy rằng khác ……………..nhưng chung một giàn.",
    options: ["bí - giống", "dưa - loại", "mướp - cây"],
    correct: "bí - giống",
    source: "Bài 4"
  },
  {
    id: 303,
    question: "Ăn quả nhớ kẻ ……………………",
    options: ["trồng cây", "hái quả", "vun trồng"],
    correct: "trồng cây",
    source: "Bài 4"
  },
  {
    id: 304,
    question: "Một con ngựa …………cả tàu bỏ …………..",
    options: ["đau - cỏ", "chết - ăn", "ốm - bữa"],
    correct: "đau - cỏ",
    source: "Bài 4"
  },
  {
    id: 305,
    question: "Tốt …………hơn tốt ………….sơn.",
    options: ["gỗ - nước", "lõi - màu", "thật - giả"],
    correct: "gỗ - nước",
    source: "Bài 4"
  },
  {
    id: 306,
    question: "Gần mực thì ……………gần đèn thì …………….",
    options: ["đen - sáng", "đen - rạng", "tối - sáng"],
    correct: "đen - sáng",
    source: "Bài 4"
  },
  {
    id: 307,
    question: "Có …………….mới vực được đạo.",
    options: ["thực", "ăn", "cơm"],
    correct: "thực",
    source: "Bài 4"
  },
  {
    id: 308,
    question: "Ăn trông nồi…………….trông hướng.",
    options: ["ngồi", "đứng", "nằm"],
    correct: "ngồi",
    source: "Bài 4"
  },
  {
    id: 309,
    question: "Đồng ……….hợp lực.",
    options: ["tâm", "lòng", "ý"],
    correct: "tâm",
    source: "Bài 4"
  },
  {
    id: 310,
    question: "Thức ………….dậy ……………",
    options: ["khuya - sớm", "đêm - ngày", "muộn - sớm"],
    correct: "khuya - sớm",
    source: "Bài 4"
  },
  {
    id: 311,
    question: "Trên …………..dưới…………….. ",
    options: ["thuận - hòa", "trên - dưới", "kính - nhường"],
    correct: "thuận - hòa",
    source: "Bài 4"
  },
  {
    id: 312,
    question: "Tre …………măng mọc.",
    options: ["già", "chết", "đổ"],
    correct: "già",
    source: "Bài 4"
  },
  {
    id: 313,
    question: "Năng ………chặt bị.",
    options: ["nhặt", "góp", "lượm"],
    correct: "nhặt",
    source: "Bài 4"
  },
  {
    id: 314,
    question: "Đánh …………bỏ dùi.",
    options: ["trống", "chiêng", "cồng"],
    correct: "trống",
    source: "Bài 4"
  },
  {
    id: 315,
    question: "Nếm ……….. nằm gai.",
    options: ["mật", "đắng", "cay"],
    correct: "mật",
    source: "Bài 4"
  },
  {
    id: 316,
    question: "Nhà …………thì mát, bát ………..ngon cơm.",
    options: ["sạch - sạch", "đẹp - đẹp", "gọn - gọn"],
    correct: "sạch - sạch",
    source: "Bài 4"
  },
  {
    id: 317,
    question: "Giấu ……….hở…………….. ",
    options: ["đầu - đuôi", "trước - sau", "trên - dưới"],
    correct: "đầu - đuôi",
    source: "Bài 4"
  },
  {
    id: 318,
    question: "Trăm hay không bằng…………. quen.",
    options: ["tay", "mắt", "chân"],
    correct: "tay",
    source: "Bài 4"
  },
  {
    id: 319,
    question: "Trông ………. hóa cuốc.",
    options: ["gà", "vịt", "chim"],
    correct: "gà",
    source: "Bài 4"
  },
  {
    id: 320,
    question: "Vụng chèo khéo……………….",
    options: ["chống", "bơi", "lái"],
    correct: "chống",
    source: "Bài 4"
  },
  {
    id: 321,
    question: "Liệu ……….. gắp mắm.",
    options: ["cơm", "ăn", "bát"],
    correct: "cơm",
    source: "Bài 4"
  },
  {
    id: 322,
    question: "Nước ……….. lửa bỏng.",
    options: ["sôi", "nóng", "xôi"],
    correct: "sôi",
    source: "Bài 4"
  }
];

// Phân bổ câu hỏi theo màn chơi
// Màn 1: Bài 1 - 10 câu
// Màn 2: Bài 1 + Bài 2 - 12 câu
// Màn 3: Bài 2 + Bài 4 - 13 câu
// Màn 4: Bài 3 (d / gi / r) - 11 câu
// Màn 5: Trộn cả 4 bài - 15 câu

export interface Stage {
  id: number;
  name: string;
  description: string;
  location: string;
  questions: Question[];
  unlocked: boolean;
  completed: boolean;
}

// Hàm shuffle mảng
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Tạo câu hỏi cho từng màn
export function getStageQuestions(stageId: number): Question[] {
  switch (stageId) {
    case 1:
      // Màn 1: Chỉ dùng Bài 1 - 10 câu
      return shuffleArray(bai1Questions).slice(0, 10);
    case 2:
      // Màn 2: Bài 1 + Bài 2 - 12 câu
      const stage2Pool = [...bai1Questions, ...bai2Questions];
      return shuffleArray(stage2Pool).slice(0, 12);
    case 3:
      // Màn 3: Bài 2 + Bài 4 - 13 câu
      const stage3Pool = [...bai2Questions, ...bai4Questions];
      return shuffleArray(stage3Pool).slice(0, 13);
    case 4:
      // Màn 4: Bài 3 (d / gi / r) - 11 câu (tất cả 11 câu)
      return shuffleArray(bai3Questions);
    case 5:
      // Màn 5: Trộn cả 4 bài - 15 câu
      const stage5Pool = [...bai1Questions, ...bai2Questions, ...bai3Questions, ...bai4Questions];
      return shuffleArray(stage5Pool).slice(0, 15);
    default:
      return [];
  }
}

// Thông tin các màn chơi
export const stagesInfo: Omit<Stage, 'questions'>[] = [
  {
    id: 1,
    name: "Hà Nội",
    description: "Thủ đô ngàn năm văn hiến",
    location: "north",
    unlocked: true,
    completed: false
  },
  {
    id: 2,
    name: "Huế",
    description: "Cố đô thơ mộng",
    location: "central-north",
    unlocked: false,
    completed: false
  },
  {
    id: 3,
    name: "Đà Nẵng",
    description: "Thành phố đáng sống",
    location: "central",
    unlocked: false,
    completed: false
  },
  {
    id: 4,
    name: "Nha Trang",
    description: "Vịnh biển xinh đẹp",
    location: "central-south",
    unlocked: false,
    completed: false
  },
  {
    id: 5,
    name: "Sài Gòn",
    description: "Thành phố sôi động",
    location: "south",
    unlocked: false,
    completed: false
  }
];
