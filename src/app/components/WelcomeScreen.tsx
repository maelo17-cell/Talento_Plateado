import { Briefcase, GraduationCap, ArrowRight, Users } from 'lucide-react';

interface WelcomeScreenProps {
  onGetStarted: () => void;
  onLogin: () => void;
}

export function WelcomeScreen({ onGetStarted, onLogin }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-brand-salvia flex flex-col justify-center p-5 animate-in fade-in duration-500">
      
      {/* Contenido Principal (Logo y Títulos) */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-sm mx-auto pt-8">
        
        {/* Logotipo Principal Pino con Insignia Terracota */}
        <div className="relative inline-block bg-brand-pino text-white p-6 rounded-[28px] shadow-xl mb-5">
          <Briefcase className="w-16 h-16" strokeWidth={2.2} />
          <div className="absolute -bottom-2 -right-2 bg-brand-terracota text-white p-2 rounded-full border-4 border-brand-salvia flex items-center justify-center shadow-md">
            <Users className="w-6 h-6" strokeWidth={3} />
          </div>
        </div>

        <h1 className="text-3xl font-black text-brand-pino tracking-tight mb-1">
          ReConecta
        </h1>

        <p className="text-base text-slate-700 font-bold mb-10 text-center">
          Tu experiencia sigue teniendo valor
        </p>

        {/* Tarjetas de Información (No interactivas aquí, solo muestran qué hace la app) */}
        <div className="space-y-4 w-full">
          <div className="w-full text-left flex items-center p-4 bg-white border-2 border-slate-200 rounded-[22px] shadow-sm min-h-[72px]">
            <div className="bg-orange-50 text-brand-terracota p-3 rounded-xl mr-4 flex-shrink-0">
              <Briefcase className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <span className="text-[18px] font-black text-brand-pino leading-tight">Encuentra empleos inclusivos</span>
          </div>

          <div className="w-full text-left flex items-center p-4 bg-white border-2 border-slate-200 rounded-[22px] shadow-sm min-h-[72px]">
            <div className="bg-emerald-50 text-brand-pino p-3 rounded-xl mr-4 flex-shrink-0">
              <GraduationCap className="w-7 h-7" strokeWidth={2.5} />
            </div>
            <span className="text-[18px] font-black text-brand-pino leading-tight">Aprende con cursos sencillos</span>
          </div>
        </div>
      </div>

      {/* Botones de Acción de Pie */}
      <div className="w-full max-w-sm mx-auto space-y-4 pt-8 pb-4">
        <button
          onClick={onGetStarted}
          className="w-full min-h-[56px] bg-brand-terracota hover:bg-[#c24100] active:scale-[0.97] text-white font-black py-4 px-4 rounded-[20px] text-lg shadow-lg flex items-center justify-center gap-2 transition-all"
        >
          <span>Comenzar</span>
          <ArrowRight className="w-6 h-6" strokeWidth={3} />
        </button>

        <button
          onClick={onLogin}
          className="w-full min-h-[56px] bg-white hover:bg-slate-50 active:scale-[0.97] text-brand-pino font-extrabold py-3.5 px-4 rounded-[20px] border-2 border-brand-pino transition-all shadow-sm"
        >
          Ya tengo cuenta
        </button>

        <p className="text-center text-slate-500 font-bold text-sm pt-2 leading-relaxed">
          Nunca es tarde para volver a empezar
        </p>
      </div>

    </div>
  );
}
