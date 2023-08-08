interface FormDataObject {
    [key: string]: string | File;
}

export const pickFormData = (data: FormDataObject) => {
    const myForm = new FormData();

    Object.keys(data).forEach((key) => {
        if (key !== 'photo' && data[key] !== undefined) {
            if (Array.isArray(data[key])) {
                myForm.append(key, JSON.stringify(data[key]));
            } else {
                myForm.set(key, data[key]);
            }
        }
    });

    return myForm;
};
