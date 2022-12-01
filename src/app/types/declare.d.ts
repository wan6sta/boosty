declare module '*.module.scss' {
  const cls: Record<string, string>
  export = cls
}

declare module '*.png'
declare module '*.svg'

declare const __IS_DEV__: boolean
