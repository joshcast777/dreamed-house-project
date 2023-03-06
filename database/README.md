# Casa Soñada - Base de Datos

## Descripción

Estos son los scripts de la base de datos del proyecto Casa Soñada.

---

## Herramientas usadas en el proyecto

- [Clever Cloud](https://www.clever-cloud.com/): Herramienta PaaS usado en este proyecto para el hosting de la base de datos.
- [MySQL](https://www.mysql.com/): DBMS para bases de datos relacionales.

---

## Cómo instalar el proyecto

La base de datos está alojada en la nube, por lo que no se necesita crear una de forma local.

En caso de querer hacerlo de forma local, hacer lo siguiente:

1. Instalar **MySQL**.
2. Instalar un entorno gráfico de preferencia para trabajar con **MySQL**, como lo sería **MySQL Workbench**.
3. Ejecutar los **scripts** en el siguiente orden:
    1. Ejecutar primero el script llamado `schema.sql`.
    2. Ejecutar el script `houses_table.sql` y luego `house_images.sql`.
    3. El script `proformas_table.sql` ejecutarlo después de haber ejecutado TODOS los scripts finalizados en `_table.sql`.
    4. Después ejecutar los scripts finalizados en `_insert,sql` para cargar los datos necesarios en las tablas correspondientes.
