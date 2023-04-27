function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
      alert('No has escrito nada en el nombre');
      return;
    }
    
    var apellido = document.getElementById('apellido').value;
    if (apellido.length == 0) {
      alert('No has escrito nada en el apellido');
      return;
    }
    
    var email = document.getElementById('email').value;
    function ValidateEmail(email) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value))
    {
        return (true)
    }
        alert("Debes ")
        return (false)
    }

    var telefono = document.getElementById('telefono').value;
    var nav4 = window.Event ? true : false;
    function aceptNum(evt){
    var key = nav4 ? evt.which : evt.keyCode;
    return (key <= 13 || (key>= 48 && key <= 57));
    }


    this.submit();
  }

$(document).ready(function () {
    $('.tg').DataTable();
});