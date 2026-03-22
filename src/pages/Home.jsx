import { Link } from 'react-router-dom'
import { HardHat, Mountain, Droplets, ClipboardList, Users, Globe, Shield, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: HardHat,
    title: 'Highway Engineering & Road Design',
    description: 'Geometric design, drainage, pavement design, tender drawings and IFC documentation for rural and urban roads.',
  },
  {
    icon: Users,
    title: 'Traffic Engineering & Road Safety',
    description: 'Traffic counts, impact assessments, road safety audits, intersection concepts and signing/marking support.',
  },
  {
    icon: Mountain,
    title: 'Geotechnical Engineering',
    description: 'Soil investigation, subgrade evaluation, settlement and bearing capacity analysis, slope stability assessments.',
  },
  {
    icon: ClipboardList,
    title: 'Construction Supervision & Technical Support',
    description: 'Tender preparation, bid evaluation, variation order support, QTO/BoQ, and PMO-style reporting.',
  },
]

const clients = [
  { icon: Globe, label: 'International Firms' },
  { icon: Shield, label: 'NGOs' },
  { icon: Users, label: 'Contractors & Consultants' },
  { icon: HardHat, label: 'Government & City Authorities' },
]

const partnerships = [
  {
    title: 'Flexible Engagement Model',
    desc: 'We function as an extension of your engineering team with transparent process and predictable delivery.',
  },
  {
    title: 'Project-Based Outsourcing',
    desc: 'Fixed scope and timeline engagements for standalone work packages or deliverable sets.',
  },
  {
    title: 'Retainer-Based Support',
    desc: 'Monthly engineering capacity retainer for ongoing project delivery needs.',
  },
  {
    title: 'Joint Venture Contribution',
    desc: 'Technical contribution and structured workflows for joint venture partnerships.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, hsl(38,80%,55%), transparent 60%)' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <p className="text-accent text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Highway • Transport • Geotechnical
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Let&apos;s Build Infrastructure{' '}
            <span className="text-gradient">That Delivers</span>
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed mb-10">
            Ethiopia-based consulting engineers specializing in highway design, transport infrastructure,
            and geotechnical engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/services" className="bg-accent text-accent-foreground px-7 py-3 rounded font-semibold hover:opacity-90 transition-opacity">
              Our Services
            </Link>
            <Link to="/contact" className="border border-primary-foreground/30 text-primary-foreground px-7 py-3 rounded font-semibold hover:bg-primary-foreground/5 transition-colors">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">What We Do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide services across the highway and transport project lifecycle, delivered as standalone
              work packages or sub-consultancy arrangements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="card hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-accent" />
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition-colors">
              View all services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Who We Serve</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Clients</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white rounded-lg p-6 text-center shadow-sm border border-border hover:border-accent/50 transition-colors">
                <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Models */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Partnership Models</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Delivery-focused leadership with structured workflows and internal technical review.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerships.map(({ title, desc }) => (
              <div key={title} className="flex gap-4 p-6 rounded-lg bg-muted border border-border">
                <div className="w-2 rounded-full bg-accent shrink-0" />
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground mb-1">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-primary-foreground px-6 py-16 lg:px-12 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Ready to Strengthen Your Project Delivery?
        </h2>
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
