export default function Privacy() {
  return (
    <div>
      <section className="bg-navy-radial text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-[100px]" />
        <div className="container-content relative py-20 md:py-28">
          <p className="eyebrow !text-brand-light mb-4">Legal</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-white/50">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding surface-cream">
        <div className="container-content max-w-3xl space-y-8">
          <div className="rounded-xl bg-brand-light border border-border p-5">
            <p className="text-body text-sm leading-relaxed">
              This is a placeholder privacy policy. A complete policy will be published before
              launch. Please replace this content with your finalized privacy policy.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-3">Overview</h2>
            <p className="text-body leading-relaxed">
              FaraTech respects your privacy. This policy describes how we collect, use, and
              protect information when you interact with our website.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-3">Information We Collect</h2>
            <p className="text-body leading-relaxed">
              When you submit our contact form, we collect the information you provide — your
              name, email, company, project type, budget, and project description. We use this
              information solely to respond to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-3">How We Use Information</h2>
            <p className="text-body leading-relaxed">
              We use the information you provide to communicate with you about your project or
              inquiry. We do not sell or share your information with third parties.
            </p>
          </div>

          <div>
            <h2 className="heading-3 mb-3">Contact</h2>
            <p className="text-body leading-relaxed">
              If you have questions about this policy, please contact us at{' '}
              <a href="mailto:faratechteam@gmail.com" className="text-brand hover:underline">
                faratechteam@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
