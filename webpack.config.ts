import path from 'path'
import { Configuration as WebpackConfiguration } from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv): WebpackConfiguration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  }

  const PORT = env.port || 3000
  const mode = env.mode || 'development'

  const isDev = mode === 'development'

  return buildWebpackConfig({
    paths,
    port: PORT,
    isDev,
    mode
  })
}
