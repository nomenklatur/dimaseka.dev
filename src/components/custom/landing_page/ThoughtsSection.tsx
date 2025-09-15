"use client"
import { Article } from "@/types/article.type"
import { useEffect, useState } from "react"
import axios from "axios"
import { formatToDateString } from "@/lib/datetime"
interface ThoughtsSectionProps {
  sectionRef: (element: HTMLElement | null) => void
}

export default function ThoughtsSection({ sectionRef }: ThoughtsSectionProps) {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get("/api/posts", {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log("Fetch response:", response)
        setArticles(response.data)
      } catch (error) {
        console.error("Error fetching articles:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchArticles();
  }, [])

  return (
    <section id="thoughts" ref={sectionRef} className="min-h-screen py-20 sm:py-32">
      <div className="space-y-12 sm:space-y-16">
        <h2 className="text-3xl sm:text-4xl font-light">Recent Thoughts</h2>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {isLoading && (
            <div>Loading...</div>
          )
          }
          {articles.map((post, index) => (
            <article
              key={index}
              className="group p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg cursor-pointer"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                  <span>{formatToDateString(post.publishedDate)}</span>
                  <span>{post.readTime} MIN</span>
                </div>

                <h3 className="text-lg sm:text-xl font-medium group-hover:text-muted-foreground transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed line-clamp-5">{post.excerpt}</p>

                <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
