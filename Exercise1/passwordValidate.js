function validate()
{
	let password1 = document.getElementById("pass1").value;
	let password2 = document.getElementById("pass2").value;
	if(password1.length<8||password2.length<8)
	{
		document.write("Passwords must be 8 or more characters long.");
	}
	else if(password1 != password2)
		document.write("Passwords do not match.");
	else
		document.write("Password is valid.");
}
