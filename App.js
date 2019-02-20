(function(){

   function actualizarHora()
   {
    let fecha = new Date(),
    horas = fecha.getHours(),
    ampm,
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diaSemana = fecha.getDay(),
    dia = fecha.getDate(),
    mes = fecha.getMonth(),
    año = fecha.getFullYear();

    let pHoras = document.getElementById('horas'),
        pAMPM = document.getElementById('ampm'),
        pMinutos = document.getElementById('minutos'),
        pSegundos = document.getElementById('segundos'),
        pDiaSemana = document.getElementById('diaSemana'),
        pDia = document.getElementById('dia'),
        pMes = document.getElementById('mes'),
        pYear = document.getElementById('año');

    let semana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];//Array con los dias
    pDiaSemana.innerHTML = semana[diaSemana]; //Recorremos el array con diaSemana, Que devuelve los dias de la semana como si fuera un areglo, Del 0-6

    pDia.innerHTML = dia;//Dia

    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];//Array con los dias
    pMes.innerHTML = meses[mes];//Mes

    pYear.innerHTML = año;//Año

    if(horas >= 12)
    {
        horas += - 12; 
        ampm = 'PM';
    }else
    {
        ampm = 'AM';
    }

    if(horas == 0)
    {
        horas = 12;
    }

    pHoras.innerHTML = horas;
    pAMPM.innerHTML = ampm;

    if(minutos < 10)
    {
       minutos = '0' + minutos;
    }

    if(segundos < 10)
    {
       segundos = '0' + segundos;
    }

    pMinutos.innerHTML = minutos;
    pSegundos.innerHTML = segundos;

   }
   
   var intervalo = setInterval(actualizarHora, 1000);
  

}())

   //Obtener Fechas
 /*console.log(fecha);
   console.log(fecha.getHours());
   console.log(fecha.getMinutes());
   console.log(fecha.getSeconds());

   console.log(fecha.getDate());
   console.log(fecha.getDay());
   //console.log(fecha.getMonth());
   console.log(fecha.getFullYear());*/