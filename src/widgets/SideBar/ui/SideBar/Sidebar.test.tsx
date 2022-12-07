import { screen } from '@testing-library/react'
import { SideBar } from 'widgets/SideBar'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation'
import userEvent from '@testing-library/user-event'

describe('widgets/Sidebar', () => {
  test('Sidebar render', () => {
    renderWithTranslation(<SideBar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('Test toggle', async () => {
    renderWithTranslation(<SideBar/>)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
    await userEvent.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed')
  })
})
