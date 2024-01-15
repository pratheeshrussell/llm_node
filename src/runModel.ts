import { fileURLToPath } from "url";
import path from "path";
import { LlamaModel, LlamaContext, LlamaChatSession, LlamaGrammar, LLamaChatPromptOptions, LlamaChatPromptWrapper } from "node-llama-cpp";

const runModel = async ()=>{
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    const model = new LlamaModel({
        modelPath: path.join(__dirname, "..","models", "dolphin-2_6-phi-2.Q4_K_M.gguf"),
        threads: 4,
    });
    // Set return format
    // const grammar = await LlamaGrammar.getFor("json");
    const context = new LlamaContext({ model,seed:1234234 });
    const session = new LlamaChatSession({ 
        context });

    // Options passed to prompt
    const promptOpts: LLamaChatPromptOptions = {
        temperature:1,
        maxTokens: context.getContextSize()};

    const q1 = "Tell me a short story about a dragon";
    console.log("User: " + q1);

    const a1 = await session.prompt(q1, promptOpts);
    console.log("AI: " + a1);
}

export default runModel;