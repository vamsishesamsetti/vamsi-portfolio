import { skills } from '../data/portfolio'

const categoryColors = {
  Frontend: 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800',
  Backend: 'bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-100 dark:border-violet-800',
  Databases: 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800',
  'Cloud & DevOps': 'bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border border-orange-100 dark:border-orange-800',
  Languages: 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border border-pink-100 dark:border-pink-800',
  Tools: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600',
}

const headerColors = {
  Frontend: 'text-blue-600 dark:text-blue-400',
  Backend: 'text-violet-600 dark:text-violet-400',
  Databases: 'text-emerald-600 dark:text-emerald-400',
  'Cloud & DevOps': 'text-orange-600 dark:text-orange-400',
  Languages: 'text-pink-600 dark:text-pink-400',
  Tools: 'text-gray-600 dark:text-gray-400',
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Skills &amp; Technologies</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            A full-stack toolkit built from shipping real applications — not just tutorials.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className={`text-sm font-bold uppercase tracking-wider mb-4 ${headerColors[group.category] ?? 'text-gray-600 dark:text-gray-400'}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[group.category] ?? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
