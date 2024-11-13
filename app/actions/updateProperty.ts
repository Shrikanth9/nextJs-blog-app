'use server'

import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const updateProperty = async(propertyId: string, formData: FormData) => {
    await connectDB();
    
    const sessionUser = await getSessionUser();
    
    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to delete a property');
    }
    
    let existingProperty = await Property.findById(propertyId);
    
    if(!existingProperty) {
        throw new Error('Existing Property not found');
    }
    
    if(existingProperty.owner.toString() !== sessionUser.id) {
        throw new Error('You do not have permission to delete this property');
    }

    const propertyData: any = {
        owner: sessionUser.id,
        name: formData.get('name'),
        type: formData.get('type'),
        description: formData.get('description'),
        location: {
            street: formData.get('location.street'),
            city: formData.get('location.city'),
            state: formData.get('location.state'),
            zipcode: formData.get('location.zipcode'),  
        },
        beds: formData.get('beds'),
        baths: formData.get('baths'),
        square_feet: formData.get('square_feet'),
        amenities: formData.getAll('amenities'),
        rates: {
            weekly: formData.get('rates.weekly'),
            monthly: formData.get('rates.monthly'),
            nightly: formData.get('rates.nightly'),
        },
        seller_info: {
            name: formData.get('seller_info.name'),
            email: formData.get('seller_info.email'),
            phone: formData.get('seller_info.phone'),
        },
    }

    const updatedProperty = await Property.findByIdAndUpdate(propertyId, propertyData, { new: true });

    revalidatePath('/', 'layout')
    redirect('/properties/' + updatedProperty?._id)


}
 
export default updateProperty;