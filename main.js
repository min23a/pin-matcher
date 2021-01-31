//pin generator
function pinGenerator() {
    let pin = Math.random() * 10000 + '';
    let pinInput = pin.split('.')[0];
    if (pinInput.length === 4) {
        let input = document.querySelector("#pin_output");
        input.setAttribute("value", pinInput);
    }
    else{
        return pinGenerator;
    }
}
//gets user input
function userInput(input){
    let previousValue = document.querySelector("#user_input").value;
    let newValue = previousValue + input;
    document.querySelector("#user_input").setAttribute("value", newValue);
}
//delete the input
function c(){
    document.querySelector("#user_input").setAttribute("value", "");
}
//validates the pin
function validation(){
    let pin = document.querySelector("#pin_output").value;
    let userPin = document.querySelector("#user_input").value;
    if ( pin === userPin){
        document.querySelector("#success").style.opacity = 1;
    }
    else if(pin != userPin){
        document.querySelector("#fail").style.opacity = 1;
    }
}