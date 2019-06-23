

/*

function js for all forms
================================
WD : CPG


*/

function contactValidationForms(){
				var x = document.forms["contForms"]["fname"].value;
					if (x == null || x == "") {	
						 document.getElementById('fname').style.border = "2px solid #ff0000";
						  document.getElementById('fname').focus();
						return false;
					}else{
						 document.getElementById('fname').style.border = "2px solid #ccc";
					}
					
				var x = document.forms["contForms"]["emailhead"].value.trim();
					var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 
					 if(!filter.test(x)){
						document.getElementById('emailhead').style.border = "2px solid #ff0000";
						 document.getElementById('emailhead').focus();
						return false;
					 
						}else{
							  document.getElementById('emailhead').style.border = "2px solid #ccc";
						}
			
			var x = document.forms["contForms"]["phone"].value;
					if (x == null || x == "") {	
						 document.getElementById('phone').style.border = "2px solid #ff0000";
						  document.getElementById('phone').focus();
						return false;
					}else{
						 document.getElementById('phone').style.border = "2px solid #ccc";
					}
					
			var x = document.forms["contForms"]["contMessage"].value;
					if (x == null || x == "") {	
						 document.getElementById('contMessage').style.border = "2px solid #ff0000";
						  document.getElementById('contMessage').focus();
						return false;
					}else{
						 document.getElementById('contMessage').style.border = "2px solid #ccc";
					}
			
}



function gmsValidation(){
	
				var x = document.forms["gmsForms"]["gmsCompany"].value;
					if (x == null || x == "") {	
						 document.getElementById('gmsCompany').style.border = "2px solid #ff0000";
						  document.getElementById('gmsCompany').focus();
						return false;
					}else{
						 document.getElementById('gmsCompany').style.border = "2px solid #ccc";
					}
	
				var x = document.forms["gmsForms"]["gmsContact"].value;
					if (x == null || x == "") {	
						 document.getElementById('gmsContact').style.border = "2px solid #ff0000";
						 document.getElementById('gmsContact').focus();
						return false;
					}else{
						 document.getElementById('gmsContact').style.border = "2px solid #ccc";
					}
			
				var x = document.forms["gmsForms"]["gmsEmail"].value;
					var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 
					 if(!filter.test(x)){
						document.getElementById('gmsEmail').style.border = "2px solid #ff0000";
						document.getElementById('gmsEmail').focus();
						
						return false;
					 
						}else{
							  document.getElementById('gmsEmail').style.border = "2px solid #ccc";
						}
						
				var x = document.forms["gmsForms"]["gmsPhone"].value;
					if (x == null || x == "") {	
						 document.getElementById('gmsPhone').style.border = "2px solid #ff0000";
						 document.getElementById('gmsPhone').focus();
						return false;
					}else{
						 document.getElementById('gmsPhone').style.border = "2px solid #ccc";
					}
	
				var x = document.forms["gmsForms"]["gmsCountry"].value;
					if (x == null || x == "") {	
						 document.getElementById('gmsCountry').style.border = "2px solid #ff0000";
						  document.getElementById('gmsCountry').focus();
						return false;
					}else{
						 document.getElementById('gmsCountry').style.border = "2px solid #ccc";
					}
	
	
				var x = document.forms["gmsForms"]["gmsDelegates"].value;
					if (x == null || x == "") {	
						 document.getElementById('gmsDelegates').style.border = "2px solid #ff0000";
						  document.getElementById('gmsDelegates').focus();
						return false;
					}else{
						 document.getElementById('gmsDelegates').style.border = "2px solid #ccc";
					}
	
				var x = document.forms["gmsForms"]["gmsRequire"].value;
					if (x == null || x == "") {	
						 document.getElementById('gmsRequire').style.border = "2px solid #ff0000";
						  document.getElementById('gmsRequire').focus();
						return false;
					}else{
						 document.getElementById('gmsRequire').style.border = "2px solid #ccc";
					}
	
}




function regvalidateForm(){
	
			var x = document.forms["regForms"]["regName"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('regName').style.border = "2px solid #ff0000";
						  document.getElementById('regName').focus();
						return false;
					}else{
						 document.getElementById('regName').style.border = "2px solid #ccc";
					}
			
			
			var x = document.forms["regForms"]["regEmail"].value;
					var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 
					 if(!filter.test(x)){
						document.getElementById('regEmail').style.border = "2px solid #ff0000";
						 document.getElementById('regEmail').focus();
						return false;
					 
						}else{
							  document.getElementById('regEmail').style.border = "2px solid #ccc";
						}
				
				var x = document.forms["regForms"]["regPhone"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('regPhone').style.border = "2px solid #ff0000";
						  document.getElementById('regPhone').focus();
						return false;
					}else{
						 document.getElementById('regPhone').style.border = "2px solid #ccc";
					}
			
				var x = document.forms["regForms"]["regAddress"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('regAddress').style.border = "2px solid #ff0000";
						  document.getElementById('regAddress').focus();
						return false;
					}else{
						 document.getElementById('regAddress').style.border = "2px solid #ccc";
					}
	
				var x = document.forms["regForms"]["regOccup"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('regOccup').style.border = "2px solid #ff0000";
						   document.getElementById('regOccup').focus();
						return false;
					}else{
						 document.getElementById('regOccup').style.border = "2px solid #ccc";
					}
	
				var x = document.forms["regForms"]["regCountry"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('regCountry').style.border = "2px solid #ff0000";
						    document.getElementById('regCountry').focus();
						return false;
					}else{
						 document.getElementById('regCountry').style.border = "2px solid #ccc";
					}
	
				var x = document.forms["regForms"]["regDelegat"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('regDelegat').style.border = "2px solid #ff0000";
						  document.getElementById('regDelegat').focus();
						return false;
					}else{
						 document.getElementById('regDelegat').style.border = "2px solid #ccc";
					}
	
	
	
	
}




function ghbvalidation(){
	
					var x = document.forms["ghbForm"]["ghbfname"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('ghbfname').style.border = "2px solid #ff0000";
						 document.getElementById('ghbfname').focus();
						return false;
					}else{
						 document.getElementById('ghbfname').style.border = "2px solid #ccc";
					}
	
				
					var x = document.forms["ghbForm"]["ghbemail"].value.trim();
					var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 
					 if(!filter.test(x)){
						document.getElementById('ghbemail').style.border = "2px solid #ff0000";
						document.getElementById('ghbemail').focus();
						return false;
					 
						}else{
							  document.getElementById('ghbemail').style.border = "2px solid #ccc";
						}
						
					var x = document.forms["ghbForm"]["ghbphone"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('ghbphone').style.border = "2px solid #ff0000";
						  document.getElementById('ghbphone').focus();
						return false;
					}else{
						 document.getElementById('ghbphone').style.border = "2px solid #ccc";
					}	
						
					var x = document.forms["ghbForm"]["ghbcountryname"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('ghbcountryname').style.border = "2px solid #ff0000";
						 document.getElementById('ghbcountryname').focus();
						return false;
					}else{
						 document.getElementById('ghbcountryname').style.border = "2px solid #ccc";
					}		
						
					var x = document.forms["ghbForm"]["datepicker-range-start2"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('datepicker-range-start2').style.border = "2px solid #ff0000";
						 document.getElementById('datepicker-range-start2').focus();
						return false;
					}else{
						 document.getElementById('datepicker-range-start2').style.border = "2px solid #ccc";
					}	
					
					var x = document.forms["ghbForm"]["datepicker-range-end2"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('datepicker-range-end2').style.border = "2px solid #ff0000";
						 document.getElementById('datepicker-range-end2').focus();
						return false;
					}else{
						 document.getElementById('datepicker-range-end2').style.border = "2px solid #ccc";
					}	


                    var x = document.forms["ghbForm"]["ghbroomno"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('ghbroomno').style.border = "2px solid #ff0000";
						  document.getElementById('ghbroomno').focus();
						return false;
					}else{
						 document.getElementById('ghbroomno').style.border = "2px solid #ccc";
					}	
					
					var x = document.forms["ghbForm"]["ghbhotelcat"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('ghbhotelcat').style.border = "2px solid #ff0000";
						  document.getElementById('ghbhotelcat').focus();
						return false;
					}else{
						 document.getElementById('ghbhotelcat').style.border = "2px solid #ccc";
					}	
}



function housingRequestValidation(){
	
					var x = document.forms["hrForms"]["hrFname"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('hrFname').style.border = "2px solid #ff0000";
						 document.getElementById('hrFname').focus();
						return false;
					}else{
						 document.getElementById('hrFname').style.border = "2px solid #ccc";
					}
	
	
				var x = document.forms["hrForms"]["hrLname"].value;
					if (x == null || x == "") 
					{	
						document.getElementById('hrLname').style.border = "2px solid #ff0000";
						document.getElementById('hrFname').focus();
						return false;
					}else{
						 document.getElementById('hrLname').style.border = "2px solid #ccc";
					}
	
	
					var x = document.forms["hrForms"]["hrEmail"].value.trim();
					var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 
					 if(!filter.test(x)){
						document.getElementById('hrEmail').style.border = "2px solid #ff0000";
						document.getElementById('hrEmail').focus();
						return false;
					 
						}else{
							  document.getElementById('hrEmail').style.border = "2px solid #ccc";
						}
				
				var x = document.forms["hrForms"]["hrPhone"].value;
					if (x == null || x == "") 
					{	
						document.getElementById('hrPhone').style.border = "2px solid #ff0000";
						document.getElementById('hrPhone').focus();
						return false;
					}else{
						 document.getElementById('hrPhone').style.border = "2px solid #ccc";
					}
				
				var x = document.forms["hrForms"]["datepicker-range-start"].value;
					if (x == null || x == "") 
					{	
						document.getElementById('datepicker-range-start').style.border = "2px solid #ff0000";
						document.getElementById('datepicker-range-start').focus();
						return false;
					}else{
						 document.getElementById('datepicker-range-start').style.border = "2px solid #ccc";
					}
					
				var x = document.forms["hrForms"]["datepicker-range-end"].value;
					if (x == null || x == "") 
					{	
						document.getElementById('datepicker-range-end').style.border = "2px solid #ff0000";
						document.getElementById('datepicker-range-end').focus();
						return false;
					}else{
						 document.getElementById('datepicker-range-end').style.border = "2px solid #ccc";
					}

					
                    var x = document.forms["hrForms"]["hrCategory"].value;
					if (x == null || x == "") 
					{	
						document.getElementById('hrCategory').style.border = "2px solid #ff0000";
						document.getElementById('hrCategory').focus();
						return false;
					}else{
						 document.getElementById('hrCategory').style.border = "2px solid #ccc";
					}
	
	
				var x = document.forms["hrForms"]["hrRooms"].value;
					if (x == null || x == "") 
					{	
						document.getElementById('hrRooms').style.border = "2px solid #ff0000";
						document.getElementById('hrRooms').focus();
						return false;
					}else{
						 document.getElementById('hrRooms').style.border = "2px solid #ccc";
					}
}


function groupRegisValidation(){
	
					var x = document.forms["grForms"]["grFname"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('grFname').style.border = "2px solid #ff0000";
						  document.getElementById('grFname').focus();
						return false;
					}else{
						 document.getElementById('grFname').style.border = "2px solid #ccc";
					}
	
	
					var x = document.forms["grForms"]["grEmail"].value;
					var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				 
					 if(!filter.test(x)){
						document.getElementById('grEmail').style.border = "2px solid #ff0000";
						document.getElementById('grEmail').focus();
						return false;
					 
						}else{
							  document.getElementById('grEmail').style.border = "2px solid #ccc";
						}
			
					var x = document.forms["grForms"]["grPhone"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('grPhone').style.border = "2px solid #ff0000";
						 document.getElementById('grPhone').focus();
						return false;
					}else{
						 document.getElementById('grPhone').style.border = "2px solid #ccc";
					}
					
					var x = document.forms["grForms"]["grOccup"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('grOccup').style.border = "2px solid #ff0000";
						  document.getElementById('grOccup').focus();
						return false;
					}else{
						 document.getElementById('grOccup').style.border = "2px solid #ccc";
					}
				
					var x = document.forms["grForms"]["grAddress"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('grAddress').style.border = "2px solid #ff0000";
						  document.getElementById('grAddress').focus();
						return false;
					}else{
						 document.getElementById('grAddress').style.border = "2px solid #ccc";
					}
				
					var x = document.forms["grForms"]["grCountry"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('grCountry').style.border = "2px solid #ff0000";
						 document.getElementById('grCountry').focus();
						return false;
					}else{
						 document.getElementById('grCountry').style.border = "2px solid #ccc";
					}
					
				var x = document.forms["grForms"]["grDelegates"].value;
					if (x == null || x == "") 
					{	
						 document.getElementById('grDelegates').style.border = "2px solid #ff0000";
						  document.getElementById('grDelegates').focus();
						return false;
					}else{
						 document.getElementById('grDelegates').style.border = "2px solid #ccc";
					}	
						
		
			
}


