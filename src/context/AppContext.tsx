import { createContext, useContext, ReactNode, useState } from 'react'

type AppSection = 'home' | 'quizz' | 'class'
type Subject = 'history' | 'math' | 'geography' | 'science' | 'literature'

interface AppState {
  section: AppSection
  subject: Subject | null
  setSection: (section: AppSection) => void
  setSubject: (subject: Subject | null) => void
}

const AppContext = createContext<AppState | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState<AppSection>('home')
  const [subject, setSubject] = useState<Subject | null>(null)

  return (
    <AppContext.Provider value={{ section, subject, setSection, setSubject }}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
