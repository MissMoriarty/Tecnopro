import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { ShoppingCart, Menu, X, Monitor, ChevronDown, Search, Phone } from "lucide-react";
import { useCart } from "../context/CartContext";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Inicio", path: "/" },
    { label: "Catálogo", path: "/catalogo" },
    { label: "Nosotros", path: "/nosotros" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalogo?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Top bar */}
      <div style={{ backgroundColor: "#000675" }} className="text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone size={13} />
              <span>+1 (800) 555-TECH</span>
            </span>
            <span className="opacity-70">|</span>
            <span className="opacity-90">soporte@techpro.com</span>
          </div>
          <div className="flex items-center gap-6 opacity-90">
            <span>Envío gratis en pedidos +$500</span>
            <span className="opacity-70">|</span>
            <span>Soporte 24/7</span>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
              >
                <Monitor size={18} className="text-white" />
              </div>
              <div>
                <span style={{ color: "#000675" }} className="text-lg font-bold tracking-tight leading-none">
                  TechPro
                </span>
                <span style={{ color: "#30A4FF" }} className="text-lg font-bold tracking-tight leading-none">
                  Business
                </span>
                <div style={{ color: "#818286" }} className="text-xs leading-none mt-0.5">
                  Equipos Empresariales
                </div>
              </div>
            </Link>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    color: location.pathname === link.path ? "#000675" : "#707072",
                    backgroundColor: location.pathname === link.path ? "#f0f4ff" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}

              {/* Dropdown Categorías */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{ color: "#707072" }}
                >
                  Categorías <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {[
                    { label: "Workstations", path: "/catalogo?category=workstation" },
                    { label: "Laptops Empresariales", path: "/catalogo?category=laptop" },
                    { label: "Servidores", path: "/catalogo?category=server" },
                    { label: "Accesorios Profesionales", path: "/catalogo?category=accessory" },
                  ].map(item => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 first:rounded-t-xl last:rounded-b-xl transition-colors"
                      style={{ color: "#707072" }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      autoFocus
                      type="text"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      placeholder="Buscar productos..."
                      className="w-56 px-4 py-2 rounded-lg border text-sm outline-none"
                      style={{ borderColor: "#30A4FF", color: "#000675" }}
                    />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="ml-1 p-2 rounded-lg hover:bg-gray-100"
                    >
                      <X size={16} style={{ color: "#707072" }} />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <Search size={20} style={{ color: "#707072" }} />
                  </button>
                )}
              </div>

              {/* Cart */}
              <Link
                to="/carrito"
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ShoppingCart size={20} style={{ color: "#707072" }} />
                {totalItems > 0 && (
                  <span
                    className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center font-bold"
                    style={{ backgroundColor: "#00C2FF" }}
                  >
                    {totalItems > 9 ? "9+" : totalItems}
                  </span>
                )}
              </Link>

              {/* CTA */}
              <Link
                to="/catalogo"
                className="hidden md:flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-medium transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
              >
                Ver Catálogo
              </Link>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="max-w-7xl mx-auto px-6 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-sm font-medium"
                  style={{
                    color: location.pathname === link.path ? "#000675" : "#707072",
                    backgroundColor: location.pathname === link.path ? "#f0f4ff" : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">Categorías</p>
                {[
                  { label: "Workstations", path: "/catalogo?category=workstation" },
                  { label: "Laptops Empresariales", path: "/catalogo?category=laptop" },
                  { label: "Servidores", path: "/catalogo?category=server" },
                  { label: "Accesorios Profesionales", path: "/catalogo?category=accessory" },
                ].map(item => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-sm rounded-lg"
                    style={{ color: "#707072" }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
