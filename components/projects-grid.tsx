import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import { portfolioData } from "@/lib/portfolio-data"

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {portfolioData.projects.map((project, index) => (
        <div key={index} className="bg-gray-50 rounded-xl p-6 border hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">{project.title.charAt(0)}</span>
            </div>
            <Badge variant="secondary" className="text-xs">
              {index < 2 ? "Featured" : "Project"}
            </Badge>
          </div>

          <h3 className="font-semibold text-gray-900 mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{project.description}</p>

          <div className="flex gap-2">
            {project.links.github && (
              <Button size="sm" variant="outline" asChild>
                <Link href={project.links.github} target="_blank">
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Link>
              </Button>
            )}
            {project.links.details ? (
              <Button size="sm" variant="ghost" asChild>
                <Link href={project.links.details} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Details
                </Link>
              </Button>
            ) : (
              <Button size="sm" variant="ghost" disabled>
                <ExternalLink className="w-4 h-4 mr-1" />
                Details
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
