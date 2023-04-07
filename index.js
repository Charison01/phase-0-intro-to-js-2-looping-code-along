// Code your solutions in this file
for (let age = 40;age <40; age++){
    console.log(`I am ${age} years old. Happy birthday to me!`);
    debugger;
}
//
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);
//Using a for loop
function writeCards(array, eventName){
    let newArray = []
    for(let i = 0; i< array.length; i++){
        newArray.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray;
}
console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"))

//Using while
function countDown (integer){
    let counter =integer;
    while (counter >= 0){
        console.log(counter);
        counter--;
        
    }
    
}
countDown(10);