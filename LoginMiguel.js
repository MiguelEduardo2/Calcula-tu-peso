function Ingresar(){
//Declarar Variables
var Us, Co;
//Recuperar los valores
Us=document.getElementById("usuario").value;
Co=document.getElementById("contraseña").value;
if (Us == "miguel" && Co =="2022")
{
	alert("Usuario y Contraseña validos !!Bienvenido")
	window.open("Peso Galactico2.html");
	
}
else{
	alert("Usuario y Contraseña invalidos");
}
}