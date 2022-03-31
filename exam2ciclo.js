function vocales(){
	voc="AEIOUÁÉÍÓÚÜ";
	letra="?";
	for(i=1;i<ap.length;i++){
		letra=ap.charAt(i);
		if (voc.includes(letra)) return(letra);
	}
	return(letra);
}

function ejecuta(){
	nom=document.TEC.nom.value;
	document.TEC.nom.style.background="blue";
	if (nom.length==0) {
		document.TEC.nom.style.background="red";
		alert("Error, se debe indicar el Nombre...");
	}
	ap=document.TEC.ap.value;
	document.TEC.ap.style.background="blue";
	if (ap.length==0) {
		document.TEC.ap.style.background="red";
		alert("Error, se debe indicar el Apellido Paterno...");
	}
	am=document.TEC.am.value;
	document.TEC.am.style.background="blue";
	if (am.length==0) {
		document.TEC.am.style.background="red";
		alert("Error, se debe indicar el Apellido Materno...");
	}
	fec=document.TEC.fec.value;
	document.TEC.am.style.background="blue";
	if (fec.length==0) {
		document.TEC.fec.style.background="red";
		alert("Error, se debe indicar la fecha...");
	}
	salida=document.TEC.salida.value;
	document.TEC.salida.style.background="blue";
	if (salida.length==0) {
	correo=ap.chart(0)+nom+am.chart(0)+"@empresa.com.mx"
}