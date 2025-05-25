import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/LanguageSwitcher';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">{t('about.title')}</h1>
      </div>
      <p className="text-lg text-gray-600">{t('about.description')}</p>
    </div>
  )
}

export default About
