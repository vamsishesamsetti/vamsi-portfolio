import { projects } from '../data/portfolio'
import { GithubIcon, ExternalLinkIcon } from './Icons'

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Portfolio</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Featured Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            Production-grade applications with auth, real-time data, cloud deployment, and security best practices.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-white dark:bg-gray-700 rounded-2xl shadow-sm border-t-4 ${project.accent} border-x border-b border-gray-100 dark:border-gray-600 flex flex-col overflow-hidden hover:shadow-md transition-shadow`}
            >
              {/* Card header */}
              <div className="p-6 flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex gap-2 shrink-0">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                      >
                        <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="p-1.5 rounded-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span className="text-blue-500 dark:text-blue-400 mt-0.5 shrink-0">›</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card footer */}
              <div className="px-6 pb-6 pt-2 flex gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${project.live ? '' : 'flex-1'} inline-flex items-center justify-center gap-1.5 py-2 px-4 border border-gray-200 dark:border-gray-500 hover:border-blue-300 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 text-sm font-semibold rounded-lg transition-colors`}
                >
                  <GithubIcon className="w-4 h-4" />
                  {project.live ? 'Code' : 'View on GitHub'}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects link */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/vamsishesamsetti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-sm transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            View all projects on GitHub
            <ExternalLinkIcon className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
