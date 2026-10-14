/**
 * Services Data Access Layer
 * --------------------------
 * Returns service definitions used across the Home and Services pages.
 * To connect a backend, replace these with API calls.
 *
 * Future backend integration:
 *   GET /api/services → getServices()
 */

/**
 * @typedef {Object} Service
 * @property {string} id
 * @property {string} title
 * @property {string} shortDescription - One-line summary for the homepage matrix
 * @property {string} fullDescription  - Short paragraph for the Services page
 * @property {string[]} highlights      - Bullet points
 * @property {string[]} useCases       - Example use cases
 * @property {string[]} deliverables   - What we deliver
 * @property {string} icon             - Lucide icon name
 */

/** @type {Service[]} */
const services = [
  {
    id: 'web-development',
    title: 'Web Design & Development',
    shortDescription: 'Responsive websites with clear, usable interfaces.',
    fullDescription:
      'We design and build responsive, accessible websites with clean code and fast load times — easy to maintain and grow with you.',
    highlights: ['Responsive by design', 'Clear, usable interfaces', 'Fast, accessible, maintainable'],
    useCases: ['Marketing and portfolio sites', 'Product landing pages'],
    deliverables: ['Responsive website', 'Clean documented frontend', 'SEO foundation'],
    icon: 'Monitor',
  },
  {
    id: 'custom-software',
    title: 'Custom Software',
    shortDescription: 'Tools shaped around how your business actually works.',
    fullDescription:
      'We build software tailored to your workflows — from internal dashboards to customer-facing platforms — so the tool fits the business, not the reverse.',
    highlights: ['Built to your workflow', 'Integrates with your systems', 'Documented and handed off'],
    useCases: ['Internal dashboards', 'Customer portals'],
    deliverables: ['Custom application', 'System integrations', 'Documentation'],
    icon: 'Code2',
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    shortDescription: 'AI that solves a real problem — not a buzzword.',
    fullDescription:
      'We design AI applications, assistants, and machine-learning features that do something genuinely useful — with their capabilities and limits documented clearly.',
    highlights: ['AI assistants and applications', 'Intelligent document processing', 'Clear on limits'],
    useCases: ['Support and internal assistants', 'Document processing'],
    deliverables: ['AI feature or application', 'Deployment guidance', 'Capability documentation'],
    icon: 'BrainCircuit',
  },
  {
    id: 'automation',
    title: 'Business Automation',
    shortDescription: 'Automation that removes repetitive work.',
    fullDescription:
      'We connect systems and automate repetitive tasks to cut manual effort and errors, freeing your team for higher-value work.',
    highlights: ['Workflow automation', 'Fewer repetitive tasks', 'Systems connected end to end'],
    useCases: ['Data sync and entry', 'Reporting and notifications'],
    deliverables: ['Automated workflow', 'System integrations', 'Maintenance guidance'],
    icon: 'Workflow',
  },
]

/**
 * Get all services.
 * @returns {Promise<Service[]>}
 */
export async function getServices() {
  return services
}

export default services
