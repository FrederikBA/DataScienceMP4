from fastapi import FastAPI
from pymongo.mongo_client import MongoClient

app = FastAPI()

@app.get("/")
def read_root():
    return {"hello": "world"} 