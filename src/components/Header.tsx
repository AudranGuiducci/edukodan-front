import { Link } from 'react-router-dom'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  return (
    <div className="w-full bg-primary-50 text-white border-b sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="text-xl font-bold text-white">EduKodan</Link>
          <nav className="flex-1 max-w-2xl mx-8">
            <ul className="flex items-center justify-around">
              <li>
                <Link to="/" className="text-white hover:text-white/70 px-4 py-2">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-white/70 px-4 py-2">About</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white hover:text-white/70 px-4 py-2">Contact</Link>
              </li>
            </ul>
          </nav>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}

export default Header