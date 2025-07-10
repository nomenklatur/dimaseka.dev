
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FeaturedPost from "@/components/custom/blog/FeaturedPost";
import { ArrowLeft } from "lucide-react";
import { formatToDateString } from "@/lib/datetime";
import Link from "next/link";
import axios from "axios";

const getPosts = async () => {
    const resp = await axios.get("https://author-dimaseka-dev.vercel.app/api/posts");
    return resp.data?.docs;
}

const Index = async () => {
  const posts = await getPosts();
  const sampleImage = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1470&auto=format&fit=crop";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-5xl">
        <Link href="/" className="flex gap-2 items-center mb-8 text-gray-400">
            <ArrowLeft className="w-5 h-5 text-gray-800" />
            Back to Home
        </Link>
        {/* Hero Section */}
        <section className="mb-16">
        
          <h1 className="font-playfair-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Thoughts & Ideas
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            Exploring design, technology, and the spaces in between through thoughtfully crafted essays.
          </p>
        </section>

        {/* Featured Post */}
        <section className="mb-16">
          <h2 className="text-lg font-medium text-gray-500 mb-6">Featured Post</h2>
            <FeaturedPost post={posts[0]} />
        </section>
        
        {/* Categories */}
        <section className="mb-10">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-white hover:bg-gray-50 cursor-pointer">
              All
            </Badge>
            <Badge variant="outline" className="bg-white hover:bg-gray-50 cursor-pointer">
              Design
            </Badge>
            <Badge variant="outline" className="bg-white hover:bg-gray-50 cursor-pointer">
              Technology
            </Badge>
            <Badge variant="outline" className="bg-white hover:bg-gray-50 cursor-pointer">
              Culture
            </Badge>
            <Badge variant="outline" className="bg-white hover:bg-gray-50 cursor-pointer">
              Business
            </Badge>
          </div>
        </section>
        
        {/* Blog Posts */}
        <section className="mb-16">
          <h2 className="text-lg font-medium text-gray-500 mb-6">Recent Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1, posts.length).map((post: any) => (
              <Card key={post.id} className="border-none shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="p-0">
                    <img 
                      src={ post.featuredImage?.url ? `${process.env.NEXT_PUBLIC_AUTHOR_BASE_URL}${post.featuredImage.url}` : sampleImage} 
                      alt={post.title} 
                      className="w-full h-52 object-cover"
                    />
                </CardHeader>
                <CardContent className="pt-6 px-6">
                  <div className="flex gap-2 mb-3">
                    {post.postCategories.map((category:any, index: number) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100 text-gray-600 hover:bg-gray-200">
                        {category.title}
                      </Badge>
                    ))}
                  </div>
                    <h3 className="text-xl font-playfair-display font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-2">
                  <div className="flex justify-between items-center w-full">
                    <div className="text-sm text-gray-500">{formatToDateString(post.createdAt)}</div>
                    <Link href={`/blogs/${post.slug}`}>
                      <Button variant="ghost" className="text-gray-600 p-0 hover:text-gray-900 hover:bg-transparent cursor-pointer">
                        Read more
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        
        <div className="flex justify-center">
          <Button variant="outline" className="border border-gray-300">
            Load more articles
          </Button>
        </div>
      </main>
      
      
    </div>
  );
};

export default Index;
