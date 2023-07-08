const mostrarReloj = () => {
    let fecha  = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());


    document.getElementById('hora').innerHTML = `${hora}:${minutos}:${segundos}`

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'viernes', 'Sábado'];
    //'getDay' nos regresa un valor númerico, el cual será el indice del arreglo, y dependiendo de esto extraemos el string de dias 
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];

    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //Recupero las clases del elemento 'contenedor' y alterno entre agregar y quitar la clase 'animar' para el mismo
    //Una vez agrego el estilo y la siguiente vex la quito
    document.getElementById('contenedor').classList.toggle('animar')
}

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}

//Llamo a la función cada segundo
setInterval(mostrarReloj, 1000)