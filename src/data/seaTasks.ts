export interface SeaTask {
  id: number;
  number: string;
  shortTitle: string;
  category: string;
  fullText: string;
  iconName: string;
  colorScheme: {
    primary: string;
    glow: string;
    bgGrad: string;
    border: string;
    badge: string;
    cardBg: string;
  };
}

export const INFOGRAPHIC_META = {
  title: "9 nhiệm vụ quan trọng hướng tới mục tiêu phát triển Việt Nam thành quốc gia biển mạnh",
  lead: "Chính phủ yêu cầu các bộ, cơ quan ngang bộ, Ủy ban nhân dân các tỉnh, thành phố trực thuộc Trung ương chủ động xây dựng kế hoạch, tổ chức thực hiện quyết liệt, đồng bộ, hiệu quả 9 nhiệm vụ sau:",
  citation: "(Theo Nghị quyết số 218/NQ-CP ngày 7-8-2026 về Chương trình hành động của Chính phủ thực hiện Nghị quyết số 20-NQ/TW ngày 28-7-2026 của Hội nghị lần thứ ba, Ban Chấp hành Trung ương Đảng khóa XIV về xây dựng và phát triển Việt Nam trở thành quốc gia biển mạnh)",
  heroImage: "/assets/aistudio/_NH_5_a8584ef6.JPG"
};

export const SEA_TASKS: SeaTask[] = [
  {
    id: 1,
    number: "1-",
    shortTitle: "Đổi mới tư duy & quản trị biển",
    category: "Nhận thức & Thể chế quản trị",
    fullText: "1- Đổi mới tư duy, nâng cao nhận thức về phát triển quốc gia biển mạnh, nâng cao hiệu lực, hiệu quả quản trị biển quốc gia.",
    iconName: "Compass",
    colorScheme: {
      primary: "#0284c7", // Bright Sky Blue
      glow: "rgba(2, 132, 199, 0.5)",
      bgGrad: "from-sky-50 to-cyan-100",
      border: "border-sky-300",
      badge: "bg-sky-100 text-sky-800 border-sky-300",
      cardBg: "bg-white"
    }
  },
  {
    id: 2,
    number: "2-",
    shortTitle: "Hoàn thiện thể chế & quy hoạch không gian biển",
    category: "Quy hoạch không gian biển",
    fullText: "2- Hoàn thiện thể chế, đổi mới công tác quy hoạch không gian biển quốc gia, tạo đột phá phát triển quốc gia biển mạnh.",
    iconName: "Map",
    colorScheme: {
      primary: "#0d9488", // Bright Teal
      glow: "rgba(13, 148, 136, 0.5)",
      bgGrad: "from-teal-50 to-emerald-100",
      border: "border-teal-300",
      badge: "bg-teal-100 text-teal-800 border-teal-300",
      cardBg: "bg-white"
    }
  },
  {
    id: 3,
    number: "3-",
    shortTitle: "Huy động nguồn lực & phát triển doanh nghiệp biển",
    category: "Nguồn lực & Doanh nghiệp",
    fullText: "3- Huy động, phát huy và sử dụng hiệu quả các nguồn lực; phát triển mạnh doanh nghiệp biển, nhất là các tập đoàn, tổng công ty quy mô lớn.",
    iconName: "Building2",
    colorScheme: {
      primary: "#0284c7", // Bright Ocean Blue
      glow: "rgba(2, 132, 199, 0.5)",
      bgGrad: "from-sky-50 to-blue-100",
      border: "border-sky-300",
      badge: "bg-sky-100 text-sky-800 border-sky-300",
      cardBg: "bg-white"
    }
  },
  {
    id: 4,
    number: "4-",
    shortTitle: "Khoa học, đổi mới sáng tạo, chuyển đổi số & nhân lực",
    category: "Khoa học công nghệ & Nhân lực",
    fullText: "4- Phát triển khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số và nguồn nhân lực chất lượng cao.",
    iconName: "Cpu",
    colorScheme: {
      primary: "#4f46e5", // Bright Indigo
      glow: "rgba(79, 70, 229, 0.5)",
      bgGrad: "from-indigo-50 to-blue-100",
      border: "border-indigo-300",
      badge: "bg-indigo-100 text-indigo-800 border-indigo-300",
      cardBg: "bg-white"
    }
  },
  {
    id: 5,
    number: "5-",
    shortTitle: "Đột phá kinh tế biển hiện đại, xanh, thông minh",
    category: "Kinh tế biển xanh",
    fullText: "5- Đột phá phát triển các ngành kinh tế biển hiện đại, xanh, thông minh và các ngành kinh tế biển mới.",
    iconName: "Leaf",
    colorScheme: {
      primary: "#059669", // Bright Emerald
      glow: "rgba(5, 150, 105, 0.5)",
      bgGrad: "from-emerald-50 to-teal-100",
      border: "border-emerald-300",
      badge: "bg-emerald-100 text-emerald-800 border-emerald-300",
      cardBg: "bg-white"
    }
  },
  {
    id: 6,
    number: "6-",
    shortTitle: "Hạ tầng biển đồng bộ & trung tâm kinh tế biển",
    category: "Hạ tầng & Không gian biển",
    fullText: "6- Phát triển đồng bộ hạ tầng biển, mở rộng không gian phát triển quốc gia, hình thành các trung tâm kinh tế biển.",
    iconName: "Anchor",
    colorScheme: {
      primary: "#2563eb", // Royal Sky Blue
      glow: "rgba(37, 99, 235, 0.5)",
      bgGrad: "from-blue-50 to-sky-100",
      border: "border-blue-300",
      badge: "bg-blue-100 text-blue-800 border-blue-300",
      cardBg: "bg-white"
    }
  },
  {
    id: 7,
    number: "7-",
    shortTitle: "Bảo vệ môi trường, hệ sinh thái & ứng phó BĐKH",
    category: "Môi trường & Hệ sinh thái biển",
    fullText: "7- Bảo vệ môi trường, bảo tồn hệ sinh thái biển; chủ động thích ứng với biến đổi khí hậu; nâng cao khả năng chống chịu của các địa phương ven biển, hải đảo.",
    iconName: "Waves",
    colorScheme: {
      primary: "#0891b2", // Bright Marine Cyan
      glow: "rgba(8, 145, 178, 0.5)",
      bgGrad: "from-cyan-50 to-sky-100",
      border: "border-cyan-300",
      badge: "bg-cyan-100 text-cyan-800 border-cyan-300",
      cardBg: "bg-white"
    }
  },
  {
    id: 8,
    number: "8-",
    shortTitle: "Xây dựng văn hóa biển & phát huy sức mạnh cộng đồng",
    category: "Văn hóa biển & Đời sống nhân dân",
    fullText: "8- Xây dựng văn hóa biển, nâng cao đời sống người dân, phát huy sức mạnh cộng đồng cư dân biển trong xây dựng và bảo vệ Tổ quốc.",
    iconName: "Users",
    colorScheme: {
      primary: "#d97706", // Bright Amber Sun
      glow: "rgba(217, 119, 6, 0.5)",
      bgGrad: "from-amber-50 to-orange-100",
      border: "border-amber-300",
      badge: "bg-amber-100 text-amber-800 border-amber-300",
      cardBg: "bg-white"
    }
  },
  {
    id: 9,
    number: "9-",
    shortTitle: "Bảo đảm quốc phòng, an ninh biển & hợp tác quốc tế",
    category: "Quốc phòng an ninh & Vị thế quốc gia",
    fullText: "9- Bảo đảm quốc phòng, an ninh, an toàn trên biển, đảo; tăng cường hội nhập và hợp tác quốc tế, nâng cao vị thế quốc gia.",
    iconName: "Shield",
    colorScheme: {
      primary: "#e11d48", // Bright Crimson Rose
      glow: "rgba(225, 29, 72, 0.5)",
      bgGrad: "from-rose-50 to-red-100",
      border: "border-rose-300",
      badge: "bg-rose-100 text-rose-800 border-rose-300",
      cardBg: "bg-white"
    }
  }
];
