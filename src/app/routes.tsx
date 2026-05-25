import { createBrowserRouter } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
        >
          <span className="text-white text-3xl font-bold">404</span>
        </div>
        <h1 style={{ color: "#000675", fontSize: "1.8rem", fontWeight: 700 }}>Página no encontrada</h1>
        <p style={{ color: "#818286" }}>La página que buscas no existe o fue movida.</p>
        <a
          href="/Tecnopro"
          className="px-6 py-3 rounded-xl text-white font-semibold mt-2"
          style={{ background: "linear-gradient(135deg, #000675, #0044AA)" }}
        >
          Volver al inicio
        </a>
      </div>
    </Layout>
  );
}

export const router = createBrowserRouter([
  {
    
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/nosotros",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/catalogo",
    element: (
      <Layout>
        <Catalog />
      </Layout>
    ),
  },
  {
    path: "/producto/:id",
    element: (
      <Layout>
        <ProductDetail />
      </Layout>
    ),
  },
  {
    path: "/carrito",
    element: (
      <Layout>
        <Cart />
      </Layout>
    ),
  },
  {
    path: "*",
    element: <Home />,
  },

]);
