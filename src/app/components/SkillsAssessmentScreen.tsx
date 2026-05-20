import { ArrowLeft, Heart, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

interface SkillsAssessmentScreenProps {
  onBack: () => void;
  onComplete: () => void;
}

export function SkillsAssessmentScreen({ onBack, onComplete }: SkillsAssessmentScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const questions = [
    {
      id: 1,
      question: '¿En qué áreas tienes experiencia?',
      subtitle: 'Selecciona todas las que apliquen',
      options: [
        { id: 'customer-service', label: 'Atención al cliente', icon: '👥' },
        { id: 'cooking', label: 'Cocina', icon: '👨‍🍳' },
        { id: 'admin', label: 'Administración', icon: '📋' },
        { id: 'sales', label: 'Ventas', icon: '🛍️' },
        { id: 'cleaning', label: 'Limpieza', icon: '🧹' },
        { id: 'care', label: 'Cuidado de personas', icon: '❤️' },
      ],
    },
    {
      id: 2,
      question: '¿Qué tipo de horario prefieres?',
      subtitle: 'Elige la opción que mejor se adapte a ti',
      options: [
        { id: 'fulltime', label: 'Tiempo completo', icon: '⏰' },
        { id: 'parttime', label: 'Medio tiempo', icon: '🕐' },
        { id: 'flexible', label: 'Horario flexible', icon: '✨' },
        { id: 'weekends', label: 'Solo fines de semana', icon: '📅' },
      ],
    },
    {
      id: 3,
      question: '¿Qué tanto usas la tecnología?',
      subtitle: 'Ayúdanos a recomendarte el trabajo ideal',
      options: [
        { id: 'advanced', label: 'Uso avanzado de computadora', icon: '💻' },
        { id: 'basic', label: 'Uso básico de celular', icon: '📱' },
        { id: 'learning', label: 'Estoy aprendiendo', icon: '📚' },
        { id: 'minimal', label: 'Prefiero trabajo sin tecnología', icon: '✋' },
      ],
    },
  ];

  const currentQ = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  const handleNext = () => {
    if (isLastQuestion) {
      onComplete();
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const toggleSkill = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter((s) => s !== skillId));
    } else {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-accent p-6 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={onBack}
            className="bg-white/20 text-white p-3 rounded-xl hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Volver"
          >
            <ArrowLeft className="w-8 h-8" strokeWidth={2.5} />
          </button>
          <div className="flex-1">
            <h1 className="text-white text-2xl">Cuéntanos sobre ti</h1>
            <p className="text-white/80 text-lg mt-1">
              Pregunta {currentQuestion + 1} de {questions.length}
            </p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="bg-white/20 rounded-full h-3 overflow-hidden">
          <div
            className="bg-white h-full transition-all duration-300 rounded-full"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Pregunta */}
        <div className="bg-card rounded-2xl p-6 shadow-lg border-2 border-accent">
          <div className="flex items-start gap-3 mb-2">
            <Heart className="w-8 h-8 text-accent flex-shrink-0 mt-1" strokeWidth={2} />
            <div>
              <h2 className="text-2xl mb-2">{currentQ.question}</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {currentQ.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Opciones */}
        <div className="grid grid-cols-1 gap-4">
          {currentQ.options.map((option) => {
            const isSelected = selectedSkills.includes(option.id);
            return (
              <button
                key={option.id}
                onClick={() => toggleSkill(option.id)}
                className={`${
                  isSelected
                    ? 'bg-primary text-white border-primary'
                    : 'bg-card text-foreground border-border'
                } border-2 rounded-2xl p-6 hover:shadow-lg transition-all active:scale-98 flex items-center gap-4`}
              >
                <div
                  className={`${
                    isSelected ? 'bg-white/20' : 'bg-muted'
                  } text-4xl w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0`}
                >
                  {option.icon}
                </div>
                <span className="text-xl flex-1 text-left">{option.label}</span>
                {isSelected && (
                  <CheckCircle2 className="w-8 h-8 flex-shrink-0" strokeWidth={2.5} />
                )}
              </button>
            );
          })}
        </div>

        {/* Botones de navegación */}
        <div className="flex gap-4 pt-4">
          {currentQuestion > 0 && (
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="flex-1 bg-muted text-foreground py-5 rounded-xl hover:bg-muted/80 transition-colors active:scale-98 text-xl border-2 border-border"
            >
              Anterior
            </button>
          )}
          <button
            onClick={handleNext}
            disabled={selectedSkills.length === 0}
            className={`flex-1 ${
              selectedSkills.length === 0
                ? 'bg-muted text-muted-foreground cursor-not-allowed'
                : 'bg-secondary text-white hover:bg-secondary/90'
            } py-5 rounded-xl transition-colors active:scale-98 text-xl`}
          >
            {isLastQuestion ? 'Finalizar' : 'Siguiente'}
          </button>
        </div>

        {/* Mensaje de ánimo */}
        <div className="bg-accent/10 border-2 border-accent rounded-2xl p-5 mt-6">
          <p className="text-center text-foreground text-lg leading-relaxed">
            No te preocupes, tus respuestas nos ayudan a encontrar el trabajo perfecto para ti
          </p>
        </div>
      </div>
    </div>
  );
}
