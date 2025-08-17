"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Mail, MapPin, Globe, Github, Linkedin, Download } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { portfolioData } from "@/lib/portfolio-data"

export function ProfileSidebar() {
  const pathname = usePathname()

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 sticky top-8">
      {/* Profile Header */}
      <div className="text-center mb-6">
        <Avatar className="w-24 h-24 mx-auto mb-4">
          <AvatarImage src="/images/alvin-profile.png" alt={portfolioData.name} />
          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold">
            {portfolioData.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h1 className="text-xl font-bold text-gray-900 mb-1">{portfolioData.name}</h1>
        <p className="text-gray-600 text-sm mb-2">{portfolioData.title}</p>
        <div className="flex items-center justify-center text-gray-500 text-sm">
          <MapPin className="w-4 h-4 mr-1" />
          {portfolioData.location}
        </div>
      </div>

      {/* Bio */}
      <div className="mb-6">
        <p className="text-gray-600 text-sm leading-relaxed">{portfolioData.about}</p>
      </div>

      {/* Skills */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {portfolioData.skills.map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Contact</h3>
        <div className="space-y-2">
          <Link
            href={`mailto:${portfolioData.contact.email}`}
            className="flex items-center text-gray-600 hover:text-blue-600 text-sm"
          >
            <Mail className="w-4 h-4 mr-2" />
            {portfolioData.contact.email}
          </Link>
          <Link
            href={portfolioData.contact.linkedin}
            target="_blank"
            className="flex items-center text-gray-600 hover:text-blue-600 text-sm"
          >
            <Linkedin className="w-4 h-4 mr-2" />
            LinkedIn
          </Link>
          <Link
            href={portfolioData.contact.github}
            target="_blank"
            className="flex items-center text-gray-600 hover:text-blue-600 text-sm"
          >
            <Github className="w-4 h-4 mr-2" />
            GitHub
          </Link>
          <Link
            href={portfolioData.contact.website}
            target="_blank"
            className="flex items-center text-gray-600 hover:text-blue-600 text-sm"
          >
            <Globe className="w-4 h-4 mr-2" />
            Website
          </Link>
        </div>
      </div>

      {/* Download CV Button */}
      <Button className="w-full" asChild>
        <Link href="/resume.pdf" target="_blank">
          <Download className="w-4 h-4 mr-2" />
          Download CV
        </Link>
      </Button>

      {/* Navigation */}
      <div className="mt-6 pt-6 border-t">
        <nav className="space-y-2">
          <Link
            href="/"
            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
              pathname === "/"
                ? "text-blue-600 bg-blue-50 font-medium"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            Resume
          </Link>
          <Link
            href="/projects"
            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
              pathname === "/projects"
                ? "text-blue-600 bg-blue-50 font-medium"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={`block px-3 py-2 text-sm rounded-lg transition-colors ${
              pathname.startsWith("/blog")
                ? "text-blue-600 bg-blue-50 font-medium"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
            }`}
          >
            Blog
          </Link>
        </nav>
      </div>
    </div>
  )
}
