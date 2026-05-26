import { useState } from "react";
import { Link } from "react-router";
import {
  ShoppingCart, Trash2, Plus, Minus, ArrowLeft, ArrowRight,
  Shield, Truck, Tag, CheckCircle, Package
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { ProductCard } from "../components/ProductCard";
import { products } from "../../data/products";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "success">("cart");

  const discount = couponApplied ? totalPrice * 0.1 : 0;
  const shipping = totalPrice >= 500 ? 0 : 49.99;
  const finalTotal = totalPrice - discount + shipping + tax;



  const suggestedProducts = products.filter(p => !items.find(i => i.product.id === p.id)).slice(0, 3);

  if (checkoutStep === "success") {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-md">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
          >
            <CheckCircle size={40} className="text-white" />
          </div>
          <h1 style={{ fontSize: "2rem", fontWeight: 800, color: "#000675" }} className="mb-3">
            ¡Pedido realizado con éxito!
          </h1>
          <p style={{ color: "#818286" }} className="mb-2">
            Hemos recibido tu pedido. Te contactaremos en las próximas 24 horas para confirmar los detalles de entrega.
          </p>
          <div
            className="inline-block px-4 py-2 rounded-xl text-sm font-bold mt-2 mb-6"
            style={{ backgroundColor: "#f0f4ff", color: "#000675" }}
          >
            # Pedido: TP-{Date.now().toString().slice(-6)}
          </div>
          <div className="space-y-3">
            <Link
              to="/catalogo"
              className="block w-full py-3 rounded-xl text-white font-semibold transition-all hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
            >
              Seguir comprando
            </Link>
            <Link
              to="/"
              className="block w-full py-3 rounded-xl text-sm border font-medium"
              style={{ borderColor: "#CDCED2", color: "#707072" }}
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-md">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ backgroundColor: "#f0f4ff" }}
          >
            <ShoppingCart size={36} style={{ color: "#000675" }} />
          </div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#000675" }} className="mb-3">
            Tu carrito está vacío
          </h1>
          <p style={{ color: "#818286" }} className="mb-6">
            Agrega equipos empresariales desde nuestro catálogo para comenzar tu pedido.
          </p>
          <Link
            to="/catalogo"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
          >
            <Package size={18} />
            Explorar Catálogo
          </Link>

          {suggestedProducts.length > 0 && (
            <div className="mt-16 text-left">
              <h2 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#000675" }} className="mb-5">
                Productos destacados
              </h2>
              <div className="grid gap-4">
                {suggestedProducts.map(p => (
                  <ProductCard key={p.id} product={p} compact />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #000675 0%, #0044AA 100%)" }} className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "white" }}>
            Carrito de Compra
          </h1>
          <p className="text-white/70 mt-1 text-sm">{totalItems} {totalItems === 1 ? "producto" : "productos"} en tu carrito</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-2 items-center mb-8">
          <Link to="/catalogo" className="flex items-center gap-1.5 text-sm hover:opacity-70 transition-opacity" style={{ color: "#818286" }}>
            <ArrowLeft size={16} /> Seguir comprando
          </Link>
          <span style={{ color: "#CDCED2" }}>|</span>
          <button
            onClick={clearCart}
            className="text-sm hover:opacity-70 transition-opacity"
            style={{ color: "#818286" }}
          >
            Vaciar carrito
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(item => (
              <div
                key={item.product.id}
                className="flex gap-4 p-5 rounded-2xl border transition-all hover:shadow-md"
                style={{ borderColor: "#D0D1D6" }}
              >
                {/* Image */}
                <div className="w-28 h-24 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <span className="text-xs font-medium" style={{ color: "#30A4FF" }}>
                        {item.product.brand}
                      </span>
                      <Link to={`/producto/${item.product.id}`}>
                        <h3 className="font-semibold text-sm mt-0.5 hover:underline line-clamp-2" style={{ color: "#000675" }}>
                          {item.product.name}
                        </h3>
                      </Link>
                      {item.product.specs.processor && (
                        <p className="text-xs mt-1 line-clamp-1" style={{ color: "#A1A1A3" }}>
                          {item.product.specs.processor}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 transition-colors shrink-0"
                      title="Eliminar"
                    >
                      <Trash2 size={15} style={{ color: "#A1A1A3" }} />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4 flex-wrap gap-2">
                    {/* Quantity */}
                    <div className="flex items-center border rounded-xl overflow-hidden" style={{ borderColor: "#CDCED2" }}>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="px-3 py-1.5 hover:bg-gray-100 transition-colors"
                      >
                        <Minus size={13} style={{ color: "#707072" }} />
                      </button>
                      <span className="w-10 text-center text-sm font-medium" style={{ color: "#000675" }}>
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="px-3 py-1.5 hover:bg-gray-100 transition-colors"
                      >
                        <Plus size={13} style={{ color: "#707072" }} />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="font-bold" style={{ color: "#000675" }}>
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-xs" style={{ color: "#A1A1A3" }}>
                          ${item.product.price.toLocaleString()} c/u
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <div className="p-6 rounded-2xl border" style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
                <h2 className="font-bold mb-5" style={{ color: "#000675", fontSize: "1.1rem" }}>
                  Resumen del Pedido
                </h2>

                <div className="space-y-3 mb-5">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#818286" }}>Subtotal ({totalItems} productos)</span>
                    <span style={{ color: "#000675" }} className="font-medium">${totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "#818286" }}>Envío</span>
                    <span style={{ color: shipping === 0 ? "#30A4FF" : "#000675" }} className="font-medium">
                      {shipping === 0 ? "Gratis ✓" : `$${shipping}`}
                    </span>
                  </div>
                  <div className="pt-3 border-t flex justify-between" style={{ borderColor: "#CDCED2" }}>
                    <span className="font-bold" style={{ color: "#000675" }}>Total</span>
                    <span className="font-bold" style={{ color: "#000675", fontSize: "1.2rem" }}>
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                

                {/* Checkout button */}
                <button
                  onClick={() => { clearCart(); setCheckoutStep("success"); }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 mb-3"
                  style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
                >
                  Proceder al Pago <ArrowRight size={16} />
                </button>

                <p className="text-center text-xs" style={{ color: "#A1A1A3" }}>
                  Proceso de pago seguro con cifrado SSL
                </p>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-2 mt-5 pt-5 border-t" style={{ borderColor: "#CDCED2" }}>
                  {[
                    { icon: <Shield size={14} />, text: "Pago seguro" },
                    { icon: <Shield size={14} />, text: "Soporte" },
                    { icon: <CheckCircle size={14} />, text: "Garantía" },
                  ].map((b, i) => (
                    <div key={i} className="flex flex-col items-center gap-1 text-center">
                      <span style={{ color: "#30A4FF" }}>{b.icon}</span>
                      <span className="text-xs" style={{ color: "#A1A1A3" }}>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Free shipping notice */}
              {shipping > 0 && (
                <div className="mt-3 p-3 rounded-xl text-center"
                  style={{ backgroundColor: "#fff8e6", border: "1px solid #fde68a" }}>
                  <p className="text-xs" style={{ color: "#92400e" }}>
                    Agrega <strong>${(500 - totalPrice).toFixed(0)}</strong> más para obtener envío gratuito
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Suggested products */}
        {suggestedProducts.length > 0 && (
          <div className="mt-16">
            <h2 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#000675" }} className="mb-6">
              También te puede interesar
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {suggestedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
