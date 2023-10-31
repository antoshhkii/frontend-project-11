import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const filename = fileURLToPath(import.meta.url);
const dirName = dirname(filename);

export default {
  entry: './src/index.js',

  output: {
    path: path.resolve(dirName, 'dist'),
    filename: 'bundle.js',
  },

	module: {
    rules: [
    	{
    	  test: /\.css$/,
    	  use: ['style-loader', 'css-loader'],
    	},
    ],
  },
  
	plugins: [
    new HtmlWebpackPlugin({
      	template: './src/index.html',
      }),
    ],
  
    devServer: {
      static: {
        directory: path.join(dirName, 'dist'),
      },
      open: true,
    },
  
		mode: 'development',
};
