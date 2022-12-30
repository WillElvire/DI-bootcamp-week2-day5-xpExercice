function calculateTip(){

    let amountOfBill = prompt("Can you please entrer the amount of bill");
    let tips ;

    switch(amountOfBill) 
    {
      case  amountOfBill < 50 : 
        tips = (amountOfBill * 20)/100;
      break;
      case amountOfBill>50 && amountOfBill < 200  :
        tips = (amountOfBill * 15)/100; 
      break;
      default :
        tips = (amountOfBill * 10)/100; 
      break;
    }
    
    console.log("final Amount : ",tips + Number.parseInt(amountOfBill),"$" );
}

//calculateTip();


function isDivisible(divisor) {

    let cpt = 0;
    let sum = 0;

    for(cpt ; cpt < 500 ; cpt++){
        const result = Math.floor(cpt % divisor);
        if(result == 0) {
            console.log(cpt);
            sum  = sum + cpt;
        }
    }

    console.log(sum);
}

//isDivisible(23);
//isDivisible(3);
//isDivisible(45);


const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList  = ["banana","orange","apple"];


function myBill(){

    let bill = 0;

    for(let item of shoppingList) {
      bill = bill +prices[item];
      stock[item] = stock[item] > 0 ? stock[item] - 1 : 0;
    }

    console.log(stock);
    console.log(bill);
}

myBill();


function changeEnough(itemPrice, amountOfChange) {

  let sumOfAmount = 0;
  for(let amount of amountOfChange) {
    sumOfAmount = sumOfAmount + amount;
  }
  return sumOfAmount >= itemPrice ? true : false;
  
}

console.log(changeEnough(14.11, [2,100,0,0]));


function hotelCost() {

  let daysToStayInHotel        = prompt("How many days will you stay in the hotel");
  const hotelsBookingCondition = daysToStayInHotel == "";
  const nightCost              = 140;

  while(hotelsBookingCondition || typeof daysToStayInHotel != 'number')
  {
    daysToStayInHotel = prompt("How many days will you stay in the hotel");
  }
  return nightCost * daysToStayInHotel;

}

function planeRideCost(){

  let askUserDestination   = prompt("Where do you wan to go");

  while(askUserDestination == '' || typeof askUserDestination != 'string')
  {
    askUserDestination = prompt("Where do you wan to go");
  }

  if(askUserDestination == 'Paris') 
  {
    return 220;
  }else if(askUserDestination == 'London')
  {
    return 183;
  }else
  {
    return 300; 
  }
}


function rentalCarCost(){

  let rentCarDays                    = prompt("How many days will you rent the car");
  let   totalAmountToPay             = 0;
  const dailyAmountToPayByRentingCar = 40;
  

  while(rentCarDays == "" || typeof rentCarDays != 'number')
  {
    rentCarDays = prompt("How many days will you stay in the hotel");
  }

  if(rentCarDays > 10) {
    totalAmountToPay = (rentCarDays * dailyAmountToPayByRentingCar)*5 / 100;
  }else{
    totalAmountToPay = rentCarDays * dailyAmountToPayByRentingCar;
  }

  return totalAmountToPay;
}




function totalVacationCost(){
  return hotelCost() + rentalCarCost() + planeRideCost();
}

//totalVacationCost();