export const convertToPlainObj = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
};


export const convertImageToBase64URL = async(file: File) => {
    return new Promise<string>(async(resolve, reject) => {
        const imageBuffer = await file.arrayBuffer();
        const imageArr = Array.from(new Uint8Array(imageBuffer));
        const imageData = Buffer.from(imageArr);

        const imageBase64 = imageData.toString('base64');
        
        resolve(imageBase64);
    }).catch((error) => {})   
}

export const FormateDate = (date: Date) => {
    return date.toLocaleString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }).replace(',', ' at');
}
