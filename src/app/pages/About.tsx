import { Link } from "react-router";
import {
  Target, Eye, Users, Award, Shield, Zap,
  CheckCircle, ArrowRight, TrendingUp, Globe, Clock, HeadphonesIcon
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

const milestones = [
  { year: "2011", event: "Fundación de TechPro Business con 3 empleados y un showroom en la ciudad capital." },
  { year: "2014", event: "Certificación como Distribuidor Autorizado Gold de Dell Technologies." },
  { year: "2017", event: "Expansión a nivel nacional con presencia en 8 ciudades principales." },
  { year: "2019", event: "Incorporación de HP, Lenovo y Cisco al portafolio de marcas representadas." },
  { year: "2022", event: "Lanzamiento del programa corporativo TechPro Enterprise con 500+ clientes activos." },
  { year: "2026", event: "Más de 10,000 empresas atendidas y reconocidos como el líder B2B del sector." },
];

const values = [
  { icon: <Target size={22} />, title: "Enfoque Empresarial", desc: "Soluciones 100% orientadas a productividad y rentabilidad corporativa." },
  { icon: <Shield size={22} />, title: "Confiabilidad", desc: "Solo ofrecemos marcas y equipos con trayectoria comprobada en entornos exigentes." },
  { icon: <Zap size={22} />, title: "Innovación Constante", desc: "Siempre a la vanguardia con las últimas tecnologías del mercado." },
  { icon: <HeadphonesIcon size={22} />, title: "Soporte Superior", desc: "Acompañamiento integral antes, durante y después de cada venta." },
  { icon: <Globe size={22} />, title: "Alcance Nacional", desc: "Red de distribución y soporte en todo el territorio." },
  { icon: <TrendingUp size={22} />, title: "Crecimiento Sostenible", desc: "Construimos relaciones de largo plazo basadas en resultados medibles." },
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
          <span className="inline-block px-4 py-2 rounded-full text-xs font-bold mb-6"
            style={{ backgroundColor: "rgba(0,194,255,0.2)", color: "#00C2FF" }}>
            NUESTRA HISTORIA
          </span>
          <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, color: "white", lineHeight: 1.1 }} className="mb-4">
            Más de 15 años siendo el socio<br />tecnológico de las empresas
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto" style={{ fontSize: "1.1rem", lineHeight: 1.7 }}>
            TechPro Business nació de la convicción de que cada empresa merece acceso a tecnología de nivel empresarial con el mejor soporte del mercado.
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
                TechPro Business es una empresa especializada en la comercialización y soporte de equipos de cómputo de gama empresarial. Somos distribuidores autorizados de las marcas líderes del mercado: Dell, HP, Lenovo, ASUS, Cisco y más.
              </p>
              <p>
                Desde nuestra fundación en 2011, hemos atendido a más de 10,000 empresas en toda la región, desde startups tecnológicas hasta corporaciones multinacionales con miles de empleados.
              </p>
              <p>
                Nuestro diferencial no es solo vender hardware; es comprender las necesidades específicas de cada cliente y proporcionar la solución tecnológica más eficiente para su operación.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { value: "10,000+", label: "Empresas Clientes" },
                { value: "50,000+", label: "Equipos Vendidos" },
                { value: "15+", label: "Años en el Mercado" },
                { value: "24/7", label: "Soporte Técnico" },
              ].map((s, i) => (
                <div key={i} className="p-4 rounded-xl border text-center"
                  style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
                  <p style={{ fontSize: "1.6rem", fontWeight: 800, color: "#000675" }}>{s.value}</p>
                  <p className="text-xs" style={{ color: "#818286" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1770777843445-2a1621b1201d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29tcGFueSUyMG9mZmljZSUyMHRlYW0lMjBtb2Rlcm58ZW58MXx8fHwxNzc2NjU4MzczfDA&ixlib=rb-4.1.0&q=80&w=800"
              alt="Equipo TechPro"
              className="rounded-2xl shadow-xl w-full object-cover"
              style={{ height: "400px" }}
            />
            {/* Floating glass card */}
            <div
              className="absolute -bottom-6 -left-6 p-5 rounded-2xl shadow-xl"
              style={{
                backgroundColor: "white",
                border: "1px solid #CDCED2",
                maxWidth: "220px",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Award size={18} style={{ color: "#000675" }} />
                <span className="text-sm font-semibold" style={{ color: "#000675" }}>Distribuidor Gold</span>
              </div>
              <p className="text-xs" style={{ color: "#818286" }}>Certificados por Dell, HP y Lenovo como distribuidores de nivel Gold</p>
            </div>
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
                Proporcionar a las empresas acceso a tecnología de cómputo de clase empresarial, respaldada por el mejor servicio de soporte y asesoría del mercado, impulsando la productividad y competitividad de nuestros clientes en el ecosistema digital actual.
              </p>
              <div className="mt-6 space-y-2">
                {["Asesoría tecnológica experta", "Equipos certificados por fabricante", "Soporte post-venta garantizado"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: "#30A4FF" }} />
                    <span className="text-sm" style={{ color: "#818286" }}>{item}</span>
                  </div>
                ))}
              </div>
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
                Ser reconocidos como la empresa líder en distribución y soporte de equipos de cómputo empresarial en la región, siendo el aliado tecnológico preferido por las empresas que buscan excelencia operativa y transformación digital.
              </p>
              <div className="mt-6 space-y-2">
                {["Liderazgo en el mercado B2B", "Expansión a 15 países", "Centro de excelencia tecnológica"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={14} style={{ color: "#00C2FF" }} />
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>{item}</span>
                  </div>
                ))}
              </div>
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

      {/* ─── TIMELINE ─── */}
      <section style={{ backgroundColor: "#FCFCFE", borderTop: "1px solid #CDCED2" }} className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold mb-2" style={{ color: "#30A4FF" }}>HISTORIA</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#000675" }}>
              Nuestro camino hasta aquí
            </h2>
          </div>
          <div className="relative">
            {/* Line */}
            <div className="absolute left-16 md:left-1/2 top-0 bottom-0 w-0.5"
              style={{ backgroundColor: "#D0D1D6", transform: "translateX(-50%)" }} />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className={`relative flex gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Year bubble */}
                  <div className="relative flex-shrink-0 md:w-1/2 flex md:justify-end items-start md:pr-8">
                    <div
                      className="inline-flex items-center px-4 py-1.5 rounded-full text-white text-sm font-bold"
                      style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
                    >
                      {m.year}
                    </div>
                  </div>
                  {/* Dot */}
                  <div
                    className="absolute left-16 md:left-1/2 w-3 h-3 rounded-full top-2 -translate-x-1/2 border-2 border-white"
                    style={{ backgroundColor: "#30A4FF" }}
                  />
                  {/* Content */}
                  <div className="flex-1 md:w-1/2 md:pl-8 pb-4">
                    <div className="p-4 rounded-xl border bg-white"
                      style={{ borderColor: "#D0D1D6" }}>
                      <p className="text-sm" style={{ color: "#707072", lineHeight: 1.7 }}>{m.event}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                    title: "Enfoque 100% B2B",
                    desc: "No somos una tienda retail genérica. Especializamos exclusivamente en clientes empresariales, entendiendo sus procesos, presupuestos y requisitos técnicos.",
                  },
                  {
                    title: "Ingenieros certificados por fabricante",
                    desc: "Nuestro equipo técnico está certificado por Dell, HP y Lenovo. Proporcionamos configuraciones optimizadas para cada caso de uso específico.",
                  },
                  {
                    title: "SLA con tiempos de respuesta garantizados",
                    desc: "Ofrecemos Acuerdos de Nivel de Servicio formales con tiempos de respuesta garantizados desde 4 horas para clientes Enterprise.",
                  },
                  {
                    title: "Financiamiento corporativo flexible",
                    desc: "Planes de financiamiento a 12, 24 y 36 meses para equipamiento completo, sin necesidad de desembolso inicial significativo.",
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
                { brand: "Dell", cert: "Distribuidor Gold", color: "#007DB8" },
                { brand: "HP", cert: "Partner Platinum", color: "#0096D6" },
                { brand: "Lenovo", cert: "Business Partner", color: "#E2231A" },
                { brand: "Cisco", cert: "Premier Partner", color: "#1BA0D7" },
                { brand: "ASUS", cert: "Reseller Certificado", color: "#B5C100" },
                { brand: "APC", cert: "Distribuidor Oficial", color: "#6ABF4B" },
              ].map((p, i) => (
                <div key={i} className="p-5 rounded-2xl border text-center transition-all hover:shadow-md"
                  style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
                  <p style={{ fontSize: "1.4rem", fontWeight: 800, color: "#000675" }}>{p.brand}</p>
                  <p className="text-xs mt-1" style={{ color: "#30A4FF" }}>{p.cert}</p>
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
