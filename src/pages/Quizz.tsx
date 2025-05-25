import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { eduApi, Quiz } from '../services/eduApi'

const Quizz = () => {
  const { t } = useTranslation()
  const { subject } = useAppContext()
  const [quizzes, setQuizzes] = useState<Quiz[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchQuizzes = async () => {
      if (!subject) return
      
      setIsLoading(true)
      setError(null)
      try {
        const data = await eduApi.getQuizzes(subject)
        setQuizzes(data)
      } catch (err) {
        setError(t('quizz.error', 'Failed to load quizzes'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchQuizzes()
  }, [subject, t])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('quizz.title', 'Quizz')}</h1>
      
      {!subject && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            {t('quizz.noSubject', 'Please select a subject to view available quizzes')}
          </p>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <div key={quiz.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{quiz.title}</h2>
              <p className="text-gray-600 mb-4">
                {t('quizz.questionsCount', '{{count}} questions', { count: quiz.questions.length })}
              </p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
                onClick={() => {/* TODO: Implement quiz start logic */}}
              >
                {t('quizz.start', 'Start Quiz')}
              </button>
            </div>
          ))}
        </div>
      )}

      {subject && !isLoading && quizzes.length === 0 && (
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
          <p className="text-gray-700">
            {t('quizz.noQuizzes', 'No quizzes available for this subject yet')}
          </p>
        </div>
      )}
    </div>
  )
}

export default Quizz
