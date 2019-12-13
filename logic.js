		//REGISTRATION PAGE FUNCTION

		function valid(fn,sn,ph,em,fm,ml,ot,pw,rpw)
		{
			

			// DECLARING REQUIRED VAIRABLES
			
			var success=0;
			var fname=fn;
			localStorage.setItem("f",fname);
			var sname=sn;
			localStorage.setItem("s",sname);
			var phone=ph;
			var email=em;
			localStorage.setItem("e",email);
			var passw=pw;
			localStorage.setItem("p",passw);
			var rpassw=rpw;
			
			
			// VERIFYING IF GENDER RADIO IS CHECKED
			
			if (fm==true){var gen='Female';success+=1;}
			else if (ml==true){var gen='Male';success+=1;}
			else if (ot==true){var gen='Others';success+=1;}
			else {alert("please select gender");var gen='null';}
			
			//VERIFYING IF FIRSTNAME IS ENTERED CORRECTLY	
			
			if(fname.length<5){alert("first name cant be less than 5 characters");
			document.getElementById("a").innerHTML="<img src='cross.png' height='18px' /> "; }
				else{success+=1;document.getElementById("a").innerHTML="<img src='index.png' height='25px' /> ";}
			
			// VERIFYING IF SURNAME IS ENTERED CORRECTLY
			
			if(sname.length<5){alert("Surname cant be less than 5 characters");
			document.getElementById("b").innerHTML="<img src='cross.png' height='18px' /> "; }
				else{success+=1;document.getElementById("b").innerHTML="<img src='index.png' height='25px' /> ";}
			
			// VERIFYING I PHONE NUMBER IS ENTERED PROPERLY
			
			var res=phone.match(/\d+/g);
			if( phone =='' || phone.match(/\W/) )
			{   document.getElementById("c").innerHTML="<img src='cross.png' height='18px' /> ";
				alert("Invalid Phone number");
			}
			else if(String(phone).length != String(res).length){alert("only numbers please");}
			else{success+=1;document.getElementById("c").innerHTML="<img src='index.png' height='25px' /> ";}
			
			//VERIFYING EMAIL ADDRESS
			
			var chm=[]; //to check mail address
			var ind=0;
			var emcount=0;
            chm[0]='';
            chm[2]='';
            chm[4]='';
            if(em==""){alert("Plese metion your email address");}
			for (var i=0;i<em.length;i++)
			{
				if(em[i]==' '){ alert("email cant have spaces");break;}
				if (em[i].match(/[@]/)){ind+=1;i+=1;chm[1]='@';ind+=1;}
				if(em[i].match(/[.]/)){ind+=1;i+=1;chm[3]='.';ind+=1;}
				chm[ind]+=em[i];
			}
            
			if (typeof(chm[0])=='string' && chm[0]!=""){emcount+=1; }
			if (chm[1]=='@'){emcount+=1; }
			if(typeof(chm[2])=='string' && chm[2]!=""){emcount+=1; }
			if(chm[3]=='.'){emcount+=1; }
			if(typeof(chm[4])=='string' && chm[4]!='undefined'){emcount+=1; }
			
			if (emcount==5){success+=1;document.getElementById("d").innerHTML="<img src='index.png' height='25px' /> ";}
			else
			{
				alert("Invalid email.Format'abc@xyz.com'");
				document.getElementById("d").innerHTML="<img src='cross.png' height='18px' /> ";
			}
			if (5<=passw.length<=10)
			{
				if(passw.match(/\d/) && passw.match(/\W+/g) && passw.match(/[A-Z]/))
				{
					if(passw==rpassw)
					{
						success+=1;
						document.getElementById("e").innerHTML="<img src='index.png' height='25px' /> ";

					}
					else{alert("passwords did not match");
					document.getElementById("e").innerHTML="<img src='cross.png' height='18px' /> ";}
				}
				else{alert("must contain at least 1 digit ,1 Ucase,1 specialchar");
				document.getElementById("e").innerHTML="<img src='cross.png' height='18px' /> ";}
			}
			else{alert("length must be between 5 and 10");
			document.getElementById("e").innerHTML="<img src='cross.png' height='18px' /> ";}
			


			// VERIFYING IF ALL THE FIELDS ARE ENTERED PROPERLY
			// NAVIGATE TO NEXT PAGE IF FIELDS ARE VALID

			if (success==6){window.location.href="login.html"; }
			else{}
		}//PAGE 1 LOGIC CLOS
			
		function log(x,y)
		{
			var checkem=x;
			var checkpw=y;
			var a= localStorage.getItem("e");
			var b= localStorage.getItem("p");
			

			if (checkem == a  && checkpw == b)
			{
				
				window.location.href="wall.html";

			}
			else
			{
				alert("password or email entered is wrong");
			}



		}
			

	
	