export type Service = {
  title: string;
  description: string;
  image: string;
  link?: string;
};

export const services: Service[] = [
  {
    title: "Provisión de Materiales para Construcción",
    image: "/images/servicios/provision_construccion.webp",
    description:
      "Gracias a nuestras minas y canteras propias, contamos con una amplia gama de materiales de construcción de alta calidad. Proveemos agregados, cemento natural y otros insumos esenciales para tu proyecto, asegurando un suministro continuo y a tiempo.",
  },
  {
    title: "Consultoría Integral de Proyectos",
    image: "/images/servicios/consultoria_integral.webp",
    description:
      "Te ofrecemos asesoramiento profesional en todas las etapas de tus proyectos de construcción, desde la planificación hasta la ejecución, garantizando soluciones personalizadas y de alta calidad que se ajusten a tus necesidades y presupuesto.",
  },
  {
    title: "Estudios Geotécnicos y Topográficos",
    image: "/images/servicios/topograficos.webp",
    description:
      "Realizamos estudios detallados de suelos, topografía y geotecnia para garantizar la viabilidad de tus proyectos de construcción, con análisis técnicos precisos que minimizan riesgos y maximizan la eficiencia.",
  },
  {
    title: "Gestión y Supervisión de Proyectos",
    image: "/images/servicios/gestion_proyectos.webp",
    description:
      "Nuestro equipo se encarga de la supervisión constante durante todas las fases del proyecto, coordinando con clientes, autoridades municipales y otras entidades, asegurando el cumplimiento de todos los requisitos técnicos y normativos.",
  },
  {
    title: "Ejecución de Obras Civiles",
    image: "/images/servicios/obras_civiles.webp",
    description:
      "Nos encargamos de la ejecución completa de obras civiles, tanto públicas como privadas, utilizando tecnología avanzada y equipos propios para asegurar que cada obra cumpla con los más altos estándares de calidad y se entregue en el tiempo previsto.",
  },
  {
    title: "Soluciones a Medida y Asesoría Técnica",
    image: "/images/servicios/asesoria_tecnica.webp",
    description:
      "Ya sea que enfrentes desafíos o busques oportunidades de crecimiento, te ayudamos a transformar tu empresa y llevarla al siguiente nivel con soluciones y asesoría técnica a la medida.",
  },
];
