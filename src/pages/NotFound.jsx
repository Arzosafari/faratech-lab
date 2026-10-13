import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-cream">
      <div className="container-content text-center py-20">
        <p className="text-7xl md:text-9xl font-bold text-navy/10">404</p>
        <h1 className="heading-2 mt-4">Page Not Found</h1>
        <p className="mt-3 text-body leading-relaxed max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button to="/" className="mt-8">
          <Home size={18} />
          Back to Home
        </Button>
      </div>
    </div>
  )
}
