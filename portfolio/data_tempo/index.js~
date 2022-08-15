function tempoAgora(){
    let tmp = new Date();
    let hra = tmp.getHours();
    let min = tmp.getMinutes();
    let sec = tmp.getSeconds();
    let abrv;
    let tempo = document.querySelector('#tempo');

    hra <= 12 ? abrv = " AM" : abrv = " PM";
    
    hra < 10 ? hra : "0" + hra;
    min < 10 ? min : "0" + min;
    sec < 10 ? sec : "0" + sec;
    
    let cmb = hra+":"+min+":"+sec;
    tempo.innerHTML=cmb + abrv;

    setInterval(function() { tempoAgora() }, 1000);
}

tempoAgora();
