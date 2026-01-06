
import { GoogleGenAI } from "@google/genai";

/**
 * Provides interior design advice using Gemini 3 Flash.
 * Follows strict SDK guidelines for initialization and content generation.
 */
export const getDesignAdvice = async (prompt: string, imageBase64?: string): Promise<string> => {
  // Always use a named parameter for apiKey and use process.env.API_KEY directly.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const parts: any[] = [];
    
    // Add text prompt
    if (prompt) {
      parts.push({ text: prompt });
    }

    // Add image data if provided
    if (imageBase64) {
      parts.push({
        inlineData: {
          mimeType: 'image/jpeg',
          data: imageBase64
        }
      });
      // Ensure there's a text prompt if only an image is uploaded
      if (!prompt) {
        parts.unshift({ text: "Analyze this room and provide design advice consistent with Nikita's minimalist and functional style." });
      }
    }

    // Default message if inputs are somehow missing
    if (parts.length === 0) {
      parts.push({ text: "Hello! How can I help with your design project today?" });
    }

    // Use ai.models.generateContent directly with model name and contents
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: { parts },
      config: {
        systemInstruction: "You are an AI assistant for Nikita's Interior Design Portfolio. You represent Nikita's professional style: minimalist, functional, and modern. Answer questions about interior design, materials, and layouts. Keep answers concise and sophisticated. If someone asks about Nikita, mention he has 3 years of experience and is 22 years old, based in a modern design context.",
        temperature: 0.7,
      },
    });

    // Directly access the .text property (not a method)
    return response.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The AI consultant is currently contemplating new designs. Please try again in a moment.";
  }
};
