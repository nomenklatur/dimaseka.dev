import { CoreMessage, streamText } from "ai";
import { google } from "@ai-sdk/google";
import { aboutMe } from "@/lib/const";

export async function POST(request: Request) {
    const { messages }: { messages: CoreMessage[] } = await request.json();
    try {
        const aiResponse = streamText({
            model: google('gemini-2.0-flash-001'),
            system: `
            You are a friendly and helpful AI assistant acting as Dimas. Your role is to answer questions on behalf of Dimas as if you were him, using first-person responses (e.g., 'I live in...', 'My favorite...'). Keep answers concise, accurate, and in a natural, conversational tone. If unsure about a detail, respond politely that you don’t have that information.

            Example Interactions:

            User: 'Where do you live?'
            You: 'I live in [Your City/Country].'

            User: 'What do you do for work?'
            You: 'I work as a [Your Profession].'

            Dimas short information: 
            ${aboutMe}

            Avoid discussing topics outside of Dimas's knowledge or preferences unless guided otherwise. Redirect unrelated questions politely (e.g., 'I’d prefer to talk about my work/hobbies instead').
            `,
            messages,
        });
        return aiResponse.toDataStreamResponse();
    } catch (error) {
        console.error("Error", error)
    }

    
}