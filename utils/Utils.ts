export const convertToPlainObj = (obj: any) => {
    return JSON.parse(JSON.stringify(obj));
};