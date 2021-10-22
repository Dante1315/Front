function validarRegistro(formulario){
    //validar longitud nombre
    if(formulario.nombre.value.length < 3){
        alert("Por favor escribe tres carácteres o más en tu nombre");
        formulario.nombre.focus();
        return false;
    }

    //validar longitud 
    if(formulario.nombre.value.length < 3){
        alert("Por favor escribe tres carácteres o más en tu Alias");
        formulario.appat.focus();
        return false;
    }

    //validar longitud apellido
    if(formulario.apellido.value.length < 3){
        alert("Por favor escribe tres carácteres o más en tu apellido");
        formulario.apmat.focus();
        return false;
    }
    
    //obtencion de datos de los input
    var checkOk="QWERTYUIOPASDFGHJKLÑZXCVBNM+"+"qwertyuiopasdfghjklñzxcvbnm"+" ";
    var checkNombre=formulario.nombre.value;
    var checkNombre=formulario.nombre.value;
    var checkApellido=formulario.apellido.value;
    var allValid=true;
    
    
    
    //validar nombre
    for(var i=0; i<checkNombre.length;i++){
        var ch=checkNombre.charAt(i);
        for(var j=0; j<checkOk.length; j++)
        if(ch==checkOk.charAt(j))
            break;
        if(j==checkOk.length){
            allValid=false;
            break;
        }
    }
    if(!allValid){
        alert("Escribe solo letras");
        formulario.nombre.focus();
        return false;
    }

    //validar apellido paterno
    for(var i=0; i<checkNombre.length;i++){
        var ch=checkNombre.charAt(i);
        for(var j=0; j<checkOk.length; j++)
        if(ch==checkOk.charAt(j))
            break;
        if(j==checkOk.length){
            allValid=false;
            break;
        }
    }
    if(!allValid){
        alert("Escribe solo letras");
        formulario.appat.focus();
        return false;
    }

    //validar apellido materno
    for(var i=0; i<checkApellido.length;i++){
        var ch=checkApellido.charAt(i);
        for(var j=0; j<checkOk.length; j++)
        if(ch==checkOk.charAt(j))
            break;
        if(j==checkOk.length){
            allValid=false;
            break;
        }
    }
    if(!allValid){
        alert("Escribe solo letras");
        formulario.apmat.focus();
        return false;
    }

    //validar email
    var txt=formulario.correo.value;
    //expresion regular
    var b=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/; //diagonal invertda s significa cadena
    alert("Email "+ (b.test(txt)?"":"no ")+"valido");
    return b.test(txt);
}