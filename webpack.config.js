import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  // Входная точка
  entry: './src/index.jsx',  // Убедитесь, что путь указан правильно

  // Выходная точка
  output: {
    filename: 'bundle.js',  // имя выходного файла
    path: path.resolve(__dirname, 'dist'),  // директория для выходных файлов
  },

  // Модули
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Обрабатываем как .js, так и .jsx файлы
        exclude: /node_modules/, // Исключаем папку node_modules
        use: {
          loader: 'babel-loader', // Используем babel для транспиляции
        },
      },
      {
        test: /\.css$/,  // Для файлов с расширением .css
        use: ['style-loader', 'css-loader'], // Для обработки CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,  // Для обработки изображений
        type: 'asset/resource',
      },
    ],
  },

  // Плагины
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Шаблон для index.html
      filename: 'index.html', // Имя генерируемого файла
    }),
  ],

  // Режим
  mode: 'development',  // Режим сборки (можно использовать 'production' для оптимизации кода)

  // Раздел для разработки
  devtool: 'source-map',  // Источник карты для удобства дебага

  devServer: {
    static: path.resolve(__dirname, 'dist'),  // Папка с сгенерированными файлами
    port: 3000,  // Порт для сервера
    open: true,  // Открыть браузер при запуске
  },

  // Разрешение расширений файлов
  resolve: {
    extensions: ['.js', '.jsx'], // Добавляем .jsx для поддержки JSX-файлов
  },
};