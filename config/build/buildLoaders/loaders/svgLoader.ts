export const getSVGLoader = {
  test: /\.svg$/i,
  issuer: /\.[jt]sx?$/,
  use: ['@svgr/webpack']
};
