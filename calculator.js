let accumulatorString = "";
let total = 0;
//for showing accumulator on the UI
//accumulatorString is our value(1,2,3 etc)
const updateAccumulatorView = (newValue) =>{
    accumulatorString = newValue;
    const accEl = document.querySelector('.calculator__output__accumulator')
    accEl.innerHTML = accumulatorString
}
//total view
const updateTotalView = (newValue) =>{
    total = newValue;
    const totalEl = document.querySelector('.calculator__output__total')
    const isFloating = total % 1 != 0;
    // output hai only 2 decimal points
    totalEl.innerHTML = isFloating ? total.toFixed(2) : total;
    totalEl.removeAttribute('hidden');
}

//for pressing digits
const digitsPressed = (number) => {
    const totalEl = document.querySelector('.calculator__output__total')
    totalEl.setAttribute('hidden',true);
    updateAccumulatorView(accumulatorString + number);


}
//for operators
const operatorPressed = (operator) =>{
    if (accumulatorString.length === 0){
        if(total === 0){
            return;
        }else{
            accumulatorString = `${total}`;
        }
    }
    const lastChar = accumulatorString[accumulatorString.length-1];
    if (isNaN(lastChar)){
        accumulatorString = accumulatorString.substr(0,accumulatorString.length - 1);
    }
    updateAccumulatorView(accumulatorString + operator);
      
}
//for results
const equalPressed = () =>{
    if (accumulatorString.length === 0){
        return;
    }
   try {
    const result = eval(accumulatorString);
    const totalEl = document.querySelector('.calculator__output__total')
    totalEl.removeAttribute('hidden');
    updateTotalView(result);
    updateAccumulatorView   ("");
   } catch (e) {
       alert('The input provided is not valid!')
       clearCalculator()
   }
    
}

const clearCalculator = () => {
    updateAccumulatorView("");
    updateTotalView(0);
}


const main =() => {
    updateTotalView(0) 
};
main();
