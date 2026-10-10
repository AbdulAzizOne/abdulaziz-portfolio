export interface ClientLogo {
  src: string;
  width: number;
  height: number;
  alt: string;
}

/** Client logos, one array per marquee row. Row 2 scrolls the other way. */
export const clientRows: ClientLogo[][] = [
  [
    { src: "/assets/img/clients/exalt.webp", width: 408, height: 210, alt: "EXALT Technologies" },
    { src: "/assets/img/clients/millennium.webp", width: 408, height: 210, alt: "Millennium Technology" },
    { src: "/assets/img/clients/progmix.svg", width: 300, height: 160, alt: "ProgmiX" },
    { src: "/assets/img/clients/crpton.svg", width: 300, height: 160, alt: "Crpton" },
    { src: "/assets/img/clients/alard.webp", width: 408, height: 210, alt: "AL'ARD" },
    { src: "/assets/img/clients/sada.webp", width: 408, height: 210, alt: "SADA Intelligence" },
    { src: "/assets/img/clients/palestine-exchange.webp", width: 408, height: 210, alt: "Palestine Exchange" },
    { src: "/assets/img/clients/alrajhi.webp", width: 408, height: 210, alt: "Al Rajhi Bank" },
  ],
  [
    { src: "/assets/img/clients/fedex.svg", width: 300, height: 160, alt: "FedEx" },
    { src: "/assets/img/clients/padico.webp", width: 408, height: 210, alt: "PADICO Holding" },
    { src: "/assets/img/clients/ichr.svg", width: 300, height: 160, alt: "Independent Commission for Human Rights" },
    { src: "/assets/img/clients/vbooking.svg", width: 300, height: 160, alt: "VBooking" },
    { src: "/assets/img/clients/fastlink.webp", width: 408, height: 210, alt: "Fastlink" },
    { src: "/assets/img/clients/newroz.webp", width: 408, height: 210, alt: "Newroz Telecom" },
    { src: "/assets/img/clients/qetaf.svg", width: 300, height: 160, alt: "Qetaf Medical" },
    { src: "/assets/img/clients/ourverse.svg", width: 300, height: 160, alt: "OurVerse" },
  ],
];
