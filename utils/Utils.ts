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
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${day} ${month} ${year} at ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}
