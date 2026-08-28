import { ProductItem, ServiceItem, TestimonialItem, PathStep, CertificationItem } from './types';

export const WHATSAPP_PHONE = '593962669994';
export const WHATSAPP_DEFAULT_MSG = 'Hola Casa Kinti, me gustaría obtener más información sobre sus servicios y productos.';

export const PATH_STEPS: PathStep[] = [
  {
    number: '01',
    keyword: 'APRENDE',
    title: 'Conoce tu Esencia',
    description: 'Descubre el poder de la medicina ancestral y el diagnóstico psicopedagógico para comprender tu momento vital o el desarrollo de tu pequeño.',
    icon: 'BookOpen',
    accentColor: '#9B8FD9',
  },
  {
    number: '02',
    keyword: 'SANA',
    title: 'Terapias Personalizadas',
    description: 'Liberación de bloqueos emocionales y energéticos a través de limpias tradicionales, Flores de Bach y botánica medicinal andina.',
    icon: 'Sparkles',
    accentColor: '#6B7FD1',
  },
  {
    number: '03',
    keyword: 'EQUILIBRA',
    title: 'Armoniza Cuerpo y Mente',
    description: 'Integración de hábitos armónicos, amuletos con estudio radiestésico y pautas pedagógicas claras para el hogar y la familia.',
    icon: 'Scale',
    accentColor: '#9B8FD9',
  },
  {
    number: '04',
    keyword: 'FLORECE',
    title: 'Transformación Plena',
    description: 'Experimenta paz interior, vitalidad renovada y niños seguros, alegres y motivados en su proceso de aprendizaje y vida.',
    icon: 'Flower2',
    accentColor: '#6B7FD1',
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: 'Educadora Infantil Bilingüe',
    institution: 'Formación Superior Universitaria',
    icon: 'GraduationCap',
    highlight: 'Especialista en desarrollo infantil y estimulación bilingüe temprana',
  },
  {
    title: 'Máster en Problemas de Aprendizaje',
    institution: 'Postgrado Académico',
    icon: 'Brain',
    highlight: 'Diagnóstico psicopedagógico y adecuación curricular personalizada',
  },
  {
    title: 'Terapeuta en Flores de Bach y Herbolaria',
    institution: 'Certificación Terapéutica Holística',
    icon: 'Leaf',
    highlight: 'Formulación de elixires florales y botánica sagrada',
  },
  {
    title: 'Mujer Medicina Certificada',
    institution: 'Medicina Ancestral y Tradición Andina',
    icon: 'Sparkles',
    highlight: 'Limpias energéticas con péndulo, sahumerios y lectura de oráculos',
  },
];

export const PRODUCTS: ProductItem[] = [
  {
    id: 'pulseras-amuletos',
    name: 'Pulseras Amuletos Personalizadas',
    price: '$22.00',
    description: 'Pulseras personalizadas con estudio radiestésico GRATIS para saber cuál es la piedra o cristal que necesitas. Energía, protección e intención en cada diseño.',
    /* reemplazar con foto real: Pulseras de piedras naturales sobre fondo neutro con velas y amatistas */
    image: 'https://images.unsplash.com/photo-1611591475836-3914a4b4ee95?auto=format&fit=crop&w=800&q=80',
    badge: 'Estudio radiestésico GRATIS',
    category: 'Amuletos & Cristales',
    benefits: ['Estudio radiestésico incluido', 'Piedras naturales consagradas', 'Diseño a medida según tu energía'],
    popular: true,
  },
  {
    id: 'aceite-lavanda',
    name: 'Aceite Esencial de Lavanda',
    price: '$12.50',
    description: '100% natural, ideal para relajación, sueño reparador y limpieza energética del hogar.',
    /* reemplazar con foto real: Frasco de aceite esencial de lavanda con flores secas */
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    category: 'Aromaterapia',
    benefits: ['Destilación pura 100% orgánica', 'Alivia la ansiedad y el estrés', 'Ideal para difusor o baño ritual'],
  },
  {
    id: 'palo-santo',
    name: 'Incienso de Palo Santo (x6 varillas)',
    price: '$8.00',
    description: 'Madera sagrada andina para purificar espacios y elevar la energía del ambiente.',
    /* reemplazar con foto real: Varillas de palo santo atadas con hilo natural sobre plato de barro */
    image: 'https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80',
    category: 'Sahumerios & Limpieza',
    benefits: ['Madera recolectada de forma ética', 'Purificación de ambientes pesados', 'Aroma dulce y amaderado relajante'],
  },
  {
    id: 'sahumerio-siete-poderes',
    name: 'Sahumerio de Siete Poderes',
    price: '$6.50',
    description: 'Mezcla herbal ancestral para armonizar el hogar y atraer buena energía.',
    /* reemplazar con foto real: Atado de hierbas secas con pétalos de flores para sahumado */
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80',
    category: 'Sahumerios & Limpieza',
    benefits: ['7 hierbas medicinales andinas', 'Corte de negatividad y malas vibras', 'Atracción de armonía y abundancia'],
  },
  {
    id: 'kit-limpieza',
    name: 'Kit de Limpieza Energética',
    price: '$28.00',
    description: 'Incluye palo santo, sahumerio, cuarzo blanco y guía de uso ritual.',
    /* reemplazar con foto real: Caja artesanal con kit completo de limpia energética */
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
    badge: 'Kit Completo',
    category: 'Kits Rituales',
    benefits: ['Guía ritual paso a paso incluida', 'Cuarzo blanco cargado con luna llena', 'Ideal para inicio de año o mudanzas'],
    popular: true,
  },
  {
    id: 'cristales-sueltos',
    name: 'Piedras y Cristales Sueltos',
    price: 'desde $9.00 c/u',
    description: 'Cristales naturales seleccionados según su propiedad energética específica (cuarzo rosa, ojo de tigre, amatista, obsidiana).',
    /* reemplazar con foto real: Cuarzo rosa, amatista, ojo de tigre y obsidiana sobre mesa de madera */
    image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=800&q=80',
    category: 'Amuletos & Cristales',
    benefits: ['Amatista (Paz interior)', 'Cuarzo Rosa (Amor propio)', 'Obsidiana (Escudo protector)', 'Ojo de Tigre (Enfoque)'],
  },
];

export const SERVICES_ANCESTRAL: ServiceItem[] = [
  {
    id: 'limpias-ancestrales',
    title: 'Limpias y Medicina Ancestral',
    price: 'desde $25.00',
    description: 'Sesiones de limpieza energética con técnicas ancestrales para liberar bloqueos físicos, emocionales y energéticos. Diagnóstico con péndulo y hierbas sagradas.',
    category: 'ancestral',
    icon: 'Sparkles',
    badge: 'Más Solicitado',
    duration: '45 - 60 min',
    keyBenefits: ['Diagnóstico energético con péndulo/varillas', 'Descarga de energías densas y estrés', 'Alineación de centros energéticos (Chakras)'],
  },
  {
    id: 'flores-bach',
    title: 'Terapia con Flores de Bach',
    price: '$30.00',
    description: 'Tratamiento floral personalizado para gestionar emociones, ansiedad, miedos, insomnio y desequilibrios internos. Incluye fórmula personalizada de esencias.',
    category: 'ancestral',
    icon: 'Flower',
    duration: '45 min',
    keyBenefits: ['Entrevista terapéutica profunda', 'Frasco de elíxir personalizado incluido', 'Acompañamiento en el proceso emocional'],
  },
  {
    id: 'herbolaria-ancestral',
    title: 'Herbolaria Ancestral',
    price: '$20.00',
    description: 'Asesoría en el uso de plantas medicinales para el bienestar físico y espiritual. Recetas de infusiones, baños amargos/dulces y compresas.',
    category: 'ancestral',
    icon: 'Leaf',
    duration: '40 min',
    keyBenefits: ['Guía botánica personalizada', 'Tratamiento natural complementario', 'Baños de florecimiento y despojo'],
  },
  {
    id: 'tarot-terapeutico',
    title: 'Lectura de Tarot Terapéutico',
    price: '$15.00',
    promoPrice: '$25.00 Regular',
    description: 'Orientación espiritual clara, sin adivinar: enfocada en el autoconocimiento, la toma de decisiones conscientes y la sanación de patrones.',
    category: 'ancestral',
    icon: 'Eye',
    badge: 'Promoción $15',
    duration: '15 - 30 min',
    keyBenefits: ['Enfoque 100% terapéutico y evolutivo', 'Claridad ante encrucijadas personales', 'Preguntas abiertas y respuestas profundas'],
  },
];

export const SERVICES_EDUCACION: ServiceItem[] = [
  {
    id: 'asesoria-aprendizaje',
    title: 'Asesoría en Problemas de Aprendizaje',
    price: '$35.00',
    description: 'Evaluación y acompañamiento a padres y niños con dificultades de aprendizaje, déficit de atención o dislexia, basado en la formación de Máster de Johanna Proaño.',
    category: 'educacion',
    icon: 'Brain',
    badge: 'Especialidad Máster',
    duration: '60 min',
    keyBenefits: ['Estrategias adaptadas al ritmo del niño', 'Asesoría a padres y docentes', 'Plan de intervención psicopedagógico'],
  },
  {
    id: 'talleres-bilingues',
    title: 'Talleres de Educación Bilingüe Infantil',
    price: '$18.00',
    description: 'Talleres lúdicos en español e inglés para estimulación temprana, desarrollo del lenguaje y motricidad, dirigidos por educadora infantil certificada.',
    category: 'educacion',
    icon: 'Languages',
    duration: '50 min por sesión',
    keyBenefits: ['Inmersión lingüística natural y afectiva', 'Metodología lúdica con canciones y juegos', 'Grupos reducidos para atención cercana'],
  },
  {
    id: 'evaluacion-psicopedagogica',
    title: 'Evaluación Psicopedagógica Inicial',
    price: '$40.00',
    description: 'Diagnóstico integral para identificar el estilo de aprendizaje del niño, fortalezas cognitivas y diseñar un plan de acompañamiento personalizado.',
    category: 'educacion',
    icon: 'CheckSquare',
    badge: 'Recomendado para inicio',
    duration: '75 min',
    keyBenefits: ['Informe pedagógico detallado para padres', 'Detección temprana de necesidades especiales', 'Recomendaciones prácticas para el aula y hogar'],
  },
];

export const INCLUDED_EXPERIENCE_ITEMS = [
  'Diagnóstico energético y educativo inicial',
  'Plan personalizado de terapias o talleres adaptado a tu ritmo',
  'Seguimiento cercano con agenda flexible presencial o virtual',
  'Acceso a productos energéticos recomendados para ti',
  'Acompañamiento continuo vía WhatsApp durante todo tu proceso',
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'María F.',
    role: 'Cliente de Terapia Ancestral',
    text: 'Las limpias energéticas con Johanna me devolvieron la calma y la vitalidad que había perdido hace meses. El ambiente de Casa Kinti transmite una paz absoluta desde que cruzas la puerta.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    area: 'ancestral',
  },
  {
    id: 'test-2',
    name: 'Andrea S.',
    role: 'Paciente de Flores de Bach',
    text: 'Las Flores de Bach personalizadas me ayudaron a manejar mi ansiedad y el insomnio de una forma muy natural y respetuosa. La calidez y escucha de Johanna es incomparable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    area: 'flores',
  },
  {
    id: 'test-3',
    name: 'Carla P.',
    role: 'Mamá de Mateo (Asesoría en Aprendizaje)',
    text: 'La asesoría de Johanna fue clave para entender cómo aprende mi hijo. Pasamos de la frustración a verlo seguro y feliz yendo a la escuela todos los días. ¡Infinitas gracias!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80',
    area: 'educacion',
  },
];

export const CONTACT_INFO = {
  address: 'Av. Eloy Alfaro N32-15 y Av. Amazonas, Quito, Ecuador',
  hours: 'Lunes a Viernes 9:00 – 18:00 | Sábados 9:00 – 14:00 | Domingos cerrado',
  phone: '+593 96 266 9994',
  whatsappRaw: '593962669994',
  email: 'contacto@casakinti.com',
  tiktok: 'https://www.tiktok.com/@johapro3',
  instagram: 'https://www.instagram.com/casa_kinti_',
  facebook: 'https://www.facebook.com/casakinti',
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7901198544976!2d-78.4878!3d-0.1807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a7a67f1b2ef%3A0x7d94d3c333240e8a!2sAv.%20Eloy%20Alfaro%20%26%20Av.%20Amazonas%2C%20Quito%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec',
};
