import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="font-heading text-6xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl font-semibold text-foreground mb-2">Oops! Page not found</p>
      <p className="text-muted-foreground mb-8 max-w-sm">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-primary text-primary-foreground px-6 py-3 rounded font-semibold hover:bg-primary-light transition-colors"
      >
        Return to Home
      </Link>
    </div>
  )
}
