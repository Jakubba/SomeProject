const logos = [
  new URL('../src/assets/LogoBanner/logo1.svg', import.meta.url).href,
  new URL('../src/assets/LogoBanner/logo2.svg', import.meta.url).href,
  new URL('../src/assets/LogoBanner/logo3.svg', import.meta.url).href,
  new URL('../src/assets/LogoBanner/logo4.svg', import.meta.url).href,
  new URL('../src/assets/LogoBanner/logo2.svg', import.meta.url).href,
  new URL('../src/assets/LogoBanner/logo3.svg', import.meta.url).href,
  new URL('../src/assets/LogoBanner/logo4.svg', import.meta.url).href,
  new URL('../src/assets/LogoBanner/logo1.svg', import.meta.url).href,
];

const features = [
  {
    gridArea: 'tl',
    image: new URL('../../assets/features/thumb-up.svg', import.meta.url).href,
    heading: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },

  {
    gridArea: 'tr',
    image: new URL('../assets/features/globe.svg', import.meta.url).href,
    heading: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },

  {
    gridArea: 'bl',
    image: new URL('../assets/features/flag.svg', import.meta.url).href,
    heading: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    gridArea: 'blm',
    image: new URL('../assets/features/hash.svg', import.meta.url).href,
    heading: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    gridArea: 'blr',
    image: new URL('../assets/features/branch.svg', import.meta.url).href,
    heading: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
  {
    gridArea: 'br',
    image: new URL('../assets/features/branch.svg', import.meta.url).href,
    heading: 'Lorem ipsum dolor sit amet',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
];

const pricingData = [
  {
    darkMode: false,
    plan: 'Individual Plan',
    planIcon: new URL('../assets/pricing/individual-plan.svg', import.meta.url).href,
    planPrice: 9.99,
    bullets: [
      'Real-time collaboration',
      'AI-powered organization',
      'Customizable templates',
      '5GB cloud storage',
      'Basic integrations',
    ],
    CallToAction: 'Start Free Trial',
  },
  {
    darkMode: true,
    plan: 'Team Plan',
    planIcon: new URL('../assets/pricing/team-plan.svg', import.meta.url).href,
    planPrice: 19.99,
    bullets: [
      'Everything in the Individual Plan',
      'Unlimited cloud storage',
      'Advanced integrations',
      'Team management and permissions',
      'Shared templates and note libraries',
    ],
    CallToAction: 'Start Free Trial',
  },
  {
    darkMode: false,
    plan: 'Enterprise Plan',
    planIcon: new URL('../assets/pricing/enterprise-plan.svg', import.meta.url).href,
    bullets: [
      'Everything in the Team Plan',
      'Dedicated account manager',
      'Enterprise-grade security',
      'Customized onboarding',
      'Advanced analytics',
    ],
    CallToAction: 'Contact support',
  },
];

const faqItems = [
  {
    id: 1,
    question: 'What is SmartNotes?',
    answerHeading: 'How do I get started with SmartNotes?',
    answer: `Getting started with SmartNotes is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
  {
    id: 2,
    question: 'What are the key features of SmartNotes?',
    answerHeading: 'How do I get started with SmartNotes?',
    answer: `Getting started with SmartNotes is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
  {
    id: 3,
    question: 'How much does SmartNotes cost?',
    answerHeading: 'How do I get started with SmartNotes?',
    answer: `Getting started with SmartNotes is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
  {
    id: 4,
    question: 'Who is SmartNotes for?',
    answerHeading: 'How do I get started with SmartNotes?',
    answer: `Getting started with SmartNotes is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
  {
    id: 5,
    question: 'What is SmartNotes?',
    answerHeading: 'How do I get started with SmartNotes?',
    answer: `Getting started with SmartNotes is easy! Simply visit
             our website, sign up for a free trial, and start exploring 
             the features. Our intuitive interface and comprehensive onboarding 
             materials will guide you through the process.`,
  },
];

export { logos, features, pricingData, faqItems };
