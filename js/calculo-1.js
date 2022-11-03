

function calcCasaFora (){ 
    /*var vCasa = document.getElementById("vCasa").value;
    var vFora = document.getElementById("vFora").value;
    var rodada = document.getElementById("rodada").value;
    var casaG = document.getElementById("casaG").value;
    var foraG = document.getElementById("foraG").value;

    function calculos (){
        if(rodada<12){
            return document.getElementById("texto").innerHTML = "<span style='color: red;'>Não possui o número de rodadas suficientes</span>";
        }
        if((vCasa < 60) || (vFora < 60)){
            return document.getElementById("texto").innerHTML = "<span style='color:red;'> Sem critério % casa ou fora </span>";
        }else{
            var calcCasaFora = (parseFloat(vCasa)+parseFloat(vFora))/2;
            // document.getElementById("texto").innerHTML = calcCasaFora;
        }   
        if((casaG<60) || (foraG<60)){
            return document.getElementById("texto").innerHTML = "<span style='color:red;'> Sem critério GERAL </span>";
        }else{
            var calcGeral = (parseFloat(casaG)+parseFloat(foraG))/2;
            // document.getElementById("texto").innerHTML = calcGeral
        } 
        return document.getElementById("texto").innerHTML = "<span style='color:green;'> APROVADO com " + ((calcCasaFora+calcGeral)/2) + "%</span>";
    }

    return calculos();*/
    function calculation (rodada, casa, fora, casaGeral, foraGeral) {
        
        if(rodada < 12){
            return document.getElementById("texto").innerHTML = "<span style='color: red;'>Não possui o número de rodadas suficientes</span>";
        }
        if((casa < 60) || (fora < 60)){
            return document.getElementById("texto").innerHTML = "<span style='color:red;'> Sem critério % casa ou fora </span>";
        }else{
            var calcCasaFora = (parseFloat(casa)+parseFloat(fora))/2;
            // document.getElementById("texto").innerHTML = calcCasaFora;
        }   
        if((casaGeral<60) || (foraGeral<60)){
            return document.getElementById("texto").innerHTML = "<span style='color:red;'> Sem critério GERAL </span>";
        }else{
            var calcGeral = (parseFloat(casaG)+parseFloat(foraG))/2;
            // document.getElementById("texto").innerHTML = calcGeral
        } 
        return document.getElementById("texto").innerHTML = "<span style='color:green;'> APROVADO com " + ((calcCasaFora+calcGeral)/2) + "%</span>";
    }

    let rod = document.getElementById("rodada").value;
    let vCasa = document.getElementById("vCasa").value;
    let vFora = document.getElementById("vFora").value;
    let casaG = document.getElementById("casaG").value;
    let foraG = document.getElementById("foraG").value;

    calculation(rod, vCasa, vFora, casaG, foraG);

    
}

//Eventos
let startBtn = document.getElementById ("calc");
startBtn.addEventListener ("click", calcCasaFora);


