/* ==========================================================================
   content.js — Single source of truth for all bilingual content.
   All facts are sourced verbatim from Maisa_Alosaimi_QoL.pdf (the CV).
   ⚠️ ARABIC (ar) STRINGS ARE PENDING MAISA'S REVIEW before launch (spec FR-014).
   Parity rule: en and ar must have identical keys and equal array lengths.
   ========================================================================== */

export const LINKS = {
  email: "maisa3333@gmail.com",
  linkedin: "https://www.linkedin.com/in/maisa-alosaimi-4563b659",
  qaddha: "https://preview--qadha-recognition-hub.lovable.app/",
  cv: "Maisa_Alosaimi_QoL.pdf",
};

export const CONTENT = {
  en: {
    meta: {
      lang: "en",
      dir: "ltr",
      title: "Maisa Alosaimi — Quality of Life & Wellbeing Specialist",
      description:
        "Portfolio of Maisa Alosaimi, a Quality of Life & Wellbeing Specialist leading impactful initiatives across school communities in the UAE.",
      ogLocale: "en_US",
    },
    ui: {
      skip: "Skip to content",
      menu: "Menu",
      close: "Close menu",
      backToTop: "Back to top",
      brand: "Maisa Alosaimi",
      monogram: "M",
      switchTo: "العربية",
      switchToAria: "التبديل إلى العربية",
      footerRights: "© 2026 Maisa Alosaimi. All rights reserved.",
      newTab: "(opens in a new tab)",
      noscript:
        "This portfolio is fully readable with JavaScript enabled. You can still download the full CV below, or contact Maisa by email or LinkedIn.",
    },
    nav: {
      about: "About",
      highlights: "Highlights",
      experience: "Experience",
      innovation: "Innovation",
      skills: "Skills",
      training: "Training",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Quality of Life & Wellbeing",
      name: "Maisa Alosaimi",
      title: "Quality of Life & Wellbeing Specialist",
      tagline:
        "I design and lead quality-of-life and wellbeing initiatives that strengthen school communities and put people first.",
      ctaContact: "Get in touch",
      ctaCv: "Download CV",
    },
    about: {
      eyebrow: "Profile",
      heading: "About",
      body:
        "Dynamic and results-oriented Quality of Life and Wellbeing leader with extensive experience in organizational leadership, project management, and strategic planning. Proven track record of leading and overseeing impactful initiatives, developing and implementing policies, driving innovation, and enhancing organizational performance. Adept at managing cross-functional teams, optimizing processes, monitoring performance indicators, and fostering positive, supportive, and sustainable work environments aligned with national priorities and institutional goals.",
    },
    highlights: {
      eyebrow: "Achievements",
      heading: "Key Highlights",
      items: [
        { year: "2024", title: "First Place — UAE Hackathon 2024", detail: "Secured first place in the Government Employees Innovators category, recognized for outstanding innovation and creative problem-solving." },
        { year: "1994", title: "Al Owais Award for Studies & Scientific Innovation", detail: "Research Category — early recognition for academic excellence and contribution to scientific research and innovation." },
        { year: "2025", title: "Exceeds Expectations — Performance Appraisal", detail: "Achieved the highest rating of “Exceeds Expectations” in the official performance appraisal system for 2025." },
        { year: "", title: "90 Events for 30,000 Students", detail: "Designed and managed approximately 90 events spanning national and international competitions, engaging over 30,000 students." },
        { year: "", title: "3+ Years in Quality of Life", detail: "Specialized expertise in Quality of Life & Wellbeing." },
      ],
    },
    experience: {
      eyebrow: "Career",
      heading: "Professional Experience",
      items: [
        {
          role: "Students' Wellbeing Coordinator",
          org: "Dubai Schools — Branch 1",
          type: "Full-time",
          dates: "Jan 2024 – Present",
          bullets: [
            "Led and oversaw Quality of Life and wellbeing initiatives impacting school staff and school communities.",
            "Contributed to policy development, operational planning, and performance indicator design.",
            "Coordinated cross-functional teams and institutional stakeholders.",
            "Monitored indicators, analyzed data, and prepared leadership reports and recommendations.",
            "Oversaw periodic performance reviews, assessed achievement outcomes and key performance indicators, evaluated unit staff performance, and developed comprehensive annual reports to inform committee management and strategic decision-making.",
          ],
        },
        {
          role: "Head of Student Affairs Unit",
          org: "Nad Al Hammar School — Cycle Two",
          type: "Full-time",
          dates: "Jul 2020 – Jan 2024",
          bullets: [
            "Contributed to the preparation of the school's operational plan and self-assessment.",
            "Led unit operations, strategic planning, and staff engagement initiatives.",
            "Managed student admission and registration in accordance with approved standards.",
            "Coordinated school programs, trips, and student activities, including those for students with special needs.",
          ],
        },
        {
          role: "Head of Student Affairs Unit",
          org: "Al Rashidiya School — Cycle Three",
          type: "Full-time",
          dates: "Sep 2017 – Jul 2020",
          bullets: [
            "Managed all student affairs operations including planning, coordination, and monitoring of academic and extracurricular activities.",
            "Supported student wellbeing and engagement initiatives across the school cycle.",
          ],
        },
      ],
    },
    innovation: {
      eyebrow: "Innovation",
      heading: "Strategic Initiatives & Digital Innovation",
      name: "Qaddha — منصة قدّها",
      summary:
        "A proposed digital incentive platform prototype that supports staff Quality of Life at the sector level.",
      linkLabel: "View the prototype",
    },
    skills: {
      eyebrow: "Capabilities",
      heading: "Skills",
      items: [
        "Application & Website Design",
        "Community Outreach",
        "Data Analysis",
        "Fine Arts",
        "Photography",
        "Program Coordination",
        "Program Evaluation",
        "Talent Identification & Innovation",
        "Volunteer Work",
      ],
    },
    training: {
      eyebrow: "Credentials",
      heading: "Training & Certifications",
      items: [
        { year: "", name: "STEM Innovation in Education", issuer: "Stanford University" },
        { year: "2018", name: "New Leader Training Program — Empowering and Qualifying Leaders", issuer: "" },
        { year: "2018", name: "International Visitor Leadership Program (IVLP) — Women's Leadership: Promoting Peace and Security", issuer: "" },
        { year: "2017", name: "Certified Trainer License", issuer: "" },
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Let's connect",
      body:
        "Open to opportunities in Quality of Life, wellbeing, and program leadership. Reach out and let's talk.",
      emailLabel: "Email",
      linkedinLabel: "LinkedIn",
      cvLabel: "Download CV",
    },
  },

  ar: {
    meta: {
      lang: "ar",
      dir: "rtl",
      title: "ميساء العصيمي — أخصائية جودة الحياة والرفاه",
      description:
        "الملف الشخصي لميساء العصيمي، أخصائية جودة الحياة والرفاه، تقود مبادرات مؤثرة في المجتمعات المدرسية بدولة الإمارات.",
      ogLocale: "ar_AE",
    },
    ui: {
      skip: "تخطٍّ إلى المحتوى",
      menu: "القائمة",
      close: "إغلاق القائمة",
      backToTop: "إلى الأعلى",
      brand: "ميساء العصيمي",
      monogram: "م",
      switchTo: "English",
      switchToAria: "Switch to English",
      footerRights: "© 2026 ميساء العصيمي. جميع الحقوق محفوظة.",
      newTab: "(يفتح في نافذة جديدة)",
      noscript:
        "هذا الملف يُعرض بالكامل عند تفعيل JavaScript. يمكنك تحميل السيرة الذاتية أدناه أو التواصل عبر البريد أو لينكدإن.",
    },
    nav: {
      about: "نبذة",
      highlights: "أبرز الإنجازات",
      experience: "الخبرات",
      innovation: "الابتكار",
      skills: "المهارات",
      training: "التدريب",
      contact: "تواصل",
    },
    hero: {
      eyebrow: "جودة الحياة والرفاه",
      name: "ميساء العصيمي",
      title: "أخصائية جودة الحياة والرفاه",
      tagline:
        "أصمّم وأقود مبادرات جودة الحياة والرفاه التي تعزّز المجتمعات المدرسية وتضع الإنسان أولاً.",
      ctaContact: "تواصل معي",
      ctaCv: "تحميل السيرة الذاتية",
    },
    about: {
      eyebrow: "الملف الشخصي",
      heading: "نبذة عني",
      body:
        "قائدة ديناميكية موجّهة نحو النتائج في مجال جودة الحياة والرفاه، تتمتع بخبرة واسعة في القيادة المؤسسية وإدارة المشاريع والتخطيط الاستراتيجي. سجل حافل في قيادة المبادرات المؤثرة والإشراف عليها، وتطوير السياسات وتنفيذها، ودفع الابتكار، وتعزيز الأداء المؤسسي. بارعة في إدارة الفرق متعددة التخصصات، وتحسين العمليات، ومتابعة مؤشرات الأداء، وبناء بيئات عمل إيجابية وداعمة ومستدامة تتوافق مع الأولويات الوطنية والأهداف المؤسسية.",
    },
    highlights: {
      eyebrow: "إنجازات",
      heading: "أبرز الإنجازات",
      items: [
        { year: "2024", title: "المركز الأول — هاكاثون الإمارات 2024", detail: "حصلت على المركز الأول في فئة مبتكري الموظفين الحكوميين تقديراً للابتكار المتميّز وحلّ المشكلات بطرق إبداعية." },
        { year: "1994", title: "جائزة العويس للدراسات والابتكار العلمي", detail: "فئة البحث العلمي — تقدير مبكّر للتميّز الأكاديمي والإسهام في البحث العلمي والابتكار." },
        { year: "2025", title: "يفوق التوقعات — تقييم الأداء", detail: "حصلت على أعلى تقدير «يفوق التوقعات» في نظام تقييم الأداء الرسمي لعام 2025." },
        { year: "", title: "90 فعالية لـ 30,000 طالب", detail: "صمّمت وأدرت نحو 90 فعالية تشمل مسابقات وطنية ودولية، شارك فيها أكثر من 30,000 طالب." },
        { year: "", title: "أكثر من 3 سنوات في جودة الحياة", detail: "خبرة متخصّصة في جودة الحياة والرفاه." },
      ],
    },
    experience: {
      eyebrow: "المسيرة المهنية",
      heading: "الخبرات المهنية",
      items: [
        {
          role: "منسّقة رفاه الطلبة",
          org: "مدارس دبي — الفرع الأول",
          type: "دوام كامل",
          dates: "يناير 2024 – حتى الآن",
          bullets: [
            "قيادة مبادرات جودة الحياة والرفاه والإشراف عليها بما يخدم منسوبي المدرسة ومجتمعاتها.",
            "الإسهام في تطوير السياسات والتخطيط التشغيلي وتصميم مؤشرات الأداء.",
            "تنسيق الفرق متعددة التخصصات وأصحاب المصلحة المؤسسيين.",
            "متابعة المؤشرات وتحليل البيانات وإعداد التقارير والتوصيات للقيادة.",
            "الإشراف على مراجعات الأداء الدورية وتقييم نتائج الإنجاز ومؤشرات الأداء الرئيسية وتقييم أداء موظفي الوحدة وإعداد تقارير سنوية شاملة لدعم إدارة اللجان واتخاذ القرار الاستراتيجي.",
          ],
        },
        {
          role: "رئيسة وحدة شؤون الطلبة",
          org: "مدرسة ند الحمر — الحلقة الثانية",
          type: "دوام كامل",
          dates: "يوليو 2020 – يناير 2024",
          bullets: [
            "الإسهام في إعداد الخطة التشغيلية للمدرسة والتقييم الذاتي.",
            "قيادة عمليات الوحدة والتخطيط الاستراتيجي ومبادرات إشراك الموظفين.",
            "إدارة قبول الطلبة وتسجيلهم وفق المعايير المعتمدة.",
            "تنسيق البرامج والرحلات والأنشطة الطلابية، بما في ذلك أنشطة أصحاب الهمم.",
          ],
        },
        {
          role: "رئيسة وحدة شؤون الطلبة",
          org: "مدرسة الراشدية — الحلقة الثالثة",
          type: "دوام كامل",
          dates: "سبتمبر 2017 – يوليو 2020",
          bullets: [
            "إدارة جميع عمليات شؤون الطلبة بما يشمل التخطيط والتنسيق ومتابعة الأنشطة الأكاديمية واللاصفية.",
            "دعم مبادرات رفاه الطلبة وإشراكهم على مستوى الحلقة الدراسية.",
          ],
        },
      ],
    },
    innovation: {
      eyebrow: "ابتكار",
      heading: "المبادرات الاستراتيجية والابتكار الرقمي",
      name: "منصة قدّها",
      summary:
        "نموذج أولي لمنصة تحفيز رقمية مقترحة لدعم جودة حياة الموظفين على مستوى القطاع.",
      linkLabel: "استعراض النموذج الأولي",
    },
    skills: {
      eyebrow: "القدرات",
      heading: "المهارات",
      items: [
        "تصميم التطبيقات والمواقع",
        "التواصل المجتمعي",
        "تحليل البيانات",
        "الفنون الجميلة",
        "التصوير الفوتوغرافي",
        "تنسيق البرامج",
        "تقييم البرامج",
        "اكتشاف المواهب والابتكار",
        "العمل التطوعي",
      ],
    },
    training: {
      eyebrow: "المؤهلات",
      heading: "التدريب والشهادات",
      items: [
        { year: "", name: "الابتكار في تعليم العلوم والتقنية (STEM)", issuer: "جامعة ستانفورد" },
        { year: "2018", name: "برنامج تدريب القادة الجدد — تمكين وتأهيل القادة", issuer: "" },
        { year: "2018", name: "برنامج القيادة للزوار الدوليين (IVLP) — القيادة النسائية: تعزيز السلام والأمن", issuer: "" },
        { year: "2017", name: "رخصة مدرب معتمد", issuer: "" },
      ],
    },
    contact: {
      eyebrow: "تواصل",
      heading: "لنتواصل",
      body:
        "منفتحة على الفرص في مجالات جودة الحياة والرفاه وقيادة البرامج. تواصلوا معي ولنتحدث.",
      emailLabel: "البريد الإلكتروني",
      linkedinLabel: "لينكدإن",
      cvLabel: "تحميل السيرة الذاتية",
    },
  },
};
