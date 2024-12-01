import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const SearchResults = async({ searchParams }: any) => {

    await connectDB();
    const { location, type } = await searchParams;
    const locationPattern = new RegExp(location, 'i');

    let query: any = {
        $or: [
            { name: locationPattern },
            { description: locationPattern },
            { 'location.street': locationPattern },
            { 'location.city': locationPattern },
            { 'location.state': locationPattern },
            { 'location.zipcode': locationPattern },
        ]
    }

    if(type.toLowerCase() !== "all") {
        const typePattern = new RegExp(type, 'i');
        query.type = typePattern;
    }


    const searchedProperties = await Property.find(query).lean();
    return ( 
        <>
            <section className="bg-blue-500 py-4">
                <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
                    <PropertySearchForm />
                </div>
            </section>
            <section className="px-4 py-6">
                <div className="container-xl lg:container">
                    <Link 
                      href="/properties" 
                      className="flex items-center text-blue-500 hover:underline mb-3"
                      >
                        <FaArrowAltCircleLeft className="mr-2 mb-1"/> Back to properties
                    </Link>
                    <h1 className="text-2xl mb-4"> Search Results </h1>
                    { searchedProperties.length === 0 ? (
                        <p> No properties found. </p>
                    ): (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            { searchedProperties.map((property: any) => (
                                <PropertyCard key={property._id} property={property} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </>
     );
}
 
export default SearchResults;