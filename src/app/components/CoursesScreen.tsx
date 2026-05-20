import { useState, useEffect } from 'react';
import { ArrowLeft, Search, Clock, BarChart, PlayCircle } from 'lucide-react';
import { coursesData } from '../../data/courses';

interface CoursesScreenProps {
  onBack: () => void;
  onViewCourse: (courseId: number) => void;
}

export function CoursesScreen({ onBack, onViewCourse }: CoursesScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const filteredCourses = coursesData.filter(course => 
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 pb-20 animate-in fade-in duration-300">
      
      {/* CABECERA BLANCA (Igual que en Empleos) */}
      <header className="bg-white px-4 pt-6 pb-4 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-brand-pino transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black text-brand-pino">Aprender</h1>
        </div>

        {/* Barra de búsqueda */}
        <div className="relative flex items-center mb-2">
          <div className="absolute left-3 text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Buscar cursos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3.5 bg-slate-100 border border-slate-200 rounded-xl text-brand-pino font-bold focus:outline-none focus:ring-2 focus:ring-brand-esmeralda/50 transition-all text-base"
          />
        </div>
      </header>

      {/* LISTADO DE CURSOS */}
      <main className="p-4 space-y-4">
        <p className="text-slate-500 font-bold text-sm px-1">
          {filteredCourses.length} cursos recomendados para ti
        </p>

        {filteredCourses.map((course) => (
          <div 
            key={course.id} 
            onClick={() => onViewCourse(course.id)}
            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 cursor-pointer active:scale-[0.98] transition-all hover:border-brand-pino"
          >
            {/* Etiqueta Superior */}
            <div className="flex justify-end mb-2">
              <span className="bg-orange-50 text-brand-terracota text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wide border border-orange-200">
                100% Gratuito
              </span>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="bg-slate-100 p-4 rounded-xl border border-slate-200 shrink-0 self-start">
                <course.icon className="w-8 h-8 text-brand-pino" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-xl font-black text-brand-pino leading-tight mb-1">{course.title}</h3>
                <p className="text-sm font-medium text-slate-600 leading-snug">{course.description}</p>
              </div>
            </div>

            <div className="flex gap-4 mb-5">
              <div className="flex items-center text-slate-500 font-bold text-sm">
                <Clock className="w-4 h-4 mr-1.5" /> {course.duration}
              </div>
              <div className="flex items-center text-slate-500 font-bold text-sm">
                <BarChart className="w-4 h-4 mr-1.5" /> Nivel {course.level}
              </div>
            </div>

            <button className="w-full bg-brand-terracota hover:bg-[#c24100] text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
              <PlayCircle className="w-5 h-5" /> Ver curso completo
            </button>
          </div>
        ))}

        {filteredCourses.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-500 font-bold text-lg">No encontramos cursos con ese nombre.</p>
          </div>
        )}
      </main>
    </div>
  );
}
