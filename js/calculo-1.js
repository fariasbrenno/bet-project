function validaJogo (){

    var jogo = {
        rodada: document.getElementById("rodada").value,
        casa: document.getElementById("vCasa").value,
        fora: document.getElementById("vFora").value,
        casaG: document.getElementById("casaG").value,
        foraG: document.getElementById("foraG").value
    
    }
     
    for(p in jogo){
        document.write(p+"</br>");
    }
}



    /**
    function calcMedia (a,b){
        if(a,b<60){
           return "Desaprovado por parâmetro abaixo da média";
        }else{
            return (a+b)/2;
        }
    }
    function calcMediaExp (param1,param2){
        if(param1,param2<60){
            return "Desaprovado por parâmetro abaixo da média";
         }else{
             return (param1+param2)/2;
         }
    }
    
    let param1 = calcMedia(100,100);
    let param2 = calcMedia(90,90);
    let mediaExp = calcMediaExp(param1,param2);
    
    console.log ("Média casa e fora "+param1+"%");
    console.log ("Média geral "+param2+"%");
    console.log ("Média exponencial "+mediaExp+"%");


console.log (validaJogo());**/