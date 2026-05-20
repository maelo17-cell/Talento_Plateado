import { Smartphone, Mail, MessageSquare, BarChart3, Users } from 'lucide-react';

export const coursesData = [
  {
    id: 1,
    title: 'Uso básico de celular',
    icon: Smartphone,
    duration: '2 horas',
    level: 'Básico',
    description: 'Aprende a usar tu smartphone paso a paso',
    detailedDescription: 'Este curso está diseñado para personas que están empezando a usar un teléfono inteligente. Aprenderás las funciones básicas de manera sencilla y práctica. No necesitas experiencia previa, te guiaremos en cada paso.',
    color: 'bg-primary',
    modules: [
      { id: 1, title: 'Encender y apagar el celular', duration: '15 min', completed: false },
      { id: 2, title: 'Hacer y recibir llamadas', duration: '20 min', completed: false },
      { id: 3, title: 'Enviar mensajes de texto', duration: '25 min', completed: false },
      { id: 4, title: 'Tomar y ver fotos', duration: '30 min', completed: false },
      { id: 5, title: 'Ajustar volumen y brillo', duration: '15 min', completed: false },
      { id: 6, title: 'Conectarse a WiFi', duration: '15 min', completed: false },
    ]
  },
  {
    id: 2,
    title: 'WhatsApp para el trabajo',
    icon: MessageSquare,
    duration: '1.5 horas',
    level: 'Básico',
    description: 'Comunícate efectivamente con WhatsApp',
    detailedDescription: 'WhatsApp es fundamental para el trabajo moderno. En este curso aprenderás a usarlo de forma profesional para comunicarte con empleadores, compañeros y clientes. Todo explicado de manera clara y sencilla.',
    color: 'bg-secondary',
    modules: [
      { id: 1, title: 'Instalar y crear cuenta', duration: '15 min', completed: false },
      { id: 2, title: 'Enviar y leer mensajes', duration: '20 min', completed: false },
      { id: 3, title: 'Compartir fotos y documentos', duration: '20 min', completed: false },
      { id: 4, title: 'Hacer llamadas y videollamadas', duration: '15 min', completed: false },
      { id: 5, title: 'Usar grupos laborales', duration: '20 min', completed: false },
    ]
  },
  {
    id: 3,
    title: 'Correo electrónico',
    icon: Mail,
    duration: '1.5 horas',
    level: 'Básico',
    description: 'Envía y recibe correos profesionales',
    detailedDescription: 'El correo electrónico es esencial en el ámbito laboral. Aprenderás a crear tu cuenta, enviar correos profesionales, adjuntar archivos y organizar tu bandeja de entrada de manera eficiente.',
    color: 'bg-accent',
    modules: [
      { id: 1, title: 'Crear cuenta de correo', duration: '15 min', completed: false },
      { id: 2, title: 'Enviar tu primer correo', duration: '20 min', completed: false },
      { id: 3, title: 'Leer y responder correos', duration: '20 min', completed: false },
      { id: 4, title: 'Adjuntar archivos', duration: '20 min', completed: false },
      { id: 5, title: 'Organizar correos en carpetas', duration: '15 min', completed: false },
    ]
  },
  {
    id: 4,
    title: 'Atención al cliente',
    icon: Users,
    duration: '3 horas',
    level: 'Intermedio',
    description: 'Mejora tus habilidades de servicio',
    detailedDescription: 'Desarrolla habilidades profesionales para brindar excelente atención al cliente. Aprenderás técnicas de comunicación, manejo de situaciones difíciles y cómo dejar una buena impresión en cada interacción.',
    color: 'bg-secondary',
    modules: [
      { id: 1, title: 'Comunicación efectiva', duration: '35 min', completed: false },
      { id: 2, title: 'Escucha activa', duration: '30 min', completed: false },
      { id: 3, title: 'Resolver quejas con calma', duration: '40 min', completed: false },
      { id: 4, title: 'Lenguaje corporal positivo', duration: '30 min', completed: false },
      { id: 5, title: 'Mantener una actitud profesional', duration: '25 min', completed: false },
      { id: 6, title: 'Casos prácticos', duration: '20 min', completed: false },
    ]
  },
  {
    id: 5,
    title: 'Excel básico',
    icon: BarChart3,
    duration: '4 horas',
    level: 'Básico',
    description: 'Aprende lo esencial de Excel',
    detailedDescription: 'Excel es una herramienta muy solicitada en el mundo laboral. En este curso aprenderás las funciones básicas para crear tablas, hacer cálculos simples y organizar información de manera profesional.',
    color: 'bg-primary',
    modules: [
      { id: 1, title: 'Abrir Excel y crear un archivo', duration: '20 min', completed: false },
      { id: 2, title: 'Escribir y editar datos', duration: '30 min', completed: false },
      { id: 3, title: 'Crear tablas sencillas', duration: '40 min', completed: false },
      { id: 4, title: 'Sumar y restar números', duration: '35 min', completed: false },
      { id: 5, title: 'Guardar e imprimir', duration: '25 min', completed: false },
      { id: 6, title: 'Formato básico de celdas', duration: '30 min', completed: false },
      { id: 7, title: 'Práctica guiada', duration: '40 min', completed: false },
    ]
  },
];
