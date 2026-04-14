import { MapPin, Mail, Briefcase } from "lucide-react";
import { siteConfig, skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-12 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              I'm a passionate full stack developer with a love for creating
              elegant, user-friendly applications. With expertise in modern web
              technologies, I specialize in building full-stack solutions that
              make a difference.
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              My journey in full stack development started with a curiosity
              about how things work on the internet. Today, I enjoy working with
              technologies like Next.js, TypeScript, and cloud services to build
              scalable applications.
            </p>

            <p className="text-lg text-dark-600 dark:text-dark-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through technical blog posts. I believe in continuous learning and
              community-driven growth.
            </p>

            {/* Quick Facts */}
            <div className="space-y-3 pt-6">
              <div className="flex items-center text-dark-600 dark:text-dark-300">
                <MapPin className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center text-dark-600 dark:text-dark-300">
                <Mail className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                <span>{siteConfig.email}</span>
              </div>
              <div className="flex items-center text-dark-600 dark:text-dark-300">
                <Briefcase className="w-5 h-5 mr-3 text-primary-600 dark:text-primary-400" />
                <span>{siteConfig.status}</span>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6 stagger-children">
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">
              Skills & Technologies
            </h3>

            <div className="space-y-5">
              <SkillCategory title="Languages" items={skills.languages} />
              <SkillCategory title="Frontend" items={skills.frontend} />
              <SkillCategory title="Backend" items={skills.backend} />
              <SkillCategory title="Databases" items={skills.databases} />
              <SkillCategory title="Tools" items={skills.tools} />
            </div>
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
