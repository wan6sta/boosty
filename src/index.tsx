import reactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { App } from 'app/App'
import 'shared/config/i18n/i18n'

const root = reactDOM.createRoot(document.getElementById('root') as HTMLDivElement)

root.render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeProvider>
        <App/>
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
