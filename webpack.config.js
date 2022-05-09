import { join } from 'path';

export const entry = './src/index.tsx';
export const output = {
  path: `${__dirname}/dist`,
  filename: 'main.js',
};
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
    },
  ],
};
export const mode = 'development';
export const resolve = {
  extensions: ['.ts', '.tsx', '.js', '.jsx'],
};
export const devServer = {
  static: {
    directory: join(__dirname, 'dist'),
  },
  compress: true,
  port: 3000,
};
