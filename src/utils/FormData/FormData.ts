interface FormDataObject {
    [key: string]: string | File;
}

export const pickFormData = (data: FormDataObject) => {
    const myForm = new FormData();

    Object.keys(data).forEach((key) => {
        myForm.set(key, data[key]);
    });

    return myForm;
};
