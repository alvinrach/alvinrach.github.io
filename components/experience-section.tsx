import { Briefcase } from "lucide-react"
import { portfolioData } from "@/lib/portfolio-data"

export function ExperienceSection() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
        <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
        Experience
      </h2>
      <div className="space-y-6">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="relative">
            {index !== portfolioData.experience.length - 1 && (
              <div className="absolute left-6 top-12 w-0.5 h-full bg-gray-200"></div>
            )}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                  <span className="text-sm text-gray-500">{exp.dates}</span>
                </div>
                <p className="text-blue-600 font-medium mb-3">{exp.company}</p>
                <ul className="space-y-1">
                  {exp.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
