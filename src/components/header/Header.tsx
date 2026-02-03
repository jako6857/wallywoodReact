import { Navbar } from '../navBar/navbar'

interface LinkItem { name: string; path: string }

interface HeaderProps {
  logoNav: string
  linksNav: LinkItem[]
}

export function Header({ logoNav, linksNav }: HeaderProps) {
  return (
    <header>
      {/* <div className="logo">{logoNav}</div> */}
      <Navbar logoNav={logoNav} linksNav={linksNav} />
    </header>
  )
}