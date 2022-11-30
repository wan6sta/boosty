import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { BuildOptions } from './types/config'

export const buildDevServer = (
	options: BuildOptions
): DevServerConfiguration => {
	const { port } = options

	return {
		port,
		open: true,
		historyApiFallback: true,
		hot: true
	}
}
