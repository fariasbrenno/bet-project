


function validaJogo (){

    var jogo = {
        "rodada": 12,
        "casa": 60,
        "fora": 70,
        "casaG": 80,
        "foraG": 100
    }
    return jogo;
    /**let rodada = document.getElementById("rodada").value;
    let casa = document.getElementById("vCasa").value;
    let fora = document.getElementById("vFora").value;
    let casaG =  document.getElementById("casaG").value;
    let foraG =  document.getElementById("foraG").value;

    document.write(rodada);
    document.write(casa);
    document.write(fora);**/ 
    
}
var teste = (validaJogo());

    /**function calcMedia (a,b){
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