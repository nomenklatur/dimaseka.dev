import { articleCaller } from "@/lib/axios";
export async function GET({ params }: { params: { slug: string } }) {
    try {
        const post = await articleCaller.get(`/posts?where[slug][equals]=${params}&depth=1`);
        return new Response(JSON.stringify(post.data), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Error fetching post by slug:", error);
        return new Response(JSON.stringify({ error: "Post not found" }), {
            status: 404,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}