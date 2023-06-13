import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const getSassLoader = (isDev: boolean): RuleSetRule => {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      {
        loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader',
        options: {
          sourceMap: true,
          importLoaders: 2
        }
      },
      { loader: 'scoped-css-loader' },
      { loader: 'sass-loader' }
    ]
  };
};
