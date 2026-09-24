/** Representa un curso académico expuesto por la API. */
export interface Course {
  id: number;
  name: string;
  code: string;
  credits: number;
  semester: number;
  area: string;
}
