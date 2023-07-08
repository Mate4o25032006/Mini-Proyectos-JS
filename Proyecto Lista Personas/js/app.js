//Declaro Arreglo de objetos de tipo persona
const personas = [
    //Utilizamos la Clase persona dentro de este nuevo archivo
    new Persona('Mateo', 'Espinosa'),
];



function mostrarPersonas(){
    let text = ' ';
    for(let persona of personas){
        //Recorro cada objeto de tipo persona dentro del array y los concateno con formato li
        text += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('persona').innerHTML = text;
}



function agregarPersona(){
    const forma = document.forms['formulario'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if(nombre.value != '' && apellido.value != ''){
        //Creamos objeto de tio ersonsa
        const persona = new Persona(nombre.value, apellido.value);

        //Agrego datos del FORM al arreglo del inicio  y llamo nuevamente a la función 'mostrarPersonas'
        personas.push(persona);
        mostrarPersonas();
    }else{
        console.log('No hay Información para agregar');
    }
}

function cargarAgregados(){
    let nombreA = localStorage.getItem("Nombre");
    let apellidoA = localStorage.getItem("Apellido");

    document.getElementById('persona').innerHTML = `${nombreA}, ${apellidoA}`;
    mostrarPersonas();
}

