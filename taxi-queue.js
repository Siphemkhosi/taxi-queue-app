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
		
		peopleJoining --;
		return peopleJoining ;
	   
	}

	function queueLength() {
		let fullTaxi = 12;
		if(taxiJoining--){
				peopleJoining -= fullTaxi
				peopleLeaving= peopleJoining;
		}
		
 return peopleLeaving;
}

	function joinTaxiQueue() {
		taxiJoining ++;
		return taxiJoining;
	
	}



	function taxiDepart(){
		let taxi = 1
		 taxiJoining -= taxi;
		 departTaxi= taxiJoining;
		
   return departTaxi;
	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		// leaveTaxiQueue,
		queueLength,
		// taxiQueueLength,
		taxiDepart
	}
}