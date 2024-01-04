import { message } from "../../types/gemini/message";
import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const MODEL_NAME = process.env.MODEL_NAME;
const API_KEY = process.env.API_KEY;

async function chatWGemini(newMsg: string, messages: message[]) {
  const genAI = new GoogleGenerativeAI(API_KEY as string);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME as string });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 2048,
  };

  const safetySettings = [
    //if put some restriction on model
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_NONE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: messages.map((msg) => {
      return {
        //new object to store history
        role: msg.role,
        parts: msg.parts
          .map((part) => {
            part.text;
          })
          .join(),
      };
    }),
  });

  const result = await chat.sendMessage(newMsg);
  const response = result.response;
  const hist = await chat.getHistory();
  console.log(hist[0], hist[1]);

  return response.text();
}

module.exports = chatWGemini;
