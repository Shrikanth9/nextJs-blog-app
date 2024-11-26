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
    })    
}