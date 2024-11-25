import Link from "next/link";

const Hero = () => {
    return ( 
        <div className="hero min-w-screen">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold">Welcome to the Blog App</h1>
            <p className="py-6">
              Feel free to explore and contribute to this interactive blog app! Improve it by adding your own thoughts and insights.
            </p>
            <Link href="/blogs/add" className="btn btn-success">Get Started</Link>
          </div>
        </div>
      </div>
     );
}
 
export default Hero;