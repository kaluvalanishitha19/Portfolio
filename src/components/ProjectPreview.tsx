import type { ProjectPreviewType } from '../data/projects'

type ProjectPreviewProps = {
  type: ProjectPreviewType
  className?: string
  tall?: boolean
}

const panelClass =
  'overflow-hidden rounded-[40px] border border-[#D7E2EA]/20 bg-[#111111] sm:rounded-[50px] md:rounded-[60px]'

function AnalyticsPreview({ className = '', tall = false }: { className?: string; tall?: boolean }) {
  return (
    <div className={`${panelClass} ${className} flex flex-col gap-3 p-4`}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA]/50">
          Live KPIs
        </span>
        <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          WebSocket
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: 'Revenue', value: '$48.2K', delta: '+12%' },
          { label: 'Sessions', value: '12.4K', delta: '+8%' },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3"
          >
            <p className="text-[9px] uppercase tracking-wider text-[#D7E2EA]/40">
              {kpi.label}
            </p>
            <p className="text-sm font-medium text-[#D7E2EA]">{kpi.value}</p>
            <p className="text-[10px] text-emerald-400">{kpi.delta}</p>
          </div>
        ))}
      </div>
      {tall ? (
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex h-28 items-end gap-1.5 rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3">
            {[40, 65, 45, 80, 55, 90, 70, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-[#7621B0] to-[#B600A8]"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3">
            <div className="mb-2 flex justify-between text-[9px] text-[#D7E2EA]/40">
              <span>Trend Stream</span>
              <span>CSV Export</span>
            </div>
            <div className="h-12 rounded-xl bg-gradient-to-r from-[#7621B0]/30 via-[#B600A8]/20 to-transparent" />
          </div>
        </div>
      ) : (
        <div className="flex h-16 items-end gap-1 rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-2">
          {[35, 55, 40, 70, 50].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-t bg-gradient-to-t from-[#7621B0] to-[#B600A8]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

function CampusPreview({ className = '', tall = false }: { className?: string; tall?: boolean }) {
  return (
    <div className={`${panelClass} ${className} flex flex-col gap-3 p-4`}>
      <div className="flex gap-2">
        {['All', 'Electronics', 'Bags'].map((tag, i) => (
          <span
            key={tag}
            className={`rounded-full px-2.5 py-1 text-[9px] uppercase tracking-wider ${
              i === 0
                ? 'bg-[#D7E2EA]/15 text-[#D7E2EA]'
                : 'border border-[#D7E2EA]/15 text-[#D7E2EA]/50'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      {tall ? (
        <div className="flex flex-1 flex-col gap-2">
          {[
            { item: 'MacBook Charger', loc: 'Library', status: 'Found' },
            { item: 'Student ID Card', loc: 'Gym', status: 'Claimed' },
            { item: 'Water Bottle', loc: 'Cafe', status: 'Open' },
          ].map((row) => (
            <div
              key={row.item}
              className="flex items-center justify-between rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3"
            >
              <div>
                <p className="text-xs font-medium text-[#D7E2EA]">{row.item}</p>
                <p className="text-[9px] text-[#D7E2EA]/40">{row.loc}</p>
              </div>
              <span className="rounded-full border border-[#D7E2EA]/20 px-2 py-0.5 text-[9px] uppercase text-[#D7E2EA]/60">
                {row.status}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3">
          <p className="text-[9px] uppercase tracking-wider text-[#D7E2EA]/40">
            Search Items
          </p>
          <div className="mt-2 h-8 rounded-xl border border-[#D7E2EA]/15 bg-[#111111]" />
        </div>
      )}
      <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3">
        <p className="text-[9px] uppercase text-[#D7E2EA]/40">Report Lost Item</p>
        <div className="mt-2 flex gap-2">
          <div className="h-2 flex-1 rounded bg-[#D7E2EA]/10" />
          <div className="h-2 w-8 rounded bg-[#7621B0]/60" />
        </div>
      </div>
    </div>
  )
}

function PropertyPreview({ className = '', tall = false }: { className?: string; tall?: boolean }) {
  return (
    <div className={`${panelClass} ${className} flex flex-col gap-3 p-4`}>
      <div className="flex items-center justify-between">
        <span className="text-[10px] font-medium uppercase tracking-widest text-[#D7E2EA]/50">
          Landlord Dashboard
        </span>
        <span className="rounded-full border border-[#D7E2EA]/20 px-2 py-0.5 text-[9px] uppercase text-[#D7E2EA]/60">
          JWT Auth
        </span>
      </div>
      {tall ? (
        <div className="flex flex-1 flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Units', value: '24' },
              { label: 'Occupancy', value: '92%' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3"
              >
                <p className="text-[9px] uppercase text-[#D7E2EA]/40">{stat.label}</p>
                <p className="text-sm font-medium text-[#D7E2EA]">{stat.value}</p>
              </div>
            ))}
          </div>
          {[
            { unit: 'Unit 4B', issue: 'HVAC maintenance', priority: 'High' },
            { unit: 'Unit 2A', issue: 'Lease renewal', priority: 'Open' },
          ].map((ticket) => (
            <div
              key={ticket.unit}
              className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3"
            >
              <div className="flex justify-between">
                <p className="text-xs font-medium text-[#D7E2EA]">{ticket.unit}</p>
                <span className="text-[9px] uppercase text-amber-400">{ticket.priority}</span>
              </div>
              <p className="text-[10px] text-[#D7E2EA]/50">{ticket.issue}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {['Tenants', 'Leases', 'Requests'].map((tab, i) => (
            <div
              key={tab}
              className={`rounded-xl p-2 text-center text-[9px] uppercase tracking-wider ${
                i === 0
                  ? 'bg-[#D7E2EA]/15 text-[#D7E2EA]'
                  : 'border border-[#D7E2EA]/10 text-[#D7E2EA]/40'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      )}
      <div className="rounded-2xl border border-[#D7E2EA]/10 bg-[#0C0C0C] p-3">
        <div className="flex justify-between text-[9px] text-[#D7E2EA]/40">
          <span>Role-Based Access</span>
          <span>MongoDB</span>
        </div>
        <div className="mt-2 h-2 w-full rounded bg-gradient-to-r from-[#BE4C00]/40 via-[#7621B0]/40 to-transparent" />
      </div>
    </div>
  )
}

export default function ProjectPreview({ type, className = '', tall = false }: ProjectPreviewProps) {
  switch (type) {
    case 'analytics':
      return <AnalyticsPreview className={className} tall={tall} />
    case 'campus':
      return <CampusPreview className={className} tall={tall} />
    case 'property':
      return <PropertyPreview className={className} tall={tall} />
  }
}
