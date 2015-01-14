var pArray = [];
var correct = [];
var dpWord
function kor(){

	var dPrName = document.getElementById("inprename").value;
	if( dPrName != ""){
		var dPName = dPrName;
		document.getElementById("prename").style.color = "black";
		
		correct.push("works");
	}
	else
	{
	    document.getElementById("status").classList.remove("hidden");
		document.getElementById("prename").style.color = "red";
	}
	var dPaName = document.getElementById("inpastname").value;
	if( dPaName != ""){
		var dAName = dPaName;
		document.getElementById("aftername").style.color = "black";
		
		correct.push("works");
	}
	else
	{
	    document.getElementById("status").classList.remove("hidden");
		document.getElementById("aftername").style.color = "red";
	}
	var dePost = document.getElementById("inepost").value;
	
	var re = /\S+@\S+\.\S+/;
	    if(re.test(dePost) == true){
	    	correct.push("works");
	    	
	    	var dPost = dePost;
	    	document.getElementById("epost").style.color = "black";
	    }
	    else
	    {
	    	document.getElementById("status").classList.remove("hidden");
			document.getElementById("epost").style.color = "red";
	    }
	var dPnumb = document.getElementById("inpnumb").value;

	var pn = new personnummer(dPnumb);
		if(pn.valid){
			correct.push("works");
	    	
	    	var dnumb = dPnumb;
	    	document.getElementById("persn").style.color = "black";
			}
			else
			{
				document.getElementById("status").classList.remove("hidden");
			document.getElementById("persn").style.color = "red";
			}
	var dUsName = document.getElementById("inusname").value;
	
	if(dUsName.length >= 4){
		var dUName = dUsName;
		document.getElementById("unsername").style.color = "black";
		correct.push("works");
		
	}
	else
	{
		document.getElementById("status").classList.remove("hidden");
		document.getElementById("unsername").style.color = "red";

	}
	var dWord1 = document.getElementById("inpass1").value;
	if(dWord1.length >= 6){
		var dpWord1 = dWord1;
		
		correct.push("works");
		var pass = document.querySelectorAll(".pass")
		pass[1].style.color = "black";
		pass[0].style.color = "black";
		
	}
	else
	{
		document.getElementById("status").classList.remove("hidden");
		var pass = document.querySelectorAll(".pass")
		pass[1].style.color = "red";
		pass[0].style.color = "red";
	}
	var dpWord2 = document.getElementById("inpass2").value;
	if(dpWord1 === dpWord2){
		dpWord = dpWord1
		
		correct.push("works");
		var pass = document.querySelectorAll(".pass")
		pass[1].style.color = "black";
		pass[0].style.color = "black";

	}
	else
	{
		document.getElementById("status").classList.remove("hidden");
		var pass = document.querySelectorAll(".pass")
		pass[1].style.color = "red";
		pass[0].style.color = "red";
	}


	var reg1 = new person( dPName, dAName, dPost, dnumb, dUName, dpWord);
	// var reg2 = new person("preName", "pastName", "ePost", "pNumb", "uName", "pWord");
	// console.log(reg1);
	// var hidd = document.querySelectorAll(".hidden")
	console.log(correct);
	if(correct.length == 7){
		pArray.push(reg1);
		
		var inputs = document.querySelectorAll("input");
		
		for (var i = 0; i < inputs.length; i++) {
			inputs[i].value = "";
		};
		correct.length = 0;
	 }
	 else{
	 	correct.length = 0;
	 }
	
	// pArray.push(reg2);
	console.log(pArray);
};

var but = document.getElementById("knapp");
but.addEventListener("click",function(){
	kor();
});

