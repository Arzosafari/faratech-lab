import { useState } from 'react'
import { Mail, Instagram, Linkedin, Send, AlertCircle, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import Button from '../components/Button.jsx'
import { siteConfig } from '../config/site.js'
import {
  submitContactRequest,
  validateContactForm,
  CONTACT_DELIVERY_ENABLED,
} from '../data/contact.js'

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

const channels = [
  { icon: Mail, label: 'Email', value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Instagram, label: 'Instagram', value: '@faratechlab_', href: siteConfig.contact.instagram },
  { icon: Linkedin, label: 'LinkedIn', value: 'FaraTech', href: siteConfig.contact.linkedin },
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
    `w-full rounded-xl border bg-ink-soft px-4 py-3 text-mist placeholder:text-mist-mute transition-colors focus:outline-none focus:border-line-strong ${
      errors[fieldName] ? 'border-red-500/60' : 'border-line'
    }`

  return (
    <div>
      <PageHero
        label="Contact"
        title="Let's build something meaningful."
        intro="Tell us about your idea or your challenge, and let's start a conversation."
      />

      <section className="section">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Channels */}
            <div className="lg:col-span-4">
              <p className="label mb-6">Direct</p>
              <div className="border-t border-line">
                {channels.map(({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center justify-between gap-4 border-b border-line py-5 transition-colors hover:bg-white/[0.02]"
                  >
                    <span className="flex items-center gap-3">
                      <Icon size={16} className="text-mist-mute" />
                      <span className="label !text-mist-mute">{label}</span>
                    </span>
                    <span className="text-sm text-mist-dim transition-colors group-hover:text-mist">
                      {value}
                    </span>
                  </a>
                ))}
              </div>

              {siteConfig.contact.linkedinNeedsPublicUrl && (
                <p className="body-text mt-6 text-[13px] !text-mist-mute">
                  Note: the LinkedIn link currently points to an admin dashboard — confirm the
                  public company URL before launch.
                </p>
              )}
            </div>

            {/* Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              {!CONTACT_DELIVERY_ENABLED && status === 'idle' && (
                <div className="mb-8 flex items-start gap-3 rounded-xl border border-line bg-ink-soft p-4">
                  <AlertCircle size={17} className="mt-0.5 flex-shrink-0 text-ember" />
                  <p className="body-text text-[13px]">
                    Message delivery isn't configured yet. Submitting shows a confirmation, but
                    nothing is sent — please email{' '}
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="font-medium text-mist underline"
                    >
                      {siteConfig.contact.email}
                    </a>{' '}
                    for now.
                  </p>
                </div>
              )}

              {status === 'success' && (
                <div className="mb-8 flex items-start gap-3 rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                  <CheckCircle2 size={17} className="mt-0.5 flex-shrink-0 text-green-400" />
                  <p className="body-text text-[13px] text-green-200">{statusMessage}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-8 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                  <AlertCircle size={17} className="mt-0.5 flex-shrink-0 text-red-400" />
                  <p className="body-text text-[13px] text-red-200">{statusMessage}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="label mb-3 block !text-mist-dim">
                      Full name *
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
                      <p className="mt-2 text-[13px] text-red-400">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="label mb-3 block !text-mist-dim">
                      Email address *
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
                      <p className="mt-2 text-[13px] text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="label mb-3 block !text-mist-dim">
                    Company (optional)
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

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="projectType" className="label mb-3 block !text-mist-dim">
                      Project type *
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
                      <p className="mt-2 text-[13px] text-red-400">{errors.projectType}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="budget" className="label mb-3 block !text-mist-dim">
                      Budget (optional)
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
                  <label htmlFor="description" className="label mb-3 block !text-mist-dim">
                    Project description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    className={inputClass('description')}
                    placeholder="What would you like to build?"
                    aria-invalid={!!errors.description}
                  />
                  {errors.description && (
                    <p className="mt-2 text-[13px] text-red-400">{errors.description}</p>
                  )}
                </div>

                <Button type="submit" size="lg" variant="light" disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    'Sending…'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
