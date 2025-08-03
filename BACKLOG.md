Product Backlog: Extensión "Lector Continuo"
Aquí está el backlog detallado, dividido en Epics, User Stories y Tareas técnicas. Un "Epic" es un gran objetivo, una "User Story" es un requisito desde la perspectiva del usuario, y una "Task" es la acción específica que un desarrollador debe realizar.

📚 Epic 1: Funcionalidad Central (Producto Mínimo Viable - MVP)
Objetivo: Implementar la capacidad esencial de guardar y restaurar la última página leída en un PDF.

User Story 1.1: Guardado Automático de Progreso
Como lector, quiero que la extensión guarde automáticamente la página en la que estoy cuando leo un PDF, para que no tenga que recordarla manualmente.

Task 1.1.1: Crear el archivo manifest.json y definir la estructura básica (nombre, versión, descripción).

Task 1.1.2: Solicitar el permiso storage en el manifest.json para poder guardar datos.

Task 1.1.3: Crear el script de contenido content_script.js.

Task 1.1.4: Configurar manifest.json para inyectar content_script.js únicamente en URLs que terminen en .pdf.

Match Pattern: "*://*/*.pdf"

Task 1.1.5: En content_script.js, implementar un listener para el evento hashchange que se activa cuando cambia el ancla de la URL (ej: al pasar de #page=4 a #page=5).

Task 1.1.6: Dentro del listener, crear una función que extraiga el número de página del window.location.hash.

Task 1.1.7: Utilizar chrome.storage.local.set() para guardar el par {'url_del_pdf': numero_de_pagina}.

User Story 1.2: Restauración Automática de Sesión
Como lector, quiero que al abrir un PDF que he leído antes, la extensión me lleve automáticamente a la última página que visité, para que pueda continuar mi lectura sin interrupciones.

Task 1.2.1: En content_script.js, al cargar la página por primera vez, obtener la URL del PDF actual (window.location.href).

Task 1.2.2: Usar chrome.storage.local.get() para buscar si existe un número de página guardado para esa URL.

Task 1.2.3: Si se encuentra un valor, comprobar que la página actual no es ya la página guardada (para evitar bucles).

Task 1.2.4: Si la página es diferente, actualizar el window.location.hash para navegar al usuario a la página guardada.

Ejemplo: window.location.hash = '#page=' + paginaGuardada;

✨ Epic 2: Mejoras de Usabilidad y Experiencia (Post-MVP)
Objetivo: Mejorar la interacción del usuario con la extensión y añadir funcionalidades convenientes.

User Story 2.1: Gestión Manual del Progreso
Como lector, quiero tener la opción de borrar la página guardada de un PDF específico, para que pueda empezar desde el principio si lo deseo.

Task 2.1.1: Añadir el permiso activeTab al manifest.json.

Task 2.1.2: Crear una interfaz de usuario emergente (popup.html y popup.css) que se active al hacer clic en el icono de la extensión.

Task 2.1.3: Crear el script popup.js para manejar la lógica de la ventana emergente.

Task 2.1.4: En popup.js, al abrir, mostrar la información del PDF activo: "Guardado en página X". Si no hay nada guardado, mostrar "No hay progreso guardado".

Task 2.1.5: Añadir un botón en popup.html con el texto "Olvidar esta página".

Task 2.1.6: Implementar la lógica para que el botón use chrome.storage.local.remove() y elimine la entrada del PDF actual.

User Story 2.2: Identidad Visual de la Extensión
Como usuario, quiero ver un icono representativo de la extensión en mi barra de herramientas de Brave, para que pueda identificarla y acceder a ella fácilmente.

Task 2.2.1: Diseñar y crear los iconos de la extensión en los tamaños requeridos (ej: 16x16, 48x48, 128x128).

Task 2.2.2: Declarar los iconos y la acción del navegador (action) en el manifest.json para que el icono aparezca en la barra de herramientas.