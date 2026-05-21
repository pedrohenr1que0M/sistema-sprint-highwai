export type RiskLevel = 'baixo' | 'medio' | 'alto';

export interface Occurrence {
  id: string;
  title: string;
  description: string;
  risk: RiskLevel;
  date: string;
  location: string;
}