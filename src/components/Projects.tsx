import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/content";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            building great software
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 stagger-children">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover-lift hover:shadow-xl transition-shadow">
      {/* Project Image */}
      <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
        <div className="text-white text-center px-4">
          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
          <p className="text-sm opacity-90">Project Preview</p>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors text-sm"
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-dark-600 dark:text-dark-300 hover:text-dark-900 dark:hover:text-white transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
