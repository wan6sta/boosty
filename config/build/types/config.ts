type BuildMode = 'production' | 'development'

export interface BuildEnv {
  mode: BuildMode
  port: number
}

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string
}

export interface BuildOptions {
  mode: BuildMode
  port: number
  paths: BuildPaths
  isDev: boolean
}
