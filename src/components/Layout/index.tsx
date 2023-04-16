import style from './Layout.module.css'
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({children}: any) => {
  return (
    <div className={style.container}>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default Layout