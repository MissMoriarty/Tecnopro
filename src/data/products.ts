export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "Gama básica" | "Gama media" | "Gama alta";
  price: number;
  image: string;
  badge?: string;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    gpu?: string;
    os?: string;
    connectivity?: string;
    [key: string]: string | undefined;
  };
  description: string;
  longDescription: string;
  inStock: boolean;
  stockCount?: number;
}

export const products: Product[] = [
  {
    id: "ws-001",
    name: "Laptop Lenovo ThinkBook 14 G6 IRL",
    brand: "Lenovo",
    category: "Gama básica",
    price: 16800,
    image: "https://i5.walmartimages.com/asr/2484aeb4-a07d-455e-8ee0-1607d68ace39.0c3f525fde2f3f73baa53c43483cbe85.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    badge: "Ofimática",
    specs: {
      processor: "Intel Core i5-1335U",
      ram: "RAM DDR5 16 GB",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "Intel® Iris® Xe Graphics (integrada)",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6, BT 5.3, RJ-45, 1× USB-C, 1 x SD Reader,3× USB-A, HDMI, Thuderbolt 4",
    },
    description: "El equilibrio perfecto entre diseño ejecutivo y rendimiento multitarea para gerencias y contabilidad avanzada.",
    longDescription:`Este equipo está diseñado con una arquitectura orientada a la máxima eficiencia administrativa. Su procesador Intel Core i5-1335U (10 núcleos y 12 hilos) distribuye inteligentemente las cargas de trabajo entre núcleos de rendimiento y eficiencia, evitando sobrecalentamientos durante jornadas continuas. La memoria RAM de 16 GB DDR5 es el diferenciador clave: al tener un mayor ancho de banda que la generación anterior, permite que los sistemas ERP (Enterprise Resource Planning) y las macros complejas de Excel se ejecuten sin latencia. Su almacenamiento SSD PCIe NVMe de 512 GB asegura tiempos de lectura/escritura ultrarrápidos para bases de datos locales. A nivel visual, los gráficos Intel Iris Xe integrados soportan múltiples monitores externos sin consumir recursos excesivos, mientras que su puerto Thunderbolt 4 garantiza transferencias de datos a 40 Gbps. 
    
Casos de uso ideales:
• Gerencias administrativas y jefaturas de departamento.
• Contadores que manejan múltiples portales fiscales.
• Personal de facturación masiva.`,

    inStock: true,
    stockCount: 30,
  },
  {
    id: "ws-002",
    name: "Laptop Dell LDC15255, 15.6\" 1920x1080 Full HD, AMD Ryzen 5 7530U",
    brand: "Dell",
    category: "Gama básica",
    price: 10076,
    image: "https://i.ebayimg.com/images/g/7PIAAeSw1URp4ta4/s-l1600.webp",
    badge: "Ofimática",
    specs: {
      processor: "AMD Ryzen 5 7530U",
      ram: "16 GB",
      storage: "512 GB SSD",
      gpu: "AMD Radeon Graphics (integrada)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6, BT 5.3, USB-C, HDMI (sin RJ-45)",
    },
    description: "La opción ideal en costo-beneficio para operaciones administrativas ininterrumpidas.",
    longDescription: `La solución definitiva para democratizar el rendimiento en las áreas operativas. El corazón de este equipo es el procesador AMD Ryzen 5 7530U, que al contar con 6 núcleos físicos y 12 hilos de procesamiento, maneja la multitarea (correo, paquetería de oficina, navegación web y plataformas CRM) con una holgura excepcional. Viene respaldada por 16 GB de memoria RAM, eliminando el uso de la memoria virtual (paginación en disco) que suele congelar equipos más económicos. El almacenamiento SSD de 512 GB proporciona un ecosistema rápido y seguro para el resguardo de documentos. Sus gráficos AMD Radeon integrados optimizan el consumo energético, permitiendo que la batería rinda toda la jornada. A nivel de red, cuenta con Wi-Fi 6, asegurando conexiones estables a la nube corporativa en oficinas con alta densidad de dispositivos.

Casos de uso ideales:
• Auxiliares contables y de recursos humanos.
• Personal de recepción y atención al cliente.
• Ejecutivos de ventas que realizan cotizaciones rápidas en plataformas web.`,
    inStock: true,
    stockCount: 30,
  },

{
    id: "ws-003",
    name: "HP Laptop 14-ep0252la",
    brand: "HP",
    category: "Gama básica",
    price: 11391,
    image: "https://th.bing.com/th/id/R.28552f9ae639d7d003c6b62f8b585c26?rik=L5DZbUP%2b0SQu7Q&riu=http%3a%2f%2fstore.hp.com%2fUKStore%2fHtml%2fMerch%2fImages%2fc05512731_1750x1285.jpg&ehk=v078V0Xw%2bTe2FE8UVA92%2fDUWAJ5XGaNggNTGNoYjq3g%3d&risl=&pid=ImgRaw&r=0",
    badge: "Ofimática",
    specs: {
      processor: "Intel Core i5-1334U",
      ram: "16 GB DDR4",
      storage: "512 GB SSD",
      gpu: "Intel Iris Xe Graphics (integrada)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6, BT 5.4, Jack 3.5 mm, USB-C, HDMI (sin RJ-45)",
    },
    description: "Eficiencia energética y movilidad corporativa para flujos de trabajo administrativos constantes.",
    longDescription: `Un equipo enfocado en la estandarización del hardware corporativo con un consumo energético mínimo. Está impulsado por un procesador Intel Core i5-1334U, diseñado bajo la arquitectura de bajo voltaje de Intel, lo que se traduce en una excelente duración de batería sin sacrificar la capacidad de respuesta en aplicaciones de ofimática. La memoria RAM de 16 GB DDR4 mantiene el sistema operativo Windows 11 fluido incluso con decenas de pestañas de navegador abiertas consultando catálogos de componentes electrónicos. Su almacenamiento de 512 GB SSD es perfecto para repositorios de documentos locales. Su puerto USB-C y conectividad Wi-Fi 6 facilitan la integración rápida en salas de juntas para proyecciones inalámbricas o transferencia rápida de reportes.

Casos de uso ideales:
• Personal de compras y adquisición de componentes.
• Asistentes de dirección.
• Perfiles administrativos que requieren movilidad constante dentro de las instalaciones de la empresa.`,
    inStock: true,
    stockCount: 30,
  },
{
    id: "ws-005",
    name: "Laptop ASUS ExpertBook B1 B1502 15.6\" 1920x1080 Full HD",
    brand: "ASUS",
    category: "Gama básica",
    price: 15680,
    image: "https://www.cyberpuerta.mx/img/product/XL/CP-ASUS-90NX06X1-M024R0-ROW-c9c0e5.jpg",
    badge: "Ofimática",
    specs: {
      processor: "Intel Core i5-1334U",
      ram: "16 GB DDR4",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "Intel Iris Xe Graphics (integrada)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6, BT 5.4, Jack 3.5 mm, USB-C, USB-A, HDMI 1.4, RJ-45",
    },
    description: "Durabilidad de grado empresarial y conectividad total para supervisores y operaciones de escritorio.",
    longDescription: `Construida bajo estándares de resistencia corporativa, esta máquina es una herramienta táctica para la administración robusta. Su procesador Intel Core i5-1334U ofrece un procesamiento ágil para la suite de Office, mientras que los 16 GB de memoria RAM DDR4 aseguran que el equipo no sufra degradación de rendimiento a final de mes durante los cierres operativos. El almacenamiento de 512 GB PCIe NVMe SSD encripta y protege la información sensible de la empresa. El punto más fuerte de su arquitectura es la conectividad física nativa: incluye un puerto RJ-45 Gigabit Ethernet, permitiendo conexiones directas a los servidores locales de la empresa para descargar bases de datos masivas o respaldos sin depender de la red inalámbrica, complementado con puertos USB-A, USB-C y HDMI.

Casos de uso ideales:
• Supervisores de almacén e inventarios de componentes electrónicos.
• Auditores contables que requieren extraer datos pesados directamente del servidor local (vía cable RJ-45).
• Personal administrativo en entornos industriales o bodegas.`,
    inStock: true,
    stockCount: 30,
  },
  

  {
    id: "lt-001",
    name: "Lenovo ThinkPad T14 Gen 4",
    brand: "Lenovo",
    category: "Gama media",
    price: 31270,
    image: "https://p4-ofp.static.pub//fes/cms/2025/04/18/s93adpqkap679puc4pyhohevfw8ldq438529.png?width=584&height=584",
    badge: "Desarrollo",
    specs: {
      processor: "AMD Ryzen 7 PRO 7840U",
      ram: "32 GB DDR5",
      storage: "1 TB PCIe NVMe SSD",
      gpu: "gráficos integrados AMD Radeon™ 780M",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, BT 5.3, RJ-45, HDMI 2.1, SmartCard Reader, 2 X USB-C, 2 x USB-A, Thunderbolt 4",
    },
    description: "La estación táctica definitiva para ingenieros de campo, con RAM masiva para diagnósticos y virtualización en sitio.",
    longDescription: `El estándar de oro para tus instaladores de CCTV y programadores de domótica. Con impresionantes 32 GB de RAM DDR5 y el procesador Ryzen 7 PRO, este equipo permite ejecutar máquinas virtuales y analizar tráfico de red en tiempo real sin interrupciones. Sus gráficos integrados Radeon 780M facilitan el monitoreo fluido de múltiples cámaras IP durante configuraciones en campo. Respaldada por el mejor teclado de la industria y funciones de seguridad a nivel de hardware, es una herramienta implacable.

Casos de uso ideales:
• Ingenieros de campo configurando grabadores NVR y cámaras de CCTV.
• Programadores de sistemas de seguridad y cerraduras electrónicas.
• Analistas de redes que realizan subnetting y diagnóstico de switches en sitio.`,
    inStock: true,
    stockCount: 30,
  },
  {
    id: "lt-002",
    name: "Laptop HP EliteBook 640 G11 de 14",
    brand: "HP",
    category: "Gama media",
    price: 30030,
    image: "https://tse4.mm.bing.net/th/id/OIP.UJPiCjsIpQC2TV_kGGMVGAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    badge: "Desarrollo",
    specs: {
      processor: "Intel Core Ultra 7 155U",
      ram: "16 GB DDR5",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "Intel Arc Graphics (integrada)",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, BT 5.3, RJ-45, 2× Thunderbolt 4, HDMI 2.1, MIL-STD-810H",
    },
    description: "Resistencia y conectividad inquebrantable para despliegues de redes y seguridad en terrenos exigentes.",
   longDescription: `Cuando tus técnicos se encuentran en una obra configurando paneles de control o cerraduras electrónicas, necesitan un equipo que no falle. Esta EliteBook ofrece certificación militar contra polvo y vibraciones. Su puerto RJ-45 nativo es vital para realizar subnetting y conectar switches físicos, mientras que el potente procesador Intel Core Ultra 7 asegura una autonomía prolongada y respuesta inmediata para correr herramientas de diagnóstico de red en cualquier entorno.

Casos de uso ideales:
• Técnicos instaladores de hardware de domótica en obras civiles o edificios en construcción.
• Equipos de soporte de infraestructura IT de primer nivel.
• Supervisores de obra electrónica.`,
    inStock: true,
    stockCount: 30,
  },
  {
    id: "lt-003",
    name: "Dell Latitude 5450",
    brand: "Dell",
    category: "Gama media",
    price: 32532,
    image: "https://laptopmedia.com/wp-content/uploads/2024/07/5-13.jpg",
    badge: "Desarrollo",
    specs: {
      processor: "Intel Core Ultra 7 155U",
      ram: "16 GB DDR5 (2× SO-DIMM)",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "Intel Arc Graphics (integrada)",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, 2× Thunderbolt 4, RJ-45, HDMI",
    },
    description: "El equipo ideal para supervisores de instalaciones y líderes de proyectos técnicos.",
    longDescription: `Diseñada para el coordinador de ingeniería que divide su tiempo entre la oficina base y las instalaciones del cliente. Sus 16 GB de RAM modulares y procesador Ultra 7 manejan sin esfuerzo software de gestión de proyectos y planos técnicos. Los puertos Thunderbolt 4 permiten una transición instantánea: de configurar dispositivos embebidos en el sitio, a conectarse a múltiples monitores en la oficina con un solo cable, agilizando la revisión de proyectos.

Casos de uso ideales:
• Coordinadores de proyectos de domótica e IoT.
• Desarrolladores de software y aplicaciones web para control de acceso.
• Líderes de cuadrilla de instalación de sistemas de seguridad.`,
    inStock: true,
    stockCount: 30,
  },

  {
    id: "lt-004",
    name: "Laptop Lenovo ThinkPad L14 Gen 5, 14 1920x1200",
    brand: "Lenovo",
    category: "Gama media",
    price: 28271,
    image: "https://www.cyberpuerta.mx/img/product/XL/CP-LENOVO-21L2000JLM-1.png",
    badge: "Desarrollo",
    specs: {
      processor: "Intel Core Ultra 5 125U",
      ram: "16 GB DDR5",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "Intel Arc Graphics (integrada)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6E, Thunderbolt 4, BT 5.4, RJ-45, HDMI, 1 x USB-C,2 x USB-A",
    },
    description: "La puerta de entrada ideal a la ingeniería de campo, optimizada con Inteligencia Artificial para máxima eficiencia.",
    longDescription: `La opción táctica inteligente para técnicos instaladores y soporte IT. Equipada con el procesador Intel Core Ultra 5 (que incluye una NPU para tareas asistidas por IA) y 16 GB de RAM de última generación, es perfecta para auditar redes y flashear firmwares de domótica maximizando la vida de la batería. Su chasis corporativo permite futuras actualizaciones de memoria, asegurando la protección de tu inversión a largo plazo y la productividad continua de tu equipo técnico.

Casos de uso ideales:
• Técnicos junior y especialistas en cableado estructurado UTP/Fibra.
• Auditorías de seguridad de redes inalámbricas en sitio.
• Mantenimiento preventivo de cerraduras y paneles electrónicos.`,
    inStock: true,
    stockCount: 30,
  },


  {
    id: "sv-001",
    name: "ThinkPad L16 Gen 2",
    brand: "Lenovo",
    category: "Gama alta",
    price: 52500,
    image:"https://tse1.mm.bing.net/th/id/OIP.h0-1dqXXvXxd_0PVrqYWwQHaEK?r=0&w=768&h=432&rs=1&p",
    badge: "Prototipado",
    specs: {
      processor: "AMD Ryzen 7 PRO 7840U",
      ram: "32 GB DDR5",
      storage: "1 TB PCIe NVMe SSD",
      gpu: "AMD Radeon™ 780M (integrada)",
      os: "Windows 11 Pro",
      connectivity: "2 x USB-C, 2 X USB-A, Thunderbolt 4, HDMI 2.1, RJ-45, SD card",
    },
    description: "El lienzo digital expansivo para el diseño de esquemáticos y arquitectura de circuitos impresos (PCB).",
    longDescription: `Para los diseñadores de hardware, el espacio visual es indispensable. Esta estación de trabajo ofrece una brillante pantalla de 16 pulgadas, ideal para trazar y auditar complejos diagramas de circuitos multicapa en software como Altium o KiCad. Impulsada por 32 GB de RAM y controladores gráficos AMD PRO con certificación ISV, garantiza absoluta precisión matemática en cada renderizado. Es el equilibrio perfecto entre gran formato visual, potencia de prototipado y seguridad corporativa.

Casos de uso ideales:
• Ingenieros de diseño de circuitos impresos (PCB) que requieren pantallas grandes para trazado manual de pistas.
• Programadores de microcontroladores y arquitectos de redes complejas.
• Virtualización de servidores de prueba (Linux/Windows Server) a nivel local.`,
    inStock: true,
    stockCount: 30,
  },
  {
    id: "sv-002",
    name: "ThinkPad P14s Gen 5",
    brand: "Lenovo",
    category: "Gama alta",
    price: 41275,
    image: "https://tse4.mm.bing.net/th/id/OIP.EHT0yqfrHa5J5O7POPD6zgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    badge: "Prototipado",
    specs: {
      processor: "Intel Core Ultra 7 155H",
      ram: "32 GB",
      storage: "1 TB SSD",
      gpu: "NVIDIA RTX 500",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, BT 5.3, 2× Thunderbolt, HDMI, RJ-45",
    },
    description:"Potencia extrema en un chasis ultraligero: la Workstation móvil para el ingenio que nunca se detiene.",
    longDescription: `Rompe el mito de que las Workstations deben ser pesadas. Este equipo ultradelgado integra una tarjeta gráfica profesional NVIDIA RTX 500 y 32 GB de RAM, dándole a tus ingenieros la capacidad de compilar código C# pesado, diseñar PCBs y realizar prototipados en 3D directamente desde el laboratorio o en visitas con el cliente. Su certificación ISV asegura que tu software de ingeniería industrial funcionará a la perfección y sin cierres inesperados.

Casos de uso ideales:
• Ingenieros de Investigación y Desarrollo (I+D) que viajan para realizar pruebas de concepto.
• Desarrolladores de firmware avanzado para microchips.
• Prototipado rápido de componentes en 3D en campo.`,
    inStock: true,
    stockCount: 30,
  },
  {
    id: "sv-003",
    name: "Laptop Dell Precision 3591 15.6\" 1920x1080 Full HD",
    brand: "Dell",
    category: "Gama alta",
    price: 74187,
    image: "https://laptopmedia.com/wp-content/uploads/2024/11/5-19-1536x864.jpg",
    badge: "Prototipado",
    specs: {
      processor: "Intel Core Ultra 7 165H",
      ram: "32 GB DDR5",
      storage: "1 TB PCIe NVMe SSD",
      gpu: "NVIDIA RTX 1000",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, BT 5.3, 2× Thunderbolt, HDMI, RJ-45",
    },
    description: "El motor industrial inagotable para simulaciones masivas y renderizado 3D de proyectos avanzados.",
    longDescription: `La joya de la corona para tus arquitectos de hardware e ingenieros de desarrollo senior. Equipada con un procesador Intel Core Ultra 7 de alto voltaje y una GPU NVIDIA RTX 1000 de clase profesional, esta máquina está calibrada para no cometer errores en simulaciones térmicas, eléctricas o de modelado 3D de carcasas de domótica. Con 32 GB de memoria de altísima velocidad, es el estándar definitivo para asegurar una innovación ininterrumpida en tu departamento de I+D.

Casos de uso ideales:
• Ingenieros Electrónicos Senior responsables de la arquitectura final de los microchips y PCBs.
• Simulación de estrés eléctrico y térmico de componentes electrónicos de grado industrial.
• Arquitectos de software backend para sistemas masivos de seguridad (CCTV/Accesos).`,
    inStock: true,
    stockCount: 30,
  },
    {
    id: "sv-004",
    name: "Laptop HP ZBook Power G11",
    brand: "HP",
    category: "Gama alta",
    price: 56750,
    image: "https://m.media-amazon.com/images/I/81YJFTgyAoL._AC_SX522_.jpg",
    badge: "Prototipado",
    specs: {
      processor: "Intel Core Ultra 7 155U",
      ram: "32 GB DDR5",
      storage: "1 TB SSD",
      gpu: "NVIDIA® RTX™ A3000",
      os: "Windows 11 Pro",
      connectivity: "1 USB Type-A con velocidad de señalización de 5 Gb/s (carga); 1 HDMI 2.1; 1 combinación de auriculares/micrófono; 1 conector de alimentación; 2 Thunderbolt™ 4 con USB Type-C® con velocidad de señalización de 40 Gbps (suministro de energía por USB, DisplayPort™ 2.1), RJ-45 (incluye adaptador)",
    },
    description: "Fuerza bruta gráfica y procesamiento de élite para modelado de domótica industrial y gemelos digitales.",
    longDescription: `Cuando el proyecto exige visualizar infraestructuras completas de CCTV en 3D o diseñar arquitecturas embebidas de máxima complejidad, la ZBook Power es la única respuesta. Su impresionante gráfica profesional NVIDIA® RTX™ A3000 transforma el renderizado CAD pesado en una tarea completamente fluida. Combinada con 32 GB de RAM y un TB de almacenamiento ultrarrápido, esta Workstation permite a tus desarrolladores cruzar el límite de la simulación sin comprometer jamás la estabilidad del sistema.

Casos de uso ideales:
• Renderizado fotorrealista 3D de proyectos de domótica para presentaciones directivas a clientes finales.
• Entrenamiento local de modelos de Inteligencia Artificial para análisis de video IP (reconocimiento de intrusos/vehículos en CCTV).
• Simulaciones electromagnéticas avanzadas de sistemas complejos de circuitos.`,
    inStock: true,
    stockCount: 30,
  },
  
  
];

export const categories = [
  { id: "Gama básica", label: "Gama básica", icon: "Laptop", count: products.filter(p => p.category === "Gama básica").length },
  { id: "Gama media", label: "Gama media", icon: "Monitor", count: products.filter(p => p.category === "Gama media").length },
  { id: "Gama alta", label: "Gama alta", icon: "Computer", count: products.filter(p => p.category === "Gama alta").length },
];

export const brands = ["Dell", "HP", "Lenovo", "ASUS"];
