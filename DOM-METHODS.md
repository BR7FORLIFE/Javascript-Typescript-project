# 📘 Guía Completa del DOM en JavaScript

## 📌 ¿Qué es el DOM?

El **DOM (Document Object Model)** es una representación en forma de árbol de la estructura HTML de una página web. Cada elemento HTML es un nodo que puede ser manipulado mediante JavaScript.

---

## 📂 Temas Clave del DOM

### 1. Acceso al DOM

- `document.getElementById(id)`
- `document.querySelector(selector)`
- `document.querySelectorAll(selector)`
- `document.getElementsByClassName(class)`
- `document.getElementsByTagName(tag)`

### 2. Modificación del DOM

- `.textContent`, `.innerText`, `.innerHTML`
- `.setAttribute()`, `.getAttribute()`, `.removeAttribute()`
- `.classList.add()`, `.classList.remove()`, `.classList.toggle()`

### 3. Crear y Eliminar Elementos

- `document.createElement()`
- `.appendChild()`, `.append()`, `.prepend()`
- `.removeChild()`, `.remove()`

### 4. Eventos DOM

- `.addEventListener(event, callback)`
- Eventos comunes: `click`, `submit`, `keydown`, `input`, `change`, `mouseover`, `mouseout`

### 5. Delegación de Eventos

- Uso de eventos en elementos padres para manejar hijos dinámicos
```js
parent.addEventListener("click", function(e) {
  if (e.target.matches(".item")) {
    // lógica
  }
});
