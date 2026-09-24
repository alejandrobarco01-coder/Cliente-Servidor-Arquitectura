/** Representa un evento académico expuesto por la API. */
export interface AcademicEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  type: string;
  capacity: number;
}
