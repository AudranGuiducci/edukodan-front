import { createContext, useContext, ReactNode, useState } from 'react'
import { Section } from '../constants/navigation'

interface AppState {
  section: Section
  subject: string | null
  setSection: (section: Section) => void
  setSubject: (subject: string | null) => void
}

const AppContext = createContext<AppState | undefined>(undefined)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [section, setSection] = useState<Section>('home')
  const [subject, setSubject] = useState<string | null>(null)

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
