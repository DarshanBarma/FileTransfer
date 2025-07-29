from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   
    allow_methods=["*"],
    allow_headers=["*"]
)

UPLOAD_DIRS = 'Uploads'
os.makedirs(UPLOAD_DIRS, exist_ok=True)

@app.post('/upload/')
async def uploadData(file:UploadFile = File(...)):
    file_path = f'{UPLOAD_DIRS}/{file.filename}'
    with open(file_path, 'wb') as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"filename": file.filename, "message": "File uploaded successfully" } 