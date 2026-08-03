import type { Locale } from "./types";

type Messages = {
  nav: {
    about: string;
    lately: string;
    skills: string;
    projects: string;
    contact: string;
    aria: string;
    themeToLight: string;
    themeToDark: string;
  };
  intro: {
    role: string;
    tagline: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    p5Before: string;
    cvLink: string;
  };
  lately: {
    title: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  skills: {
    title: string;
  };
  projects: {
    title: string;
    subtitle: string;
    responsibilities: string;
    visitSite: string;
    items: {
      id: string;
      name: string;
      role: string;
      description: string;
      responsibilities: string[];
    }[];
  };
  showcase: {
    professionalTitle: string;
    professionalSubtitle: string;
    personalTitle: string;
    personalSubtitle: string;
    professional: {
      id: string;
      title: string;
      company?: string;
      description: string;
    }[];
    personal: {
      id: string;
      title: string;
      company?: string;
      description: string;
    }[];
  };
  ico: {
    title: string;
    subtitle: string;
    viewLarger: string;
    close: string;
    items: { id: string; name: string; description: string }[];
  };
  contact: {
    title: string;
    linkedin: string;
    github: string;
    stackoverflow: string;
    email: string;
    cta: string;
  };
  footer: {
    email: string;
  };
  notFound: {
    title: string;
    message: string;
    home: string;
  };
};

const en: Messages = {
  nav: {
    about: "About",
    lately: "Lately",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    aria: "Primary",
    themeToLight: "Switch to light mode",
    themeToDark: "Switch to dark mode",
  },
  intro: {
    role: "Senior Software Developer",
    tagline: "React · JavaScript · Vue · Angular",
  },
  about: {
    title: "Bio",
    p1: "I’m an Indian developer who recently moved to Germany. I’ve always enjoyed programming, and I’m dedicated to writing clean, efficient code that not only solves problems but also stands the test of time.",
    p2: "Beyond coding, I love to travel, read, and immerse myself in the tech community. Whether it's attending meet-ups or staying current with the latest trends at conferences, I’m constantly learning and evolving. Weekends are often spent with friends, enjoying coffee, exploring new places, or diving into the latest tech advancements.",
    p3: "I also have a special place in my heart for kids and believe that tech can play a big role in education and social impact. It's incredible how, even from the comfort of our own homes, we as developers can contribute to creating a positive difference in society.",
    p4: "I feel truly fortunate to be part of a community that is not only passionate about technology but also focused on making meaningful contributions to the world. I’m excited to continue learning and growing while striving to make a lasting impact.",
    p5Before: "If you’d like to learn more about my professional journey, feel free to check out my",
    cvLink: "CV on LinkedIn →",
  },
  lately: {
    title: "What I am upto lately?",
    intro:
      "I enjoy coding in my free time. Whether it's taking online courses, taking freelance work to better understand the industry, or attending conferences, I'm always looking for ways to learn and improve.",
    items: [
      {
        title: "Ongoing Learning & Courses",
        description:
          "I'm currently taking a Udemy course on Microfrontend Architecture to strengthen my skills in building scalable, modular frontend apps.",
      },
      {
        title: "Languages",
        description:
          "I am fluent in English and Hindi, my mother tongue, and I am also fluent in German at the B1/B2 level. I would love to learn Arabic in the future.",
      },
    ],
  },
  skills: {
    title: "Core skills",
  },
  projects: {
    title: "Projects",
    subtitle:
      "A curated selection of production applications I’ve built and contributed to throughout my career.",
    responsibilities: "Key responsibilities",
    visitSite: "Visit site →",
    items: [
      {
        id: "pro-traders",
        name: "Pro Traders Fund",
        role: "Frontend Developer",
        description:
          "A proprietary trading firm platform offering instant funding to traders with evaluation challenges, profit tracking, and up to 90% profit sharing.",
        responsibilities: [
          "Developed the trader evaluation dashboard with real-time profit/loss tracking and analytics",
          "Built account management features including payout processing and challenge progress tracking",
          "Created responsive landing pages with dynamic testimonial sections and conversion-optimized CTAs",
          "Integrated third-party trading APIs for live account monitoring and trade history display",
        ],
      },
      {
        id: "btc-proxy",
        name: "BTC Proxy",
        role: "Full Stack Developer",
        description:
          "A Bitcoin staking and AI-leveraged yield protocol enabling users to earn yield on their BTC holdings through smart contract interactions.",
        responsibilities: [
          "Developed the DApp interface for Bitcoin staking, unstaking, and yield tracking",
          "Integrated Web3 wallet connections (MetaMask, WalletConnect) and smart contract interactions",
          "Built the Alpha BTC yield dashboard displaying real-time APY, staking metrics, and portfolio performance",
          "Created marketing landing pages that helped establish trust with major global crypto brands",
        ],
      },
      {
        id: "energy",
        name: "Energy Industry Client",
        role: "Senior Software Developer",
        description:
          "Corporate website for a major global leader in chemistry and technology solutions for the energy industry.",
        responsibilities: [
          "Built easy charts to track past data, alarms, and oil well downtime, plus tables you can drag, sort, and resize",
          "Eliminated 60%–70% of high/medium Checkmarx security risks for the app",
          "Optimized charting libraries, cutting usage from 1GB to 300–400MB for large data sets",
          "Reduced technical debt by 10% by simplifying complex data API calls",
          "Mentored juniors and collaborated with design and backend team members",
        ],
      },
      {
        id: "pbm",
        name: "Pharmacy Benefit Manager Platform",
        role: "Senior Frontend Developer",
        description:
          "A Pharmacy Benefit Manager (PBM) platform revolutionizing Rx solutions for health systems, employers, and PBMs with modular enterprise tools.",
        responsibilities: [
          "Developed modular UI components for the Enterprise platform serving PBMs, health systems, and employers",
          "Built interactive analytics dashboards and case study pages with data visualization",
          "Ensured HIPAA-aware frontend practices and accessibility standards (WCAG 2.1 AA) compliance",
          "Collaborated with backend teams to integrate complex prescription and benefits data flows",
        ],
      },
      {
        id: "bitcron",
        name: "BitCron",
        role: "Full Stack Developer",
        description:
          "Founded in 2018, BitCron is a multi-cryptocurrency wallet platform that allows users to securely store, send, and receive digital assets. The platform supports 50+ cryptocurrencies and provides a seamless wallet experience with real-time transaction tracking and secure asset management.",
        responsibilities: [
          "Developed the web dashboard for the BitCron multi-cryptocurrency wallet using Vue.js",
          "Implemented wallet management features including balance tracking, transaction history, and secure send/receive flows",
          "Integrated real-time blockchain transaction updates and notifications using WebSocket services",
          "Built responsive UI components for managing and monitoring over 50 supported cryptocurrencies",
        ],
      },
      {
        id: "ecommerce",
        name: "E-commerce Platforms",
        role: "Frontend Developer",
        description:
          "Developed and customized multiple e-commerce websites for clients including M2 Apparel and Hoffner using OpenCart and Shopify. These platforms enabled businesses to sell clothing and household utensils online with responsive storefronts, product catalogs, and secure checkout systems.",
        responsibilities: [
          "Built and customized OpenCart and Shopify storefronts for client e-commerce businesses",
          "Developed responsive product listing, product detail, and checkout pages",
          "Integrated payment gateways, shipping modules, and order management systems",
          "Implemented product catalog management, filtering, and SEO-friendly page structures",
        ],
      },
      {
        id: "thread",
        name: "Thread Research",
        role: "Senior Frontend Developer",
        description:
          "Thread Research is a clinical research platform that connects participants with medical studies and trials. The platform streamlines participant onboarding, eligibility screening, and study engagement through secure digital workflows.",
        responsibilities: [
          "Developed the participant-facing web application for clinical trial enrollment and study participation using Vue.js",
          "Implemented participant profile management, eligibility questionnaires, and onboarding workflows",
          "Built dashboards for participants to track study progress, appointments, and study communications",
          "Integrated REST APIs for participant data, consent forms, and study updates",
        ],
      },
      {
        id: "uniswap",
        name: "Uniswap Clone",
        role: "Frontend Developer (Web3)",
        description:
          "A decentralized exchange interface inspired by Uniswap enabling token swaps and liquidity pool tracking using blockchain data.",
        responsibilities: [
          "Redesigned the application UI to improve usability and trading workflow",
          "Integrated The Graph to fetch real-time liquidity pool and token data from subgraphs",
          "Displayed pool values, token prices, and trading metrics within the dashboard",
          "Optimized state management using Redux for scalable data handling",
        ],
      },
    ],
  },
  showcase: {
    professionalTitle: "Projects",
    professionalSubtitle: "→ some more of the professional kind",
    personalTitle: "Projects",
    personalSubtitle: "→ of the personal kind",
    professional: [
      {
        id: "oil-well",
        title: "Oil Well Analytics Dashboard",
        description:
          "Built responsive dashboards with interactive charts to track alarms, downtime, and historical oil well data. Cut memory usage from 1GB to under 400MB and eliminated 80% of security vulnerabilities.",
      },
      {
        id: "admin-trading",
        title: "Admin & Trading Platform",
        company: "Orangebits Software Technologies",
        description:
          "Led development of an admin dashboard managing 10,000+ users and tracking over 1 million trades in real-time. Standardized UI components and reduced build times by 10%.",
      },
      {
        id: "crypto-trading",
        title: "Crypto Trading & ICO Platform",
        company: "Crontech LLC",
        description:
          "One of the first five engineers — built crypto trading apps with real-time WebSocket updates for 1M+ live connections. Designed secure KYC/payment flows with light/dark theme support.",
      },
    ],
    personal: [
      {
        id: "portfolio",
        title: "Personal Portfolio Website",
        description:
          "Built this portfolio site to explore microfrontends, with plans to integrate Angular and Vue as part of a microfrontend architecture course.",
      },
      {
        id: "freelance",
        title: "Freelance Development",
        company: "Fiverr & Upwork",
        description:
          "Worked as a freelance web developer on Fiverr and Upwork, earning the Top Rated Seller badge on Fiverr & Upwork by consistently delivering high-quality, responsive web applications using React and Angular. Successfully collaborated with clients worldwide, delivering clean, maintainable code with quick turnaround times. During the COVID-19 pandemic, also helped friends set up and optimize their Upwork profiles, wrote and submitted job proposals on their behalf, and supported them in securing remote freelance opportunities.",
      },
      {
        id: "punekar",
        title: "Being Punekar",
        company: "Co-founder | 9M+ Followers",
        description:
          "Co-founded a social media brand on Facebook & Instagram celebrating Pune's culture, food, and city life, growing to over 9 million followers.",
      },
    ],
  },
  ico: {
    title: "ICO Platforms",
    subtitle: "Crypto ICO platforms I built back in 2018",
    viewLarger: "View larger image of {name}",
    close: "Close",
    items: [
      {
        id: "skyf",
        name: "SKYFchain",
        description:
          "Blockchain-based operating platform for cargo robotics — ICO token sale dashboard with multi-language support",
      },
      {
        id: "worldbet",
        name: "WorldBet",
        description:
          "Blockchain-based betting platform with cryptocurrency payments and real-time sports event betting",
      },
    ],
  },
  contact: {
    title: "Contact",
    linkedin: "LinkedIn",
    github: "GitHub",
    stackoverflow: "Stack Overflow",
    email: "Email",
    cta: "View LinkedIn Profile",
  },
  footer: {
    email: "Email",
  },
  notFound: {
    title: "404",
    message: "Page not found",
    home: "Return to Home →",
  },
};

const de: Messages = {
  nav: {
    about: "Über mich",
    lately: "Aktuell",
    skills: "Skills",
    projects: "Projekte",
    contact: "Kontakt",
    aria: "Hauptnavigation",
    themeToLight: "Zum hellen Modus wechseln",
    themeToDark: "Zum dunklen Modus wechseln",
  },
  intro: {
    role: "Senior Software Developer",
    tagline: "React · JavaScript · Vue · Angular",
  },
  about: {
    title: "Bio",
    p1: "Ich bin ein indischer Entwickler, der vor Kurzem nach Deutschland gezogen ist. Programmieren hat mir schon immer Freude bereitet, und ich lege Wert auf sauberen, effizienten Code, der Probleme löst und langfristig hält.",
    p2: "Neben dem Coding reise ich gerne, lese und bin in der Tech-Community aktiv. Ob Meet-ups oder Konferenzen — ich lerne ständig dazu. Am Wochenende treffe ich Freunde, trinke Kaffee, entdecke neue Orte oder tauche in neue Technologien ein.",
    p3: "Kinder liegen mir besonders am Herzen, und ich glaube, dass Technologie Bildung und gesellschaftlichen Impact stärken kann. Es ist beeindruckend, wie wir als Entwickler von zu Hause aus einen positiven Unterschied machen können.",
    p4: "Ich bin dankbar, Teil einer Community zu sein, die Technik und sinnvollen Beitrag verbindet. Ich freue mich darauf, weiter zu lernen, zu wachsen und nachhaltig Wirkung zu erzielen.",
    p5Before: "Wenn du mehr über meinen beruflichen Weg erfahren möchtest, schau gerne in meinen",
    cvLink: "Lebenslauf auf LinkedIn →",
  },
  lately: {
    title: "Was ich gerade mache?",
    intro:
      "In meiner Freizeit programmiere ich gerne weiter. Ob Online-Kurse, Freelance-Arbeit oder Konferenzen — ich suche ständig Wege, dazuzulernen und mich zu verbessern.",
    items: [
      {
        title: "Weiterbildung & Kurse",
        description:
          "Aktuell absolviere ich einen Udemy-Kurs zu Microfrontend Architecture, um skalierbare, modulare Frontend-Apps besser zu bauen.",
      },
      {
        title: "Sprachen",
        description:
          "Ich spreche fließend Englisch und Hindi (Muttersprache) und Deutsch auf B1/B2-Niveau. Arabisch möchte ich gerne noch lernen.",
      },
    ],
  },
  skills: {
    title: "Kernkompetenzen",
  },
  projects: {
    title: "Projekte",
    subtitle:
      "Eine Auswahl an Produktionsanwendungen, die ich im Laufe meiner Karriere gebaut und mitgestaltet habe.",
    responsibilities: "Wichtige Aufgaben",
    visitSite: "Website besuchen →",
    items: [
      {
        id: "pro-traders",
        name: "Pro Traders Fund",
        role: "Frontend Developer",
        description:
          "Plattform einer Proprietary-Trading-Firma mit Sofortfinanzierung, Evaluierungs-Challenges, Profit-Tracking und bis zu 90% Profit-Sharing.",
        responsibilities: [
          "Trader-Evaluierungs-Dashboard mit Echtzeit-Gewinn/Verlust und Analytics entwickelt",
          "Account-Management inkl. Auszahlungen und Challenge-Fortschritt gebaut",
          "Responsive Landingpages mit Testimonials und conversion-starken CTAs erstellt",
          "Trading-APIs für Live-Monitoring und Trade-Historie integriert",
        ],
      },
      {
        id: "btc-proxy",
        name: "BTC Proxy",
        role: "Full Stack Developer",
        description:
          "Bitcoin-Staking- und Yield-Protokoll, mit dem Nutzer über Smart Contracts Erträge auf BTC erzielen können.",
        responsibilities: [
          "DApp-Interface für Staking, Unstaking und Yield-Tracking entwickelt",
          "Web3-Wallet-Verbindungen (MetaMask, WalletConnect) und Smart-Contract-Flows integriert",
          "Alpha-BTC-Yield-Dashboard mit APY, Staking-Metriken und Portfolio-Performance gebaut",
          "Marketing-Landingpages erstellt, die Vertrauen bei großen Crypto-Marken stärkten",
        ],
      },
      {
        id: "energy",
        name: "Energy Industry Client",
        role: "Senior Software Developer",
        description:
          "Unternehmenswebsite für einen globalen Anbieter von Chemie- und Technologielösungen in der Energiebranche.",
        responsibilities: [
          "Charts für historische Daten, Alarme und Ausfallzeiten sowie sortier-/größenänderbare Tabellen gebaut",
          "60–70% der hohen/mittleren Checkmarx-Sicherheitsrisiken beseitigt",
          "Charting-Libraries optimiert und Speicherverbrauch von 1GB auf 300–400MB gesenkt",
          "Technische Schulden um 10% durch vereinfachte Daten-API-Aufrufe reduziert",
          "Juniors gementort und mit Design- sowie Backend-Teams zusammengearbeitet",
        ],
      },
      {
        id: "pbm",
        name: "Pharmacy Benefit Manager Platform",
        role: "Senior Frontend Developer",
        description:
          "PBM-Plattform mit modularen Enterprise-Tools für Health Systems, Arbeitgeber und PBMs.",
        responsibilities: [
          "Modulare UI-Komponenten für die Enterprise-Plattform entwickelt",
          "Interaktive Analytics-Dashboards und Case-Study-Seiten gebaut",
          "HIPAA-bewusste Frontend-Praktiken und WCAG-2.1-AA-Accessibility sichergestellt",
          "Mit Backend-Teams komplexe Rezept- und Benefits-Datenflows integriert",
        ],
      },
      {
        id: "bitcron",
        name: "BitCron",
        role: "Full Stack Developer",
        description:
          "Seit 2018 Multi-Krypto-Wallet-Plattform zum sicheren Speichern, Senden und Empfangen digitaler Assets — mit 50+ Coins und Echtzeit-Transaktionen.",
        responsibilities: [
          "Web-Dashboard der BitCron-Wallet mit Vue.js entwickelt",
          "Wallet-Features für Salden, Historie und sichere Send/Receive-Flows umgesetzt",
          "Echtzeit-Blockchain-Updates und Benachrichtigungen per WebSocket integriert",
          "Responsive UI für die Verwaltung von über 50 Kryptowährungen gebaut",
        ],
      },
      {
        id: "ecommerce",
        name: "E-commerce Platforms",
        role: "Frontend Developer",
        description:
          "Mehrere E-Commerce-Shops für Kunden wie M2 Apparel und Hoffner mit OpenCart und Shopify — inkl. Katalog, Checkout und responsiver Storefronts.",
        responsibilities: [
          "OpenCart- und Shopify-Storefronts gebaut und angepasst",
          "Produktlisten, Produktdetail- und Checkout-Seiten entwickelt",
          "Zahlungs-, Versand- und Order-Management-Module integriert",
          "Katalogverwaltung, Filter und SEO-freundliche Seitenstrukturen umgesetzt",
        ],
      },
      {
        id: "thread",
        name: "Thread Research",
        role: "Senior Frontend Developer",
        description:
          "Klinische Forschungsplattform, die Teilnehmende mit Studien verbindet — inkl. Onboarding, Screening und sicherer digitaler Workflows.",
        responsibilities: [
          "Teilnehmer-App für Studienanmeldung und Teilnahme mit Vue.js entwickelt",
          "Profilverwaltung, Eligibility-Fragebögen und Onboarding umgesetzt",
          "Dashboards für Studienfortschritt, Termine und Kommunikation gebaut",
          "REST-APIs für Teilnehmerdaten, Einwilligungen und Updates integriert",
        ],
      },
      {
        id: "uniswap",
        name: "Uniswap Clone",
        role: "Frontend Developer (Web3)",
        description:
          "Dezentralisierte Exchange-Oberfläche nach Uniswap-Vorbild für Token-Swaps und Liquidity-Pool-Tracking.",
        responsibilities: [
          "UI neu gestaltet für bessere Usability und Trading-Workflows",
          "The Graph für Echtzeit-Pool- und Token-Daten integriert",
          "Pool-Werte, Token-Preise und Trading-Metriken im Dashboard angezeigt",
          "State Management mit Redux für skalierbare Datenflüsse optimiert",
        ],
      },
    ],
  },
  showcase: {
    professionalTitle: "Projekte",
    professionalSubtitle: "→ eher die professionelle Art",
    personalTitle: "Projekte",
    personalSubtitle: "→ eher die persönliche Art",
    professional: [
      {
        id: "oil-well",
        title: "Oil Well Analytics Dashboard",
        description:
          "Responsive Dashboards mit interaktiven Charts für Alarme, Ausfallzeiten und historische Bohrlochdaten. Speicherverbrauch von 1GB auf unter 400MB gesenkt und 80% der Sicherheitslücken beseitigt.",
      },
      {
        id: "admin-trading",
        title: "Admin & Trading Platform",
        company: "Orangebits Software Technologies",
        description:
          "Admin-Dashboard für 10.000+ Nutzer und über 1 Million Trades in Echtzeit geleitet. UI-Komponenten standardisiert und Build-Zeiten um 10% reduziert.",
      },
      {
        id: "crypto-trading",
        title: "Crypto Trading & ICO Platform",
        company: "Crontech LLC",
        description:
          "Einer der ersten fünf Engineers — Crypto-Trading-Apps mit WebSocket-Updates für 1M+ Live-Verbindungen. Sichere KYC-/Payment-Flows mit Light/Dark Theme.",
      },
    ],
    personal: [
      {
        id: "portfolio",
        title: "Persönliche Portfolio-Website",
        description:
          "Diese Portfolio-Seite gebaut, um Microfrontends zu erkunden — mit Plänen, Angular und Vue im Rahmen eines Microfrontend-Kurses zu integrieren.",
      },
      {
        id: "freelance",
        title: "Freelance Development",
        company: "Fiverr & Upwork",
        description:
          "Als Freelance-Webentwickler auf Fiverr und Upwork gearbeitet und den Top Rated Seller Badge auf Fiverr & Upwork verdient — durch hochwertige, responsive Apps mit React und Angular. Weltweit mit Kunden zusammengearbeitet, sauberen Code geliefert und schnelle Turnarounds gehalten. Während COVID-19 Freunden geholfen, Upwork-Profile zu optimieren, Proposals zu schreiben und Remote-Aufträge zu gewinnen.",
      },
      {
        id: "punekar",
        title: "Being Punekar",
        company: "Mitgründer | 9M+ Follower",
        description:
          "Social-Media-Brand auf Facebook & Instagram mitgegründet, die Punes Kultur, Essen und Stadtleben feiert — gewachsen auf über 9 Millionen Follower.",
      },
    ],
  },
  ico: {
    title: "ICO-Plattformen",
    subtitle: "Crypto-ICO-Plattformen, die ich 2018 gebaut habe",
    viewLarger: "Größeres Bild von {name} anzeigen",
    close: "Schließen",
    items: [
      {
        id: "skyf",
        name: "SKYFchain",
        description:
          "Blockchain-Betriebssystem für Cargo-Robotik — ICO-Token-Sale-Dashboard mit Mehrsprachigkeit",
      },
      {
        id: "worldbet",
        name: "WorldBet",
        description:
          "Blockchain-Wettplattform mit Krypto-Zahlungen und Echtzeit-Sportwetten",
      },
    ],
  },
  contact: {
    title: "Kontakt",
    linkedin: "LinkedIn",
    github: "GitHub",
    stackoverflow: "Stack Overflow",
    email: "E-Mail",
    cta: "LinkedIn-Profil ansehen",
  },
  footer: {
    email: "E-Mail",
  },
  notFound: {
    title: "404",
    message: "Seite nicht gefunden",
    home: "Zur Startseite →",
  },
};

const ar: Messages = {
  nav: {
    about: "نبذة",
    lately: "حالياً",
    skills: "المهارات",
    projects: "المشاريع",
    contact: "تواصل",
    aria: "التنقل الرئيسي",
    themeToLight: "التبديل إلى الوضع الفاتح",
    themeToDark: "التبديل إلى الوضع الداكن",
  },
  intro: {
    role: "مطور برمجيات أول",
    tagline: "React · JavaScript · Vue · Angular",
  },
  about: {
    title: "نبذة عني",
    p1: "أنا مطور هندي انتقلت مؤخراً إلى ألمانيا. لطالما استمتعت بالبرمجة، وأحرص على كتابة كود نظيف وفعّال يحل المشكلات ويصمد مع الزمن.",
    p2: "بعيداً عن البرمجة أحب السفر والقراءة والمشاركة في مجتمع التقنية. سواء عبر اللقاءات أو المؤتمرات، أتعلم باستمرار. أقضي عطلات نهاية الأسبوع مع الأصدقاء أو باستكشاف أماكن جديدة أو متابعة أحدث التقنيات.",
    p3: "أحب العمل المرتبط بالأطفال وأؤمن أن التقنية يمكن أن تلعب دوراً كبيراً في التعليم والأثر الاجتماعي. من المدهش كيف يمكننا كمطورين إحداث فرق إيجابي حتى من المنزل.",
    p4: "أشعر بالامتنان لكوني جزءاً من مجتمع شغوف بالتقنية ومهتم بإحداث أثر حقيقي. أتطلع لمواصلة التعلم والنمو والسعي لترك بصمة دائمة.",
    p5Before: "إذا أردت معرفة المزيد عن مساري المهني، يمكنك الاطلاع على",
    cvLink: "السيرة على LinkedIn ←",
  },
  lately: {
    title: "ماذا أفعل حالياً؟",
    intro:
      "أستمتع بالبرمجة في وقت فراغي. سواء عبر الدورات أو العمل الحر أو حضور المؤتمرات، أبحث دائماً عن طرق للتعلم والتطور.",
    items: [
      {
        title: "التعلم والدورات",
        description:
          "أتابع حالياً دورة على Udemy حول بنية Microfrontends لتعزيز مهاراتي في بناء تطبيقات واجهة أمامية قابلة للتوسع.",
      },
      {
        title: "اللغات",
        description:
          "أجيد الإنجليزية والهندية (لغتي الأم)، وأتحدث الألمانية بمستوى B1/B2. وأود تعلّم العربية مستقبلاً.",
      },
    ],
  },
  skills: {
    title: "المهارات الأساسية",
  },
  projects: {
    title: "المشاريع",
    subtitle:
      "مجموعة مختارة من التطبيقات الإنتاجية التي بنيتها وساهمت فيها خلال مساري المهني.",
    responsibilities: "المسؤوليات الرئيسية",
    visitSite: "زيارة الموقع ←",
    items: [
      {
        id: "pro-traders",
        name: "Pro Traders Fund",
        role: "مطور واجهة أمامية",
        description:
          "منصة لشركة تداول خاص تقدم تمويلاً فورياً للمتداولين مع تحديات تقييم وتتبع أرباح ومشاركة أرباح تصل إلى 90%.",
        responsibilities: [
          "تطوير لوحة تقييم المتداولين مع تتبع الربح/الخسارة والتحليلات في الوقت الفعلي",
          "بناء إدارة الحسابات بما في ذلك المدفوعات وتتبع تقدم التحديات",
          "إنشاء صفحات هبوط متجاوبة مع شهادات وأزرار تحويل محسّنة",
          "دمج واجهات تداول خارجية لمراقبة الحسابات وسجل الصفقات",
        ],
      },
      {
        id: "btc-proxy",
        name: "BTC Proxy",
        role: "مطور Full Stack",
        description:
          "بروتوكول رهن بيتكوين وعائد مدعوم بالذكاء الاصطناعي يتيح للمستخدمين كسب عائد عبر العقود الذكية.",
        responsibilities: [
          "تطوير واجهة التطبيق لعمليات الرهن وإلغائه وتتبع العائد",
          "دمج محافظ Web3 (MetaMask وWalletConnect) والتفاعل مع العقود الذكية",
          "بناء لوحة عائد Alpha BTC لعرض APY ومقاييس الرهن وأداء المحفظة",
          "إنشاء صفحات تسويقية ساعدت على بناء الثقة مع علامات كريبتو عالمية",
        ],
      },
      {
        id: "energy",
        name: "عميل قطاع الطاقة",
        role: "مطور برمجيات أول",
        description:
          "موقع مؤسسي لشركة عالمية رائدة في حلول الكيمياء والتكنولوجيا لقطاع الطاقة.",
        responsibilities: [
          "بناء مخططات لتتبع البيانات التاريخية والإنذارات وتوقف الآبار مع جداول قابلة للسحب والفرز وتغيير الحجم",
          "إزالة 60%–70% من مخاطر Checkmarx العالية والمتوسطة",
          "تحسين مكتبات المخططات وخفض الاستهلاك من 1GB إلى 300–400MB",
          "تقليل الدين التقني بنسبة 10% عبر تبسيط استدعاءات واجهات البيانات",
          "توجيه المطورين المبتدئين والتعاون مع فريقي التصميم والخلفية",
        ],
      },
      {
        id: "pbm",
        name: "منصة إدارة منافع الصيدلة",
        role: "مطور واجهة أمامية أول",
        description:
          "منصة PBM بأدوات مؤسسية معيارية لأنظمة الصحة وأصحاب العمل ومديري المنافع الصيدلانية.",
        responsibilities: [
          "تطوير مكونات واجهة معيارية للمنصة المؤسسية",
          "بناء لوحات تحليلات تفاعلية وصفحات دراسات حالة",
          "ضمان ممارسات HIPAA ومعايير إمكانية الوصول WCAG 2.1 AA",
          "التعاون مع فرق الخلفية لدمج تدفقات بيانات الوصفات والمنافع",
        ],
      },
      {
        id: "bitcron",
        name: "BitCron",
        role: "مطور Full Stack",
        description:
          "منذ 2018، منصة محفظة متعددة العملات لتخزين وإرسال واستقبال الأصول الرقمية بأمان مع دعم أكثر من 50 عملة وتتبع فوري للمعاملات.",
        responsibilities: [
          "تطوير لوحة BitCron باستخدام Vue.js",
          "تنفيذ إدارة الأرصدة وسجل المعاملات وتدفقات الإرسال/الاستلام الآمنة",
          "دمج تحديثات البلوكشين والإشعارات عبر WebSocket",
          "بناء مكونات متجاوبة لإدارة أكثر من 50 عملة مشفرة",
        ],
      },
      {
        id: "ecommerce",
        name: "منصات التجارة الإلكترونية",
        role: "مطور واجهة أمامية",
        description:
          "تطوير وتخصيص مواقع تجارة إلكترونية لعملاء مثل M2 Apparel وHoffner باستخدام OpenCart وShopify مع واجهات متجاوبة وكتالوجات ودفع آمن.",
        responsibilities: [
          "بناء وتخصيص واجهات OpenCart وShopify",
          "تطوير صفحات المنتجات والتفاصيل والدفع",
          "دمج بوابات الدفع والشحن وإدارة الطلبات",
          "تنفيذ إدارة الكتالوج والفلاتر وهياكل صفحات صديقة لمحركات البحث",
        ],
      },
      {
        id: "thread",
        name: "Thread Research",
        role: "مطور واجهة أمامية أول",
        description:
          "منصة أبحاث سريرية تربط المشاركين بالدراسات والتجارب عبر مسارات رقمية آمنة للانضمام والفحص والمشاركة.",
        responsibilities: [
          "تطوير تطبيق المشاركين للتسجيل والمشاركة باستخدام Vue.js",
          "تنفيذ إدارة الملفات والاستبيانات ومسارات الانضمام",
          "بناء لوحات لتتبع التقدم والمواعيد والتواصل",
          "دمج واجهات REST لبيانات المشاركين والموافقات والتحديثات",
        ],
      },
      {
        id: "uniswap",
        name: "Uniswap Clone",
        role: "مطور واجهة أمامية (Web3)",
        description:
          "واجهة تبادل لامركزي مستوحاة من Uniswap لمبادلة الرموز وتتبع مجمعات السيولة.",
        responsibilities: [
          "إعادة تصميم الواجهة لتحسين سهولة الاستخدام وسير التداول",
          "دمج The Graph لجلب بيانات المجمعات والرموز في الوقت الفعلي",
          "عرض قيم المجمعات وأسعار الرموز ومقاييس التداول في اللوحة",
          "تحسين إدارة الحالة باستخدام Redux للتعامل مع البيانات على نطاق واسع",
        ],
      },
    ],
  },
  showcase: {
    professionalTitle: "المشاريع",
    professionalSubtitle: "→ من النوع المهني",
    personalTitle: "المشاريع",
    personalSubtitle: "→ من النوع الشخصي",
    professional: [
      {
        id: "oil-well",
        title: "لوحة تحليلات آبار النفط",
        description:
          "لوحات متجاوبة بمخططات تفاعلية لتتبع الإنذارات والتوقف والبيانات التاريخية. خفضت استهلاك الذاكرة من 1GB إلى أقل من 400MB وأزلت 80% من الثغرات الأمنية.",
      },
      {
        id: "admin-trading",
        title: "منصة الإدارة والتداول",
        company: "Orangebits Software Technologies",
        description:
          "قدت تطوير لوحة إدارة لأكثر من 10,000 مستخدم وتتبع أكثر من مليون صفقة لحظياً. وحدت مكونات الواجهة وخفضت زمن البناء بنسبة 10%.",
      },
      {
        id: "crypto-trading",
        title: "منصة تداول وعروض ICO",
        company: "Crontech LLC",
        description:
          "من أوائل خمسة مهندسين — بناء تطبيقات تداول كريبتو بتحديثات WebSocket لأكثر من مليون اتصال مباشر، مع تدفقات KYC ودفع آمنة ووضعي فاتح/داكن.",
      },
    ],
    personal: [
      {
        id: "portfolio",
        title: "موقع المحفظة الشخصية",
        description:
          "بنيت هذا الموقع لاستكشاف Microfrontends مع خطط لدمج Angular وVue ضمن دورة معمارية الواجهات الموزعة.",
      },
      {
        id: "freelance",
        title: "التطوير الحر",
        company: "Fiverr & Upwork",
        description:
          "عملت كمطور ويب حر على Fiverr وUpwork وحصلت على شارة Top Rated Seller عبر تقديم تطبيقات متجاوبة عالية الجودة بـ React وAngular. تعاونت مع عملاء حول العالم وقدمت كوداً نظيفاً بسرعة. خلال جائحة كورونا ساعدت أصدقاء على تحسين ملفاتهم على Upwork وكتابة المقترحات والحصول على فرص عمل عن بُعد.",
      },
      {
        id: "punekar",
        title: "Being Punekar",
        company: "مؤسس مشارك | أكثر من 9 ملايين متابع",
        description:
          "أسست مع شركاء علامة على فيسبوك وإنستغرام تحتفي بثقافة بونا وطعامها وحياتها، ونمت إلى أكثر من 9 ملايين متابع.",
      },
    ],
  },
  ico: {
    title: "منصات ICO",
    subtitle: "منصات ICO للعملات المشفرة التي بنيتها عام 2018",
    viewLarger: "عرض صورة أكبر لـ {name}",
    close: "إغلاق",
    items: [
      {
        id: "skyf",
        name: "SKYFchain",
        description:
          "منصة تشغيل قائمة على البلوكشين لروبوتات الشحن — لوحة بيع رموز ICO بدعم متعدد اللغات",
      },
      {
        id: "worldbet",
        name: "WorldBet",
        description:
          "منصة مراهنات قائمة على البلوكشين بمدفوعات مشفرة ومراهنات رياضية لحظية",
      },
    ],
  },
  contact: {
    title: "تواصل",
    linkedin: "LinkedIn",
    github: "GitHub",
    stackoverflow: "Stack Overflow",
    email: "البريد",
    cta: "عرض ملف LinkedIn",
  },
  footer: {
    email: "البريد",
  },
  notFound: {
    title: "404",
    message: "الصفحة غير موجودة",
    home: "العودة للرئيسية ←",
  },
};

export const messages: Record<Locale, Messages> = { en, de, ar };

export type { Messages };
