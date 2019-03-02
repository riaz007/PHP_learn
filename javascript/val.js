
function validate()
{
	var name=document.getElementById('name').value;
	var  name_exp=/^[a-zA-Z ]*$/;
	var len=name.length;
	var age=document.getElementById('age').value;
	var age_exp=/^[12-99]{2}$/;
	var len=age.length;
	var email=document.getElementById('email').value;
	var email_exp= /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	var len=email.length;
	var phone=document.getElementById('phone').value;
	var phone_exp=/^[0-9]{10}$/;
	var len=phone.length;
	var address=document.getElementById('address').value;
	var pincode=document.getElementById('pincode').value;
	var pin_exp=/^[0-9]{6}$/;
	var len=pincode.length;
	var status=true;
	//Name validations
	if(name=="")
	 {
	 	document.getElementById('nameerr').innerHTML="</n>*Name is Required";
		status=false;
	 }
	 else
	{
		document.getElementById('nameerr').innerHTML="";
	}
	if(name!="")
	{
		if(!name_exp.test(name))
		{
			status=false;
			document.getElementById('nameerr').innerHTML="*Invalid name";
		}
		else
		{
			document.getElementById('nameerr').innerHTML="";
		}
	}
	//Email Validation
	if(email=="")
	 {
		 document.getElementById('emailerr').innerHTML="*Email is Required";
		 status=false;
	 }
	 else
	{
		document.getElementById('emailerr').innerHTML="";
	}
	if(email!="")
	{
		if(!email_exp.test(email))
		{
			status=false;
			document.getElementById('emailerr').innerHTML="*Invalid email";
		}
		else
		{
			document.getElementById('emailerr').innerHTML="";
		}
	}
	//Address Validation
	if(address=="")
	{
	        document.getElementById('addresserr').innerHTML="*Address is Required";
		status=false;
	 }
	 else
	{
	        document.getElementById('addresserr').innerHTML="";
	}
	//age validations
	if(age=="")
	{
		status=false;
		document.getElementById('ageerr').innerHTML="*Age is Required";
	}
	else
	{
		document.getElementById('ageerr').innerHTML="";
	}
	//length and patter validations here
	if(age!="")
	{
		if(!age_exp.test(age))
		{
			status=false;
			document.getElementById('ageerr').innerHTML="*Invalid age";
		}
		else
		{
			document.getElementById('ageerr').innerHTML="";
		}
	}
	//Phone validations
	if(phone=="")
	{
		status=false;
		document.getElementById('phoneerr').innerHTML="*Phone No. is Required";
	}
	else
	{
		document.getElementById('phoneerr').innerHTML="";
	}
	//length and patter validations here
	if(phone!="")
	{
		if(!phone_exp.test(phone))
		{
			status=false;
			document.getElementById('phoneerr').innerHTML="*Invalid Phone No.";
		}
		else
		{
			document.getElementById('phoneerr').innerHTML="";
		}
	}
	//Pin code validations
	if(pincode=="")
	{
		status=false;
		document.getElementById('pincodeerr').innerHTML="*Pincode is Required";
	}
	else
	{
		document.getElementById('pincodeerr').innerHTML="";
	}
	//length and patter validations here
	if(pincode!="")
	{
		if(!pin_exp.test(pincode))
		{
			status=false;
			document.getElementById('pincodeerr').innerHTML="*Invalid pincode";
		}
		else
		{
			document.getElementById('pincodeerr').innerHTML="";
		}
	}

	return status;
}
