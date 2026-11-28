export interface ClientLogo {
  /** File stem in /assets/img/clients/v3: `<file>.webp` (light) and `<file>-dark.webp` (dark). */
  file: string;
  alt: string;
  /** Display size in CSS px (the files are exported from Figma at 2x). */
  width: number;
  height: number;
  /** Dark file's display size, when the Figma export differs from the light one. */
  darkWidth?: number;
}

/** Client logos (Figma: Homepage — Final v3, "Logos — marquee"), one array per
    row; row 2 scrolls the other way. Each file is the Figma "Client Logo"
    instance exported at 2x with the page colour baked in (light: #f7f6f2,
    dark: #0e1411), so it sits on the page background without a visible box. */
export const clientRows: ClientLogo[][] = [
  [
    { file: "fedex", alt: "FedEx", width: 128, height: 74 },
    { file: "alrajhi", alt: "Al Rajhi Bank", width: 150, height: 87 },
    { file: "palestine-exchange", alt: "Palestine Exchange", width: 163.5, height: 87 },
    { file: "padico", alt: "PADICO Holding", width: 150, height: 87 },
    { file: "millennium", alt: "Millennium Technology", width: 150, height: 87 },
    { file: "newroz", alt: "Newroz Telecom", width: 120, height: 70 },
    { file: "exalt", alt: "EXALT Technologies", width: 150, height: 87 },
    { file: "sada", alt: "SADA Intelligence", width: 150, height: 87 },
    { file: "ichr", alt: "Independent Commission for Human Rights", width: 150, height: 87 },
    { file: "fastlink", alt: "Fastlink", width: 150, height: 87 },
  ],
  [
    { file: "zenraise", alt: "ZenRaise", width: 150, height: 87 },
    { file: "qetaf", alt: "Qetaf Medical", width: 150, height: 87 },
    { file: "vbooking", alt: "VBooking", width: 150, height: 87 },
    { file: "ris", alt: "RIS Enterprise Solutions", width: 150, height: 87 },
    { file: "radx-2026", alt: "RADX", width: 150, height: 87 },
    { file: "crpton", alt: "Crpton", width: 150, height: 87 },
    { file: "progmix", alt: "ProgmiX", width: 150, height: 87 },
    { file: "alard", alt: "AL'ARD", width: 150, height: 87 },
    { file: "ourverse", alt: "OurVerse", width: 150, height: 87 },
    { file: "arch", alt: "ARCH digital archiving system", width: 150, height: 87 },
  ],
];
