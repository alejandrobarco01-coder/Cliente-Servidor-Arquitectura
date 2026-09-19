export interface AcademicEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  type: AcademicEventType;
  capacity: number;
}

export type AcademicEventType = 'Seminario' | 'Conferencia' | 'Taller' | 'Feria académica';
