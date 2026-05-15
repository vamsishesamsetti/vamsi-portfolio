import { education, experience } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Background</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Education &amp; Experience</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded" />
              Education
            </h3>
            <div className="relative pl-6 border-l-2 border-blue-100 dark:border-gray-700 space-y-8">
              {education.map((edu) => (
                <div key={edu.degree} className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900" />
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-5">
                    <div className="flex flex-wrap justify-between gap-2 mb-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">{edu.degree}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-600 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{edu.school}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{edu.location}</p>
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300">GPA: {edu.gpa}</p>
                    {edu.courses.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-3">
                        {edu.courses.map((c) => (
                          <span key={c} className="px-2 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full border border-blue-100 dark:border-blue-800">
                            {c}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-6 h-0.5 bg-blue-600 dark:bg-blue-400 rounded" />
              Experience
            </h3>
            <div className="relative pl-6 border-l-2 border-blue-100 dark:border-gray-700 space-y-8">
              {experience.map((exp) => (
                <div key={exp.title} className="relative">
                  <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full border-2 border-blue-600 dark:border-blue-400 bg-white dark:bg-gray-900" />
                  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm p-5">
                    <div className="flex flex-wrap justify-between gap-2 mb-1">
                      <h4 className="font-bold text-gray-900 dark:text-white text-sm">{exp.title}</h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 px-2 py-0.5 rounded-full border border-gray-100 dark:border-gray-600 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">{exp.company}</p>
                    <ul className="space-y-1.5">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-xs text-gray-600 dark:text-gray-400">
                          <span className="text-blue-400 dark:text-blue-500 mt-0.5 shrink-0">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
