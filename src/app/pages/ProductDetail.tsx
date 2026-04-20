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

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

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
              {discount && (
                <div
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-xl text-white text-xs font-bold"
                  style={{ backgroundColor: "#00C2FF" }}
                >
                  -{discount}% OFF
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

            {/* Rating */}
            <div className="flex items-center gap-3 mb-5">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    fill={i < Math.floor(product.rating) ? "#30A4FF" : "transparent"}
                    style={{ color: i < Math.floor(product.rating) ? "#30A4FF" : "#CDCED2" }}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold" style={{ color: "#000675" }}>{product.rating}</span>
              <span className="text-sm" style={{ color: "#818286" }}>({product.reviews} reseñas)</span>
            </div>

            <p className="mb-6 text-sm" style={{ color: "#707072", lineHeight: 1.8 }}>
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
                {product.originalPrice && (
                  <span className="text-base line-through" style={{ color: "#A1A1A3" }}>
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                {discount && (
                  <span className="px-2 py-0.5 rounded-lg text-xs font-bold text-white" style={{ backgroundColor: "#00C2FF" }}>
                    Ahorras ${(product.originalPrice! - product.price).toLocaleString()}
                  </span>
                )}
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

            {/* Corporate info */}
            <div className="flex items-start gap-3 p-4 rounded-xl" style={{ backgroundColor: "#f0f4ff" }}>
              <Package size={18} style={{ color: "#000675" }} className="shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold" style={{ color: "#000675" }}>¿Necesitas 5 o más unidades?</p>
                <p className="text-xs mt-0.5" style={{ color: "#818286" }}>
                  Obtén hasta 20% de descuento corporativo.{" "}
                  <a href="tel:+18005553324" style={{ color: "#0044AA" }} className="underline">Llama al +1 (800) 555-TECH</a>
                </p>
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
              <p style={{ color: "#707072", lineHeight: 1.9, fontSize: "0.95rem" }}>
                {product.longDescription}
              </p>
            </div>
          )}

          {activeTab === "warranty" && (
            <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
              {[
                {
                  icon: <Shield size={20} />,
                  title: "Garantía del Fabricante",
                  desc: product.specs.warranty || "1 año de garantía limitada",
                },
                {
                  icon: <Clock size={20} />,
                  title: "Soporte Técnico",
                  desc: "Soporte técnico telefónico y por chat 24 horas al día, 7 días a la semana con ingenieros certificados.",
                },
                {
                  icon: <Truck size={20} />,
                  title: "Servicio en Sitio",
                  desc: "Disponible servicio de reparación y mantenimiento en las instalaciones del cliente en la mayoría de las ciudades.",
                },
                {
                  icon: <Package size={20} />,
                  title: "Extensión de Garantía",
                  desc: "Extiende tu cobertura hasta 5 años con nuestros paquetes de servicio Premium. Incluye partes y mano de obra.",
                },
              ].map((w, i) => (
                <div key={i} className="p-5 rounded-xl border" style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 text-white"
                    style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
                  >
                    {w.icon}
                  </div>
                  <h4 className="font-semibold mb-2" style={{ color: "#000675", fontSize: "0.9rem" }}>{w.title}</h4>
                  <p className="text-sm" style={{ color: "#818286", lineHeight: 1.6 }}>{w.desc}</p>
                </div>
              ))}
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
