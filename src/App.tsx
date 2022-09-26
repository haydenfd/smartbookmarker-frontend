import React from 'react'
import { CookiesProvider } from 'react-cookie'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppContainer } from './components'
import { CompleteAuth, Home, Bookmarks } from './pages'

const App = () => {
  return (
    <CookiesProvider>
      <Router>
        <AppContainer>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path = '/completeAuth' element={<CompleteAuth />} />
              <Route path = '/bookmarks' element={<Bookmarks />} />
            </Routes>
        </AppContainer>
      </Router>
    </CookiesProvider>
  )
}

export default App