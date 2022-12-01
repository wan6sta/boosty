type ClassNamesMods = Record<string, string | boolean>

export const cn = (
  cls: string,
  mods: ClassNamesMods = {},
  additional: string[] = []
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => value)
      .map(([cls, _]) => cls)
  ].join(' ')
}
