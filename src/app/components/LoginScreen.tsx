import { ArrowLeft, Phone, Lock, Eye, EyeOff, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface LoginScreenProps {
  onBack: () => void;
  onLogin: () => void;
}

export function LoginScreen({ onBack, onLogin }: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    phone: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-secondary to-primary p-5 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Volver"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-xl flex-1">Iniciar sesión</h1>
        </div>
      </div>

      {/* Formulario */}
      <div className="p-6 flex flex-col min-h-[calc(100vh-120px)]">
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-accent/30 mb-6">
          <p className="text-xl text-center text-foreground leading-relaxed">
            Qué bueno verte de nuevo
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 flex-1">
          {/* Teléfono */}
          <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
            <label className="block text-lg mb-3 text-muted-foreground">
              Número de teléfono
            </label>
            <div className="flex items-center gap-3 bg-input-background border-2 border-border rounded-xl px-6 py-4 focus-within:ring-2 focus-within:ring-primary">
              <Phone className="w-7 h-7 text-muted-foreground" strokeWidth={2} />
              <input
                type="tel"
                placeholder="Tu número registrado"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 bg-transparent text-lg focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-border">
            <label className="block text-lg mb-3 text-muted-foreground">
              Contraseña
            </label>
            <div className="flex items-center gap-3 bg-input-background border-2 border-border rounded-xl px-6 py-4 focus-within:ring-2 focus-within:ring-primary">
              <Lock className="w-7 h-7 text-muted-foreground" strokeWidth={2} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Tu contraseña"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="flex-1 bg-transparent text-lg focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? (
                  <EyeOff className="w-7 h-7" strokeWidth={2} />
                ) : (
                  <Eye className="w-7 h-7" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>

          {/* ¿Olvidaste tu contraseña? */}
          <button
            type="button"
            className="w-full bg-muted/50 text-foreground border-2 border-border py-5 rounded-xl hover:bg-muted transition-colors active:scale-98 flex items-center justify-center gap-3 text-lg"
          >
            <HelpCircle className="w-7 h-7 text-accent" strokeWidth={2} />
            <span>¿Olvidaste tu contraseña?</span>
          </button>

          {/* Botón de iniciar sesión */}
          <button
            type="submit"
            className="w-full bg-secondary text-white py-6 rounded-2xl hover:bg-secondary/90 transition-colors active:scale-98 text-xl shadow-lg"
          >
            Entrar a mi cuenta
          </button>

          {/* Ayuda adicional */}
          <div className="bg-accent/10 border-2 border-accent rounded-2xl p-5 mt-6">
            <p className="text-base text-foreground text-center leading-relaxed mb-3">
              ¿Tienes problemas para entrar?
            </p>
            <button
              type="button"
              className="w-full bg-accent text-white py-4 rounded-xl hover:bg-accent/90 transition-colors text-lg"
            >
              Contactar soporte
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
