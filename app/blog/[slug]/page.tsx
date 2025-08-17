import { ProfileSidebar } from "@/components/profile-sidebar"
import { BlogPost } from "@/components/blog-post"
import { blogContent } from "@/lib/blog-data"

export async function generateStaticParams() {
  return Object.keys(blogContent).map((slug) => ({
    slug: slug,
  }))
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Sidebar */}
          <div className="lg:col-span-4">
            <ProfileSidebar />
          </div>

          {/* Blog Post Content */}
          <div className="lg:col-span-8">
            <BlogPost slug={slug} />
          </div>
        </div>
      </div>
    </div>
  )
}
