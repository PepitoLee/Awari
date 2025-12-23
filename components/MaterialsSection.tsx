import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Feather, Leaf } from 'lucide-react';

export const MaterialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-wool-900 text-wool-50 relative overflow-hidden">
       {/* Background noise */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/felt.png')" }}></div>
       
       <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             
             {/* Left: Macro Visual */}
             <div className="relative">
                <div className="absolute -inset-4 border border-wool-700 rounded-full animate-pulse opacity-50"></div>
                <div className="w-full aspect-square rounded-full overflow-hidden border-8 border-wool-800 shadow-2xl relative bg-wool-800">
                   <img 
                     src="https://image.pollinations.ai/prompt/macro%20photography%20of%20beige%20organic%20cotton%20yarn%20knitting%20texture%20soft%20fibers%20detail?width=800&height=800&nologo=true&seed=888" 
                     alt="Detalle de Fibra" 
                     className="w-full h-full object-cover hover:scale-125 transition-transform duration-[2s] ease-in-out cursor-crosshair"
                   />
                   
                   {/* Interactive Hotspots */}
                   <motion.div 
                      className="absolute top-1/3 left-1/3"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                   >
                      <div className="w-8 h-8 bg-blush-400/80 rounded-full flex items-center justify-center backdrop-blur-sm border border-white cursor-pointer group">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <div className="absolute left-10 top-0 bg-white text-wool-900 text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                          Algodón Pima 100%
                        </div>
                      </div>
                   </motion.div>
                </div>
                <div className="absolute bottom-4 right-0 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-xs font-mono uppercase tracking-widest border border-white/20">
                   Zoom x100
                </div>
             </div>

             {/* Right: Content */}
             <div>
                <span className="text-blush-400 font-bold tracking-widest text-sm uppercase mb-2 block">Ciencia y Suavidad</span>
                <h2 className="font-display font-black text-4xl md:text-5xl mb-8">
                   Seguridad en cada puntada
                </h2>
                
                <div className="space-y-8">
                   <div className="flex gap-4 items-start">
                      <div className="bg-wool-800 p-3 rounded-xl shrink-0">
                         <Leaf className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                         <h3 className="font-bold text-xl mb-1 text-white">Hilo de Algodón Orgánico</h3>
                         <p className="text-wool-300">Libre de pesticidas y tintes tóxicos. Seguro si tu bebé decide darle un mordisquito.</p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start">
                      <div className="bg-wool-800 p-3 rounded-xl shrink-0">
                         <Feather className="w-6 h-6 text-blush-300" />
                      </div>
                      <div>
                         <h3 className="font-bold text-xl mb-1 text-white">Relleno Hipoalergénico</h3>
                         <p className="text-wool-300">Microfibra premium que mantiene la forma tras el lavado y evita alergias.</p>
                      </div>
                   </div>

                   <div className="flex gap-4 items-start">
                      <div className="bg-wool-800 p-3 rounded-xl shrink-0">
                         <ShieldCheck className="w-6 h-6 text-blue-300" />
                      </div>
                      <div>
                         <h3 className="font-bold text-xl mb-1 text-white">Ojos de Seguridad</h3>
                         <p className="text-wool-300">Sistema de doble traba interna. Imposibles de arrancar, incluso para los más curiosos.</p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};