import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import {
  ShoppingCart, ChevronRight, Star, Shield, Truck,
  Clock, CheckCircle, Minus, Plus, ArrowLeft, Package, Share2
} from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"desc" | "specs" | "warranty">("specs");
  const [addedFeedback, setAddedFeedback] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h2 style={{ color: "#000675" }} className="font-bold">Producto no encontrado</h2>
        <Link to="/catalogo" className="text-sm" style={{ color: "#30A4FF" }}>Volver al catálogo</Link>
      </div>
    );
  }

  // Related products (same category, different product)
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  const categoryLabel: Record<string, string> = {
    workstation: "Workstations",
    laptop: "Laptops Empresariales",
    server: "Servidores",
    accessory: "Accesorios Profesionales",
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2500);
  };


  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div style={{ backgroundColor: "#FCFCFE", borderBottom: "1px solid #CDCED2" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-2 text-sm flex-wrap">
          <Link to="/" className="hover:underline" style={{ color: "#818286" }}>Inicio</Link>
          <ChevronRight size={14} style={{ color: "#CDCED2" }} />
          <Link to="/catalogo" className="hover:underline" style={{ color: "#818286" }}>Catálogo</Link>
          <ChevronRight size={14} style={{ color: "#CDCED2" }} />
          <Link to={`/catalogo?category=${product.category}`} className="hover:underline" style={{ color: "#818286" }}>
            {categoryLabel[product.category]}
          </Link>
          <ChevronRight size={14} style={{ color: "#CDCED2" }} />
          <span style={{ color: "#000675" }} className="font-medium truncate max-w-[200px]">{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 text-sm mb-6 hover:opacity-70 transition-opacity"
          style={{ color: "#818286" }}
        >
          <ArrowLeft size={16} /> Volver
        </button>

        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          {/* Left - Image */}
          <div>
            <div className="relative rounded-2xl overflow-hidden bg-gray-50" style={{ height: "420px" }}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div
                  className="absolute top-4 left-4 px-3 py-1.5 rounded-xl text-white text-xs font-bold"
                  style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
                >
                  {product.badge}
                </div>
              )}
              
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { icon: <Shield size={16} />, text: "Garantía oficial" },
                { icon: <Truck size={16} />, text: "Envío express" },
                { icon: <Clock size={16} />, text: "Soporte 24/7" },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl border text-center justify-center"
                  style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
                  <span style={{ color: "#30A4FF" }}>{b.icon}</span>
                  <span className="text-xs" style={{ color: "#818286" }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Info */}
          <div>
            {/* Brand + category */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{ backgroundColor: "#f0f4ff", color: "#000675" }}
              >
                {product.brand}
              </span>
              <span className="text-xs" style={{ color: "#818286" }}>
                {categoryLabel[product.category]}
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#000675", lineHeight: 1.2 }} className="mb-3">
              {product.name}
            </h1>

            

            <p className="mb-6 text-sm" style={{ color: "#707072", lineHeight: 1.8, whiteSpace: "pre-line" }}>
              {product.description}
            </p>

            {/* Quick specs */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              {Object.entries(product.specs).slice(0, 4).map(([key, val]) => (
                <div key={key} className="p-3 rounded-xl" style={{ backgroundColor: "#FCFCFE", border: "1px solid #D0D1D6" }}>
                  <p className="text-xs font-medium capitalize mb-0.5" style={{ color: "#30A4FF" }}>
                    {key === "processor" ? "Procesador" :
                      key === "ram" ? "Memoria RAM" :
                      key === "storage" ? "Almacenamiento" :
                      key === "gpu" ? "Tarjeta Gráfica" :
                      key === "display" ? "Pantalla" :
                      key === "os" ? "Sistema Operativo" :
                      key === "power" ? "Fuente de Poder" :
                      key}
                  </p>
                  <p className="text-xs" style={{ color: "#707072" }} title={val}>{val}</p>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="p-5 rounded-2xl border mb-5" style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
              <div className="flex items-baseline gap-3 mb-1">
                <span style={{ fontSize: "2rem", fontWeight: 800, color: "#000675" }}>
                  ${product.price.toLocaleString()}
                </span>
                
              </div>
              <p className="text-xs mb-4" style={{ color: "#818286" }}>
                Precio sin IVA. {product.inStock ? (
                  <span className="font-medium" style={{ color: "#30A4FF" }}>
                    ✓ {product.stockCount} unidades disponibles
                  </span>
                ) : (
                  <span className="text-red-500">Agotado</span>
                )}
              </p>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-4">
                <label className="text-sm font-medium" style={{ color: "#707072" }}>Cantidad:</label>
                <div className="flex items-center border rounded-xl overflow-hidden" style={{ borderColor: "#CDCED2" }}>
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus size={14} style={{ color: "#707072" }} />
                  </button>
                  <span className="w-12 text-center text-sm font-medium" style={{ color: "#000675" }}>
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(q => Math.min(product.stockCount || 10, q + 1))}
                    className="px-3 py-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus size={14} style={{ color: "#707072" }} />
                  </button>
                </div>
                <span className="text-xs" style={{ color: "#818286" }}>
                  Total: <strong style={{ color: "#000675" }}>${(product.price * quantity).toLocaleString()}</strong>
                </span>
              </div>

              {/* Add to cart */}
              <div className="flex gap-3">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold transition-all disabled:opacity-40"
                  style={{
                    background: addedFeedback
                      ? "linear-gradient(135deg, #00C2FF, #30A4FF)"
                      : "linear-gradient(135deg, #000675, #0044AA)",
                  }}
                >
                  {addedFeedback ? (
                    <>
                      <CheckCircle size={18} />
                      ¡Agregado al carrito!
                    </>
                  ) : (
                    <>
                      <ShoppingCart size={18} />
                      Agregar al carrito
                    </>
                  )}
                </button>
                <button
                  className="p-3 rounded-xl border transition-all hover:bg-gray-50"
                  style={{ borderColor: "#CDCED2" }}
                  title="Compartir"
                >
                  <Share2 size={18} style={{ color: "#707072" }} />
                </button>
              </div>

              <div className="mt-3 pt-3 border-t" style={{ borderColor: "#CDCED2" }}>
                <Link
                  to="/carrito"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 border"
                  style={{ borderColor: "#000675", color: "#000675" }}
                  onClick={() => { if (!addedFeedback) addToCart(product, quantity); }}
                >
                  Comprar ahora
                </Link>
              </div>
            </div>

            
          </div>
        </div>

        {/* Tabs: Description / Specs / Warranty */}
        <div className="mb-12">
          <div className="flex border-b mb-6" style={{ borderColor: "#D0D1D6" }}>
            {(["specs", "desc", "warranty"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-3 text-sm font-medium transition-all border-b-2 -mb-px"
                style={{
                  borderBottomColor: activeTab === tab ? "#000675" : "transparent",
                  color: activeTab === tab ? "#000675" : "#818286",
                }}
              >
                {tab === "specs" ? "Especificaciones Técnicas" :
                  tab === "desc" ? "Descripción Extendida" :
                  "Garantía y Soporte"}
              </button>
            ))}
          </div>

          {activeTab === "specs" && (
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, val]) => (
                <div key={key} className="flex gap-3 p-4 rounded-xl border" style={{ borderColor: "#D0D1D6" }}>
                  <CheckCircle size={16} style={{ color: "#30A4FF" }} className="shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold capitalize" style={{ color: "#000675" }}>
                      {key === "processor" ? "Procesador" :
                        key === "ram" ? "Memoria RAM" :
                        key === "storage" ? "Almacenamiento" :
                        key === "gpu" ? "Tarjeta Gráfica" :
                        key === "display" ? "Pantalla" :
                        key === "os" ? "Sistema Operativo" :
                        key === "power" ? "Fuente de Poder" :
                        key === "ports" ? "Puertos" :
                        key === "connectivity" ? "Conectividad" :
                        key === "battery" ? "Batería" :
                        key === "features" ? "Características" :
                        key === "management" ? "Gestión" :
                        key === "runtime" ? "Autonomía" :
                        key === "outlets" ? "Salidas" :
                        key === "throughput" ? "Throughput" :
                        key === "compatibility" ? "Compatibilidad" :
                        key}
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: "#707072" }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "desc" && (
            <div className="max-w-3xl">
              <p style={{ color: "#707072", lineHeight: 1.9, fontSize: "0.95rem", whiteSpace: "pre-line" }}>
                {product.longDescription}
              </p>
            </div>
          )}

          {activeTab === "warranty" && (
  <div className="max-w-3xl space-y-8" style={{ color: "#5a5a5c", fontSize: "0.99rem", lineHeight: 1.9 }}>

    {/* Intro */}
    <p>
      En <strong style={{ color: "#000675" }}>TechPro Builders</strong> respaldamos la continuidad de tu negocio.
      Diseñamos nuestras políticas bajo un principio de <strong>transparencia absoluta</strong> y{" "}
      <strong>tolerancia cero a fallos</strong>, para que sepas exactamente cómo protegemos tu inversión
      tecnológica sin sorpresas ni letras chiquitas.
    </p>

    {/* Cobertura y Plazos */}
    <div>
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
        Cobertura, Plazos y Canales de Soporte
      </h3>
      <hr className="mb-3" style={{ borderColor: "#E0E0E0" }} />
      <p className="mb-3">
        El periodo de protección y la vía de atención se asignan estratégicamente según la gama del equipo
        adquirido, aplicables a partir de la fecha de entrega:
      </p>
      <ul className="list-disc list-outside ml-5 space-y-3">
        <li>
          <strong>Gama Básica (Ofimática y administración):</strong>
          <ul className="list-[circle] list-outside ml-5 mt-1 space-y-1">
            <li><strong>6 meses</strong> de garantía en hardware.</li>
            <li>Soporte técnico virtual exclusivo a través de nuestro correo:{" "}
              <strong>techprobuilders_soporte@gmail.com</strong>.
            </li>
          </ul>
        </li>
        <li>
          <strong>Gama Media (Ingeniería de Campo, Redes y CCTV):</strong>
          <ul className="list-[circle] list-outside ml-5 mt-1 space-y-1">
            <li><strong>12 meses (1 año)</strong> de garantía en hardware.</li>
            <li>Soporte técnico virtual y telefónico a través de:{" "}
              <strong>techprobuilders_soporte@gmail.com</strong> y al teléfono: <strong>2227471104</strong>.
            </li>
            <li><strong>Incluye un (1) mantenimiento preventivo gratuito</strong> válido durante la vigencia de la póliza.</li>
          </ul>
        </li>
        <li>
          <strong>Gama Alta (Workstations, Diseño PCB y Prototipado):</strong>
          <ul className="list-[circle] list-outside ml-5 mt-1 space-y-1">
            <li><strong>18 meses (Año y medio)</strong> de garantía extendida en hardware.</li>
            <li>Soporte técnico prioritario presencial, virtual y telefónico a través de:{" "}
              <strong>techprobuilders_soporte@gmail.com</strong> y al teléfono: <strong>2227471104</strong>.
            </li>
            <li><strong>Incluye un (1) mantenimiento preventivo gratuito</strong> válido durante la vigencia de la póliza.</li>
          </ul>
        </li>
      </ul>
    </div>

    {/* Qué cubre */}
    <div>
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
      ¿Qué cubre la garantía?
      </h3>
      <hr className="mb-3" style={{ borderColor: "#E0E0E0" }} />
      <p className="mb-3">
        Nos hacemos responsables por cualquier falla de origen en los componentes físicos del equipo.
        La cobertura incluye de manera gratuita:
      </p>
      <ul className="list-disc list-outside ml-5 space-y-2">
        <li>
          <strong>Defectos de fabricación en hardware esencial:</strong> Procesador, tarjeta madre,
          memoria RAM, unidades de almacenamiento SSD, fuente de poder, tarjeta gráfica y sistemas de enfriamiento.
        </li>
        <li>
          <strong>Insumos y mano de obra:</strong> Todo proceso de reparación técnica o sustitución de piezas
          defectuosas por componentes nuevos se realizará <strong>sin costo alguno</strong> para tu empresa.
        </li>
      </ul>
    </div>

    {/* Exclusiones */}
    <div>
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
        ¿Qué anula la garantía? (Exclusiones)
      </h3>
      <hr className="mb-3" style={{ borderColor: "#E0E0E0" }} />
      <p className="mb-3">
        Para garantizar la precisión de nuestros diagnósticos y proteger la ingeniería de los equipos,
        la garantía quedará automáticamente sin efecto bajo las siguientes condiciones:
      </p>
      <ul className="list-disc list-outside ml-5 space-y-2">
        <li>
          <strong>Daño físico evidente:</strong> Golpes, fisuras, abolladuras, pantallas rotas o daños internos
          provocados por caídas, accidentes o malas prácticas de traslado.
        </li>
        <li>
          <strong>Factores del entorno:</strong> Daños por derrames de líquidos, exposición a humedad extrema,
          fuego, acumulación severa de polvo o introducción de objetos extraños.
        </li>
        <li>
          <strong>Irregularidades eléctricas:</strong> Componentes quemados por sobrecargas o cortocircuitos
          debido a la falta de un regulador de voltaje adecuado.
        </li>
        <li>
          <strong>Manipulación externa no autorizada:</strong> Violación, rotura o alteración de los sellos de
          seguridad de TechPro Builders, o si el equipo fue abierto y manipulado por personal ajeno a nuestra empresa.
        </li>
        <li>
          <strong>Software e información:</strong> La póliza cubre estrictamente el hardware. No nos hacemos
          responsables por configuraciones de sistemas operativos, daños por virus, malware o pérdida de datos.{" "}
          <em>El respaldo de la información es responsabilidad exclusiva del cliente.</em>
        </li>
      </ul>
    </div>

    {/* Procedimiento */}
    <div>
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
        Procedimiento de Reclamación y Diagnóstico
      </h3>
      <hr className="mb-3" style={{ borderColor: "#E0E0E0" }} />
      <p className="mb-3">
        Si alguno de tus equipos presenta un comportamiento inusual o una falla técnica, el proceso de
        atención es sumamente ágil:
      </p>
      <ol className="list-decimal list-outside ml-5 space-y-2">
        <li>
          <strong>Reporta el incidente:</strong> Ponte en contacto inmediato con nuestro equipo técnico a través
          del correo <strong>techprobuilders_soporte@gmail.com</strong> o llamando al{" "}
          <strong>2227471104 según la gama del equipo</strong>, adjuntando de forma obligatoria tu factura o nota de venta.
        </li>
        <li>
          <strong>Evaluación en taller:</strong> El equipo ingresará a nuestro laboratorio técnico, donde
          ingenieros informáticos realizarán un diagnóstico detallado en un plazo máximo de <strong>72 horas hábiles</strong>.
        </li>
        <li>
          <strong>Resolución:</strong> Si el análisis determina que la falla aplica dentro de la cobertura,
          procederemos con la reparación inmediata o el reemplazo del componente sin cargos adicionales.
        </li>
      </ol>
    </div>

    {/* Cláusula Gama Alta */}
    <div>
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
         Certificación de Calidad y Pruebas de Estrés <span style={{ color: "#000675" }}>(Pre-Entrega)</span>
      </h3>
      <hr className="mb-3" style={{ borderColor: "#E0E0E0" }} />
      <p className="mb-3">
        En TechPro Builders, la prevención es la clave fundamental de la confiabilidad operativa. 
        Ningún equipo sale de nuestro almacén sin antes superar <strong> rigurosas pruebas de estrés térmico y 
        de componentes</strong>, asegurando una tolerancia cero a fallos desde el primer encendido de la máquina 
        en tus instalaciones.
      </p>
      <div className="rounded-xl p-4 border-l-4 gap-2" style={{ backgroundColor: "#f0f4ff", borderColor: "#000675" }}>
        <p>
            Como parte de nuestro compromiso con la excelencia técnica,<strong> cada equipo entregado incluye un
            reporte digital en PDF enviado directamente al cliente</strong>. Este documento certifica detalladamente
            que la computadora superó con éxito las pruebas de estrés sintético aplicadas a los componentes
            más críticos del sistema: procesador (CPU), memoria RAM y estabilidad térmica bajo máxima carga
            de trabajo. De esta manera, garantizamos que tu hardware está 100% optimizado y listo para
            responder a las exigencias de tu empresa desde el primer segundo.
          
        </p>
      </div>
    </div>

    {/* Cláusula Gama Alta */}
    <div>
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
        Cláusula de Continuidad Operativa <span style={{ color: "#000675" }}>(Exclusivo Gama Alta)</span>
      </h3>
      <hr className="mb-3" style={{ borderColor: "#E0E0E0" }} />
      <p className="mb-3">
        Entendemos perfectamente que los departamentos de ingeniería de alto nivel, diseño de circuitos o
        desarrollo de software no pueden detener su producción.

      </p>
      <div className="rounded-xl p-4 border-l-4 gap-2" style={{ backgroundColor: "#f0f4ff", borderColor: "#000675" }}>
        <p>

          <strong>Compromiso de Respaldo TechPro:</strong> Si tu equipo es de <strong>Gama Alta</strong> y
          nuestro diagnóstico confirma que la reparación presencial de hardware demorará{" "}
          <strong>más de 24 horas hábiles</strong>, te entregaremos de inmediato un equipo de cómputo en
          préstamo con características de rendimiento equivalentes. Este servicio se formalizará bajo un esquema
          de comodato temporal, asegurando que la operación de tu empresa no pierda un solo día de productividad
          mientras dejamos tu herramienta original como nueva.
        </p>
      </div>
    </div>

    {/* Cláusula Despliegue */}
    <div>
      <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: "#1a1a1a" }}>
        Programa de Despliegue Corporativo Cero Esfuerzo <span style={{ color: "#000675" }}>()</span>
      </h3>
      <hr className="mb-3" style={{ borderColor: "#E0E0E0" }} />
      <p className="mb-3">
        En TechPro Builders sabemos que adquirir hardware empresarial es solo el primer paso. El
        verdadero reto para los departamentos de tecnología es la implementación, el desempaque y la
        configuración óptima de los equipos en la red local sin interrumpir la productividad de la empresa.

        Por ello, alineados con nuestro principio de Tolerancia Cero a Fallos, eliminamos la fricción técnica:
        En la compra de 5 o más equipos, nuestro equipo de ingenieros informáticos se encargará de realizar un despliegue corporativo
        completamente gratuito en tus instalaciones. Esto incluye:

       
      </p>
      <div className="rounded-xl p-4 border-l-4 gap-2" style={{ backgroundColor: "#f0f4ff", borderColor: "#000675" }}>
        <p>

           <ul className="list-disc list-outside ml-5 mt-3 space-y-2">
          <li><strong>Desempaque y configuración inicial:</strong> Nos encargamos de sacar los equipos de sus cajas, realizar las conexiones físicas necesarias y configurar el sistema operativo con las actualizaciones más recientes.</li>
          <li><strong>Integración a la red local:</strong> Conectamos cada equipo a tu red corporativa, asegurando que tengan acceso a internet, recursos compartidos y servidores internos sin que tu equipo de IT tenga que mover un dedo.</li>
          <li><strong>Instalación de software básico:</strong> Preinstalamos las aplicaciones esenciales para tu negocio (navegadores, suites ofimáticas, antivirus) y dejamos todo listo para que solo tengas que instalar tus programas específicos.</li>
          <li><strong>Pruebas de funcionamiento:</strong> Realizamos un chequeo final para garantizar que cada equipo esté funcionando perfectamente en tu entorno, con conectividad estable y sin errores de hardware o software.</li>
        </ul>
        </p>
      </div>

      <p className="mb-3">
        <ul className="list-disc list-outside ml-5 mt-3 space-y-2">
          <li><strong>Activación del  beneficio:</strong> Válido únicamente para órdenes de compra consolidadas que sumen 5 (cinco) o más computadoras de cualquier gama en una misma factura.</li>
          <li><strong>Límites del Alcance::</strong> El servicio se enfoca estrictamente en la puesta a punto y arranque inicial de las computadoras adquiridas. Modificaciones a la topología de red existente, configuraciones de servidores centrales, enlaces de domótica complejos o cableado estructurado físico de las oficinas se cotizarán como servicios de integración independientes.</li>
          
        </ul>
      </p>

    </div>

  </div>
)}
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <div className="flex items-end justify-between mb-6">
              <h2 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#000675" }}>Productos relacionados</h2>
              <Link to={`/catalogo?category=${product.category}`} className="text-sm" style={{ color: "#0044AA" }}>
                Ver más →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
