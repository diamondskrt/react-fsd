import { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
}

export interface CardHeaderProps extends CardProps {

}

export interface CardActionsProps extends CardProps {
}
