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
 * @property {string} shortDescription - Used on the homepage
 * @property {string} fullDescription  - Used on the Services page
 * @property {string[]} highlights      - Bullet points
 * @property {string[]} useCases       - Example use cases
 * @property {string[]} deliverables   - What we deliver
 * @property {string} icon             - Lucide icon name
 */

/** @type {Service[]} */
const services = [
  {
    id: 'web-development',
    title: 'Web Development & Design',
    shortDescription:
      'Modern, responsive websites with user-focused interfaces, built for performance, accessibility, and maintainability.',
    fullDescription:
      'We create responsive, accessible, and thoughtfully designed websites that help businesses present their identity and serve their users. Every site is built with clean code, fast load times, and a structure that is easy to maintain and grow.',
    highlights: [
      'Modern, responsive websites',
      'User-focused interfaces',
      'Performance, accessibility, and maintainability',
    ],
    useCases: [
      'Business portfolio and marketing sites',
      'Product landing pages with clear conversion paths',
      'Content-driven sites with structured navigation',
    ],
    deliverables: [
      'Custom-designed, responsive website',
      'Optimized frontend with clean, documented code',
      'SEO foundation and social sharing metadata',
    ],
    icon: 'Monitor',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    shortDescription:
      'Tailored applications and business tools with custom workflows and integrations, designed around operational needs.',
    fullDescription:
      'We develop software tailored to specific business workflows, operational requirements, and product ideas. From internal tools to customer-facing platforms, we build software that fits the way your business actually works.',
    highlights: [
      'Tailored applications and business tools',
      'Custom workflows and integrations',
      'Software designed around operational needs',
    ],
    useCases: [
      'Internal dashboards and management tools',
      'Customer portals and self-service platforms',
      'API integrations connecting existing systems',
    ],
    deliverables: [
      'Custom application built to your specifications',
      'Integration with your existing tools and data',
      'Documentation and handoff for your team',
    ],
    icon: 'Code2',
  },
  {
    id: 'ai-solutions',
    title: 'Artificial Intelligence Solutions',
    shortDescription:
      'AI-powered applications, intelligent assistants, and machine learning solutions integrated into useful products.',
    fullDescription:
      'We design and implement AI-powered applications, intelligent assistants, machine learning systems, and AI features appropriate to the problem. We focus on making AI genuinely useful rather than adding it as a buzzword.',
    highlights: [
      'AI-powered applications and assistants',
      'Intelligent information processing',
      'Machine learning and data-driven solutions',
      'AI features integrated into useful products',
    ],
    useCases: [
      'Intelligent document and text processing',
      'AI assistants for customer support or internal use',
      'Data-driven recommendation and classification systems',
    ],
    deliverables: [
      'AI-powered feature or application',
      'Model integration and deployment guidance',
      'Clear documentation of capabilities and limitations',
    ],
    icon: 'BrainCircuit',
  },
  {
    id: 'automation',
    title: 'Business Process Automation',
    shortDescription:
      'Workflow automation, repetitive task reduction, and intelligent system integrations for more efficient operations.',
    fullDescription:
      'We help businesses streamline repetitive tasks and connect systems through practical automation and intelligent workflows. The goal is to reduce manual effort, minimize errors, and free your team to focus on higher-value work.',
    highlights: [
      'Workflow automation',
      'Repetitive task reduction',
      'Intelligent system integrations',
      'More efficient digital operations',
    ],
    useCases: [
      'Automated data entry and synchronization',
      'Scheduled reporting and notifications',
      'Connecting disconnected tools into a unified workflow',
    ],
    deliverables: [
      'Automated workflow tailored to your process',
      'Integration between your existing systems',
      'Monitoring and maintenance guidance',
    ],
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
