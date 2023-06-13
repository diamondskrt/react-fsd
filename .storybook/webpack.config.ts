import path from 'path';
import { Configuration } from 'webpack';
import { BuildPaths } from '../config/webpack/types/config';
import { getSassLoader, getSVGLoader } from '../config/webpack/buildLoaders/loaders';

interface StoryWebpackConfig {
  config: Configuration;
}

type StoryBuildPaths = Partial<BuildPaths>;

const webpackConfig = ({ config }: StoryWebpackConfig): Configuration => {
  const buildPath: StoryBuildPaths = {
    src: path.resolve(__dirname, '..', 'src')
  };

  const isDev = true;

  buildPath.src && config.resolve?.modules?.push(buildPath.src);

  if (config.resolve) {
    config.resolve.alias = {
      ...config.resolve?.alias,
      '@': path.resolve(__dirname, '../src/')
    };

    config.resolve.extensions?.push('ts', 'tsx');
  }

  config.module?.rules?.push(getSassLoader(isDev));
  config.module?.rules?.push(getSVGLoader);

  return config;
};

export default webpackConfig;
