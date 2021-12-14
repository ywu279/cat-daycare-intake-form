document.addEventListener("submit", function validation(e){

    let valid = true;
    
    // ---------- Cat Name is required --------------
    if(document.querySelector("#catName").value === "") {
        document.querySelector("#catNameError").textContent = "Please fill this field";
        valid = false
    }

    // ---------- At least one box is required to be checked. --------------
    if(document.querySelectorAll("input[name=day]:checked").length === 0) {
        document.querySelector("#checkBoxError").textContent = "At least one checkbox must be selected.";
        valid = false
    }

    // ---------- Time Arrive is required --------------
    if(document.querySelector("#timeArrive").value === "") {
        document.querySelector("#arriveError").textContent = "Please select one option"
        valid = false
    }
   
    // ---------- Time Leave is required --------------
    if(document.querySelector("#timeLeave").value === "") {
        document.querySelector("#leaveError").textContent = "Please select one option"
        valid = false
    }

    // ---------- If Special Diet is checked this field cannot be empty ----------
    if(specialDiet.checked && document.querySelector("#dietDesp").value === ""){
        document.querySelector("#dietDespError").textContent = "Please fill this field"
        valid = false
    }
    
    // ---------- radioBox is required -----------
    if(radioChecked.length === 0){
        document.querySelector("#radioError").textContent = "Please fill this field"
        valid = false
    }
    // ---------- If Territorial is checked this field cannot be empty ----------
    if(territorial.checked && document.querySelector("#territorialDesp").value === ""){
        document.querySelector("#territorialDespError").textContent = "Please fill this field"
        valid = false
    }

    // ---------- Owner Name is required --------------
    if(document.querySelector("#ownerName").value === ""){
        document.querySelector("#ownerNameError").textContent = "Please fill this field"
    }

    // ---------- at least one phone number must be entered --------------
     // ---------- validate phone --------------
    if(document.querySelector("#daytimePhone").value === "" && document.querySelector("#cellPhone").value === "") {
        document.querySelector("#daytimePhoneError").textContent = "Either a cell or daytime phone is required"
        document.querySelector("#cellPhoneError").textContent = "Either a cell or daytime phone is required"
        valid = false
    } else if (document.querySelector("#daytimePhone").value !== "" && !document.querySelector("#daytimePhone").value.match(regPhone)){
        document.querySelector("#daytimePhoneError").textContent = "Invalid phone number"
        valid = false
    } else if (document.querySelector("#cellPhone").value !== "" && !document.querySelector("#cellPhone").value.match(regPhone)){
        document.querySelector("#cellPhoneError").textContent = "Invalid phone number"
        valid = false
    }
    


    // ---------- validate email --------------
    if (!document.querySelector("#email").value.match(regEmail)) {
        document.querySelector("#emailError").textContent = "Please enter a valid email"
        valid = false
    }
    
    // ---------- Emergency Contact Name is required --------------
    if(document.querySelector("#emName").value === ""){
        document.querySelector("#emNameError").textContent = "Please fill this field"
        valid = false
    }

    // ---------- Emergency Contact Phone is required --------------
    if(contactPhone.value === ""){
        document.querySelector("#contactPhoneError").textContent = "Please fill this field"
        valid = false
    } else if (!contactPhone.value.match(regPhone)){
        document.querySelector("#contactPhoneError").textContent = "Invalid phone number"
        valid = false
    }

    //For testing purposes have the action property reload the form using the GET method
    if(valid){
        alert("Thank you!")
    } else {
        e.preventDefault();
    }
})






// ---------- remove catNameError alert --------------
document.querySelector("#catName").addEventListener("input", function() {
    if(document.querySelector("#catName").value !== "") {
        document.querySelector("#catNameError").textContent = "";
    }
})

// ---------- remove checkBoxError alert --------------
document.querySelector(".flexbox").addEventListener("focusout", function() {
    if(document.querySelectorAll("input[name=day]:checked").length !== 0) {
        document.querySelector("#checkBoxError").textContent = "";
    }
})

// ---------- make dietDesp hidden/visible --------------
let specialDiet = document.querySelector("#specialDiet");
let hiddenBox = document.querySelector(".hiddenBox");
hiddenBox.style.visibility = "hidden";
specialDiet.addEventListener("change", function(){
    if(specialDiet.checked){
        hiddenBox.style.visibility = "visible";
    } else {
        hiddenBox.style.visibility = "hidden";
    }
})
// ---------- remove dietDespError alert --------------
document.querySelector("#dietDesp").addEventListener("input", function(){
    if(document.querySelector("#dietDesp").value !== ""){
        document.querySelector("#dietDespError").textContent = ""
    }
})

// ---------- remove radioError alert --------------
let radioChecked = document.querySelectorAll("input[name=temperament]:checked")
document.querySelector(".radioBox").addEventListener("focusout", function(){  
    if(radioChecked.length === 1){
        document.querySelector("#radioError").textContent = ""
    }
})
// ---------- make territorialDesp hidden/visible --------------
let territorial = document.querySelector("#territorial");
let hiddenBox2 = document.querySelector(".hiddenBox2");
hiddenBox2.style.visibility = "hidden";
territorial.addEventListener("change", function(){
    if(territorial.checked){
        hiddenBox2.style.visibility = "visible";
    } else {
        hiddenBox2.style.visibility = "hidden";
    }
})
// ---------- remove territorialDespError alert --------------
document.querySelector("#territorialDesp").addEventListener("input", function(){
    if(document.querySelector("#territorialDesp").value !== ""){
        document.querySelector("#territorialDespError").textContent = ""
    }
})


// ---------- remove ownerNameError alert --------------
document.querySelector("#ownerName").addEventListener("input", function(){
    if(document.querySelector("#ownerName").value !== ""){
        document.querySelector("#ownerNameError").textContent = ""
    }
})

// ---------- remove daytimePhone alert --------------
document.querySelector("#daytimePhone").addEventListener("blur", function(){
    if (document.querySelector("#daytimePhone").value !== "") {
        if(document.querySelector("#daytimePhone").value.match(regPhone)){
            document.querySelector("#daytimePhoneError").textContent = ""
            document.querySelector("#cellPhoneError").textContent = ""
        } else {
            document.querySelector("#daytimePhoneError").textContent = "Invalid phone number"
        }
    }
})
// ---------- remove cellPhoneError alert --------------
document.querySelector("#cellPhone").addEventListener("blur", function(){
    if (document.querySelector("#cellPhone").value !== "") {
        if(document.querySelector("#cellPhone").value.match(regPhone)){
            document.querySelector("#daytimePhoneError").textContent = ""
            document.querySelector("#cellPhoneError").textContent = ""
        } else {
            document.querySelector("#cellPhoneError").textContent = "Invalid phone number"
        }
    }
})

// ---------- remove emailError alert --------------
let regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
document.querySelector("#email").addEventListener("blur", function(){
    if (document.querySelector("#email").value.match(regEmail)) {
        document.querySelector("#emailError").textContent = ""
    }
})

// ---------- remove Emergency Contact Name alert --------------
document.querySelector("#emName").addEventListener("input", function(){
    if(document.querySelector("#emName").value !== ""){
        document.querySelector("#emNameError").textContent = ""
    }
})

// ---------- remove Emergency Contact Phone alert --------------
let regPhone = /^(\+\d{1,2}\s)?[\s-.(]?(\d{3})[\s-.)]?(\d{3})[\s-.]?(\d{4})$/
let contactPhone = document.querySelector("#contactPhone")
contactPhone.addEventListener("blur", function(){
    if(contactPhone.value !== ""){
        if(contactPhone.value.match(regPhone)){
            document.querySelector("#contactPhoneError").textContent = ""
        } else {
            document.querySelector("#contactPhoneError").textContent = "Invalid phone number"
        }    
    }
})




//create an array of half hour increments and display as dropdown list in html
var toInt  = time => ((h,m) => h*2 + m/30)(...time.split(':').map(parseFloat)),
    toTime = int => [Math.floor(int/2), int%2 ? '30' : '00'].join(':'),
    range  = (from, to) => Array(to-from+1).fill().map((_,i) => from + i),
    eachHalfHour = (t1, t2) => range(...[t1, t2].map(toInt)).map(toTime);

    let arrive = eachHalfHour('6:00', '12:00')

    for (let i = 0; i < arrive.length; i++) {
        let option = document.createElement("option")
        option.textContent = arrive[i]
        document.querySelector("#arriveList").append(option)
    }

    let leave = eachHalfHour('10:00', '18:00')

    for (let j = 0; j < leave.length; j++) {
        let option = document.createElement("option")
        option.textContent = leave[j]
        document.querySelector("#leaveList").append(option)
    }

//remove alert
document.querySelector("#timeArrive").addEventListener("blur", function(){
     if(document.querySelector("#timeArrive").value !== "") {
        document.querySelector("#arriveError").textContent = ""
    }
})

document.querySelector("#timeLeave").addEventListener("blur", function(){
    if(document.querySelector("#timeLeave").value !== "") {
        document.querySelector("#leaveError").textContent = ""
    }
})