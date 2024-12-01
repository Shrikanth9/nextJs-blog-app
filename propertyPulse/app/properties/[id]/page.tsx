import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PropertyDetails from "@/components/PropertyDetails";
import PropertyImages from "@/components/PropertyImages";
import { convertToPlainObj } from "@/utils/Utils";
import BookmarkButton from "@/components/BookmarkButton";
import ShareButton from "@/components/ShareButton";
import ContactForm from "@/components/PropertyContactForm";

const PropertyPage = async( { params }: { params: any} ) => {
    await connectDB();
    const { id } = await params;
    let property: any = await Property.findById(id).lean();
    property = convertToPlainObj(property);
    return ( 
      <>
        <PropertyHeaderImage image={property.images[0]} />
        <section>
          <div className="container m-auto py-6 px-6">
            <Link
              href="/properties"
              className="text-blue-500 hover:text-blue-600 flex items-center"
            >
              <FaArrowLeft className="mr-2"/> Back to Properties
            </Link>
          </div>
        </section>
         <section className="bg-blue-50">
          <div className="container m-auto py-10 px-6">
            <div className="grid grid-cols-1 md:grid-cols-[70%_28%] w-full gap-6">
                <PropertyDetails property={property}/>
                <aside className="space-y-4">
                    <BookmarkButton property={property} />
                    <ShareButton property={property}/>
                    <ContactForm property={property}/>
              </aside>
            </div>
          </div>
         </section>
         <PropertyImages images={property.images}/>
      </>
    );
}
 
export default PropertyPage;