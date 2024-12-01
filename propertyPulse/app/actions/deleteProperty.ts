'use server'

import connectDB from "@/config/database";
import Property from "@/models/Property";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";
import cloudinary from "@/config/cloudinary";
import { convertToPlainObj } from "@/utils/Utils";

const deleteProperty = async (propertyId: string) => {
    await connectDB();

    const sessionUser = await getSessionUser();

    if(!sessionUser || !sessionUser.id) {
        throw new Error('You must be logged in to delete a property');
    }
    
    let property = await Property.findById(propertyId);
    
    if(!property) {
        throw new Error('Property not found');
    }
    
    if(property.owner.toString() !== sessionUser.id) {
        throw new Error('You do not have permission to delete this property');
    }
    
    property.images.map(async (image: string) => {
        let publicId = image.split('/').pop()?.split('.')[0];
        await cloudinary.uploader.destroy('propertyPulse/' + publicId as string);
    })

    await property.deleteOne();
    
    revalidatePath('/', 'layout')
}

export default deleteProperty