let theDom =  TaxiQueue();
const joinQueueElem = document.querySelector(".join_queue")
const leaveQueueElem = document.querySelector(".leave_queue")
const counterAElem = document.querySelector(".passenger_queue_count")

const joinTaxiQueueElem = document.querySelector(".join_taxi_queue")
const counterTaxiAElem = document.querySelector(".taxi_queue_count")
const departTaxiAElem = document.querySelector(".depart")

let peopleLength = 0;

joinQueueElem.addEventListener("click", function(){
    counterAElem.innerHTML = theDom.joinQueue();
   
})

leaveQueueElem.addEventListener("click", function(){
   
  counterAElem.innerHTML = theDom.leaveQueue();
})

joinTaxiQueueElem.addEventListener("click", function(){

   counterTaxiAElem.innerHTML = theDom.joinTaxiQueue();

})

departTaxiAElem.addEventListener("click", ()=>{
  counterTaxiAElem.innerHTML = theDom.taxiDepart();
  counterAElem.innerHTML= theDom.queueLength();
})



