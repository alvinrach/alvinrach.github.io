import { ProfileSidebar } from "@/components/profile-sidebar"
import { BlogGrid } from "@/components/blog-grid"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Sidebar */}
          <div className="lg:col-span-4">
            <ProfileSidebar />
          </div>

          {/* Blog Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">Blog</h1>
              <BlogGrid />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
