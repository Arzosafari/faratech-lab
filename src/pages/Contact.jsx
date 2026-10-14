import { useState } from 'react'
import { Mail, Instagram, Linkedin, Send, AlertCircle, CheckCircle2 } from 'lucide-react'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { siteConfig } from '../config/site.js'
import { submitContactRequest, validateContactForm, CONTACT_DELIVERY_ENABLED } from '../data/contact.js'

const projectTypes = [
  'Web Development & Design',
  'Custom Software Development',
  'Artificial Intelligence Solutions',
  'Business Process Automation',
  'Not sure yet',
]

const budgetRanges = [
  'Under $5,000',
  '$5,000 — $15,000',
  '$15,000 — $50,000',
  '$50,000+',
  "Let's discuss",
]

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    description: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { isValid, errors: validationErrors } = validateContactForm(formData)
    if (!isValid) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    const result = await submitContactRequest(formData)
    setStatusMessage(result.message)
    setStatus(result.success ? 'success' : 'error')

    if (result.success) {
      setFormData({
        fullName: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        description: '',
      })
    }
  }

  const inputClass = (fieldName) =>
    `w-full rounded-md border px-4 py-2.5 text-midnight placeholder-steel/40 bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-electric/20 ${
      errors[fieldName] ? 'border-red-400' : 'border-border-l'
    }`

  return (
    <div>
      {/* Editorial header — dark */}
      <section className="bg-midnight-radial text-white relative overflow-hidden min-h-[50vh] flex items-end">
        <div className="absolute inset-0 grid-dark opacity-30" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-electric/5 rounded-full blur-[120px]" />
        <div className="container-content relative pt-28 pb-16 md:pb-20">
          <p className="label-light mb-5">Contact</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tightest leading-[1.05] max-w-2xl">
            Let's Build Something Meaningful.
          </h1>
          <p className="mt-5 text-lg text-white/55 leading-relaxed max-w-2xl">
            Have a project in mind, a business challenge to solve, or an idea
            you'd like to explore? Tell us about it and let's start a
            conversation.
          </p>
        </div>
      </section>

      <section className="section-padding surface-ivory">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact info — dark card */}
            <div className="lg:col-span-4">
              <Reveal>
                <div className="rounded-lg bg-midnight text-white p-8 relative overflow-hidden sticky top-24">
                  <div className="absolute inset-0 grid-dark opacity-20" />
                  <div className="absolute top-0 right-0 w-40 h-40 bg-electric/10 rounded-full blur-[60px]" />
                  <div className="relative">
                    <h2 className="font-display text-lg font-semibold text-white mb-6">
                      Contact Information
                    </h2>
                    <div className="space-y-4">
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-3 text-white/60 hover:text-electric transition-colors"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
                          <Mail size={17} />
                        </div>
                        <span className="text-sm">{siteConfig.contact.email}</span>
                      </a>
                      <a
                        href={siteConfig.contact.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/60 hover:text-electric transition-colors"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
                          <Instagram size={17} />
                        </div>
                        <span className="text-sm">Instagram</span>
                      </a>
                      <a
                        href={siteConfig.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/60 hover:text-electric transition-colors"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5">
                          <Linkedin size={17} />
                        </div>
                        <span className="text-sm">LinkedIn</span>
                      </a>
                    </div>

                    {siteConfig.contact.linkedinNeedsPublicUrl && (
                      <p className="mt-6 text-xs text-white/30 bg-white/5 rounded-md p-3 leading-relaxed">
                        Note: The LinkedIn URL is currently pointing to an admin
                        dashboard. Please confirm the public company URL before
                        launch.
                      </p>
                    )}

                    <p className="mt-8 text-sm text-white/40 leading-relaxed">
                      Prefer email? Reach us directly at{' '}
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-electric hover:underline"
                      >
                        {siteConfig.contact.email}
                      </a>{' '}
                      and we'll respond promptly.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <div className="rounded-lg bg-white border border-border-l p-8 md:p-10">
                  {!CONTACT_DELIVERY_ENABLED && status === 'idle' && (
                    <div className="mb-6 flex items-start gap-3 rounded-md bg-amber-50 border border-amber-200 p-4">
                      <AlertCircle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-amber-800 leading-relaxed">
                        Message delivery is not yet configured. Submitting the
                        form will show a confirmation, but your message will not
                        be delivered. Please email us directly at{' '}
                        <a
                          href={`mailto:${siteConfig.contact.email}`}
                          className="font-medium underline"
                        >
                          {siteConfig.contact.email}
                        </a>
                        .
                      </p>
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="mb-6 flex items-start gap-3 rounded-md bg-green-50 border border-green-200 p-4">
                      <CheckCircle2 size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-green-800 leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="mb-6 flex items-start gap-3 rounded-md bg-red-50 border border-red-200 p-4">
                      <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-800 leading-relaxed">
                        {statusMessage}
                      </p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-medium text-midnight mb-1.5"
                        >
                          Full name <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={inputClass('fullName')}
                          placeholder="Your name"
                          aria-invalid={!!errors.fullName}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-midnight mb-1.5"
                        >
                          Email address <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass('email')}
                          placeholder="you@example.com"
                          aria-invalid={!!errors.email}
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-midnight mb-1.5"
                      >
                        Company or organization{' '}
                        <span className="text-steel/50 font-normal">(optional)</span>
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass('company')}
                        placeholder="Your company"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block text-sm font-medium text-midnight mb-1.5"
                        >
                          Type of project <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className={inputClass('projectType')}
                          aria-invalid={!!errors.projectType}
                        >
                          <option value="">Select a type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        {errors.projectType && (
                          <p className="mt-1 text-sm text-red-500">
                            {errors.projectType}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="budget"
                          className="block text-sm font-medium text-midnight mb-1.5"
                        >
                          Estimated budget{' '}
                          <span className="text-steel/50 font-normal">(optional)</span>
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className={inputClass('budget')}
                        >
                          <option value="">Select a range</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-midnight mb-1.5"
                      >
                        Project description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        className={inputClass('description')}
                        placeholder="Tell us about your project, your goals, and what you'd like to build."
                        aria-invalid={!!errors.description}
                      />
                      {errors.description && (
                        <p className="mt-1 text-sm text-red-500">
                          {errors.description}
                        </p>
                      )}
                    </div>

                    <div>
                      <Button type="submit" size="lg" disabled={status === 'submitting'}>
                        {status === 'submitting' ? (
                          <>Sending…</>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} />
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
