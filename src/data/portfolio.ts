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
  {
    name: 'Farmhand Automation',
    url: 'http://farmhandautomation.com/',
    logo: '/images/farmhand-automation.webp',
    description:
      'Farmhand Automation empowers sustainable farms with cutting edge robotics automation to make sustainably grown food the norm, not the exception.',
    location: 'Biddeford, ME',
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
    name: 'Vidatronic',
    url: 'http://www.vidatronic.com/',
    logo: '/images/logos/vidatronic.png',
    description:
      "Vidatronic specializes in enhancing the efficiency and performance of the world's electronic devices by licensing analog intellectual property (IP) cores for integration into systems on a chip (SoCs), including integrated power management unit (PMU) solutions, analog circuitry, security IP, and other technology development projects.",
  },
  {
    name: 'Gravie',
    url: 'https://www.gravie.com/',
    logo: '/images/logos/gravie.webp',
    description:
      'We partner with brokers across the nation to improve the way people purchase and access healthcare.',
  },
  {
    name: 'Yes VC',
    url: 'https://yes.vc/',
    logo: '/images/logos/yes-vc.png',
    description:
      'Hello! We are Yes VC, comprised of Caterina Fake, Jyri Engeström, Julie Liao and David Pickerell. We fund great companies at the Pre-Seed and Seed stages.',
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
    name: 'Farmhand Automation – Investor and Advisor',
    url: 'http://farmhandautomation.com/',
    logo: '/images/logos/farmhand-automation.webp',
    location: 'Biddeford, ME',
  },
  {
    name: 'bluShift Aerospace – Investor and Advisor',
    url: 'https://www.blushiftaerospace.com/',
    logo: '/images/logos/blushift.png',
  },
  {
    name: 'Reconnect – Investor',
    url: 'https://reconnect.io/',
    logo: '/images/logos/reconnect.svg',
  },
  {
    name: 'Running Tide – Investor',
    url: 'https://www.runningtide.com/',
    logo: '/images/logos/running-tide.png',
  },
  {
    name: 'The Maine Center for Entrepreneurs (MCE) – Board Member',
    url: 'https://www.mced.biz',
    logo: '/images/logos/mce.png',
  },
  {
    name: 'The Indus Fund – Managing Partner',
    url: 'https://www.theindusfund.com/',
    logo: '/images/logos/indus-fund.png',
  },
  {
    name: 'Gorham Savings Bank – Corporator',
    url: 'https://www.gorhamsavings.bank/',
    logo: '/images/logos/gorham-savings-bank.png',
  },
];
