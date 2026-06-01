 README — 

Cypress QA Automation / Technology With Purpose by Santerx

¡Bienvenido! Este repositorio contiene archivos de Cypress para aprender y practicar lo esencial de QA Automation dentro del programa "Technology With Purpose" por Santerx. Está diseñado para ser didáctico, práctico y fácil de extender.

### 🚀 Contenido
- 📁 cypress/  
  - integration/ — pruebas de ejemplo (E2E, UI)  
  - fixtures/ — datos de prueba  
  - support/ — comandos y configuración global  
  - plugins/ — configuración de plugins (si aplica)  
- 🧪 tests/ — suites de prueba agrupadas (opcional)  
- 📄 cypress.json — configuración principal de Cypress  
- 📦 package.json — scripts y dependencias  
- 📝 README.md — este archivo

### 🎯 Objetivos del repo
- Enseñar los fundamentos de pruebas E2E con Cypress.  
- Mostrar buenas prácticas en automatización (estructura, comandos reutilizables, fixtures).  
- Proveer ejemplos listos para ejecutar y adaptar a proyectos reales.  
- Integrar conceptos de "Technology With Purpose" aplicados a QA.

### 🛠️ Requisitos
- Node.js v14+  
- npm o yarn  
- Cypress (instalado vía package.json)

### ⚙️ Instalación rápida
1. Clonar el repositorio:
   ```
   git clone <URL-del-repo>
   ```
2. Instalar dependencias:
   ```
   npm install
   ```
   o
   ```
   yarn
   ```
3. Abrir Cypress:
   ```
   npx cypress open
   ```
   o ejecutar pruebas en headless:
   ```
   npx cypress run
   ```

### 🧩 Estructura de ejemplo de pruebas
- tests/
  - login.spec.js — pruebas de login (positivas y negativas)  
  - compras.spec.js — flujo de compra básico  
  - accesibilidad.spec.js — checks básicos de a11y  
  - api.spec.js — pruebas sobre endpoints (opcional)

### ✅ Buenas prácticas incluidas
- Comandos personalizados en cypress/support/commands.js  
- Uso de fixtures para separar datos de pruebas  
- Selectores resilientes (data-* attributes)  
- Tests idempotentes y aislados  
- Scripts npm para ejecución rápida:
  - `"test:open": "cypress open"`
  - `"test:run": "cypress run"`

### 📚 Recursos y aprendizaje
- Documentación oficial de Cypress — empezar por los conceptos básicos y ejemplos.  
- Ejemplos incluidos en /cypress/integration para replicar y modificar.  
- Practicar TDD/BDD escribiendo tests antes de implementar cambios.

### 🤝 Contribuir
- Crear una rama feature/tu-feature  
- Abrir un Pull Request describiendo cambios y objetivo del test  
- Mantener estilo de código y nomenclatura consistente

### 🧾 Licencia
- MIT (puedes cambiar al que prefieras)

### 📌 Contacto / Créditos
- Technology With Purpose — Santerx  
- Autor: (Walter Belotti)

