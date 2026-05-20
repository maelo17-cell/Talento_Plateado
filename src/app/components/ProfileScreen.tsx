import { useEffect } from 'react';
import { ArrowLeft, Camera, Mic, Video, Briefcase, Award, Phone, Mail } from 'lucide-react';

interface ProfileScreenProps {
  onBack: () => void;
}

export function ProfileScreen({ onBack }: ProfileScreenProps) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, []);

  const skills = ['Atención al cliente', 'Administración', 'Ventas', 'Cocina'];
  const availableSkills = ['Costura', 'Conducción', 'Jardinería'];

  return (
    <div className="min-h-screen bg-slate-50 pb-24 animate-in fade-in duration-300">
      {/* Header */}
      <div className="bg-brand-pino p-5 sticky top-0 z-20 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="bg-white/10 text-white p-2.5 rounded-xl hover:bg-white/20 transition-colors active:scale-95 border border-white/10">
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-xl font-black flex-1">Mi perfil</h1>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Foto de perfil */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h2 className="text-lg font-black text-brand-pino mb-3">Foto de perfil</h2>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center border-2 border-slate-200">
              <Camera className="w-8 h-8 text-slate-400" />
            </div>
            <button className="bg-brand-pino text-white px-6 py-3 rounded-xl hover:bg-slate-800 active:scale-95 font-bold shadow-sm text-sm">
              Subir foto
            </button>
          </div>
        </div>

        {/* Información personal (Más compacta) */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200 space-y-4">
          <h2 className="text-lg font-black text-brand-pino">Información personal</h2>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1.5">Nombre completo</label>
            <input type="text" placeholder="Escribe tu nombre" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-pino font-bold focus:outline-none focus:border-brand-pino transition-colors" />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1.5">Teléfono</label>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:border-brand-pino transition-colors">
              <Phone className="w-5 h-5 text-slate-400" />
              <input type="tel" placeholder="Tu número" className="flex-1 bg-transparent focus:outline-none font-bold text-brand-pino" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-600 mb-1.5">Correo (opcional)</label>
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus-within:border-brand-pino transition-colors">
              <Mail className="w-5 h-5 text-slate-400" />
              <input type="email" placeholder="Tu correo" className="flex-1 bg-transparent focus:outline-none font-bold text-brand-pino" />
            </div>
          </div>
        </div>

        {/* Experiencia laboral */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-6 h-6 text-brand-pino" />
            <h2 className="text-lg font-black text-brand-pino">Experiencia laboral</h2>
          </div>
          <textarea placeholder="Cuéntanos brevemente sobre tus trabajos anteriores..." rows={3} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-brand-pino font-medium focus:outline-none focus:border-brand-pino resize-none" />
        </div>

        {/* Presentación en audio/video */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <h2 className="text-lg font-black text-brand-pino mb-1">Preséntate (opcional)</h2>
          <p className="text-slate-500 font-medium text-sm mb-4">Graba un mensaje corto para los empleadores</p>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-brand-esmeralda text-white py-3 rounded-xl hover:bg-green-800 active:scale-95 flex flex-col items-center justify-center gap-1 shadow-sm">
              <Mic className="w-6 h-6" /> <span className="font-bold text-sm">Audio</span>
            </button>
            <button className="bg-brand-terracota text-white py-3 rounded-xl hover:bg-[#c24100] active:scale-95 flex flex-col items-center justify-center gap-1 shadow-sm">
              <Video className="w-6 h-6" /> <span className="font-bold text-sm">Video</span>
            </button>
          </div>
        </div>

        {/* Habilidades seleccionadas */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-6 h-6 text-brand-pino" />
            <h2 className="text-lg font-black text-brand-pino">Mis habilidades</h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill) => (
              <button key={skill} className="bg-brand-pino text-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-sm">
                {skill} ✓
              </button>
            ))}
          </div>
          <p className="text-slate-500 font-bold text-sm mb-2">Agregar más:</p>
          <div className="flex flex-wrap gap-2">
            {availableSkills.map((skill) => (
              <button key={skill} className="bg-white text-brand-pino px-3 py-1.5 rounded-lg text-sm font-bold border border-slate-300">
                + {skill}
              </button>
            ))}
          </div>
        </div>

        {/* Botón guardar */}
        <button className="w-full bg-brand-pino text-white py-4 rounded-xl hover:bg-slate-800 active:scale-98 font-black text-lg shadow-md mb-8">
          Guardar cambios
        </button>
      </div>
    </div>
  );
}
