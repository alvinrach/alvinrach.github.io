import { portfolioData } from "@/lib/portfolio-data"

export function AboutSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">About Me</h2>
      <p className="text-gray-600 leading-relaxed">{portfolioData.about}</p>
    </div>
  )
}
