var operand1, operand2, operator, rezultat, memorie, rezultatAfisat;


function virgulaPrezenta() {
  indexof =  document.getElementById("ecran").value.indexOf(".");

  if ( indexof == -1)
   return false;
  else
   return true;

 }


function comanda(parametru) {

 switch(parametru){

  case 'C' : 
    operand1 = operand2 = rezultat = memorie = 0;
    document.getElementById("ecran").value=rezultat; // adica 0
	rezultatAfisat = false;
    break;
  case 1 :
  case 2 :
  case 3 :
  case 4 :
  case 5 :
  case 6 :
  case 7 :
  case 8 :
  case 9 :
  case 0 :
  
   
   if ((document.getElementById("ecran").value == '0') || (rezultatAfisat))
    document.getElementById("ecran").value = parametru
   else
      document.getElementById("ecran").value=document.getElementById("ecran").value + parametru;
    break; 

  case 'MS' : 
   memorie = document.getElementById("ecran").value;
   document.getElementById("memorie").innerHTML = memorie;
   rezultatAfisat = true;
   break;


 case 'MC' : 
   memorie = 0;
   document.getElementById("memorie").innerHTML = memorie;
   break;

 case 'MR' : 
   memorie = document.getElementById("memorie").innerHTML;
   document.getElementById("ecran").value = memorie;
   rezultatAfisat = true;
   break;
 
 case 'BS' : 
    if (document.getElementById("ecran").value != '0')
     {
      if (document.getElementById("ecran").value.length > 1)
       document.getElementById("ecran").value = document.getElementById("ecran").value.slice(0, document.getElementById("ecran").value.length-1);
       else
       document.getElementById("ecran").value = '0';
      };
   break;

 case '.' :
     if(!virgulaPrezenta())
        document.getElementById("ecran").value=document.getElementById("ecran").value + parametru; // se adauga virgula
  break;


   case 'radical':
     {
      
      argument = document.getElementById("ecran").value;
      rezultat = Math.sqrt(argument);
      document.getElementById("ecran").value = rezultat.toString().substring(0,10);
	  rezultatAfisat = true;
      };
  break;


  case 'PI':
     {
      document.getElementById("ecran").value="3.141592";
      virgulaPrezenta = 1;
	  rezultatAfisat = true;
      };
  break;

  case 'sin':
     {
      
      argument = document.getElementById("ecran").value;
      rezultat = Math.sin(argument);
      document.getElementById("ecran").value = rezultat.toString().substring(0,10);
	  rezultatAfisat = true;
      };
  break;

 case 'cos':
     {
      
      argument = document.getElementById("ecran").value;
      rezultat = Math.cos(argument);
      document.getElementById("ecran").value = rezultat.toString().substring(0,10);
	  rezultatAfisat = true;
      };
  break;

  case 'tg':
     {
      
      argument = document.getElementById("ecran").value;
      rezultat = Math.tan(argument);
      document.getElementById("ecran").value = rezultat.toString().substring(0,10);
	  rezultatAfisat = true;
      };
  break;

 case 'ex':
     {
      
      argument = document.getElementById("ecran").value;
      rezultat = Math.exp(argument);
      document.getElementById("ecran").value = rezultat.toString().substring(0,10);
	  rezultatAfisat = true;
      };
  break;


  case 'sup2':
     {
      
      argument = document.getElementById("ecran").value;
      rezultat = argument * argument;
      document.getElementById("ecran").value = rezultat.toString().substring(0,10);
	  rezultatAfisat = true;
      };
  break;


  case 'sup3':
     {
      
      argument = document.getElementById("ecran").value;
      rezultat = argument * argument * argument;
      document.getElementById("ecran").value = rezultat.toString().substring(0,10);
	  rezultatAfisat = true;
      };
  break;
  
  case '+':
  case '/':
  case '*':
     {
      operator = parametru;
      operand1 = document.getElementById("ecran").value;
      rezultatAfisat = true;
      };
  break;
  
  case '-':
     {
      if (document.getElementById("ecran").value == '0')
	    document.getElementById("ecran").value = '-';
	  else	
       {
	    operand1 = document.getElementById("ecran").value;
		operator = parametru;
        rezultatAfisat = true;
		};
      };
  break;
  
  
   case '=':
     {
      
      operand2= document.getElementById("ecran").value;
	  var operatie = operand1+operator+operand2;
	
      rezultat = eval(operand1+operator+operand2);
	  
      document.getElementById("ecran").value = rezultat.toString().substring(0,10);
	  operand1 = operand2 = rezultat = 0;
	  operator="";
	  rezultatAfisat = true;
      };
  break;
  
  

  default :alert('functie neimplementata');

 };

}