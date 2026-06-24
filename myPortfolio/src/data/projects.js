// src/data/projects.js

export const projects = [
  {
    title: 'Current Project Placeholder',
    label: 'In progress',
    type: 'In progress',
    description:
      'A portfolio-ready data science build focused on turning raw data into a practical product with modeling, analytics, and deployment milestones.',
    stack: 'Python · Machine Learning · Analytics · Deployment',
    image: '/images/temporary.jpg',
    url: '#',
    featured: true,
  },
  {
    title: 'NJ-EQUIP',
    label: 'Research + Web Portal',
    type: 'Analytics + Visualization Portal',
    description:
      'Interactive energy-equity portal with map-based visualizations, responsive pages, and an estimator connecting utility costs, heating costs, income, and energy burden.',
    stack: 'React · Vite · Leaflet · Data Visualization',
    image: '/images/njequip.png',
    url: 'https://nj-equip.netlify.app/',
    featured: true,
  },
  {
    title: 'Project Archive',
    label: 'More work',
    type: 'More work',
    description:
      'A separate project page for software, analytics, machine learning, and research projects as the portfolio expands beyond the single-page homepage.',
    stack: 'Portfolio · Case Studies · Reports',
    image: '/images/project-archive.svg',
    url: '/projects',
    internal: true,
    featured: true,
    archiveOnly: true,
  },
  {
    title: 'Federated Healthcare Explainability Research',
    label: 'Machine Learning Research',
    type: 'Machine Learning Research',
    description:
      'Federated learning experiments comparing model performance and explainability across centralized, global federated, and local client models using PyTorch, SHAP, and permutation importance.',
    stack: 'PyTorch · Federated Learning · SHAP · Scikit-learn',
    image: '/images/federated-research.svg',
    url: '#',
    featured: false,
  },
  {
    title: 'Split Learning Research',
    label: 'Accepted Research Paper',
    type: 'Accepted Research Paper',
    description:
      'ICANN 2026 research contribution focused on catastrophic forgetting in split learning and orthogonal projection-based mitigation.',
    stack: 'Split Learning · Deep Learning · Experiment Review',
    image: '/images/split-learning.svg',
    url: '#',
    featured: false,
  },
  {
    title: 'Ticketly',
    label: 'Full-Stack Application',
    type: 'Full-Stack Application',
    description:
      'Venue and event discovery platform with backend development, database design, and responsive React views for events, venues, and reviews.',
    stack: 'React · Django · PostgreSQL · Python',
    image: '/images/Ticketly.png',
    url: 'https://github.com/Lane17027/Ticketly',
    featured: false,
  },
  {
    title: 'DADA',
    label: 'Full-Stack Application',
    type: 'Task Manager Application',
    description:
      'Task manager group project built with a MERN-style stack, focused on organizing tasks, tracking work, and practicing full-stack application development.',
    stack: 'MongoDB · Express · React · Node',
    image: '/images/DADA.png',
    url: 'https://github.com/andrew-taggart/DADA',
    featured: false,
  },
  {
    title: 'Workout Planner',
    label: 'Full-Stack Application',
    type: 'Fitness Planning Application',
    description:
      'Workout planner solo project focused on organizing routines, planning training sessions, and applying a MERN-style full-stack application structure.',
    stack: 'MongoDB · Express · React · Node',
    image: '/images/WorkoutOrganizer.png',
    url: 'https://github.com/andrew-taggart/Workout-Planner',
    featured: false,
  },
  {
    title: 'Pro/Fit Book',
    label: 'Full-Stack Application',
    type: 'Appointment Scheduling Application',
    description:
      'Appointment scheduling application for fitness professionals and clients, built with a React frontend, Django backend, and PostgreSQL database.',
    stack: 'React · Django · PostgreSQL · Python',
    image: '/images/temporary.jpg',
    url: 'https://github.com/andrew-taggart/fit_book',
    featured: false,
  },
  {
    title: 'FoodReactions',
    label: 'Full-Stack Application',
    type: 'Food Reaction Tracker',
    description:
      'Collaborative application concept focused on tracking food reactions and organizing user-reported food-related experiences.',
    stack: 'Full-Stack Development · React · Application Design',
    image: '/images/FoodReactionsImg.png',
    url: 'https://github.com/codydecoder/FoodReactions',
    featured: false,
  },
]