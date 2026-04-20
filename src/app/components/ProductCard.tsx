import { Link } from "react-router";
import { ShoppingCart, Star, Eye } from "lucide-react";
import type { Product } from "../../data/products";
import { useCart } from "../context/CartContext";

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export function ProductCard({ product, compact = false }: ProductCardProps) {
  const { addToCart } = useCart();

  const categoryLabel: Record<string, string> = {
    workstation: "Workstation",
    laptop: "Laptop Empresarial",
    server: "Servidor",
    accessory: "Accesorio",
  };

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      style={{ borderColor: "#CDCED2" }}
    >
      {/* Badge */}
      {product.badge && (
        <div
          className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg text-xs font-bold text-white"
          style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
        >
          {product.badge}
        </div>
      )}

      {/* Discount badge */}
      {product.originalPrice && (
        <div
          className="absolute top-3 right-3 z-10 px-2 py-1 rounded-lg text-xs font-bold"
          style={{ backgroundColor: "#00C2FF", color: "white" }}
        >
          -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden bg-gray-50" style={{ height: compact ? "160px" : "200px" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <Link
            to={`/producto/${product.id}`}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          >
            <Eye size={16} style={{ color: "#000675" }} />
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
            style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
          >
            <ShoppingCart size={16} className="text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <span className="text-xs font-medium" style={{ color: "#30A4FF" }}>
          {categoryLabel[product.category]} · {product.brand}
        </span>

        {/* Name */}
        <Link to={`/producto/${product.id}`}>
          <h3
            className="mt-1 text-sm font-semibold leading-snug hover:underline line-clamp-2"
            style={{ color: "#000675" }}
          >
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mt-2">
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={12}
                fill={i < Math.floor(product.rating) ? "#30A4FF" : "transparent"}
                style={{ color: i < Math.floor(product.rating) ? "#30A4FF" : "#CDCED2" }}
              />
            ))}
          </div>
          <span className="text-xs" style={{ color: "#818286" }}>
            {product.rating} ({product.reviews})
          </span>
        </div>

        {/* Key spec preview */}
        {!compact && product.specs.processor && (
          <p className="mt-2 text-xs line-clamp-1" style={{ color: "#818286" }}>
            {product.specs.processor}
          </p>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between mt-3 pt-3 border-t" style={{ borderColor: "#CDCED2" }}>
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="font-bold" style={{ color: "#000675", fontSize: "1.1rem" }}>
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs line-through" style={{ color: "#A1A1A3" }}>
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-xs" style={{ color: "#818286" }}>
              {product.inStock ? `${product.stockCount} en stock` : "Agotado"}
            </span>
          </div>

          <button
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-white text-xs font-medium transition-all hover:opacity-90 disabled:opacity-40"
            style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
          >
            <ShoppingCart size={14} />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
