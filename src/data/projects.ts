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
  /** Legacy card size from the first redesign pass. The home page now shows
      every project as an alternating media/text row, so this is unused there. */
  homeLayout: "feature" | "card";
  /** CSS var for the home/case-study media tile background. */
  tileBg: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  summary: string;
  /** Home card (Figma v3): the one design decision that defines the product. */
  decision: string;
  role: string;
  outcome: string;
  /** "wide": one screenshot; "tablets": three portrait screens side by side. */
  layout: "wide" | "tablets";
  images: ProjectImage[];
  /** Home-page "Selected work" card media — a distinct crop/set from `images`. */
  cardImages: ProjectImage[];
  /** Arabic card text for /ar; `alts` follow the order of `images`.
      `page`: the case study also exists in Arabic, at /ar/work/<page>. */
  ar?: {
    page?: boolean;
    eyebrow: string;
    subtitle: string;
    summary: string;
    decision: string;
    role: string;
    outcome: string;
    alts: string[];
    cardAlts?: string[];
  };
}

/** Case-study URL in the given language: Arabic when that version exists, else English. */
export const caseHref = (project: Project, lang: "en" | "ar" = "en") =>
  lang === "ar" && project.ar?.page ? `/ar/work/${project.page}` : `/work/${project.page}`;

/** Home-page case studies, in display order (numbered 01, 02, … from this order). */
export const projects: Project[] = [
  {
    id: "radx",
    page: "radx",
    homeLayout: "feature",
    tileBg: "var(--project-radx)",
    eyebrow: "AI Assistant · Mobile App · Live",
    title: "RADX Smart Companion",
    subtitle: "An Arabic assistant that gets things done for you",
    summary: "Redesigned end to end in 5 weeks — an audit, 10 competitors and 40 screens built around one flow: ask, approve, track, get the result.",
    decision: "Nothing happens without you: the assistant shows exactly what it will do, then waits for your approval before it messages or books anything.",
    role: "UX/UI Designer, end-to-end",
    outcome: "Live on iOS & Android",
    layout: "wide",
    ar: {
      page: true,
      eyebrow: "مساعد ذكي · تطبيق جوال · منشور",
      subtitle: "مساعد عربي ينجز المهام نيابةً عنك",
      summary: "أعدت تصميمه بالكامل خلال 5 أسابيع — تدقيق، ودراسة 10 منافسين، و40 شاشة مبنية حول مسار واحد: اطلب، وافق، تابع، واحصل على النتيجة.",
      decision: "لا شيء يحدث من دونك: يعرض المساعد بالضبط ما سيفعله، ثم ينتظر موافقتك قبل أن يرسل أي رسالة أو يحجز أي شيء.",
      role: "مصمم UX/UI، من البداية للنهاية",
      outcome: "يعمل على iOS و Android",
      alts: ["تطبيق RADX: مجموعة شاشات من متجر التطبيقات لمساعد RADX الذكي الناطق بالعربية."],
      cardAlts: ["مجموعة شاشات تطبيق RADX من متجر التطبيقات."]
    },
    images: [
      {
        src: "/assets/img/radx-appstore-set-1400.webp",
        srcset: "/assets/img/radx-appstore-set-700.webp 700w, /assets/img/radx-appstore-set-1400.webp 1400w",
        sizes: "(min-width: 1448px) 790px, (min-width: 961px) 55vw, 94vw",
        width: 1400,
        height: 608,
        alt: "RADX Smart Companion: a set of App Store screenshots for the Arabic-first AI assistant app."
      }
    ],
    cardImages: [
      {
        // The Smart Companion falcon set, from the case study's App Store screenshots.
        src: "/assets/img/radx-cs-appstore-set-1632.webp",
        srcset: "/assets/img/radx-cs-appstore-set-816.webp 816w, /assets/img/radx-cs-appstore-set-1632.webp 1632w",
        sizes: "(min-width: 961px) 640px, 90vw",
        width: 1632,
        height: 710,
        alt: "RADX Smart Companion: a set of App Store screenshots for the Arabic-first AI assistant app."
      }
    ]
  },
  {
    id: "crpton",
    page: "crpton",
    homeLayout: "card",
    tileBg: "var(--project-crpton)",
    eyebrow: "Healthcare · Practice Management",
    title: "Crpton",
    subtitle: "Taking a clinic system off the desktop",
    summary: "Rebuilt desktop-bound clinic software as a browser-based web app and companion mobile app — patient records, an interactive tooth chart, treatment plans and billing in one place.",
    decision: "The tooth chart is the heart of the screen. Treatments, notes and billing all start from a tap on a tooth, which is what makes it a dental system, not a generic CRM.",
    role: "UX/UI Designer, end-to-end",
    outcome: "Live and in daily use in real clinics",
    layout: "wide",
    ar: {
      page: true,
      eyebrow: "الرعاية الصحية · إدارة العيادات",
      subtitle: "نقل نظام العيادات من جهاز المكتب إلى أي جهاز",
      summary: "إعادة بناء نظام عيادات كان حبيس أجهزة المكتب ليصبح تطبيق ويب يعمل من المتصفح، مع تطبيق جوال مرافق — سجلات المرضى، ومخطط أسنان تفاعلي، وخطط العلاج، والفواتير في مكان واحد.",
      decision: "مخطط الأسنان هو قلب الشاشة. العلاجات والملاحظات والفواتير كلها تبدأ بنقرة على سنّ، وهذا ما يجعله نظاماً لعيادات الأسنان لا نظام CRM عاماً.",
      role: "مصمم UX/UI، من البداية للنهاية",
      outcome: "يعمل ويُستخدم يوميًا في عيادات حقيقية",
      alts: ["تطبيق Crpton على الويب: تبويب الحسابات المالية لمريض، ويعرض إجمالي الرسوم والدفعات والتأمين والرصيد."],
      cardAlts: ["مخطط أسنان تفاعلي في تطبيق Crpton لإدارة خطط العلاج."]
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
    ],
    cardImages: [
      {
        src: "/assets/img/crpton-2-850.webp",
        srcset: "/assets/img/crpton-2-850.webp 850w, /assets/img/crpton-2-1701.webp 1701w",
        sizes: "492px",
        width: 1701,
        height: 1104,
        alt: "Crpton web app: an interactive tooth chart for a patient's treatment plan."
      }
    ]
  },
  {
    id: "zenraise",
    page: "zenraise",
    homeLayout: "card",
    tileBg: "var(--project-zenraise)",
    eyebrow: "Tablet App · Fundraising",
    title: "ZenRaise",
    subtitle: "Turning cash-in-a-box collection into a documented, recurring system",
    summary: "A tablet app designed to get staff ready to collect in under a minute — every donation tied to its event, recurring giving front and center, and returning donors recognized by phone number.",
    decision: "Returning donors are recognized by their phone number, so giving again takes seconds and every donation stays tied to its event.",
    role: "UX/UI Designer, end-to-end",
    outcome: "Live on the App Store, in use at real events",
    layout: "tablets",
    ar: {
      page: true,
      eyebrow: "تطبيق تابلت · جمع التبرعات",
      subtitle: "من صندوق نقود إلى نظام تبرعات موثّق ومتكرر",
      summary: "تطبيق تابلت صُمم لتجهيز الموظفين لجمع التبرعات في أقل من دقيقة — كل تبرع مرتبط بفعاليته، والتبرع المتكرر في الواجهة، والمتبرع العائد يُعرف من رقم هاتفه.",
      decision: "يُعرف المتبرعون العائدون من رقم هاتفهم، فيصبح التبرع مرة أخرى مسألة ثوانٍ، ويبقى كل تبرع مرتبطاً بفعاليته.",
      role: "مصمم UX/UI، من البداية للنهاية",
      outcome: "منشور على App Store ويُستخدم في فعاليات حقيقية",
      alts: [
        "شاشة البدء في ZenRaise: اختيار الفعالية، وربط قارئ البطاقات، وبدء جمع التبرعات.",
        "شاشة التبرع: اختيار البرنامج، وتحديد تبرع شهري أو سنوي أو لمرة واحدة، وإدخال رقم الهاتف.",
        "ملخص الفعالية: إجمالي التبرعات موزعًا حسب البرنامج وتكرار التبرع."
      ],
      cardAlts: [
        "شاشة البدء في ZenRaise: اختيار الفعالية وربط قارئ البطاقات.",
        "شاشة التبرع: اختيار البرنامج وتكرار التبرع.",
        "شاشة تأكيد الدفع في ZenRaise."
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
    ],
    cardImages: [
      {
        src: "/assets/img/zenraise-1-445.webp",
        srcset: "/assets/img/zenraise-1-445.webp 445w, /assets/img/zenraise-1-891.webp 891w",
        sizes: "151px",
        width: 891,
        height: 1425,
        alt: "ZenRaise onboarding: select your event and pair a card reader."
      },
      {
        src: "/assets/img/zenraise-3-445.webp",
        srcset: "/assets/img/zenraise-3-445.webp 445w, /assets/img/zenraise-3-891.webp 891w",
        sizes: "179px",
        width: 891,
        height: 1424,
        alt: "ZenRaise donation screen: choose a program and giving frequency."
      },
      {
        src: "/assets/img/zenraise-payment-445.webp",
        srcset: "/assets/img/zenraise-payment-445.webp 445w, /assets/img/zenraise-payment-891.webp 891w",
        sizes: "151px",
        width: 891,
        height: 1424,
        alt: "ZenRaise payment confirmation screen."
      }
    ]
  },
  {
    id: "alard",
    page: "alard",
    homeLayout: "card",
    tileBg: "var(--project-alard)",
    eyebrow: "E-commerce · Conversion Redesign",
    title: "AL'ARD",
    subtitle: "Making a beautiful story easy to buy",
    summary: "A conversion-focused redesign of AL'ARD's US online store for Palestinian olive oil and heritage goods — calmer homepage, every category one click away, and a product page rebuilt around the fold.",
    decision: "Every category is one click away: one clear menu, grouped by need, size and type, replaced digging through nested pages.",
    role: "UX/UI Designer, end-to-end",
    outcome: "Redesign now live",
    layout: "wide",
    ar: {
      page: true,
      eyebrow: "تجارة إلكترونية · إعادة تصميم لرفع المبيعات",
      subtitle: "قصة جميلة يسهل الشراء منها",
      summary: "إعادة تصميم تركّز على المبيعات لمتجر AL'ARD الأمريكي لبيع زيت الزيتون والمنتجات التراثية الفلسطينية — صفحة رئيسية أهدأ، وكل فئة على بُعد نقرة واحدة، وصفحة منتج أُعيد بناؤها حول ما يراه الزائر أولًا.",
      decision: "كل فئة على بُعد نقرة: قائمة واحدة واضحة مقسّمة حسب الاستخدام والحجم والنوع، بدلاً من البحث بين صفحات متداخلة.",
      role: "مصمم UX/UI، من البداية للنهاية",
      outcome: "التصميم الجديد منشور الآن",
      alts: ["الصفحة الرئيسية لمتجر الأرض بعد إعادة التصميم، لزيت الزيتون والمنتجات التراثية الفلسطينية."],
      cardAlts: ["الصفحة الرئيسية لمتجر الأرض بعد إعادة التصميم."]
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
    ],
    cardImages: [
      {
        src: "/assets/img/alard-card-1368.webp",
        srcset: "/assets/img/alard-card-1368.webp 1368w, /assets/img/alard-card-2736.webp 2736w",
        sizes: "510px",
        width: 2736,
        height: 1630,
        alt: "The redesigned AL'ARD homepage for Palestinian olive oil and heritage goods."
      }
    ]
  },
  {
    id: "vbooking",
    page: "vbooking",
    homeLayout: "card",
    tileBg: "var(--project-vbooking)",
    eyebrow: "Travel Tech · B2C + B2B",
    title: "VBooking",
    subtitle: "One travel platform, two sides — travelers and travel agents",
    summary: "A traveler community with AI trip planning and real travel experts, and a workspace for agents that unifies booking, a CRM pipeline and the Ask Genie AI assistant.",
    decision: "One system with two sides: travelers plan with AI and real experts, while agents book, track and follow up in a single workspace.",
    role: "UX/UI Designer, end-to-end",
    outcome: "Both sides live in beta",
    layout: "wide",
    ar: {
      page: true,
      eyebrow: "تقنيات السفر · للمسافرين والشركات",
      subtitle: "منصة سفر واحدة بوجهين — للمسافرين ولوكلاء السفر",
      summary: "مجتمع للمسافرين فيه تخطيط للرحلات بالذكاء الاصطناعي وخبراء سفر حقيقيون، ومساحة عمل للوكلاء تجمع الحجز ومسار المبيعات (CRM) ومساعد Ask Genie الذكي.",
      decision: "نظام واحد بجانبين: يخطط المسافرون رحلاتهم بالذكاء الاصطناعي ومع خبراء حقيقيين، بينما يحجز الوكلاء ويتابعون عملاءهم في مساحة عمل واحدة.",
      role: "مصمم UX/UI، من البداية للنهاية",
      outcome: "الوجهان يعملان بنسخة تجريبية",
      alts: ["صفحة رحلة في مجتمع VBooking لمغامرة مدتها 7 أيام في طوكيو ومدن اليابان، مع معرض صور والسعر وأزرار الحجز."],
      cardAlts: ["لوحة إدارة حجوزات الوكلاء في VBooking.", "صفحة رحلة في مجتمع VBooking للمسافرين."]
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
    ],
    cardImages: [
      {
        src: "/assets/img/turbo-1-1368.webp",
        srcset: "/assets/img/turbo-1-1368.webp 1368w, /assets/img/turbo-1-2736.webp 2736w",
        sizes: "413px",
        width: 2736,
        height: 1780,
        alt: "VBooking's agent-facing Turbo Suite: a CRM pipeline of quotations."
      },
      {
        src: "/assets/img/vbooking-1-1368.webp",
        srcset: "/assets/img/vbooking-1-1368.webp 1368w, /assets/img/vbooking-1-2736.webp 2736w",
        sizes: "413px",
        width: 2736,
        height: 1780,
        alt: "VBooking Community trip page for a 7-day Tokyo and Japan city adventure."
      }
    ]
  }
];
