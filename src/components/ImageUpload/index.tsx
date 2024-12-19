import React, { useState } from "react";
import "./styles.css";
interface Props {
    width: number;
    height: number;
    image: string | null;
    onChange: (file: File | null) => void;
}

const ImageUpload = ({ width, height, image, onChange }: Props) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        onChange(file || null);
    };

    return (
        <div
            className="upload-container"
            style={{
                width: `${width}%`,
                height: `${height}vh`,
            }}
        >
            <label htmlFor={`image-upload-${width}-${height}`} className="upload-label">
                {image ? (
                    <img
                        src={image}
                        alt="Uploaded"
                        className="uploaded-image"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                ) : (
                    <div className="plus-icon">+</div>
                )}
            </label>
            <input
                id={`image-upload-${width}-${height}`}
                type="file"
                accept="image/*"
                className="file-input"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ImageUpload;
