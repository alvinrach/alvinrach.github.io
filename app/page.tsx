import { ProfileSidebar } from "@/components/profile-sidebar"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { ActivitiesSection } from "@/components/activities-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Profile Sidebar */}
          <div className="lg:col-span-4">
            <ProfileSidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            <ExperienceSection />
            <EducationSection />
            <ActivitiesSection />
          </div>
        </div>
      </div>
    </div>
  )
}
