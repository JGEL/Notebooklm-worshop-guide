
export interface NavLinkItem {
  label: string;
  path: string;
}

export interface WorkshopPhase {
  id: string;
  title: string;
  duration: string;
  description: string[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface LearningObjective {
  id: string;
  phase: string;
  objectives: string[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface FunctionalityDetail {
  title: string;
  points: string[];
}

export interface NotebookLMFunctionality {
  id: string;
  title: string;
  details: FunctionalityDetail[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface MedicalApplication {
  id: string;
  title: string;
  details: string[];
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface ParticipantProfileItem {
  id: string;
  profile: string;
}
