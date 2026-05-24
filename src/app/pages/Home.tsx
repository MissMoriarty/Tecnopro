import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ChevronRight, ShieldCheck, Truck, Headphones, Award,
  Monitor, Laptop, Server, Package, ArrowRight, Star, Zap, CheckCircle,
  Computer,
  KeyboardIcon,
  Building
} from "lucide-react";
import { products } from "../../data/products";
import { ProductCard } from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import { Tooltip } from "recharts";

const heroSlides = [
  {
    id: 1,
    tag: "Gama Básica",
    title: "Lenovo ThinkBook 14 G6 IRL",
    subtitle: "Optimiza tu administración sin comprometer tu presupuesto.",
    description: "La laptop ejecutiva que redefine la eficiencia en las áreas contables y operativas de tu empresa.",
    price: 16800,
    cta: "Ver Producto",
    productId: "ws-001",
    image: "https://i5.walmartimages.com/asr/2484aeb4-a07d-455e-8ee0-1607d68ace39.0c3f525fde2f3f73baa53c43483cbe85.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
    specs: ["Intel Core i5-1335U", "16 GB RAM DDR5", "512 GB SSD NVMe"],
  },
  {
    id: 2,
    tag: "Gama media",
    title: "Lenovo ThinkPad T14 Gen 4",
    subtitle: "Poder táctico e inmunidad a fallos en el sitio de trabajo.",
    description: "Ideal para ingenieros de campo que despliegan sistemas de CCTV, domótica e infraestructura de red.",
    price: 31270,
    cta: "Ver Producto",
    productId: "lt-001",
    image: "https://p4-ofp.static.pub//fes/cms/2025/04/18/s93adpqkap679puc4pyhohevfw8ldq438529.png?width=584&height=584",
    specs: ["AMD Ryzen 7 PRO 7840U", "32 GB DDR5", "1 TB SSD NVMe"],
  },
  {
    id: 3,
    tag: "Gama alta",
    title: "ThinkPad P14s Gen 5",
    subtitle: "La Workstation móvil definitiva ideal para arquitectos de hardware.",
    description: "Máxima precisión en diseño de PCBs y desarrollo de sistemas embebidos.",
    price: 41275,
    cta: "Ver Producto",
    productId: "sv-002",
    image: "https://tse4.mm.bing.net/th/id/OIP.EHT0yqfrHa5J5O7POPD6zgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    specs: ["Intel Core Ultra 7 155He", "32 GB RAM DDR5", "1 TB SSD NVMe"],
  },

];

const categoryCards = [
  {
    id: "workstation",
    label: "Gama básica",
    desc: "Rendimiento esencial",
    icon: <Laptop size={28} />,
    count: products.filter(p => p.category === "Gama básica").length,
    gradient: "linear-gradient(135deg, #000675 0%, #0044AA 100%)",
  },
  {
    id: "laptop",
    label: "Gama media",
    desc: "Equilibrio entre rendimiento y movilidad",
    icon: <Monitor size={28} />,
    count: products.filter(p => p.category === "Gama media").length,
    gradient: "linear-gradient(135deg, #0044AA 0%, #30A4FF 100%)",
  },
  {
    id: "server",
    label: "Gama alta",
    desc: "Potencia sin compromisos",
    icon: <Computer size={28} />,
    count: products.filter(p => p.category === "Gama alta").length,
    gradient: "linear-gradient(135deg, #30A4FF 0%, #00C2FF 100%)",
  },

];

const benefits = [
  { icon: <KeyboardIcon size={24} />, title: "Hardware 100% Validado", desc: "Sometemos cada laptop a rigurosas pruebas de estrés sintético de CPU, RAM y estabilidad térmica, entregándote un reporte que avala una tolerancia cero a fallos desde el primer encendido." },
  { icon: <Building size={24} />, title: "Instalación en Sitio Incluida", desc: "Nuestro equipo de ingenieros asiste presencialmente a tu empresa para realizar el desempaque, montaje, integración a la red local y mapeo de periféricos." },
  { icon: <CheckCircle size={24} />, title: "Garantía de Continuidad", desc: "Tu producción jamás se detiene. Si un equipo de Gama Alta requiere revisión en taller por más de 24 horas, te otorgamos de inmediato un equipo de respaldo equivalente en préstamo." },
  { icon: <Award size={24} />, title: "Consultoría a Nivel de Ingeniería", desc: "No somos ejecutivos de ventas, somos ingenieros informáticos. Analizamos tu flujo de trabajo y te equipamos con estaciones de trabajo con certificación ISV, garantizando estabilidad absoluta" },
];



export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useCart();
  const featuredProducts = products.slice(0, 3);
  const popularProducts = products.slice(0, 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden" style={{ minHeight: "580px" }}>
        {/* Background gradient */}
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{ background: "linear-gradient(135deg, #000675 0%, #0044AA 50%, #30A4FF 100%)" }}
        />

        {/* Decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00C2FF 0%, transparent 70%)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #30A4FF 0%, transparent 70%)", transform: "translate(-30%, 30%)" }} />

        <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
                style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "#00C2FF" }}>
                <Zap size={12} />
                {slide.tag}
              </div>

              <h1 className="mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "white", lineHeight: 1.1 }}>
                {slide.title}
              </h1>
              <h2 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", color: "rgba(255,255,255,0.75)", fontWeight: 500 }} className="mb-5">
                {slide.subtitle}
              </h2>

              <p className="text-white/70 mb-6 max-w-lg" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                {slide.description}
              </p>

              {/* Specs chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {slide.specs.map((spec, i) => (
                  <span key={i} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)" }}>
                    <CheckCircle size={11} style={{ color: "#00C2FF" }} />
                    {spec}
                  </span>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center gap-5 flex-wrap">
                <div>
                  <p className="text-white/60 text-xs mb-0.5">Desde</p>
                  <p style={{ fontSize: "2rem", fontWeight: 800, color: "white" }}>
                    ${slide.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    to={`/producto/${slide.productId}`}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:opacity-90 hover:gap-3"
                    style={{ background: "linear-gradient(135deg, #00C2FF, #30A4FF)", color: "white" }}
                  >
                    {slide.cta} <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/catalogo"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                  >
                    Ver Catálogo
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: hero image */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: "420px" }}>
                <img
                  key={slide.id}
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-opacity duration-700"
                />
                {/* Glass overlay card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl"
                  style={{ background: "rgba(0,0,0,0.45)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold text-sm">{slide.title}</p>
                      <p style={{ color: "#30A4FF" }} className="text-xs">{slide.specs[0]}</p>
                    </div>
                    <button
                      onClick={() => {
                        const prod = products.find(p => p.id === slide.productId);
                        if (prod) addToCart(prod);
                      }}
                      className="px-4 py-2 rounded-lg text-white text-xs font-semibold transition-all hover:opacity-90"
                      style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
                    >
                      + Carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === currentSlide ? "32px" : "8px",
                  backgroundColor: i === currentSlide ? "#00C2FF" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      

      {/* ─── CATEGORIES ─── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold mb-2" style={{ color: "#30A4FF" }}>EXPLORA POR CATEGORÍA</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#000675" }}>
            Soluciones para cada necesidad
          </h2>
          <p className="mt-2 max-w-xl mx-auto" style={{ color: "#818286" }}>
            Desde laptops para oficina hasta computadoras de alto desempeño. Tenemos el equipo perfecto para tu empresa.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryCards.map(cat => (
            <Link
              key={cat.id}
              to={`/catalogo?category=${cat.id}`}
              className="group relative overflow-hidden rounded-2xl p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ background: cat.gradient, minHeight: "180px" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(135deg, rgba(0,194,255,0.2) 0%, transparent 100%)" }} />
              <div className="relative">
                <div className="mb-4 opacity-90">{cat.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "1rem" }} className="mb-1">{cat.label}</h3>
                <p className="text-xs opacity-70 mb-4">{cat.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium opacity-80">{cat.count} productos</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── FEATURED PRODUCTS ─── */}
      <section style={{ backgroundColor: "#FCFCFE" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-sm font-semibold mb-2" style={{ color: "#30A4FF" }}>PRODUCTOS DESTACADOS</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#000675" }}>
                Los más solicitados
              </h2>
            </div>
            <Link
              to="/catalogo"
              className="flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-80"
              style={{ color: "#0044AA" }}
            >
              Ver todos <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROMO BANNER ─── */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div
          className="relative overflow-hidden rounded-2xl p-8 md:p-12"
          style={{ background: "linear-gradient(135deg, #000675 0%, #0044AA 60%, #30A4FF 100%)" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 opacity-20 rounded-full"
            style={{ background: "radial-gradient(circle, #00C2FF, transparent)", transform: "translate(20%, -20%)" }} />
          <div className="relative grid md:grid-cols-2 gap-6 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                style={{ backgroundColor: "rgba(0,194,255,0.2)", color: "#00C2FF" }}>
                OFERTA CORPORATIVA
              </span>
              <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "white" }} className="mb-3">
                Compra 5 equipos o más y obtén la instalación de tus equipos completamente gratis.
              </h2>
              <p className="text-white/70 mb-6">
                Nuestro equipo de ingenieros se trasladará directamente a su empresa para instalar y entregar el hardware listo para producir desde el primer segundo.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Link
                  to="/catalogo"
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #00C2FF, #30A4FF)" }}
                >
                  Ver Catálogo Corporativo
                </Link>
                <a
                  href="tel:+18005553324"
                  className="px-6 py-3 rounded-xl text-sm font-semibold transition-all"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
                >
                  Llamar Ahora
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <div className="grid grid-cols-2 gap-3">
                {["Despliegue físico", "Auditoría de conectividad en sitio", "Alineación de periféricos de red", "Entrega de certificados físicos"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}>
                    <CheckCircle size={14} style={{ color: "#00C2FF" }} />
                    <span className="text-white text-xs font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ALL PRODUCTS PREVIEW ─── */}
      <section className="max-w-7xl mx-auto px-6 py-8 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-sm font-semibold mb-2" style={{ color: "#30A4FF" }}>CATÁLOGO COMPLETO</p>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 700, color: "#000675" }}>
              Más productos para tu empresa
            </h2>
          </div>
          <Link to="/catalogo" className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#0044AA" }}>
            Ver todos <ChevronRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} compact />
          ))}
        </div>
      </section>

      {/* ─── BENEFITS ─── */}
      <section style={{ borderTop: "1px solid #CDCED2" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold mb-2" style={{ color: "#30A4FF" }}>POR QUÉ ELEGIRNOS</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#000675" }}>
              La experiencia TechPro Business
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="text-center p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1"
                style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "linear-gradient(135deg, #000675, #0044AA)", color: "white" }}
                >
                  {b.icon}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#000675", fontSize: "0.95rem" }}>{b.title}</h3>
                <p className="text-sm" style={{ color: "#818286", lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* ─── BRAND LOGOS ─── */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-semibold mb-8" style={{ color: "#A1A1A3" }}>
          DISTRIBUIDORES DE LAS PRINCIPALES MARCAS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {["Dell", "HP", "Lenovo", "ASUS"].map(brand => (
            <span key={brand} className="text-xl font-bold" style={{ color: "#CDCED2", letterSpacing: "-0.5px" }}>
              {brand}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
