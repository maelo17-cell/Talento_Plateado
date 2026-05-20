import { useState } from 'react';
import { Home, Briefcase, GraduationCap, User } from 'lucide-react';
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

import { coursesData } from '../data/courses';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  const handleRegister = () => { setIsAuthenticated(true); setCurrentScreen('home'); };
  const handleLogin = () => { setIsAuthenticated(true); setCurrentScreen('home'); };

  const renderScreen = () => {
    // 1. Vistas públicas (Sin barra inferior)
    if (!isAuthenticated) {
      switch (currentScreen) {
        case 'welcome': return <WelcomeScreen onGetStarted={() => setCurrentScreen('onboarding')} onLogin={() => setCurrentScreen('login')} />;
        case 'onboarding': return <OnboardingScreen onComplete={() => setCurrentScreen('register')} />;
        case 'register': return <RegisterScreen onBack={() => setCurrentScreen('welcome')} onRegister={handleRegister} />;
        case 'login': return <LoginScreen onBack={() => setCurrentScreen('welcome')} onLogin={handleLogin} />;
        default: return <WelcomeScreen onGetStarted={() => setCurrentScreen('onboarding')} onLogin={() => setCurrentScreen('login')} />;
      }
    }

    // 2. Vistas privadas (Con acceso a barra inferior)
    switch (currentScreen) {
      case 'jobs': return <JobsScreen onBack={() => setCurrentScreen('home')} />;
      case 'courses': return <CoursesScreen onBack={() => setCurrentScreen('home')} onViewCourse={(id) => { setSelectedCourseId(id); setCurrentScreen('course-detail'); }} />;
      case 'course-detail':
        const selectedCourse = coursesData.find(c => c.id === selectedCourseId);
        if (!selectedCourse) return <HomeScreen onNavigate={setCurrentScreen} />;
        return <CourseDetailScreen course={selectedCourse} onBack={() => setCurrentScreen('courses')} onStartCourse={() => { alert('¡Iniciando curso!'); setCurrentScreen('courses'); }} />;
      case 'profile': return <ProfileScreen onBack={() => setCurrentScreen('home')} />;
      case 'help': return <HelpScreen onBack={() => setCurrentScreen('home')} />;
      case 'applications': return <ApplicationsScreen onBack={() => setCurrentScreen('home')} />;
      case 'assessment': return <SkillsAssessmentScreen onBack={() => setCurrentScreen('home')} onComplete={() => setCurrentScreen('jobs')} />;
      default: return <HomeScreen onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="size-full bg-slate-200 flex justify-center overflow-hidden">
      {/* Contenedor tipo celular centralizado y relativo */}
      <div className="w-full max-w-md bg-white min-h-[100dvh] relative shadow-2xl flex flex-col">
        
        {/* Contenido (Scrolleable y toma el espacio sobrante antes de la nav) */}
        <div className="flex-1 overflow-y-auto no-scrollbar relative z-0">
          {renderScreen()}
        </div>

        {/* BARRA DE NAVEGACIÓN INFERIOR (Solo si está logueado y no está en detalles/assessment) */}
        {isAuthenticated && 
         !['course-detail', 'assessment'].includes(currentScreen) && (
          <nav className="bg-white border-t border-slate-200 py-2 px-3 sticky bottom-0 z-50 flex justify-around shadow-[0_-4px_15px_rgba(0,0,0,0.05)] safe-area-bottom">
            <button onClick={() => setCurrentScreen('home')} className={`flex flex-col items-center w-full py-1 ${currentScreen === 'home' ? 'text-brand-terracota' : 'text-slate-400 hover:text-slate-600'}`}>
              <Home className="w-6 h-6 mb-1" strokeWidth={currentScreen === 'home' ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Inicio</span>
            </button>
            <button onClick={() => setCurrentScreen('jobs')} className={`flex flex-col items-center w-full py-1 ${currentScreen === 'jobs' ? 'text-brand-terracota' : 'text-slate-400 hover:text-slate-600'}`}>
              <Briefcase className="w-6 h-6 mb-1" strokeWidth={currentScreen === 'jobs' ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Empleos</span>
            </button>
            <button onClick={() => setCurrentScreen('courses')} className={`flex flex-col items-center w-full py-1 ${currentScreen === 'courses' ? 'text-brand-terracota' : 'text-slate-400 hover:text-slate-600'}`}>
              <GraduationCap className="w-6 h-6 mb-1" strokeWidth={currentScreen === 'courses' ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Cursos</span>
            </button>
            <button onClick={() => setCurrentScreen('profile')} className={`flex flex-col items-center w-full py-1 ${currentScreen === 'profile' ? 'text-brand-terracota' : 'text-slate-400 hover:text-slate-600'}`}>
              <User className="w-6 h-6 mb-1" strokeWidth={currentScreen === 'profile' ? 2.5 : 2} />
              <span className="text-[10px] font-bold">Perfil</span>
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
