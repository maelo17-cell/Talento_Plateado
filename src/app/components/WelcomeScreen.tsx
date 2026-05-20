import { ArrowRight, Briefcase, Users, GraduationCap, TrendingUp } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function WelcomeScreen({ onGetStarted, onLogin }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/10 flex flex-col">
      {/* Logo y bienvenida */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        {/* Logo corporativo profesional */}
        <div className="relative mb-5">
          <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-5 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <Briefcase className="w-12 h-12 text-white" strokeWidth={2} />
              <TrendingUp className="w-8 h-8 text-white/90" strokeWidth={2.5} />
            </div>
          </div>
          <div className="absolute -bottom-1 -right-1 bg-secondary rounded-full p-2 shadow-lg">
            <Users className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
        </div>

        <h1 className="text-3xl mb-3 text-foreground tracking-tight">
          ReConecta
        </h1>

        <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-sm">
          Tu experiencia sigue teniendo valor
        </p>

        {/* Características principales */}
        <div className="space-y-3 mb-6 w-full max-w-sm">
          <div className="bg-card rounded-xl p-4 shadow-lg border-2 border-border flex items-center gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Briefcase className="w-6 h-6 text-primary" strokeWidth={2} />
            </div>
            <p className="text-left flex-1">
              Encuentra empleos inclusivos
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 shadow-lg border-2 border-border flex items-center gap-3">
            <div className="bg-secondary/10 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6 text-secondary" strokeWidth={2} />
            </div>
            <p className="text-left flex-1">
              Aprende con cursos sencillos
            </p>
          </div>

          <div className="bg-card rounded-xl p-4 shadow-lg border-2 border-border flex items-center gap-3">
            <div className="bg-accent/10 p-2 rounded-lg">
              <Users className="w-6 h-6 text-accent" strokeWidth={2} />
            </div>
            <p className="text-left flex-1">
              Recibe ayuda personalizada
            </p>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="p-6 space-y-3">
        <button
          onClick={onGetStarted}
          className="w-full bg-primary text-white py-4 rounded-xl hover:bg-primary/90 transition-colors active:scale-98 shadow-lg flex items-center justify-center gap-2 text-lg"
        >
          <span>Comenzar</span>
          <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
        </button>

        <button
          onClick={onLogin}
          className="w-full bg-card text-foreground border-2 border-border py-4 rounded-xl hover:bg-muted/30 transition-colors active:scale-98 text-lg"
        >
          Ya tengo cuenta
        </button>

        <p className="text-center text-muted-foreground text-sm pt-1 leading-relaxed">
          Nunca es tarde para volver a empezar
        </p>
      </div>
    </div>
  );
}
