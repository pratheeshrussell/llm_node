import path from "path";
import { fileURLToPath } from "url";
import { HumanMessage, SystemMessage } from "langchain/schema";
import { ChatLlamaCpp } from 'langchain/chat_models/llama_cpp';

const chatModel = async ()=>{
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const modelPath = path.join(__dirname, "..","models", "dolphin-2_6-phi-2.Q4_K_M.gguf")
    const model = new ChatLlamaCpp({
        modelPath:modelPath,
        threads:4,
        maxTokens:2048,
        temperature: 0.7
    });

    const systemMessage="You are a creative shortstory teller";
    const q1 = "Tell me a short story about a dragon";
    console.log("User: " + q1);

    const res = await model.invoke([
        new SystemMessage(systemMessage),
        new HumanMessage(q1)
    ]);
    console.log("AI: " + JSON.stringify(res.content));
};

export default chatModel;