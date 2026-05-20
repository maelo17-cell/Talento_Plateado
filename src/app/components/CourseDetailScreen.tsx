import { ArrowLeft, Clock, BarChart3, PlayCircle, CheckCircle2, BookOpen } from 'lucide-react';

interface CourseModule {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
}

interface Course {
  id: number;
  title: string;
  icon: any;
  duration: string;
  level: string;
  description: string;
  detailedDescription: string;
  modules: CourseModule[];
  color: string;
}

interface CourseDetailScreenProps {
  course: Course;
  onBack: () => void;
  onStartCourse: () => void;
}

export function CourseDetailScreen({ course, onBack, onStartCourse }: CourseDetailScreenProps) {
  const Icon = course.icon;
  const completedModules = course.modules.filter(m => m.completed).length;
  const progress = (completedModules / course.modules.length) * 100;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`${course.color} p-6 sticky top-0 z-10 shadow-md`}>
        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={onBack}
            className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Volver"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-xl flex-1">Detalles del curso</h1>
        </div>

        {/* Información del curso en header */}
        <div className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white/20 p-3 rounded-xl">
              <Icon className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h2 className="text-white text-2xl mb-2">{course.title}</h2>
              <p className="text-white/90 text-lg">{course.description}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <Clock className="w-5 h-5 text-white" strokeWidth={2} />
              <span className="text-white">{course.duration}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
              <BarChart3 className="w-5 h-5 text-white" strokeWidth={2} />
              <span className="text-white">{course.level}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Progreso del curso */}
        {completedModules > 0 && (
          <div className="bg-card rounded-xl p-5 shadow-lg border-2 border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl">Tu progreso</h3>
              <span className="text-primary text-lg">{Math.round(progress)}%</span>
            </div>
            <div className="bg-muted rounded-full h-3 overflow-hidden">
              <div
                className="bg-primary h-full transition-all duration-500 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-muted-foreground mt-2">
              {completedModules} de {course.modules.length} módulos completados
            </p>
          </div>
        )}

        {/* Descripción completa */}
        <div className="bg-card rounded-xl p-5 shadow-lg border-2 border-border">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-6 h-6 text-primary" strokeWidth={2} />
            <h3 className="text-xl">Sobre este curso</h3>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {course.detailedDescription}
          </p>
        </div>

        {/* Módulos del curso */}
        <div className="bg-card rounded-xl p-5 shadow-lg border-2 border-border">
          <h3 className="text-xl mb-4">Contenido del curso</h3>
          <div className="space-y-3">
            {course.modules.map((module, index) => (
              <div
                key={module.id}
                className={`${
                  module.completed ? 'bg-secondary/10 border-secondary' : 'bg-muted/30 border-border'
                } border-2 rounded-xl p-4 transition-all`}
              >
                <div className="flex items-start gap-3">
                  <div className={`${module.completed ? 'bg-secondary' : 'bg-muted'} rounded-full p-2 flex-shrink-0`}>
                    {module.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                    ) : (
                      <PlayCircle className="w-6 h-6 text-white" strokeWidth={2} />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h4 className="text-lg">
                        Módulo {index + 1}: {module.title}
                      </h4>
                      {module.completed && (
                        <span className="bg-secondary text-white px-3 py-1 rounded-full text-sm whitespace-nowrap">
                          Completado
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" strokeWidth={2} />
                      <span className="text-base">{module.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Beneficios del curso */}
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-5 border-2 border-primary/30">
          <h3 className="text-xl mb-3">¿Qué aprenderás?</h3>
          <ul className="space-y-2">
            {course.modules.map((module) => (
              <li key={module.id} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={2} />
                <span className="text-foreground text-lg">{module.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mensaje motivador */}
        <div className="bg-secondary/10 border-2 border-secondary rounded-xl p-5 text-center">
          <p className="text-foreground text-lg leading-relaxed">
            Aprende a tu ritmo. Cada módulo está diseñado para ser sencillo y práctico.
          </p>
        </div>

        {/* Botón de acción */}
        <button
          onClick={onStartCourse}
          className={`w-full ${course.color} text-white py-5 rounded-xl hover:opacity-90 transition-opacity active:scale-98 shadow-lg flex items-center justify-center gap-3 text-xl`}
        >
          <PlayCircle className="w-8 h-8" strokeWidth={2} />
          <span>{completedModules > 0 ? 'Continuar curso' : 'Iniciar curso'}</span>
        </button>
      </div>
    </div>
  );
}
