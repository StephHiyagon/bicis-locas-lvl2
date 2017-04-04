//variables
var registrar=document.getElementById('registra');
var span=document.getElementsByName('spanValid');
var nombre=document.getElementById('name');
var apellido=document.getElementById('lastname');
var correo=document.getElementById('input-email');
var contrasena=document.getElementById('input-password');
var indice=document.getElementById('bici');

//funcion que valida cada casillero
function validateForm(event){
	event.preventDefault();

  for(var i=0; i<span.length;i++){
    span[i].style.display="block";
    }

  if(!(nombre.value=="") || (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(nombre.value))){
    span[0].style.display="none";
    primMay(nombre);
  }
  if (!(apellido.value == "") || (/^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/.test(apellido.value))){
    span[1].style.display="none";
    primMay(apellido);
  }
  if ((/[\w]+@{1}[\w]+\.[a-z]{2,3}/.test(correo.value))){
    span[2].style.display="none";
  }
  if (contrasena.value=="" || (contrasena.value).length<=5) {
    span[4].style.display="none";
    span[3].style.display="block";
  }
  else if (contrasena.value ==="password" || contrasena.value ==="123456" || contrasena.value ==="098754") {
    span[4].style.display="block";
    span[3].style.display="none";
  }
  else{
    span[4].style.display="none";
    span[3].style.display="none";
  }

  if(!(indice.selectedIndex==0)){
    span[5].style.display="none";
  }
  if(nombre.value!="" && apellido.value!="" && correo.value!=""  && contrasena.value!="123456" && contrasena.value!="098754" && contrasena.value!="password" && indice.selectedIndex!=0){
		clear();
	}
}

// función que cambia la primera letra del string a mayúscula
function primMay(item){
  var txt="";
  var separa=(item.value).split(" ");
	separa.forEach(function(e){
    return txt = txt + e.charAt(0).toUpperCase() + e.slice(1) + " ";});
  var imp=txt.trim();
	return (item).value=imp;
}

//función que limpia los casilleros(se puede mejorar función)
function clear(){
  nombre.value="";
  apellido.value="";
  correo.value="";
  contrasena.value="";
  indice.value=0;
}

//evento
registrar.addEventListener('click',validateForm);
