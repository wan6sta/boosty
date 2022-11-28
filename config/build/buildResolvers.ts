import { ResolveOptions } from 'webpack'
import { BuildOptions } from './types/config'

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
	const { paths } = options

	return {
		extensions: ['.tsx', '.ts', '.js'],
		preferAbsolute: true,
		modules: [paths.src, 'node_modules'],
		alias: {},
		mainFiles: ['index.ts']
	}
}
