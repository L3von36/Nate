import { MapPin, Globe, Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-primary text-primary-foreground px-6 py-20 lg:px-12 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-4">Reach Out</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold max-w-xl mb-6 leading-tight">
            Get In Touch
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-xl leading-relaxed">
            Ready to strengthen your project delivery? Reach out to discuss how Terraline can support
            your next project.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Contact Information</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-0.5">Location</p>
                  <p className="text-muted-foreground text-sm">Hayahulet Area, Addis Ababa</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center shrink-0">
                  <Globe size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-0.5">Website</p>
                  <a
                    href="https://www.terralineengineering.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary text-sm hover:text-accent transition-colors"
                  >
                    www.terralineengineering.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/15 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-0.5">Email</p>
                  <a href="mailto:info@terralineengineering.com" className="text-primary text-sm hover:text-accent transition-colors">
                    info@terralineengineering.com
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-10 p-6 bg-muted rounded-lg border border-border">
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong className="text-foreground">Highway infrastructure</strong> — We serve international firms,
                NGOs, government authorities, and contractors across Ethiopia and beyond. Reach out to start the
                conversation about your next infrastructure project.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">Send a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full border border-border rounded px-4 py-2.5 text-sm text-foreground bg-background
                             placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border border-border rounded px-4 py-2.5 text-sm text-foreground bg-background
                             placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Organization</label>
                <input
                  type="text"
                  placeholder="Company / Organization"
                  className="w-full border border-border rounded px-4 py-2.5 text-sm text-foreground bg-background
                             placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full border border-border rounded px-4 py-2.5 text-sm text-foreground bg-background
                             placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:bg-primary-light transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
