import Pagination from "@/components/Pagination";
import PropertyCard from "@/components/PropertyCard";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import { convertToPlainObj } from "@/utils/Utils";
const PropertiesPage = async ({searchParams} : any) => {
   const { page = 1, pageSize = 2 } = await searchParams;
   const skip = (page - 1) * pageSize;
   await connectDB();
   const total = await Property.countDocuments({});
   let properties = await Property.find({}).sort({ createdAt: -1 }).skip(skip).limit(pageSize).lean();
   properties = convertToPlainObj(properties);
   const showPagination = total > pageSize;
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

          {showPagination && <Pagination page={+page} pageSize={+pageSize} total={+total}/>}
       </section>
    );
}
 
export default PropertiesPage;