import { Link } from 'react-router-dom'

const founders = [
  {
    name: 'Henok A. Mamo',
    role: 'Co-Founder & Managing Director',
    title: 'Civil Engineer & Business Strategist',
    education: 'MSc in Civil Engineering (Road & Transport), BA in Business Management',
    bio: 'Consulted and established more than six startups. Leads commercial strategy, partnerships, and project delivery systems.',
    initials: 'HM',
  },
  {
    name: 'Natnael G. Mekonnen',
    role: 'Co-Founder & Technical Director',
    title: 'Civil & Infrastructural Engineer',
    education: 'MSc in Civil Engineering (Geotechnical)',
    bio: 'Leads technical delivery, quality assurance, and engineering production standards across all project engagements.',
    initials: 'NM',
  },
]

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary text-primary-foreground px-6 py-20 lg:px-12 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">Who We Are</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-2xl mb-6 leading-tight">
            Company Overview
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
            Terraline Consulting Engineers is an Ethiopia-based firm delivering disciplined engineering
            production across highway, transport, and geotechnical disciplines.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card border-l-4 border-l-accent">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Our Mission</p>
            <p className="text-foreground text-lg leading-relaxed font-medium font-heading">
              "To strengthen project outcomes through disciplined engineering production and
              QA/QC-driven delivery systems."
            </p>
          </div>
          <div className="card border-l-4 border-l-primary">
            <p className="text-primary text-xs font-semibold tracking-[0.25em] uppercase mb-3">Our Vision</p>
            <p className="text-foreground text-lg leading-relaxed font-medium font-heading">
              "To be a trusted Ethiopian partner for safe, durable, and cost-effective road infrastructure."
            </p>
          </div>
        </div>
      </section>

      {/* Engineering Infrastructure section */}
      <section className="section-padding bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">What Sets Us Apart</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Engineering Infrastructure
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              We provide services across the highway and transport project lifecycle, delivered as standalone
              work packages or sub-consultancy arrangements.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              We function as an extension of your engineering team with transparent processes and predictable
              delivery. Our structured workflows and internal technical review ensure consistent quality on
              every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">Leadership</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Founders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((f) => (
              <div key={f.name} className="card hover:shadow-md transition-shadow">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl font-heading mb-5">
                  {f.initials}
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-1">{f.name}</h3>
                <p className="text-accent text-sm font-semibold mb-1">{f.role}</p>
                <p className="text-muted-foreground text-sm mb-3">{f.title}</p>
                <p className="text-xs text-primary/70 font-medium bg-muted rounded px-2 py-1 inline-block mb-4">
                  {f.education}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground px-6 py-16 lg:px-12 text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">Ready to Work Together?</h2>
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
