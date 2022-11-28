import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ProgressPlugin, WebpackPluginInstance } from 'webpack'
import { BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = (
	options: BuildOptions
): WebpackPluginInstance[] => {
	const { paths } = options

	return [
		new HtmlWebpackPlugin({
			template: paths.html
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:6].css',
			chunkFilename: 'css/[name].[contenthash:6].css'
		})
	]
}
