function validaJogo (){
    var rodada = document.getElementById('rodada').value;
    var casa = document.getElementById('vCasa').value; 
    var fora = document.getElementById('vFora').value; 
    var casaGeral = document.getElementById('casaG').value; 
    var foraGeral = document.getElementById('foraG').value;

    if(rodada < 12){
        document.write("Rodada menor que a permitida");
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