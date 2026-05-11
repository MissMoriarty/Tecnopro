export interface Product {
  id: string;
  name: string;
  brand: string;
  category: "Gama básica" | "Gama media" | "Gama alta";
  price: number;
  image: string;
  badge?: string;
  specs: {
    processor?: string;
    ram?: string;
    storage?: string;
    gpu?: string;
    os?: string;
    connectivity?: string;
    [key: string]: string | undefined;
  };
  description: string;
  longDescription: string;
  inStock: boolean;
  stockCount?: number;
}

export const products: Product[] = [
  {
    id: "ws-001",
    name: "Laptop HP 245 G10 de 14\", Windows 11 Home Single Language, AMD Ryzen™ 5, 8GB RAM, 512GB SSD",
    brand: "Hp",
    category: "Gama básica",
    price: 7939,
    image: "https://jp.ext.hp.com/content/dam/jp-ext-hp-com/jp/ja/ec/notebooks/business/hp_245_g10/images/move3_full.jpg",
    badge: "Ofimática",
    specs: {
      processor: "AMD Ryzen 5 7530U (6 núcleos / 12 hilos)",
      ram: "RAM DDR4-3200 MT/s de 8 GB (1 x 8 GB)",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "AMD Radeon Graphics (integrada)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6, BT 5.3, RJ-45, 1× USB-C, 2× USB-A, HDMI",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "ws-002",
    name: "Lenovo V14 Gen 5",
    brand: "Lenovo",
    category: "Gama básica",
    price: 17499,
    image: "https://m.media-amazon.com/images/I/515W4I2eGHL.jpg",
    badge: "Ofimática",
    specs: {
      processor: "Intel Core 3 100U",
      ram: "16 GB DDR4",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "Intel UHD Graphics (integrada)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6, BT 5.2, RJ-45, USB-C, HDMI",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "ws-003",
    name: "Laptop Dell LDC15255, 15.6\" 1920x1080 Full HD, AMD Ryzen 5 7530U",
    brand: "Dell",
    category: "Gama básica",
    price: 8997,
    image: "https://m.media-amazon.com/images/I/71d6CcN8Q5L._AC_SX522_.jpg",
    badge: "Ofimática",
    specs: {
      processor: "AMD Ryzen 5 7530U",
      ram: "16 GB",
      storage: "512 GB SSD",
      gpu: "AMD Radeon Graphics (integrada)",
      os: "Windows 11 Home",
      connectivity: "Wi-Fi 6, BT 5.3, USB-C, HDMI (sin RJ-45)",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "lt-001",
    name: "ThinkPad E14 Gen 7",
    brand: "Lenovo",
    category: "Gama media",
    price: 30000,
    image: "https://www.laphard.pl/userdata/public/assets/images/Product/Lenovo/ThinkPad/E14_G7/laptop-lenovo-thinkpad-e14-gen-7-006.webp",
    badge: "Desarrollo",
    specs: {
      processor: "Intel Core Ultra 7 240H / 255H (16 núcleos)",
      ram: "32 GB DDR5",
      storage: "1 TB PCIe NVMe SSD",
      gpu: "Intel Arc Graphics (integrada)",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, BT 5.3, RJ-45, 2× Thunderbolt 4, HDMI 2.1, MIL-STD-810H",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "lt-002",
    name: "Laptop HP EliteBook 640 G11 de 14",
    brand: "HP",
    category: "Gama media",
    price: 25449,
    image: "https://tse4.mm.bing.net/th/id/OIP.UJPiCjsIpQC2TV_kGGMVGAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    badge: "Desarrollo",
    specs: {
      processor: "Intel Core Ultra 7 155U",
      ram: "16 GB DDR5",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "Intel Arc Graphics (integrada)",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, BT 5.3, RJ-45, 2× Thunderbolt 4, HDMI 2.1, MIL-STD-810H",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "lt-003",
    name: "Dell Latitude 5450",
    brand: "Dell",
    category: "Gama media",
    price: 27570,
    image: "https://laptopmedia.com/wp-content/uploads/2024/07/5-13.jpg",
    badge: "Desarrollo",
    specs: {
      processor: "Intel Core Ultra 7 155U",
      ram: "16 GB DDR5 (2× SO-DIMM)",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "Intel Arc Graphics (integrada)",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, 2× Thunderbolt 4, RJ-45, HDMI",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "sv-001",
    name: "Laptop HP ZBook Firefly G11",
    brand: "HP",
    category: "Gama alta",
    price: 21469,
    image: "https://laptopmedia.com/wp-content/uploads/2024/11/7-1-1536x864.jpg",
    badge: "Prototipado",
    specs: {
      processor: "Intel Core Ultra 7 165H",
      ram: "32 GB DDR5",
      storage: "512 GB PCIe NVMe SSD",
      gpu: "NVIDIA RTX A500 4 GB (ISV)",
      os: "Windows 11 Pro",
      connectivity: "2× Thunderbolt 4, HDMI 2.1, RJ-45, SD card",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "sv-002",
    name: "ThinkPad P14s Gen 5",
    brand: "Lenovo",
    category: "Gama alta",
    price: 33020,
    image: "https://tse4.mm.bing.net/th/id/OIP.EHT0yqfrHa5J5O7POPD6zgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    badge: "Prototipado",
    specs: {
      processor: "Intel Core Ultra 7 155H",
      ram: "32 GB",
      storage: "1 TB SSD",
      gpu: "NVIDIA RTX 500",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, BT 5.3, 2× Thunderbolt, HDMI, RJ-45",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  {
    id: "sv-003",
    name: "Laptop Dell Precision 3591 15.6\" 1920x1080 Full HD",
    brand: "Dell",
    category: "Gama alta",
    price: 0,
    image: "https://laptopmedia.com/wp-content/uploads/2024/11/5-19-1536x864.jpg",
    badge: "Prototipado",
    specs: {
      processor: "Intel Core Ultra 9 165H",
      ram: "32 GB",
      storage: "1 TB PCIe NVMe SSD",
      gpu: "NVIDIA RTX 500",
      os: "Windows 11 Pro",
      connectivity: "Wi-Fi 6E, BT 5.3, 2× Thunderbolt, HDMI, RJ-45",
    },
    description: "Descripción",
    longDescription: "Descripción larga",
    inStock: true,
    stockCount: 8,
  },
  
];

export const categories = [
  { id: "workstation", label: "Workstations", icon: "Monitor", count: products.filter(p => p.category === "Gama básica").length },
  { id: "laptop", label: "Laptops Empresariales", icon: "Laptop", count: products.filter(p => p.category === "Gama media").length },
  { id: "server", label: "Servidores", icon: "Server", count: products.filter(p => p.category === "Gama alta").length },
];

export const brands = ["Dell", "HP", "Lenovo", "ASUS"];
