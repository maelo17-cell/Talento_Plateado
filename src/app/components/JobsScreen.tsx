import { useState } from 'react';
import { ArrowLeft, Search, MapPin, Building2, Zap, SlidersHorizontal, ChevronDown } from 'lucide-react';

interface JobsScreenProps {
  onBack: () => void;
}

export function JobsScreen({ onBack }: JobsScreenProps) {
  const [searchTerm, setSearchTerm] = useState('');

  // Datos simulados estilo Bumeran/Computrabajo
  const jobs = [
    {
      id: 1,
      title: "Asistente Administrativo",
      company: "Dolphin Telecom del Peru SAC",
      location: "Santiago de Surco, Lima",
      modality: "Presencial",
      salary: "S/ 1,200",
      isNew: true,
      timeAgo: "Hace 33 minutos",
      quickApply: true,
    },
    {
      id: 2,
      title: "Soporte Técnico N2 - Atención",
      company: "Stefanini Peru S.A.",
      location: "San Isidro, Lima",
      modality: "Presencial",
      salary: "S/ 1,500",
      isNew: true,
      timeAgo: "Hace 1 hora",
      quickApply: true,
      inclusive: true,
    },
    {
      id: 3,
      title: "Mentor / Tutor Académico",
      company: "Colegio San Pedro",
      location: "Miraflores, Lima",
      modality: "Híbrido",
      salary: "S/ 900",
      isNew: false,
      timeAgo: "Hace 2 días",
      quickApply: false,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20 animate-in fade-in duration-300">
      
      {/* CABECERA BLANCA (Estilo App Nativa) */}
      <header className="bg-white px-4 pt-6 pb-4 shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3 mb-4">
          <button onClick={onBack} className="p-2 -ml-2 rounded-full hover:bg-slate-100 text-brand-pino transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-black text-brand-pino">Buscar Empleos</h1>
        </div>

        {/* Barra de búsqueda mejorada */}
        <div className="relative flex items-center mb-3">
          <div className="absolute left-3 text-slate-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Puesto o palabra clave..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3.5 bg-slate-100 border border-slate-200 rounded-xl text-brand-pino font-bold focus:outline-none focus:ring-2 focus:ring-brand-esmeralda/50 transition-all text-base"
          />
        </div>

        {/* Filtros rápidos (Pills) */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
          <button className="flex items-center gap-2 bg-brand-pino text-white px-4 py-2 rounded-lg font-bold text-sm shadow-sm whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4" /> Filtros
          </button>
          <button className="flex items-center gap-1 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm shadow-sm whitespace-nowrap">
            Lima <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-1 bg-white border border-slate-300 text-slate-700 px-4 py-2 rounded-lg font-bold text-sm shadow-sm whitespace-nowrap">
            Medio tiempo <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* LISTA DE EMPLEOS */}
      <main className="p-4 space-y-4">
        <p className="text-slate-500 font-bold text-sm px-1">
          {jobs.length} ofertas de empleo recomendadas
        </p>

        {jobs.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl p-5 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] border border-slate-200 relative overflow-hidden transition-all hover:border-brand-esmeralda/50">
            
            {/* Etiquetas superiores */}
            <div className="flex justify-between items-center mb-3">
              {job.isNew ? (
                <span className="bg-brand-salvia border border-emerald-200 text-brand-esmeralda text-[11px] font-black px-2.5 py-1 rounded-md uppercase tracking-wide">
                  Nuevo
                </span>
              ) : (
                <span className="text-transparent">.</span> // Espaciador
              )}
              <span className="text-xs font-bold text-slate-400">{job.timeAgo}</span>
            </div>

            {/* Título y Empresa */}
            <h3 className="text-[19px] font-black text-brand-pino leading-tight mb-1">{job.title}</h3>
            <p className="text-base font-bold text-slate-600 mb-4">{job.company}</p>

            {/* Detalles con Íconos */}
            <div className="space-y-2.5 mb-5">
              <div className="flex items-center text-slate-600 font-medium text-sm">
                <MapPin className="w-4.5 h-4.5 mr-2.5 text-slate-400" /> {job.location}
              </div>
              <div className="flex items-center text-slate-600 font-medium text-sm">
                <Building2 className="w-4.5 h-4.5 mr-2.5 text-slate-400" /> {job.modality}
              </div>
            </div>

            {/* Etiquetas extra (Inclusivo, etc) */}
            {job.inclusive && (
              <div className="mb-4 inline-block bg-purple-50 text-purple-700 border border-purple-200 text-xs font-bold px-3 py-1.5 rounded-lg">
                ♿ Apto para personas con discapacidad
              </div>
            )}

            {/* Botón de Acción Principal */}
            {job.quickApply ? (
              <button className="w-full bg-brand-terracota hover:bg-[#c24100] active:scale-[0.98] text-white font-black py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md">
                <Zap className="w-5 h-5 fill-current" /> Postulación rápida
              </button>
            ) : (
              <button className="w-full bg-white border-2 border-brand-pino text-brand-pino active:scale-[0.98] font-black py-3.5 rounded-xl flex items-center justify-center transition-all">
                Ver detalle
              </button>
            )}
          </div>
        ))}
      </main>
    </div>
  );
}
