'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-600 mb-4">
          500
        </h1>
        <h2 className="text-3xl font-semibold text-white mb-4">
          Qualcosa è andato storto
        </h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Si è verificato un errore imprevisto. Riprova o torna alla home.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Riprova
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white rounded-lg transition-all"
          >
            Vai alla Home
          </Link>
        </div>
      </div>
    </div>
  )
}
