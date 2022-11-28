import { Configuration as WebpackConfiguration } from 'webpack'
import { buildDevServer } from './buildDevServer'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolvers } from './buildResolvers'
import { BuildOptions } from './types/config'

export const buildWebpackConfig = (
	options: BuildOptions
): WebpackConfiguration => {
	const { paths, mode, isDev } = options

	return {
		mode,
		entry: paths.entry,
		output: {
			filename: 'bundle.[contenthash].js',
			path: paths.build,
			clean: true
		},
		plugins: buildPlugins(options),
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(),
		devServer: isDev ? buildDevServer(options) : undefined,
		devtool: isDev ? 'inline-source-map' : undefined
	}
}
