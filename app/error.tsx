'use client'

import Link from "next/link"

const ErrorPage = ({ error}: { error: Error }) => {
    return (
        <div className="hero min-w-screen h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">Something went wrong :(</h1>
            <p className="py-6">
              {error.toString()}
            </p>
            <Link href="/" className="btn btn-success">Go to Home</Link>
          </div>
        </div>
      </div>
    )
}

export default ErrorPage