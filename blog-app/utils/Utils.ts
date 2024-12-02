export const convertToPlainObj = (obj: Object) => {
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
        timeZone: 'Asia/Kolkata',
        hour12: true
    }).replace(',', ' at');
}

export const FormateTimeStamp = (date: Date) => {
    const milliseconds = date.getTime();
    const timeElapsed = (Date.now() - milliseconds) / 1000;
    if (timeElapsed < 60) {
        return 'Just now';
    } else if (timeElapsed < 3600) {
        const minutes = Math.floor(timeElapsed / 60);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeElapsed < 86400) {
        const hours = Math.floor(timeElapsed / 3600);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (timeElapsed < 2592000) {
        const days = Math.floor(timeElapsed / 86400);
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (timeElapsed < 31104000) {
        const months = Math.floor(timeElapsed / 2592000);
        return `${months} month${months > 1 ? 's' : ''} ago`;
    } else if (timeElapsed < 2147483647) {
        const years = Math.floor(timeElapsed / 31104000);
        return `${years} year${years > 1 ? 's' : ''} ago`;
    }
}
