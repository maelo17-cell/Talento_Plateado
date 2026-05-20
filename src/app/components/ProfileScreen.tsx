import { ArrowLeft, Camera, Mic, Video, Briefcase, Award, Phone, Mail } from 'lucide-react';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  const skills = [
    'Atención al cliente',
    'Administración',
    'Ventas',
    'Cocina',
    'Limpieza',
    'Cuidado de personas',
  ];

  const availableSkills = [
    'Costura',
    'Conducción',
    'Jardinería',
    'Carpintería',
    'Enseñanza',
    'Contabilidad',
  ];

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
          <h1 className="text-white text-2xl flex-1">Mi perfil</h1>
        </div>
      </div>

      <div className="px-6 space-y-6 mt-6">
        {/* Foto de perfil */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
          <h2 className="text-2xl mb-4">Foto de perfil</h2>
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
              <Camera className="w-12 h-12 text-muted-foreground" strokeWidth={2} />
            </div>
            <button className="bg-primary text-white px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors active:scale-98 text-xl w-full">
              Subir foto
            </button>
          </div>
        </div>

        {/* Información personal */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border space-y-4">
          <h2 className="text-2xl mb-2">Información personal</h2>

          <div>
            <label className="block text-lg mb-2 text-muted-foreground">Nombre completo</label>
            <input
              type="text"
              placeholder="Escribe tu nombre"
              className="w-full bg-input-background border-2 border-border rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-lg mb-2 text-muted-foreground">Teléfono</label>
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-muted-foreground" strokeWidth={2} />
              <input
                type="tel"
                placeholder="Tu número de teléfono"
                className="flex-1 bg-input-background border-2 border-border rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-lg mb-2 text-muted-foreground">Correo electrónico (opcional)</label>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-muted-foreground" strokeWidth={2} />
              <input
                type="email"
                placeholder="Tu correo"
                className="flex-1 bg-input-background border-2 border-border rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>
        </div>

        {/* Experiencia laboral */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" strokeWidth={2} />
            <h2 className="text-2xl">Experiencia laboral</h2>
          </div>
          <textarea
            placeholder="Cuéntanos sobre tu experiencia de trabajo..."
            rows={4}
            className="w-full bg-input-background border-2 border-border rounded-xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
          />
        </div>

        {/* Presentación en audio/video */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
          <h2 className="text-2xl mb-4">Preséntate (opcional)</h2>
          <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
            Graba un mensaje para que los empleadores te conozcan mejor
          </p>
          <div className="grid grid-cols-1 gap-3">
            <button className="bg-secondary text-white px-6 py-5 rounded-xl hover:bg-secondary/90 transition-colors active:scale-98 flex items-center justify-center gap-3 text-xl">
              <Mic className="w-8 h-8" strokeWidth={2} />
              <span>Grabar audio</span>
            </button>
            <button className="bg-accent text-white px-6 py-5 rounded-xl hover:bg-accent/90 transition-colors active:scale-98 flex items-center justify-center gap-3 text-xl">
              <Video className="w-8 h-8" strokeWidth={2} />
              <span>Grabar video</span>
            </button>
          </div>
        </div>

        {/* Habilidades seleccionadas */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-primary" strokeWidth={2} />
            <h2 className="text-2xl">Mis habilidades</h2>
          </div>
          <div className="flex flex-wrap gap-3 mb-4">
            {skills.map((skill) => (
              <button
                key={skill}
                className="bg-primary text-white px-5 py-3 rounded-xl text-lg hover:bg-primary/90 transition-colors"
              >
                {skill} ✓
              </button>
            ))}
          </div>
          <p className="text-muted-foreground text-lg mb-3">Agregar más habilidades:</p>
          <div className="flex flex-wrap gap-3">
            {availableSkills.map((skill) => (
              <button
                key={skill}
                className="bg-muted text-foreground px-5 py-3 rounded-xl text-lg hover:bg-muted/80 transition-colors border-2 border-border"
              >
                + {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Botón guardar */}
        <button className="w-full bg-primary text-white py-5 rounded-xl hover:bg-primary/90 transition-colors active:scale-98 text-xl shadow-lg">
          Guardar perfil
        </button>
      </div>
    </div>
  );
}
