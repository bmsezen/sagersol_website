export interface Company {
  name: string;
  url: string;
  logo: string;
  blurb: string;
  tags: string[];
  role?: string;
  note?: string;
}

/** Filter chips on the portfolio, in display order. */
export const tags = ['Maine', 'Healthcare', 'Crypto', 'Education', 'Turkish founders'];

export const companies: Company[] = [
  { name: 'Bluesonde', url: 'https://www.bluesonde.com/', logo: '/images/logos/bluesonde.svg', blurb: 'Real-time water monitoring systems for management, research and climate adaptation.', tags: ['Maine'], note: 'Roux Institute startup' },
  { name: 'bluShift Aerospace', url: 'https://www.blushiftaerospace.com/', logo: '/images/logos/blushift.png', blurb: 'Rockets powered by bio-derived fuel, launching from Maine.', tags: ['Maine'] },
  { name: 'Citrea', url: 'https://citrea.xyz/', logo: '/images/logos/citrea.svg', blurb: "Bitcoin's first ZK rollup.", tags: ['Crypto', 'Turkish founders'] },
  { name: 'Fairmint', url: 'https://www.fairmint.com/', logo: '/images/logos/fairmint.svg', blurb: 'Brings company equity onchain as a transfer agent.', tags: ['Crypto'] },
  { name: 'GelTech Labs', url: 'https://geltechlabs.com/', logo: '/images/logos/geltech-labs.png', blurb: 'Automated lab for soft biomaterials R&D, driven by robotics and AI.', tags: ['Turkish founders'] },
  { name: 'Gravie', url: 'https://www.gravie.com/', logo: '/images/logos/gravie.webp', blurb: 'Health benefits that improve how people purchase and access healthcare.', tags: ['Healthcare'] },
  { name: 'Kinotek', url: 'https://kinotek.com/', logo: '/images/logos/kinotek.png', blurb: 'Movement analysis software for health and fitness professionals.', tags: ['Maine'], role: 'Board member' },
  { name: 'Parity Healthcare Analytics', url: 'https://paritypro.com/', logo: '/images/logos/paritypro.png', blurb: 'Nurse-founded workforce intelligence for hospitals.', tags: ['Maine', 'Healthcare'] },
  { name: 'Restoration Medicine', url: 'https://www.restorationmedicine.com/', logo: '/images/logos/restoration-medicine.png', blurb: 'Precision diagnosis and team-based telehealth care for pelvic health.', tags: ['Maine', 'Healthcare'] },
  { name: 'Teamble', url: 'https://teamble.com/', logo: '/images/logos/teamble.svg', blurb: 'Continuous 360 feedback inside Slack and Microsoft Teams.', tags: ['Turkish founders'] },
  { name: 'Volute', url: 'https://www.volute.education', logo: '/images/logos/volute.png', blurb: 'Microlearning series that extend business-school executive programs.', tags: ['Education'] },
];

export const tagSlug = (t: string) => t.toLowerCase().replace(/\s+/g, '-');
