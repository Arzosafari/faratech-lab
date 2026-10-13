export default function Privacy() {
  return (
    <div>
      <section className="bg-white border-b border-border">
        <div className="container-content py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-body">
            Last updated: October 2026
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content max-w-3xl space-y-8">
          <div className="rounded-lg bg-navy-light border border-border p-5">
            <p className="text-body text-sm leading-relaxed">
              This is a placeholder privacy policy. A complete policy will be published before
              launch. Please replace this content with your finalized privacy policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Overview</h2>
            <p className="text-body leading-relaxed">
              FaraTech respects your privacy. This policy describes how we collect, use, and protect
              information when you interact with our website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Information We Collect</h2>
            <p className="text-body leading-relaxed">
              When you submit our contact form, we collect the information you provide — your name,
              email, company, project type, budget, and project description. We use this information
              solely to respond to your inquiry.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">How We Use Information</h2>
            <p className="text-body leading-relaxed">
              We use the information you provide to communicate with you about your project or
              inquiry. We do not sell or share your information with third parties.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-navy mb-3">Contact</h2>
            <p className="text-body leading-relaxed">
              If you have questions about this policy, please contact us at{' '}
              <a href="mailto:faratechteam@gmail.com" className="text-accent hover:underline">
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
