import { personal } from '../data/portfolio'
import { MapPinIcon, GithubIcon, LinkedinIcon } from './Icons'

const stats = [
  { label: 'Cloud Certifications', value: '4' },
  { label: 'GPA', value: '3.9/4' },
  { label: 'Full-Stack Projects', value: '3+' },
  { label: 'Graduated', value: 'May 2026' },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">About Me</p>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Building things that<br />
              <span className="text-blue-600 dark:text-blue-400">work in production</span>
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm a full-stack developer and M.S. Computer Science student at Florida Atlantic University,
                graduating May 2026. I build end-to-end applications — from React dashboards to Node.js APIs
                to cloud infrastructure on AWS and GCP.
              </p>
              <p>
                My projects aren't toy apps. Job Tracker SaaS has Kanban boards, analytics dashboards,
                Cloudinary file uploads, email notifications, rate limiting, and role-based access control.
                SmartBid uses AES-256 encryption and transactional SQL to prevent race conditions in
                concurrent bidding. I build for real-world constraints.
              </p>
              <p>
                With 4 cloud certifications (AWS Developer, AWS Cloud Practitioner, GCP Associate Cloud Engineer,
                Red Hat Certified Developer), I understand cloud-native architecture, not just how to use it.
              </p>
            </div>

            {/* Location + social */}
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                <MapPinIcon className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                {personal.location}
              </span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                github.com/vamsishesamsetti
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                linkedin.com/in/vamsishesamsetti
              </a>
            </div>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white dark:bg-gray-700 rounded-2xl p-6 border border-gray-100 dark:border-gray-600 shadow-sm text-center"
              >
                <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
