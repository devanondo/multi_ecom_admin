/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { DeleteFilled, UploadOutlined } from '@ant-design/icons';
import { Modal, Spin, Typography } from 'antd';
import { RcFile, UploadFile } from 'antd/es/upload';
import React, { useCallback, useEffect, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { IImage } from '../../../utils/interface';
import './DropUpload.scss';
import {
    useDeleteImageMutation,
    useUploadImageMutation,
} from '../../../redux/upload/uploadApi';

const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

export interface IImgType {
    name?: string;
    url: string;
    file64?: RcFile;
    public_id?: string;
    _id?: string;
}

interface IDropUpload {
    files?: IImgType[] | [];
    onChange?: (files: IImgType[] | null) => void;
    uploadPath?: string;
}

const DropUpload: React.FC<IDropUpload> = ({ files, onChange, uploadPath = 'ecom' }) => {
    const [uploadImage, response] = useUploadImageMutation();
    const [deleteImage] = useDeleteImageMutation();

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState('');
    const [previewTitle, setPreviewTitle] = useState('');
    const [images, setImages] = useState<IImgType[]>(files || []);

    useEffect(() => {
        setImages(files || []);
    }, [files]);

    useEffect(() => {
        if (response.isSuccess) {
            setImages((oldImg) => [...oldImg, ...response.data.data]);
        }
    }, [response, response.isSuccess]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile | IImage) => {
        if (!file.url) {
            file.preview = await getBase64(file as RcFile);
        }

        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        setPreviewTitle(
            file?.name || file.url!.substring(file.url!.lastIndexOf('/') + 1),
        );
    };

    const onDrop = useCallback(async (files: FileWithPath[]) => {
        const imgbase64: string[] = [];

        await Promise.all(
            files.map(async (file) => {
                const reader = new FileReader();
                reader.readAsDataURL(file as Blob);

                await new Promise<void>((resolve) => {
                    reader.onload = () => {
                        if (reader.readyState === 2) {
                            imgbase64.push(reader.result as string);
                            resolve(); // Resolve the inner promise to indicate completion
                        }
                    };
                });
            }),
        );

        const formData = new FormData();

        imgbase64.forEach((img) => {
            formData.append('image[]', img);
        });

        if (imgbase64.length) {
            formData.set('path', uploadPath);
            uploadImage(formData);
        }
    }, []);

    useEffect(() => {
        if (onChange) {
            onChange(images);
        }
    }, [images.length]);

    const handleRemove = (imge: IImgType) => {
        deleteImage(imge);
        setImages((imgs) => imgs.filter((img) => img.public_id !== imge.public_id));
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
    return (
        <div className="file__dragger">
            <div className="dragger__area" {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <div className="dragger__zone">
                        <UploadOutlined />
                        <Typography.Paragraph
                            style={{ margin: 0, fontSize: 16, marginTop: 10 }}
                        >
                            Drop the files here ...
                        </Typography.Paragraph>
                        <Typography.Paragraph type="secondary">
                            Single or Bulk file
                        </Typography.Paragraph>
                    </div>
                ) : (
                    <div className="dragger__zone">
                        <UploadOutlined />
                        <Typography.Paragraph
                            style={{ margin: 0, fontSize: 16, marginTop: 10 }}
                        >
                            Drag drop some files here, or click to select files
                        </Typography.Paragraph>
                        <Typography.Paragraph type="secondary">
                            Single or Bulk file
                        </Typography.Paragraph>
                    </div>
                )}
            </div>

            <Spin spinning={response.isLoading} delay={100}>
                <div>
                    {images?.map((imgs, index: number) => {
                        return (
                            <div className="preview__imgs" key={index}>
                                <div
                                    onClick={() =>
                                        handlePreview((imgs?.file64 as RcFile) || imgs)
                                    }
                                    className="info"
                                >
                                    <div className="img__wrapper">
                                        <img style={{ width: '100%' }} src={imgs.url} />
                                    </div>
                                    <div className="img__name">
                                        {imgs?.name ||
                                            imgs?.url.substring(
                                                imgs.url!.lastIndexOf('/') + 1,
                                            )}
                                    </div>
                                </div>
                                <div className="icon">
                                    <DeleteFilled
                                        onClick={() => handleRemove(imgs)}
                                        style={{ fontSize: 18 }}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Spin>

            <Modal
                open={previewOpen}
                title={previewTitle}
                footer={null}
                onCancel={handleCancel}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </div>
    );
};

export default DropUpload;
