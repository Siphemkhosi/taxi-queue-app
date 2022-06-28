let theDom =  TaxiQueue();
const joinQueueElem = document.querySelector(".join_queue")
const leaveQueueElem = document.querySelector(".leave_queue")
const counterAElem = document.querySelector(".passenger_queue_count")

const joinTaxiQueueElem = document.querySelector(".join_taxi_queue")
const counterTaxiAElem = document.querySelector(".taxi_queue_count")
const departTaxiAElem = document.querySelector(".depart")

let peopleLength = 0;
let taxiLength =0;
joinQueueElem.addEventListener("click", function(){
  peopleLength = theDom.joinQueue()
    counterAElem.innerHTML = peopleLength;
   
})

leaveQueueElem.addEventListener("click", function(){
   peopleLength = theDom.leaveQueue()
  counterAElem.innerHTML = peopleLength;
})

joinTaxiQueueElem.addEventListener("click", function(){
 taxiLength = theDom.joinTaxiQueue()
   counterTaxiAElem.innerHTML = taxiLength;

})

departTaxiAElem.addEventListener("click", ()=>{
  
console.log(peopleLength);
 if(peopleLength >= 12 && taxiLength >= 1){
   taxiLength = theDom.taxiDepart();
   peopleLength = theDom.queueLength()
  counterTaxiAElem.innerHTML = taxiLength;
  counterAElem.innerHTML= peopleLength;

 }
})



