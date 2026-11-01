export type Experience = {
  id: string
  organisation: string
  role: string
  period: string
  status?: 'Current'
  context?: string
  summary: string
  contributions: string[]
  tools: string[]
}

export const experiences: Experience[] = [
  {
    id: 'nocvola',
    organisation: 'Nocvola Technology Co., Limited',
    role: 'Software Engineer Intern',
    period: 'Jun 2026 — Aug 2026',
    context: 'Hong Kong',
    summary: 'Built and published Vodmaya, a companion app for smart LED headlights.',
    contributions: [
      'Implemented Bluetooth connectivity and Smart Auto features using CoreLocation and WeatherKit.',
      'Integrated Siri Shortcuts and voice commands, and ported core app functionality to Android Studio.',
      'Worked with TestFlight and App Store Connect release workflows.',
    ],
    tools: ['Swift', 'iOS', 'CoreLocation', 'WeatherKit', 'Bluetooth', 'Siri Shortcuts', 'Android Studio'],
  },
  {
    id: 'teaching-assistant',
    organisation: 'The University of Hong Kong · School of Computing and Data Science',
    role: 'Student Teaching Assistant',
    period: 'Jan 2025 — Present',
    status: 'Current',
    summary: 'Help students make sense of AI and machine learning through practical, guided learning.',
    contributions: [
      'Supported AI Literacy I and the SCDS1001 pilot, including tutorials on AI and machine learning concepts.',
      'Introduced prompt engineering and Google Teachable Machine, guiding students through practical model development.',
      'Mentored groups from topic selection through poster and presentation preparation, and supported course activities with instructors.',
      'Supported multiple classes of up to approximately 40 students.',
    ],
    tools: ['Artificial intelligence', 'Machine learning', 'Prompt engineering', 'Google Teachable Machine'],
  },
  {
    id: 'cathay',
    organisation: 'Cathay Pacific Airways · Cathay Academy',
    role: 'Digital Learning Intern',
    period: 'Jul 2025 — Aug 2025',
    context: 'Hong Kong',
    summary: 'Created a hands-on VR/XR training module for Cathay Cargo loading operations in eight weeks.',
    contributions: [
      'Created 3D aircraft models and assets with SolidWorks and Blender.',
      'Designed and fabricated a physical control panel using 3D printing and laser cutting.',
      'Connected micro and Arduino hardware to XRCC through Bluetooth UART, combining physical controls with virtual training.',
    ],
    tools: ['SolidWorks', 'Blender', 'VR/XR', 'Arduino', 'micro', 'Bluetooth UART', '3D printing', 'Laser cutting'],
  },
  {
    id: 'business-school',
    organisation: 'HKU Business School',
    role: 'Masters Student Assistant',
    period: 'Mar 2025 — Jun 2025',
    summary: 'Contributed to a data-driven shuttle bus optimisation project.',
    contributions: [
      'Used Python for data analysis and predictive modelling.',
      'Supported operational analysis and scheduling optimisation to explore data-informed improvements in transportation efficiency.',
    ],
    tools: ['Python', 'Data analysis', 'Predictive modelling'],
  },
  {
    id: 'computer-vision',
    organisation: 'HKU Department of Data and Systems Engineering',
    role: 'Computer Vision Research Assistant',
    period: 'Mar 2025 — Apr 2025',
    summary: 'Supported research into human gesture recognition in virtual reality.',
    contributions: [
      'Preprocessed and annotated data, reviewed academic literature, and assisted with research preparation and data organisation.',
    ],
    tools: ['Computer vision', 'Gesture recognition', 'Virtual reality', 'Data preprocessing'],
  },
  {
    id: 'common-core',
    organisation: 'HKU Common Core',
    role: 'Student Research Intern',
    period: 'Dec 2024 — Mar 2025',
    context: 'Research project · “Artificial Intelligence for Reimagining Learning”',
    summary: 'Explored how generative AI is being used in education and the questions that use raises.',
    contributions: [
      'Interviewed students and teachers and reviewed case studies involving generative AI in learning.',
      'Assisted with survey and interview design, conducted literature reviews, and examined ethical considerations.',
    ],
    tools: ['Generative AI', 'Education research', 'Interviews', 'Survey design', 'Literature review', 'AI ethics'],
  },
  {
    id: 'ambassador',
    organisation: 'HKU School of Computing and Data Science',
    role: 'Student Ambassador',
    period: 'Oct 2024 — Present',
    status: 'Current',
    summary: 'Help prospective students learn about HKU computing programmes and student life.',
    contributions: [
      'Participated in HKU Undergraduate Admissions Information Day 2024.',
      'Supported Computer Science and AI+DS admissions workshops, introducing academic programmes and student experiences.',
    ],
    tools: ['Student engagement', 'Programme outreach'],
  },
  {
    id: 'summer-stem',
    organisation: 'HKU Department of Data and Systems Engineering',
    role: 'Summer STEM Intern',
    period: 'Jun 2024 — Aug 2024',
    summary: 'Worked on a bottle sorting line and developed a foldable, 3D-printed drone prototype.',
    contributions: [
      'Used SolidWorks for mechanical design and worked with MicroPython and ESP32.',
      'Designed and developed a small 3D-printed drone.',
    ],
    tools: ['SolidWorks', 'MicroPython', 'ESP32', '3D printing'],
  },
]
