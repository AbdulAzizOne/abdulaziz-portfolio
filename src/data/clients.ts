export interface ClientLogo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** Client logos, one array per marquee row. Row 2 scrolls the other way. */
export const clientRows: ClientLogo[][] = [
  [
    { src: "/assets/img/clients/exalt.v2.webp", width: 408, height: 210, alt: "EXALT Technologies" },
    { src: "/assets/img/clients/millennium.v2.webp", width: 408, height: 210, alt: "Millennium Technology" },
    { src: "/assets/img/clients/progmix.svg", width: 300, height: 160, alt: "ProgmiX" },
    { src: "/assets/img/clients/crpton.svg", width: 300, height: 160, alt: "Crpton" },
    { src: "/assets/img/clients/alard.v2.webp", width: 408, height: 210, alt: "AL'ARD" },
    { src: "/assets/img/clients/sada.v2.webp", width: 408, height: 210, alt: "SADA Intelligence" },
    { src: "/assets/img/clients/palestine-exchange.v2.webp", width: 408, height: 210, alt: "Palestine Exchange" },
    { src: "/assets/img/clients/alrajhi.v2.webp", width: 408, height: 210, alt: "Al Rajhi Bank" },
    { src: "/assets/img/clients/ris.svg", width: 300, height: 160, alt: "RIS Enterprise Solutions" },
    { src: "/assets/img/clients/zenraise.svg", width: 300, height: 160, alt: "ZenRaise" },
  ],
  [
    { src: "/assets/img/clients/fedex.svg", width: 300, height: 160, alt: "FedEx" },
    { src: "/assets/img/clients/padico.v2.webp", width: 408, height: 210, alt: "PADICO Holding" },
    { src: "/assets/img/clients/ichr.svg", width: 300, height: 160, alt: "Independent Commission for Human Rights" },
    { src: "/assets/img/clients/vbooking.svg", width: 300, height: 160, alt: "VBooking" },
    { src: "/assets/img/clients/fastlink.v2.webp", width: 408, height: 210, alt: "Fastlink" },
    { src: "/assets/img/clients/newroz.v2.webp", width: 408, height: 210, alt: "Newroz Telecom" },
    { src: "/assets/img/clients/qetaf.svg", width: 300, height: 160, alt: "Qetaf Medical" },
    { src: "/assets/img/clients/ourverse.svg", width: 300, height: 160, alt: "OurVerse" },
    { src: "/assets/img/clients/arch.svg", width: 300, height: 160, alt: "Arch — digital document archiving system" },
  ],
];
