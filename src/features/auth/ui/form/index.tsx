import { FC, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState, AppDispatch } from '@/app/providers/with-store/store';
import { Button, Form, Input } from '@/shared/ui';
import { setName, setPassword } from '../../model/slice';
import { auth } from '../../model/service';
import { AuthFormProps } from './types';
import classes from './form.module.scss';

export const AuthForm: FC<AuthFormProps> = ({ closeModal }) => {
  const dispatch: AppDispatch = useDispatch();

  const { t } = useTranslation();

  const { name, password, isLoading, error } = useSelector((state: RootState) => state.auth);

  // вывести значение isValid из компонента <Form />
  // const [isValid, setIsValid] = useState(true);

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

  const onSignIn = useCallback(async (): Promise<void> => {
    // if (!isValid) return;

    try {
      await dispatch(auth({ name, password })).unwrap();

      closeModal();
    } catch (error) {}
  }, [dispatch, name, password]);

  return (
    <div className={classes.form}>
      {/* @todo доработать сообщение об ошибке */}
      <div className="q-mb-sm">
        <small className="error-message">{error}</small>
      </div>

      <Form>
        <Input
          value={name}
          rules={nameRules}
          placeholder="Имя пользователя"
          onChange={onNameChange}
        />

        <Input
          value={password}
          rules={passwordRules}
          placeholder="Пароль"
          className="q-mt-sm q-mb-md"
          onChange={onPasswordChange}
        />
      </Form>

      <Button disabled={isLoading} onClick={onSignIn}>{t('auth.signIn')}</Button>
    </div>
  );
};
