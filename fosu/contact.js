
function validateForm()
    	{

            if (document.myForm.first_name.value=="" && document.myForm.last_name.value=="" && document.myForm.email.value=="" && document.myForm.phone.value=="" && document.myForm.comments.value=="") {
                alert("Please fill all the form Fields!");
                document.myForm.first_name.focus();
                return false;
            }
               else if (document.myForm.first_name.value=="") {
                alert("Please provide your First Name!");
                document.myForm.first_name.focus();
                return false;

            else if (document.myForm.last_name.value=="") {
    			alert("Please provide your Last Name!");
    			document.myForm.last_name.focus();
    			return false;
    		}
    		else if (document.myForm.email.value=="") {
    			alert("Please provide your Email!");
    			document.myForm.email.focus();
    			return false;
    		}
    		else if (document.myForm.phone.value=="") {
    			alert("Please provide your Phone No!");
    			document.myForm.phone.focus();
    			return false;
    		}
    		else if (document.myForm.comments.value=="") {
    			alert("Please provide your Message!");
    			document.myForm.comments.focus();
    			return false;
    		}
    		return (true);
    	}