'use server';

import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import cloudinary from "@/config/cloudinary";
import IUser from "@/interfaces/properties";

const addProperty = async (formData: any) => {
    await connectDB();
    const amenities = formData.getAll('amenities')
    const images = formData.getAll('images').filter((image: any) => image.name !== '');
    
    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to add a property');
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
    }

    const imageUrls = [];

    for(const imageFile of images) {
        const imageBuffer = await imageFile.arrayBuffer();
        const imageArray = Array.from(new Uint8Array(imageBuffer));
        const imageData = Buffer.from(imageArray);

        // convert to base64
        const imageBase64 = imageData.toString('base64');

        const uploadedImage = await cloudinary.uploader.upload(`data:image/jpeg;base64,${imageBase64}`, { folder: 'propertyPulse' });
        imageUrls.push(uploadedImage.secure_url);
    }

    propertyData.images = imageUrls;
    
    const newProperty = new Property(propertyData);
    await newProperty.save();

    revalidatePath('/', 'layout');
    redirect('/properties/' + newProperty._id);
    
}

export default addProperty