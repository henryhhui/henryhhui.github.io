export type EducationEntry = {
  institution: string
  qualification: string
  period: string
  location?: string
  details?: string[]
}

export type Award = {
  name: string
  category: string
  detail?: string
}

export const education: EducationEntry[] = [
  {
    institution: 'The University of Hong Kong',
    qualification: 'Bachelor of Engineering in Computer Science · Minor in Finance',
    period: 'Sep 2023 — Jun 2027 (Expected)',
    location: 'Hong Kong',
    details: [
      'Relevant coursework: Data Structures and Algorithms, Machine Learning, Software Engineering, Artificial Intelligence, Robotics, Corporate Finance, Macroeconomics, Algorithm Design and Operating Systems.',
    ],
  },
  {
    institution: 'Queen’s University',
    qualification: 'HKU Worldwide Undergraduate Exchange Programme',
    period: 'Jan 2026 — Apr 2026',
    location: 'Kingston, Canada',
  },
  {
    institution: 'HKCCCU Logos Academy',
    qualification: 'Secondary education',
    period: 'Sep 2011 — Jun 2023',
  },
]

export const awards: Award[] = [
  { name: 'Wong Shek-Yung Memorial Enrichment Award', category: 'University award' },
  { name: 'Talent Development Scholarship', category: 'HKSAR Government Scholarship Fund' },
  { name: 'ABU Robocon 2026 Grand Prix', category: 'Robotics' },
  { name: 'ABU Robocon 2025 First Runner-up', category: 'Robotics' },
  { name: 'Robocon Hong Kong Contest Champion and 2nd Runner-up · 2025', category: 'Robotics' },
  { name: 'Robocon Hong Kong Contest Champion and 2nd Runner-up · 2026', category: 'Robotics' },
  { name: 'Team basketball robot · 1st place · 2025', category: 'Robotics' },
  {
    name: 'CitySpot · Champion / Gold, Inclusive City track',
    category: 'Inter-University GenAI Hackathon for SDGs',
  },
  {
    name: 'Hello, Culture! · 2nd Runner-up / Bronze, Artistic and Cultural Innovation',
    category: 'Inter-University GenAI Hackathon for SDGs',
  },
  { name: 'Microsoft Office Specialist Championship Hong Kong · Gold Award · 2021', category: 'Earlier achievement' },
  { name: 'Robofest Hong Kong BottleSumo Classic Senior Champion', category: 'Earlier achievement' },
  { name: 'Academic Improvement Award', category: 'Earlier achievement' },
  { name: 'Subject Prize in ICT HKDSE Stream', category: 'Earlier achievement' },
  { name: 'Emerald Award', category: 'Earlier achievement' },
]
