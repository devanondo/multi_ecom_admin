interface FormDataObject {
    [key: string]: string | File;
}

export const pickFData = (data: FormDataObject) => {
    const finalObj: FormDataObject = {};

    Object.keys(data).map((key) => {
        if (data[key] !== undefined) {
            return (finalObj[key] = data[key]);
        }
    });

    return finalObj;
};
