//*Creación de Clase
class Tarea{
    static contadorTareas = 0;
    constructor(nombre){
        this._idTarea = ++Tarea.contadorTareas;
        this._nombre = nombre;
    }

    get idTarea(){
        return this._idTarea
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

const tareas = [
    new Tarea('Cortar Cebolla'),
    new Tarea('Hacer Tarea')
];

let cargarApp = () => {
    cargarTareas();
}


const cargarTareas = () =>{
    let tareasHTML = '';
    for(let tarea of tareas){
        tareasHTML += crearTareaHTML(tarea);
    }
    document.getElementById('lista-tareas').innerHTML = tareasHTML;
}

const crearTareaHTML = (tarea) =>{
    let tareaHTML = `
        <p class="warnings" id="tareas">${tarea.nombre}</p>
    `;
    return tareaHTML;
}


let agregarTarea = () =>{
    let formulario = document.forms['form'];
    let nombre = formulario['nomTarea'];

    if(nombre.value !== ''){
        tareas.push(new Tarea(nombre.value));
        cargarTareas();
    }
}

cargarApp();

