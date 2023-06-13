import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Input } from '@/shared/ui';
import classes from './form.module.scss';

export const AuthForm: FC = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation();

  const onNameChange = (value: string): void => {
    setName(value);
  };

  const onPasswordChange = (value: string): void => {
    setPassword(value);
  };

  const nameRules = [
    (value: string) => !!value || 'Пустое поле'
  ];

  const passwordMinLength = 6;

  const passwordRules = [
    (value: string) => !!value || 'Пустое поле',
    (value: string) => (value || '').length > passwordMinLength || `Пароль должен содержать больше ${passwordMinLength} символов`
  ];

  return (
    <div className={classes.form}>
      <Input value={name} rules={nameRules} placeholder="Имя пользователя" onChange={onNameChange} />

      <Input value={password} rules={passwordRules} placeholder="Пароль" className="q-mt-sm q-mb-md" onChange={onPasswordChange} />

      <Button>{t('auth.signIn')}</Button>
    </div>
  );
};
