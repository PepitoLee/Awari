import { GoogleGenAI } from "@google/genai";
import { Product } from '../types';

// Initialize Gemini Client
const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateProductStory = async (product: Product): Promise<string> => {
  if (!apiKey) {
    return "Por favor configura tu API_KEY para ver la magia de Arawi.";
  }

  try {
    const model = 'gemini-3-flash-preview';
    
    const prompt = `
      Actúa como un narrador de cuentos infantiles mágicos y poéticos.
      Escribe una historia muy breve (máximo 80 palabras), cálida y conmovedora sobre un amigurumi llamado "${product.name}".
      
      Detalles del personaje:
      - Es de la categoría: ${product.category}
      - Descripción base: ${product.description}
      
      La historia debe darle una personalidad única, explicar su "misión" mágica en el mundo (ej: proteger sueños, dar abrazos, traer sol) y tener un tono suave, como de cuento de hadas. No uses markdown, solo texto plano.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Flash model usually doesn't need high thinking for this creative task, keeping it fast.
      }
    });

    return response.text || "La magia está descansando un momento...";
  } catch (error) {
    console.error("Error generating story:", error);
    return "Nuestros duendes narradores están en un descanso. Intenta más tarde.";
  }
};