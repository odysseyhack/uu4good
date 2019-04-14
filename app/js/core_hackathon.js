

// global variables
global_data = null


// Function definitions
function color_sampler(score){

	/*
	code rood: #f44242
	code geel: #ffaa00
	code groen: #00cc0a
	*/

	if(score < 15){
		return("#00cc0a")  // GREEN
	} else if (score >= 15 && score < 35){
		return("#FFAA00") // YELLOW
	} else {
		return("#F44242") // RED
	}

}

function chart_builder(level){

	$("#chart").html("");

		var results = [];

		var list_scores = [];
		var list_labels = [];
		var list_colors = [];

		//  Run algorithms
		for (var algo in algorithms){ 

			if (level == algorithms[algo].breach_level){

				result = algorithms[algo].method(global_data.data);
				console.log(result.score)
				
				list_scores.push(result.score)
				list_labels.push(algorithms[algo].organisation + " - " + algorithms[algo].name)
				list_colors.push(color_sampler(result.score))
			}
		}

		console.log(results);
		console.log(list_colors)

		// build chart

		var options = {
			chart: {
				height: 500,
				type: 'bar',
			},
			plotOptions: {
				bar: {
					horizontal: true,
					distributed: true,
				}
			},
			colors: list_colors,
			dataLabels: {
				enabled: true,
				textAnchor: 'start',
				style: {colors: ["#000"]}
			},
			series: [{
				name: "Privacy impact",
				data: list_scores
			}],
			xaxis: {
				categories: list_labels,
			},
			tooltip: {
			   custom: function({series, seriesIndex, dataPointIndex, w}) {

			   	// debug the series object
			   	console.log(series[seriesIndex])

			   	score = series[seriesIndex][dataPointIndex];

			   	// toggle the LED
				if(score < 15){
					toggle("RED", "ON");
				} else if (score >= 15 && score < 35){
					toggle("YELLOW", "ON");
				} else {
					toggle("GREEN", "ON");
				}			   	

			     return '<div class="arrow_box">' +
			       '<span>' + series[seriesIndex][dataPointIndex] + '</span>' +
			       '<p>Description of algorithm</p>' + 
			       '<p>Sub Description of algorithm</p>' + 
			       '</div>'
			   }
			}
		}

		var chart = new ApexCharts(
			document.querySelector("#chart"),
			options
			);


		chart.render();
}


// function to toggle the LED lights
function toggle(led, state){

	// led options: RED, GREEN, YELLOW
	// state options: ON, OFF

	// http://192.168.178.18/LED=RED&STATE=ON
	// http://192.168.178.18/LED=YELLOW&STATE=ON
	// http://192.168.178.18/LED=GREEN&STATE=ON

	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
			if (xhttp.status == 200) {
				document.getElementById("myDiv").innerHTML = xhttp.responseText;
			}
			else if (xhttp.status == 400) {
				//  alert('There was an error 400');
			}
			else {
	  			// alert('something else other than 200 was returned');
			}
		}
	};

	xhttp.open("GET", "http://192.168.178.18/LED=" + led + "&STATE=" + state, true);
	xhttp.send();
}

// document listener
$(document).ready(function() {


    // if(score < 20){
    // 	toggle("RED", "ON");
    // 	setTimeout(function(){ toggle("RED", "OFF")}, 1000);
    // }


	// Next code will style the input file field to verify local dataset
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
		{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = "<i class=\"fas fa-database\"></i> " + fileName;
			else
				label.innerHTML = labelVal;
		});
	});

	// Next code will change the loading spinner text
	loading_texts = ["Indexing algorithms on blockchain", "Applying algorithms to datasets", "Finalyzing results"];
	text_index = 0;

   function loadResults(){
	   	$('#container-step4-loadingscreen').fadeOut("slow", function(){
	   		$('#chart').fadeIn("slow");
	   	});
   }

	function timedText() {
		setTimeout(loadResults, 4000);
		setTimeout(function(){ 
			$("#dataset-step4header").fadeOut("slow",function(){
				//als fade klaar is
				$("#dataset-step4header").text(loading_texts[text_index]).fadeIn("slow");
				text_index = (text_index + 1 ) % (loading_texts.length);
				timedText();
			});
		}, 1000);
	};



	// Next code will scroll to next container to continue the workflow
	$('#container-step1 button').click(function() {
		$('#container-step2').css('display', 'block');
		$('.dataset-data').css('display', 'flex');
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#container-step2").offset().top
		}, 1000);
	});

	$('#container-step2 button').click(function() {
		$('#container-step3').css('display', 'block');
		$('.dataset-levels').css('display', 'flex');
		$('.dataset-privacy-breach-levels').css('display', 'block');
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#container-step3").offset().top
		}, 1000);
	});

	$('#container-step3 .card-body a').click(function() {
		$('#container-step4').css('display', 'block');
		$([document.documentElement, document.body]).animate({
			scrollTop: $("#container-step4").offset().top
		}, 1000);
	});


	// Next code will display the next container when clicked



	// Next code will show the different privacy breach levels and enable the timedText function
	$('#dataset-breachlevel1').click(function() {
		$('#dataset-breachlevel1-alg').css('display', 'block');
		$('#container-step4-loadingscreen').css('display', 'block');
		timedText();

		// chart builder level 1
		chart_builder(1)
	});

	$('#dataset-breachlevel2').click(function() {
		$('#dataset-breachlevel2-alg').css('display', 'block');
		$('#container-step4-loadingscreen').css('display', 'block');
		timedText();

		// chart builder level 2
		chart_builder(2)
	});

	$('#dataset-breachlevel3').click(function() {
		$('#dataset-breachlevel3-alg').css('display', 'block');
		$('#container-step4-loadingscreen').css('display', 'block');
		timedText();

		// chart builder level 3
		chart_builder(3)
	});




	////////////////////////////////////////////////
	//////////////////////////////////////////////// STIJN
    // UPLOAD CLASS DEFINITION
    // ======================

    var dropZone = document.getElementById('drop-zone');
    var uploadForm = document.getElementById('js-upload-form');

    var processFileLocally = function(files) {

	 var reader = new FileReader();
	// Read the file as text
	
	reader.onload = function() {
		var results = []
		
		var filedata = reader.result;
		var data = Papa.parse(filedata);
        console.log(data.data);

        // make data global 
        global_data = data

	}
  
	reader.readAsText(files[0]);
    }

    uploadForm.addEventListener('submit', function(e) {
        var uploadFiles = document.getElementById('js-upload-files').files;
        e.preventDefault()

        processFileLocally(uploadFiles)
    })

    dropZone.ondrop = function(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        processFileLocally(e.dataTransfer.files)
    }

    dropZone.ondragover = function() {
        this.className = 'upload-drop-zone drop';
        return false;
    }

    dropZone.ondragleave = function() {
        this.className = 'upload-drop-zone';
        return false;
    }

});

