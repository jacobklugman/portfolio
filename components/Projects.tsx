import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'DevRadar',
    description: 'Marketplace for tech recruiting powered by GitHub analysis',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/jacobklugman/devradar',
  },
  {
    title: 'Express API Starter',
    description: 'Production-ready REST API with JWT auth, rate limiting and OpenAPI docs',
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL'],
    github: 'https://github.com/jacobklugman/express-api-starter',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="text-xs bg-gray-800 text-sky-400 px-2 py-1 rounded-full">{t}</span>
              ))}
            </div>
            <a href={p.github} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white">
              <Github size={16} /> View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}