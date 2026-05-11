import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Search, Filter, X, ChevronDown, SlidersHorizontal, Grid, List } from "lucide-react";
import { products, brands } from "../../data/products";
import type { Product } from "../../data/products";
import { ProductCard } from "../components/ProductCard";

type SortOption = "popular" | "price-asc" | "price-desc" | "name";

const categoryOptions = [
  { id: "", label: "Todas las categorías" },
  { id: "workstation", label: "Workstations" },
  { id: "laptop", label: "Laptops Empresariales" },
  { id: "server", label: "Servidores" },
  { id: "accessory", label: "Accesorios Profesionales" },
];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "popular", label: "Más populares" },
  { value: "price-asc", label: "Precio: menor a mayor" },
  { value: "price-desc", label: "Precio: mayor a menor" },
  { value: "name", label: "Nombre A-Z" },
];

export default function Catalog() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filter state
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category") || "");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [sortBy, setSortBy] = useState<SortOption>("popular");
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    const cat = searchParams.get("category") || "";
    const search = searchParams.get("search") || "";
    setSelectedCategory(cat);
    setSearchQuery(search);
  }, [searchParams]);

  // Filter + sort products
  const filteredProducts = useMemo(() => {
    let result: Product[] = [...products];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        p => p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          Object.values(p.specs).some(s => s?.toLowerCase().includes(q))
      );
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }

    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    if (inStockOnly) {
      result = result.filter(p => p.inStock);
    }

    switch (sortBy) {
      case "price-asc": return result.sort((a, b) => a.price - b.price);
      case "price-desc": return result.sort((a, b) => b.price - a.price);
      case "name": return result.sort((a, b) => a.name.localeCompare(b.name));
      default: return result;
    }
  }, [searchQuery, selectedCategory, selectedBrands, priceRange, inStockOnly, sortBy]);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedBrands([]);
    setPriceRange([0, 10000]);
    setInStockOnly(false);
    setSortBy("popular");
    setSearchParams({});
  };

  const hasFilters = searchQuery || selectedCategory || selectedBrands.length > 0 ||
    priceRange[0] > 0 || priceRange[1] < 10000 || inStockOnly;

  const FilterPanel = () => (
    <div className="space-y-6">
      {/* Reset */}
      {hasFilters && (
        <button
          onClick={resetFilters}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all border"
          style={{ color: "#000675", borderColor: "#000675" }}
        >
          <X size={14} />
          Limpiar filtros
        </button>
      )}

      {/* Category */}
      <div>
        <h4 className="font-semibold text-sm mb-3" style={{ color: "#000675" }}>Categoría</h4>
        <div className="space-y-2">
          {categoryOptions.map(cat => (
            <label key={cat.id} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="category"
                checked={selectedCategory === cat.id}
                onChange={() => {
                  setSelectedCategory(cat.id);
                  setSearchParams(cat.id ? { category: cat.id } : {});
                }}
                className="w-4 h-4 accent-blue-700"
              />
              <span className="text-sm group-hover:opacity-70 transition-opacity" style={{ color: "#707072" }}>
                {cat.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Brands */}
      <div>
        <h4 className="font-semibold text-sm mb-3" style={{ color: "#000675" }}>Marca</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="w-4 h-4 accent-blue-700"
              />
              <span className="text-sm group-hover:opacity-70 transition-opacity" style={{ color: "#707072" }}>
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div>
        <h4 className="font-semibold text-sm mb-3" style={{ color: "#000675" }}>Rango de precio</h4>
        <div className="space-y-3">
          <div className="flex gap-2">
            <div className="flex-1">
              <label className="text-xs mb-1 block" style={{ color: "#818286" }}>Mínimo</label>
              <input
                type="number"
                value={priceRange[0]}
                onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="w-full px-3 py-2 rounded-lg border text-sm"
                style={{ borderColor: "#CDCED2", color: "#000675" }}
                min={0}
                max={priceRange[1]}
              />
            </div>
            <div className="flex-1">
              <label className="text-xs mb-1 block" style={{ color: "#818286" }}>Máximo</label>
              <input
                type="number"
                value={priceRange[1]}
                onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="w-full px-3 py-2 rounded-lg border text-sm"
                style={{ borderColor: "#CDCED2", color: "#000675" }}
                min={priceRange[0]}
                max={10000}
              />
            </div>
          </div>
          <div className="flex justify-between text-xs" style={{ color: "#A1A1A3" }}>
            <span>$0</span>
            <span>$10,000+</span>
          </div>
        </div>
      </div>

      {/* In Stock */}
      <div>
        <label className="flex items-center gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={inStockOnly}
            onChange={e => setInStockOnly(e.target.checked)}
            className="w-4 h-4 accent-blue-700"
          />
          <span className="text-sm font-medium" style={{ color: "#707072" }}>Solo en stock</span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #000675 0%, #0044AA 100%)" }} className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-6">
          <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "white" }} className="mb-2">
            Catálogo de Productos
          </h1>
          <p className="text-white/70 mb-6">Encuentra el equipo empresarial perfecto para tu organización</p>

          {/* Search */}
          <div className="relative max-w-xl">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{ color: "#818286" }} />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Buscar por nombre, marca, especificación..."
              className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none"
              style={{ backgroundColor: "rgba(255,255,255,0.95)", color: "#000675" }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded"
              >
                <X size={14} style={{ color: "#818286" }} />
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Toolbar */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border"
              style={{ borderColor: "#CDCED2", color: "#707072" }}
            >
              <SlidersHorizontal size={16} /> Filtros
            </button>

            <span className="text-sm" style={{ color: "#818286" }}>
              <strong style={{ color: "#000675" }}>{filteredProducts.length}</strong> productos encontrados
            </span>

            {/* Active filter chips */}
            {selectedCategory && (
              <span
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ backgroundColor: "#f0f4ff", color: "#000675" }}
              >
                {categoryOptions.find(c => c.id === selectedCategory)?.label}
                <button onClick={() => { setSelectedCategory(""); setSearchParams({}); }}>
                  <X size={11} />
                </button>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortOption)}
                className="appearance-none pl-4 pr-8 py-2 rounded-xl text-sm border outline-none cursor-pointer"
                style={{ borderColor: "#CDCED2", color: "#707072" }}
              >
                {sortOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "#818286" }} />
            </div>

            {/* View toggle */}
            <div className="flex border rounded-xl overflow-hidden" style={{ borderColor: "#CDCED2" }}>
              <button
                onClick={() => setViewMode("grid")}
                className="p-2 transition-colors"
                style={{ backgroundColor: viewMode === "grid" ? "#000675" : "transparent", color: viewMode === "grid" ? "white" : "#818286" }}
              >
                <Grid size={16} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className="p-2 transition-colors"
                style={{ backgroundColor: viewMode === "list" ? "#000675" : "transparent", color: viewMode === "list" ? "white" : "#818286" }}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-20 p-5 rounded-2xl border" style={{ borderColor: "#D0D1D6", backgroundColor: "#FCFCFE" }}>
              <div className="flex items-center gap-2 mb-5">
                <Filter size={16} style={{ color: "#000675" }} />
                <h3 className="font-semibold text-sm" style={{ color: "#000675" }}>Filtros</h3>
              </div>
              <FilterPanel />
            </div>
          </aside>

          {/* Mobile sidebar overlay */}
          {sidebarOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
              <div className="relative w-80 bg-white h-full overflow-y-auto p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold" style={{ color: "#000675" }}>Filtros</h3>
                  <button onClick={() => setSidebarOpen(false)}>
                    <X size={20} style={{ color: "#707072" }} />
                  </button>
                </div>
                <FilterPanel />
              </div>
            </div>
          )}

          {/* Products grid */}
          <div className="flex-1 min-w-0">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: "#f0f4ff" }}
                >
                  <Search size={28} style={{ color: "#000675" }} />
                </div>
                <h3 style={{ color: "#000675" }} className="font-semibold mb-2">No se encontraron productos</h3>
                <p className="text-sm mb-4" style={{ color: "#818286" }}>Intenta con otros términos o ajusta los filtros</p>
                <button
                  onClick={resetFilters}
                  className="px-5 py-2 rounded-xl text-sm font-medium text-white"
                  style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
                >
                  Limpiar filtros
                </button>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              /* List view */
              <div className="space-y-4">
                {filteredProducts.map(product => (
                  <div
                    key={product.id}
                    className="flex gap-5 p-5 rounded-2xl border transition-all hover:shadow-lg"
                    style={{ borderColor: "#D0D1D6" }}
                  >
                    <div className="w-32 h-28 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-medium" style={{ color: "#30A4FF" }}>
                            {product.brand}
                          </span>
                          <h3 className="font-semibold mt-0.5 truncate" style={{ color: "#000675" }}>
                            {product.name}
                          </h3>
                          <p className="text-sm mt-1 line-clamp-2" style={{ color: "#818286", lineHeight: 1.5 }}>
                            {product.description}
                          </p>
                          {product.specs.processor && (
                            <p className="text-xs mt-2" style={{ color: "#A1A1A3" }}>
                              {product.specs.processor}
                              {product.specs.ram && ` · ${product.specs.ram}`}
                            </p>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-bold" style={{ color: "#000675", fontSize: "1.2rem" }}>
                            ${product.price.toLocaleString()}
                          </p>
                          
                          <div className="flex gap-2 mt-3">
                            <a
                              href={`/producto/${product.id}`}
                              className="px-4 py-1.5 rounded-lg text-xs font-medium border transition-all hover:bg-gray-50"
                              style={{ borderColor: "#CDCED2", color: "#707072" }}
                            >
                              Ver detalles
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
