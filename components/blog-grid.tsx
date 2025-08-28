import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const blogPosts = [
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
    slug: "hybrid-search-elasticsearch-milvus",
    title: "Building Hybrid Search with ElasticSearch & Milvus",
    excerpt:
      "Explore the importance of establishing a strong online presence for full stack developers. Learn how to create a compelling portfolio, engage with the developer community, and leverage social media to boost your career.",
    date: "August 28, 2025",
    tags: ["AI/ML", "Search", "Vector DB"],
    image: "/hybrid-search.png",
  },
  {
    slug: "building-agentic-ai-chatbots-autogen",
    title: "Building Agentic AI Chatbots with Autogen",
    excerpt:
      "Prepare for success in your full stack developer job interviews. Uncover common interview questions, tips for showcasing your problem-solving skills, and strategies for handling technical assessments.",
    date: "February 15, 2024",
    tags: ["AI Agents", "Chatbots", "LLM"],
    image: "/ai-chatbot-interface.png",
  },
  {
    slug: "deploying-ai-gcp-cicd",
    title: "Deploying AI on GCP with CI/CD",
    excerpt:
      "Explore the art of writing compelling cover letters for full stack developer positions. Learn how to tailor your cover letter to showcase your technical prowess and demonstrate your passion for coding.",
    date: "February 8, 2024",
    tags: ["Cloud", "DevOps", "GCP"],
    image: "/cloud-deployment-dashboard.png",
  },
  {
    slug: "llm-fine-tuning-best-practices",
    title: "LLM Fine-tuning Best Practices",
    excerpt:
      "Learn the essential elements to include in your full stack developer resume for a stand-out application. Nail down the perfect balance between showcasing skills and work experience.",
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
