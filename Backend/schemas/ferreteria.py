from pydantic import BaseModel

class Ferreteria(BaseModel):
    codigo: int
    nombre: str
    marca: str
    stock: int
    precio: float

    