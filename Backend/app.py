from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.ferreteria import router

app = FastAPI()

app.include_router(router)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],  # Cambia esta URL a la dirección de tu aplicación Angular
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

