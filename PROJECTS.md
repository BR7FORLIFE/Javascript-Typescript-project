# 🛠️ Proyectos Avanzados para Dominar el DOM en JavaScript

Estos proyectos están diseñados para llevarte al límite con JavaScript y el DOM puro. Con cada uno aplicarás técnicas de manipulación, eventos, validación, y render dinámico.

---

## 🎯 Proyecto 1: Sistema de Notas con CRUD

### Objetivo
Crear una app que permita crear, editar, eliminar y buscar notas.

### Requisitos
- Formulario para añadir nuevas notas.
- Botones para editar y eliminar.
- Filtro de búsqueda en tiempo real.
- Guardado en `localStorage`.

### Conceptos del DOM aplicados
- `.addEventListener()`
- `.appendChild()`, `.remove()`
- `.innerText`, `.value`
- Delegación de eventos
- `localStorage`

---

## 🎯 Proyecto 2: Galería con Modal Dinámico

### Objetivo
Mostrar una serie de imágenes pequeñas que al hacer clic abren una versión grande en un modal.

### Requisitos
- Galería generada desde un array de objetos.
- Modal para mostrar imagen con fondo oscuro.
- Botón para cerrar el modal o presionar `Escape`.

### Conceptos del DOM aplicados
- `.createElement()`, `.appendChild()`
- `.classList.add()/remove()`
- `.addEventListener('click')`, `keydown`
- DOM Traversing
- `insertAdjacentHTML()`

---

## 🎯 Proyecto 3: Cronómetro y Temporizador

### Objetivo
Desarrollar un cronómetro con botones de inicio, pausa y reinicio.

### Requisitos
- Contador de tiempo con `setInterval()`.
- Control de botones para manejar el estado.
- Agregar modo temporizador (cuenta atrás).

### Conceptos del DOM aplicados
- `setInterval()`, `clearInterval()`
- `.textContent`
- Manipulación de clases
- Eventos de clic

---

## 🎯 Proyecto 4: App de Tareas Kanban (Arrastrar y Soltar)

### Objetivo
Crear una app tipo Trello con columnas para organizar tareas.

### Requisitos
- Columnas: Por hacer, En progreso, Hecho.
- Tareas arrastrables.
- Guardado en `localStorage`.

### Conceptos del DOM aplicados
- `dragstart`, `dragover`, `drop`
- `.appendChild()`
- `.dataset`, `data-*`
- `.classList`, `.style`
- DOM Traversing

---

## 🎯 Proyecto 5: Generador de Formularios Dinámico

### Objetivo
Permitir que el usuario defina la estructura de un formulario desde la interfaz.

### Requisitos
- Campos seleccionables: texto, número, checkbox, etc.
- Vista previa del formulario construida en vivo.
- Validación y envío que muestre los datos.

### Conceptos del DOM aplicados
- `.createElement()`
- `.setAttribute()`
- `.appendChild()`
- Formularios y eventos `submit`, `input`
- `.value`, `.checked`, `.selected`

---

## 🎯 Proyecto 6: Calculadora de Gastos Personales

### Objetivo
Una app para ingresar gastos y ver totales por categoría.

### Requisitos
- Formulario para ingresar gasto.
- Lista de gastos con eliminación individual.
- Total calculado automáticamente.
- Filtro por categoría.

### Conceptos del DOM aplicados
- `.value`, `.textContent`
- `.addEventListener()`
- `.filter()` + DOM rendering
- `.innerHTML` para renderizar listas
- `localStorage` para persistencia

---

## 🎯 Proyecto 7: Juego "Simon Says" o Memoria

### Objetivo
Desarrollar un juego interactivo tipo "Memoria" o "Secuencia de colores".

### Requisitos
- UI dinámica con botones de colores.
- Generación de secuencia o mezcla de cartas.
- Verificación de clics del usuario.
- Puntuación e intentos.

### Conceptos del DOM aplicados
- `.classList.toggle()`
- `.setTimeout()`, `.setInterval()`
- Eventos de clic
- DOM Traversing
- Estado de juego en variables

---

## ✅ Consejos Generales

- Usa componentes reutilizables (`createElement` con funciones).
- Haz separación clara entre lógica y renderizado.
- Controla el estado con JS (no solo el DOM).
- Versiona tus proyectos en Git.

---

> 💪 Con estos proyectos no solo aprendes el DOM: lo dominas por completo. No hay atajos, solo práctica real.

