import React, { memo, Suspense } from 'react'
// import HelloWorld from 'components/helloword'
import { useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'

const App = memo(() => {
  return (
    <div>
      <AppHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <div>
          {useRoutes(routes)}
        </div>
      </Suspense>
      <AppFooter />
    </div>
  )
})

export default App