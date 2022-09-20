
function calcCasaFora (vCasa, vFora){

    if(vCasa, vFora<60){
        return "Desaprovado por parâmetro abaixo da média";
    }else{
        return (vCasa+vFora)/2;
    }

} 
document.getElementById("texto").innerHTML = calcCasaFora(80,80)      
