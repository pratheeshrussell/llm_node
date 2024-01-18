# LLM Node
Using [node-llama-cpp](https://withcatai.github.io/node-llama-cpp/)  

## Model
Add a gguf model to the models folder   
Tried   
* [TheBloke/dolphin-2_6-phi-2-GGUF](https://huggingface.co/TheBloke/dolphin-2_6-phi-2-GGUF)  

## running the code
```
npm run start
```

## Running the model in chat mode from commandline
After installing the dependencies  
```
npx --no node-llama-cpp chat --model ./models/dolphin-2_6-phi-2.Q4_K_M.gguf
```

## Version
* Node: V18.12.0
