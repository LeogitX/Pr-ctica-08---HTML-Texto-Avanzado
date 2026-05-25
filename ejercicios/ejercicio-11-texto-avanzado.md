# Ejercicio 11: Estructura HTML con texto avanzado

## Cómo visualizar tu trabajo

### Usando Live Server (Recomendado)
1. Instala la extensión **Live Server** en VS Code
2. Abre el archivo `src/index.html`
3. Haz clic derecho y selecciona **"Open with Live Server"**
4. Navega al ejercicio desde el menú principal

### Forma directa
- Abre `src/ejercicio-11/index.html` directamente en tu navegador

---

## Objetivo
Crear la estructura de carpetas base y una página HTML que demuestre el uso de elementos de texto avanzado en HTML.

## Instrucciones

### Parte 1: Crear estructura de carpetas
1. Dentro de la carpeta `src`, crear la subcarpeta `ejercicio-11`.

### Parte 2: Crear página HTML
2. Dentro de la carpeta `ejercicio-11`, crear un archivo llamado `index.html`
5. El archivo debe contener una estructura HTML5 básica con los siguientes elementos:

   - **Lista de definiciones (`<dl>`)**: Crear una lista con términos técnicos y sus definiciones.
   - **Citas en bloque (`<blockquote>`)**: Incluir una cita destacada con su atribución.
   - **Código en línea (`<code>`)**: Mostrar fragmentos de código dentro del texto.
   - **Abreviaturas (`<abbr>`)**: Definir siglas y abreviaturas con sus significados.
   - **Información de contacto (`<address>`)**: Incluir datos de contacto del autor.
   - **Superíndice (`<sup>`)**: Para exponentes, notas al pie, etc.
   - **Subíndice (`<sub>`)**: Para fórmulas químicas, matemáticas, etc.

## Estructura final esperada

```
├── src/
│   └── ejercicio-11/
│       └── index.html
```

## Contenido HTML requerido

El archivo `index.html` debe incluir al menos:

1. Estructura HTML5 básica: DOCTYPE, html, head, body
2. Lista de definiciones
3. Citas en bloque
4. Código en línea
5. Abreviaturas
6. Información de contacto
7. Superíndice y subíndice

## Verificación

Puedes verificar que las carpetas se crearon correctamente ejecutando:

```bash
tree src/
```

O ejecutar las pruebas:

```bash
npm test tests/ejercicio/11-texto-avanzado.test.js
```

O usando:

```bash
ls -la src/
```

Una vez que hayas completado el ejercicio ejecuta: 
``` npm
npm test ejercicio/11
```
Si pasa todos los test, haz commit de tus cambios y súbelos a tu repositorio de GitHub.   

¡Buena suerte y diviértete programando!