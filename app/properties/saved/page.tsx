import PropertyCard from "@/components/PropertyCard";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { convertToPlainObj } from "@/utils/Utils";


const SavedPropertiesPage = async() => {
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to view saved properties');
    }

    const id = sessionUser.id;
    let bookmarks = await User.findById(id).populate('bookmarks');

    return ( 
        <section className="px-4 py-6">
            <div className="container lg:container mx-auto px-4 py-6">
                { bookmarks.bookmarks.length === 0 ? (
                    <p>No saved properties found.</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {bookmarks.bookmarks.map((property: any) => (
                            <PropertyCard key={property._id} property={property}/>
                        ))}
                    </div>
                )}
            </div>
        </section>
     );
}
 
export default SavedPropertiesPage;