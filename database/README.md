# Casa Soñada - Base de Datos

## Descripción

Estos son los scripts de la base de datos del proyecto Casa Soñada.

---

## Herramientas

- [Clever Cloud](https://www.clever-cloud.com/): Herramienta PaaS usado en este proyecto para el hosting de la base de datos.
- [MySQL](https://www.mysql.com/): DBMS para bases de datos relacionales.

---

## Notas

### Nota 1

La base de datos está alojada en la plataforma [Clever Cloud](https://www.clever-cloud.com/) para evitar la ejecucícon del servicio de MySQL en la computadora de desarrollo, ya que esto puede ralentizar ciertos equipos.

## Nota 2

Si se desea trabajar de forma local, deberá ejecutar los scrpits que se encuentran en la raíz del proyecto database, empezando por archivo `schema.sql`, luego ejecutando aquellos que finalizan con `table` teniendo en cuenta lo siguiente:

1. Primero ejecutar `houses_table.sql` y luego `house_images.sql`.
2. Que el archivo `proformas_table.sql` sea el último script de creación de tablas en ejecutarse.

Después de todos, ejecutar los que finalizan con `insert`para la inserción de los datos.
