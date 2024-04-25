# Desafío Guiado Like Me
Este desafío es parte del curso de Desafio Latam, Desarrollo de aplicaciones Full Stack Js, en el cual validaremos nuestros conocimientos de Consultas con texto parametrizado, JSON como argumento de una consulta, Insertando registros Consultando registros y Actualizando registros.
Este desafio se realizo con un apoyo entregado en clase, por lo cual el objetivo era corregir los diversos problemas del código, así como completar lo que faltaba para lograr el funcionamiento de este proyecto.

# Descripción del desafío
La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse en
vivo. Se pusieron en contacto con el restaurante del sector para usar su tarima e iniciar un
calendario de presentaciones. Para conocer y gestionar las canciones que cantarán sus
estudiantes, la escuela contrató a un desarrollador freelance para la creación de una
aplicación tipo CRUD.

## Correcciones realizadas:
- Se separaron los archivos, para mantener la conexión a la bbdd fuera de consultas y el server.
- Se corrigieron las consultas, ya que estaban erradas y se exportaron correctamente.
- En index.js se agregaron: el listen port, se instancia express. Se corrigieron los res, para que devolviera un json, se importaron las consultas requeridas. 
- En el index.html, se hicieron pequeños cambios en la function getPosts(), ya que se estaban accediendo a la propiedad con nombres distintos a lo que estan en la bbdd, lo cual generaba error.  


# Visuales

La vista principal es la siguiente: 

| Vista principal | 
| --- | 
| ![nueva1](/assets/vista1.png)![nueva2](/assets/vista2.png)| 

Un formulario para agregar: a la persona que hizo el post, la url de una imagen y una descripción. Al enviar esto, aparecera el post como indica la imagen de Vista Principal. Puedes darle like (seleccionar el corazón) y va aumentando la cantidad. 

## Empezando 🚀

Estas instrucciones te guiarán para obtener una copia de este proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Prerrequisitos 📋

Lista de software y herramientas, incluyendo versiones, que necesitas para instalar y ejecutar este proyecto:

- Sistema Operativo: puedes usar Ubuntu o Windows 10 o superior.
- Se trabajo con Javascript.
- Se utilizo pg y express.

### Instalación 🔧

1. Para utilizar este proyecto debes clonar este repositorio en tu máquina, utilizando git.

```
git clone git@github.com:jesbell/miBanco.git
```

2. Una vez allí puedes abrir el proyecto donde te sea más comodo. Pero dentro de la carpeta del proyecto deberas realizar las instalación de las dependencias, con el siguiente comando.

```
npm install
```

3. Debes crear la base de datos correspondiente que esta utilizando este proyecto y sus tablas. Dichas consultas se encuentran en el archivo posts.sql. Desdes realizar las instrucciones indicadas, para generar la base de datos (likeme) y la tabla (posts) que utiliza este proyecto.

4. El siguiente paso es hacer la conexión a la base de datos. En el archivo dbconfig.js debes agregar tu usuario y contraseña.
```
// inserta tus datos
const nameUser = "";
const passUser = "";
```
5. Finalmente, debes levantar el servidor (index.js) con el siguiente comando en tu consola
```
node index.js
```

Este te dará el enlace para que puedas ingresar directamente al localhost
```
http://localhost:3000
```


## Soporte

Si tienes algún problema o sugerencia, por favor abre un problema [aquí](https://github.com/jesbell/miBanco/issues).

## Versionado  📌

Usamos [Git](https://git-scm.com) para el versionado.

## Expresiones de Gratitud 🎁

Si encontraste cualquier valor en este proyecto o quieres contribuir, aquí está lo que puedes hacer:

- Comparte este proyecto con otros
- Invítanos un café ☕
- Inicia un nuevo problema o contribuye con un PR
- Muestra tu agradecimiento diciendo gracias en un nuevo problema.

---

⌨️ con ❤️ por [Joselyn Gonzalez](https://github.com/jesbell) 😊
