import { useState, useEffect } from 'react';
import { ArrowLeft, Search, MapPin, Building2, SlidersHorizontal, ChevronDown, CheckCircle2, Briefcase, Zap, X } from 'lucide-react';

interface JobsScreenProps {
  onBack: () => void;
}

export function JobsScreen({ onBack }: JobsScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  
  // Estados para los filtros
  const [showFilters, setShowFilters] = useState(false);
  const [filterModality, setFilterModality] = useState('Todas'); // Todas, Presencial, Híbrido, Remoto
  const [filterLocation, setFilterLocation] = useState('Todas'); // Todas, Lima, Provincias

  // Arreglamos el scroll al entrar
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  // Base de datos de prueba mejorada
  const allJobs = [
    {
      id: 1, title: "Asistente Administrativo", company: "Dolphin Telecom del Peru SAC", 
      location: "Lima", modality: "Presencial", salary: "S/ 1,200", 
      isNew: true, timeAgo: "Hace 33 minutos", inclusive: false,
      description: "Buscamos un asistente administrativo para ordenar archivos, gestionar llamadas y apoyar en la recepción.",
      requirements: ["Conocimiento básico de Excel", "Ganas de aprender", "Disponibilidad por las mañanas"]
    },
    {
      id: 2, title: "Soporte Técnico de Atención", company: "Stefanini Peru S.A.", 
      location: "Lima", modality: "Remoto", salary: "S/ 1,500", 
      isNew: true, timeAgo: "Hace 1 hora", inclusive: true,
      description: "Atención de consultas técnicas por teléfono desde la comodidad de tu casa.",
      requirements: ["Internet estable", "Buen trato al cliente", "Paciencia"]
    },
    {
      id: 3, title: "Tutor Académico (Matemáticas)", company: "Colegio San Pedro", 
      location: "Provincias", modality: "Híbrido", salary: "S/ 900", 
      isNew: false, timeAgo: "Hace 2 días", inclusive: false,
      description: "Ayuda a niños de primaria con sus tareas de matemáticas dos veces por semana.",
      requirements: ["Conocimientos básicos de matemáticas", "Empatía con niños"]
    }
  ];

  // Lógica de Filtrado
  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesModality = filterModality === 'Todas' || job.modality === filterModality;
    const matchesLocation = filterLocation === 'Todas' || job.location === filterLocation;
    return matchesSearch && matchesModality && matchesLocation;
  });

  const handleApply = () => {
    alert("¡Postulación enviada con éxito! La empresa revisará tu perfil.");
    setSelectedJob(null);
  };

  // ==========================================
  // VISTA 2: DETALLE DEL EMPLEO
  // ==========================================
  if (selectedJob) {
    return (
      <div className="min-h-screen bg-slate-50 pb-24 animate-in slide-in-from-right-4 duration-300">
        <div className="bg-brand-pino text-white px-4 pt-6 pb-6 shadow-md sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button onClick={() => setSelectedJob(null)} className="p-2 -ml-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ArrowLeft className="w-6 h-6 text-white" />
            </button>
            <span className="text-lg font-black">Detalle del puesto</span>
          </div>
        </div>

        <div className="p-4 space-y-4 mt-2">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <h1 className="text-2xl font-black text-brand-pino leading-tight mb-2">{selectedJob.title}</h1>
            <p className="text-lg font-bold text-brand-terracota mb-4">{selectedJob.company}</p>
            
            <div className="space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
              <div className="flex items-center text-slate-700 font-bold"><MapPin className="w-5 h-5 mr-3 text-slate-400" /> {selectedJob.location}</div>
              <div className="flex items-center text-slate-700 font-bold"><Building2 className="w-5 h-5 mr-3 text-slate-400" /> {selectedJob.modality}</div>
              <div className="flex items-center text-slate-700 font-bold"><Briefcase className="w-5 h-5 mr-3 text-slate-400" /> Pago: {selectedJob.salary}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <h2 className="text-xl font-black text-brand-pino mb-2">Descripción</h2>
            <p className="text-slate-600 font-medium leading-relaxed">{selectedJob.description}</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            <h2 className="text-xl font-black text-brand-pino mb-3">Requisitos</h2>
            <ul className="space-y-2">
              {selectedJob.requirements.map((req: string, idx: number) => (
                <li key={idx} className="flex gap-2 text-slate-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-brand-esmeralda shrink-0" /> {req}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] z-50">
          <button onClick={handleApply} className="w-full max-w-sm mx-auto bg-brand-terracota hover:bg-[#c24100] active:scale-[0.98] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-lg">
            <Zap className="w-6 h-6 fill-current" /> Postularme ahora
          </button>
        </div>
      </div>
    );
  }

  // ==========================================
  // VISTA 1: LISTADO Y FILTROS
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-50 pb-20 animate-in fade-in duration-300 relative">
      
      {/* CABECERA Y BUSCADOR */}
      <header className="bg-white px-4 pt-6 pb-4 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-brand-pino transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-black text-brand-pino">Buscar Empleos</h1>
        </div>

        <div className="relative flex items-center mb-3">
          <div className="absolute left-3 text-slate-400"><Search className="w-5 h-5" /></div>
          <input
            type="text"
            placeholder="Buscar por palabra clave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3.5 bg-slate-100 border border-slate-200 rounded-xl text-brand-pino font-bold focus:outline-none focus:ring-2 focus:ring-brand-esmeralda/50 transition-all text-base"
          />
        </div>

        {/* Botones rápidos de filtros */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <button onClick={() => setShowFilters(true)} className="flex items-center gap-2 bg-brand-pino text-white px-4 py-2.5 rounded-xl font-bold text-sm shadow-sm whitespace-nowrap active:scale-95 transition-transform">
            <SlidersHorizontal className="w-4 h-4" /> Filtros avanzados
          </button>
          {filterLocation !== 'Todas' && (
            <span className="bg-emerald-50 text-brand-esmeralda px-3 py-2.5 rounded-xl font-bold text-sm border border-emerald-200 whitespace-nowrap">
              {filterLocation}
            </span>
          )}
          {filterModality !== 'Todas' && (
            <span className="bg-emerald-50 text-brand-esmeralda px-3 py-2.5 rounded-xl font-bold text-sm border border-emerald-200 whitespace-nowrap">
              {filterModality}
            </span>
          )}
        </div>
      </header>

      {/* LISTA DE RESULTADOS */}
      <main className="p-4 space-y-4">
        <p className="text-slate-500 font-bold text-sm px-1">
          {filteredJobs.length} ofertas encontradas
        </p>

        {filteredJobs.map((job) => (
          <div key={job.id} onClick={() => setSelectedJob(job)} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 cursor-pointer active:scale-[0.98] transition-all hover:border-brand-pino">
            
            <div className="flex justify-between items-center mb-2">
              {job.isNew ? <span className="bg-brand-salvia text-brand-esmeralda text-[10px] font-black px-2 py-1 rounded-md uppercase tracking-wide border border-emerald-200">Nuevo</span> : <span></span>}
              <span className="text-xs font-bold text-slate-400">{job.timeAgo}</span>
            </div>

            <h3 className="text-xl font-black text-brand-pino leading-tight mb-1">{job.title}</h3>
            <p className="text-base font-bold text-slate-600 mb-4">{job.company}</p>

            <div className="flex gap-4 mb-4">
              <div className="flex items-center text-slate-500 font-bold text-sm"><MapPin className="w-4 h-4 mr-1" /> {job.location}</div>
              <div className="flex items-center text-slate-500 font-bold text-sm"><Building2 className="w-4 h-4 mr-1" /> {job.modality}</div>
            </div>

            <button className="w-full bg-slate-50 border-2 border-brand-pino text-brand-pino font-black py-3 rounded-xl flex items-center justify-center transition-all">
              Ver detalle completo
            </button>
          </div>
        ))}

        {filteredJobs.length === 0 && (
          <div className="text-center py-10">
            <p className="text-slate-500 font-bold text-lg">No encontramos empleos con esos filtros.</p>
            <button onClick={() => { setFilterLocation('Todas'); setFilterModality('Todas'); setSearchTerm(''); }} className="mt-4 text-brand-terracota font-black underline">Limpiar filtros</button>
          </div>
        )}
      </main>

      {/* MODAL DE FILTROS */}
      {showFilters && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex flex-col justify-end">
          <div className="bg-white w-full rounded-t-3xl p-6 pb-10 animate-in slide-in-from-bottom-10 duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-black text-brand-pino">Filtros</h2>
              <button onClick={() => setShowFilters(false)} className="bg-slate-100 p-2 rounded-full text-slate-500"><X className="w-6 h-6" /></button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-slate-700 font-bold mb-3 text-lg">Ubicación</label>
                <div className="flex gap-3">
                  {['Todas', 'Lima', 'Provincias'].map(loc => (
                    <button key={loc} onClick={() => setFilterLocation(loc)} className={`px-4 py-3 rounded-xl font-bold border-2 transition-all ${filterLocation === loc ? 'bg-brand-pino text-white border-brand-pino' : 'bg-white text-slate-600 border-slate-200'}`}>
                      {loc}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-3 text-lg">Modalidad de Trabajo</label>
                <div className="flex flex-wrap gap-3">
                  {['Todas', 'Presencial', 'Híbrido', 'Remoto'].map(mod => (
                    <button key={mod} onClick={() => setFilterModality(mod)} className={`px-4 py-3 rounded-xl font-bold border-2 transition-all ${filterModality === mod ? 'bg-brand-pino text-white border-brand-pino' : 'bg-white text-slate-600 border-slate-200'}`}>
                      {mod}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button onClick={() => setShowFilters(false)} className="w-full bg-brand-terracota text-white font-black py-4 rounded-xl mt-8 shadow-md text-lg active:scale-95 transition-transform">
              Aplicar filtros
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
