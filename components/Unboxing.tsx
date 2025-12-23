import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles, Heart, Wind, ScrollText, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    id: 1,
    title: "El Exterior",
    subtitle: "Protección Eco-Consciente",
    desc: "Tu amigo viaja seguro en una caja de cartón Kraft 100% reciclado. Minimalista por fuera, sorpresa por dentro.",
    icon: Gift,
    image: "https://image.pollinations.ai/prompt/aesthetic%20minimalist%20brown%20cardboard%20gift%20box%20sealed%20with%20cute%20sticker%20on%20white%20table%20warm%20light?width=500&height=500&nologo=true&seed=201",
    color: "bg-stone-100",
    rotate: -2
  },
  {
    id: 2,
    title: "El Aroma",
    subtitle: "Experiencia Sensorial",
    desc: "Al abrirla, te recibirá un suave aroma a flores de lavanda seca y papel de seda crujiente.",
    icon: Wind,
    image: "https://image.pollinations.ai/prompt/open%20gift%20box%20pink%20tissue%20paper%20dried%20lavender%20flowers%20sprigs%20sparkles%20magical%20aesthetic?width=500&height=500&nologo=true&seed=202",
    color: "bg-blush-50",
    rotate: 1
  },
  {
    id: 3,
    title: "El Encuentro",
    subtitle: "Certificado de Adopción",
    desc: "Incluye una carta escrita a mano con su nombre, fecha de nacimiento y una promesa de amistad.",
    icon: ScrollText,
    image: "https://image.pollinations.ai/prompt/handwritten%20calligraphy%20adoption%20certificate%20card%20textured%20paper%20wax%20seal%20aesthetic%20stationery?width=500&height=500&nologo=true&seed=203",
    color: "bg-yellow-50",
    rotate: -1
  }
];

export const Unboxing: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-fuchsia-50/50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-24 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block p-3 rounded-full bg-blush-100 mb-4"
          >
            <Sparkles className="w-6 h-6 text-blush-400" />
          </motion.div>
          <h2 className="font-display font-black text-3xl md:text-6xl text-wool-900 mb-4 md:mb-6 tracking-tight">
            La Magia del <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blush-400 to-wool-600">Unboxing Arawi</span>
          </h2>
          <p className="text-wool-600 text-base md:text-lg max-w-2xl mx-auto font-medium">
            El primer abrazo comienza al abrir la caja.
          </p>
        </div>

        {/* --- MOBILE LAYOUT (Horizontal Scroll) --- */}
        <div className="md:hidden relative">
          {/* Scroll Hint */}
          <div className="absolute -top-8 right-4 flex items-center gap-1 text-xs text-blush-400 font-bold animate-pulse">
            Desliza <ArrowRight size={14} />
          </div>

          {/* Horizontal Thread Line */}
          <div className="absolute top-[140px] left-0 right-0 h-1 border-t-2 border-dashed border-blush-200 z-0 opacity-50"></div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 pt-4 px-4 -mx-4 scrollbar-hide">
            {STEPS.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="snap-center shrink-0 w-[85vw] max-w-[320px] relative mt-2"
              >
                {/* Card Container */}
                <div 
                  className="bg-white rounded-2xl p-4 shadow-xl border border-wool-50 relative z-10 h-full flex flex-col"
                  style={{ transform: `rotate(${step.rotate}deg)` }}
                >
                  {/* Decorative Tape */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-yellow-100/90 shadow-sm rotate-1 z-20 opacity-80 backdrop-blur-sm"></div>

                  {/* Image Area */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4 border-4 border-white shadow-inner relative group">
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" loading="lazy" />
                    {/* Number Badge */}
                    <div className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center font-bold text-blush-400 shadow-sm">
                      {index + 1}
                    </div>
                  </div>

                  {/* Icon floating over edge */}
                  <div className="absolute top-[55%] right-6 -translate-y-1/2 bg-blush-50 p-2 rounded-full border-2 border-white shadow-md z-20">
                    <step.icon className="w-5 h-5 text-blush-400" />
                  </div>

                  {/* Content */}
                  <div className="text-center mt-2 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest font-bold text-wool-400 uppercase block mb-1">{step.subtitle}</span>
                      <h3 className="font-display font-bold text-2xl text-wool-900 mb-2">{step.title}</h3>
                      <p className="text-wool-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            {/* Spacer for last item scroll */}
            <div className="w-4 shrink-0" />
          </div>
        </div>

        {/* --- DESKTOP LAYOUT (Vertical Journey) --- */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          
          {/* Central Thread Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0">
             <svg className="h-full w-full overflow-visible" preserveAspectRatio="none">
               <motion.path
                 d="M 0,0 V 1200"
                 stroke="#E5E7EB"
                 strokeWidth="2"
                 strokeDasharray="8 8"
                 fill="none"
               />
               <motion.path
                 d="M 0,0 V 1200"
                 stroke="#f87171"
                 strokeWidth="2"
                 strokeDasharray="8 8"
                 fill="none"
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 2.5, ease: "easeInOut" }}
               />
             </svg>
          </div>

          <div className="space-y-32">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={step.id} className={`flex flex-row items-center gap-20 ${isEven ? '' : 'flex-row-reverse'}`}>
                  
                  {/* Image Side */}
                  <div className="flex-1 w-full relative">
                    <motion.div
                      initial={{ opacity: 0, y: 50, rotate: 0 }}
                      whileInView={{ opacity: 1, y: 0, rotate: step.rotate }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, type: "spring" }}
                      className="relative z-10"
                    >
                      <div className="bg-white p-4 pb-16 shadow-2xl rounded-sm transform hover:scale-[1.02] transition-transform duration-500 border border-gray-100">
                         <div className="aspect-square overflow-hidden bg-wool-50 filter contrast-[1.02]">
                           <img 
                              src={step.image} 
                              alt={step.title} 
                              className="w-full h-full object-cover" 
                              loading="lazy"
                           />
                         </div>
                         <div className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-wool-400 font-medium opacity-80 font-display tracking-widest text-xs uppercase">
                            {step.title}
                         </div>
                      </div>
                      <div className={`absolute -top-4 ${isEven ? 'left-1/2' : 'right-1/2'} -translate-x-1/2 w-24 h-8 bg-yellow-100/60 backdrop-blur-sm rotate-3 shadow-sm z-20`}></div>
                    </motion.div>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full opacity-30 blur-3xl -z-10 ${step.color}`}></div>
                  </div>

                  {/* Marker */}
                  <div className="relative z-20 flex-shrink-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      className="w-16 h-16 bg-white border-4 border-blush-100 rounded-full flex items-center justify-center shadow-lg text-blush-400"
                    >
                      <step.icon className="w-7 h-7" />
                    </motion.div>
                  </div>

                  {/* Text Side */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-left"
                  >
                     <span className="text-blush-400 font-bold tracking-widest text-xs uppercase mb-2 block">{step.subtitle}</span>
                     <h3 className="font-display font-bold text-4xl text-wool-900 mb-4">{step.title}</h3>
                     <p className="text-wool-600 text-lg leading-relaxed font-medium">
                       {step.desc}
                     </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Connection */}
        <div className="mt-12 md:mt-20 text-center relative z-10">
           <motion.div
             initial={{ scale: 0 }}
             whileInView={{ scale: 1 }}
             viewport={{ once: true }}
             className="inline-flex flex-col items-center gap-4 bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-wool-100 max-w-lg mx-auto"
           >
              <div className="p-3 bg-red-50 rounded-full text-red-400">
                <Heart className="w-6 h-6 md:w-8 md:h-8 fill-current" />
              </div>
              <p className="text-lg md:text-xl font-display font-bold text-wool-800">
                "Más que un juguete, estás recibiendo un pedacito de nuestra historia."
              </p>
           </motion.div>
        </div>

      </div>
    </section>
  );
};