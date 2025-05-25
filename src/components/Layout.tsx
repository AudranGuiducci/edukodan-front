import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen flex flex-col h-screen">
      <Header />
      
      {/* Main Content */}
      <main className="w-full flex-1 mx-auto">
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
