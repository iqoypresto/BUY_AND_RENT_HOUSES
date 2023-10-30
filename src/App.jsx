import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Home, Beli}  from './pages'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='beli' element={<Beli />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
