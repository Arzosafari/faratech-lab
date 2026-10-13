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
    role: 'Co-Founder | AI & Software Development',
    bio: 'Focused on artificial intelligence, machine learning, intelligent applications, and software solutions that turn complex technical ideas into practical experiences.',
    portrait: '',
    linkedin: null,
    focusAreas: [
      'Artificial Intelligence',
      'Machine Learning',
      'Intelligent Applications',
      'Software Solutions',
    ],
  },
  {
    id: 'mahsa-arjmandfar',
    name: 'Mahsa Arjmandfar',
    role: 'Co-Founder | Software & Digital Solutions',
    bio: 'Focused on collaborative solution development, software engineering, and building digital products that respond to real user and business needs.',
    portrait: '',
    linkedin: null,
    focusAreas: [
      'Software Engineering',
      'Digital Product Development',
      'Collaborative Solutions',
      'User-Centered Design',
    ],
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
