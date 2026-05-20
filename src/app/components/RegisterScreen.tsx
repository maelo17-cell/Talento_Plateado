import { ArrowLeft, User, Phone, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

interface RegisterScreenProps {
  onBack: () => void;
  onRegister: () => void;
}

export function RegisterScreen({ onBack, onRegister }: RegisterScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onRegister();
  };

  // NUEVA FUNCIÓN: Solo permite escribir 9 números
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ''); // Borra todo lo que no sea número
    if (value.length <= 9) {
      setFormData({ ...formData, phone: value });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 animate-in fade-in duration-300 pb-10">
      {/* Header Terracota */}
      <div className="bg-brand-terracota p-5 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors active:scale-95">
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-xl font-black flex-1">Crear cuenta</h1>
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="bg-white rounded-xl p-4 shadow-sm border border-brand-terracota/30">
          <p className="text-center text-brand-pino font-bold">Vamos a crear tu perfil paso a paso</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
            <label className="block mb-2 font-bold text-slate-700">¿Cómo te llamas?</label>
            <div className="flex items-center gap-3 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus-within:border-brand-pino transition-colors">
              <User className="w-5 h-5 text-slate-400" />
              <input type="text" placeholder="Ej: Luis Cuya" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="flex-1 bg-transparent focus:outline-none font-bold text-brand-pino" required />
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
            <label className="block mb-2 font-bold text-slate-700">¿Cuál es tu número de celular?</label>
            <div className="flex items-center gap-3 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus-within:border-brand-pino transition-colors">
              <Phone className="w-5 h-5 text-slate-400" />
              {/* INPUT CORREGIDO */}
              <input type="tel" placeholder="9 dígitos" value={formData.phone} onChange={handlePhoneChange} className="flex-1 bg-transparent focus:outline-none font-black text-brand-pino text-lg tracking-wider" required />
            </div>
            <p className="text-sm font-bold text-slate-500 mt-2">Te contactaremos por este número</p>
          </div>

          <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
            <label className="block mb-2 font-bold text-slate-700">Crea una contraseña</label>
            <div className="flex items-center gap-3 bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 focus-within:border-brand-pino transition-colors">
              <Lock className="w-5 h-5 text-slate-400" />
              <input type={showPassword ? 'text' : 'password'} placeholder="Mínimo 6 caracteres" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="flex-1 bg-transparent focus:outline-none font-bold text-brand-pino" required minLength={6} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-slate-400">
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div className="bg-emerald-50 border-2 border-brand-esmeralda/20 rounded-xl p-4">
            <p className="text-sm font-bold text-brand-esmeralda text-center">Tus datos están seguros y nunca los compartiremos sin tu permiso</p>
          </div>

          <button type="submit" className="w-full bg-brand-pino text-white py-4 rounded-xl hover:bg-slate-800 active:scale-95 font-black text-lg transition-all shadow-md">
            Crear mi cuenta
          </button>
        </form>
      </div>
    </div>
  );
}
