import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { eduApi, Subject as SubjectType } from '../services/eduApi'

const SubjectNavigation = () => {
  const { section, subject, setSubject } = useAppContext()
  const [subjects, setSubjects] = useState<SubjectType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchSubjects = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const data = await eduApi.getSubjects()
        setSubjects(data)
      } catch (err) {
        setError('Failed to load subjects')
        console.error('Error loading subjects:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchSubjects()
  }, [])

  const isSubjectActive = (subjectName: string) => {
    if (subject?.toLowerCase() === subjectName.toLowerCase()) {
      return 'scale-110 transform -translate-y-1 border-b-2 border-white pb-1'
    }
    return ''
  }

  const handleSubjectClick = (subjectName: string) => {
    setSubject(subjectName.toLowerCase() as Lowercase<string>)
  }

  const showSubjects = section === 'quizz' || section === 'class'

  return (
    <div
      className={`w-full transform transition-all duration-300 ease-in-out overflow-hidden z-10 ${
        showSubjects ? 'max-h-14 opacity-100' : 'max-h-0 opacity-0'
      }`}
    >
      <div className={`w-full ${
        section === 'quizz' 
          ? 'bg-quizzPrimary-500' 
          : section === 'class' 
            ? 'bg-classPrimary-500' 
            : ''
      }`}>
        <nav className="flex items-center h-12 border-0">
          {isLoading ? (
            <div className="flex justify-center w-full">
              <div className="animate-spin rounded-full h-5 w-5" />
            </div>
          ) : error ? (
            <div className="text-center text-red-300 text-sm w-full">{error}</div>
          ) : (
            <ul className="flex items-center justify-center gap-6 w-full">
              {subjects.map((subjectItem, index) => (
                <li key={subjectItem.id} className={`${index !== 0 ? 'border-l border-white/30' : ''}`}>
                  <button
                    onClick={() => handleSubjectClick(subjectItem.name)}
                    className={`text-white hover:text-white/70 px-3 text-sm transition-all duration-200 ${isSubjectActive(subjectItem.name)}`}
                  >
                    {subjectItem.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </div>
  )
}

export default SubjectNavigation
