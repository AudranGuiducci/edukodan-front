import { useAppContext } from '../context/AppContext'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../assets/logo.svg'

const Header = () => {
  const { section, subject, setSection, setSubject } = useAppContext()

  const isActive = (currentSection: string) => {
    if (section === currentSection) {
      return currentSection === 'quizz' 
        ? 'bg-quizzPrimary-200 text-quizzPrimary-900 rounded-t-md scale-110 transform shadow-lg translate-y-[10px] z-10' 
        : 'bg-classPrimary-200 text-classPrimary-900 rounded-t-md scale-110 transform shadow-lg translate-y-[10px] z-10'
    }
    return 'scale-95 transform rounded-md'
  }

  const isSubjectActive = (currentSubject: string) => {
    if (subject?.toLowerCase() === currentSubject.toLowerCase()) {
      return 'scale-110 transform -translate-y-1 border-b-2 border-white pb-1 '
    }
    return ''
  }

  const showSubjects = section === 'quizz' || section === 'class'

  const subjects = ['History', 'Math', 'Geography', 'Science', 'Literature']

  return (
    <div className="w-full bg-primary-900 text-white border-b sticky top-0 z-10">
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
                  className={`text-white bg-quizzPrimary-500 hover:bg-quizzPrimary-300 px-6 py-3 rounded-md transition-all duration-200 text-lg font-medium border-2 border-quizzPrimary-500 ${isActive('quizz')}`}
                >
                  Quizz
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSection('class')}
                  className={`text-white bg-classPrimary-500 hover:bg-classPrimary-300 px-6 py-3 rounded-md transition-all duration-200 text-lg font-medium border-2 border-classPrimary-500 ${isActive('class')}`}
                >
                  Class
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div
          className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
            showSubjects ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className={`border-t border-white/10 -mt-[2px] ${
            section === 'quizz' 
              ? 'bg-quizzPrimary-500' 
              : section === 'class' 
                ? 'bg-classPrimary-500' 
                : ''
          }`}>
            <nav className="py-2">
              <ul className="flex items-center justify-center gap-6">
                {subjects.map((subjectName, index) => (
                  <li key={subjectName} className={`${index !== 0 ? 'border-l border-white/30' : ''}`}>
                    <button
                      onClick={() => setSubject(subjectName.toLowerCase() as any)}
                      className={`text-white hover:text-white/70 px-3 py-1 text-sm transition-all duration-200 ${isSubjectActive(subjectName)}`}
                    >
                      {subjectName}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header