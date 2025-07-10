
import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Article } from "@/types/article.type";
import { formatToDateString } from "@/lib/datetime";
import Link from "next/link";

interface FeaturedPostProps {
  post: Article;
}

const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
      <div className="md:col-span-3 order-2 md:order-1">
        <div className="flex gap-2 mb-4">
          {post.postCategories.map((category) => (
            <Badge key={category.id} variant="secondary" className="bg-gray-100 text-gray-600">
              {category.title}
            </Badge>
          ))}
        </div>
        <h2 className="font-playfair-display text-3xl font-semibold mb-4">{post.title}</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/images/me.jpg"
              alt={post.author}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-sm">{post.author}</div>
              <div className="text-xs text-gray-500">{formatToDateString(post.publishedDate)} · {post.readTime} min read</div>
            </div>
          </div>
          <Link href={`/blogs/${post.slug}`}>
            <Button>Read article</Button>
          </Link>
        </div>
      </div>
      <div className="md:col-span-2 order-1 md:order-2">
        <img 
          src={`https://author-dimaseka-dev.vercel.app${post.featuredImage?.url}`} 
          alt={post.title} 
          className="w-full h-64 md:h-80 object-cover rounded-md"
        />
      </div>
    </div>
  );
};

export default FeaturedPost;
