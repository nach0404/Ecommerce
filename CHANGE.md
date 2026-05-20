# CAMBIOS

## [Sprint 2]

## 16-05-2026 - Nacho

### Agregado
- Estructura MVC: reorganizacion del proyecto en `src/` y `public/`
- Pagina de error 404 con vista y CSS propio
- Campo Apellido en el formulario de registro
- Validacion client-side del formulario de registro (`register.js`)
- Carrito de compras persistente con express-session
- Agregar, aumentar, disminuir y eliminar productos del carrito
- Botón "Vaciar carrito"
- Cálculo de subtotal y total en puntos
- Mensaje de carrito vacío con botón para volver al inicio

### Modificado
- Rutas de archivos estaticos actualizados a `/assets/...`
- `app.js` actualizado con `path.join` y middleware 404


## 17-05-2026 - Nacho

### Modificado
- Actualizacion del archivo `checkout.ejs` a vista temporal, sin logica de negocio.
- Cambio del color principal.

## 19-05-2026 - Nacho

### Agregado
- `express-ejs-layouts`: layout base en `src/views/layouts/main.ejs` con `<%- body %>` y `<%- style %>`
- `src/services/productsService.js`: servicio con toda la lógica de lectura y filtrado de productos
- `src/services/cartService.js`: servicio con toda la lógica del carrito (agregar, quitar, modificar, vaciar, calcular total)
- Función `normalizeId()` en `productsService.js`: valida IDs numéricos antes de usarlos (400 si inválido, 404 si no existe)
- Ordenamiento de productos por precio en `/products?sort=asc` y `/products?sort=desc`
- Buscador de productos por nombre con coincidencia parcial en `/search?query=...`
- Vista `search.ejs` con resultados o mensaje de no encontrado
- `public/assets/css/products.css`: estilos para la página de listado de productos
- `public/assets/css/search.css`: estilos para la página de resultados de búsqueda

### Modificado
- Vistas limpias para usar el layout (sin `<!DOCTYPE>`, sin header/footer duplicados)
- `login.ejs` y `register.ejs` con `<% layout = false %>` para excluirse del layout
- `cartController.js`: simplificado para delegar toda la lógica al servicio
- `app.js`: rutas simplificadas usando `productsService` y `cartService`
- `header.ejs`: formulario de búsqueda conectado a `/search`
- `products.ejs`: selector de orden por precio