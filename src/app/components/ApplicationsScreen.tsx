import { ArrowLeft, Building2, Clock, CheckCircle2, HourglassIcon, XCircle } from 'lucide-react';

interface ApplicationsScreenProps {
  onBack: () => void;
}

export function ApplicationsScreen({ onBack }: ApplicationsScreenProps) {
  const applications = [
    {
      id: 1,
      jobTitle: 'Atención al cliente',
      company: 'Retail Express',
      date: '10 de Mayo, 2026',
      status: 'pending',
      statusText: 'En revisión',
    },
    {
      id: 2,
      jobTitle: 'Recepcionista',
      company: 'Hotel Plaza',
      date: '8 de Mayo, 2026',
      status: 'accepted',
      statusText: 'Aceptada',
      message: '¡Te contactaremos pronto para una entrevista!',
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-10 animate-in fade-in duration-300">
      
      {/* Header */}
      <div className="bg-brand-pino p-5 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="bg-white/10 text-white p-2.5 rounded-xl hover:bg-white/20 transition-colors active:scale-95 border border-white/10">
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-xl font-black flex-1">Mis postulaciones</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
          <p className="text-base text-center font-bold text-brand-pino">
            Has enviado {applications.length} postulaciones
          </p>
        </div>

        {applications.map((app) => (
          <div key={app.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
            
            {/* Título de la postulación */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
                <Building2 className="w-8 h-8 text-brand-pino" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-brand-pino leading-tight mb-1">{app.jobTitle}</h3>
                <p className="text-slate-600 font-bold">{app.company}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 text-slate-500 font-bold text-sm">
              <Clock className="w-4 h-4" /> Postulaste el {app.date}
            </div>

            {/* ESTADO DE LA POSTULACIÓN (Con colores de la paleta nueva) */}
            {app.status === 'pending' ? (
              <div className="bg-brand-terracota text-white rounded-xl p-4 flex items-center gap-3 mb-4 shadow-sm">
                <HourglassIcon className="w-6 h-6 shrink-0" />
                <span className="font-bold text-base flex-1">Estado: {app.statusText}</span>
              </div>
            ) : (
              <div className="bg-brand-esmeralda text-white rounded-xl p-4 flex items-start gap-3 mb-4 shadow-sm">
                <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-base block mb-1">Estado: {app.statusText}</span>
                  <span className="text-white/90 text-sm font-medium leading-tight block">{app.message}</span>
                </div>
              </div>
            )}

            {/* BOTONES INTERACTIVOS */}
            {app.status === 'pending' && (
              <button 
                onClick={() => alert(`El equipo de ${app.company} está revisando tu perfil. Te avisaremos por SMS si hay novedades.`)}
                className="w-full bg-white text-brand-pino py-3 rounded-xl active:scale-95 font-black border-2 border-slate-200 hover:border-brand-pino transition-all"
              >
                Ver detalles
              </button>
            )}

            {app.status === 'accepted' && (
              <button 
                onClick={() => alert('¡Excelente! Hemos notificado a la empresa que estás disponible. Te llamarán pronto.')}
                className="w-full bg-brand-esmeralda text-white py-3 rounded-xl active:scale-[0.98] hover:bg-green-800 transition-colors font-black shadow-md"
              >
                Confirmar disponibilidad
              </button>
            )}
          </div>
        ))}

      </div>
    </div>
  );
}
