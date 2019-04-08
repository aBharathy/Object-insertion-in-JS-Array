let personArr = [];
person = {Name: "john", Age:33};
personArr.push(person);

function add_element_to_array()
  {
	alert("captured " + " " +document.getElementById("name").value);
   let name = document.getElementById("name").value;

    let age = document.getElementById("age").value;  
    var newPerson = {Name : document.getElementById("name").value,
					 Age : age};
					 /*newPerson.Age = 10;
					 newPerson['Name'] = "seetha";*/
					 
    alert(newPerson.Name+" " +newPerson.Age);
	//alert("hai");
	alert("lennght of the array :" + " " +personArr.length);
    personArr.push(newPerson);
	alert("Added to Person Array");
	dispArray();
    
  }
  
  function dispArray()
  {
	  for(let i = 0; i <personArr.length; i++)
		  document.write(personArr[i].Name + "  "+ personArr[i].Age+"\n");
  }
  