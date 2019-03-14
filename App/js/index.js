$(document).on("pagecreate","#pageone", onPageCreated);

//some example data
books = [
  { name: 'Da Vinci Code', 	author: 'Dan Brown',  describe: 'It is fun and confusing'	},
  { name: 'Shutter Island',  author: 'Dennis Lehane', describe: 'Good plot twist'	},
  { name: 'City of Bones',	author: 'Cassandra Clare', describe: 'Cool plot but wow is the series long'}
];


function onPageCreated() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
		  el: '#content',
	
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#template',
	
		  // Here, we're passing in some initial data
		  data: { booklist: books }
        
        $('#submitButton').on("click", function(){
    submitText();
  })
		});
}
    
    function Randomise(){
    var onShake = function(){
    alert("Ow!! Shaking hurts!");
}

var onError = function(){
    alert("Um...it didn't work, sorry.");
}
    
}

function Barcode(){
    alert("This button works so far! That's some progress!!");
}

//I lov it when my comments delete themselves
//Get Randomise working cus it's not
//Attempt the whole adding in barcode plugin    