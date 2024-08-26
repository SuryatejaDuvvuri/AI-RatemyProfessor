import { NextResponse } from 'next/server'
import { Pinecone } from '@pinecone-database/pinecone'
import OpenAI from 'openai'
import axios from 'axios';
import cheerio from 'cheerio';
import { HfInference } from "@huggingface/inference";

const systemPrompt = `
You are a rate my professor agent to help students find classes, that takes in user questions and answers them.
For every user question, the top 3 professors that match the user question are returned.
Use them to answer the question if needed.
`

export async function POST(req) {
    const {url} = await req.json()
    // const {data} = await axios.get(url)
    // const x = cheerio.load(data)

    console.log(url)

//     const reviews = []
//     const hf = new HfInference("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");
//     const pc = new Pinecone({
//       apiKey:"16350194-749d-46a6-89d4-0999aad3b386"
//     })
//     const index = pc.index('rag').namespace('ns1')
//     const openai = new OpenAI({
//       baseURL: "https://openrouter.ai/api/v1",
//       apiKey: "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",
//       dangerouslyAllowBrowser: true
//     })
// const model_name = "sentence-transformers/all-MiniLM-L6-v2";

// const embed_model = "text-embedding-3-small";
// const text = data[data.length - 1].content
// const embeddings = await hf.featureExtraction({
//     model: "sentence-transformers/all-MiniLM-L6-v2",
//     inputs: text,
//   })

//   const embedding = embeddings.flat();  // Flatten the embedding if necessary

//   if (embedding.length !== 384) {
//       throw new Error(`Embedding dimension mismatch. Expected 384, got ${embedding.length}`);
//   }

// const results = await index.query({
//   topK: 5,
//   includeMetadata: true,
//   vector: embedding
// })


// let resultString = ''
// results.matches.forEach((match) => {
// resultString += `
// Returned Results:
// Professor: ${match.id}
// Review: ${match.metadata.stars}
// Subject: ${match.metadata.subject}
// Stars: ${match.metadata.stars}
// \n\n`
// })

//   const lastMessage = data[data.length - 1]
//   const lastMessageContent = lastMessage.content + resultString
//   const lastDataWithoutLastMessage = data.slice(0, data.length - 1)

//   const completion = await openai.chat.completions.create({
//       messages: [
//         {role: 'system', content: systemPrompt},
//         ...lastDataWithoutLastMessage,
//         {role: 'user', content: lastMessageContent},
//       ],
//       model: 'meta-llama/llama-3.1-8b-instruct:free',
//       stream: true,
// })

// const stream = new ReadableStream({
//     async start(controller) {
//     const encoder = new TextEncoder()
//     try {
//         for await (const chunk of completion) {
//         const content = chunk.choices[0]?.delta?.content
//         if (content) {
//             const text = encoder.encode(content)
//             controller.enqueue(text)
//         }
//         }
//     } catch (err) {
//         controller.error(err)
//     } finally {
//         controller.close()
//     }
//     },
// })
    return new NextResponse(null)
}