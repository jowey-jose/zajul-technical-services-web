import solarImage from "@/assets/category-solar.jpg";
import cctvImage from "@/assets/category-cctv.jpg";
import networkingImage from "@/assets/category-networking.jpg";
import electricalImage from "@/assets/category-electrical.jpg";

export type ProductCategory = "Solar Products" | "CCTV & Security" | "Networking Equipment" | "Electrical Products";

export interface Product {
  id: string;
  name: string;
  model: string;
  category: ProductCategory;
  description: string;
  price?: number;
  stock: "In stock" | "Limited stock" | "Request availability";
  image: string;
  specs: Array<[string, string]>;
  featured?: boolean;
}

export const categories = [
  { name: "Solar Products" as const, short: "Solar", description: "Panels, inverters, batteries and complete energy systems.", image: solarImage },
  { name: "CCTV & Security" as const, short: "Security", description: "Cameras, recorders and dependable surveillance solutions.", image: cctvImage },
  { name: "Networking Equipment" as const, short: "Networking", description: "Routers, switches, cabling and connectivity equipment.", image: networkingImage },
  { name: "Electrical Products" as const, short: "Electrical", description: "Protection, distribution, cabling and installation essentials.", image: electricalImage },
];

export const products: Product[] = [
  { id: "mono-solar-panel-550w", name: "550W Mono Solar Panel", model: "ZT-SP550", category: "Solar Products", description: "High-output monocrystalline panel for residential and commercial systems.", price: 18500, stock: "In stock", image: solarImage, specs: [["Rated power", "550 W"], ["Cell type", "Monocrystalline"], ["Application", "Grid-tied and hybrid systems"], ["Warranty", "Confirm at inquiry"]], featured: true },
  { id: "hybrid-inverter-5kva", name: "5kVA Hybrid Inverter", model: "ZT-HY5K", category: "Solar Products", description: "Intelligent hybrid power control for solar, battery and grid supply.", price: 124000, stock: "Limited stock", image: solarImage, specs: [["Output", "5 kVA"], ["System", "Hybrid"], ["Display", "Digital status panel"], ["Compatibility", "Confirm battery configuration"]], featured: true },
  { id: "lithium-battery-5kwh", name: "5kWh Lithium Battery", model: "ZT-LFP5", category: "Solar Products", description: "Compact energy storage for homes, shops and small offices.", stock: "Request availability", image: solarImage, specs: [["Capacity", "5 kWh"], ["Chemistry", "LiFePO₄"], ["Mounting", "Floor or wall system"], ["Price", "Request a quote"]] },
  { id: "colorvu-camera", name: "Full-Colour IP Camera", model: "ZT-IP4MP", category: "CCTV & Security", description: "Clear day-and-night monitoring with network connectivity.", price: 9800, stock: "In stock", image: cctvImage, specs: [["Resolution", "4 MP"], ["Connection", "PoE / network"], ["Use", "Indoor or outdoor"], ["Night image", "Full-colour capable"]], featured: true },
  { id: "eight-channel-nvr", name: "8-Channel Network Recorder", model: "ZT-NVR08", category: "CCTV & Security", description: "Central recording and remote viewing for IP camera systems.", price: 16500, stock: "In stock", image: cctvImage, specs: [["Channels", "8"], ["Video", "IP camera input"], ["Remote access", "App compatible"], ["Storage", "Drive sold separately"]] },
  { id: "poe-switch-16", name: "16-Port PoE Switch", model: "ZT-POE16", category: "Networking Equipment", description: "Reliable power and data delivery for cameras and access points.", price: 21800, stock: "Limited stock", image: networkingImage, specs: [["Ports", "16 PoE"], ["Uplinks", "2"], ["Mounting", "Desktop or rack"], ["Application", "CCTV and networking"]], featured: true },
  { id: "dual-band-router", name: "Dual-Band Wi-Fi Router", model: "ZT-AC1200", category: "Networking Equipment", description: "Stable wireless coverage for homes and small business spaces.", price: 6500, stock: "In stock", image: networkingImage, specs: [["Wireless", "Dual band"], ["Class", "AC1200"], ["Antennas", "4 external"], ["Setup", "Web and mobile"]] },
  { id: "distribution-board", name: "12-Way Distribution Board", model: "ZT-DB12", category: "Electrical Products", description: "Neat and protected circuit distribution for modern installations.", price: 7200, stock: "In stock", image: electricalImage, specs: [["Ways", "12"], ["Mounting", "Surface"], ["Door", "Transparent"], ["Protection", "Configure to project"]] },
  { id: "copper-cable", name: "Copper Installation Cable", model: "ZT-CU2.5", category: "Electrical Products", description: "Quality insulated copper cable for general electrical installation.", stock: "Request availability", image: electricalImage, specs: [["Conductor", "Copper"], ["Size", "2.5 mm² sample"], ["Length", "Confirm roll size"], ["Colours", "Subject to availability"]] },
];

export const services = [
  { slug: "solar", title: "Solar system installation", description: "System sizing, equipment selection, professional installation and commissioning for dependable energy.", image: solarImage, benefits: ["Site-aware system design", "Clean, safe installation", "Testing and handover"] },
  { slug: "cctv", title: "CCTV installation & configuration", description: "Purpose-built surveillance for homes, businesses and institutions, including camera placement and remote viewing.", image: cctvImage, benefits: ["Coverage planning", "Recorder configuration", "Remote access setup"] },
  { slug: "networking", title: "Networking & structured cabling", description: "Organised wired and wireless networks designed for stable communication and easier maintenance.", image: networkingImage, benefits: ["Structured cabling", "Router and switch setup", "Network testing"] },
  { slug: "electrical", title: "Electrical installation & maintenance", description: "Practical electrical solutions delivered with careful planning, quality components and disciplined workmanship.", image: electricalImage, benefits: ["New installations", "Fault finding", "Maintenance support"] },
];

export const contact = {
  phone: "+254 722 604 306",
  marketingPhone: "+254 721 475 930",
  whatsapp: "254722604306",
  email: "zajultechnicalservices@gmail.com",
  location: "Kitengela, above Quick Matt Supermarket",
  postal: "P.O. Box 00204, Athi River",
};
export const productDetails: Record<string, string> = {
  "mono-solar-panel-550w": "Built for strong daily energy yield, this 550W monocrystalline panel suits rooftop and ground-mounted installations. It pairs well with hybrid inverters and battery storage, making it a practical building block for homes, shops and institutions looking to cut power costs and reduce outages.",
  "hybrid-inverter-5kva": "This 5kVA hybrid inverter intelligently manages power from solar panels, batteries and the grid, switching automatically to keep essential loads running. Its digital status panel shows live performance, and our team can configure it for your battery bank and usage pattern.",
  "lithium-battery-5kwh": "A long-life LiFePO₄ battery that stores surplus solar energy for evenings and outages. Its compact design fits neatly in homes and small offices, and it supports deep daily cycling for dependable backup power.",
  "colorvu-camera": "Capture clear, full-colour footage day and night with this 4MP network camera. Powered over a single network cable (PoE), it is simple to install indoors or outdoors and integrates with network recorders for remote viewing on your phone.",
  "eight-channel-nvr": "Centralise up to eight IP cameras on one recorder with continuous or motion-based recording. Remote viewing through a mobile app lets you check your premises from anywhere. Hard drive is sized separately to match your retention needs.",
  "poe-switch-16": "Deliver power and data to up to 16 cameras or access points from one tidy unit. Two uplink ports connect it to your main network, and it can sit on a desk or mount in a standard rack cabinet.",
  "dual-band-router": "A dependable dual-band router offering stable Wi-Fi across homes and small business spaces. Four external antennas improve coverage, and setup is quick through a web page or mobile app.",
  "distribution-board": "A 12-way surface-mounted distribution board with a transparent door for quick inspection. It keeps circuits neat, protected and easy to maintain, and can be configured with breakers to suit your project.",
  "copper-cable": "Quality insulated copper conductor cable for general wiring in homes and commercial buildings. Roll lengths and colours are confirmed at the time of order to match your installation plan.",
};

export const serviceDetails: Record<string, string> = {
  solar: "We assess your energy needs, recommend the right panels, inverter and batteries, then install, test and hand over a complete system with guidance on everyday use.",
  cctv: "We plan camera positions for full coverage, install cameras and recorders neatly, and set up remote viewing on your phone so you can monitor your property anytime.",
  networking: "We design and install structured cabling, routers, switches and Wi-Fi so your home or office enjoys fast, stable and well-organised connectivity.",
  electrical: "We handle new wiring, distribution boards, fault finding and routine maintenance using quality components and safe, disciplined workmanship.",
};

export function makeReference(prefix: string) {
  return `${prefix}-${Date.now().toString(36).toUpperCase().slice(-6)}`;
}
