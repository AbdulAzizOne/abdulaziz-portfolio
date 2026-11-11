export interface ProjectImage {
  src: string;
  srcset: string;
  sizes: string;
  width: number;
  height: number;
  alt: string;
}

export interface Project {
  /** Anchor id on the home page. */
  id: string;
  /** Case-study page slug under /work. */
  page: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  outcome: string;
  /** "wide": one screenshot; "tablets": three portrait screens side by side. */
  layout: "wide" | "tablets";
  images: ProjectImage[];
  /** Arabic card text for /ar; `alts` follow the order of `images`. */
  ar?: {
    eyebrow: string;
    subtitle: string;
    summary: string;
    role: string;
    outcome: string;
    alts: string[];
  };
}

/** Home-page case studies, in display order (numbered 01, 02, … from this order). */
export const projects: Project[] = [
  {
    id: "crpton",
    page: "crpton",
    eyebrow: "Healthcare · Practice Management",
    title: "Crpton",
    subtitle: "Taking a clinic system off the desktop",
    summary: "Rebuilt desktop-bound clinic software as a browser-based web app and companion mobile app — patient records, an interactive tooth chart, treatment plans and billing in one place, reachable from any device.",
    role: "UX/UI Designer, solo end-to-end",
    outcome: "Live and in daily use in real clinics",
    layout: "wide",
    ar: {
      eyebrow: "الرعاية الصحية · إدارة العيادات",
      subtitle: "نقل نظام العيادات من جهاز المكتب إلى أي جهاز",
      summary: "إعادة بناء نظام عيادات كان حبيس أجهزة المكتب ليصبح تطبيق ويب يعمل من المتصفح، مع تطبيق جوال مرافق — سجلات المرضى، ومخطط أسنان تفاعلي، وخطط العلاج، والفواتير في مكان واحد ومن أي جهاز.",
      role: "مصمم UX/UI، المصمم الوحيد من البداية إلى النهاية",
      outcome: "يعمل ويُستخدم يوميًا في عيادات حقيقية",
      alts: ["تطبيق Crpton على الويب: تبويب الحسابات المالية لمريض، ويعرض إجمالي الرسوم والدفعات والتأمين والرصيد."]
    },
    images: [
      {
        src: "/assets/img/crpton-1-1368.webp",
        srcset: "/assets/img/crpton-1-1368.webp 1368w, /assets/img/crpton-1-2736.webp 2736w",
        sizes: "(min-width: 1448px) 790px, (min-width: 961px) 55vw, 94vw",
        width: 2736,
        height: 1778,
        alt: "Crpton web app: a patient's finance tab showing total fees, payments, insurance and balance."
      }
    ]
  },
  {
    id: "zenraise",
    page: "zenraise",
    eyebrow: "Tablet App · Fundraising",
    title: "ZenRaise",
    subtitle: "Turning cash-in-a-box collection into a documented, recurring system",
    summary: "A tablet app any staff member can set up in under a minute — every donation tied to its event, recurring giving front and center, and returning donors recognized by phone number.",
    role: "UX/UI Designer, solo end-to-end",
    outcome: "Live on the App Store, in use at real events",
    layout: "tablets",
    ar: {
      eyebrow: "تطبيق تابلت · جمع التبرعات",
      subtitle: "من صندوق نقود إلى نظام تبرعات موثّق ومتكرر",
      summary: "تطبيق تابلت يستطيع أي موظف إعداده في أقل من دقيقة — كل تبرع مرتبط بفعاليته، والتبرع المتكرر في الواجهة، والمتبرع العائد يُعرف من رقم هاتفه.",
      role: "مصمم UX/UI، المصمم الوحيد من البداية إلى النهاية",
      outcome: "منشور على App Store ويُستخدم في فعاليات حقيقية",
      alts: [
        "شاشة البدء في ZenRaise: اختيار الفعالية، وربط قارئ البطاقات، وبدء جمع التبرعات.",
        "شاشة التبرع: اختيار البرنامج، وتحديد تبرع شهري أو سنوي أو لمرة واحدة، وإدخال رقم الهاتف.",
        "ملخص الفعالية: إجمالي التبرعات موزعًا حسب البرنامج وتكرار التبرع."
      ]
    },
    images: [
      {
        src: "/assets/img/zenraise-1-445.webp",
        srcset: "/assets/img/zenraise-1-445.webp 445w, /assets/img/zenraise-1-891.webp 891w",
        sizes: "(min-width: 1448px) 255px, (min-width: 961px) 18vw, 31vw",
        width: 891,
        height: 1425,
        alt: "ZenRaise onboarding: select your event, pair a card reader, start collecting donations."
      },
      {
        src: "/assets/img/zenraise-3-445.webp",
        srcset: "/assets/img/zenraise-3-445.webp 445w, /assets/img/zenraise-3-891.webp 891w",
        sizes: "(min-width: 1448px) 255px, (min-width: 961px) 18vw, 31vw",
        width: 891,
        height: 1424,
        alt: "ZenRaise donation screen: choose a program, pick monthly, yearly or one-time, and enter a phone number."
      },
      {
        src: "/assets/img/zenraise-6-445.webp",
        srcset: "/assets/img/zenraise-6-445.webp 445w, /assets/img/zenraise-6-890.webp 890w",
        sizes: "(min-width: 1448px) 255px, (min-width: 961px) 18vw, 31vw",
        width: 890,
        height: 1422,
        alt: "ZenRaise event summary: total raised broken down by program and frequency."
      }
    ]
  },
  {
    id: "alard",
    page: "alard",
    eyebrow: "E-commerce · Conversion Redesign",
    title: "AL'ARD",
    subtitle: "Making a beautiful story easy to buy",
    summary: "A conversion-focused redesign of a multi-region store for Palestinian olive oil and heritage goods — calmer homepage, every category one click away, and a product page rebuilt around the fold.",
    role: "UX/UI Designer",
    outcome: "Redesign now live",
    layout: "wide",
    ar: {
      eyebrow: "تجارة إلكترونية · إعادة تصميم لرفع المبيعات",
      subtitle: "قصة جميلة يسهل الشراء منها",
      summary: "إعادة تصميم تركّز على المبيعات لمتجر يبيع زيت الزيتون والمنتجات التراثية الفلسطينية في عدة مناطق — صفحة رئيسية أهدأ، وكل فئة على بُعد نقرة واحدة، وصفحة منتج أُعيد بناؤها حول ما يراه الزائر أولًا.",
      role: "مصمم UX/UI",
      outcome: "التصميم الجديد منشور الآن",
      alts: ["الصفحة الرئيسية لمتجر الأرض بعد إعادة التصميم، لزيت الزيتون والمنتجات التراثية الفلسطينية."]
    },
    images: [
      {
        src: "/assets/img/alard-card-1368.webp",
        srcset: "/assets/img/alard-card-1368.webp 1368w, /assets/img/alard-card-2736.webp 2736w",
        sizes: "(min-width: 1448px) 790px, (min-width: 961px) 55vw, 94vw",
        width: 2736,
        height: 1630,
        alt: "The redesigned AL'ARD homepage for Palestinian olive oil and heritage goods."
      }
    ]
  },
  {
    id: "vbooking",
    page: "vbooking",
    eyebrow: "Travel Tech · B2C + B2B",
    title: "VBooking",
    subtitle: "One travel platform, two sides — travelers and travel agents",
    summary: "A traveler community with AI trip planning and real travel experts, and a workspace for agents that unifies booking, a CRM pipeline and the Ask Genie AI assistant — designed end to end as one system.",
    role: "Lead UX/UI Designer, solo end-to-end",
    outcome: "Both sides live in beta with real travelers and agents",
    layout: "wide",
    ar: {
      eyebrow: "تقنيات السفر · للمسافرين والشركات",
      subtitle: "منصة سفر واحدة بوجهين — للمسافرين ولوكلاء السفر",
      summary: "مجتمع للمسافرين فيه تخطيط للرحلات بالذكاء الاصطناعي وخبراء سفر حقيقيون، ومساحة عمل للوكلاء تجمع الحجز ومسار المبيعات (CRM) ومساعد Ask Genie الذكي — صُمّمت كلها كنظام واحد من البداية إلى النهاية.",
      role: "مصمم UX/UI رئيسي، المصمم الوحيد من البداية إلى النهاية",
      outcome: "الوجهان يعملان بنسخة تجريبية مع مسافرين ووكلاء حقيقيين",
      alts: ["صفحة رحلة في مجتمع VBooking لمغامرة مدتها 7 أيام في طوكيو ومدن اليابان، مع معرض صور والسعر وأزرار الحجز."]
    },
    images: [
      {
        src: "/assets/img/vbooking-1-1368.webp",
        srcset: "/assets/img/vbooking-1-1368.webp 1368w, /assets/img/vbooking-1-2736.webp 2736w",
        sizes: "(min-width: 1448px) 790px, (min-width: 961px) 55vw, 94vw",
        width: 2736,
        height: 1780,
        alt: "VBooking Community trip page for a 7-day Tokyo and Japan city adventure, with photo gallery, price and booking actions."
      }
    ]
  }
];
