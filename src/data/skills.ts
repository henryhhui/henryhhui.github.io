export type SkillGroup = {
  name: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    name: 'Programming languages',
    skills: ['Python', 'Java', 'C / C++', 'JavaScript', 'Swift', 'SQL', 'MicroPython'],
  },
  {
    name: 'AI & data',
    skills: [
      'Artificial intelligence',
      'Machine learning',
      'Computer vision',
      'Reinforcement learning',
      'Predictive modelling',
      'Data analysis',
      'Prompt engineering',
      'Data preprocessing',
    ],
  },
  {
    name: 'Software & web',
    skills: ['iOS development', 'Android Studio', 'Node.js', 'Supabase', 'Cloudflare', 'Git', 'Web application development'],
  },
  {
    name: 'Data analytics & business',
    skills: ['Python-based data analysis', 'Predictive modelling', 'SQL'],
  },
  {
    name: 'Robotics & hardware',
    skills: ['Arduino', 'ESP32', 'micro', 'Bluetooth', 'Robotics', 'CNC machining', 'Waterjet cutting', 'Laser cutting', '3D printing'],
  },
  {
    name: 'CAD & 3D',
    skills: ['SolidWorks', 'Blender', 'CAD design', 'Mechanical assemblies'],
  },
]

export const languages = [
  { name: 'Cantonese', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'Mandarin', level: 'Fluent' },
]
