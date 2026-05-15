import { personal } from '../data/portfolio'
import { GithubIcon, LinkedinIcon, EmailIcon, MapPinIcon } from './Icons'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-blue-700">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
        <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
        <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
          I'm actively looking for software engineering roles (May 2026). Whether it's a full-time position,
          internship, or just a conversation — I'd love to connect.
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-blue-50 text-blue-700 font-bold text-lg rounded-xl transition-colors shadow-lg mb-12"
        >
          <EmailIcon className="w-5 h-5" />
          {personal.email}
        </a>

        {/* Contact links */}
        <div className="flex flex-wrap justify-center gap-6 text-blue-200">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <LinkedinIcon className="w-5 h-5" />
            <span className="text-sm">linkedin.com/in/vamsishesamsetti</span>
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
            <span className="text-sm">github.com/vamsishesamsetti</span>
          </a>
          <span className="flex items-center gap-2 text-sm">
            <MapPinIcon className="w-4 h-4" />
            {personal.location}
          </span>
        </div>
      </div>
    </section>
  )
}
