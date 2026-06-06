import type { MarqueeProject, MarqueeProjectType } from '../data/marqueeProjects'

type MarqueeCardProps = {
  project: MarqueeProject
}

const cardShell =
  'flex h-[270px] w-[420px] shrink-0 flex-col overflow-hidden rounded-2xl border border-[#D7E2EA]/15 bg-gradient-to-br from-[#141414] via-[#0C0C0C] to-[#111111] p-4'

function TechTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.slice(0, 4).map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[#D7E2EA]/15 px-2 py-0.5 text-[8px] uppercase tracking-wider text-[#D7E2EA]/50"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function CardHeader({ name }: { name: string }) {
  return (
    <p className="mb-2 truncate text-[11px] font-medium uppercase tracking-widest text-[#D7E2EA]/70">
      {name}
    </p>
  )
}

function AnalyticsMockup({ project }: MarqueeCardProps) {
  return (
    <div className={cardShell}>
      <CardHeader name={project.name} />
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-wider text-[#D7E2EA]/40">
          Live KPIs
        </span>
        <span className="flex items-center gap-1 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[8px] uppercase text-emerald-400">
          <span className="h-1 w-1 animate-pulse rounded-full bg-emerald-400" />
          WebSocket
        </span>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-1.5">
        {[
          { label: 'Revenue', val: '$48K' },
          { label: 'Users', val: '12.4K' },
          { label: 'Conv.', val: '3.2%' },
        ].map((k) => (
          <div
            key={k.label}
            className="rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 p-2"
          >
            <p className="text-[7px] uppercase text-[#D7E2EA]/35">{k.label}</p>
            <p className="text-xs font-medium text-[#D7E2EA]">{k.val}</p>
          </div>
        ))}
      </div>
      <div className="mb-2 flex flex-1 items-end gap-1 rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 p-2">
        {[30, 50, 40, 70, 55, 85, 60, 90, 75, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t bg-gradient-to-t from-[#7621B0] to-[#B600A8]/80"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <TechTags tags={project.tech} />
        <span className="text-[8px] uppercase tracking-wider text-[#D7E2EA]/40">
          CSV Export
        </span>
      </div>
    </div>
  )
}

function CampusMockup({ project }: MarqueeCardProps) {
  return (
    <div className={cardShell}>
      <CardHeader name={project.name} />
      <div className="mb-2 rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 px-3 py-2">
        <p className="text-[8px] uppercase text-[#D7E2EA]/35">Search Items</p>
        <div className="mt-1 h-2 rounded bg-[#D7E2EA]/10" />
      </div>
      <div className="mb-2 flex gap-1">
        {['All', 'Electronics', 'Bags', 'ID'].map((f, i) => (
          <span
            key={f}
            className={`rounded-full px-2 py-0.5 text-[7px] uppercase ${
              i === 0
                ? 'bg-[#D7E2EA]/15 text-[#D7E2EA]'
                : 'border border-[#D7E2EA]/10 text-[#D7E2EA]/40'
            }`}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="mb-2 flex flex-1 flex-col gap-1.5">
        {[
          { item: 'MacBook Charger', loc: 'Library', status: 'Found' },
          { item: 'Student ID', loc: 'Gym', status: 'Claimed' },
        ].map((row) => (
          <div
            key={row.item}
            className="flex items-center justify-between rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 px-2 py-1.5"
          >
            <div>
              <p className="text-[10px] font-medium text-[#D7E2EA]">{row.item}</p>
              <p className="text-[7px] text-[#D7E2EA]/35">{row.loc}</p>
            </div>
            <span className="rounded-full border border-[#D7E2EA]/15 px-1.5 py-0.5 text-[7px] uppercase text-[#D7E2EA]/50">
              {row.status}
            </span>
          </div>
        ))}
      </div>
      <TechTags tags={project.tech} />
    </div>
  )
}

function PropertyMockup({ project }: MarqueeCardProps) {
  return (
    <div className={cardShell}>
      <CardHeader name={project.name} />
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[9px] uppercase tracking-wider text-[#D7E2EA]/40">
          Landlord Dashboard
        </span>
        <span className="text-[8px] text-emerald-400">92% Occupancy</span>
      </div>
      <div className="mb-2 grid grid-cols-3 gap-1.5">
        {['Units', 'Tenants', 'Requests'].map((tab, i) => (
          <div
            key={tab}
            className={`rounded-lg py-1.5 text-center text-[7px] uppercase ${
              i === 0
                ? 'bg-[#D7E2EA]/15 text-[#D7E2EA]'
                : 'border border-[#D7E2EA]/10 text-[#D7E2EA]/40'
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mb-2 flex flex-1 flex-col gap-1.5">
        {[
          { unit: '4B', tenant: 'A. Rivera', status: 'Active' },
          { unit: '2A', tenant: 'Maintenance', status: 'Open' },
        ].map((row) => (
          <div
            key={row.unit}
            className="flex items-center justify-between rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 px-2 py-1.5"
          >
            <div>
              <p className="text-[10px] font-medium text-[#D7E2EA]">
                Unit {row.unit}
              </p>
              <p className="text-[7px] text-[#D7E2EA]/35">{row.tenant}</p>
            </div>
            <span className="text-[7px] uppercase text-amber-400/80">
              {row.status}
            </span>
          </div>
        ))}
      </div>
      <TechTags tags={project.tech} />
    </div>
  )
}

function VerizonMockup({ project }: MarqueeCardProps) {
  return (
    <div className={cardShell}>
      <CardHeader name={project.name} />
      <div className="mb-2 rounded-lg bg-gradient-to-r from-[#B600A8]/30 via-[#7621B0]/20 to-[#BE4C00]/20 p-2">
        <p className="text-[8px] uppercase tracking-wider text-[#D7E2EA]/60">
          iPhone 15 Launch
        </p>
        <p className="text-[10px] font-medium text-[#D7E2EA]">
          Trade-in & Save $800
        </p>
      </div>
      <div className="mb-2 grid grid-cols-2 gap-1.5">
        {['Unlimited Plus', '5G Start'].map((plan, i) => (
          <div
            key={plan}
            className={`rounded-lg border p-2 ${
              i === 0
                ? 'border-[#B600A8]/40 bg-[#B600A8]/10'
                : 'border-[#D7E2EA]/10 bg-[#0C0C0C]/80'
            }`}
          >
            <p className="text-[8px] font-medium text-[#D7E2EA]">{plan}</p>
            <p className="text-[10px] text-[#D7E2EA]/60">$45/mo</p>
          </div>
        ))}
      </div>
      <div className="mb-2 flex flex-1 items-center justify-between rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 px-3 py-2">
        <div>
          <p className="text-[8px] uppercase text-[#D7E2EA]/35">Cart</p>
          <p className="text-[10px] text-[#D7E2EA]">2 items</p>
        </div>
        <span className="rounded-full bg-gradient-to-r from-[#7621B0] to-[#B600A8] px-3 py-1 text-[8px] uppercase text-white">
          Checkout
        </span>
      </div>
      <TechTags tags={project.tech} />
    </div>
  )
}

function ApiMockup({ project }: MarqueeCardProps) {
  return (
    <div className={cardShell}>
      <CardHeader name={project.name} />
      <div className="mb-2 flex gap-1">
        {['GET', 'POST', 'PUT'].map((method, i) => (
          <span
            key={method}
            className={`rounded px-1.5 py-0.5 text-[7px] font-medium uppercase ${
              i === 0
                ? 'bg-emerald-400/15 text-emerald-400'
                : i === 1
                  ? 'bg-blue-400/15 text-blue-400'
                  : 'bg-amber-400/15 text-amber-400'
            }`}
          >
            {method}
          </span>
        ))}
        <span className="ml-auto text-[7px] uppercase text-[#D7E2EA]/35">
          OpenAPI
        </span>
      </div>
      <div className="mb-2 flex-1 rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 p-2 font-mono text-[8px] leading-relaxed text-[#D7E2EA]/60">
        <p>
          <span className="text-emerald-400">GET</span> /api/plans
        </p>
        <p className="text-[#D7E2EA]/30">{'{'}</p>
        <p className="pl-2">
          &quot;status&quot;: <span className="text-emerald-400">200</span>
        </p>
        <p className="pl-2">
          &quot;data&quot;: <span className="text-[#D7E2EA]/40">Plan[]</span>
        </p>
        <p className="text-[#D7E2EA]/30">{'}'}</p>
      </div>
      <div className="mb-2 flex gap-2">
        <span className="rounded border border-emerald-400/30 bg-emerald-400/10 px-2 py-0.5 text-[7px] uppercase text-emerald-400">
          Zod Valid
        </span>
        <span className="rounded border border-red-400/30 bg-red-400/10 px-2 py-0.5 text-[7px] uppercase text-red-400">
          422 Error
        </span>
      </div>
      <TechTags tags={project.tech} />
    </div>
  )
}

function CicdMockup({ project }: MarqueeCardProps) {
  return (
    <div className={cardShell}>
      <CardHeader name={project.name} />
      <div className="mb-2 flex flex-col gap-1.5">
        {[
          { step: 'GitHub Actions', status: 'Build', color: 'emerald' },
          { step: 'Docker Staging', status: 'Deploy', color: 'blue' },
          { step: 'Jenkins Release', status: 'Prod', color: 'purple' },
        ].map((pipe, i) => (
          <div
            key={pipe.step}
            className="flex items-center gap-2 rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 px-2 py-1.5"
          >
            <span
              className={`flex h-4 w-4 items-center justify-center rounded-full text-[7px] font-bold ${
                i === 0
                  ? 'bg-emerald-400/20 text-emerald-400'
                  : i === 1
                    ? 'bg-blue-400/20 text-blue-400'
                    : 'bg-purple-400/20 text-purple-400'
              }`}
            >
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="text-[9px] font-medium text-[#D7E2EA]">
                {pipe.step}
              </p>
            </div>
            <span className="text-[7px] uppercase text-[#D7E2EA]/40">
              {pipe.status}
            </span>
            {i < 2 && (
              <div className="absolute left-6 hidden" />
            )}
          </div>
        ))}
      </div>
      <div className="mb-2 flex flex-1 items-center rounded-lg border border-[#D7E2EA]/10 bg-[#0C0C0C]/80 p-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[#D7E2EA]/10">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-[#7621B0] to-[#B600A8]" />
        </div>
        <span className="ml-2 text-[8px] text-emerald-400">Passing</span>
      </div>
      <TechTags tags={project.tech} />
    </div>
  )
}

const mockups: Record<
  MarqueeProjectType,
  (props: MarqueeCardProps) => JSX.Element
> = {
  analytics: AnalyticsMockup,
  campus: CampusMockup,
  property: PropertyMockup,
  verizon: VerizonMockup,
  api: ApiMockup,
  cicd: CicdMockup,
}

export default function MarqueeCard({ project }: MarqueeCardProps) {
  const Mockup = mockups[project.type]
  return <Mockup project={project} />
}
