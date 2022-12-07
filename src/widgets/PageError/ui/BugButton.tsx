import { Button } from 'shared/ui/Button/Button'
import { useEffect, useState } from 'react'

// For the ErrorBoundary test
export const BugButton = () => {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (isError) {
      throw new Error()
    }
  }, [isError])

  const createError = () => {
    setIsError(true)
  }

  return <Button onClick={createError}>BUG</Button>
}
