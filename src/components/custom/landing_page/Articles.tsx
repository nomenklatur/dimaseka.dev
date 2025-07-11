"use client";
import { Calendar, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Article } from "@/types/article.type";
import Link from "next/link";
import axios from "axios";
import { formatToDateString } from "@/lib/datetime";

const Articles = () => {

  const [fetchedArticles, setFetchedArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get(`/api/posts`);
        setFetchedArticles(response.data as Article[] || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    }
    fetchArticles();
  }, [])

  return (
    <section id="articles" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Latest Articles</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing insights and experiences from the world of software development.
            Stay updated with the latest trends and best practices.
          </p>
        </div>

        {/* Unique layout for 3 articles */}
        {
          fetchedArticles.length > 0 ? (
            <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
              {/* Featured article - takes full width on mobile, left half on desktop */}
              <Card className="lg:row-span-2 hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={`https://author-dimaseka-dev.vercel.app${fetchedArticles[0].featuredImage?.url}`}
                    alt={fetchedArticles[0].title}
                    className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatToDateString(fetchedArticles[0].publishedDate)} • {fetchedArticles[0].readTime} min read
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {fetchedArticles[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 font-figtree">
                    {fetchedArticles[0].excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {fetchedArticles[0].postCategories?.map((category, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {category.title}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Right column with 2 smaller articles */}
              <div className="space-y-6">
                {fetchedArticles.slice(1, fetchedArticles.length).map((article, index) => (
                  <Card key={index + 1} className="hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                    <div className="flex">
                      <div className="relative overflow-hidden w-32 flex-shrink-0">
                        <img
                          src={`https://author-dimaseka-dev.vercel.app${article.featuredImage?.url}`}
                          alt={article.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2">
                          <ExternalLink className="w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                      
                      <CardContent className="p-4 flex-1">
                        <div className="flex items-center text-xs text-muted-foreground mb-2">
                          <Calendar className="w-3 h-3 mr-1" />
                          {formatToDateString(article.publishedDate)} • {article.readTime} min read
                        </div>
                        
                        <h3 className="text-sm font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {article.title}
                        </h3>
                        
                        <p className="text-muted-foreground text-xs mb-3 line-clamp-2 font-figtree">
                          {article.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1">
                          {article.postCategories.slice(0, 2).map((category, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs px-2 py-1">
                              {category.title}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link href="/blogs">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
                >
                  View All Articles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            </>
          ) : (
            <div className="text-center text-muted-foreground">
              <p>No Articles to Show</p>
            </div>
          )
        }
      </div>
    </section>
  );
};

export default Articles;