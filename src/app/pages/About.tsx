import { Link } from "react-router";
import {
  Target, Eye, Users, Award, Shield, Zap,
  CheckCircle, ArrowRight, TrendingUp, Globe, Clock, HeadphonesIcon,
  User,
  Handshake
} from "lucide-react";

const team = [
  {
    name: "Ricardo Olvera",
    role: "CEO & Fundador",
    desc: "15 años en la industria tecnológica empresarial. Ex-VP de Ventas en Dell Technologies.",
    image: "https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZSUyMHRlYW0lMjBtb2Rlcm58ZW58MXx8fHwxNzc2NjU4MzczfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Ana Patricia Ruiz",
    role: "CTO",
    desc: "Ingeniera en Sistemas con maestría en Arquitecturas Cloud. Certificada en ITIL v4 y AWS Solutions Architect.",
    image: "https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZSUyMHRlYW0lMjBtb2Rlcm58ZW58MXx8fHwxNzc2NjU4MzczfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
  {
    name: "Luis Antonio García",
    role: "Director Comercial",
    desc: "Especialista en ventas B2B con experiencia en Fortune 500. Desarrolla las estrategias de expansión corporativa.",
    image: "https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZSUyMHRlYW0lMjBtb2Rlcm58ZW58MXx8fHwxNzc2NjU4MzczfDA&ixlib=rb-4.1.0&q=80&w=400",
  },
];


const values = [
  { icon: <Eye size={22} />, title: "Transparencia", desc: "Claridad absoluta en cotizaciones y componentes; para que siempre sepas exactamente qué estás adquiriendo y por qué te conviene." },
  { icon: <User size={22} />, title: "Personalización", desc: "Seleccionamos equipos ideales para tus actividades, asegurando que cada componente potencie tus objetivos específicos." },
  { icon: <Zap size={22} />, title: "Expertiz técnica", desc: "Dominio de arquitectura de hardware aplicado para satisfacer necesidades tecnológicas con precisión y rigor de ingeniería." },
  { icon: <CheckCircle size={22} />, title: "Calidad", desc: "Distribuimos únicamente equipos de marcas reconocidas, con componentes de gama alta y pruebas de estrés para garantizar un rendimiento confiable y duradero." },
  { icon: <Shield size={22} />, title: "Seguridad", desc: "Brindamos soporte inmediato por ingenieros expertos, garantizando soluciones técnicas precisas para asegurar la continuidad operativa de tu empresa." },
  { icon: <Handshake size={22} />, title: "Colaboración", desc: "Colaboramos estrechamente con nuestros clientes, seleccionando tecnología que realmente sirve al cliente, no te vendemos sino que construimos juntos" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #000675 0%, #0044AA 60%, #30A4FF 100%)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 80% 50%, #00C2FF 0%, transparent 60%)" }} />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "white", lineHeight: 1.1 }} className="mb-4">
            El equipo perfecto para <br />construir tu éxito
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            TechPro Builders nació de la convicción de que cada empresa merece acceso a tecnología de nivel empresarial con el mejor soporte y personalización del mercado.
          </p>
        </div>
      </section>

      {/* ─── INTRO + IMAGE ─── */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold mb-3" style={{ color: "#30A4FF" }}>QUIÉNES SOMOS</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#000675" }} className="mb-5">
              Especialistas en equipos de cómputo empresarial
            </h2>
            <div className="space-y-4 text-base" style={{ color: "#707072", lineHeight: 1.8 }}>
              <p>
                TechPro Business es una empresa especializada en la comercialización y soporte de equipos de cómputo de gama empresarial. Somos distribuidores de las marcas líderes del mercado: Dell, HP, Lenovo, ASUS y más.
              </p>
              <p>
                Nuestro diferencial no es solo vender hardware; es comprender las necesidades específicas de cada cliente y proporcionar la solución tecnológica más eficiente para su operación.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://github.com/MissMoriarty/Tecnopro/blob/main/imagen_equipo.jpg?raw=true"
              alt="Equipo TechPro"
              className="rounded-2xl shadow-xl w-full object-cover"
              style={{ height: "400px" }}
            />
            
          </div>
        </div>
      </section>

      {/* ─── MISSION / VISION ─── */}
      <section style={{ backgroundColor: "#FCFCFE", borderTop: "1px solid #CDCED2", borderBottom: "1px solid #CDCED2" }} className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="p-8 rounded-2xl border relative overflow-hidden"
              style={{ borderColor: "#D0D1D6", backgroundColor: "white" }}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full"
                style={{ background: "#000675", transform: "translate(30%, -30%)" }} />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-white"
                style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
              >
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#000675" }} className="mb-4">Nuestra Misión</h3>
              <p style={{ color: "#707072", lineHeight: 1.8 }}>
                Ser el socio tecnológico de confianza para el sector empresarial, construyendo cimientos tecnológicos sólidos y personalizados que maximizan el rendimiento y la innovación, asegurando que cada inversión en hardware impulse el éxito del negocio.
              </p>
              
            </div>

            {/* Visión */}
            <div className="p-8 rounded-2xl relative overflow-hidden text-white"
              style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}>
              <div className="absolute top-0 right-0 w-32 h-32 opacity-10 rounded-full"
                style={{ background: "#00C2FF", transform: "translate(30%, -30%)" }} />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
              >
                <Eye size={26} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700 }} className="mb-4">Nuestra Visión</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.8 }}>
                Liderar el sector de soluciones de cómputo corporativo cimentando el éxito de nuestros clientes sobre la calidad, seguridad y expertiz técnica, operando siempre bajo una transparencia que inspira confianza total.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold mb-2" style={{ color: "#30A4FF" }}>NUESTROS VALORES</p>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#000675" }}>
            Los principios que nos guían
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div key={i} className="p-6 rounded-2xl border transition-all hover:shadow-lg hover:-translate-y-1"
              style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 text-white"
                style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
              >
                {v.icon}
              </div>
              <h4 className="font-semibold mb-2" style={{ color: "#000675", fontSize: "0.95rem" }}>{v.title}</h4>
              <p className="text-sm" style={{ color: "#818286", lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      

      {/* ─── DIFFERENTIATORS ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: "#30A4FF" }}>POR QUÉ ELEGIRNOS</p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#000675" }} className="mb-6">
                Nuestros diferenciadores empresariales
              </h2>
              <div className="space-y-5">
                {[
                  {
                    title: "Transparencia absoluta en cada venta",
                    desc: "Procuramos explicar el por qué detrás de cada componente, siendo la empresa que informa al cliente y genera una confianza invaluable.",
                  },
                  {
                    title: "Tolerancia cero a fallos",
                    desc: "Entendemos que un equipo detenido es dinero que la empresa pierde. El valor aquí es la confiabilidad inquebrantable de los componentes de nuestros equipos.",
                  },
                  {
                    title: "Consultoría a nivel de ingeniería",
                    desc: "No somos ejecutivos de ventas, somos un equipo de ingenieros informáticos con la capacidad de entender la arquitectura de las computadoras a un nivel profundo, y saber exactamente cómo cubir las necesidades específicas del cliente.",


                  },
                ].map((d, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-white text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1" style={{ color: "#000675", fontSize: "0.95rem" }}>{d.title}</h4>
                      <p className="text-sm" style={{ color: "#818286", lineHeight: 1.6 }}>{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Partner logos grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { brand: "Dell", image: "https://images.seeklogo.com/logo-png/26/2/lenovo-logo-png_seeklogo-267847.png" },
                { brand: "HP",  color: "#0096D6" },
                { brand: "Lenovo",  color: "#E2231A" },
                { brand: "ASUS",  color: "#B5C100" },
              ].map((p, i) => (
                <div key={i} className="p-5 rounded-2xl border text-center transition-all hover:shadow-md"
                  style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
                  <p style={{ fontSize: "1.4rem", fontWeight: 800, color: "#000675" }}>{p.brand}</p>
                  <p className="text-xs mt-1" style={{ color: "#30A4FF" }}></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #000675 0%, #0044AA 60%, #30A4FF 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "white" }} className="mb-4">
            ¿Listo para impulsar tu empresa con la mejor tecnología?
          </h2>
          <p className="text-white/70 mb-8">
            Nuestro equipo de asesores está disponible para diseñar una solución tecnológica a la medida de tu empresa.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/catalogo"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #00C2FF, #30A4FF)" }}
            >
              Ver Catálogo <ArrowRight size={16} />
            </Link>
            <a
              href="tel:+18005553324"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "white", border: "1px solid rgba(255,255,255,0.3)" }}
            >
              Contactar Asesor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
