/**
 * Project Data Access Layer
 * --------------------------
 * This module provides the data access interface for projects.
 * Currently backed by in-memory mock data. To connect a real backend,
 * replace the function bodies with API calls — the function signatures
 * and return shapes stay the same.
 *
 * Future backend integration:
 *   GET    /api/projects            → getPublishedProjects()
 *   GET    /api/projects/:slug      → getProjectBySlug(slug)
 *   GET    /api/projects/featured   → getFeaturedProjects()
 *   GET    /api/admin/projects      → getAdminProjects()
 *   POST   /api/admin/projects      → createProject(data)
 *   PUT    /api/admin/projects/:id  → updateProject(id, data)
 *   PATCH  /api/admin/projects/:id  → publishProject(id) / unpublishProject(id)
 *   DELETE /api/admin/projects/:id  → deleteProject(id)
 */

/**
 * @typedef {Object} Project
 * @property {string} id          - Unique identifier
 * @property {string} slug        - URL-friendly identifier
 * @property {string} title       - Project title
 * @property {string} excerpt     - Short description for listings
 * @property {string} description - Full case-study content (supports sections)
 * @property {string} coverImage  - Cover image URL
 * @property {string|null} videoUrl - Optional video URL
 * @property {string} category    - Primary category
 * @property {string[]} tags      - Technology tags
 * @property {string[]} gallery   - Gallery media URLs
 * @property {string|null} projectUrl - Live demo or project link
 * @property {'published'|'draft'} status - Publication status
 * @property {boolean} featured   - Whether project is featured
 * @property {number} order        - Display order
 * @property {string} createdAt    - ISO date string
 * @property {string} updatedAt    - ISO date string
 * @property {Object} caseStudy    - Structured case study content
 */

/** @type {Project[]} */
const mockProjects = []

/**
 * Get all published projects, ordered by display order.
 * @returns {Promise<Project[]>}
 */
export async function getPublishedProjects() {
  return mockProjects
    .filter((p) => p.status === 'published')
    .sort((a, b) => a.order - b.order)
}

/**
 * Get a single published project by slug.
 * @param {string} slug
 * @returns {Promise<Project|null>}
 */
export async function getProjectBySlug(slug) {
  return mockProjects.find((p) => p.slug === slug && p.status === 'published') || null
}

/**
 * Get featured published projects.
 * @returns {Promise<Project[]>}
 */
export async function getFeaturedProjects() {
  return mockProjects
    .filter((p) => p.status === 'published' && p.featured)
    .sort((a, b) => a.order - b.order)
}

/**
 * Get all projects including drafts (admin only).
 * @returns {Promise<Project[]>}
 */
export async function getAdminProjects() {
  return [...mockProjects].sort((a, b) => a.order - b.order)
}

/**
 * Create a new project (admin only).
 * @param {Partial<Project>} data
 * @returns {Promise<Project>}
 */
export async function createProject(data) {
  const now = new Date().toISOString()
  const project = {
    id: crypto.randomUUID(),
    slug: data.slug || data.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || '',
    title: data.title || '',
    excerpt: data.excerpt || '',
    description: data.description || '',
    coverImage: data.coverImage || '',
    videoUrl: data.videoUrl || null,
    category: data.category || 'Web Development',
    tags: data.tags || [],
    gallery: data.gallery || [],
    projectUrl: data.projectUrl || null,
    status: data.status || 'draft',
    featured: data.featured || false,
    order: data.order ?? mockProjects.length,
    createdAt: now,
    updatedAt: now,
    caseStudy: data.caseStudy || {},
  }
  mockProjects.push(project)
  return project
}

/**
 * Update an existing project (admin only).
 * @param {string} id
 * @param {Partial<Project>} data
 * @returns {Promise<Project|null>}
 */
export async function updateProject(id, data) {
  const project = mockProjects.find((p) => p.id === id)
  if (!project) return null
  Object.assign(project, data, { updatedAt: new Date().toISOString() })
  return project
}

/**
 * Publish a project (admin only).
 * @param {string} id
 * @returns {Promise<Project|null>}
 */
export async function publishProject(id) {
  return updateProject(id, { status: 'published' })
}

/**
 * Unpublish a project (admin only).
 * @param {string} id
 * @returns {Promise<Project|null>}
 */
export async function unpublishProject(id) {
  return updateProject(id, { status: 'draft' })
}

/**
 * Delete a project (admin only).
 * @param {string} id
 * @returns {Promise<boolean>}
 */
export async function deleteProject(id) {
  const index = mockProjects.findIndex((p) => p.id === id)
  if (index === -1) return false
  mockProjects.splice(index, 1)
  return true
}
