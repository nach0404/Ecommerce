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