import { personal } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, EmailIcon, DownloadIcon, ChevronDownIcon } from './Icons'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 pt-16"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-full text-green-700 dark:text-green-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Open to opportunities · May 2026
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
          Vamsi{' '}
          <span className="text-blue-600 dark:text-blue-400">Shesamsetti</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6">
          Full-Stack Developer &amp; Cloud Engineer
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
          M.S. Computer Science @ FAU (GPA 3.9/4.0, May 2026) · 4 Cloud Certifications (AWS + GCP) ·
          Building production-grade web apps with React, Node.js, and cloud infrastructure.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors shadow-sm"
          >
            View Projects
          </a>
          <a
            href="/resumes/resume-common.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 font-semibold rounded-xl transition-colors"
          >
            <DownloadIcon />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="p-3 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
          >
            <EmailIcon className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-gray-400 dark:text-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hidden sm:flex"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <ChevronDownIcon className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  )
}
