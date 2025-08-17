import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { blogContent } from "@/lib/blog-data"

interface BlogPostProps {
  slug: string
}

export function BlogPost({ slug }: BlogPostProps) {
  const post = blogContent[slug]

  const blogSlugs = Object.keys(blogContent)
  const currentIndex = blogSlugs.indexOf(slug)
  const previousSlug = currentIndex > 0 ? blogSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < blogSlugs.length - 1 ? blogSlugs[currentIndex + 1] : null
  const previousPost = previousSlug ? blogContent[previousSlug] : null
  const nextPost = nextSlug ? blogContent[nextSlug] : null

  if (!post) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-4">The blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
      {/* Hero Image */}
      <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-64 object-cover" />

      {/* Content */}
      <div className="p-6">
        {/* Back Button */}
        <Button variant="ghost" size="sm" className="mb-4" asChild>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Meta */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-1" />
          {post.date}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>

        {/* Tags */}
        <div className="flex gap-2 mb-6">
          {post.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Content */}
        <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t">
          {previousPost ? (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/blog/${previousSlug}`}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous Post
              </Link>
            </Button>
          ) : (
            <div></div>
          )}

          {nextPost ? (
            <Button variant="outline" size="sm" asChild>
              <Link href={`/blog/${nextSlug}`}>
                Next Post
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  )
}
