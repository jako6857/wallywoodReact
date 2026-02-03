import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home'
import { MainLayout } from './layouts/MainLayout'
import { Posters } from './pages/posters/posters'
import { Contact } from './pages/Contact/Contact'
import { About } from './pages/About/About'
import { Login } from './pages/Login/Login'
import { Details } from './pages/Details/Details'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About/>} />
            <Route path='/posters' element={<Posters/>} />
            <Route path='/details/:slug' element={<Details/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/login' element={<Login/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App