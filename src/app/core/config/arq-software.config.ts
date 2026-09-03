import { ArqSoftwareTopic } from "../../modules/arq-software/interfaces/arq-software.interface";

/**
 * Listado de temas de arquitectura de software disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * los conceptos fundamentales de arquitectura de software,
 * utilizada para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {ArqSoftwareTopic[]}
 */
export const ARQ_SOFTWARE_TOPICS: ArqSoftwareTopic[] = [
    {
        id: 1,
        title: 'Fundamentos de la Arquitectura de Software',
        summary: 'Es el conjunto de decisiones estructurales que definen cómo un sistema está organizado y cómo sus componentes colaboran para cumplir objetivos funcionales y no funcionales. La arquitectura vive en las decisiones, no en los diagramas.',
        concepts: [
            'Impacta directamente en el desempeño del sistema, la velocidad de desarrollo y la calidad del producto',
            'Alinear el sistema con las necesidades del negocio',
            'Permitir que el software evolucione de manera flexible',
            'Asegurar los atributos de calidad como el ADN del sistema',
            'Servir como guía y crear un lenguaje común para el equipo',
            'Reducir riesgos y acelerar el desarrollo evitando deuda técnica'
        ]
    },
    {
        id: 2,
        title: 'Atributos de Calidad',
        summary: 'Son características del sistema que describen cómo funciona, no qué hace. Determinan la calidad y viabilidad del sistema.',
        concepts: [
            'Rendimiento (Performance): Capacidad de responder rápido y usar bien los recursos',
            'Escalabilidad: Capacidad de manejar más usuarios o carga sin fallar',
            'Escalabilidad Vertical (Scale Up): Aumentar la capacidad del mismo servidor',
            'Escalabilidad Horizontal (Scale Out): Agregar más servidores con balanceador de carga',
            'Disponibilidad: Tiempo en el que el sistema está operativo y accesible',
            'Seguridad: Protección de información y prevención de ataques',
            'Usabilidad: Facilidad con la que un usuario puede aprender y usar el sistema',
            'Mantenibilidad: Facilidad para modificar, corregir errores o agregar funcionalidades',
            'Interoperabilidad: Capacidad de integrarse con otros sistemas'
        ]
    },
    {
        id: 3,
        title: 'Arquitectura y el Negocio',
        summary: 'La arquitectura no existe por sí sola; es un medio para habilitar los objetivos del negocio.',
        concepts: [
            'Alineación Estratégica: La estrategia define hacia dónde evoluciona el producto, la arquitectura define cómo se hace posible',
            'Business Drivers: Crecimiento, velocidad de entrega, optimización de costos, experiencia del usuario',
            'SaaP (Software Tradicional): Instalado en el cliente, requiere estabilidad y facilidad de instalación',
            'SaaS (Software as a Service): Todo en la nube, requiere alta disponibilidad, seguridad y escalabilidad',
            'PaaS (Platform as a Service): Plataforma para desarrolladores, requiere confiabilidad y APIs claras'
        ]
    },
    {
        id: 4,
        title: 'El Rol del Arquitecto de Software',
        summary: 'Profesional responsable del diseño de sistemas de software que conecta las necesidades del negocio, la tecnología y el equipo de desarrollo.',
        concepts: [
            'Responsabilidades: Definir estructura, garantizar calidad, identificar riesgos, seleccionar tecnologías',
            'Habilidades: Comunicación efectiva, visión sistémica, negociación, liderazgo técnico',
            'Identificar el problema: Entender qué necesita el negocio antes de elegir tecnologías',
            'Generar alternativas técnicas: Evaluar opciones viables como Monolito vs. Microservicios',
            'Evaluar consecuencias: Analizar impacto en atributos de calidad',
            'Documentar: Registrar contexto, alternativas, decisión y justificación',
            'Validar con prototipos: Probar la arquitectura antes de construir todo el sistema',
            'Ajustar con retroalimentación: Adaptar la decisión al contexto y experiencia del equipo'
        ]
    }
];
