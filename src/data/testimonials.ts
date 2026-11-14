export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Shown large on its own; `highlight` is a sentence of the quote set in gold. */
  featured?: boolean;
  highlight?: string;
  /** Arabic translation for /ar pages. */
  ar?: { name: string; quote: string; role: string; highlight?: string };
}

export const testimonials: Testimonial[] = [
  {
    quote: "Abdulaziz has shown a high level of professionalism accompanied by a deep understanding of his domain. I strongly believe he is a capable designer able to deliver high-quality products.",
    name: "Tareq Maayah",
    role: "CEO, EXALT Technologies",
    ar: {
      name: "طارق معايعة",
      quote: "أظهر عبدالعزيز مستوى عاليًا من الاحترافية، مصحوبًا بفهم عميق لمجاله. وأؤمن تمامًا بأنه مصمم كفء قادر على تقديم منتجات عالية الجودة.",
      role: "الرئيس التنفيذي، EXALT Technologies",
    },
  },
  {
    quote: "The Crpton dashboard reached a new level of quality thanks to Abdulaziz's UX/UI expertise. His thoughtful design decisions greatly enhanced the overall user experience.",
    name: "Alaa Al-Najjar",
    role: "Founder, Crpton",
    ar: {
      name: "علاء النجار",
      quote: "وصلت لوحة تحكم Crpton إلى مستوى جديد من الجودة بفضل خبرة عبدالعزيز في UX/UI، فقد عزّزت قراراته التصميمية المدروسة تجربة المستخدم بشكل كبير.",
      role: "مؤسس Crpton",
    },
  },
  {
    quote: "Abdulaziz is not just a UI/UX designer; he has a unique ability to turn ideas into elegant, intuitive, and meaningful digital experiences.\nHis work stands out through its attention to detail, creative thinking, and deep understanding of how users interact with products.\nSimply put, Abdulaziz designs experiences that people don’t just use — they remember.",
    name: "Tareq Nassif",
    role: "Founder, RIS Enterprise Solutions",
    featured: true,
    highlight: "Simply put, Abdulaziz designs experiences that people don’t just use — they remember.",
    ar: {
      highlight: "باختصار، يصمم عبدالعزيز تجارب لا يكتفي الناس باستخدامها — بل يتذكرونها.",
      name: "طارق ناصيف",
      quote: "عبدالعزيز ليس مجرد مصمم UI/UX؛ فلديه قدرة فريدة على تحويل الأفكار إلى تجارب رقمية أنيقة وسهلة الاستخدام وذات معنى. يتميز عمله بالاهتمام بالتفاصيل، والتفكير الإبداعي، والفهم العميق لطريقة تفاعل المستخدمين مع المنتجات. باختصار، يصمم عبدالعزيز تجارب لا يكتفي الناس باستخدامها — بل يتذكرونها.",
      role: "مؤسس RIS Enterprise Solutions",
    },
  },
  {
    quote: "Based on my long-term experience working with him, I can truly say that his creative touches are always flawless and well-crafted. He is highly professional, exceptionally cooperative, and has never fallen short at any stage. He is deeply knowledgeable in his field and attuned to the latest design trends. I highly recommend working with him.",
    name: "Omrie Abu Madi",
    role: "Founder, VBooking",
    ar: {
      name: "عمري أبو ماضي",
      quote: "من خلال تجربتي الطويلة في العمل معه، أستطيع القول بصدق إن لمساته الإبداعية دائمًا متقنة ومدروسة بعناية. هو محترف للغاية، ومتعاون بشكل استثنائي، ولم يقصّر في أي مرحلة. يمتلك معرفة عميقة بمجاله، ويواكب أحدث اتجاهات التصميم. أنصح بشدة بالعمل معه.",
      role: "مؤسس VBooking",
    },
  },
  {
    quote: "Great UX/UI design and wireframing. He provided multiple prototypes in Figma and delivered high-fidelity designs for our tablet app, creating the best possible user experience. I highly recommend hiring him and would definitely work with Abdulaziz again.",
    name: "Ameed J.",
    role: "Founder, ZenRaise",
    ar: {
      name: "عميد ج.",
      quote: "تصميم UX/UI وإطارات أولية رائعة. قدّم عدة نماذج أولية في Figma، وسلّم تصاميم عالية الدقة لتطبيقنا على التابلت، بأفضل تجربة مستخدم ممكنة. أنصح بشدة بالتعاقد معه، وسأعمل مع عبدالعزيز مجددًا بالتأكيد.",
      role: "مؤسس ZenRaise",
    },
  },
  {
    quote: "Abdulaziz has been doing a great job so far on the UI/UX work for our new website. He understands the direction well, is responsive to feedback, and has been helping translate our ideas into a clearer and more user-friendly website experience. His work shows good attention to structure, visual flow, and overall usability, and we appreciate the progress made so far. Looking forward to seeing the project continue to develop.",
    name: "Ahmad AlNimr",
    role: "Digital Marketing Manager, AL'ARD",
    ar: {
      name: "أحمد النمر",
      quote: "يقوم عبدالعزيز بعمل رائع حتى الآن في تصميم UI/UX لموقعنا الجديد. فهو يفهم التوجه جيدًا، ويتجاوب مع الملاحظات، ويساعدنا على تحويل أفكارنا إلى تجربة موقع أوضح وأسهل في الاستخدام. يُظهر عمله اهتمامًا جيدًا بالبنية والتسلسل البصري وسهولة الاستخدام عمومًا، ونحن نقدّر التقدم الذي تحقق حتى الآن، ونتطلع إلى أن نرى المشروع يواصل تطوره.",
      role: "مدير التسويق الرقمي، AL'ARD",
    },
  },
  {
    quote: "Abdulaziz redesigned the RADX app end to end. He quickly understood our vision and turned it into a clear Arabic-first experience that makes users trust an assistant acting on their behalf. He met every deadline and backed each decision with a reason, which made approvals fast. I highly recommend working with him.",
    name: "Mansour Marzouk",
    role: "Founder, RADX",
    ar: {
      name: "منصور مرزوق",
      quote: "أعاد عبدالعزيز تصميم تطبيق RADX من البداية إلى النهاية. فهم رؤيتنا بسرعة، وحوّلها إلى تجربة واضحة تضع العربية أولًا، وتجعل المستخدمين يثقون بمساعد يتصرف نيابةً عنهم. التزم بكل المواعيد، ودعم كل قرار بسبب واضح، ما جعل الموافقات سريعة. أنصح بشدة بالعمل معه.",
      role: "مؤسس RADX",
    },
  },
];
