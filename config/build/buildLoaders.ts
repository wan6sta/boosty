import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {RuleSetRule} from 'webpack'
import {BuildOptions} from './types/config'

export const buildLoaders = (options: BuildOptions): RuleSetRule[] => {
  const {isDev} = options

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

  return [typescriptLoader, scssLoader]
}
