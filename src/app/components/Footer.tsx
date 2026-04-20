import { Link } from "react-router";
import { Monitor, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Shield, Truck, HeadphonesIcon, Award } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#000675" }} className="text-white">
      {/* Benefits bar */}
      <div style={{ backgroundColor: "#0044AA" }} className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: <Truck size={22} />, title: "Envío Express", desc: "En 24-48 horas a todo el país" },
              { icon: <Shield size={22} />, title: "Garantía Extendida", desc: "Hasta 5 años de cobertura" },
              { icon: <HeadphonesIcon size={22} />, title: "Soporte 24/7", desc: "Asistencia técnica permanente" },
              { icon: <Award size={22} />, title: "Certificados ISV", desc: "Compatibilidad garantizada" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div style={{ color: "#00C2FF" }}>{item.icon}</div>
                <div>
                  <p className="font-semibold text-sm text-white">{item.title}</p>
                  <p className="text-xs text-white/60 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #30A4FF, #00C2FF)" }}
              >
                <Monitor size={18} className="text-white" />
              </div>
              <div>
                <span className="text-lg font-bold text-white leading-none">TechPro</span>
                <span style={{ color: "#30A4FF" }} className="text-lg font-bold leading-none">Business</span>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Especialistas en equipos de cómputo de gama empresarial. Tu socio tecnológico para impulsar la productividad de tu empresa.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={16} />, href: "#" },
                { icon: <Twitter size={16} />, href: "#" },
                { icon: <Linkedin size={16} />, href: "#" },
                { icon: <Youtube size={16} />, href: "#" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:opacity-80"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Productos</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Workstations", path: "/catalogo?category=workstation" },
                { label: "Laptops Empresariales", path: "/catalogo?category=laptop" },
                { label: "Servidores", path: "/catalogo?category=server" },
                { label: "Accesorios Profesionales", path: "/catalogo?category=accessory" },
                { label: "Ofertas Especiales", path: "/catalogo" },
              ].map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-white/60 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Sobre Nosotros", path: "/nosotros" },
                { label: "Nuestro Catálogo", path: "/catalogo" },
                { label: "Política de Garantía", path: "#" },
                { label: "Términos y Condiciones", path: "#" },
                { label: "Política de Privacidad", path: "#" },
              ].map((item, i) => (
                <li key={i}>
                  <Link to={item.path} className="text-white/60 text-sm hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} style={{ color: "#30A4FF" }} className="mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm">Av. Tecnología 2500, Piso 12<br />Ciudad Empresarial, CP 10100</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} style={{ color: "#30A4FF" }} className="shrink-0" />
                <a href="tel:+18005553324" className="text-white/60 text-sm hover:text-white transition-colors">
                  +1 (800) 555-TECH
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} style={{ color: "#30A4FF" }} className="shrink-0" />
                <a href="mailto:soporte@techpro.com" className="text-white/60 text-sm hover:text-white transition-colors">
                  soporte@techpro.com
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm font-medium text-white mb-2">Suscríbete a nuestro newsletter</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-3 py-2 rounded-lg text-sm outline-none text-gray-800"
                  style={{ backgroundColor: "rgba(255,255,255,0.9)" }}
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #30A4FF, #00C2FF)" }}
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/40 text-xs">© 2026 TechPro Business. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">Medios de pago aceptados:</span>
            <div className="flex gap-2">
              {["VISA", "MC", "AMEX", "PayPal"].map(brand => (
                <span
                  key={brand}
                  className="px-2 py-0.5 rounded text-xs font-bold"
                  style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
