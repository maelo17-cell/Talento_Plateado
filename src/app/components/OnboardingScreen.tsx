import { Heart, Briefcase, Users, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';

interface OnboardingScreenProps {
  onComplete: () => void;
}

export function OnboardingScreen({ onComplete }: OnboardingScreenProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Heart,
      title: 'Bienvenido a ReConecta',
      description: 'Una plataforma creada especialmente para ti, donde tu experiencia es el mayor valor',
      color: 'from-primary to-accent',
    },
    {
      icon: Briefcase,
      title: 'Encuentra el trabajo perfecto',
      description: 'Empleos con horarios flexibles, empresas inclusivas y trabajos adaptados a tu experiencia',
      color: 'from-secondary to-primary',
    },
    {
      icon: Star,
      title: 'Aprende a tu ritmo',
      description: 'Cursos sencillos sobre tecnología básica y habilidades que te ayudarán en tu nuevo trabajo',
      color: 'from-accent to-secondary',
    },
    {
      icon: Users,
      title: 'Siempre tendrás ayuda',
      description: 'Asistencia por teléfono, WhatsApp y video. Nunca estarás solo en este proceso',
      color: 'from-primary to-secondary',
    },
  ];

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;
  const isLastSlide = currentSlide === slides.length - 1;

  const handleNext = () => {
    if (isLastSlide) {
      onComplete();
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Skip button */}
      {!isLastSlide && (
        <div className="p-6 text-right">
          <button
            onClick={handleSkip}
            className="text-muted-foreground hover:text-foreground transition-colors text-lg"
          >
            Saltar
          </button>
        </div>
      )}

      {/* Contenido del slide */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className={`bg-gradient-to-br ${currentSlideData.color} p-8 rounded-full mb-6 shadow-2xl`}>
          <Icon className="w-16 h-16 text-white" strokeWidth={1.5} />
        </div>

        <h2 className="text-2xl mb-4 text-foreground px-4">
          {currentSlideData.title}
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-md px-4">
          {currentSlideData.description}
        </p>
      </div>

      {/* Indicadores y navegación */}
      <div className="p-6 space-y-4">
        {/* Dots indicadores */}
        <div className="flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Botón siguiente */}
        <button
          onClick={handleNext}
          className="w-full bg-primary text-white py-4 rounded-xl hover:bg-primary/90 transition-colors active:scale-98 shadow-lg flex items-center justify-center gap-2 text-lg"
        >
          <span>{isLastSlide ? 'Comenzar' : 'Siguiente'}</span>
          <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
}
