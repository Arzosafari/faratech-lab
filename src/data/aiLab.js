/**
 * AI Lab Data Access Layer
 * ------------------------
 * Returns AI Lab demo definitions. To connect a backend, replace with API calls.
 *
 * Future backend integration:
 *   GET /api/ai-lab/demos → getAiLabDemos()
 */

/**
 * @typedef {Object} AiLabDemo
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} category
 * @property {string} previewMedia - Preview image or video URL (empty = placeholder)
 * @property {'available'|'in-development'|'coming-soon'} status
 * @property {string|null} detailPage - Optional detail page URL
 */

/** @type {AiLabDemo[]} */
const aiLabDemos = []

/**
 * Get all AI Lab demos.
 * @returns {Promise<AiLabDemo[]>}
 */
export async function getAiLabDemos() {
  return aiLabDemos
}

export default aiLabDemos
