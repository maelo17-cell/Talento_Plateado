import { ArrowLeft, Phone, MessageCircle, Video, BookOpen, Volume2 } from 'lucide-react';

interface HelpScreenProps {
  onBack: () => void;
}

export function HelpScreen({ onBack }: HelpScreenProps) {
  const tutorials = [
    {
      id: 1,
      title: 'Cómo buscar empleo',
      icon: BookOpen,
      description: 'Te explicamos paso a paso',
    },
    {
      id: 2,
      title: 'Cómo crear tu perfil',
      icon: BookOpen,
      description: 'Completa tu información fácilmente',
    },
    {
      id: 3,
      title: 'Cómo postularte a un trabajo',
      icon: BookOpen,
      description: 'Guía simple de postulación',
    },
  ];

  const contactOptions = [
    {
      id: 'call',
      icon: Phone,
      label: 'Llamar a soporte',
      description: 'Habla con un asesor',
      color: 'bg-primary',
    },
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      description: 'Escríbenos por WhatsApp',
      color: 'bg-secondary',
    },
    {
      id: 'video',
      icon: Video,
      label: 'Videollamada de ayuda',
      description: 'Te ayudamos en vivo',
      color: 'bg-accent',
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-6">
      {/* Header */}
      <div className="bg-secondary p-6 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-4">
          <button
            onClick={onBack}
            className="bg-white/20 text-white p-3 rounded-xl hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Volver"
          >
            <ArrowLeft className="w-8 h-8" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-2xl flex-1">Centro de ayuda</h1>
        </div>
      </div>

      <div className="px-6 space-y-6 mt-6">
        {/* Mensaje de bienvenida */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-accent">
          <p className="text-foreground text-xl text-center leading-relaxed">
            Estamos aquí para ayudarte en cada paso. No estás solo.
          </p>
        </div>

        {/* Asistencia por voz */}
        <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 shadow-lg text-white">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Volume2 className="w-10 h-10" strokeWidth={2} />
            <h2 className="text-2xl">Ayuda por voz</h2>
          </div>
          <p className="text-lg text-center mb-6 leading-relaxed opacity-95">
            Activa la lectura en voz alta para escuchar las instrucciones
          </p>
          <button className="w-full bg-white text-primary py-5 rounded-xl hover:bg-white/90 transition-colors active:scale-98 text-xl">
            Activar asistente de voz
          </button>
        </div>

        {/* Tutoriales paso a paso */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
          <h2 className="text-2xl mb-4">Tutoriales paso a paso</h2>
          <div className="space-y-4">
            {tutorials.map((tutorial) => {
              const Icon = tutorial.icon;
              return (
                <button
                  key={tutorial.id}
                  className="w-full bg-muted/50 rounded-xl p-5 hover:bg-muted transition-colors active:scale-98 flex items-center gap-4 border-2 border-border"
                >
                  <div className="bg-secondary text-white p-3 rounded-lg">
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xl mb-1">{tutorial.title}</p>
                    <p className="text-muted-foreground text-lg">
                      {tutorial.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Opciones de contacto */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
          <h2 className="text-2xl mb-4">Habla con nosotros</h2>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            ¿Necesitas ayuda personalizada? Contáctanos:
          </p>
          <div className="space-y-4">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <button
                  key={option.id}
                  className={`w-full ${option.color} text-white rounded-xl p-6 hover:opacity-90 transition-opacity active:scale-98 flex items-center gap-4`}
                >
                  <div className="bg-white/20 p-3 rounded-lg">
                    <Icon className="w-8 h-8" strokeWidth={2} />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="text-xl mb-1">{option.label}</p>
                    <p className="text-white/80 text-lg">{option.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Preguntas frecuentes */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
          <h2 className="text-2xl mb-4">Preguntas frecuentes</h2>
          <div className="space-y-3">
            <button className="w-full text-left bg-muted/30 rounded-xl p-5 hover:bg-muted/50 transition-colors border-2 border-border">
              <p className="text-xl">¿Cómo postularme a un empleo?</p>
            </button>
            <button className="w-full text-left bg-muted/30 rounded-xl p-5 hover:bg-muted/50 transition-colors border-2 border-border">
              <p className="text-xl">¿Necesito experiencia en tecnología?</p>
            </button>
            <button className="w-full text-left bg-muted/30 rounded-xl p-5 hover:bg-muted/50 transition-colors border-2 border-border">
              <p className="text-xl">¿Los cursos son gratuitos?</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
