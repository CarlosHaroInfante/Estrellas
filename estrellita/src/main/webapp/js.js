/**
 * 
 */

 function estrella(){
	 
	 var num = prompt("Dame un número", 1);
	 
	 var estrellita2 = "";
	 
	
	 for (var i = 1; i < num; i++){
		 for(var j = 1; j <= i; j++){
		/*estrellita2 = estrellita2 + "*";
		estrellita =  estrellita +  estrellita2 +"<br>";*/
		var estrellita = "";
		estrellita += "* ";
		
		}
		estrellita += "\n";
		
		
	 }
	 alert(estrellita);
	 
	 /*document.getElementById("dibujar").innerHTML = estrellita;*/
	 
	 
 }