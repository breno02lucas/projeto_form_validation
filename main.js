function FormValidation() 
{
    let pass = document.forms["login"]["password"].value;

    if (pass == "") {
      alert("Não esqueça a senha!");
      return false;
    }
}

