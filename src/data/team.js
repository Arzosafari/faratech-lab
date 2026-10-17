/**
 * Team Data Access Layer
 * ----------------------
 * Returns team member definitions. To connect a backend, replace with API calls.
 *
 * Future backend integration:
 *   GET /api/team → getTeamMembers()
 */

/**
 * @typedef {Object} TeamMember
 * @property {string} id
 * @property {string} name
 * @property {string} role
 * @property {string} bio
 * @property {string} portrait      - Portrait image URL (empty = placeholder)
 * @property {string|null} linkedin - Optional LinkedIn profile URL
 * @property {string[]} focusAreas  - Areas of focus
 */

/** @type {TeamMember[]} */
const teamMembers = [
  {
    id: 'arezoo-safari',
    name: 'Arezoo Safari',
    role: 'Co-Founder · AI & Software',
    bio: 'Builds AI, machine learning, and software that turns complex technical ideas into practical products.',
    portrait: '',
    linkedin: null,
    focusAreas: ['Artificial Intelligence', 'Machine Learning', 'Software Solutions'],
  },
  {
    id: 'mahsa-arjmandfar',
    name: 'Mahsa Arjmandfar',
    role: 'Co-Founder · Software & Digital',
    bio: 'Builds digital products and software shaped around real user and business needs.',
    portrait: '',
    linkedin: null,
    focusAreas: ['Software Engineering', 'Digital Products', 'User-Centered Design'],
  },
]

/**
 * Get all team members.
 * @returns {Promise<TeamMember[]>}
 */
export async function getTeamMembers() {
  return teamMembers
}

export default teamMembers
