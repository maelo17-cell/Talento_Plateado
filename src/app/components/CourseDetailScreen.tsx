import { ArrowLeft, Clock, BarChart, BookOpen, PlayCircle, CheckCircle2 } from 'lucide-react';

interface CourseDetailScreenProps {
  course: any; // Aquí vendrían los datos del curso
  onBack: () => void;
  onStartCourse: () => void;
}

export function CourseDetailScreen({ course, onBack, onStartCourse }: CourseDetailScreenProps) {
  return (
    <div className="min-h-screen bg-slate-50 pb-24 animate-in slide-in-from-right-4 duration-300">
      
      {/* CABECERA COLOR TERRACOTA (Para destacar que es un área de aprendizaje) */}
      <div className="bg-brand-terracota text-white px-4 pt-6 pb-8 rounded-b-[2rem] shadow-md relative">
        <div className="flex items-center gap-3 mb-6">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <span className="text-sm font-bold uppercase tracking-wider opacity-90">Detalles del curso</span>
        </div>

        <div className="flex gap-4 items-center mb-4">
          <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
            <course.icon className="w-10 h-10 text-white" strokeWidth={2} />
          </div>
          <div>
            <h1 className="text-2xl font-black leading-tight mb-1">{course.title}</h1>
            <p className="text-white/80 font-medium text-sm leading-snug">{course.description}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <span className="flex items-center gap-1.5 bg-black/10 px-3 py-1.5 rounded-lg text-sm font-bold backdrop-blur-sm">
            <Clock className="w-4 h-4" /> {course.duration}
          </span>
          <span className="flex items-center gap-1.5 bg-black/10 px-3 py-1.5 rounded-lg text-sm font-bold backdrop-blur-sm">
            <BarChart className="w-4 h-4" /> {course.level}
          </span>
        </div>
      </div>

      {/* CONTENIDO DEL CURSO */}
      <div className="px-4 -mt-4 relative z-10 space-y-4">
        
        {/* TARJETA 1: Sobre este curso */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-brand-pino" />
            <h2 className="text-lg font-black text-brand-pino">Sobre este curso</h2>
          </div>
          <p className="text-slate-600 font-medium leading-relaxed">
            {course.detailedDescription}
          </p>
        </div>

        {/* TARJETA 2: Contenido / Módulos */}
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-black text-brand-pino mb-4">Contenido del curso</h2>
          
          <div className="space-y-3">
            {course.modules.map((module: any, index: number) => (
              <div key={module.id} className="flex gap-4 p-3 rounded-xl border border-slate-100 bg-slate-50 items-start">
                <div className="bg-white text-slate-400 rounded-full w-8 h-8 flex items-center justify-center font-black shadow-sm shrink-0 border border-slate-200">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold text-brand-pino text-[15px] leading-tight mb-1">{module.title}</h3>
                  <div className="flex items-center gap-1 text-slate-500 text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" /> {module.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTÓN FLOTANTE INFERIOR */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] md:absolute z-50">
        <button 
          onClick={onStartCourse}
          className="w-full max-w-sm mx-auto bg-brand-pino hover:bg-slate-800 active:scale-[0.98] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-lg"
        >
          <PlayCircle className="w-6 h-6" /> Comenzar primera clase
        </button>
      </div>

    </div>
  );
}
