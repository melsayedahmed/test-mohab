export interface ProjectCountry {
  country: string;
  projects: number;
}

export interface StudentLocation {
  name: string;
  lat: number;
  lng: number;
  students: number;
}

export const projectsData: ProjectCountry[] = [
  { country: 'Saudi Arabia', projects: 12 },
  { country: 'Egypt', projects: 8 },
  { country: 'United States', projects: 5 },
  { country: 'United Arab Emirates', projects: 6 },
  { country: 'Kuwait', projects: 4 },
  { country: 'Jordan', projects: 3 },
];

export const studentsData: StudentLocation[] = [
  { name: 'Cairo', lat: 30.0444, lng: 31.2357, students: 120 },
  { name: 'Riyadh', lat: 24.7136, lng: 46.6753, students: 80 },
  { name: 'Dubai', lat: 25.2048, lng: 55.2708, students: 65 },
  { name: 'New York', lat: 40.7128, lng: -74.006, students: 45 },
  { name: 'Kuwait City', lat: 29.3759, lng: 47.9774, students: 38 },
  { name: 'Amman', lat: 31.9454, lng: 35.9284, students: 28 },
  { name: 'Alexandria', lat: 31.2001, lng: 29.9187, students: 52 },
];
