export interface Quiz {
  id: number
  title: string
  questions: any[]
}

export interface Class {
  id: number
  title: string
  duration: string
  level: string
}

export interface Subject {
  id: number
  name: string
}

export const eduApi = {
  async getSubjects(): Promise<Subject[]> {
    const response = await fetch('/api/subjects')
    if (!response.ok) {
      throw new Error('Failed to fetch subjects')
    }
    return response.json()
  },
  
  async getQuizzes(subject: string): Promise<Quiz[]> {
    const response = await fetch(`/api/quizzes/${subject}`)
    if (!response.ok) {
      throw new Error('Failed to fetch quizzes')
    }
    return response.json()
  },

  async getClasses(subject: string): Promise<Class[]> {
    const response = await fetch(`/api/classes/${subject}`)
    if (!response.ok) {
      throw new Error('Failed to fetch classes')
    }
    return response.json()
  },
}
