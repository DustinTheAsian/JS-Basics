    let input = document.getElementById("display");

function clearDisplay(){
    input.value = "";
}

function append(num){
    input.value += num;
}

function appendd(num){
    input.value = input.value.slice(0, -1);
}

function calculate(){
    try{
        input.value = eval(input.value);

        if (input.value == 100){
        }

    } catch (error) {
        input.value = "Error";
    }

}

