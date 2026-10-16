
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 text-center text-gray-900">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Zajul Technical Services
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Your trusted technical partner.
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-lg text-gray-600">
          Solar installations, CCTV security, networking and
          electrical services.
        </p>
      </div>
    </main>
  )
}
