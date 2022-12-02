import reactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { App } from 'app/App'

import 'shared/config/i18n/i18n'

const root = reactDOM.createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
)
