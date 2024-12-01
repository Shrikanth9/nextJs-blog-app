import Link from "next/link"

const NotFoundPage = () => {
    return (
        <div className="hero min-w-screen h-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">404 Not Found :(</h1>
            <p className="py-6">
              OOps!! The page you are looking for is not found
            </p>
            <Link href="/" className="btn btn-success">Go to Home</Link>
          </div>
        </div>
      </div>
    )
}

export default NotFoundPage