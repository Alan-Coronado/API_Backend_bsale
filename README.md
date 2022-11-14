#Backend 
Este es el backend del test de bsale para desarollador, una Api RESTful hecha con express para ejecutarse con nodejs.

##Instalación
Para instalar basta con tener nodejs y una ves descargado y situandose en el archivo de la carpeta ejecutar: 

```bash
npm install
```
##Uso
Para utilizar esta Api es necesario tener el servidor ejecutandose, lo cual se puede realizar con la siguiente instrucción:

```bash
npm run start
```

##Endpoints
Los Endpoints con los que cuenta son los siguientes:
'/categories'
Devuelve las categorias existentes

'/products'
Devuelve todos los productos existentes en la base de datos

'/products/category/:id'
Recibe como parametro el id de una categoria y devuelve todos los articulos pertenecientes a la misma

##Autor
Alan Coronado