function TaxiQueue() {
let peopleJoining = 0;
let peopleLeaving = 0;
let TaxiLength =0;
let taxiJoining = 0;
let leavingTaxi =0;
let departTaxi=0;

	function joinQueue() {
     peopleJoining ++;
	 return peopleJoining ;

}
	function leaveQueue() {
		
	if(peopleJoining !== 0){
		peopleJoining--;
	}
		return peopleJoining ;
	   
	}


	function joinTaxiQueue() {
		taxiJoining ++;
		return taxiJoining;
	
	}



	function taxiDepart(){
		let taxi = 1
		if(taxiJoining !== 0){
		 taxiJoining -= taxi;
		 departTaxi= taxiJoining;
		}
		
   return departTaxi;
	}


	function queueLength() {
		let fullTaxi = 12;
	  
		if(peopleJoining !==0){
	
		peopleJoining -= fullTaxi
		peopleLeaving = peopleJoining;
		}
	
	
		
 return peopleLeaving;
}


	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		// leaveTaxiQueue,
		queueLength,
		// taxiQueueLength,
		taxiDepart,
		taxiJoining,
		peopleJoining 

	}
}