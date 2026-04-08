import {
  FaTools,
  FaLightbulb,
  FaHandsHelping,
  FaFacebook,
  FaInstagram,
  FaHome,
  FaBuilding,
  FaHardHat,
} from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import {
  blog1,
  blog2,
  rishon01, rishon02, rishon04,
  rishon06, rishon07, rishon09,
  rishon11, rishon12, rishon13, rishon14, rishon15,
  rishon16, rishon17, rishon18, rishon19, rishon20,
  rishon21, rishon22, rishon23,
  lod01, lod02, lod03, lod04, lod05, lod06, lod07,
  lod09, lod10, lod11, lod12, lod13, lod14, lod15,
  lod16, lod17, lod18, lod19, lod20, lod21, lod22,
  lod23, lod24, lod25, lod26, lod27, lod28,
  rehovot01, rehovot02, rehovot03, rehovot04, rehovot05, rehovot06,
  rishon2_01, rishon2_02, rishon2_03, rishon2_04, rishon2_05, rishon2_06,
} from "./assets";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navigations = [
  { label: "אודותינו", to: "about" },
  { label: "שירותים", to: "services" },
  { label: "פרויקטים", to: "portfolio" },
  { label: "צור קשר", to: "contact" },
];

// ─── Hero Key Points ───────────────────────────────────────────────────────────
export const keypoints = [
  { icon: <FaTools />, title: "אומנות מומחית" },
  { icon: <FaRegClock />, title: "בזמן, במסגרת התקציב" },
  { icon: <FaLightbulb />, title: "פתרונות חדשניים" },
  { icon: <FaHandsHelping />, title: "גישה ממוקדת ללקוח" },
];

// ─── Services ─────────────────────────────────────────────────────────────────
export const services = [
  {
    title: "בנייה למגורים",
    icon: <FaHome />,
    description:
      "בניית בתים פרטיים, וילות ומגדלי דיור מודרניים באיכות פרמיום, המותאמים לחזון ולצרכים האישיים של כל לקוח.",
  },
  {
    title: "פרויקטים מסחריים",
    icon: <FaBuilding />,
    description:
      "תכנון וביצוע של בניינים מסחריים, בתי עסק ומרכזי קניות חדשניים, תוך שימוש בפתרונות עיצוב מתקדמים.",
  },
  {
    title: "שיפוץ ותוספות בנייה",
    icon: <FaHardHat />,
    description:
      "שיפוץ מקיף ושדרוג נכסים קיימים, הרחבות ותוספות בנייה, שדרוג חללים פנימיים וחיצוניים לרמה יוקרתית.",
  },
];

// ─── Portfolio ────────────────────────────────────────────────────────────────
export const portfolio = [
  {
    title: "פרויקט מגורים — ראשון לציון",
    address: "שדרות יעקב 58, ראשון לציון",
    image: rishon09,
    collections: [
      rishon09, rishon01, rishon02, rishon04,
      rishon06, rishon07,
      rishon11, rishon12, rishon13, rishon14, rishon15,
      rishon16, rishon17, rishon18, rishon19, rishon20,
      rishon21, rishon22, rishon23,
      "/videos/rishon_v1.mov",
      "/videos/rishon_v2.mov",
    ],
    date: "22 במאי 2022",
    category: "מגורים",
    description:
      "פרויקט בנייה למגורים ברחוב שדרות יעקב 58, ראשון לציון. הפרויקט כולל עבודות בנייה, שיפוץ וגימור ברמה גבוהה, תוך שימוש בחומרים איכותיים ותשומת לב לפרטים הקטנים.",
  },
  {
    title: "פרוייקט מגורים — לוד",
    address: "הרב חיים חורי 1, לוד",
    image: lod01,
    collections: [
      lod01, lod02, lod03, lod04, lod05, lod06, lod07,
      lod09, lod10, lod11, lod12, lod13, lod14, lod15,
      lod16, lod17, lod18, lod19, lod20, lod21, lod22,
      lod23, lod24, lod25, lod26, lod27, lod28,
    ],
    date: "6 ביולי 2022",
    category: "מגורים",
    description:
      "פרויקט בנייה למגורים ברחוב הרב חיים חורי 1, לוד. הפרויקט כולל עבודות בנייה, שיפוץ וגימור ברמה גבוהה, תוך שימוש בחומרים איכותיים ותשומת לב לפרטים הקטנים.",
  },
  {
    title: "בית מגורים — רחובות",
    address: "מרגולין 21, רחובות",
    image: rehovot01,
    collections: [
      rehovot01, rehovot02, rehovot03, rehovot04, rehovot05, rehovot06,
      "/videos/rehovot/rehovot_v1.mov",
      "/videos/rehovot/rehovot_v2.mov",
      "/videos/rehovot/rehovot_v3.mov",
      "/videos/rehovot/rehovot_v4.mov",
      "/videos/rehovot/rehovot_v5.mov",
      "/videos/rehovot/rehovot_v6.mov",
    ],
    date: "2 באוגוסט 2024",
    category: "מגורים",
    description:
      "פרויקט בנייה למגורים ברחוב מרגולין 21, רחובות. הפרויקט כולל עבודות בנייה, שיפוץ וגימור ברמה גבוהה, תוך שימוש בחומרים איכותיים ותשומת לב לפרטים הקטנים.",
  },
  {
    title: "פרוייקט מגורים — ראשון לציון",
    address: "קצרין 6, ראשון לציון",
    image: rishon2_01,
    collections: [
      rishon2_01, rishon2_02, rishon2_03, rishon2_04, rishon2_05, rishon2_06,
      "/videos/rishon2/rishon2_v1.mov",
      "/videos/rishon2/rishon2_v2.mp4",
      "/videos/rishon2/rishon2_v3.mov",
      "/videos/rishon2/rishon2_v4.mov",
      "/videos/rishon2/rishon2_v5.mov",
      "/videos/rishon2/rishon2_v6.mp4",
      "/videos/rishon2/rishon2_v7.mov",
    ],
    date: "31 במרץ 2024",
    category: "מגורים",
    description:
      "פרויקט בנייה למגורים ברחוב קצרין 6, ראשון לציון. הפרויקט כולל עבודות בנייה, שיפוץ וגימור ברמה גבוהה, תוך שימוש בחומרים איכותיים ותשומת לב לפרטים הקטנים.",
  },

];

// ─── Blog ─────────────────────────────────────────────────────────────────────
export const blogs = [
  {
    title: "המומחיות שלנו, ההצלחה שלך: שותפות מלאה לניהול פרויקט בנייה אפקטיבי",
    content:
      "ב'ע.מ יזמות כללית' אנחנו לוקחים על עצמנו את כאבי הראש של הניהול, כדי שתוכלו ליהנות משקט נפשי ופרויקט בנייה מוצלח — בזמן, בתקציב ובאיכות שאתם מצפים לה.",
    image: blog1,
  },
  {
    title: "דיוק הנדסי לתוצאות מושלמות",
    content:
      "מדידות קפדניות ומדויקות באתר הבנייה הן הבסיס להצלחת הפרויקט. הדיוק הזה הוא היסוד עליו בנויה האמינות שלנו — מבטיח איכות, בטיחות ואמון הלקוח.",
    image: blog2,
  },
];

// ─── Footer Links ─────────────────────────────────────────────────────────────
export const footer = [
  {
    title: "החברה",
    routes: [
      { name: "אודותינו", href: "#about" },
      { name: "קריירה", href: "#" },
      { name: "צור קשר", href: "#contact" },
    ],
  },
  {
    title: "שירותים",
    routes: [
      { name: "בנייה למגורים", href: "#services" },
      { name: "פרויקטים מסחריים", href: "#services" },
      { name: "שיפוץ ותוספות בנייה", href: "#services" },
      { name: "ניהול פרויקטים", href: "#services" },
    ],
  },
  {
    title: "משאבים",
    routes: [
      { name: "מקרי בוחן", href: "#portfolio" },
      { name: "שאלות נפוצות", href: "#" },
      { name: "מדיניות פרטיות", href: "#" },
    ],
  },
];

// ─── Social Media ─────────────────────────────────────────────────────────────
export const socialHandles = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com",
  },
];
