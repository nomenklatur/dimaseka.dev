import { Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Articles = () => {
  const articles = [
    {
      title: "Building Scalable React Applications with TypeScript",
      excerpt: "Learn best practices for structuring large React applications with TypeScript for better maintainability and developer experience.",
      date: "March 15, 2024",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Architecture"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
    },
    {
      title: "Microservices Architecture: When and Why",
      excerpt: "Exploring the benefits and challenges of microservices architecture and when it makes sense for your project.",
      date: "February 28, 2024",
      readTime: "12 min read",
      tags: ["Architecture", "Backend", "DevOps"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop"
    },
    {
      title: "Optimizing Web Performance: A Developer's Guide",
      excerpt: "Comprehensive guide to improving web application performance through code optimization, caching strategies, and modern tooling.",
      date: "February 10, 2024",
      readTime: "10 min read",
      tags: ["Performance", "Optimization", "Web"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop"
    },
    {
      title: "State Management in Modern React Apps",
      excerpt: "Comparing different state management solutions and choosing the right one for your React application's needs.",
      date: "January 25, 2024",
      readTime: "15 min read",
      tags: ["React", "State Management", "Frontend"],
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop"
    },
    {
      title: "Docker in Production: Best Practices",
      excerpt: "Essential Docker practices for deploying containerized applications safely and efficiently in production environments.",
      date: "January 12, 2024",
      readTime: "11 min read",
      tags: ["Docker", "DevOps", "Production"],
      image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=400&h=200&fit=crop"
    },
    {
      title: "API Design Principles for Better Developer Experience",
      excerpt: "Creating intuitive and well-documented APIs that developers love to work with through thoughtful design principles.",
      date: "December 28, 2023",
      readTime: "9 min read",
      tags: ["API", "Design", "Backend"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop"
    }
  ];

  return (
    <section id="articles" className="py-20 w-screen px-8 overflow-hidden">
      <div className="max-w-6xl">
        <div className="text-start mb-16">
          <h2 className="text-lg md:text-3xl font-semibold leading-relaxed mb-6">Latest Articles</h2>
          <p className="text-sm md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-figtree">
            Sharing insights and experiences from the world of software development.
            Stay updated with the latest trends and best practices.
          </p>
        </div>

        <div>
          <div className="flex animate-marquee space-x-6 hover:pause-marquee">
            {[...articles, ...articles].map((article, index) => (
              <Card key={index} className="flex-shrink-0 w-80 hover-scale border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <ExternalLink className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date} • {article.readTime}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;