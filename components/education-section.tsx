import { GraduationCap } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function EducationSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
        <GraduationCap className="w-6 h-6 mr-2 text-purple-600" />
        Education
      </h2>
      <div className="space-y-4">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                <span className="text-sm text-gray-500">{edu.dates}</span>
              </div>
              <p className="text-purple-600 font-medium">{edu.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
