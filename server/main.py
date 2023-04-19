from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from services import company_service
from models import dtos

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return "Welcome to the Data Science MP4 API"

@app.get("/geodata")
def read_company_geodata():
    return company_service.get_company_locations()

PredictDTO = dtos.PredictDTO

@app.post("/predict")
def predict_company_location(predictDTO: PredictDTO):
    return company_service.predict_company_location(predictDTO.income, predictDTO.employees)