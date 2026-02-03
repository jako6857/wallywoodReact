import { Outlet } from 'react-router-dom'
import style from './MainLayout.module.scss'
import { Header } from '../components/header/Header'
import { Footer } from '../components/Footer/Footer'


export function MainLayout() {
  const links = [
    { name: 'home', path: '/' },
    { name: 'plakater', path: '/posters' },
    { name: 'om os', path: '/about' },
    { name: 'kontakt', path: '/contact' },
    { name: 'login', path: '/login' },
  ]

  return (
    <section className={style.pageContainer}>
      <Header logoNav='WALLYWOOD' linksNav={links} />
      <Outlet />
      <Footer />
    </section>
  )
}