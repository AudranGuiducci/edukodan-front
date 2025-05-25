import { http, HttpResponse } from 'msw'

// Mock data
const subjects = [
  { id: 1, name: 'History' },
  { id: 2, name: 'Math' },
  { id: 3, name: 'Geography' },
  { id: 4, name: 'Science' },
  { id: 5, name: 'Literature' },
  { id: 6, name: 'Art' },
]

const quizzes = {
  math: [
    { id: 1, title: 'Basic Algebra', questions: [] },
    { id: 2, title: 'Geometry Basics', questions: [] },
  ],
  history: [
    { id: 1, title: 'Ancient Civilizations', questions: [] },
    { id: 2, title: 'World War II', questions: [] },
  ],
} as const

type SubjectKey = keyof typeof quizzes

const classes = {
  math: [
    { id: 1, title: 'Introduction to Algebra', duration: '1h', level: 'Beginner' },
    { id: 2, title: 'Advanced Geometry', duration: '1h30', level: 'Intermediate' },
  ],
  history: [
    { id: 1, title: 'Ancient Egypt', duration: '1h', level: 'Beginner' },
    { id: 2, title: 'Medieval Europe', duration: '1h30', level: 'Intermediate' },
  ],
} as const

export const handlers = [
  // Get subjects
  http.get('/api/subjects', () => {
    return HttpResponse.json(subjects)
  }),

  // Get quizzes by subject
  http.get('/api/quizzes/:subject', ({ params }) => {
    const subject = (params.subject as string).toLowerCase() as SubjectKey
    const subjectQuizzes = quizzes[subject]

    if (!subjectQuizzes) {
      return new HttpResponse(
        JSON.stringify({ error: 'Subject not found' }),
        { status: 404 }
      )
    }

    return HttpResponse.json(subjectQuizzes)
  }),

  // Get classes by subject
  http.get('/api/classes/:subject', ({ params }) => {
    const subject = (params.subject as string).toLowerCase() as SubjectKey
    const subjectClasses = classes[subject]

    if (!subjectClasses) {
      return new HttpResponse(
        JSON.stringify({ error: 'Subject not found' }),
        { status: 404 }
      )
    }

    return HttpResponse.json(subjectClasses)
  }),
]
