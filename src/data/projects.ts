export type Project = {
  id: string
  title: string
  period: string
  discipline: string
  summary: string
  motivation: string
  role: string
  implementation: string[]
  result?: string
  technologies: string[]
  visual: 'robot' | 'match' | 'light' | 'culture' | 'city' | 'workshop'
  relatedExperienceId?: string
  image?: string
  link?: string
}

export const projects: Project[] = [
  {
    id: 'adaptive-chassis',
    title: 'Reinforcement Learning-Based Control of an Adaptive Robot Chassis',
    period: 'Sep 2026 — Present',
    discipline: 'Robotics · Reinforcement learning',
    summary: 'An adaptive chassis for traversing unstructured terrain, controlled through learned locomotion.',
    motivation: 'Explore how a robot can adapt its movement to changing terrain without relying on an explicit mode signal.',
    role: 'Developing the CAD-to-simulation workflow and reinforcement-learning control.',
    implementation: [
      'Building a CAD-to-simulation workflow and simulation environments in Isaac Lab.',
      'Developing PPO-based control and exploring terrain-dependent locomotion with proprioceptive feedback.',
    ],
    technologies: ['Python', 'PPO', 'Isaac Lab', 'Robotics', 'Simulation', 'CAD'],
    visual: 'robot',
  },
  {
    id: 'kung-fu-master',
    title: 'Kung Fu Master',
    period: 'Jun 2026 — Aug 2026',
    discipline: 'Web application · Robocon',
    summary: 'A collaborative match-data logging application for ABU Robocon 2026 Kung Fu Quest.',
    motivation: 'Give the team a structured way to log, organise and review competition match data.',
    role: 'Project contributor',
    implementation: [
      'Built structured match-data logging with single-user and multi-user workflows.',
      'Added performance summaries and organised match records to support competition review.',
    ],
    technologies: ['JavaScript', 'Node.js', 'Supabase', 'Cloudflare'],
    visual: 'match',
  },
  {
    id: 'vodmaya',
    title: 'Vodmaya',
    period: 'Jun 2026 — Aug 2026',
    discipline: 'iOS · Smart mobility',
    summary: 'An iOS application for controlling smart LED headlights, developed during my Nocvola internship.',
    motivation: 'Make smart-headlight controls and context-aware automation accessible through a companion app.',
    role: 'Software Engineer Intern at Nocvola Technology Co., Limited',
    implementation: [
      'Implemented Bluetooth connectivity and Smart Auto features using location and weather context.',
      'Integrated Siri Shortcuts and voice commands, ported core functionality to Android Studio, and worked with TestFlight and App Store Connect.',
    ],
    technologies: ['Swift', 'iOS', 'CoreLocation', 'WeatherKit', 'Bluetooth', 'Siri Shortcuts', 'Android Studio'],
    visual: 'light',
    relatedExperienceId: 'nocvola',
  },
  {
    id: 'hello-culture',
    title: 'Hello, Culture!',
    period: 'Sep 2025 — Nov 2025',
    discipline: 'Augmented reality · Generative AI',
    summary: 'An application combining augmented reality and generative AI to explore Hong Kong heritage and culture.',
    motivation: 'Create a new way to engage with Hong Kong heritage through immersive and generative technology.',
    role: 'Project team member',
    implementation: [
      'Combined augmented reality with generative AI in an application focused on Hong Kong culture.',
    ],
    result: '2nd Runner-up / Bronze, Artistic and Cultural Innovation — Inter-University GenAI Hackathon for SDGs.',
    technologies: ['Augmented reality', 'Generative AI', 'Cultural heritage'],
    visual: 'culture',
  },
  {
    id: 'cityspot',
    title: 'CitySpot',
    period: 'Sep 2024 — Apr 2025',
    discipline: 'Inclusive cities · Generative AI',
    summary: 'An AI-powered application developed for the Inclusive City theme.',
    motivation: 'Explore how generative AI could support an application centred on more inclusive cities.',
    role: 'Contributed image-to-text prompt engineering.',
    implementation: [
      'Worked on image-to-text prompt engineering and applied generative AI to the inclusive-city application.',
    ],
    result: 'Champion / Gold, Inclusive City track — Inter-University GenAI Hackathon for SDGs; received HKU Seed Programme funding.',
    technologies: ['Generative AI', 'Prompt engineering', 'Inclusive cities'],
    visual: 'city',
  },
  {
    id: 'summer-stem-projects',
    title: 'HKU Summer STEM Projects',
    period: 'Jun 2024 — Aug 2024',
    discipline: 'Mechanical design · Hardware',
    summary: 'A hands-on collection of projects spanning an automated bottle sorting line and a foldable drone.',
    motivation: 'Explore practical engineering across mechanical design, embedded programming and physical prototypes.',
    role: 'Summer STEM Intern at HKU Department of Data and Systems Engineering',
    implementation: [
      'Worked on a bottle sorting line and designed a foldable drone prototype in SolidWorks.',
      'Developed a small 3D-printed drone using MicroPython and ESP32.',
    ],
    technologies: ['SolidWorks', 'MicroPython', 'ESP32', '3D printing', 'Mechanical design'],
    visual: 'workshop',
    relatedExperienceId: 'summer-stem',
  },
]
