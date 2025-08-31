import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    slug: "building-agentic-ai-chatbots-langgraph",
    title: "Building Agentic AI Chatbots with LangGraph",
    excerpt:
      "Discover how to design intelligent chatbots that can reason, generate, and execute tasks autonomously using LangGraph, enabling more dynamic and practical AI applications.",
    date: "August 31, 2025",
    tags: ["AI Agents", "Chatbots", "LLM"],
    image: "/ai-chatbot-interface.png",
  },
  {
    slug: "hybrid-search-elasticsearch-milvus",
    title: "Building Hybrid Search with ElasticSearch & Milvus",
    excerpt:
      "Learn how to combine vector and keyword search to deliver more accurate and efficient retrieval systems, and understand why hybrid approaches are becoming essential in modern data-driven applications.",
    date: "August 28, 2025",
    tags: ["AI/ML", "Search", "Vector DB"],
    image: "/hybrid-search.png",
  },
  {
    slug: "from-jupyter-to-production",
    title: "From Jupyter to Production: How to Use Classes and Packages for Data Science Projects",
    excerpt:
      "Discover best practices for structuring your data science code, organizing reusable components, and transitioning smoothly from experimentation in notebooks to scalable, maintainable production systems.",
    date: "March 23, 2023",
    tags: ["Notebook", "Data Science", "Python"],
    image: "/notebook-class.png",
  },
  {
    slug: "why-ai-would-never-eliminate-any-job",
    title: "Why AI Would Never Eliminate Any Job",
    excerpt:
      "Understand why artificial intelligence is more likely to transform the way we work, creating new opportunities and redefining roles, rather than completely eliminating human jobs.",
    date: "March 4, 2023",
    tags: ["Future of Work", "AI and Jobs", "Career Development"],
    image: "/ai-never-replace.png",
  },
  {
    slug: "deploying-ai-gcp-cicd",
    title: "Deploying AI on GCP with CI/CD",
    excerpt:
      "Learn how to automate model deployment on Google Cloud Platform using CI/CD pipelines, ensuring faster iteration, reliability, and scalability for your AI applications.",
    date: "February 8, 2024",
    tags: ["Cloud", "DevOps", "GCP"],
    image: "/cloud-deployment-dashboard.png",
  },
  {
    slug: "llm-fine-tuning-best-practices",
    title: "LLM Fine-tuning Best Practices",
    excerpt:
      "Explore effective strategies for preparing datasets, choosing the right parameters, and optimizing large language models to achieve reliable, high-quality results in real-world applications.",
    date: "February 1, 2024",
    tags: ["LLM", "Fine-tuning", "AI/ML"],
    image: "/machine-learning-training.png",
  },
]

export function BlogGrid() {
  return (
    <div className="space-y-6">
      {blogPosts.map((post) => (
        <article
          key={post.slug}
          className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition-shadow w-full max-w-2xl min-w-[280px] mx-auto"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-1/3">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 lg:h-32 object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-2/3">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-lg">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button size="sm" variant="ghost" asChild>
                  <Link href={`/blog/${post.slug}`}>
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
