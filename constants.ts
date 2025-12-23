import { Product } from './types';

// Helper to generate consistent, high-quality amigurumi images
const getAmigurumiImage = (prompt: string) => 
  `https://image.pollinations.ai/prompt/adorable%20handmade%20amigurumi%20crochet%20${encodeURIComponent(prompt)}%20toy,%20soft%20knitted%20wool%20texture,%20studio%20lighting,%20creamy%20warm%20background,%20high%20quality,%204k,%20macro%20photography?width=800&height=800&nologo=true&seed=${Math.floor(Math.random() * 1000)}`;

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Llamita Pacha",
    price: 45.00,
    category: "Andino",
    image: `https://image.pollinations.ai/prompt/cute%20amigurumi%20crochet%20llama%20alpaca%20toy,%20white%20and%20beige%20wool,%20fluffy%20texture,%20soft%20lighting,%20pastel%20colors,%20minimalist%20warm%20background?width=800&height=800&nologo=true&seed=101`,
    description: "Una suave llama tejida con lana de alpaca sintética hipoalergénica. Pacha trae calma y calidez a cualquier hogar.",
    colors: ["#D7CCC8", "#8D6E63", "#FFAB91"],
    dimensions: "25cm x 15cm",
    shadowColor: "#E6BE8A" // Warmer Gold/Beige for visibility
  },
  {
    id: 2,
    name: "Oso Koda",
    price: 38.50,
    category: "Bosque",
    image: `https://image.pollinations.ai/prompt/cute%20amigurumi%20crochet%20teddy%20bear%20toy,%20brown%20cocoa%20wool,%20knitted%20texture,%20sweet%20face,%20soft%20lighting,%20cozy%20atmosphere?width=800&height=800&nologo=true&seed=102`,
    description: "Koda es un oso soñador. Perfecto para abrazar durante las noches frías. Hecho con puntada de arroz para extra textura.",
    colors: ["#5D4037", "#A1887F"],
    dimensions: "30cm x 20cm",
    shadowColor: "#D9A78B" // Richer Cocoa
  },
  {
    id: 3,
    name: "Zorro Inti",
    price: 42.00,
    category: "Bosque",
    image: `https://image.pollinations.ai/prompt/cute%20amigurumi%20crochet%20fox%20toy,%20vibrant%20orange%20and%20white%20wool,%20sitting%20pose,%20pointy%20ears,%20soft%20warm%20lighting?width=800&height=800&nologo=true&seed=103`,
    description: "Inti, el zorro del sol. Su color naranja vibrante despierta la creatividad y la alegría en los niños.",
    colors: ["#FF7043", "#FFFFFF"],
    dimensions: "22cm x 12cm",
    shadowColor: "#FF8A65" // Deep Salmon/Orange
  },
  {
    id: 4,
    name: "Cactus Zen",
    price: 25.00,
    category: "Plantas",
    image: `https://image.pollinations.ai/prompt/cute%20amigurumi%20crochet%20cactus%20plant%20toy%20in%20a%20pot,%20green%20wool,%20pink%20flower%20on%20top,%20kawaii%20face,%20soft%20lighting?width=800&height=800&nologo=true&seed=104`,
    description: "No pincha, solo ama. Un cactus amigable que nunca necesita agua, solo una sonrisa de vez en cuando.",
    colors: ["#66BB6A", "#F06292"],
    dimensions: "15cm x 10cm",
    shadowColor: "#81C784" // Fresh Green
  },
  {
    id: 5,
    name: "Pulpo Mare",
    price: 55.00,
    category: "Marino",
    image: `https://image.pollinations.ai/prompt/cute%20amigurumi%20crochet%20octopus%20toy,%20pastel%20blue%20and%20white%20wool,%20curly%20tentacles,%20soft%20nursery%20lighting?width=800&height=800&nologo=true&seed=105`,
    description: "Ocho brazos para dar ocho veces más amor. Diseñado específicamente para estimular el tacto de los bebés.",
    colors: ["#42A5F5", "#E3F2FD"],
    dimensions: "28cm x 28cm",
    shadowColor: "#64B5F6" // Vivid Sky Blue
  },
  {
    id: 6,
    name: "Dino Roco",
    price: 48.00,
    category: "Prehistórico",
    image: `https://image.pollinations.ai/prompt/cute%20amigurumi%20crochet%20dinosaur%20t-rex%20toy,%20olive%20green%20and%20mustard%20wool,%20friendly%20smile,%20standing,%20soft%20lighting?width=800&height=800&nologo=true&seed=106`,
    description: "El T-Rex más amable de la historia. Roco prefiere comer galletas que cazar. Verde oliva con detalles mostaza.",
    colors: ["#9E9D24", "#FDD835"],
    dimensions: "35cm x 25cm",
    shadowColor: "#D4E157" // Bright Lime
  }
];

export const BRAND_NAME = "Arawi";
export const TAGLINE = "Tejiendo historias, puntada a puntada.";