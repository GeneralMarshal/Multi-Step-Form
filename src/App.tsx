
import './App.css'
import LandingPage from './pages/LandingPage'
import { Route, Routes } from 'react-router-dom'

import { LANDINGPAGE } from './routes'

function App() {

  return (
    <Routes>
      <Route>
        <Route path={LANDINGPAGE} element={<LandingPage />}  />
      </Route>
    </Routes>
  )
}

export default App
