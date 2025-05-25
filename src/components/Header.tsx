import { useAppContext } from '../context/AppContext'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../assets/logo.svg'

const Header = () => {
  const { section, subject, setSection, setSubject } = useAppContext()

  const isActive = (currentSection: string) => {
    return section === currentSection ? 'bg-white/10 rounded-md' : ''
  }

  const isSubjectActive = (currentSubject: string) => {
    return subject?.toLowerCase() === currentSubject.toLowerCase() ? 'bg-white/10 rounded-md' : ''
  }

  const showSubjects = section === 'quizz' || section === 'class'

  const subjects = ['History', 'Math', 'Geography', 'Science', 'Literature']

  return (
    <div className="w-full bg-primary-50 text-white border-b sticky top-0 z-10">
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
              <li>
                <button
                  onClick={() => setSection('quizz')}
                  className={`text-white hover:text-white/70 px-4 py-2 ${isActive('quizz')}`}
                >
                  Quizz
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSection('class')}
                  className={`text-white hover:text-white/70 px-4 py-2 ${isActive('class')}`}
                >
                  Class
                </button>
              </li>
            </ul>
          </nav>
        </div>
        {showSubjects && (
          <div className="border-t border-white/10">
            <nav className="py-2">
              <ul className="flex items-center justify-center gap-6">
                {subjects.map((subjectName) => (
                  <li key={subjectName}>
                    <button
                      onClick={() => setSubject(subjectName.toLowerCase() as any)}
                      className={`text-white hover:text-white/70 px-3 py-1 text-sm ${isSubjectActive(subjectName)}`}
                    >
                      {subjectName}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header