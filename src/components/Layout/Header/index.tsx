import Image from 'next/image'
import style from './Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { navLinks } from './navLinks'

const Header = () => {

  const router = useRouter();

  return (
    <header className={style.header}>
      <div className={style.header_logo}>
        <Link href="/">
          <Image src="/nasa-logo.svg" width={100} height={100} alt="Nasa Logo"/>
        </Link>
      </div>
      <nav className={style.header_nav}>
        <ul>
          {navLinks?.map((link) => {
            return (
              <li key={`navLink-${link.title}`}>
                <Link className={ router.pathname === link.path ? style.active : ''} href={link.path}>{link.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header