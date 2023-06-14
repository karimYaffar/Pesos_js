var form = document.getElementById('resul')
var r , r2 
form.addEventListener("click", function (evento) {
    /* evento.preventDefault() */
    var peso = document.getElementById("P").value
    var vdolar = document.getElementById("VD").value

    if (peso > 0 && vdolar > 0  ||vdolar > 0 )
    {
        r = peso / vdolar;
        crear ('Tiene '+ r + " Dolares")
       
    }
    else
    alert ('Existen valores nulos')
  

})


var form2 = document.getElementById('resul2')

form2.addEventListener("click", function (evento){
    evento.preventDefault()
   
    var vdolar = document.getElementById("VD").value
    var dolar = document.getElementById("D").value
    


    r2 = vdolar * dolar 
   crear ('Tiene '+ r2 + " Pesos")

})



function crear(aux1) {
    var R = document.createElement('h3');
    R.textContent = aux1;
    R.id = 'new';
    document.getElementById("style").prepend(R);
}


function dropinp(TUTR){
    TUTR = document.getElementsById("P, D, VD").innerHTML = "";
  
    
 return TUTR;
}


function eliminartodo() {
    var Et = document.getElementById("style");
    Et.innerHTML = "";
}

function eliminar1() {
    var E1 = document.getElementById("new");
    if (E1 != null)
        document.getElementById("style").removeChild(E1)
}




