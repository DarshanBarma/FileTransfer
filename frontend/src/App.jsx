import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setStatus('');
  };

  const handleUpload = async () => {
    if (!file) {
      setStatus("❌ Please select a file first");
      return;
    }
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://192.168.x.x:8000/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setStatus(`✅ Uploaded: ${res.data.filename}`);
    } catch (err) {
      setStatus("❌ Upload failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">📤 File Uploader</h2>

        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-300
                     file:mr-4 file:py-2 file:px-4
                     file:rounded-md file:border-0
                     file:text-sm file:font-semibold
                     file:bg-indigo-600 file:text-white
                     hover:file:bg-indigo-700
                     mb-4"
        />

        <button
          onClick={handleUpload}
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white py-2 rounded-lg font-semibold"
        >
          Upload
        </button>

        {status && (
          <p className="mt-4 text-center text-sm">
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
