import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const { isDev } = options

  const babelLoader = {
    test: /\.ts$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }

  const svgLoader = {
    rules: [
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      }
    ]
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) =>
              resourcePath.endsWith('.module.scss'),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:6]'
              : '[hash:base64:6]'
          }
        }
      },
      'sass-loader'
    ]
  }

  return [babelLoader, typescriptLoader, scssLoader, fileLoader, svgLoader]
}
