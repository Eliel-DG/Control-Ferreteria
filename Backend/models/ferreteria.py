from sqlalchemy import Table, Column, Integer, String, Float, MetaData

meta = MetaData()

ferreteria = Table(
    "ferreteria",
    meta,
    Column("codigo", Integer, primary_key=True),
    Column("nombre", String(100)),
    Column("marca", String(100)),
    Column("stock", Integer),
    Column("precio", Float)
)

