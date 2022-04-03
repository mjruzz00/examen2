function ejecuta(){
	nom=document.TEC.nom.value;
    document.TEC.nom.style.background="blue";
    if (nom.length==0){
		document.TEC.nom.style.background="red";
		alert("Error, se debe indicar el Nombre ...");
	}
	ap=document.TEC.ap.value;
    document.TEC.ap.style.background="blue";
    if (ap.length==0){
		document.TEC.ap.style.background="red";
		alert("Error, se debe indicar el Apellido paterno ...");
	}
	am=document.TEC.am.value;
    document.TEC.am.style.background="blue";
    if (am.length==0){
		document.TEC.am.style.background="red";
		alert("Error, se debe indicar el Apellido materno ...");
	}
	fec=document.TEC.fec.value;
	nom=nom.toUpperCase();
	ap=ap.toUpperCase();
	am=am.toUpperCase();
	anio=fec.substr(2,2);
	mes=fec.substr(5,2);
	dia=fec.substr(8,2);
	correo=nom.charAt(0).toLowerCase()+ap.toLowerCase()+am.charAt(0).toLowerCase()+"@empresa.com.mx";
    correo=correo.replaceAll("ñ","n");
    correo=correo.replaceAll(" ","_");
    correo=correo.replaceAll("á","a");
    correo=correo.replaceAll("é","e");
    correo=correo.replaceAll("í","i");
    correo=correo.replaceAll("ó","o");
    correo=correo.replaceAll("ú","u");
    document.TEC.salida.value=correo;
    contra=dia+mes+anio;
    document.TEC.contra.value=contra;
}