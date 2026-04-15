import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { siteConfig, skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-5 gap-12 items-start mb-16">
          {/* Photo - 2 columns */}
          <div className="md:col-span-2 flex justify-center">
            <div className="relative">
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-700 rounded-2xl opacity-20 blur-lg"></div>

              {/* Photo container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-dark-700 max-h-[450px]">
                <Image
                  src="/images/profile.jpg"
                  alt={`${siteConfig.name} - ${siteConfig.title}`}
                  width={400}
                  height={450}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>

              {/* Status badge */}
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg whitespace-nowrap">
                  {siteConfig.status}
                </div>
              </div>
            </div>
          </div>

          {/* Bio - 3 columns */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-justify text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              I'm a passionate full stack developer with a love for creating
              elegant, user-friendly applications. With expertise in modern web
              technologies, I specialize in building full-stack solutions that
              make a difference.
            </p>

            <p className="text-justify text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              My journey in full stack development started with a curiosity
              about how things work on the internet. Today, I enjoy working with
              technologies like Next.js, TypeScript, and cloud services to build
              scalable applications.
            </p>

            <p className="text-justify text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical blog posts. I believe in continuous learning and
              community-driven growth.
            </p>

            {/* Quick Facts */}
            <div className="space-y-3 pt-4 border-t border-dark-200 dark:border-dark-700">
              <div className="flex items-center text-dark-600 dark:text-dark-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>{siteConfig.location}</span>
              </div>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                <Mail className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Skills Section - Full Width */}
        <div className="bg-gray-50 dark:bg-dark-900 rounded-2xl p-8 shadow-inner">
          <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCategory title="Languages" items={skills.languages} />
            <SkillCategory title="Frontend" items={skills.frontend} />
            <SkillCategory title="Backend" items={skills.backend} />
            <SkillCategory title="Databases" items={skills.databases} />
            <SkillCategory title="Tools" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-dark-500 dark:text-dark-400 uppercase tracking-wide mb-2">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-400 rounded-lg text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
