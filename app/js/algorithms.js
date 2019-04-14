/* UU4GOOD
List of algorithms (references in the blockchain)
*/
algorithms = [];


///////////////////////////////////////
// LEVEL 1 ALGOS
///////////////////////////////////////

algorithms.push({
	'name': "Simple BSN check",
	'organisation': "Government",
	'breach_level': 1,
	'description': "Checks if BSN appears in the dataset",
	'block_id': '',
	'block_url': '',
	'method': function(data){
		result = {'score' : "" , 'advice' : ""}
		
		result.score = 100;
		result.advice = "No BSN detected in dataset"
		
		for(var field in data[0])
		{
			if(data[0][field].toLowerCase().indexOf("bsn")>-1){
				result.score = 8;
				result.advice = "Privacy Data Breach detected. Remove the columns/fields BSN from the dataset and aggregate the data so that it is not about individual data subjects"
			}
		}
		
		return result;
		console.log(result);
	}
})


var level_1_names = [
'Intuitive Data Ai Privacy',
'Purpose Algorithm',
'Caribbean Data Ai Privacy',
'Immersive Algorithm',
'Efficient Privacy',
'Chief Algorithm',
'Algorithm Genie',
'Outpost Algorithm',
'Mixed Privacy',
'Data Ai Privacy Tec',
'Privacy Product',
'Algorithm Bus',
'Privacy Viewer',
'Majesty Data Ai Privacy',
'Minority Algorithm',
'Jet Data Ai Privacy',
'Carbon Data Ai Privacy',
'Learn Algorithm',
'Jaguar Data Ai Privacy',
'Regal Algorithm'
]

for (alg_1 in level_1_names){

	algorithms.push({
		'name': alg_1,
		'organisation': "Government",
		'breach_level': 1,
		'description': "Deep Neural Network for Probabilistic Privacy Breach Detection.",
		'block_id': '',
		'block_url': '',
		'method': function(data){
			result = {'score' : "" , 'advice' : ""}
			
			result.score = Math.floor(Math.random() * 101);
			result.advice = "Unknown"
			
			return result;
		}
	})
}


///////////////////////////////////////
// LEVEL 2 ALGOS
///////////////////////////////////////


algorithms.push({
	'name': "Nature 2.0",

	'organisation': "CBS",
	'breach_level': 2,
	'description': "AI algorithm",
	'block_id': '',
	'block_url': '',
	'method': function(data){
		result = {'score' : "" , 'advice' : ""}
		
		result.score = 100;
		result.advice = "No connection detected in dataset"
		
		for(var field in data[0])
		{
			if(data[0][field].toLowerCase().indexOf("surname")>-1){
				result.score = 0;
				result.advice = "Privacy Data Breach detected. Remove the columns/fields BSN from the dataset and aggregate the data so that it is not about individual data subjects"
			}
		}
		
		return result;
	}
})



var level_2_names = [
'Algorithm Genie',
'Outpost Algorithm',
'Mixed Privacy',
'Data Ai Privacy Tec',
'Privacy Product',
'Algorithm Bus',
'Privacy Viewer',
'Majesty Data Ai Privacy',
'Minority Algorithm',
'Jet Data Ai Privacy',
'Carbon Data Ai Privacy',
'Learn Algorithm',
'Jaguar Data Ai Privacy',
'Regal Algorithm'
]

for (alg_2 in level_2_names){

	algorithms.push({
		'name': alg_2,
		'organisation': "CBS",
		'breach_level': 2,
		'block_id': '',
		'block_url': '',
		'description': "Deep Neural Network for Probabilistic Privacy Breach Detection.",
		'method': function(data){
			result = {'score' : "" , 'advice' : ""}
			
			result.score = Math.floor(Math.random() * 101);
			result.advice = "Unknown"
			
			return result;
		}
	})
}


///////////////////////////////////////
// LEVEL 3 ALGOS
///////////////////////////////////////


algorithms.push({
	'name': "Z",

	'organisation': "Utrecht University",
	'breach_level': 3,
	'description': "CBS statline privacy check algorithm",
	'block_id': '',
	'block_url': '',
	'method': function(data){
		result = {'score' : "" , 'advice' : ""}
		
		result.score = Math.floor(Math.random() * 40);
		result.advice = "Unknown"
		return result;
	}
})


var level_3_names = [
'Data Ai Privacy Destination',
'Pragma Privacy',
'Profitable Privacy',
'CarpeDiem Algorithm',
'Ignition Algorithm',
'Hatch Algorithm',
'Measure Algorithm',
'Waterfront Algorithm',
'Gold Algorithm',
'Algorithm Codes',
'Algorithm Max',
'Intuitive Data Ai Privacy',
'Purpose Algorithm',
'Caribbean Data Ai Privacy',
'Immersive Algorithm',
'Efficient Privacy'
]

for (alg_3 in level_3_names){

	algorithms.push({
		'name': alg_3,
		'organisation': "Utrecht University",
		'breach_level': 3,
		'block_id': '',
		'block_url': '',
		'description': "Deep Neural Network for Probabilistic Privacy Breach Detection.",
		'method': function(data){
			result = {'score' : "" , 'advice' : ""}
			
			result.score = Math.floor(Math.random() * 101);
			result.advice = "Unknown"
			
			return result;
		}
	})
}
