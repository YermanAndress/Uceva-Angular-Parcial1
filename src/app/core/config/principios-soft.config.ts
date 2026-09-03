import { Concepto } from '../interfaces/concepto.interface';

/** Principios de arquitectura mostrados en la pagina principal. */
export const PRINCIPIOS_DATA: Concepto[] = [
  {
    id: 1,
    titulo: 'Modularidad',
    descripcion: 'Dividir el sistema en módulos pequeños con funciones claras y específicas. Cada módulo puede desarrollarse, evaluarse y modificarse de forma independiente.',
    beneficios: [
      'Facilita el trabajo en equipo',
      'Reduce la complejidad',
      'Permite reemplazar o mejorar módulos sin afectar todo el sistema'
    ],
    ejemploBueno: 'En una tienda online: módulos separados para Carrito, Inventario, Usuarios y Pagos. Cada uno tiene su lógica propia y puede cambiarse sin afectar a los demás.'
  },
  {
    id: 2,
    titulo: 'Cohesión (Alta)',
    descripcion: 'Mide qué tan relacionadas están las tareas dentro de un módulo. Con alta cohesión, cada módulo cumple una sola responsabilidad clara y bien enfocada.',
    beneficios: [
      'Facilita la comprensión del código',
      'Hace más simple el mantenimiento',
      'Cada módulo tiene un propósito único y claro'
    ],
    ejemploBueno: 'Módulo “Gestión de Productos” que solo crea, actualiza, busca y elimina productos.',
    ejemploMal: 'Un módulo que maneja productos y además envía correos y procesa pagos → difícil de mantener.'
  },
  {
    id: 3,
    titulo: 'Acoplamiento (Bajo)',
    descripcion: 'Mide la dependencia entre módulos. Con bajo acoplamiento, los cambios en un módulo no afectan a los demás.',
    beneficios: [
      'Permite modificar o reemplazar módulos sin afectar a otros',
      'Aumenta la flexibilidad del sistema',
      'Facilidad de evolución del sistema'
    ],
    ejemploBueno: 'La calculadora devuelve un número y la pantalla decide cómo mostrarlo (color, formato). Cambias la pantalla sin tocar la calculadora.',
    ejemploMal: 'La calculadora llama directamente a mostrar(resultado) → si cambia la interfaz, hay que modificar la calculadora.'
  },
  {
    id: 4,
    titulo: 'Separación de Responsabilidades',
    descripcion: 'Dividir el sistema según distintos tipos de responsabilidades (presentación, negocio, datos) sin mezclarlas.',
    beneficios: [
      'Reduce errores al evitar que un cambio en una parte afecte otra innecesariamente',
      'Facilita la organización en capas o componentes',
      'Mejora la legibilidad y escalabilidad del sistema'
    ],
    ejemploBueno: 'Aplicación organizada en capas: presentación (HTML/UI), negocio (reglas) y datos (acceso a BD). El botón “Comprar” solo llama una función; la lógica de compra está en otra capa.',
    ejemploMal: 'Un archivo HTML que contiene código SQL y reglas como “si el usuario no tiene saldo, no puede comprar” → difícil de mantener y probar.'
  }
];

// Datos para el Ejercicio 1 (clasificar módulos)
/** Funcionalidades agrupadas para el ejercicio de clasificacion. */
export const EJERCICIO_CLASIFICACION = [
  { funcionalidad: 'Registrar usuario', modulo: 'Usuarios' },
  { funcionalidad: 'Iniciar sesión', modulo: 'Usuarios' },
  { funcionalidad: 'Recuperar contraseña', modulo: 'Usuarios' },
  { funcionalidad: 'Editar perfil', modulo: 'Usuarios' },
  { funcionalidad: 'Agregar producto al carrito', modulo: 'Carrito' },
  { funcionalidad: 'Eliminar producto del carrito', modulo: 'Carrito' },
  { funcionalidad: 'Calcular total de compra', modulo: 'Carrito' },
  { funcionalidad: 'Aplicar descuentos', modulo: 'Carrito' },
  { funcionalidad: 'Procesar pago', modulo: 'Pagos' },
  { funcionalidad: 'Generar factura', modulo: 'Pagos' },
  { funcionalidad: 'Agregar producto al catálogo', modulo: 'Catálogo' },
  { funcionalidad: 'Actualizar precio', modulo: 'Catálogo' },
  { funcionalidad: 'Gestionar inventario', modulo: 'Inventario' },
  { funcionalidad: 'Enviar notificación por correo', modulo: 'Notificaciones' }
];

// Datos para el Ejercicio 2 (identificar problemas)
/** Situaciones usadas para identificar problemas arquitectonicos. */
export const EJERCICIO_PROBLEMAS = [
  { id: 1, situacion: 'El sistema completo está implementado en un solo archivo de 20,000 líneas que maneja usuarios, pagos, reportes y notificaciones.', tipo: 'Falta de Modularidad' },
  { id: 2, situacion: 'El módulo llamado “Gestión General” contiene lógica de autenticación, cálculos financieros, generación de reportes y acceso a base de datos.', tipo: 'Baja Cohesión' },
  { id: 3, situacion: 'Cuando se cambia el formato de exportación de reportes, también es necesario modificar el módulo de usuarios y el módulo de pagos.', tipo: 'Alto Acoplamiento' },
  { id: 4, situacion: 'Para poder probar el módulo de pedidos es obligatorio tener activos los módulos de inventario y facturación.', tipo: 'Alto Acoplamiento' },
  { id: 5, situacion: 'El módulo de autenticación también gestiona estadísticas de ventas y genera reportes administrativos.', tipo: 'Baja Cohesión' }
];