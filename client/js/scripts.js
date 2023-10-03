function getAlert(){
	var person1 = {name: 'Godwin', age:29, location: 'chisinau', graduated: true};
	var person2 = {name: 'coprol', age: 30, location: 'port harcourt', graduated: false};
	var person3 = {name: 'promise', age: 32, location: 'owerri',graduated:true};

	var people = [person1,person2,person3];
	for(var i = 0; i < people.length; i++){
	    if(people[i].graduated == true){
	    	document.getElementById('demo').innerHTML += people[i].name + ' ' +
	    	"is graduated." + "<br>";
	    }else{
	    	document.getElmentById('demo').innerHTML += people[i].name + ' ' +
	    	"is not graduated" + "<br>";
	    }
	}
}  