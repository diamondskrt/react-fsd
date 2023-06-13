import webpack, { WebpackPluginInstance } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { BuildOptions } from './types/config';

export const buildPlugins = (
  options: BuildOptions
): WebpackPluginInstance[] => {
  const { paths, isDev } = options;

  const plugins = [
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new Dotenv({
      path: './.env.production'
    })
  ];

  if (isDev) {
    plugins.push(
      new ReactRefreshWebpackPlugin(),
      new BundleAnalyzerPlugin({ openAnalyzer: false }),
      new Dotenv({
        path: './.env.local'
      })
    );
  }

  return plugins;
};
