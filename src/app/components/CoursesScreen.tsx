import { ArrowLeft, Smartphone, Mail, MessageSquare, BarChart3, Users, Clock } from 'lucide-react';

interface CoursesScreenProps {
  onBack: () => void;
  onViewCourse: (courseId: number) => void;
}

export function CoursesScreen({ onBack, onViewCourse }: CoursesScreenProps) {
  const courses = [
    {
      id: 1,
      title: 'Uso básico de celular',
      icon: Smartphone,
      duration: '2 horas',
      level: 'Básico',
      description: 'Aprende a usar tu smartphone paso a paso',
      recommended: true,
    },
    {
      id: 2,
      title: 'WhatsApp para el trabajo',
      icon: MessageSquare,
      duration: '1 hora',
      level: 'Básico',
      description: 'Comunícate efectivamente con WhatsApp',
      recommended: true,
    },
    {
      id: 3,
      title: 'Correo electrónico',
      icon: Mail,
      duration: '1.5 horas',
      level: 'Básico',
      description: 'Envía y recibe correos profesionales',
      recommended: false,
    },
    {
      id: 4,
      title: 'Atención al cliente',
      icon: Users,
      duration: '3 horas',
      level: 'Intermedio',
      description: 'Mejora tus habilidades de servicio',
      recommended: true,
    },
    {
      id: 5,
      title: 'Excel básico',
      icon: BarChart3,
      duration: '4 horas',
      level: 'Básico',
      description: 'Aprende lo esencial de Excel',
      recommended: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary p-6 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="bg-white/20 text-white p-3 rounded-xl hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Volver"
          >
            <ArrowLeft className="w-8 h-8" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-2xl flex-1">Cursos recomendados</h1>
        </div>
      </div>

      {/* Mensaje motivador */}
      <div className="bg-accent/20 border-2 border-accent m-6 p-6 rounded-2xl">
        <p className="text-foreground text-xl text-center leading-relaxed">
          Aprende a tu ritmo. Cada paso cuenta.
        </p>
      </div>

      {/* Lista de cursos */}
      <div className="px-6 pb-6 space-y-5">
        {courses.map((course) => {
          const Icon = course.icon;
          return (
            <div
              key={course.id}
              className={`bg-card rounded-2xl p-6 shadow-lg border-2 ${
                course.recommended ? 'border-accent' : 'border-border'
              } hover:shadow-xl transition-shadow relative`}
            >
              {course.recommended && (
                <div className="absolute -top-3 right-4 bg-accent text-white px-4 py-1 rounded-full text-base">
                  Recomendado para ti
                </div>
              )}

              <div className="flex items-start gap-4 mb-4">
                <div className={`${course.recommended ? 'bg-accent' : 'bg-secondary'} text-white p-4 rounded-xl`}>
                  <Icon className="w-10 h-10" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl mb-2">{course.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-6 mb-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" strokeWidth={2} />
                  <span className="text-lg">{course.duration}</span>
                </div>
                <span className="bg-muted px-4 py-2 rounded-lg text-lg">
                  {course.level}
                </span>
              </div>

              <button
                onClick={() => onViewCourse(course.id)}
                className={`w-full ${course.recommended ? 'bg-accent' : 'bg-secondary'} text-white py-4 rounded-xl hover:opacity-90 transition-opacity active:scale-98 text-xl`}
              >
                Ver curso completo
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
