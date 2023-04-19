from pydantic import BaseModel

class PredictDTO(BaseModel):
    income: int
    employees: int