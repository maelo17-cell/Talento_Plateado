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

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-accent p-5 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Volver"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-xl flex-1">Crear cuenta</h1>
        </div>
      </div>

      {/* Formulario */}
      <div className="p-5">
        <div className="bg-card rounded-xl p-4 shadow-lg border-2 border-accent/30 mb-4">
          <p className="text-center text-foreground leading-relaxed">
            Vamos a crear tu perfil paso a paso
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nombre completo */}
          <div className="bg-card rounded-xl p-4 shadow-lg border-2 border-border">
            <label className="block mb-2 text-muted-foreground">
              ¿Cómo te llamas?
            </label>
            <div className="flex items-center gap-2 bg-input-background border-2 border-border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-primary">
              <User className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
              <input
                type="text"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="flex-1 bg-transparent focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Teléfono */}
          <div className="bg-card rounded-xl p-4 shadow-lg border-2 border-border">
            <label className="block mb-2 text-muted-foreground">
              ¿Cuál es tu número de teléfono?
            </label>
            <div className="flex items-center gap-2 bg-input-background border-2 border-border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-primary">
              <Phone className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
              <input
                type="tel"
                placeholder="9 dígitos"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 bg-transparent focus:outline-none"
                required
              />
            </div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Te contactaremos por este número
            </p>
          </div>

          {/* Email (opcional) */}
          <div className="bg-card rounded-xl p-4 shadow-lg border-2 border-border">
            <label className="block mb-2 text-muted-foreground">
              Correo electrónico (opcional)
            </label>
            <div className="flex items-center gap-2 bg-input-background border-2 border-border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-primary">
              <Mail className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
              <input
                type="email"
                placeholder="tu@correo.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="flex-1 bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Contraseña */}
          <div className="bg-card rounded-xl p-4 shadow-lg border-2 border-border">
            <label className="block mb-2 text-muted-foreground">
              Crea una contraseña
            </label>
            <div className="flex items-center gap-2 bg-input-background border-2 border-border rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-primary">
              <Lock className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Mínimo 6 caracteres"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="flex-1 bg-transparent focus:outline-none"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" strokeWidth={2} />
                ) : (
                  <Eye className="w-5 h-5" strokeWidth={2} />
                )}
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Usa algo fácil de recordar
            </p>
          </div>

          {/* Mensaje de seguridad */}
          <div className="bg-secondary/10 border-2 border-secondary rounded-xl p-4">
            <p className="text-sm text-foreground text-center leading-relaxed">
              Tus datos están seguros y nunca los compartiremos sin tu permiso
            </p>
          </div>

          {/* Botón de registro */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-4 rounded-xl hover:bg-primary/90 transition-colors active:scale-98 shadow-lg"
          >
            Crear mi cuenta
          </button>
        </form>
      </div>
    </div>
  );
}
