export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  thumbnail: string;
  images: string[];
  link: string;
  technologies: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 'crm-system',
    title: 'CRM System',
    shortDescription: 'Enterprise-level CRM solution with advanced deal management.',
    fullDescription:
      'This CRM system was built for enterprise companies to manage deals, pipelines, analytics, roles, and real-time collaboration between teams. It includes comprehensive dashboards, granular permissions, detailed reports, and performance tracking. The system supports multiple teams working simultaneously with role-based access control, automated workflows, and real-time notifications.',
    thumbnail: 'https://images2.imgbox.com/66/03/OMIMyTc7_o.png',
    images: [
      'https://images2.imgbox.com/66/03/OMIMyTc7_o.png',
      'https://images2.imgbox.com/52/a2/nUCk98GS_o.png',
      'https://images2.imgbox.com/d4/bf/zYSzh0Ef_o.png',
      'https://images2.imgbox.com/04/8d/EL3ETGaY_o.png',
      'https://images2.imgbox.com/74/6e/LFOa7Gov_o.png',
      'https://images2.imgbox.com/95/58/nNkLx25q_o.png',
      'https://images2.imgbox.com/7c/ea/UUfqWT9M_o.png',
      'https://images2.imgbox.com/3f/5c/YbuoBdnf_o.png',
    ],
    link: 'https://demo.dealcrm.net',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'PostgreSQL'],
    features: [
      'Advanced Lead Management',
      'Advanced Deal Management',
      'Inventory (Primary / Resale)',
      'Integrate with Facebook',
      'Payment Plan',
      'Commissions System',
      'Installment System',
      'Unit Share',
      'Owner Dahbourd',
      'Real-time team collaboration',
      'Role-based access control',
      'Analytics and reporting dashboards',
      'Automated workflow system',
      'Performance tracking and metrics',
    ],
  },
  {
    id: 'hr-system',
    title: 'HR System',
    shortDescription: 'Human resources management platform for enterprises.',
    fullDescription:
      'Complete HR system including employee profiles, attendance tracking, payroll management, performance reviews, and comprehensive reports. This platform streamlines all HR operations with automated leave management, performance evaluation workflows, and integrated payroll processing.',
    thumbnail: 'https://images2.imgbox.com/1a/50/jVlZalhh_o.png',
    images: [
      'https://images2.imgbox.com/1a/50/jVlZalhh_o.png',
      'https://images2.imgbox.com/2b/16/HDih2BmS_o.png',
      'https://images2.imgbox.com/a2/84/unzfSwI5_o.png',
      'https://images2.imgbox.com/f6/13/lEv97pwa_o.png',
      'https://images2.imgbox.com/3b/df/kKXWIUDv_o.png',
      'https://images2.imgbox.com/64/49/xYVW1BdZ_o.png',
      'https://images2.imgbox.com/b1/73/pUf1ZzA1_o.png',
    ],
    link: 'https://hr.vertex-eng.co',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'PostgreSQL'],
    features: [
      'Employee profile management',
      'Attendance tracking system',
      'Financial Management',
      'Payroll integration',
      'Requests Management',
      'Performance review workflows',
      'Leave management automation',
      'Comprehensive HR reports',
    ],
  },
  {
    id: 'real-estate',
    title: 'Real Estate Company Portfolio',
    shortDescription: 'Modern real estate landing page with property listings.',
    fullDescription:
      'Modern real estate landing page with property listings, virtual tours, agent profiles, and integrated inquiry system. Features advanced search filters, interactive maps, and seamless contact forms for potential buyers.',
    thumbnail: 'https://images2.imgbox.com/59/5f/aPGxsbxB_o.png',
    images: [
      'https://images2.imgbox.com/59/5f/aPGxsbxB_o.png',
      'https://images2.imgbox.com/a4/39/uoCjUb3F_o.png',
      'https://images2.imgbox.com/d5/b6/ItQPkPvl_o.png',
      'https://images2.imgbox.com/20/18/LwR5IArk_o.png',
    ],
    link: 'https://realestate-landingpage-eight.vercel.app',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    features: [
      'Property listings with filters',
      'Virtual tour integration',
      'Agent profile pages',
      'Inquiry system',
      'Responsive design',
    ],
  },
  {
    id: 'protection-gaints',
    title: 'Protection Gaints',
    shortDescription: 'Security solutions platform showcasing protective services.',
    fullDescription:
      'Security solutions platform showcasing protective services, risk assessment tools, and comprehensive safety features. Designed for security companies to present their services and capabilities to potential clients.',
    thumbnail: 'https://images2.imgbox.com/71/12/G4RNA7bk_o.png',
    images: [
      'https://images2.imgbox.com/71/12/G4RNA7bk_o.png',
      'https://images2.imgbox.com/20/d3/qnBMO32w_o.png',
      'https://images2.imgbox.com/e6/69/HxVWoEok_o.png',
      'https://images2.imgbox.com/83/13/fXzAY42p_o.png',
    ],
    link: 'https://protection-gaints.vercel.app',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Service showcase',
      'Risk assessment tools',
      'Contact forms',
      'Modern UI design',
    ],
  },
  {
    id: 'auto-store',
    title: 'Auto Store',
    shortDescription: 'Automotive e-commerce platform featuring vehicle inventory.',
    fullDescription:
      'Automotive e-commerce platform featuring vehicle inventory, detailed specifications, and seamless purchasing experience. Complete with advanced search, financing calculators, and appointment booking.',
    thumbnail: 'https://images2.imgbox.com/c6/34/JWbtP9j1_o.png',
    images: [
      'https://images2.imgbox.com/c6/34/JWbtP9j1_o.png',
      'https://images2.imgbox.com/c0/78/d9a3cNr6_o.png',
      'https://images2.imgbox.com/1e/1d/uRt0neRn_o.png',
      'https://images2.imgbox.com/d5/8a/cMtaFRSu_o.png',
      'https://images2.imgbox.com/57/1e/IatmFD73_o.png',
      'https://images2.imgbox.com/d0/ac/UcPXJUo8_o.png',
      'https://images2.imgbox.com/cf/47/4dU6bxK7_o.png',
    ],
    link: 'https://autostore-eg.com',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Vehicle inventory system',
      'Advanced search filters',
      'Detailed specifications',
      'Financing calculator',
      'Test drive booking',
    ],
  },
  {
    id: 'super-pro',
    title: 'Super Pro',
    shortDescription: 'Professional services marketplace with expert profiles.',
    fullDescription:
      'Professional services marketplace with expert profiles, booking system, and real-time project management capabilities. Connects clients with professionals across various industries.',
    thumbnail: 'https://images2.imgbox.com/b2/d4/x0GYnV3Q_o.png',
    images: [
      'https://images2.imgbox.com/b2/d4/x0GYnV3Q_o.png',
      'https://images2.imgbox.com/6e/fa/oNHduLZY_o.png',
      'https://images2.imgbox.com/75/3e/GvA23g2T_o.png',
      'https://images2.imgbox.com/dd/23/nFbdBO28_o.png',
      'https://images2.imgbox.com/21/21/6PrQrMHW_o.png',
      'https://images2.imgbox.com/6a/b6/WklqIcOn_o.png',
      'https://images2.imgbox.com/8a/ea/sWsL2XzW_o.png',
    ],
    link: 'https://www.superpro-usa.net',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Expert profiles',
      'Booking system',
      'Project management',
      'Rating and reviews',
      'Real-time chat',
    ],
  },
  {
    id: 'education-courses',
    title: 'Education Courses',
    shortDescription: 'Interactive online learning platform with course management.',
    fullDescription:
      'Interactive online learning platform with course management, student progress tracking, and live certification programs. Features video lessons, quizzes, assignments, and student-instructor interaction.',
    thumbnail: 'https://images2.imgbox.com/70/22/ZfueBo8v_o.png',
    images: [
      'https://images2.imgbox.com/70/22/ZfueBo8v_o.png',
      'https://images2.imgbox.com/70/22/ZfueBo8v_o.png',
    ],
    link: 'https://geniuses-courses.vercel.app',
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    features: [
      'Course management system',
      'Progress tracking',
      'Video lessons',
      'Quizzes and assignments',
      'Certification programs',
    ],
  },
];
