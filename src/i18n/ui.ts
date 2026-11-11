/** Site languages. English is the default and lives at the root; Arabic under /ar. */
export type Lang = "en" | "ar";

/** Home page of each language. */
export const homePath: Record<Lang, string> = { en: "/", ar: "/ar" };

/** Text direction of each language. */
export const dir: Record<Lang, "ltr" | "rtl"> = { en: "ltr", ar: "rtl" };

/** Shared interface text: header, footer and the components every page uses. */
export const ui = {
  en: {
    name: "Abdulaziz Abu Dhair",
    homeLabel: "Abdulaziz Abu Dhair — home",
    skipLink: "Skip to content",
    navWork: "Work",
    navAbout: "About",
    navTestimonials: "Testimonials",
    navContact: "Let’s talk",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    /** The link to the other language, written in that language. */
    switchLabel: "العربية",
    switchAria: "اقرأ الموقع بالعربية",
    contact: "Contact",
    email: "Email",
    whatsapp: "WhatsApp",
    linkedin: "LinkedIn",
    upwork: "Upwork",
    behance: "Behance",
    resume: "Resume (PDF)",
    rights: "Abdulaziz Abu Dhair. All rights reserved.",
    backToTop: "Back to top",
    logosPause: "Pause logos",
    logosPlay: "Play logos",
    role: "Role",
    outcome: "Outcome",
    readCase: "Read the case study",
    /** Arrow that points "forward" in the reading direction. */
    arrow: "→",
    testimonialsTitle: "What people say",
    testimonialsSub: "A few words from the people I've had the pleasure of working with.",
  },
  ar: {
    name: "عبدالعزيز أبو ضهير",
    homeLabel: "عبدالعزيز أبو ضهير — الصفحة الرئيسية",
    skipLink: "تخطَّ إلى المحتوى",
    navWork: "أعمالي",
    navAbout: "نبذة عني",
    navTestimonials: "آراء العملاء",
    navContact: "لنتحدث",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    switchLabel: "English",
    switchAria: "Read the site in English",
    contact: "تواصل معي",
    email: "البريد الإلكتروني",
    whatsapp: "واتساب",
    linkedin: "لينكدإن",
    upwork: "Upwork",
    behance: "Behance",
    resume: "السيرة الذاتية (PDF)",
    rights: "عبدالعزيز أبو ضهير. جميع الحقوق محفوظة.",
    backToTop: "العودة إلى الأعلى",
    logosPause: "إيقاف الشعارات",
    logosPlay: "تشغيل الشعارات",
    role: "الدور",
    outcome: "النتيجة",
    readCase: "اقرأ دراسة الحالة (بالإنجليزية)",
    arrow: "←",
    testimonialsTitle: "ماذا يقولون عني",
    testimonialsSub: "كلمات من أشخاص سعدتُ بالعمل معهم، بلغتها الأصلية.",
  },
} as const;

export type UI = (typeof ui)[Lang];
