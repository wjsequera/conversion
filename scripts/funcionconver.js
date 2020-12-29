var conversionAej = document.getElementById("conversionA");
//console.log(conversionAej.value);
var ingresa = conversionAej
//document.getElementById("ingreso").innerHTML = ingresar;

//parseInt(tempentrada.value);

//boton2 = document.getElementById("CONVERTER").addEventListener("click",funcconversion);


function conversion ()
{
    tempentrada= document.getElementById("tempin")
    temp = parseFloat(tempentrada.value);  //cambia la entrada string a un numero con decimales tipo flotante donde
                                           // la coma puede varira de Posicion
    document.getElementById("result").innerHTML = document.getElementById("conversionA").value;
    
    if (ingresa.value == "celtoFah")
     { //document.getElementById("ingreso").innerHTML = "Ingresar los Grados Celcius:" 
       tempsalida = temp*9/5+32;
       document.getElementById("result").innerHTML = tempsalida;
       document.getElementById("resultund").innerHTML = "°F";
       
        }
 
else if (ingresa.value == "FahtoCel"){

  tempsalida = (temp - 32) * (5/9);
  document.getElementById("result").innerHTML = tempsalida;
  document.getElementById("resultund").innerHTML = "°C";

}

else if (ingresa.value == "CeltoKel")
{
  tempsalida = temp + 273.15;
  document.getElementById("result").innerHTML = tempsalida;
  document.getElementById("resultund").innerHTML = "°K";


}

else if (ingresa.value == "KeltoCel") {

tempsalida = temp - 273.15;
  document.getElementById("result").innerHTML = tempsalida;
  document.getElementById("resultund").innerHTML = "°C";
}

else if (ingresa.value == "FahtoKel") {

tempsalida = (temp - 32) * (5/9) + 273.15;
  document.getElementById("result").innerHTML = tempsalida;
  document.getElementById("resultund").innerHTML = "°K";

}

else if (ingresa.value == "KeltoFah") {

  tempsalida = (temp - 273.15) * (9/5) + 32;
    document.getElementById("result").innerHTML = tempsalida;
    document.getElementById("resultund").innerHTML = "°F";
  
  }
  

}

var conversionB = document.getElementById("conversionB")
var velEntrada = 0;

function conversionVelocidad ( )
{
velEntrada = document.getElementById("velin");
vel = parseFloat(velEntrada.value);
document.getElementById("result_velocidad").innerHTML = document.getElementById("conversionB").value;

if (conversionB.value == "m/s a km/h")
{
  velsalida = vel * 3.6;
  document.getElementById("result_velocidad").innerHTML = velsalida;
  document.getElementById("resultund_velocidad").innerHTML = "Km/h";
}

else if (conversionB.value == "km/h a m/s")
{
  velsalida = vel / 3.6;
  document.getElementById("result_velocidad").innerHTML = velsalida;
  document.getElementById("resultund_velocidad").innerHTML = "m/s";
}

else if (conversionB.value == "m/h a km/h")
{
  velsalida = vel * 1.609;
  document.getElementById("result_velocidad").innerHTML = velsalida;
  document.getElementById("resultund_velocidad").innerHTML = "km/h";
}

else if (conversionB.value == "nm a km/h")
{
  velsalida = vel * 1.852;
  document.getElementById("result_velocidad").innerHTML = velsalida;
  document.getElementById("resultund_velocidad").innerHTML = "km/h";
}

else if (conversionB.value == "km/h a m/h")
{
  velsalida = vel / 1.609;
  document.getElementById("result_velocidad").innerHTML = velsalida;
  document.getElementById("resultund_velocidad").innerHTML = "m/h";
}

else if (conversionB.value == "km/h a nm")
{
  velsalida = vel / 1.852;
  document.getElementById("result_velocidad").innerHTML = velsalida;
  document.getElementById("resultund_velocidad").innerHTML = "nm";
}

}

var conversionC = document.getElementById("conversionC")
var presionEntrada = 0;

function conversionPresion ( )
{
presionEntrada = document.getElementById("presionin");
presion = parseFloat(presionEntrada.value);
document.getElementById("result_presion").innerHTML = document.getElementById("conversionC").value;

if (conversionC.value == "psi a bar")
{
  presionsalida = presion / 14.504;
  document.getElementById("result_presion").innerHTML = presionsalida;
  document.getElementById("resultund_presion").innerHTML = "Bar";
}

else if (conversionC.value == "bar a psi")
{
  presionsalida = presion * 14.504;
  document.getElementById("result_presion").innerHTML = presionsalida;
  document.getElementById("resultund_presion").innerHTML = "Psi";
}

else if (conversionC.value == "mmhg a psi")
{
  presionsalida = presion / 51.715;
  document.getElementById("result_presion").innerHTML = presionsalida;
  document.getElementById("resultund_presion").innerHTML = "Psi";
}

else if (conversionC.value == "psi a mmhg")
{
  presionsalida = presion * 51.715;
  document.getElementById("result_presion").innerHTML = presionsalida;
  document.getElementById("resultund_presion").innerHTML = "mmhg";
}


}