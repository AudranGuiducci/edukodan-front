import { useAppContext } from '../context/AppContext'
import LanguageSwitcher from './LanguageSwitcher'
import { NavigationButton } from './NavigationButton'
import logo from '../assets/logo.svg'

const Header = () => {
  const { section, setSection, setSubject } = useAppContext()

  return (
    <div className="w-full bg-primary-900 text-white sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <button 
            onClick={() => { setSection('home'); setSubject(null); }}
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <img src={logo} alt="EduKodan Logo" className="h-8 w-auto" />
            <span>EduKodan</span>
          </button>
          <LanguageSwitcher />
        </div>
        <div className="border-t border-white/10">
          <nav className="py-2">
            <ul className="flex items-center justify-center gap-8">
              {(['quizz', 'class'] as const).map((navSection) => (
                <li key={navSection}>
                  <NavigationButton
                    section={navSection}
                    isActive={section === navSection}
                    onClick={() => setSection(navSection)}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header