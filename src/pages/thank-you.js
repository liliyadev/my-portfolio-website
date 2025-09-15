import React from "react"

export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white px-6">
      <div className="max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-xl mb-6">
          Your message has been sent successfully. I’ll get back to you as soon as possible.
        </p>
        <a
          href="/"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}
