function TaxiQueue() {
let peopleJoining = 0;

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
		peopleJoining -= 12;
		taxiJoining--;
        

}

	function queueLength() {
		
		return  peopleJoining >= 0  ;
		
		 
	}

	function taxiQueueLength() {
return taxiJoining  
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
		taxiDepart
	}
}