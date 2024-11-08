import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import Link from "next/link";

const HomeProperties = () => {
    const recentProperties = properties.slice(0, 3);
    return ( 
      <>
        <section className="px-4 py-6">
        <div className="container-xl lg:container mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-blue-500 mb-6 text-center"> Recent properties </h2>
          {recentProperties.length === 0 ? (
              <p>No recent Properties found.</p>
          ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {recentProperties.map((property) => (
                      <PropertyCard key={property._id} property={property}/>
                  ))}
              </div>
          )}
        </div>
        </section>
        <section className="m-auto max-w-lg px-6">
          <Link
            href="/properties"
            className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"> 
            View all properties 
          </Link>
        </section>
      </>
    );
}
 
export default HomeProperties;