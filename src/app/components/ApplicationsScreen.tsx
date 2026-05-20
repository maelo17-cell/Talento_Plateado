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
    },
    {
      id: 3,
      jobTitle: 'Asistente de ventas',
      company: 'Tienda LocalMart',
      date: '5 de Mayo, 2026',
      status: 'rejected',
      statusText: 'No seleccionada',
      message: 'Te animamos a seguir buscando',
    },
    {
      id: 4,
      jobTitle: 'Asistente administrativo',
      company: 'Consultora ABC',
      date: '3 de Mayo, 2026',
      status: 'pending',
      statusText: 'En revisión',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'accepted':
        return <CheckCircle2 className="w-8 h-8" strokeWidth={2} />;
      case 'rejected':
        return <XCircle className="w-8 h-8" strokeWidth={2} />;
      default:
        return <HourglassIcon className="w-8 h-8" strokeWidth={2} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'accepted':
        return 'bg-secondary';
      case 'rejected':
        return 'bg-muted';
      default:
        return 'bg-accent';
    }
  };

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-primary p-6 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="bg-white/20 text-white p-3 rounded-xl hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Volver"
          >
            <ArrowLeft className="w-8 h-8" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-2xl flex-1">Mis postulaciones</h1>
        </div>
      </div>

      <div className="px-6 space-y-6 mt-6">
        {/* Resumen */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
          <p className="text-xl text-center text-muted-foreground leading-relaxed">
            Has enviado {applications.length} postulaciones
          </p>
        </div>

        {/* Lista de postulaciones */}
        {applications.map((app) => (
          <div
            key={app.id}
            className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary/10 p-4 rounded-xl">
                <Building2 className="w-10 h-10 text-primary" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">{app.jobTitle}</h3>
                <p className="text-muted-foreground text-xl">{app.company}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 mb-4 text-muted-foreground">
              <Clock className="w-6 h-6" strokeWidth={2} />
              <span className="text-lg">Postulaste el {app.date}</span>
            </div>

            <div className={`${getStatusColor(app.status)} text-white rounded-xl p-5 flex items-center gap-4 mb-4`}>
              {getStatusIcon(app.status)}
              <div className="flex-1">
                <p className="text-xl mb-1">Estado: {app.statusText}</p>
                {app.message && (
                  <p className="text-white/90 text-lg leading-relaxed">
                    {app.message}
                  </p>
                )}
              </div>
            </div>

            {app.status === 'pending' && (
              <button className="w-full bg-muted text-foreground py-4 rounded-xl hover:bg-muted/80 transition-colors active:scale-98 text-xl border-2 border-border">
                Ver detalles
              </button>
            )}

            {app.status === 'accepted' && (
              <button className="w-full bg-secondary text-white py-4 rounded-xl hover:bg-secondary/90 transition-colors active:scale-98 text-xl">
                Confirmar disponibilidad
              </button>
            )}
          </div>
        ))}

        {/* Mensaje motivador */}
        <div className="bg-gradient-to-br from-accent to-primary/70 rounded-2xl p-6 shadow-lg text-white text-center">
          <p className="text-xl leading-relaxed">
            Sigue adelante. Cada postulación es un paso más hacia tu próxima oportunidad.
          </p>
        </div>
      </div>
    </div>
  );
}
