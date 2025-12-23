import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: "Clara M.",
    text: "Mi hijo no suelta a su Dino Roco ni para dormir. La calidad es excepcional.",
    img: "https://image.pollinations.ai/prompt/baby%20hugging%20green%20dinosaur%20amigurumi%20toy%20sleeping%20soft%20light?width=300&height=400&nologo=true&seed=501",
    item: "Dino Roco"
  },
  {
    name: "Roberto F.",
    text: "Un regalo de bautizo que destacó entre todos. El empaque es hermoso.",
    img: "https://image.pollinations.ai/prompt/hands%20holding%20open%20gift%20box%20with%20crochet%20bear%20inside%20party?width=300&height=300&nologo=true&seed=502",
    item: "Oso Koda"
  },
  {
    name: "Lucía P.",
    text: "¡La Llama Pacha es más suave de lo que imaginaba! Llegó en 2 días a Lima.",
    img: "https://image.pollinations.ai/prompt/crochet%20llama%20toy%20on%20shelf%20scandinavian%20nursery%20decor?width=300&height=350&nologo=true&seed=503",
    item: "Llamita Pacha"
  },
  {
    name: "Ana S.",
    text: "Me encanta que sea algodón orgánico. Mi bebé tiene piel sensible y esto es perfecto.",
    img: "https://image.pollinations.ai/prompt/happy%20baby%20playing%20with%20blue%20crochet%20octopus%20on%20rug?width=300&height=300&nologo=true&seed=504",
    item: "Pulpo Mare"
  }
];

export const LoveWall: React.FC = () => {
  return (
    <section className="py-24 bg-[#fdfbf7]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <h2 className="font-display font-black text-4xl md:text-5xl text-wool-900 mb-4">Muro de Amor</h2>
           <p className="text-wool-600">Pequeñas historias de grandes amistades.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
           {REVIEWS.map((review, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="break-inside-avoid bg-white p-4 rounded-xl shadow-lg border border-wool-100 hover:shadow-xl transition-shadow"
             >
                <div className="rounded-lg overflow-hidden mb-4 bg-gray-100 min-h-[150px]">
                   <img 
                      src={review.img} 
                      alt="Cliente" 
                      className="w-full object-cover hover:scale-105 transition-transform duration-500" 
                      loading="lazy"
                   />
                </div>
                <div className="flex text-yellow-400 mb-2">
                   {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-current" />)}
                </div>
                <p className="text-wool-700 italic text-sm mb-4">"{review.text}"</p>
                <div className="flex justify-between items-center text-xs">
                   <span className="font-bold text-wool-900">{review.name}</span>
                   <span className="text-blush-400 bg-blush-50 px-2 py-1 rounded-md">{review.item}</span>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};