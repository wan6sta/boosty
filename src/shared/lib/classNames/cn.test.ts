import { cn } from './cn'

describe('classNames', () => {
  test('check cls', () => {
    expect(cn('class')).toBe('class')
  })

  test('check void cls', () => {
    expect(cn('')).toBe('')
  })

  test('check additional', () => {
    expect(cn('class', {}, ['one', 'two'])).toBe('class one two')
  })

  test('check void additional', () => {
    expect(cn('class', {}, [])).toBe('class')
  })

  test('check mods', () => {
    expect(cn('class', { mod1: true, mod2: true }, ['one', 'two']))
      .toBe('class one two mod1 mod2')
  })

  test('check mods with undefined', () => {
    expect(cn('class', { mod1: undefined, mod2: false, mod3: 'someStr' }, ['one', 'two']))
      .toBe('class one two mod3')
  })
})
