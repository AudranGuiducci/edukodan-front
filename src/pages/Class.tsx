import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import { eduApi, Class as ClassType } from '../services/eduApi'

const Class = () => {
  const { t } = useTranslation()
  const { subject } = useAppContext()
  const [classes, setClasses] = useState<ClassType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchClasses = async () => {
      if (!subject) return
      
      setIsLoading(true)
      setError(null)
      try {
        const data = await eduApi.getClasses(subject)
        setClasses(data)
      } catch (err) {
        setError(t('class.error', 'Failed to load classes'))
      } finally {
        setIsLoading(false)
      }
    }

    fetchClasses()
  }, [subject, t])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">{t('class.title', 'Class')}</h1>
      
      {!subject && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
          <p className="text-yellow-700">
            {t('class.noSubject', 'Please select a subject to view available classes')}
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
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem) => (
            <div key={classItem.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{classItem.title}</h2>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {t('class.duration', 'Duration: {{duration}}', { duration: classItem.duration })}
                </p>
                <p className="text-gray-600 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  {t('class.level', 'Level: {{level}}', { level: classItem.level })}
                </p>
              </div>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors w-full"
                onClick={() => {/* TODO: Implement class join logic */}}
              >
                {t('class.join', 'Join Class')}
              </button>
            </div>
          ))}
        </div>
      )}

      {subject && !isLoading && classes.length === 0 && (
        <div className="bg-gray-50 border-l-4 border-gray-400 p-4">
          <p className="text-gray-700">
            {t('class.noClasses', 'No classes available for this subject yet')}
          </p>
        </div>
      )}
    </div>
  )
}

export default Class
