function validation()
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    if(name == "" || email == "" || phone == "" || message == "")
    {
        alert("Empty Fields are Present! Please Enter the Value...");
    }
    else
    {
        alert("Thank You")
    }


}