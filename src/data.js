import {
  FaTools,
  FaLightbulb,
  FaHandsHelping,
  FaCheckCircle,
  FaClock,
  FaDraftingCompass,
  FaUserFriends,
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
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  user1,
  user2,
  user3,
  user4,
} from "./assets";

// ─── Navigation ───────────────────────────────────────────────────────────────
export const navigations = [
  { label: "אודותינו", to: "about" },
  { label: "שירותים", to: "services" },
  { label: "פרויקטים", to: "portfolio" },
  { label: "המלצות", to: "testimonials" },
  { label: "צור קשר", to: "contact" },
];

// ─── Hero Key Points ───────────────────────────────────────────────────────────
export const keypoints = [
  { icon: <FaTools />, title: "אומנות מומחית" },
  { icon: <FaRegClock />, title: "בזמן, במסגרת התקציב" },
  { icon: <FaLightbulb />, title: "פתרונות חדשניים" },
  { icon: <FaHandsHelping />, title: "גישה ממוקדת ללקוח" },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────
export const whyChooseUs = [
  {
    title: "איכות ללא תחרות",
    icon: <FaCheckCircle />,
    description: "אומנות מובטחת בכל פרויקט",
  },
  {
    title: "אספקה בזמן",
    icon: <FaClock />,
    description: "פרויקטים שהושלמו על פי לוח הזמנים",
  },
  {
    title: "עיצובים חדשניים",
    icon: <FaDraftingCompass />,
    description: "פתרונות יצירתיים ומודרניים",
  },
  {
    title: "שירות ממוקד לקוח",
    icon: <FaUserFriends />,
    description: "מתן עדיפות לשביעות רצון הלקוח תמיד",
  },
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
    title: "בית מגורים יוקרתי",
    image: portfolio1,
    collections: [portfolio1, portfolio2, portfolio3],
    date: "15 במאי 2023",
    category: "מגורים",
    description:
      "בית 5 חדרים יוקרתי הכולל ארכיטקטורה עכשווית, חלונות רצפה לתקרה ומרחבי מגורים פתוחים. נבנה בחומרים פרמיום וגימורים יוקרתיים ליצירת אווירה מודרנית ומזמינה.",
  },
  {
    title: "בניין משרדים עסקי",
    image: portfolio2,
    collections: [portfolio2, portfolio4, portfolio5],
    date: "30 בנובמבר 2022",
    category: "מסחרי",
    description:
      "בניין משרדים חדשני שתוכנן לטפח חדשנות ושיתוף פעולה. הפרויקט כולל חומרים ידידותיים לסביבה, מרחבי עבודה מרווחים וחדרי ישיבות מתקדמים.",
  },
  {
    title: "קומפלקס קניות",
    image: portfolio3,
    collections: [portfolio3, portfolio1, portfolio6],
    date: "12 ביולי 2024",
    category: "קמעונאות",
    description:
      "קומפלקס קניות רב-קומתי מרהיב המציע חללי מסחר למותגים בינלאומיים. הקומפלקס כולל עיצוב פנים אלגנטי, מדרגות נעות ואזורי המתנה מוזמנים.",
  },
  {
    title: "נופש וספא יוקרתי",
    image: portfolio4,
    collections: [portfolio4, portfolio5, portfolio2],
    date: "1 בפברואר 2023",
    category: "אירוח",
    description:
      "אתר נופש וספא 5 כוכבים בסביבה טבעית עוצרת נשימה. הפרויקט כולל בריכות אינסוף, וילות פרטיות ומרכז בריאות, תוך שימוש בחומרי טבע המשתלבים בסביבה.",
  },
  {
    title: "מגדל דיור עירוני",
    image: portfolio5,
    collections: [portfolio5, portfolio6, portfolio3],
    date: "18 בספטמבר 2023",
    category: "מגורים",
    description:
      "מגדל מגורים עכשווי הכולל למעלה מ-100 דירות מודרניות עם גג טרסה, מרכז כושר ומרפסות פרטיות עם נוף עירוני עוצר נשימה.",
  },
  {
    title: "מתחם תעשייה ולוגיסטיקה",
    image: portfolio6,
    collections: [portfolio6, portfolio1, portfolio4],
    date: "5 במרץ 2022",
    category: "תעשייה",
    description:
      "מחסן תעשייתי בהיקף נרחב שתוכנן לתפעול לוגיסטי יעיל. הפרויקט מציע תקרות גבוהות, רציפי פריקה רחבים ושטחי אחסון מרווחים.",
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials = [
  {
    name: "דוד לוי",
    role: "בעל בית פרטי, רמת גן",
    image: user1,
    rating: 5,
    review:
      "א.מ. יזמות ובנייה כללית בנה לנו את בית החלומות שלנו. הצוות המקצועי ליווה אותנו בכל שלב, עמד בלוח הזמנים ובתקציב שנקבע, והתוצאה הסופית הייתה מעל לכל ציפייה. ממליץ בחום!",
  },
  {
    name: "רחל כהן",
    role: "מנהלת נכסים, תל אביב",
    image: user2,
    rating: 5,
    review:
      "ביצענו שיפוץ מקיף לבניין המסחרי שלנו ותוצאות העבודה היו מדהימות. האיכות, הדייקנות והמקצועיות שהפגינו לא נתקלתי בהם אצל אף קבלן אחר. חברה מהמעלה הראשונה!",
  },
  {
    name: "משה אברהם",
    role: "יזם נדל\"ן, ירושלים",
    image: user3,
    rating: 5,
    review:
      "עבדנו עם עם יזמות על פרויקט של 12 יחידות דיור. הביצוע היה מושלם, הפרויקט הושלם בזמן ובתקציב המתוכנן. ידעו לנהל כל אתגר בצורה מקצועית ויצירתית. שותפות מצוינת.",
  },
  {
    name: "שרה מזרחי",
    role: "בעלת וילה, הרצליה פיתוח",
    image: user4,
    rating: 5,
    review:
      "הפרויקט שלנו כלל תוספת בנייה ועיצוב פנים מחדש לכל הבית. הצוות הגיע בזמן כל יום, עבד בצורה נקייה ומסודרת, והתוצאה הסופית פשוט מדהימה. תודה רבה לכל הצוות!",
  },
];

// ─── Blog ─────────────────────────────────────────────────────────────────────
export const blogs = [
  {
    title: "מגמות בנייה חדשניות לשנת 2025",
    content:
      "גלה את הטרנדים העדכניים ביותר בבנייה לשנת 2025, החל משיטות בנייה בת קיימא ועד לטכנולוגיות מתקדמות שמשנות את התעשייה.",
    image: blog1,
  },
  {
    title: "החשיבות של חומרי בניין ברי קיימא",
    content:
      "למד מדוע שימוש בחומרי בניין ברי קיימא הוא חיוני להגנה על הסביבה וכיצד הוא מועיל הן לפרויקט והן לקהילה.",
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
      { name: "בלוג", href: "#blog" },
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
