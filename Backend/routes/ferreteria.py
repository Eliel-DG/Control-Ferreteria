from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy import select, update, delete
from config.db import conn
from models.ferreteria import ferreteria
from schemas.ferreteria import Ferreteria

router = APIRouter()

@router.get('/productos', tags=["Ferreteria"])
def obtener_productos():
    productos_list_dicts = []
    productos_list_tuples = conn.execute(select(ferreteria)).fetchall()
    for producto_tuple in productos_list_tuples:
        producto_dict = {
            "codigo": producto_tuple.codigo,
            "nombre": producto_tuple.nombre,
            "marca": producto_tuple.marca,
            "stock": producto_tuple.stock,
            "precio": float(producto_tuple.precio) if producto_tuple.precio else 0.0
        }
        productos_list_dicts.append(producto_dict)
    return JSONResponse(content=productos_list_dicts)

@router.post("/insertar", tags=["Ferreteria"])
def insertar_producto(producto: Ferreteria):
    query = ferreteria.insert().values(
        codigo=producto.codigo,
        nombre=producto.nombre,
        marca=producto.marca,
        stock=producto.stock,
        precio=producto.precio
    )
    conn.execute(query)
    conn.commit()
    return {"status": "Producto insertado con éxito"}

@router.put("/actualizar/{codigo}", tags=["Ferreteria"])
def actualizar_producto(codigo: int, producto: Ferreteria):
    query = update(ferreteria).values(
        nombre=producto.nombre,
        marca=producto.marca,
        stock=producto.stock,
        precio=producto.precio
    ).where(ferreteria.c.codigo == codigo)
    result = conn.execute(query)
    if result.rowcount == 0:
        raise HTTPException(status_code=404, detail="No existe el producto ingresado")
    else:
        conn.commit()
        return {"status": "Producto actualizado con éxito"}

@router.delete("/eliminar/{codigo}", tags=["Ferreteria"])
def eliminar_producto(codigo: int):
    query = delete(ferreteria).where(ferreteria.c.codigo == codigo)
    result = conn.execute(query)
    if result.rowcount == 0:
        raise HTTPException(status_code=404, detail="No existe el producto ingresado")
    else:
        conn.commit()
        return {"status": "Producto eliminado con éxito"}
