export interface Category {
  id: string;
  translationKey: string;
  descriptionKey: string;
  icon: string;
  color: string;
  url: string;
}

const categories: Category[] = [
  {
    id: 'early-learning',
    translationKey: 'earlyLearning',
    descriptionKey: 'earlyLearningDesc',
    icon: 'BookOpen',
    color: 'bg-blue-100 hover:bg-blue-200',
    url: 'https://diksha.gov.in/explore'
  },
  {
    id: 'stem',
    translationKey: 'stem',
    descriptionKey: 'stemDesc',
    icon: 'Atom',
    color: 'bg-green-100 hover:bg-green-200',
    url: 'https://swayam.gov.in/'
  },
  {
    id: 'health-hygiene',
    translationKey: 'healthHygiene',
    descriptionKey: 'healthHygieneDesc',
    icon: 'HeartPulse',
    color: 'bg-red-100 hover:bg-red-200',
    url: 'https://nhm.gov.in/index1.php?lang=1&level=1&sublinkid=150&lid=151'
  },
  {
    id: 'skill-development',
    translationKey: 'skillDevelopment',
    descriptionKey: 'skillDevelopmentDesc',
    icon: 'GraduationCap',
    color: 'bg-yellow-100 hover:bg-yellow-200',
    url: 'https://youtu.be/HVjjoMvutj4?si=0osikgt4VPmOuMvT'
  },
  {
    id: 'free-coding',
    translationKey: 'freeCoding',
    descriptionKey: 'freeCodingDesc',
    icon: 'Code',
    color: 'bg-indigo-100 hover:bg-indigo-200',
    url: 'https://youtu.be/ZxKM3DCV2kE?si=xKuMnLIeRkJ710Xl'
  },
  {
    id: 'mann-ki-baat',
    translationKey: 'mannKiBaat',
    descriptionKey: 'mannKiBaatDesc',
    icon: 'Radio',
    color: 'bg-amber-100 hover:bg-amber-200',
    url: 'https://youtube.com/playlist?list=PLBG6UuYpOcTvg9ALz7cJelclMi1oc7TQp&si=Xwl6BeFwYY-fSul5'
  },
  {
    id: 'ai',
    translationKey: 'ai',
    descriptionKey: 'aiDesc',
    icon: 'BrainCircuit',
    color: 'bg-purple-100 hover:bg-purple-200',
    url: 'https://www.mygreatlearning.com/academy/learn-for-free/courses/introduction-to-artificial-intelligence'
  },
  {
    id: 'personality-development',
    translationKey: 'personalityDevelopment',
    descriptionKey: 'personalityDevelopmentDesc',
    icon: 'Smile',
    color: 'bg-orange-100 hover:bg-orange-200',
    url: 'https://ndl.iitkgp.ac.in/'
  },
  {
    id: 'motivation',
    translationKey: 'motivation',
    descriptionKey: 'motivationDesc',
    icon: 'Rocket',
    color: 'bg-teal-100 hover:bg-teal-200',
    url: 'https://www.gutenberg.org/ebooks/subject/2578'
  },
  {
    id: 'spiritual-growth',
    translationKey: 'spiritualGrowth',
    descriptionKey: 'spiritualGrowthDesc',
    icon: 'Flower2',
    color: 'bg-indigo-100 hover:bg-indigo-200',
    url: 'https://www.kidsgen.com/mythology/hindu_mythology.htm'
  },
  {
    id: 'scholarships',
    translationKey: 'scholarships',
    descriptionKey: 'scholarshipsDesc',
    icon: 'Award',
    color: 'bg-pink-100 hover:bg-pink-200',
    url: 'https://scholarships.gov.in/'
  },
  {
    id: 'current-affairs',
    translationKey: 'currentAffairs',
    descriptionKey: 'currentAffairsDesc',
    icon: 'Newspaper',
    color: 'bg-cyan-100 hover:bg-cyan-200',
    url: 'https://www.inshorts.com/en/read'
  },
  {
    id: 'chemistry',
    translationKey: 'chemistry',
    descriptionKey: 'chemistryDesc',
    icon: 'Atom',
    color: 'bg-emerald-100 hover:bg-emerald-200',
    url: 'https://youtube.com/playlist?list=PLVLoWQFkZbhVdStvLVoS3kU7RBaJR4JTR&si=tmhFatJ4WaM8Da0J'
  },
  {
    id: 'physics',
    translationKey: 'physics',
    descriptionKey: 'physicsDesc',
    icon: 'Bomb',
    color: 'bg-sky-100 hover:bg-sky-200',
    url: 'https://youtube.com/playlist?list=PLVLoWQFkZbhV-wpC6Z6bUWz9m3itDKmYe&si=8ckBJjwFvu9S6uH7'
  },
  {
    id: 'mathematics',
    translationKey: 'mathematics',
    descriptionKey: 'mathematicsDesc',
    icon: 'Calculator',
    color: 'bg-blue-100 hover:bg-blue-200',
    url: 'https://youtube.com/playlist?list=PLVLoWQFkZbhU5r5DlfxPc3gKw-QLLAvLn&si=0_mcphd38m-Jl3Jg'
  }
];

export default categories;
