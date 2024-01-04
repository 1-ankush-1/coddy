import { GoogleGenerativeAI } from "@google/generative-ai";
const fs = require("fs");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY as string);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path:string, mimeType:string) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType
    },
  };
}

async function askBuddyNImage(prompt:string) { 
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const imageParts = [
    fileToGenerativePart("public/images/tudum.jpg", "image/jpeg"),
    // fileToGenerativePart("image2.jpeg", "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = result.response;
  const text = response.text();
  return text;
}

module.exports =  askBuddyNImage;