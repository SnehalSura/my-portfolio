import React from 'react';
import axios from 'axios';
import './ResumeButton.css';

const ResumeButton = () => {
    const handleDownloadResume = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/resume/', {
                responseType: 'blob', // Important for downloading files
            });

            // Create a URL for the downloaded file
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'resume.pdf'); // Filename for the download
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error('Error downloading the resume:', error);
        }
    };

    return (
        <button onClick={handleDownloadResume} className="hero-resume">
            My Resume
        </button>
        
    );
};

export default ResumeButton;
