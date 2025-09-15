import axios from "axios";

export async function GET() {
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_AUTHOR_BASE_URL}/api/posts?depth=1&limit=4`);
        return new Response(JSON.stringify(res.data?.docs), {
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