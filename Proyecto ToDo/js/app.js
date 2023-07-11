//*Creación de Clase
class Tarea {
    static contadorTareas = 0;
  
    constructor(nombre) {
      this._idTarea = ++Tarea.contadorTareas;
      this._nombre = nombre;
    }
  
    get idTarea() {
      return this._idTarea;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
}
  
const tareas = [
  new Tarea('Cortar Cebolla'),
  new Tarea('Hacer Tarea')
];
  
let cargarApp = () => {
  cargarTareas();
};
  
const cargarTareas = () => {
    let tareasHTML = '';
    for (let tarea of tareas) {
      tareasHTML += crearTareaHTML(tarea);
    }
    document.getElementById('lista-tareas').innerHTML = tareasHTML;
};
  
const crearTareaHTML = (tarea) => {
    let tareaHTML = `
      <div class="contenedor-tareas" id="tarea-${tarea.idTarea}">
          <button class="btn-eliminar" onclick="eliminarTarea(${tarea.idTarea})">
              <ion-icon name="close-circle-outline"></ion-icon>
          </button>
          <p class="tareas" id="tareas-${tarea.idTarea}">${tarea.nombre}</p>
          <button class="btn-completar" onclick="completarTarea(${tarea.idTarea})">
              <ion-icon name="checkmark-circle-outline"></ion-icon>
          </button>
      </div>
    `;
    return tareaHTML;
};
  
let agregarTarea = () => {
    let formulario = document.forms['form'];
    let nombre = formulario['nomTarea'];
  
    if (nombre.value !== '') {
      tareas.push(new Tarea(nombre.value));
      cargarTareas();
    }
};
  
const eliminarTarea = (idTarea) => {
    let indiceEliminar = tareas.findIndex((tarea) => tarea.idTarea === idTarea);
    tareas.splice(indiceEliminar, 1);
    cargarTareas();
};
  
function completarTarea(idTarea) {
    const parrafo = document.getElementById(`tareas-${idTarea}`);
    parrafo.style.textDecorationLine = 'line-through';
}

cargarApp();
  

