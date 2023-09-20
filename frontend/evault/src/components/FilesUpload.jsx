import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleButtonClick = async () => {
        if (!selectedFile) {
            alert('Please choose a file to upload.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            const response = await axios.post('http://localhost:8000/uploadfile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log("done file");
            alert(`File uploaded successfully. Response: ${response.data}`);
        } catch (error) {
            console.log(" not done file");
            alert(`Error uploading file: ${error.message}`);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleButtonClick}>Upload</button>
        </div>
    );
};

export default FileUpload;