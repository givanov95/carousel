

	var elements = document.querySelectorAll(".tabs-number div");
	var infoContent = document.getElementsByClassName("infoContent");
	var innerInfo = document.getElementsByClassName("inner-info");
	var name= 0;
	var numberChildren = 0;
	var elementsInCategory = 0;


	document.addEventListener('DOMContentLoaded', function(event){
		clean(document.body);





		for (var i = 1; i < infoContent.length; i++) {
			infoContent[i].style.display="none";
		}



		for (var i = 0; i < elements.length; i++) {
			elements[i].addEventListener("click", function () {
				var name = this.id;
				
				var dataId=0;

				for (var q = 0; q < elements.length; q++) {
					elements[q].style.color="rgba(56,60,80,.8)";
					elements[q].classList.remove("after");
				}

				
				this.style.color="#4a0533";
				this.classList.add("after");
				


				for (var k = 0; k < innerInfo.length; k++) {
					if ( innerInfo[k].classList.contains("active")) {
						innerInfo[k].classList.remove("active");
					}
				}

				for (var j = 0; j < infoContent.length; j++) {


					
					if (infoContent[j].classList.contains(name)) {
						infoContent[j].style.display="block";

						numberChildren = infoContent[j].childNodes.length;

						
						console.log(infoContent[j]);
						console.log(numberChildren);
						
						
						elementsInCategory = numberChildren;
						


						infoContent[j].firstChild.classList.add("active");

						infoContent[j].firstChild.style.display="block";

						
						
					}
					else {
						infoContent[j].style.display="none";
						infoContent[j].firstChild.classList.remove("active");
						
					}

				}


			});


		}

	});
	


	function changer(argument) { 
		

		var dataId=0;
		var parent ;


		if(elementsInCategory==0){

			

			elementsInCategory = infoContent[0].childNodes.length;
		}
		


		for (var i = 0; i < infoContent.length; i++) {
			if(infoContent[i].style.display=="block"){
				
				parent = infoContent[i];

			}
		}



		for (var i = 0; i < innerInfo.length; i++) {


			if (innerInfo[i].classList.contains("active")){
				
				dataId = parseInt(innerInfo[i].getAttribute("data-id"));

				
				
			}
			
			innerInfo[i].classList.remove("active");

			
		}

		var children  = parent.childNodes;
		

		for (var l = 0; l < children.length-2; l++) {
			var child = children[l].nextSibling;
			
			if(l%2==0){

				if (child.classList.contains("active")) {
					child.classList.add("parent");
				}
				
				child.classList.add("parent")
				
				
			}

			
		}

		

// console.log(dataId+argument);
console.log(elementsInCategory);


for (var j = 0; j < innerInfo.length; j++) {

	var img = innerInfo[j].getAttribute("data-img");
	var idNum = innerInfo[j].getAttribute("data-id");
	
	if(dataId+argument==elementsInCategory){
		dataId = -1;
	}


	if(dataId+argument==-1) {
		dataId=elementsInCategory;
		
	}
	if (idNum==dataId+argument) {
		innerInfo[j].classList.add("active");

	}

}

}




function clean(node)
{
	for(var n = 0; n < node.childNodes.length; n ++)
	{
		var child = node.childNodes[n];
		if
			(
				child.nodeType === 8
				||
				(child.nodeType === 3 && !/\S/.test(child.nodeValue))
				)
		{
			node.removeChild(child);
			n --;
		}
		else if(child.nodeType === 1)
		{
			clean(child);
		}
	}
}


