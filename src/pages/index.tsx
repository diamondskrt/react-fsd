import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './config';

export const Routing: FC = () => {
  return (
    <Routes>
      {routes.map(({ name, params }) => (
        <Route key={name} path={params.path} element={params.element} />
      ))}
    </Routes>
  );
};
