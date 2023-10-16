let calVal = document.querySelectorAll(".calValue");
let input = document.getElementById("input");
let res =document.getElementById("calculate");
let deleteVal = document.getElementById("deleteItem");
let clearItem = document.getElementById("clearItem");


// Add input value
calVal.forEach(function(val){
    val.addEventListener("click",()=>{
        input.value += val.value;
    })
})

// Evaluate
res.addEventListener("click",()=>{
        try {
          inputres = eval(input.value).toString();
          input.value = inputres;
            console.log(inputres)
        } catch (error) {
          input.value = 'Error';
        }
      
})

// Delete one by one
deleteVal.addEventListener("click",()=>{
    let inpVal = input.value;
    inpVal = inpVal.slice(0,-1);
    input.value = inpVal;
})

// Clear all the values
clearItem.addEventListener("click",()=>{
    input.value = ""; 
})