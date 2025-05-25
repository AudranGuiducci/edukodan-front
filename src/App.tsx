import Layout from './components/Layout'
import Home from './pages/Home'
import Quizz from './pages/Quizz'
import Class from './pages/Class'
import { AppProvider, useAppContext } from './context/AppContext'

const AppContent = () => {
  const { section } = useAppContext()

  const renderContent = () => {
    switch (section) {
      case 'home':
        return <Home />
      case 'quizz':
        return <Quizz />
      case 'class':
        return <Class />
      default:
        return <Home />
    }
  }

  return <Layout>{renderContent()}</Layout>
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}

export default App
