type ClassNamesMods = Record<string, string | boolean>

export const cn = (
	cls: string,
	mods: ClassNamesMods,
	additional: Array<string>
): string => {
	return [
		cls,
		...additional,
		Object.entries(mods)
			.filter(([_, value]) => value)
			.map(([cls, _]) => cls)
	].join(' ')
}
