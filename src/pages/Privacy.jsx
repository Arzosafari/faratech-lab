import Reveal from '../components/Reveal.jsx'

export default function Privacy() {
  return (
    <div>
      <section className="bg-midnight-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="container-content relative pt-28 pb-16 md:pb-20">
          <p className="label-light mb-5">Legal</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/40">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding surface-ivory">
        <div className="container-content max-w-prose space-y-8">
          <Reveal>
            <div className="rounded-md bg-electric/5 border border-border-l p-5">
              <p className="body-sm leading-relaxed">
                This is a placeholder privacy policy. A complete policy will be
                published before launch. Please replace this content with your
                finalized privacy policy.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="label mb-3">Overview</p>
              <p className="body-text">
                FaraTech respects your privacy. This policy describes how we
                collect, use, and protect information when you interact with our
                website.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="label mb-3">Information We Collect</p>
              <p className="body-text">
                When you submit our contact form, we collect the information you
                provide — your name, email, company, project type, budget, and
                project description. We use this information solely to respond to
                your inquiry.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="label mb-3">How We Use Information</p>
              <p className="body-text">
                We use the information you provide to communicate with you about
                your project or inquiry. We do not sell or share your information
                with third parties.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="label mb-3">Contact</p>
              <p className="body-text">
                If you have questions about this policy, please contact us at{' '}
                <a
                  href="mailto:faratechteam@gmail.com"
                  className="text-electric hover:underline"
                >
                  faratechteam@gmail.com
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
