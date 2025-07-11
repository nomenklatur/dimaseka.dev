import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Bookmark, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { formatToDateString } from "@/lib/datetime";
import { Metadata } from "next";
import Link from "next/link";
import { LexicalRenderer } from "@/components/custom/blog/LexicalRenderer";
import { Article } from "@/types/article.type";
import axios from "axios";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

const getPostBySlug = async (slug: string): Promise<Article> => {
    const resp = await axios.get(`${process.env.NEXT_PUBLIC_AUTHOR_BASE_URL}/api/posts?where[slug][equals]=${slug}&depth=1`);
    return resp.data?.docs[0] as Article;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const pageParams = await params;
  const post = await getPostBySlug(pageParams.slug);
  return {
    title: post?.title || 'Blog by Dimas',
    description: post?.excerpt || '',
    openGraph: {
      images: {
        url: post?.featuredImage?.url || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop"
      },
      title: post?.title,
      description: post?.excerpt,
    },
  };
}

const ArticlePage = async ({ params }: ArticlePageProps) => {
    const pageParams = await params;
    const post = await getPostBySlug(pageParams.slug);
    const sampleImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop";

    if (!post) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen">
          <h1 className="text-2xl font-serif mb-4">Post not found</h1>
          <Link href="/blogs">
            <Button variant="outline">Go back to blog</Button>
          </Link>
        </div>
      );
    }

    return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back navigation */}
        <Link href={"/blogs"}>
          <div className="mb-8 flex items-center cursor-pointer">
              <ArrowLeft size={18} className="mr-1" />
              <span>Back to all articles</span>
          </div>
        </Link>
        
        {/* Article header */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {post.postCategories?.map((category: any) => (
              <Badge key={category.id} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                {category.title}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-relaxed font-figtree">
            {post.title}
          </h1>
          
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={`/images/me.jpg`} alt={post.author} />
                <AvatarFallback>{post.author}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.author}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar size={14} className="mr-1" />
                  <span>{formatToDateString(post.publishedDate)} · {post.readTime} min read</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                size="sm"
                className="text-gray-500"
              >
                <Share size={16} className="mr-1" />
                Share
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="text-gray-500"
              >
                <Bookmark size={16} className="mr-1" />
                Save
              </Button>
            </div>
          </div>
        </div>
        
        {/* Cover image */}
        <div className="mb-10 rounded-xl overflow-hidden relative">
          <AspectRatio ratio={16/9}>
            <img 
              src={post.featuredImage?.url ? `${process.env.NEXT_PUBLIC_AUTHOR_BASE_URL}${post?.featuredImage?.url}` : sampleImage} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
        
        {/* Article body with full content */}
        <div className="prose prose-lg max-w-none">
          {/* For the demo, we'll generate some sample content */}
          <p className="text-lg font-medium text-gray-800 mb-6">{post.excerpt}</p>
          <div className="prose max-w-none">
            <LexicalRenderer data={post.content} />
          </div>
        </div>
        
        {/* Article footer */}
        <Separator className="my-10" />
        
        {/* Author info */}
        <div className="bg-gray-50 rounded-xl p-6 mb-10">
          <div className="flex items-start">
            <Avatar className="w-16 h-16 mr-6">
              <AvatarImage src={`/images/me.jpg`} alt={post.author} />
              <AvatarFallback>{post.author}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-lg mb-2">About {post.author}</h3>
              <p className="text-gray-600 mb-4">
                Software engineer with a passion for building clean, efficient, and thoughtful digital experiences. Focused on the intersection of technology, problem-solving, and purposeful development.
              </p>
              <Link href={"https://www.linkedin.com/in/masdimasekaputra/"} target="_blank">
                <Button variant="outline" size="sm" className="cursor-pointer">
                  More from this author
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Comments section placeholder */}
        {/* <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl font-semibold">Comments (5)</h3>
            <Button>
              <MessageSquare size={16} className="mr-1" />
              Add Comment
            </Button>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex items-center mb-2">
                <Avatar className="w-8 h-8 mr-3">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1887&auto=format&fit=crop" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">James Davies</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
              <p className="text-gray-700">
                Great article! I especially appreciate the point about using typography as a design element. It's something that's often overlooked but can make such a big difference.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex items-center mb-2">
                <Avatar className="w-8 h-8 mr-3">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop" />
                  <AvatarFallback>SL</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-sm">Sarah Lin</p>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
              </div>
              <p className="text-gray-700">
                I've been implementing some of these principles in my recent projects and the difference in user engagement has been noticeable. Would love to see a follow-up article on how to apply these principles specifically to mobile interfaces.
              </p>
            </div>
            
            <Button variant="outline" className="w-full">Load more comments</Button>
          </div>
        </div> */}
        
        {/* Related articles */}
        {/* <div>
          <h3 className="font-serif text-xl font-semibold mb-6">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.filter(relatedPost => 
              relatedPost.id !== post.id && 
              relatedPost.categories.some(cat => post.categories.includes(cat))
            ).slice(0, 2).map((relatedPost) => (
              <Link 
                to={`/blog/${relatedPost.slug}`} 
                key={relatedPost.id}
                className="group"
              >
                <div className="flex space-x-4">
                  <img 
                    src={relatedPost.coverImage} 
                    alt={relatedPost.title}
                    className="w-24 h-24 rounded-md object-cover flex-shrink-0"
                  />
                  <div>
                    <h4 className="font-serif font-medium text-gray-900 mb-1 group-hover:text-gray-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-500 line-clamp-2">{relatedPost.excerpt}</p>
                    <p className="text-xs text-gray-400 mt-1">{relatedPost.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div> */}
      </main>
      
    </div>
  );
}

export default ArticlePage;