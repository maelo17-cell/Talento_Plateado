import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { RegisterScreen } from './components/RegisterScreen';
import { LoginScreen } from './components/LoginScreen';
import { HomeScreen } from './components/HomeScreen';
import { JobsScreen } from './components/JobsScreen';
import { CoursesScreen } from './components/CoursesScreen';
import { CourseDetailScreen } from './components/CourseDetailScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { HelpScreen } from './components/HelpScreen';
import { ApplicationsScreen } from './components/ApplicationsScreen';
import { SkillsAssessmentScreen } from './components/SkillsAssessmentScreen';

// AQUÍ ESTÁ LA MAGIA: Importamos los cursos desde el nuevo archivo que acabas de crear
import { coursesData } from '../data/courses';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  const handleRegister = () => {
    setIsAuthenticated(true);
    setCurrentScreen('home');
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('home');
  };

  const renderScreen = () => {
    // Flujo de bienvenida y autenticación
    if (!isAuthenticated) {
      switch (currentScreen) {
        case 'welcome':
          return <WelcomeScreen onGetStarted={() => setCurrentScreen('onboarding')} onLogin={() => setCurrentScreen('login')} />;
        case 'onboarding':
          return <OnboardingScreen onComplete={() => setCurrentScreen('register')} />;
        case 'register':
          return <RegisterScreen onBack={() => setCurrentScreen('welcome')} onRegister={handleRegister} />;
        case 'login':
          return <LoginScreen onBack={() => setCurrentScreen('welcome')} onLogin={handleLogin} />;
        default:
          return <WelcomeScreen onGetStarted={() => setCurrentScreen('onboarding')} onLogin={() => setCurrentScreen('login')} />;
      }
    }

    // Flujo principal de la aplicación (después de autenticarse)
    switch (currentScreen) {
      case 'jobs':
        return <JobsScreen onBack={() => setCurrentScreen('home')} />;
      case 'courses':
        return (
          <CoursesScreen
            onBack={() => setCurrentScreen('home')}
            onViewCourse={(courseId) => {
              setSelectedCourseId(courseId);
              setCurrentScreen('course-detail');
            }}
          />
        );
      case 'course-detail':
        const selectedCourse = coursesData.find(c => c.id === selectedCourseId);
        if (!selectedCourse) return <HomeScreen onNavigate={setCurrentScreen} />;
        return (
          <CourseDetailScreen
            course={selectedCourse}
            onBack={() => setCurrentScreen('courses')}
            onStartCourse={() => {
              alert('¡Excelente! El curso comenzará pronto. Te guiaremos paso a paso.');
              setCurrentScreen('courses');
            }}
          />
        );
      case 'profile':
        return <ProfileScreen onBack={() => setCurrentScreen('home')} />;
      case 'help':
        return <HelpScreen onBack={() => setCurrentScreen('home')} />;
      case 'applications':
        return <ApplicationsScreen onBack={() => setCurrentScreen('home')} />;
      case 'assessment':
        return <SkillsAssessmentScreen onBack={() => setCurrentScreen('home')} onComplete={() => setCurrentScreen('jobs')} />;
      default:
        return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="size-full bg-background overflow-y-auto">
      <div className="max-w-md mx-auto min-h-screen bg-background">
        {renderScreen()}
      </div>
    </div>
  );
}
