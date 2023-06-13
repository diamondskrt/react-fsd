import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  height?: string;
  sectionClass?: string;
}

export interface CardHeaderProps extends CardProps {

}

export interface CardActionsProps extends CardProps {
}

export interface CardSlots {
  header: ReactNode;
  default: ReactNode;
  actions: ReactNode;
}
