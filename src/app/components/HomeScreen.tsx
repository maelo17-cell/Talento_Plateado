import { Briefcase, GraduationCap, User, HelpCircle, FileText, Sparkles, TrendingUp } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const menuItems = [
    { id: 'jobs', icon: Briefcase, label: 'Buscar empleo', color: 'bg-primary' },
    { id: 'courses', icon: GraduationCap, label: 'Cursos recomendados', color: 'bg-secondary' },
    { id: 'profile', icon: User, label: 'Mi perfil', color: 'bg-accent' },
    { id: 'applications', icon: FileText, label: 'Mis postulaciones', color: 'bg-[#D9C9BA]' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header con mensaje motivador */}
      <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-b-2xl shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <div className="relative bg-white/15 p-2 rounded-lg backdrop-blur-sm">
            <Briefcase className="w-6 h-6 text-white" strokeWidth={2} />
            <div className="absolute -top-1 -right-1 bg-secondary rounded-full p-0.5">
              <TrendingUp className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
          </div>
          <h1 className="text-white text-xl tracking-tight">ReConecta</h1>
        </div>
        <p className="text-white/95 text-lg leading-relaxed">
          Tu experiencia sigue teniendo valor
        </p>
        <p className="text-white/80 mt-1">
          Nunca es tarde para volver a empezar
        </p>
      </div>

      {/* Menú principal */}
      <div className="flex-1 p-5">
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {/* Evaluación de habilidades destacada */}
          <button
            onClick={() => onNavigate('assessment')}
            className="bg-gradient-to-br from-accent via-primary to-secondary text-white rounded-xl p-5 shadow-xl hover:shadow-2xl transition-all duration-200 active:scale-95 relative overflow-hidden"
          >
            <div className="absolute top-2 right-2 bg-white text-accent px-3 py-0.5 rounded-full text-sm">
              Nuevo
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-white/30 p-3 rounded-lg">
                <Sparkles className="w-8 h-8" strokeWidth={2} />
              </div>
              <div className="flex-1 text-left">
                <span className="text-lg block mb-0.5">Evaluación de habilidades</span>
                <span className="text-white/90 text-sm">Descubre tu trabajo ideal</span>
              </div>
            </div>
          </button>

          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`${item.color} text-white rounded-xl p-5 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 flex items-center gap-4`}
              >
                <div className="bg-white/20 p-3 rounded-lg">
                  <Icon className="w-8 h-8" strokeWidth={2} />
                </div>
                <span className="text-lg flex-1 text-left">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Botón de ayuda flotante */}
      <button
        onClick={() => onNavigate('help')}
        className="fixed bottom-6 right-6 bg-secondary text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all duration-200 active:scale-95 z-50"
        aria-label="Ayuda"
      >
        <HelpCircle className="w-7 h-7" strokeWidth={2.5} />
      </button>
    </div>
  );
}
