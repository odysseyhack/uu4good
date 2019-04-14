 /*from data.overheid.nl

Add a div: <div id="odata-list"></div>
*/

// api url
var overheidAPI = "https://data.overheid.nl/data/api/3/action/package_list"

$.ajax({
    url: overheidAPI,

    jsonp: "callback",
    dataType: "jsonp",
 
    success: function( response ) {
        build_odata_list(response.result);
    }, 
    
    fail: function(response) {
    	console.log("FAIL: " + response)
    }
});

function get_package(id, callback) {
	var url_overheid = "https://data.overheid.nl/data/api/3/action/package_show?id=" + id

  $.ajax({
      url: url_overheid,

      jsonp: "callback",
      dataType: "jsonp",

      success: function( response ) {
					callback(response.result)
       	}, 

      fail: function(response) {
        console.log(response)
          callback("Description not available")
      }
  });
}

function build_odata_list(results){

	// append list element
  $("#odata-list").append( "<ul class='list-group'></ul>");
  
  // append items
  $.each( results.slice(0,10), function( index, value ){

    get_package(value, function(data){    
    	// add data
      $("#odata-list ul").append("<li class='list-group-item d-flex justify-content-between align-items-center' id=" + data.name + ">" + data.title + "</li>");
      
    // add click handlers
    $( "#" + data.name ).click(function() {
      alert(data.id + "\n" + data.contact_point_email + "\n" + data.resources[0].description + "\n" + data.license_url); 
    });  
      
  });
})
}
