import { certifications } from '../data/portfolio'
import { AwardIcon } from './Icons'

const darkColors = {
  'bg-blue-50 border-blue-200 text-blue-800': 'dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300',
  'bg-orange-50 border-orange-200 text-orange-800': 'dark:bg-orange-900/30 dark:border-orange-700 dark:text-orange-300',
  'bg-red-50 border-red-200 text-red-800': 'dark:bg-red-900/30 dark:border-red-700 dark:text-red-300',
}

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">Credentials</p>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">Cloud Certifications</h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg max-w-xl mx-auto">
            4 certifications validating cloud-native skills across AWS, GCP, and Red Hat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className={`rounded-2xl border p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow ${cert.color} ${darkColors[cert.color] ?? ''}`}
            >
              <div className={`w-12 h-12 rounded-xl ${cert.badge} flex items-center justify-center mb-4`}>
                <AwardIcon className="w-6 h-6 text-white" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider opacity-70 mb-1">{cert.issuer}</div>
              <h3 className="text-sm font-bold leading-snug">{cert.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
