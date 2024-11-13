import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToPlainObj } from "@/utils/Utils";
const PropertiesPage = async () => {
   await connectDB();
   let properties = await Property.find({}).lean();
   properties = convertToPlainObj(properties);
    return ( 
       <section className="px-4 py-6">
          <div className="container-xl lg:container mx-auto px-4 py-6">
             {properties.length === 0 ? (
                <p>No properties found.</p>
             ) : (
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {properties.map((property: any) => (
                        <PropertyCard key={property._id} property={property}/>
                    ))}
                 </div>
             )}
          </div>
       </section>
    );
}
 
export default PropertiesPage;