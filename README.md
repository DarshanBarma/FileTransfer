# 📤 React + FastAPI File Uploader

A simple file upload system built with **React (frontend)** and **FastAPI (backend)**. It allows users to upload files from the browser to a server over the network.

## 🚀 Features

- Upload any file using a clean UI
- Save files to the backend server
- Built with TailwindCSS for modern UI
- FastAPI handles file storage
- Fully CORS-enabled (frontend and backend can run separately)

## 🧰 Tech Stack

- **Frontend:** React, Axios, TailwindCSS
- **Backend:** FastAPI, Python
- **Others:** CORS middleware, File Handling (shutil)

## 📸 Preview

<img width="765" height="502" alt="image" src="https://github.com/user-attachments/assets/1e833ff5-cced-4746-bcb1-9356e1c16e04" />

## 📂 Project Structure

```
/frontend  → React App (file uploader UI)
/backend   → FastAPI Server (file handler and API)
```

## 🛠️ How to Run

### Backend (FastAPI)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install fastapi uvicorn python-multipart
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend (React)
```bash
cd frontend
npm install
npm start
```

### 📡 API Endpoint
```
POST http://<your-ip>:8000/upload/
```

## 🌐 Network Use Case

This can be used to upload files from:
- Mobile device → Server
- Client system → Server
Make sure both devices are on the **same local network**.

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

> Built with 💡 to learn and showcase full-stack file transfer over network.
