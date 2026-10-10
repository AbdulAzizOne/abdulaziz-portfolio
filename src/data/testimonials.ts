export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Shown large, above the others. Use for exactly one quote. */
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    featured: true,
    quote: "Abdulaziz is not just a UI/UX designer; he has a unique ability to turn ideas into elegant, intuitive, and meaningful digital experiences.\nHis work stands out through its attention to detail, creative thinking, and deep understanding of how users interact with products.\nSimply put, Abdulaziz designs experiences that people don’t just use — they remember.",
    name: "Tareq Nassif",
    role: "Founder, RIS Enterprise Solutions",
  },
  {
    quote: "Abdulaziz has shown a high level of professionalism accompanied by a deep understanding of his domain. I strongly believe he is a capable designer able to deliver high-quality products.",
    name: "Tareq Maayah",
    role: "CEO, EXALT Technologies",
  },
  {
    quote: "The Crpton dashboard reached a new level of quality thanks to Abdulaziz's UX/UI expertise. His thoughtful design decisions greatly enhanced the overall user experience.",
    name: "Alaa Al-Najjar",
    role: "Founder, Crpton",
  },
  {
    quote: "Based on my long-term experience working with him, I can truly say that his creative touches are always flawless and well-crafted. He is highly professional, exceptionally cooperative, and has never fallen short at any stage. He is deeply knowledgeable in his field and attuned to the latest design trends. I highly recommend working with him.",
    name: "Omrie Abu Madi",
    role: "Founder, VBooking",
  },
  {
    quote: "Great UX/UI design and wireframing. He provided multiple prototypes in Figma and delivered high-fidelity designs for our tablet app, creating the best possible user experience. I highly recommend hiring him and would definitely work with Abdulaziz again.",
    name: "Ameed J.",
    role: "Founder, ZenRaise",
  },
  {
    quote: "Abdulaziz has been doing a great job so far on the UI/UX work for our new website. He understands the direction well, is responsive to feedback, and has been helping translate our ideas into a clearer and more user-friendly website experience. His work shows good attention to structure, visual flow, and overall usability, and we appreciate the progress made so far. Looking forward to seeing the project continue to develop.",
    name: "Ahmad AlNimr",
    role: "Digital Marketing Manager, AL'ARD",
  },
];
