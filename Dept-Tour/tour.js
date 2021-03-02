function checkRadioButton(value) {

    checkRadioValue(value);
    payment(value);
}

function checkRadioValue(value) {
    let radioValue = value;

    var optionsAsString = "";
    for (var i = 22; i < 35; i++) {
        var batchValue = `${i} batch`
        optionsAsString += "<option value='" + batchValue + "'>" + batchValue + "</option>";
    }

    var desArray = ["Professor", "Assistant Professor", "Associate Professor", "Senior Lecturer", "Lecturer"];

    var optionsAsDes = "";
    for (var i = 0; i < desArray.length; i++) {
        optionsAsDes += "<option value='" + desArray[i] + "'>" + desArray[i] + "</option>";
    }
    if (radioValue == "student") {
        const newBox = `
        <div class="row mt-4">
                <div class="col-3">
                    <h5>Batch No</h5>
                </div>
                <select name="batchNo" id="batchNo" class="w-100 h-100">
                    ${optionsAsString}
                    
                </select >
            </div >
        `;
        document.getElementById('newBox').innerHTML = newBox;

    }
    else if (radioValue == "faculty") {
        const newBox = `
        <div class="row mt-4">
                <div class="col-3">
                    <h5>Designation</h5>
                </div>
                <select name="batchNo" id="batchNo" class="w-100 h-100">
                    ${optionsAsDes}
                    
                </select >
            </div >
        `;
        document.getElementById('newBox').innerHTML = newBox;

    }
    else {
        document.getElementById('newBox').innerHTML = "";
    }

}

function payment(value) {

    if (value == "student") {
        const newBox = `
        <h5>Payment amount is: 3500tk</h5>
        `;
        document.getElementById('payment').innerHTML = newBox;
    }
    else if (value == "faculty") {
        const newBox = `
        <h5>Payment amount is: 4000tk</h5>
        `;
        document.getElementById('payment').innerHTML = newBox;
    }
    else {
        const newBox = `
        <h5>Payment amount is: 3200tk</h5>
        `;
        document.getElementById('payment').innerHTML = newBox;
    }
}