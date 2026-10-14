import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'

const sections = [
  {
    title: 'Overview',
    text: 'FaraTech respects your privacy. This policy describes how we handle information when you use our website.',
  },
  {
    title: 'Information We Collect',
    text: 'When you submit the contact form we collect what you provide — name, email, company, project type, budget, and description. We use it only to respond to your inquiry.',
  },
  {
    title: 'How We Use Information',
    text: 'We use your information to communicate about your project. We never sell or share it with third parties.',
  },
  {
    title: 'Contact',
    text: 'Questions about this policy? Email faratechteam@gmail.com.',
  },
]

export default function Privacy() {
  return (
    <div>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        intro="Last updated: October 2026"
      />

      <section className="section">
        <div className="container-content">
          <div className="rounded-xl border border-line bg-ink-soft p-5">
            <p className="body-text text-[13px]">
              This is a placeholder policy. Replace it with your finalized version before launch.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:col-start-6">
              {sections.map((section) => (
                <Reveal key={section.title} className="border-t border-line py-8">
                  <h2 className="text-xl font-semibold tracking-tight text-mist">
                    {section.title}
                  </h2>
                  <p className="body-text mt-4">
                    {section.text.includes('faratechteam@gmail.com') ? (
                      <>
                        Questions about this policy? Email{' '}
                        <a
                          href="mailto:faratechteam@gmail.com"
                          className="text-mist underline transition-colors hover:text-ember"
                        >
                          faratechteam@gmail.com
                        </a>
                        .
                      </>
                    ) : (
                      section.text
                    )}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
