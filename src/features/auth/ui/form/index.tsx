import { FC, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState, AppDispatch } from '@/app/providers/with-store/store';
import { Button, ErrorMessage, Input } from '@/shared/ui';
import { setName, setPassword } from '../../model/slice';
import { auth } from '../../model/service';
import { AuthFormProps } from './types';
import classes from './form.module.scss';

export const AuthForm: FC<AuthFormProps> = ({ closeModal }) => {
  const dispatch: AppDispatch = useDispatch();

  const { t } = useTranslation();

  const { name, password, isLoading, error } = useSelector((state: RootState) => state.auth);

  const [nameError, setNameError] = useState(false);

  const [passwordError, setPasswordError] = useState(false);

  const onNameChange = useCallback((value: string): void => {
    dispatch(setName(value));
  }, [dispatch]);

  const onPasswordChange = useCallback((value: string): void => {
    dispatch(setPassword(value));
  }, [dispatch]);

  const nameRules = [
    (value: string) => !!value || 'Пустое поле'
  ];

  const passwordMinLength = 4;

  const passwordRules = [
    (value: string) => !!value || 'Пустое поле',
    (value: string) => (value || '').length > passwordMinLength || `Пароль должен содержать больше ${passwordMinLength} символов`
  ];

  const isFormValid = Boolean(!(nameError || passwordError) && name.length && password.length);

  const onSignIn = useCallback(async (): Promise<void> => {
    if (!isFormValid) return;

    try {
      await dispatch(auth({ name, password })).unwrap();

      closeModal();
    } catch (error) {}
  }, [dispatch, name, password, nameError, passwordError]);

  return (
    <div className={classes.form}>
      <ErrorMessage message={error} className="q-mb-sm" />

      <Input
        value={name}
        rules={nameRules}
        placeholder="Имя пользователя"
        setError={setNameError}
        onChange={onNameChange}
      />

      <Input
        value={password}
        rules={passwordRules}
        placeholder="Пароль"
        className="q-mt-sm q-mb-md"
        setError={setPasswordError}
        onChange={onPasswordChange}
      />

      <Button disabled={isLoading || !isFormValid} onClick={onSignIn}>{t('auth.signIn')}</Button>
    </div>
  );
};
