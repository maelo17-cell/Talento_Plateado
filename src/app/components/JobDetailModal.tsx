import { X, MapPin, Clock, Building2, Star, Briefcase, CheckCircle2, Gift, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  tags: string[];
  description?: string;
  requirements?: string[];
  benefits?: string[];
  schedule?: string;
}

interface JobDetailModalProps {
  job: Job | null;
  isOpen: boolean;
  onClose: () => void;
  onApply: (job: Job) => void;
}

export function JobDetailModal({ job, isOpen, onClose, onApply }: JobDetailModalProps) {
  if (!job) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay oscuro */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-card rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header con gradiente */}
              <div className="bg-gradient-to-br from-primary to-accent p-6 rounded-t-2xl relative">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors active:scale-95"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" strokeWidth={2.5} />
                </button>

                <div className="flex items-start gap-4 pr-12">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Building2 className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-white text-2xl mb-2">{job.title}</h2>
                    <p className="text-white/90 text-lg">{job.company}</p>
                  </div>
                </div>

                {/* Información rápida */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-white/90">
                    <MapPin className="w-5 h-5" strokeWidth={2} />
                    <span className="text-base">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-5 h-5" strokeWidth={2} />
                    <span className="text-base">{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white">
                    <Star className="w-5 h-5" strokeWidth={2} fill="currentColor" />
                    <span className="text-lg">{job.salary}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {job.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/20 text-white px-3 py-1 rounded-lg text-sm backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="p-6 space-y-6">
                {/* Descripción del trabajo */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-6 h-6 text-primary" strokeWidth={2} />
                    <h3 className="text-xl">Descripción del puesto</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {job.description || 'Buscamos una persona comprometida para formar parte de nuestro equipo. Este es un puesto ideal para quien valora el equilibrio entre vida personal y laboral, con un ambiente de trabajo respetuoso e inclusivo. Te brindamos toda la capacitación necesaria.'}
                  </p>
                </div>

                {/* Requisitos */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-6 h-6 text-secondary" strokeWidth={2} />
                    <h3 className="text-xl">Requisitos</h3>
                  </div>
                  <ul className="space-y-3">
                    {(job.requirements || [
                      'Responsabilidad y puntualidad',
                      'Trato amable con las personas',
                      'Ganas de aprender',
                      'No se requiere experiencia previa',
                      'Capacitación incluida'
                    ]).map((req, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-lg">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Beneficios */}
                <div className="bg-secondary/10 rounded-xl p-5 border-2 border-secondary/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Gift className="w-6 h-6 text-secondary" strokeWidth={2} />
                    <h3 className="text-xl">Beneficios</h3>
                  </div>
                  <ul className="space-y-3">
                    {(job.benefits || [
                      'Todos los beneficios de ley',
                      'Capacitación completa incluida',
                      'Ambiente laboral inclusivo y respetuoso',
                      'Pago puntual',
                      'Estabilidad laboral'
                    ]).map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-foreground">
                        <Gift className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Horario */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-6 h-6 text-accent" strokeWidth={2} />
                    <h3 className="text-xl">Horario laboral</h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {job.schedule || 'Lunes a viernes de 9:00 AM a 2:00 PM. Fines de semana libres. Horario flexible según disponibilidad.'}
                  </p>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-3 pt-4">
                  <button
                    onClick={() => onApply(job)}
                    className="flex-1 bg-primary text-white py-4 rounded-xl hover:bg-primary/90 transition-colors active:scale-98 shadow-lg text-lg"
                  >
                    Postular ahora
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 bg-muted text-foreground border-2 border-border py-4 rounded-xl hover:bg-muted/80 transition-colors active:scale-98 text-lg"
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
