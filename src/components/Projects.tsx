import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { projects } from "@/data/content";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="section-shell">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <h2 className="section-title mb-4">
            Featured Projects
          </h2>
          <p className="section-description max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for
            building great full stack
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 stagger-soft">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200 font-semibold transition-colors"
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
    <div className="group elegant-card elegant-card-hover overflow-hidden relative">
      {/* Project Image */}
      <Link href={`/projects/${project.slug}`} className="block">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} - Project Preview`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Hover overlay with Live Demo button */}
          {project.live && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="inline-flex items-center px-6 py-3 bg-white text-dark-900 font-semibold rounded-xl group-hover:bg-primary-50 transition-colors">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Details
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Project Info */}
      <div className="p-6">
        <Link href={`/projects/${project.slug}`} className="block">
          <h3 className="text-xl font-bold tracking-tight text-dark-900 dark:text-white mb-2 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
        </Link>
        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border border-primary-100/80 dark:border-primary-900/50 bg-primary-50/70 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center mt-5 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
        >
          View Project
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
