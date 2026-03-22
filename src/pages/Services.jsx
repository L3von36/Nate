import { HardHat, Mountain, Droplets, ClipboardList, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const serviceCategories = [
  {
    icon: HardHat,
    title: 'Highway Engineering & Road Design',
    items: [
      'Highway Geometric design (rural and urban roads)',
      'Pavement design (flexible and rigid)',
      'Highway drainage concept and detailed design',
      'Tender drawings, specs, and IFC documentation',
      'Construction methodology review',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Traffic Engineering & Road Safety',
    items: [
      'Traffic counts and basic traffic analysis',
      'Traffic impact assessment support',
      'Transport/logistics planning support',
      'Road safety audits (design-stage & existing-road)',
      'Intersection/interchange concept support',
      'Signing/marking concept support',
    ],
  },
  {
    icon: Mountain,
    title: 'Geotechnical Engineering',
    items: [
      'Soil investigation data interpretation',
      'Subgrade evaluation and classification',
      'Settlement, bearing capacity & slope stability',
      'Culvert hydraulic analysis support',
      'Geotechnical reporting and earthworks analysis',
      'Site support calculations',
    ],
  },
  {
    icon: Droplets,
    title: 'Hydraulics & Drainage',
    items: [
      'Flood risk screening support',
      'Catchment/hydrology analysis',
      'Culvert hydraulic analysis support',
      'Highway drainage concept and detailed design',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Construction Supervision & Technical Support',
    items: [
      'Tender preparation and bid evaluation',
      'Variation order technical support',
      'Compliance checks',
      'Quantity take-off (QTO) and BoQ support',
      'PMO-style reporting (schedule/cost/risk)',
    ],
  },
  {
    icon: HardHat,
    title: 'Feasibility & Project Management',
    items: [
      'Feasibility study support',
      'PMO-style reporting (schedule/cost/risk)',
      'Structured Workflows & Internal Technical Review',
      'Delivery-Focused Leadership',
    ],
  },
]

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary text-primary-foreground px-6 py-20 lg:px-12 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">What We Do</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-2xl mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-2xl leading-relaxed">
            We provide services across the highway and transport project lifecycle, delivered as standalone
            work packages or sub-consultancy arrangements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map(({ icon: Icon, title, items }) => (
              <div key={title} className="card hover:shadow-md transition-shadow flex flex-col">
                <div className="w-12 h-12 bg-accent/15 rounded-lg flex items-center justify-center mb-5">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-4">{title}</h3>
                <ul className="space-y-2 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={14} className="text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Engagement Models
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Flexible arrangements to suit your project needs and timeline.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Project-Based Outsourcing',
                desc: 'Fixed scope & timeline engagements — ideal for standalone deliverables or defined work packages.',
              },
              {
                title: 'Retainer-Based Support',
                desc: 'Monthly engineering capacity for ongoing projects requiring consistent technical input.',
              },
              {
                title: 'Joint Venture Contribution',
                desc: 'Technical contribution and co-delivery for joint venture and consortium arrangements.',
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-lg p-6 border border-border shadow-sm text-center">
                <h3 className="font-heading text-base font-bold text-foreground mb-3">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground px-6 py-16 lg:px-12 text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">Ready to Strengthen Your Project Delivery?</h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-8">
          Reach out to discuss how Terraline can support your next project.
        </p>
        <Link to="/contact" className="inline-block bg-accent text-accent-foreground px-8 py-3 rounded font-semibold hover:opacity-90 transition-opacity">
          Get in Touch
        </Link>
      </section>
    </>
  )
}
