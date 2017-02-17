var arr = [];
var symbl = ['*', '/', '-', '+'];
var len;

var n;
var m;
var str;
var str1;
var prev;
var expr;

myForm.txtAns.value=0;

function clearData() {
	
	myForm.txtAns.value=0;	
	
	while(arr.length > 0){
		
		arr.pop();
	}
	
}



function dispVal(num) {
	
	n = Number(num);
	
	str = n.toString();

	
	
	len = arr.length;

	if(len == 0)
	{
	  
	  arr.push(num);
	
	}
	else if(str == "NaN")
	{	
	  arr.push(num);

	}
	else
	{
	  prev = arr.pop();
	  m = Number(prev);
	  str1 = m.toString();
	  if(str1 == "NaN")
	  {
	    arr.push(prev);
	    arr.push(num);

	  }
	  else
	  {
	    arr.push(str1.concat(str));

	  }
	}


	if(myForm.txtAns.value == 0){
		myForm.txtAns.value = num;
	}
	else{
		myForm.txtAns.value+=num;
		expr = myForm.txtAns.value;
	}

}






function dispAns() {

	
	var dotOpr = arr.includes("."); 

 	
	if(dotOpr){
		do{
		   var dotIndex		= arr.indexOf(".");

		   var operand1		= arr[dotIndex-1].toString();

		   var operand2 	= arr[dotIndex+1].toString();

		       operand		= operand1 . concat(".");

		       operand		= operand . concat(operand2);

		       arr.splice(dotIndex-1, 3, operand);

		}while(arr.includes("."))

}

	

	for(var i = 0; i < symbl.length; i++){
		var opr = arr.includes(symbl[i]);
		

		if (opr) {
			do{

				var oprIndex	=	arr.indexOf(symbl[i]);

				var before		=	oprIndex - 1;

				var after		=	oprIndex + 1;

				//var oprAns		=	Number(arr[before])  symbl[i]  Number(arr[after]);
				var oprAns;
				
				switch (symbl[i]) {
				    case "*":
				        oprAns = Number(arr[before])  *  Number(arr[after]);
				       
				        break;

				    case "/":
				        oprAns = Number(arr[before])  /  Number(arr[after]);
				        break;

				    case "-":
				        oprAns = Number(arr[before])  -  Number(arr[after]);
				        break;

				    case "+":
				        oprAns = Number(arr[before])  +  Number(arr[after]);
		
				}


				arr.splice(before, 3, oprAns);

			}while(arr.includes(symbl[i]));
		}
	}

	var ans = arr.toString();

	myForm.txtAns.value = expr +" = " + ans;



}



