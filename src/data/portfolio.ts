export interface Project {
  name: string;
  url: string;
  logo: string;
  description?: string;
  location?: string;
}

/** Featured on the home page. */
export const featured: Project[] = [
  {
    name: '6ixth Event',
    url: 'http://www.go6ixthevent.com/',
    logo: '/images/6ixth-event.webp',
    description:
      'The 6ixth Event is a financial services firm that specializes in the fields of venture capital and private equity.',
    location: 'Portland, ME',
  },
];

/** Angel Investments page. */
export const investments: Project[] = [
  {
    name: 'Volute',
    url: 'https://www.volute.education',
    logo: '/images/logos/volute.png',
    description:
      "Volute extends the value of executive and professional programs to alumni and all employees of business schools' clients, through member subscriptions to microlearning Series, available on the job, complete with Watch Parties and After Parties.",
  },
  {
    name: 'Teamble',
    url: 'https://teamble.com/',
    logo: '/images/logos/teamble.svg',
    description:
      'Teamble makes 360 feedback simple, continuous, and actionable. Featured as the #1 HR, Productivity & Work From Home App in Microsoft Teams and Slack App Stores. Trusted by 1500+ organizations on Slack and Teams. Start for free today.',
  },
  {
    name: 'Gravie',
    url: 'https://www.gravie.com/',
    logo: '/images/logos/gravie.webp',
    description:
      'We partner with brokers across the nation to improve the way people purchase and access healthcare.',
  },
  {
    name: 'GelTech Labs',
    url: 'https://geltechlabs.com/',
    logo: '/images/logos/geltech-labs.png',
    description:
      'GelTech Labs runs an automated lab for soft biomaterials R&D, using robotics and AI to get formulations into animal and clinical studies faster and cheaper.',
  },
];

/** Web3/Crypto page. */
export const crypto: Project[] = [
  {
    name: 'Citrea',
    url: 'https://citrea.xyz/',
    logo: '/images/logos/citrea.svg',
    description: "Citrea is Bitcoin's first ZK rollup.",
  },
  {
    name: 'Fairmint',
    url: 'https://www.fairmint.com/',
    logo: '/images/logos/fairmint.svg',
    description:
      'Fairmint brings equity onchain, tokenizing company shares and maintaining the official onchain ownership record as a transfer agent.',
  },
];

/** Local Maine Initiatives page. */
export const maineInitiatives: Project[] = [
  {
    name: 'Kinotek – Board Member and Investor',
    url: 'https://kinotek.com/',
    logo: '/images/logos/kinotek.png',
  },
  {
    name: 'bluShift Aerospace – Investor and Advisor',
    url: 'https://www.blushiftaerospace.com/',
    logo: '/images/logos/blushift.png',
  },
  {
    name: 'Bluesonde – Investor',
    url: 'https://www.bluesonde.com/',
    logo: '/images/logos/bluesonde.svg',
    description:
      'Bluesonde builds compact, low-maintenance real-time water monitoring systems that stream data for water management, research, and climate adaptation.',
  },
  {
    name: 'Parity Healthcare Analytics – Investor',
    url: 'https://paritypro.com/',
    logo: '/images/logos/paritypro.png',
    description:
      'Parity is a nurse-founded workforce performance partner that turns hospital staffing data into real-time intelligence and practical recommendations.',
  },
  {
    name: 'Restoration Medicine – Investor',
    url: 'https://www.restorationmedicine.com/',
    logo: '/images/logos/restoration-medicine.png',
    description:
      'Restoration Medicine delivers precision diagnosis and team-based care for pelvic health conditions via telehealth.',
  },
];
