import React from 'react';
import { Droplets, Sun, Wind, Heart } from 'lucide-react';

export const CareGuide: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white via-violet-500/5 to-rosa-300/10 border-y border-violet-300/20">
       <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
             <div className="lg:w-1/3">
                <h2 className="font-display font-black text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-violet-100 to-rosa-200 mb-4">Amigos para Siempre</h2>
                <p className="text-wool-600 mb-6">
                   Los amigurumis de Arawi están hechos para durar, pero un poco de cariño extra los mantendrá como nuevos por años.
                </p>
                <button className="text-violet-100 font-bold underline decoration-dotted hover:text-rosa-200 transition-colors">
                   Descargar Guía PDF Completa
                </button>
             </div>

             <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Droplets, title: "Lavar a Mano", text: "Agua fría y jabón neutro.", color: "text-aqua-300" },
                  { icon: Wind, title: "Secar al Aire", text: "A la sombra, nunca secadora.", color: "text-lavanda-400" },
                  { icon: Sun, title: "No Exprimir", text: "Presiona suavemente con toalla.", color: "text-peach-500" },
                  { icon: Heart, title: "Mucho Amor", text: "Abrazar diariamente.", color: "text-rosa-200" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl text-center border border-violet-300/20 hover:border-rosa-200/50 transition-colors">
                     <item.icon className={`w-8 h-8 mx-auto ${item.color} mb-3`} />
                     <h3 className="font-bold text-wool-800 text-sm mb-1">{item.title}</h3>
                     <p className="text-xs text-wool-600">{item.text}</p>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};