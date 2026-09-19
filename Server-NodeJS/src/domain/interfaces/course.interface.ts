export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  semester: number;
  area: CourseArea;
}

export type CourseArea =
  | 'Ingeniería de software'
  | 'Bases de datos'
  | 'Redes'
  | 'Matemáticas'
  | 'Humanidades';
