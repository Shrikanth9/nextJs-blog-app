'use server';

import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const addProperty = async (formData: FormData) => {
    await connectDB();
    const amenities = formData.getAll('amenities')
    const images = formData.getAll('images').filter((image: any) => image.name !== '').map((image: any) => image.name);
    
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to add a property');
    }

    const propertyData = {
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
        amenities,
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
        images
    }

    console.log(propertyData);
    
    
    const newProperty = new Property(propertyData);
    await newProperty.save();

    revalidatePath('/', 'layout');
    redirect('/properties/' + newProperty._id);
    
}

export default addProperty