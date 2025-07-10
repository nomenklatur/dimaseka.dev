import { articleCaller } from "@/lib/axios";

export async function GET() {
    try {
        const something = await articleCaller.get("/posts?depth=1&limit=5");
        return new Response(JSON.stringify(something.data?.docs), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching posts:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch posts" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}