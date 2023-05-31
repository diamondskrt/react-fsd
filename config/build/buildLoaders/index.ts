import { RuleSetRule } from 'webpack';
import { BuildOptions } from '../types/config';
import { getSassLoader, getSVGLoader } from './loaders';

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const sassLoader = getSassLoader(isDev);

  const svgLoader = getSVGLoader;

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  };

  const babelLoader = {
    test: /\.m?(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  };

  return [sassLoader, svgLoader, fileLoader, babelLoader, typescriptLoader];
};
