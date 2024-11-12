'use server';

const addProperty = async (formData: FormData) => {

    const amenities = formData.getAll('amenities')
    const images = formData.getAll('images').filter((image: any) => image.name !== '').map((image: any) => image.name);
    

    const propertyData = {
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
    
}

export default addProperty