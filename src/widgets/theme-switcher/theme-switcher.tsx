
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/providers/with-store/store';
import { Button } from '@/shared/ui';
import { ButtonColor, ButtonVariant } from '@/shared/ui/button';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { toggleDarkMode } from './model/slice';

export const ThemeSwitcher: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const darkMode = useSelector((state: RootState) => state.switchTheme.darkMode);

  const switchTheme = (): void => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <Button data-testid="theme-switcher" variant={ButtonVariant.ICON} color={ButtonColor.SURFACE} onClick={switchTheme}>
        {
          darkMode
            ? (
                <MdDarkMode size="24px" />
              )
            : (
                <MdLightMode size="24px" />
              )
        }
      </Button>
    </>
  );
};
