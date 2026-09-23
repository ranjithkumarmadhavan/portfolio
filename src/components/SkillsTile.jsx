import BentoCard from './BentoCard'

const skills = [
  { label: 'AWS Lambda', color: 'bg-orange-500/15 text-orange-300 border-orange-500/25' },
  { label: 'Amazon S3', color: 'bg-green-500/15 text-green-300 border-green-500/25' },
  { label: 'AWS Lex', color: 'bg-sky-500/15 text-sky-300 border-sky-500/25' },
  { label: 'API Gateway', color: 'bg-purple-500/15 text-purple-300 border-purple-500/25' },
  { label: 'Alexa Skills Kit', color: 'bg-blue-500/15 text-blue-300 border-blue-500/25' },
  { label: 'Python', color: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/25' },
  { label: 'React', color: 'bg-cyan-500/15 text-cyan-300 border-cyan-500/25' },
  { label: 'C#', color: 'bg-violet-500/15 text-violet-300 border-violet-500/25' },
  { label: '.NET', color: 'bg-purple-500/15 text-purple-300 border-purple-500/25' },
  { label: 'REST API', color: 'bg-pink-500/15 text-pink-300 border-pink-500/25' },
  { label: 'Serverless', color: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/25' },
  { label: 'Node.js', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25' },
]

export default function SkillsTile() {
  return (
    <BentoCard className="col-span-1 lg:col-span-2 p-7 lg:p-8 min-h-[220px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 h-40 w-40 rounded-full bg-accent-2/10 blur-3xl"
      />

      <div className="relative z-10">
        <div className="mb-5">
          <p className="text-xs text-muted uppercase tracking-widest font-medium mb-1">
            Technology Stack
          </p>
          <h2 className="text-lg font-bold text-slate-200">Core Skills</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.label}
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-transform duration-150 hover:scale-105 ${skill.color}`}
            >
              {skill.label}
            </span>
          ))}
        </div>
      </div>
    </BentoCard>
  )
}
