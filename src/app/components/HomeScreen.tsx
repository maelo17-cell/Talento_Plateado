import { Briefcase, GraduationCap, User, FileText, Sparkles } from 'lucide-react';

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 animate-in fade-in duration-300">
      
      {/* CABECERA (Con el nuevo color de la marca) */}
      <div className="bg-brand-terracota px-6 pt-8 pb-10 rounded-b-[2rem] shadow-md relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
            <Briefcase className="w-7 h-7 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-white text-3xl font-black tracking-tight">ReConecta</h1>
        </div>
        <p className="text-white/90 text-lg font-bold">Tu experiencia sigue teniendo valor</p>
        <p className="text-white/70 text-sm font-medium mt-1">Nunca es tarde para volver a empezar</p>
      </div>

      {/* MENÚ DE TARJETAS (Estilo Premium) */}
      <div className="px-5 -mt-6 relative z-10 space-y-4 max-w-md mx-auto">
        
        {/* Evaluación de Habilidades (Destacado) */}
        <button
          onClick={() => onNavigate('assessment')}
          className="w-full bg-brand-pino text-white rounded-2xl p-5 shadow-lg active:scale-[0.98] transition-all flex items-center justify-between border-2 border-brand-pino hover:bg-slate-800"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="bg-white/10 p-3 rounded-xl border border-white/20">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <span className="text-lg font-black block mb-0.5">Evaluación de habilidades</span>
              <span className="text-white/70 text-sm font-bold">Descubre tu trabajo ideal</span>
            </div>
          </div>
          <span className="bg-white text-brand-pino text-[10px] uppercase font-black px-2 py-1 rounded-md">Nuevo</span>
        </button>

        {/* Opciones Regulares */}
        <button onClick={() => onNavigate('jobs')} className="w-full bg-white border border-slate-200 text-brand-pino rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all flex items-center gap-4 hover:border-brand-esmeralda/30 text-left">
          <div className="bg-slate-100 p-3 rounded-xl border border-slate-200"><Briefcase className="w-7 h-7 text-brand-pino" /></div>
          <span className="text-lg font-black flex-1">Buscar empleo</span>
        </button>

        <button onClick={() => onNavigate('courses')} className="w-full bg-white border border-slate-200 text-brand-pino rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all flex items-center gap-4 hover:border-brand-esmeralda/30 text-left">
          <div className="bg-slate-100 p-3 rounded-xl border border-slate-200"><GraduationCap className="w-7 h-7 text-brand-pino" /></div>
          <span className="text-lg font-black flex-1">Cursos recomendados</span>
        </button>

        <button onClick={() => onNavigate('profile')} className="w-full bg-brand-terracota border border-brand-terracota text-white rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all flex items-center gap-4 hover:bg-[#c24100] text-left">
          <div className="bg-white/20 p-3 rounded-xl border border-white/20"><User className="w-7 h-7 text-white" /></div>
          <span className="text-lg font-black flex-1">Mi perfil</span>
        </button>

        <button onClick={() => onNavigate('applications')} className="w-full bg-[#E5DACE] border border-[#d1c1b0] text-brand-pino rounded-2xl p-5 shadow-sm active:scale-[0.98] transition-all flex items-center gap-4 hover:bg-[#d1c1b0] text-left">
          <div className="bg-white/50 p-3 rounded-xl border border-white/50"><FileText className="w-7 h-7 text-brand-pino" /></div>
          <span className="text-lg font-black flex-1">Mis postulaciones</span>
        </button>
      </div>
    </div>
  );
}
