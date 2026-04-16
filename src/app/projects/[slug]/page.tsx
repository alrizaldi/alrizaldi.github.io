import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects } from "@/data/content";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Rizaldi Akbar`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter((item) => item.slug !== project.slug);

  return (
    <main className="min-h-screen bg-white dark:bg-dark-900">
      <Navbar />

      <section className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to All Projects
          </Link>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold tracking-wide uppercase text-primary-600 dark:text-primary-400 mb-3">
                Portfolio Detail
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-dark-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-dark-600 dark:text-dark-300 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                {/* <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 rounded-lg border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-600 dark:hover:border-primary-400 transition-colors font-medium"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View Source Code
                </a> */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors font-medium"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Live Project
                  </a>
                )}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 shadow-lg">
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">
                    Role
                  </p>
                  <p className="text-dark-900 dark:text-white font-semibold">
                    {project.role}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mb-1">
                    Timeline
                  </p>
                  <p className="text-dark-900 dark:text-white font-semibold">
                    {project.period}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-dark-500 dark:text-dark-400 mb-2">
                    Main Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-200 rounded-full text-xs font-medium border border-dark-200 dark:border-dark-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 relative h-[260px] sm:h-[420px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={project.image}
              alt={`${project.title} screenshot`}
              fill
              className="object-cover object-top"
              sizes="100vw"
              priority
            />
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 mt-14">
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-dark-600 dark:text-dark-300 leading-8">
                  {project.overview}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="bg-gray-50 dark:bg-dark-800 rounded-xl px-5 py-4 text-dark-600 dark:text-dark-300"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Challenges
                </h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge) => (
                    <li
                      key={challenge}
                      className="bg-gray-50 dark:bg-dark-800 rounded-xl px-5 py-4 text-dark-600 dark:text-dark-300"
                    >
                      {challenge}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Outcomes
                </h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="bg-primary-50 dark:bg-primary-900/20 rounded-xl px-5 py-4 text-primary-800 dark:text-primary-300"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          {relatedProjects.length > 0 && (
            <section className="mt-20">
              <div className="flex items-center justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-dark-900 dark:text-white">
                    More Projects
                  </h2>
                  <p className="text-dark-600 dark:text-dark-300">
                    Explore other portfolio entries.
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  View all
                </Link>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedProjects.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/projects/${item.slug}`}
                    className="block bg-gray-50 dark:bg-dark-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-dark-600 dark:text-dark-300 mb-4">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-200 rounded-full text-xs font-medium border border-dark-200 dark:border-dark-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
