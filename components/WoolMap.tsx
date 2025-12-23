import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Star, Heart } from 'lucide-react';

// Coordinates calibrated for the new 600x900 SVG ViewBox of Peru
const LOCATIONS = [
  {
    id: 'lima',
    name: 'Lima',
    x: 175,
    y: 530,
    customer: 'Familia Rivas',
    product: 'Llamita Pacha',
    message: "¡Llegó a Miraflores súper rápido! A Sofi le encanta su nueva compañera de siestas.",
    image: "https://image.pollinations.ai/prompt/peruvian%20girl%20hugging%20llama%20amigurumi%20indoors?width=400&height=400&nologo=true&seed=10"
  },
  {
    id: 'cusco',
    name: 'Cusco',
    x: 330,
    y: 620,
    customer: 'Andrea M.',
    product: 'Zorro Inti',
    message: "Inti volvió a su tierra natal. La calidad de la lana es impresionante, se siente el cariño.",
    image: "https://image.pollinations.ai/prompt/crochet%20fox%20toy%20rustic%20wooden%20table%20peru?width=400&height=400&nologo=true&seed=20"
  },
  {
    id: 'arequipa',
    name: 'Arequipa',
    x: 300,
    y: 720,
    customer: 'Tía Claudia',
    product: 'Oso Koda',
    message: "El regalo perfecto para mi sobrino en Cayma. Es más suave de lo que imaginaba.",
    image: "https://image.pollinations.ai/prompt/baby%20sleeping%20with%20crochet%20teddy%20bear%20soft%20light?width=400&height=400&nologo=true&seed=30"
  },
  {
    id: 'trujillo',
    name: 'Trujillo',
    x: 100,
    y: 340,
    customer: 'Carlos B.',
    product: 'Pulpo Mare',
    message: "¡Saludos desde la ciudad de la eterna primavera! Mare es el rey de la casa.",
    image: "https://image.pollinations.ai/prompt/toddler%20playing%20with%20crochet%20octopus%20garden?width=400&height=400&nologo=true&seed=40"
  },
  {
    id: 'iquitos',
    name: 'Iquitos',
    x: 430,
    y: 180,
    customer: 'Selva Mágica',
    product: 'Dino Roco',
    message: "Roco ya está explorando la selva. Gracias Arawi por el envío seguro.",
    image: "https://image.pollinations.ai/prompt/crochet%20dinosaur%20toy%20tropical%20leaves%20jungle?width=400&height=400&nologo=true&seed=50"
  },
  {
     id: 'piura',
     name: 'Piura',
     x: 50,
     y: 180,
     customer: 'Sol Norteño',
     product: 'Cactus Zen',
     message: "El calor de Piura no derrite a este cactus. ¡Es hermoso!",
     image: "https://image.pollinations.ai/prompt/crochet%20cactus%20toy%20window%20sunlight?width=400&height=400&nologo=true&seed=60"
  }
];

export const WoolMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState(LOCATIONS[0]);

  // High-fidelity SVG path for Peru
  const PERU_PATH = `
    M114.5,108.8 
    C114.5,108.8 90.2,142.1 76.5,160.5
    C68.1,171.7 42.5,158.2 30.1,165.4
    C19.5,171.6 15.2,192.5 15.2,192.5
    L5.5,230.1
    L45.2,275.5
    L72.8,328.8
    L112.5,392.2
    L152.2,465.5
    L198.5,535.5
    L245.8,598.8
    L275.1,655.5
    L305.5,735.2
    L322.2,748.1
    L345.5,720.5
    L340.2,680.1
    L365.5,665.5
    L385.2,640.1
    L435.5,630.5
    L460.2,605.1
    L455.5,580.1
    L485.5,555.2
    L515.5,500.5
    L540.2,450.2
    L530.1,380.1
    L490.5,340.5
    L495.2,300.1
    L460.5,250.2
    L450.2,180.1
    L400.5,140.2
    L350.5,150.5
    L320.1,120.2
    L280.5,110.1
    L250.1,80.1
    L200.5,90.5
    L160.1,80.2
    L130.5,95.1
    L114.5,108.8 
    Z
  `;

  return (
    <section className="py-24 bg-gradient-to-br from-aqua-100/20 via-lavanda-100/20 to-mint-200/20 overflow-hidden relative">
       {/* Thread Texture Background */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 4h2v2H5V5zm4 4h2v2H9V9zm4 4h2v2h-2v-2zm4 4h2v2h-2v-2z' fill='%23B28DFF' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")` }}
       />

       <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-20">

          {/* Left: Content & Story */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="mb-10"
             >
                <div className="flex items-center gap-2 text-violet-100 font-bold mb-4 uppercase tracking-widest text-xs md:text-sm">
                   <MapPin className="w-4 h-4" />
                   <span>Conectando corazones</span>
                </div>
                <h2 className="font-display font-black text-5xl md:text-6xl text-wool-900 mb-6 leading-tight">
                   Huellas de Lana <br/>
                   <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-100 via-rosa-200 to-aqua-500">por el Perú</span>
                </h2>
                <p className="text-wool-700 text-lg md:text-xl leading-relaxed max-w-md font-medium">
                   Cada pedido es un hilo invisible que nos une. Explora las historias de quienes ya abrazaron la magia de Arawi.
                </p>
             </motion.div>

             {/* Active Polaroid Card - Redesigned */}
             <div className="relative h-[400px]">
                <AnimatePresence mode='wait'>
                    <motion.div
                       key={activeLocation.id}
                       initial={{ opacity: 0, rotate: -6, scale: 0.9 }}
                       animate={{ opacity: 1, rotate: -2, scale: 1 }}
                       exit={{ opacity: 0, rotate: 6, scale: 1.1 }}
                       transition={{ type: "spring", stiffness: 200, damping: 20 }}
                       className="absolute top-0 left-0 bg-white p-5 pb-16 shadow-2xl max-w-sm border border-gray-100 transform origin-top-left"
                    >
                       {/* Washi Tape */}
                       <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-rosa-300/40 backdrop-blur-sm rotate-2 shadow-sm z-10"></div>

                       <div className="aspect-square bg-gradient-to-br from-violet-500/10 to-rosa-300/10 mb-5 overflow-hidden rounded-sm filter contrast-[1.05] relative group">
                          <img src={activeLocation.image} alt="Cliente Feliz" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-violet-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                       </div>

                       <div className="font-display font-bold text-wool-900 text-xl mb-1">{activeLocation.customer}</div>
                       <div className="flex items-center gap-2 text-sm text-wool-600 mb-3 font-medium">
                          <MapPin className="w-3 h-3 text-rosa-200" />
                          {activeLocation.name}, Perú
                       </div>
                       
                       <p className="font-serif italic text-wool-700 text-lg leading-snug">"{activeLocation.message}"</p>
                       
                       {/* Stamp */}
                       <div className="absolute bottom-4 right-4 opacity-20 transform -rotate-12 border-2 border-wool-900 rounded-full p-2 w-16 h-16 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-center leading-none text-wool-900 uppercase">Aprobado<br/>con<br/>Amor</span>
                       </div>
                    </motion.div>
                </AnimatePresence>
             </div>
          </div>

          {/* Right: The Perfect Peru Map */}
          <div className="order-1 lg:order-2 flex justify-center items-center py-10">
             <div className="relative w-full max-w-[500px] aspect-[2/3] select-none">
                
                {/* Workshop Hub (Cusco/Lima area approximation for origin) */}
                <div className="absolute top-[65%] left-[55%] w-32 h-32 bg-rosa-200/30 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

                <svg viewBox="0 0 600 800" className="w-full h-full drop-shadow-2xl overflow-visible">
                    <defs>
                        <linearGradient id="peruGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#C4FAF8" /> {/* Aqua */}
                            <stop offset="50%" stopColor="#DCD3FF" /> {/* Lavanda */}
                            <stop offset="100%" stopColor="#FBE4FF" /> {/* Violet light */}
                        </linearGradient>
                        <filter id="fabricShadow">
                            <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#B28DFF" floodOpacity="0.15"/>
                        </filter>
                        <pattern id="fabricPattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="1" fill="#B28DFF" opacity="0.1"/>
                        </pattern>
                    </defs>

                    {/* Peru Silhouette */}
                    <motion.path
                        d={PERU_PATH}
                        fill="url(#peruGradient)"
                        stroke="#D5AAFF"
                        strokeWidth="3"
                        strokeDasharray="8 4"
                        filter="url(#fabricShadow)"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    />
                    
                    {/* Pattern Overlay */}
                    <path d={PERU_PATH} fill="url(#fabricPattern)" style={{ pointerEvents: 'none' }} />

                    {/* Connecting Threads */}
                    <AnimatePresence>
                        <motion.line
                            key={activeLocation.id}
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            x1={330} y1={620} // Origin: Cusco (Workshop)
                            x2={activeLocation.x}
                            y2={activeLocation.y}
                            stroke="#FF9CEE"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeDasharray="4 4"
                        />
                    </AnimatePresence>

                    {/* Map Pins */}
                    {LOCATIONS.map((loc) => (
                        <g
                            key={loc.id}
                            onClick={() => setActiveLocation(loc)}
                            className="cursor-pointer group"
                            transform={`translate(${loc.x}, ${loc.y})`}
                        >
                            {/* Pulse for active */}
                            {activeLocation.id === loc.id && (
                                <circle r="20" fill="#FF9CEE" opacity="0.2">
                                    <animate attributeName="r" from="10" to="30" dur="1.5s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.4" to="0" dur="1.5s" repeatCount="indefinite" />
                                </circle>
                            )}

                            {/* Pin Head */}
                            <circle
                                r={activeLocation.id === loc.id ? 8 : 6}
                                fill={activeLocation.id === loc.id ? "#FF9CEE" : "#fff"}
                                stroke="#B28DFF"
                                strokeWidth="2"
                                className="transition-all duration-300 group-hover:scale-125"
                            />

                            {/* Label */}
                            <foreignObject x="-60" y="15" width="120" height="40" style={{ overflow: 'visible' }}>
                                <div className={`text-center transition-all duration-300 ${activeLocation.id === loc.id ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-wool-900 shadow-sm border border-violet-300/30 whitespace-nowrap">
                                        {loc.name}
                                    </span>
                                </div>
                            </foreignObject>
                        </g>
                    ))}

                    {/* Workshop Marker (Cusco) */}
                    <g transform="translate(330, 620)">
                         <Heart size={20} className="text-rosa-200 fill-rosa-200 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    </g>

                </svg>
             </div>
          </div>
       </div>
    </section>
  );
};