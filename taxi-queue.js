function TaxiQueue() {
let peopleJoining = 0;
let peopleLength =0;
let taxiJoining = 0;
let leavingTaxi =0;
	function joinQueue() {
		  peopleJoining++;    
		  
}


	
 
	function leaveQueue() {
			   peopleJoining--;
	}
	

	function joinTaxiQueue() {
	
			taxiJoining++;
	
	}
	function leaveTaxiQueue() {
		
		taxiJoining--;
		
		
	}
	

	function queueLength() {
		
		if(!(peopleLength  < 0)){
			
			return peopleJoining
		}
	if(peopleJoining < 0){
		return !peopleLength;
	}
		
	}
	function minQueueLength(){
	  return leaveTaxiQueue() < 0;
	}
	

	function taxiQueueLength() {
       return taxiJoining;
	}

	function taxiDepart(){
      

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		leaveTaxiQueue,
		queueLength,
		taxiQueueLength,
		minQueueLength,
		taxiDepart
	}
}