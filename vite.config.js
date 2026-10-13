import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ env }) => {
  const isPreview = process.env.BASE44_PREVIEW_MODE === '1'
  const sandboxDomain = process.env.BASE44_SANDBOX_HOST_DOMAIN

  const allowedHosts = []
  if (isPreview && sandboxDomain) {
    // Allow subdomains of the sandbox host domain (e.g. *.e2b.app)
    allowedHosts.push(`.${sandboxDomain}`)
  }

  return {
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173,
      allowedHosts: allowedHosts.length > 0 ? allowedHosts : undefined,
      watch: {
        usePolling: true,
        interval: 500,
      },
    },
  }
})
