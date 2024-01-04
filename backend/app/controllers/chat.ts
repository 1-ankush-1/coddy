import express from "express";
import askBuddy from "../services/gemini/query_gemini";
import chatWGemini from "../services/gemini/chat_gemini";
import askBuddyNImage from "../services/gemini/query_gemini_image";
import { message } from "../types/gemini/message";

const messages: message[] = [];

const chat = async (req: express.Request, res: express.Response) => {
  try {
    const { data, model } = req.body;
    if (!data || !model) {
      return res.status(404).send("empty query");
    }

    let result;

    if (model === "text") {
      result = await askBuddy(data);
    } else if (model === "chat") {
      result = await chatWGemini(data, messages);
    } else {
      result = await askBuddyNImage(data);
    }

    res.status(200).json({
      data: result,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("failed  ");
  }
};
export default { chat };
