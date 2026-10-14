import { ArrowLeft } from 'lucide-react'
import Button from '../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-radial">
      <div className="pointer-events-none absolute -top-44 right-[-12%] h-[440px] w-[440px] rounded-full bg-flare blur-[150px]" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-30" />

      <div className="container-content relative flex min-h-[80vh] flex-col justify-center py-32">
        <p className="display gradient-text">404</p>
        <h1 className="display-sm mt-6 max-w-2xl">This page doesn't exist.</h1>
        <p className="lead mt-6 max-w-md">
          It may have moved, or the link is no longer valid. Let's get you back on track.
        </p>
        <Button to="/" variant="light" size="md" className="mt-10 w-fit">
          <ArrowLeft size={16} />
          Back to Home
        </Button>
      </div>
    </section>
  )
}
