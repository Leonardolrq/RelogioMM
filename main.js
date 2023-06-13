function relogio(){
    var data = new Date();
    var h = data.getHours();
    var m = data.getMinutes();
    var s = data.getSeconds();

    var diaSem = data.getUTCDay();
    var dias = data.getUTCDate();
    var meses = data.getUTCMonth()+1;
    var anos = data.getFullYear();

    var diaSemana;

    switch(diaSem){
        case 1 :
        diaSemana = "SEG";
        break;
        case 2 :
        diaSemana = "TER";
        break;
        case 2 :
        diaSemana = "QUA";
        break;
        case 2 :
        diaSemana = "QUI";
        break;
        case 2 :
        diaSemana = "SEX";
        break;
        case 2 :
        diaSemana = "SAB";
        break;
        default:
        diaSemana = "DOM"
    }

    var horas = document.getElementById("horas").innerHTML = (h).toLocaleString('pt-BR',{minimumIntegerDigits:2, useGrouping:false});;
    var minutos = document.getElementById("minutos").innerHTML = (m).toLocaleString('pt-BR',{minimumIntegerDigits:2, useGrouping:false});;
    var segundos = document.getElementById("segundos").innerHTML = (s).toLocaleString('pt-BR',{minimumIntegerDigits:2, useGrouping:false});

    var dia = document.getElementById("dia").innerHTML = (dias).toLocaleString('pt-BR',{minimumIntegerDigits:2, useGrouping:false});
    var mes = document.getElementById("mes").innerHTML = (meses).toLocaleString('pt-BR',{minimumIntegerDigits:2, useGrouping:false});
    var ano = document.getElementById("ano").innerHTML = anos;
    var diaS = document.getElementById("diaS").innerHTML = diaSemana;
}

var interval = setInterval(relogio,1000)
