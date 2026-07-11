export const profile = {
  name: 'Anuvind P',
  role: 'Full Stack Web Developer',
  tagline: 'I build secure, responsive, and user-friendly web applications.',
  intro:
    "I'm a BCA student specializing in Cyber Security with a strong interest in full-stack web development. I enjoy building secure, responsive, and user-friendly web applications while continuously improving my skills.",
  location: 'Kannur, Kerala',
  email: 'anuvindp49@gmail.com',
  phone: '+91 9605916623',
  resumeUrl: '#',
  socials: {
    github: 'https://github.com/anuvindp',
    linkedin: 'https://www.linkedin.com/in/anuvind-p-b5626b369',
    twitter: 'https://twitter.com/anuvindp',
    email: 'mailto:anuvindp49@gmail.com',
  },
};

export const about = {
  summary:
    "I'm a BCA student specializing in Cyber Security with a strong interest in full-stack web development. I enjoy building secure, responsive, and user-friendly web applications while continuously improving my skills. My background in cyber security gives me a unique perspective on building applications that are not just functional, but also secure by design.",
  objective:
    'To grow as a full stack developer by building real-world web applications, contributing to impactful projects, and continuously learning modern technologies while applying my cyber security knowledge to build safer software.',
  education: [
    {
      degree: 'BCA with Cyber Security Add-on',
      school: 'Koshys Group of Institutions',
      period: '2023 — 2026',
      detail:
        'Pursuing a Bachelor of Computer Applications with a Cyber Security specialization. CGPA: 7.51. Coursework covers programming, databases, web technologies, and security fundamentals.',
    },
  ],
};

export type Skill = { name: string; category: 'Frontend' | 'Backend' | 'Database' | 'Languages' | 'Tools' };

export const skills: Skill[] = [
  { name: 'HTML', category: 'Frontend' },
  { name: 'CSS', category: 'Frontend' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'PHP', category: 'Backend' },
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },
  { name: 'MySQL', category: 'Database' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  screenshots: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  status?: string;
  featured?: boolean;
  features: string[];
  challenges: string[];
  learnings: string[];
};

export const projects: Project[] = [
  {
    title: 'EV Spare Parts E-commerce Website',
    description:
      'A complete EV spare parts marketplace featuring authentication, product catalog, shopping cart, order management, and an admin dashboard. Currently a work in progress.',
    image: 'https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=1200',
    screenshots: [
      'https://images.pexels.com/photos/376361/pexels-photo-376361.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/4489702/pexels-photo-4489702.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
    status: 'Work In Progress',
    featured: true,
    features: [
      'User Authentication',
      'Product Catalog',
      'Search & Filters',
      'Shopping Cart',
      'Secure Checkout',
      'Order Management',
      'Admin Dashboard',
      'Responsive Design',
    ],
    challenges: [
      'Designing a flexible product schema that accommodates many EV part categories and variants without hardcoding each one.',
      'Implementing a cart and checkout flow that stays consistent across page reloads and handles edge cases like stock changes.',
      'Building an admin dashboard with CRUD operations for products, orders, and users while keeping routes protected.',
    ],
    learnings: [
      'How to structure a MERN project with clear separation between client and server concerns.',
      'JWT-based authentication and protected routes in React.',
      'Designing REST APIs that are intuitive and consistent for both customers and admin operations.',
    ],
  },
  {
    title: 'Student Result Management System',
    description:
      'A web application for managing student records, entering examination results, updating marks, and generating reports. Built with a PHP and MySQL backend for reliable data handling.',
    image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
    screenshots: [
      'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1200',
    ],
    tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    features: [
      'Student record management',
      'Exam result entry and editing',
      'Marks calculation and updates',
      'Report generation',
      'Role-based access for staff',
    ],
    challenges: [
      'Designing a normalized MySQL schema that links students, subjects, and exams without data redundancy.',
      'Writing secure PHP queries that prevent SQL injection while handling dynamic result data.',
      'Generating clean, printable reports from database records.',
    ],
    learnings: [
      'Server-side rendering and form handling with PHP.',
      'Writing parameterized queries and validating user input to keep the app secure.',
      'How to model real-world academic data in a relational database.',
    ],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  type: 'Internship' | 'Freelance' | 'Full-time';
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    role: 'Software Development Intern',
    company: 'Agile Growth Hackers',
    period: 'Internship',
    type: 'Internship',
    description:
      'Gained hands-on experience in software development, working on real projects and collaborating with a development team to build and ship web applications.',
    highlights: [
      'Worked on real-world software development projects in a collaborative team environment.',
      'Applied full stack development practices across frontend and backend.',
      'Strengthened skills in version control, debugging, and clean code practices.',
    ],
  },
];

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  url: string;
};

export const certifications: Certification[] = [
  {
    title: 'Python Programming',
    issuer: 'Certification',
    year: '',
    url: '#',
  },
  {
    title: 'Programming in C',
    issuer: 'Certification',
    year: '',
    url: '#',
  },
  {
    title: 'AI & Machine Learning',
    issuer: 'Certification',
    year: '',
    url: '#',
  },
  {
    title: 'Cyber Security & Ethical Hacking',
    issuer: 'Certification',
    year: '',
    url: '#',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
