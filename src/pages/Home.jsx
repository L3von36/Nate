import { Link } from 'react-router-dom'
import {
  HardHat, Mountain, Droplets, ClipboardList, Users, Globe, Shield,
  CheckCircle, Phone, Mail, MapPin,
  FileText, Target, Layers, TrendingUp
} from 'lucide-react'

const features = [
  { icon: Layers, label: 'Structured Workflow & Internal Technical Review' },
  { icon: FileText, label: 'Clear Documentation' },
  { icon: Target, label: 'Positive Engagement Mode' },
  { icon: TrendingUp, label: 'Delivery-Focused Leadership' },
]

const services = [
  {
    icon: HardHat,
    title: 'Highway Engineering & Road Design',
    items: [
      'Highway Geometric design (rural and urban roads)',
      'Pavement design (flexible and rigid)',
      'Intersection/interchange concept support',
      'Quantity take-off (QTO) and BoQ support',
      'Tender drawings, specs and IFC documentation',
    ],
  },
  {
    icon: Users,
    title: 'Traffic Engineering & Road Safety',
    items: [
      'Traffic counts and basic traffic analysis',
      'Traffic impact assessment support',
      'Road safety audits (design-stage & existing-road)',
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
      'Geotechnical reporting and earthworks analysis',
    ],
  },
  {
    icon: Droplets,
    title: 'Hydraulics & Drainage',
    items: [
      'Highway drainage concept and detailed design',
      'Catchment/hydrology analysis',
      'Culvert hydraulic analysis support',
      'Flood risk screening support',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Construction Supervision & Technical Support',
    items: [
      'Construction methodology review',
      'Compliance checks',
      'Variation order technical support',
      'Quantity take-off (QTO) and BoQ support',
    ],
  },
  {
    icon: Target,
    title: 'Feasibility & Project Management',
    items: [
      'Feasibility study support',
      'PMO-style reporting (schedule/cost/risk)',
      'Tender preparation and bid evaluation',
      'Transport/logistics planning support',
    ],
  },
]

const clients = [
  { icon: HardHat, label: 'Government & City Authorities' },
  { icon: Users, label: 'Contractors & Consultants' },
  { icon: Shield, label: 'NGOs' },
  { icon: Globe, label: 'International Firms' },
]

const partnerships = [
  {
    title: 'Project-based outsourcing (fixed scope & timeline)',
    desc: 'Fixed scope and timeline engagements for standalone work packages or deliverable sets.',
  },
  {
    title: 'Retainer-based engineering support (monthly capacity)',
    desc: 'Monthly engineering capacity retainer for ongoing project delivery needs.',
  },
  {
    title: 'Sub-consultancy agreements (defined work packages)',
    desc: 'Structured sub-consultancy arrangements within larger consultancy frameworks.',
  },
  {
    title: 'Joint venture technical contributions',
    desc: 'Technical contribution and co-delivery for joint venture and consortium arrangements.',
  },
]

const founders = [
  {
    initials: 'HM',
    name: 'Henok A. Mamo',
    role: 'Co-Founder & Managing Director',
    title: 'Civil & Infrastructural Engineer',
    education: 'MSc in Civil Engineering (Road & Transport), BA in Business Management',
    bio: 'Consulted and established more than six startups. Leads commercial strategy, partnerships, and project delivery systems.',
  },
  {
    initials: 'NM',
    name: 'Natnael G. Mekonnen',
    role: 'Co-Founder & Technical Director',
    title: 'Civil & Infrastructural Engineer',
    education: 'MSc in Civil Engineering (Geotechnical)',
    bio: 'Leads technical delivery, quality assurance, and engineering production standards across all project engagements.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage:
            'linear-gradient(rgba(10,20,40,0.80), rgba(10,20,40,0.72)), url("https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '560px',
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-36">
          <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Highway &bull; Transport &bull; Geotechnical
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mb-6">
            Engineering Infrastructure{' '}
            <span className="text-gradient">That Delivers</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-10">
            Ethiopia-based consulting engineers specializing in highway design, transport
            infrastructure, and geotechnical engineering.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/services"
              className="bg-accent text-accent-foreground px-7 py-3 rounded font-semibold hover:opacity-90 transition-opacity"
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className="border border-white/40 text-white px-7 py-3 rounded font-semibold hover:bg-white/10 transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Who We Are</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Company Overview
            </h2>
            <p className="text-muted-foreground text-base max-w-3xl mx-auto leading-relaxed">
              Terraline Consulting Engineers is an Ethiopia-based engineering firm specializing in highway and
              transport infrastructure. We operate as a capacity-enhancing partner to consultants, contractors,
              government agencies, and developers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            <div className="card border border-border">
              <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center mb-4">
                <Target size={20} className="text-accent" />
              </div>
              <p className="text-accent text-xs font-semibold tracking-[0.2em] uppercase mb-2">Our Vision</p>
              <p className="text-foreground text-base leading-relaxed">
                To be a trusted Ethiopian partner for safe, durable, and cost-effective road infrastructure.
              </p>
            </div>
            <div className="card border border-border">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp size={20} className="text-primary" />
              </div>
              <p className="text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-2">Our Mission</p>
              <p className="text-foreground text-base leading-relaxed">
                To strengthen project outcomes through disciplined engineering production and QA/QC-driven
                delivery systems.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3 p-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Icon size={22} className="text-white" />
                </div>
                <p className="text-sm font-semibold text-foreground leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services — dark navy bg */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">What We Do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide services across the highway and transport project lifecycle, delivered as
              standalone work packages or sub-consultancy arrangements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, items }) => (
              <div key={title} className="bg-white rounded-lg p-6 flex flex-col">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-heading text-base font-bold text-foreground mb-3">{title}</h3>
                <ul className="space-y-1.5 flex-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle size={13} className="text-accent mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Who We Serve</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Clients</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="bg-white rounded-lg p-6 text-center shadow-sm border border-border hover:border-accent/50 transition-colors"
              >
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
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">How We Work</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Partnership Models
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              We function as an extension of your engineering team with transparent processes and predictable
              delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {partnerships.map(({ title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-lg bg-muted border border-border"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-primary mt-1.5 shrink-0" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="section-padding bg-muted" id="team">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Leadership</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Founders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((f) => (
              <div key={f.name} className="bg-white rounded-lg p-7 shadow-sm border border-border">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg font-heading mb-5">
                  {f.initials}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-0.5">{f.name}</h3>
                <p className="text-accent text-sm font-semibold mb-1">{f.role}</p>
                <p className="text-muted-foreground text-sm mb-3">{f.title}</p>
                <p className="text-xs text-primary/80 font-medium bg-blue-50 rounded px-3 py-1.5 inline-block mb-4">
                  {f.education}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="bg-primary text-white px-6 py-20 lg:px-12 text-center">
        <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">Get In Touch</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          Let&apos;s Build Infrastructure That Delivers
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-12">
          Ready to strengthen your project delivery? Reach out to discuss how Terraline can support your
          next project.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm">
          <a
            href="tel:+251911635001"
            className="flex flex-col items-center gap-2 text-white/80 hover:text-accent transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center">
              <Phone size={16} />
            </div>
            +251 911 635 001
          </a>
          <a
            href="tel:+251911935348"
            className="flex flex-col items-center gap-2 text-white/80 hover:text-accent transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center">
              <Phone size={16} />
            </div>
            +251 911 935 348
          </a>
          <a
            href="mailto:info@terralineengineering.com"
            className="flex flex-col items-center gap-2 text-white/80 hover:text-accent transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center">
              <Mail size={16} />
            </div>
            info@terralineengineering.com
          </a>
          <div className="flex flex-col items-center gap-2 text-white/80">
            <div className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center">
              <MapPin size={16} />
            </div>
            Hayahulet Area, Addis Ababa
          </div>
        </div>

        <a
          href="https://www.terralineengineering.com"
          target="_blank"
          rel="noreferrer"
          className="text-white/40 text-sm hover:text-accent transition-colors"
        >
          www.terralineengineering.com
        </a>
      </section>
    </>
  )
}
