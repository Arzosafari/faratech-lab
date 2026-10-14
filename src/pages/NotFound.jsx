import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-ivory">
      <div className="container-content text-center py-20">
        <p className="font-display text-7xl md:text-9xl font-bold text-midnight/8">
          404
        </p>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-midnight mt-4">
          Page Not Found
        </h1>
        <p className="mt-3 body-lg max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back on track.
        </p>
        <Button to="/" className="mt-8">
          <Home size={18} />
          Back to Home
        </Button>
      </div>
    </div>
  )
}
