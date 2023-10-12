let selectElement = document.getElementById("selectConvert");
let inputElement = document.getElementById("input");

// Event listener for input element to check whether a number is valid or not
inputElement.addEventListener("change", () => {
    result.style.display = "none";

    try {
        if (isNaN(inputElement.value)) {
            throw new Error( "Enter a valid number");
        }
    }
    catch (error) {
        document.getElementById("err").innerHTML = error;
        console.log(error);
        document.getElementById("err").style.display = "block";
    }
});

// listener to keep track of select change
let selectedValue,selectedText;
selectElement.addEventListener("change", function () {
    result.style.display = "none";

    const selectedOption = selectElement.options[selectElement.selectedIndex];
    selectedValue = selectedOption.value;
    selectedText = selectedOption.text;
    // console.log("Selected Value: " + selectedValue);
    // console.log("Selected Text: " + selectedText);
    inputElement.value = "";
    inputElement.placeholder = "Enter the value";
    result.innerHTML ="";
});

// Conversions
function convert() {
    const inputVal = Number(inputElement.value);
    let resultValue;
   
    try {
        if (selectedValue === undefined || selectedValue === null || selectedValue == "select" || selectedValue === ""  ){
            console.log("select conversion")
            throw new Error( "Select the conversion");
        }
        else if (inputVal == "" || inputVal === null || inputVal === undefined){
            throw new Error( "Enter a Number");
        }
        else{
            document.getElementById("err").style.display = "none";

            switch (selectedValue) {
                case "TtoF":  resultValue = (inputVal * (9/5)) + 32;
                                  break;
        
                case "FtoT"    :  resultValue = (inputVal - 32) * (5/9);
                                  break;
        
                 default   :  console.log("Select the proper conversion");
                
            }
                let text = selectedText.split(' ');
                const result = document.getElementById("result");
                result.innerHTML = resultValue.toFixed(3) +" "+ text[2];  
                result.style.display = "block";

        }
    }
    catch (error) {
        document.getElementById("err").innerHTML = error;
        console.log(error);
        document.getElementById("err").style.display = "block";
    }
}
