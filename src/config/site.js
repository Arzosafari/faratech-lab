/**
 * FaraTech Site Configuration
 * Central place for business info, navigation, and editable content.
 * Update these values to change contact details, social links, or navigation.
 */

export const siteConfig = {
  name: 'FaraTech',
  tagline: 'Your Ideas. Our Technology. Infinite Possibilities.',
  supportingStatement: 'Ideas into Digital Solutions.',
  description:
    'FaraTech is a technology studio that transforms ideas into practical digital products and intelligent solutions.',

  contact: {
    email: 'faratechteam@gmail.com',
    instagram: 'https://www.instagram.com/faratechlab_',
    // NOTE: The LinkedIn URL below points to an admin dashboard.
    // Replace with the company's public-facing LinkedIn URL before launch.
    linkedin: 'https://www.linkedin.com/company/146715107',
    linkedinNeedsPublicUrl: true,
  },

  nav: [
    { label: 'Home', path: '/' },
    { label: 'Work', path: '/work' },
    { label: 'Services', path: '/services' },
    { label: 'AI Lab', path: '/ai-lab' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],

  cta: {
    primary: { label: 'Start a Project', path: '/contact' },
  },
}

export default siteConfig
