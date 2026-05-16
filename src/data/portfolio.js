export const personal = {
  name: 'Vamsi Shesamsetti',
  title: 'Full-Stack Developer & Cloud Engineer',
  location: 'Delray Beach, FL',
  email: 'shesamsettivamsi11@gmail.com',
  phone: '+1 (728) 880-9390',
  linkedin: 'https://linkedin.com/in/vamsishesamsetti',
  github: 'https://github.com/vamsishesamsetti',
  summary:
    'M.S. Computer Science student at Florida Atlantic University (GPA 3.9/4.0, May 2026) with 4 cloud certifications spanning AWS and GCP. Building production-grade full-stack applications with React, Node.js, Python/Flask, and cloud infrastructure.',
}

export const projects = [
  {
    title: 'Job Tracker SaaS',
    description:
      'Full-stack job application tracker with JWT auth, Kanban board, analytics dashboard, resume upload via Cloudinary, and email notifications.',
    tech: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'JWT', 'Cloudinary'],
    live: 'https://job-tracker-saas-lgqz.onrender.com',
    github: 'https://github.com/vamsishesamsetti/job-tracker-saas',
    accent: 'border-blue-600',
    highlights: [
      'JWT auth with bcrypt, role-based middleware, rate limiting, and admin panel',
      'Kanban board + analytics dashboard with real-time status charts',
      'Cloudinary file upload, Nodemailer email notifications, Prisma ORM + PostgreSQL',
      'Deployed on Vercel (frontend) + Render (backend)',
    ],
  },
  {
    title: 'CricketPulse',
    description:
      'Real-time cricket scoring platform with live/upcoming/finished match filtering, custom React hooks, and production-grade UX.',
    tech: ['React (Vite)', 'Tailwind CSS', 'CricAPI', 'React Router', 'Vercel'],
    live: 'https://cricket-pulse-two.vercel.app',
    github: 'https://github.com/vamsishesamsetti/live-cricket-score-app',
    accent: 'border-indigo-500',
    highlights: [
      'Custom hook (useMatchDetails) with utility-based match classification system',
      'Persistent pinned matches via localStorage, skeleton loaders, retry-based error UI',
      'Mobile-first responsive design deployed on Vercel with secure env config',
    ],
  },
  {
    title: 'SmartBid',
    description:
      'Secure REST API auction platform with AES-256 encrypted bid storage, transactional MySQL, and race condition prevention.',
    tech: ['Python', 'Flask', 'MySQL', 'JWT', 'AES-256', 'Railway', 'Render'],
    live: null,
    github: 'https://github.com/vamsishesamsetti/smartbid-auction',
    accent: 'border-emerald-500',
    highlights: [
      'AES-256 encrypted bid storage with JWT authentication and bcrypt',
      'Transactional MySQL updates with row-level locking to prevent race conditions',
      'Full auction lifecycle API (create, list, bid, result) following REST semantics',
      'Backend on Render with Railway-managed MySQL; documented in Postman',
    ],
  },
  {
    title: 'AWS CI/CD Showcase',
    description:
      'Containerized Task Manager API with a full GitHub Actions CI/CD pipeline: automated testing, Docker build, ECR push, and EC2 deployment with IAM least-privilege.',
    tech: ['Node.js', 'Express', 'DynamoDB', 'Docker', 'Amazon ECR', 'EC2', 'GitHub Actions', 'IAM'],
    live: null,
    github: 'https://github.com/vamsishesamsetti/aws-cicd-showcase',
    accent: 'border-amber-500',
    highlights: [
      'GitHub Actions pipeline: lint → test → Docker build → push to ECR (git SHA tag) → SSH deploy to EC2',
      'IAM least-privilege: GitHub Actions has ECR push-only; EC2 instance profile has ECR pull-only',
      'Multi-stage Dockerfile with non-root user; CloudWatch log monitoring; 11 Jest tests in CI',
      'DynamoDB tables with GSI on email; JWT auth, bcrypt, rate limiting',
    ],
  },
]

export const skills = [
  {
    category: 'Frontend',
    items: ['React.js (Vite)', 'Tailwind CSS', 'HTML5 / CSS3', 'React Router', 'Context API', 'Custom Hooks'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'Python / Flask', 'Django', 'Prisma ORM', 'JWT Auth', 'bcrypt', 'REST API Design'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'DynamoDB'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS Lambda', 'AWS S3', 'EC2', 'DynamoDB', 'IAM / CloudWatch', 'GCP', 'Docker', 'GitHub Actions', 'Vercel', 'Render', 'Railway'],
  },
  {
    category: 'Languages',
    items: ['JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    category: 'Tools',
    items: ['Git / GitHub', 'GitHub Actions', 'Postman', 'Cloudinary', 'Blue Prism', 'VS Code'],
  },
]

export const certifications = [
  {
    name: 'Associate Cloud Engineer',
    issuer: 'Google Cloud',
    short: 'GCP',
    color: 'bg-blue-50 border-blue-200 text-blue-800',
    badge: 'bg-blue-600',
  },
  {
    name: 'Certified Developer – Associate',
    issuer: 'Amazon Web Services',
    short: 'AWS',
    color: 'bg-orange-50 border-orange-200 text-orange-800',
    badge: 'bg-orange-500',
  },
  {
    name: 'Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    short: 'AWS',
    color: 'bg-orange-50 border-orange-200 text-orange-800',
    badge: 'bg-orange-500',
  },
  {
    name: 'Certified Developer EX183',
    issuer: 'Red Hat',
    short: 'RH',
    color: 'bg-red-50 border-red-200 text-red-800',
    badge: 'bg-red-600',
  },
]

export const education = [
  {
    degree: 'M.S. in Computer Science',
    school: 'Florida Atlantic University',
    location: 'Boca Raton, FL',
    period: '2024 – May 2026',
    gpa: '3.9 / 4.0',
    courses: ['Distributed Systems', 'Cloud Computing', 'Advanced Algorithms', 'Database Systems', 'Software Engineering'],
  },
  {
    degree: 'B.Tech in Computer Science & Engineering (Honors)',
    school: 'KL University',
    location: 'Guntur, India',
    period: '2020 – April 2024',
    gpa: '8.91 / 10.0 CGPA',
    courses: [],
  },
]

export const experience = [
  {
    title: 'AWS Cloud Virtual Internship',
    company: 'EduSkills (AICTE Approved)',
    period: 'Mar – May 2022',
    bullets: [
      'Built and deployed serverless applications using AWS Lambda, S3, and DynamoDB.',
      'Optimized cloud architecture for cost efficiency; implemented IAM-based least-privilege access controls.',
    ],
  },
  {
    title: 'RPA – Blue Prism Virtual Internship',
    company: 'EduSkills (AICTE Approved)',
    period: 'Oct – Dec 2021',
    bullets: [
      'Automated business workflows using Blue Prism, reducing manual processing time by 25%.',
      'Designed and deployed scalable RPA solutions for repetitive data-entry and reporting tasks.',
    ],
  },
]
