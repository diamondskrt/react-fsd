import { Configuration } from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/webpack/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './config/webpack/types/config';

export default (env: BuildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };

  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const config = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  });

  return config;
};
