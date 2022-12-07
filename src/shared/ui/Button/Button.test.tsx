import { render, screen } from '@testing-library/react'
import { Button, ButtonMods } from 'shared/ui/Button/Button'

describe('shared/ui/Button', () => {
  test('button render', () => {
    render(<Button>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
  })

  test('button render with mods', () => {
    render(<Button mods={ButtonMods.CLEAR}>test</Button>)
    expect(screen.getByText('test')).toBeInTheDocument()
    expect(screen.getByText('test')).toHaveClass('clear')
    screen.debug()
  })
})
