import { FC } from 'react';
import { AppBarColor, AppBarProps } from './types';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/providers/with-store/store';
import './appbar.scoped.scss';

export const AppBar: FC<AppBarProps> = ({ children, color }) => {
  const darkMode = useSelector((state: RootState) => state.switchTheme.darkMode);

  const getNavbarColor = (): AppBarColor => {
    return color ?? (darkMode ? AppBarColor.DARK : AppBarColor.PRIMARY);
  };
  return (
    <header className={`appbar ${getNavbarColor()}`}>
      {children}
    </header>
  );
};
