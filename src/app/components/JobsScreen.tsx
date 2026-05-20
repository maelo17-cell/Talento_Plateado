import { ArrowLeft, Clock, MapPin, Building2, Star } from 'lucide-react';
import { useState } from 'react';
import { JobDetailModal } from './JobDetailModal';

interface JobsScreenProps {
  onBack: () => void;
}

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

export function JobsScreen({ onBack }: JobsScreenProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: 'flexible', label: 'Horario flexible' },
    { id: 'parttime', label: 'Medio tiempo' },
    { id: 'presencial', label: 'Presencial' },
    { id: 'inclusive', label: 'Empresas inclusivas' },
  ];

  const jobs: Job[] = [
    {
      id: 1,
      title: 'Recepcionista de edificio',
      company: 'Grupo Sol',
      location: 'Jesús María',
      type: 'Tiempo completo',
      salary: 'S/ 1,600',
      tags: ['Horario fijo', 'Empresa inclusiva'],
      description: 'Buscamos una persona responsable y amable para atender la recepción de un edificio residencial. El trabajo consiste en recibir visitas, controlar el ingreso de personas y paquetes, y brindar información a los residentes. Es un ambiente tranquilo y respetuoso.',
      requirements: [
        'Trato amable con las personas',
        'Responsabilidad y puntualidad',
        'Deseos de trabajar',
        'No se requiere experiencia previa',
        'Capacitación incluida'
      ],
      benefits: [
        'Sueldo fijo mensual',
        'Todos los beneficios de ley',
        'Ambiente de trabajo tranquilo',
        'Capacitación completa',
        'Estabilidad laboral'
      ],
      schedule: 'Lunes a sábado de 8:00 AM a 5:00 PM. Domingos libres.'
    },
    {
      id: 2,
      title: 'Atención al cliente',
      company: 'Plaza Vea',
      location: 'Ate',
      type: 'Medio tiempo',
      salary: 'S/ 1,500',
      tags: ['Medio tiempo', 'Empresa inclusiva'],
      description: 'Estamos buscando personas con buena actitud para atender a nuestros clientes en tienda. El trabajo incluye orientar a los clientes, responder preguntas sobre productos y mantener el orden en las áreas asignadas. Te enseñaremos todo lo necesario.',
      requirements: [
        'Trato cordial y amable',
        'Ganas de aprender',
        'Responsabilidad',
        'No necesitas experiencia',
        'Te capacitamos desde el primer día'
      ],
      benefits: [
        'Descuentos en productos',
        'Seguro médico',
        'Capacitación continua',
        'Buen ambiente laboral',
        'Oportunidad de crecimiento'
      ],
      schedule: 'Lunes a viernes de 9:00 AM a 2:00 PM. Horario fijo.'
    },
    {
      id: 3,
      title: 'Auxiliar de limpieza',
      company: 'Clean Perú',
      location: 'San Isidro',
      type: 'Tiempo completo',
      salary: 'S/ 1,450',
      tags: ['Estable', 'Sin experiencia'],
      description: 'Necesitamos personal para limpieza de oficinas. El trabajo es en horario de mañana y consiste en mantener limpias las áreas de trabajo, baños y espacios comunes. Trabajo estable y tranquilo.',
      requirements: [
        'Responsabilidad',
        'Puntualidad',
        'Deseos de trabajar',
        'No requiere experiencia previa',
        'Brindamos todos los materiales'
      ],
      benefits: [
        'Sueldo estable',
        'Beneficios de ley completos',
        'Materiales y uniformes incluidos',
        'Pago quincenal puntual',
        'Buen trato'
      ],
      schedule: 'Lunes a sábado de 6:00 AM a 1:00 PM. Domingos libres.'
    },
    {
      id: 4,
      title: 'Vigilante de tienda',
      company: 'Tottus',
      location: 'Santa Anita',
      type: 'Tiempo completo',
      salary: 'S/ 1,700',
      tags: ['Estable', 'Empresa inclusiva'],
      description: 'Buscamos vigilante para tienda por departamentos. El trabajo consiste en cuidar las instalaciones, orientar a los clientes y mantener la seguridad del local. Trabajo estable con todos los beneficios.',
      requirements: [
        'Responsabilidad y honestidad',
        'Trato respetuoso',
        'Buena presencia',
        'No se requiere experiencia',
        'Te damos capacitación completa'
      ],
      benefits: [
        'Sueldo fijo y puntual',
        'Seguro médico familiar',
        'Uniforme incluido',
        'Capacitación en seguridad',
        'Estabilidad laboral'
      ],
      schedule: 'Turnos rotativos. 6 días a la semana con un día de descanso.'
    },
    {
      id: 5,
      title: 'Apoyo administrativo',
      company: 'Estudio Jurídico Ramos',
      location: 'Pueblo Libre',
      type: 'Medio tiempo',
      salary: 'S/ 1,800',
      tags: ['Medio tiempo', 'Tranquilo'],
      description: 'Estudio jurídico busca apoyo para organizar documentos, archivar expedientes y atender llamadas telefónicas. Trabajo sencillo en ambiente profesional y tranquilo. Te enseñamos todo paso a paso.',
      requirements: [
        'Orden y organización',
        'Responsabilidad',
        'Saber usar celular básico',
        'Ganas de aprender',
        'No necesitas saber de leyes'
      ],
      benefits: [
        'Ambiente profesional',
        'Horario flexible',
        'Capacitación incluida',
        'Todos los beneficios',
        'Trabajo tranquilo'
      ],
      schedule: 'Lunes a viernes de 9:00 AM a 2:00 PM. Fines de semana libres.'
    },
    {
      id: 6,
      title: 'Orientador de clientes',
      company: 'Mall del Sur',
      location: 'Chorrillos',
      type: 'Medio tiempo',
      salary: 'S/ 1,600',
      tags: ['Horario flexible', 'Capacitación'],
      description: 'Buscamos personas amables para orientar a los visitantes del centro comercial. El trabajo consiste en dar información sobre tiendas, servicios y ubicaciones. Ambiente agradable y trato respetuoso.',
      requirements: [
        'Trato amable y cordial',
        'Buena comunicación',
        'Puntualidad',
        'No requiere experiencia',
        'Te capacitamos'
      ],
      benefits: [
        'Sueldo quincenal',
        'Uniforme incluido',
        'Capacitación completa',
        'Descuentos en tiendas',
        'Buen ambiente'
      ],
      schedule: 'Turnos de 5 horas. Horario a coordinar según disponibilidad.'
    },
    {
      id: 7,
      title: 'Operario de almacén ligero',
      company: 'Logística Perú',
      location: 'Los Olivos',
      type: 'Tiempo completo',
      salary: 'S/ 1,650',
      tags: ['Estable', 'Sin experiencia'],
      description: 'Necesitamos apoyo en almacén para organizar productos, etiquetar cajas y preparar pedidos. Trabajo liviano sin cargar peso excesivo. Ambiente de compañerismo y respeto.',
      requirements: [
        'Responsabilidad',
        'Orden',
        'Deseos de trabajar',
        'No se necesita experiencia',
        'Capacitación desde el inicio'
      ],
      benefits: [
        'Sueldo estable',
        'Seguro de salud',
        'Movilidad incluida',
        'Refrigerio diario',
        'Ambiente de trabajo positivo'
      ],
      schedule: 'Lunes a sábado de 8:00 AM a 4:00 PM. Domingos libres.'
    },
    {
      id: 8,
      title: 'Asistente de cafetería',
      company: 'Café Limeño',
      location: 'Miraflores',
      type: 'Medio tiempo',
      salary: 'S/ 1,500',
      tags: ['Medio tiempo', 'Propinas'],
      description: 'Cafetería acogedora busca asistente para atender mesas, tomar pedidos y mantener el local limpio. Trabajo sencillo en ambiente familiar. Recibes propinas adicionales.',
      requirements: [
        'Trato amable',
        'Ganas de aprender',
        'Puntualidad',
        'No necesitas experiencia previa',
        'Te enseñamos todo'
      ],
      benefits: [
        'Sueldo + propinas',
        'Desayuno o almuerzo incluido',
        'Capacitación completa',
        'Buen ambiente familiar',
        'Beneficios de ley'
      ],
      schedule: 'Lunes a viernes de 7:00 AM a 1:00 PM o de 1:00 PM a 6:00 PM.'
    },
    {
      id: 9,
      title: 'Cuidador de estacionamiento',
      company: 'Parking Lima',
      location: 'San Miguel',
      type: 'Tiempo completo',
      salary: 'S/ 1,550',
      tags: ['Estable', 'Horario fijo'],
      description: 'Buscamos persona responsable para cuidar estacionamiento de edificio comercial. El trabajo consiste en controlar el ingreso y salida de vehículos, y mantener el orden del estacionamiento.',
      requirements: [
        'Responsabilidad y honestidad',
        'Trato respetuoso',
        'Puntualidad',
        'No requiere experiencia',
        'Capacitación incluida'
      ],
      benefits: [
        'Sueldo fijo mensual',
        'Todos los beneficios de ley',
        'Uniforme incluido',
        'Trabajo estable',
        'Propinas adicionales'
      ],
      schedule: 'Lunes a sábado de 7:00 AM a 5:00 PM. Domingos libres.'
    },
    {
      id: 10,
      title: 'Ayudante de oficina',
      company: 'Corporación Andina',
      location: 'La Molina',
      type: 'Tiempo completo',
      salary: 'S/ 1,750',
      tags: ['Estable', 'Capacitación'],
      description: 'Empresa solicita ayudante para apoyar en tareas de oficina: organizar archivos, hacer fotocopias, llevar documentos y mantener el orden. Trabajo sencillo con capacitación completa.',
      requirements: [
        'Orden y organización',
        'Responsabilidad',
        'Puntualidad',
        'Ganas de aprender',
        'No se requiere experiencia'
      ],
      benefits: [
        'Sueldo competitivo',
        'Seguro médico',
        'Capacitación continua',
        'Movilidad',
        'Ambiente profesional y respetuoso'
      ],
      schedule: 'Lunes a viernes de 8:30 AM a 5:30 PM. Fines de semana libres.'
    },
    {
      id: 11,
      title: 'Auxiliar de ventas',
      company: 'Tienda Doña María',
      location: 'Breña',
      type: 'Medio tiempo',
      salary: 'S/ 1,450',
      tags: ['Medio tiempo', 'Cerca de casa'],
      description: 'Tienda de ropa busca persona para atender clientes, ordenar prendas y ayudar en caja. Ambiente familiar y tranquilo. Trabajo sencillo cerca de tu hogar.',
      requirements: [
        'Trato amable',
        'Responsabilidad',
        'Deseos de trabajar',
        'No necesitas experiencia',
        'Te enseñamos todo'
      ],
      benefits: [
        'Sueldo quincenal',
        'Descuentos en ropa',
        'Ambiente familiar',
        'Horario cómodo',
        'Beneficios de ley'
      ],
      schedule: 'Lunes a sábado de 9:00 AM a 2:00 PM.'
    },
    {
      id: 12,
      title: 'Conserje de colegio',
      company: 'Colegio San Martín',
      location: 'Surco',
      type: 'Tiempo completo',
      salary: 'S/ 1,650',
      tags: ['Estable', 'Vacaciones pagadas'],
      description: 'Colegio busca conserje para mantenimiento general de instalaciones, cuidado de áreas verdes y apoyo en actividades. Trabajo estable con vacaciones escolares.',
      requirements: [
        'Responsabilidad',
        'Trato respetuoso con niños',
        'Puntualidad',
        'No se requiere experiencia',
        'Ganas de colaborar'
      ],
      benefits: [
        'Sueldo mensual estable',
        'Vacaciones escolares pagadas',
        'Seguro médico',
        'Almuerzo incluido',
        'Ambiente educativo positivo'
      ],
      schedule: 'Lunes a viernes de 7:00 AM a 3:00 PM. Vacaciones en verano.'
    },
    {
      id: 13,
      title: 'Empacador de supermercado',
      company: 'Metro',
      location: 'Independencia',
      type: 'Medio tiempo',
      salary: 'S/ 1,400',
      tags: ['Medio tiempo', 'Propinas'],
      description: 'Supermercado necesita empacadores para ayudar a los clientes a empacar sus compras. Trabajo sencillo con propinas diarias. Excelente opción para complementar ingresos.',
      requirements: [
        'Trato cordial',
        'Ganas de trabajar',
        'Puntualidad',
        'No requiere experiencia',
        'Capacitación rápida'
      ],
      benefits: [
        'Sueldo + propinas diarias',
        'Descuentos en productos',
        'Horario flexible',
        'Ambiente dinámico',
        'Beneficios básicos'
      ],
      schedule: 'Turnos de 4 horas. Mañana o tarde según preferencia.'
    },
  ];

  const handleViewDetails = (job: Job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedJob(null), 300);
  };

  const handleApply = (job: Job) => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedJob(null), 300);
    // Aquí podrías navegar a una pantalla de postulación
    alert(`¡Genial! Tu postulación para ${job.title} ha sido enviada.`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary p-5 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3 mb-3">
          <button
            onClick={onBack}
            className="bg-white/20 text-white p-2 rounded-lg hover:bg-white/30 transition-colors active:scale-95"
            aria-label="Volver"
          >
            <ArrowLeft className="w-6 h-6" strokeWidth={2.5} />
          </button>
          <h1 className="text-white text-xl flex-1">Buscar empleo</h1>
        </div>

        {/* Filtros */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className="bg-white/90 text-primary px-4 py-2 rounded-lg whitespace-nowrap hover:bg-white transition-colors"
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de empleos */}
      <div className="p-4 space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="bg-card rounded-xl p-4 shadow-lg border-2 border-border hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <Building2 className="w-7 h-7 text-primary" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-lg mb-1">{job.title}</h3>
                <p className="text-muted-foreground">{job.company}</p>
              </div>
            </div>

            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2 text-foreground">
                <MapPin className="w-5 h-5 text-secondary" strokeWidth={2} />
                <span className="text-sm">{job.location}</span>
              </div>
              <div className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5 text-secondary" strokeWidth={2} />
                <span className="text-sm">{job.type}</span>
              </div>
              <div className="flex items-center gap-2 text-primary">
                <Star className="w-5 h-5" strokeWidth={2} fill="currentColor" />
                <span className="text-sm">{job.salary}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {job.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-secondary/20 text-secondary px-3 py-1 rounded-lg text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => handleViewDetails(job)}
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors active:scale-98"
            >
              Ver detalles
            </button>
          </div>
        ))}
      </div>

      {/* Modal de detalles */}
      <JobDetailModal
        job={selectedJob}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onApply={handleApply}
      />
    </div>
  );
}
