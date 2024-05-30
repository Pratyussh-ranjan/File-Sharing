import React, { useRef, useState, useEffect } from 'react';
import './App.css';
import { uploadFile } from './services/api';

function App() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  const logo = 'https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg';

  useEffect(() => {
    const uploadImage = async () => {
      let responsePath = ''; // Default value in case response is not defined
      if (file) {
        const formData = new FormData();
        formData.append("name", file.name);
        formData.append("file", file);

        try {
          const response = await uploadFile(formData);
          console.log(response);
          responsePath = response.path; // Set the responsePath if response is defined
        } catch (error) {
          console.error('Error uploading file:', error);
        }

        setResult(responsePath);
      }
    };

    uploadImage();
  }, [file]);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  console.log(file);

  return (
    <div className='container'>
      <img src={logo} alt="banner" />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>

        <button onClick={handleUploadClick}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <a href={result} target="_blank" rel="noopener noreferrer">{result}</a>
      </div>
    </div>
  );
}

export default App;
