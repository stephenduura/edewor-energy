import { Service, Feature } from './types';

export const ABOUT_FEATURES: Feature[] = [
  {
    id: 'reliability',
    title: 'Reliability',
    description: 'Uninterrupted power systems and robust infrastructure.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'tech-excellence',
    title: 'Technical Excellence',
    description: 'Advanced engineering precision in every project.',
    iconName: 'Award'
  },
  {
    id: 'sustainable-energy',
    title: 'Sustainable Energy',
    description: 'Future-proofing Nigeria through green energy initiatives.',
    iconName: 'Leaf'
  },
  {
    id: 'industry-expertise',
    title: 'Industry Expertise',
    description: '19+ years of navigating the complex energy sector.',
    iconName: 'Briefcase'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'elec-gen',
    title: 'Electricity Generation & Supply',
    description: 'Innovative power generation solutions utilizing gas, renewables, and hybrid systems for large-scale applications.',
    detailedDescription: 'Edewor Energy provides state-of-the-art power generation facilities across Nigeria. Our solutions span high-efficiency gas turbine systems, hybrid microgrids, solar PV farms, and back-up diesel generation. We operate under rigorous utility-grade standards to ensure continuous, clean power flow.',
    iconName: 'Zap',
    bullets: [
      'Industrial Independent Power Producer (IPP) development',
      'Solar-diesel hybrid integration systems',
      'Grid connection and power purchase agreement (PPA) support',
      'Operation and preventative maintenance programs'
    ]
  },
  {
    id: 'epc',
    title: 'Engineering, Procurement & Construction (EPC)',
    description: 'Turnkey energy infrastructure projects from concept design to final commissioning and maintenance.',
    detailedDescription: 'Our turnkey EPC capabilities allow us to manage complex high-voltage and medium-voltage infrastructure projects from initial feasibility studies through civil engineering, worldwide procurement of premium equipment, construction, and full energization.',
    iconName: 'Cpu',
    bullets: [
      'Substation and transmission line layout design',
      'Global supply chain procurement of Tier-1 equipment',
      'On-site steel fabrication and structural civil erection',
      'Testing, safety audits, and certified commissioning'
    ]
  },
  {
    id: 'gas-supply',
    title: 'Gas Supply Solutions',
    description: 'Reliability natural gas supply chain management for industrial thermal processes and gas-to-power installations.',
    detailedDescription: 'We build the essential bridges between natural gas fields and industrial users. Edewor Energy manages virtual pipelines via Compressed Natural Gas (CNG) and Liquefied Natural Gas (LNG) transport alongside permanent distribution pipelines to fuel clean thermal operations.',
    iconName: 'Flame',
    bullets: [
      'Industrial gas-to-power feasibility and design',
      'CNG & LNG virtual pipeline distribution transport',
      'Pressure reduction and metering station (PRMS) installations',
      'Long-term secure natural gas delivery contracts'
    ]
  },
  {
    id: 'infra-dev',
    title: 'Energy Infrastructure Development',
    description: 'Designing and implementing robust transmission and distribution networks for urban and industrial zones.',
    detailedDescription: 'We support local utilities, industrial parks, and real estate communities in extending and modernizing their electrical grids. Our advanced grid distribution solutions utilize smart metering and real-time monitoring to cut outages and transmission losses.',
    iconName: 'Network',
    bullets: [
      'Smart grid automation and SCADA systems integration',
      'Underground and overhead distribution cable systems',
      'Transformer injection substation engineering',
      'Loss reduction and power factor correction audits'
    ]
  },
  {
    id: 'consultancy',
    title: 'Energy Consultancy',
    description: 'Strategic advisory on energy efficiency, project feasibility, regulatory compliance, and market entry.',
    detailedDescription: 'Navigating the regulatory, financial, and mechanical complexities of West African energy projects is challenging. Our senior advisory group provides unparalleled market analysis, energy audits, and regulatory engineering compliance strategies.',
    iconName: 'Globe',
    bullets: [
      'NERC regulatory compliance and licensing advisory',
      'Detailed financial modeling and project bankability audits',
      'Industrial energy efficiency and thermal audits',
      'Carbon footprint tracking and decarbonization plans'
    ]
  },
  {
    id: 'equip-supply',
    title: 'Equipment Import & Supply',
    description: 'Global sourcing of high-grade transformers, turbines, and specialized electrical hardware for the local market.',
    detailedDescription: 'Through partnerships with global European and Asian manufacturers, Edewor Energy supplies field-ready power transformers, medium-voltage switchgears, gas turbines, and industrial-grade cables directly to project locations.',
    iconName: 'Wrench',
    bullets: [
      'Direct importing of Tier-1 step-up/step-down transformers',
      'Medium and high-voltage protection switchgears',
      'Certified copper and aluminum core conductor cables',
      'Spare parts logistics and standard manufacturer warranties'
    ]
  }
];

export const PARTNER_REASONS = [
  {
    title: 'Industry Expertise',
    description: 'Deep knowledge of local energy policy and technical requirements.'
  },
  {
    title: 'Reliable Delivery',
    description: 'Proven track record of completing projects on time and within budget.'
  },
  {
    title: 'Innovation',
    description: 'Using latest tech to solve unique Nigerian energy challenges.'
  },
  {
    title: 'Excellence',
    description: 'Commitment to the highest quality standards in all operations.'
  }
];

export const STATS = [
  { value: '50+', label: 'POWER SOLUTIONS' },
  { value: '120+', label: 'PROJECTS COMPLETED' },
  { value: '15+', label: 'YEARS EXPERTISE' },
  { value: '100%', label: 'CLIENT SATISFACTION' }
];

export const INDUSTRIES = [
  { name: 'Manufacturing', iconName: 'Layers' },
  { name: 'Commercial', iconName: 'Building2' },
  { name: 'Industrial', iconName: 'Cpu' },
  { name: 'Infrastructure', iconName: 'Network' },
  { name: 'Government', iconName: 'Building' },
  { name: 'Partners', iconName: 'Globe' }
];
