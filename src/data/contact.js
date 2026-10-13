/**
 * Contact Form Submission Adapter
 * -------------------------------
 * This module handles contact form submissions. Currently, message delivery
 * is DISABLED — the adapter validates data but does not send it anywhere.
 *
 * To enable real delivery, implement the `submitContactRequest` function
 * with a call to your backend API or an authorized form service.
 *
 * Future backend integration:
 *   POST /api/contact → submitContactRequest(data)
 *
 * The form must not falsely report that a message was sent if no backend
 * or email service is connected. Until then, it returns a clear status
 * indicating that delivery is not yet configured.
 */

export const CONTACT_DELIVERY_ENABLED = false

/**
 * Submit a contact request.
 * @param {Object} data - Contact form data
 * @param {string} data.fullName
 * @param {string} data.email
 * @param {string} [data.company]
 * @param {string} data.projectType
 * @param {string} [data.budget]
 * @param {string} data.description
 * @returns {Promise<{success: boolean, message: string}>}
 */
export async function submitContactRequest(data) {
  // Simulate network latency for realistic UX
  await new Promise((resolve) => setTimeout(resolve, 800))

  if (!CONTACT_DELIVERY_ENABLED) {
    return {
      success: false,
      message:
        'Message delivery is not yet configured. Please email us directly at faratechteam@gmail.com and we will respond promptly.',
    }
  }

  // When backend is connected, POST to your API here:
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // })
  // return response.ok
  //   ? { success: true, message: 'Thank you for reaching out. We will be in touch soon.' }
  //   : { success: false, message: 'Something went wrong. Please try again or email us directly.' }

  return { success: true, message: 'Thank you for reaching out. We will be in touch soon.' }
}

/**
 * Validate contact form data.
 * @param {Object} data
 * @returns {Object} - { isValid: boolean, errors: Object }
 */
export function validateContactForm(data) {
  const errors = {}

  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name.'
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!data.projectType) {
    errors.projectType = 'Please select a project type.'
  }

  if (!data.description || data.description.trim().length < 10) {
    errors.description = 'Please tell us a bit about your project (at least 10 characters).'
  }

  return { isValid: Object.keys(errors).length === 0, errors }
}
