import { Footer } from "./Footer"
import { Header } from "./Header"
import { Outlet } from 'react-router-dom'

const Layout = ({children}) => {
  return <>
    <Header />
    <main className='container content'>
      <Outlet />
    </main> 
    <Footer />
  </>
}

export {Layout}