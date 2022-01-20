var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readFormData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }
    else{
        updateRecord(formData);
    }
    resetForm();
}

//Retrieve the data
function readFormData(){
    var formData = {};
    formData["cityName"] = document.getElementById("cityName").value;
    formData["countryName"] = document.getElementById("countryName").value;
    formData["timeVisit"] = document.getElementById("timeVisit").value;
    formData["placesVisit"] = document.getElementById("placesVisit").value;
    formData["conversionRate"] = document.getElementById("conversionRate").value;
    return formData;
}

//Insert the data
function insertNewRecord(data){
    var table = document.getElementById("travelList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.cityName;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.countryName;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.timeVisit;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.placesVisit;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = data.conversionRate;
    var cell6 = newRow.insertCell(5);
        cell6.innerHTML = `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
    var cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onTick='onTick(this)'>Have you visited this destination yet?
        <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked>
        <label class="form-check-label" for="flexCheckChecked">
          Not yet!
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked">
        <label class="form-check-label" for="flexCheckDefault">
          Yes, I have!
        </label>
      </div>
        </button>`
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('cityName').value = selectedRow.cells[0].innerHTML;
    document.getElementById('countryName').value = selectedRow.cells[1].innerHTML;
    document.getElementById('timeVisit').value = selectedRow.cells[2].innerHTML;
    document.getElementById('placesVisit').value = selectedRow.cells[3].innerHTML;
    document.getElementById('conversionRate').value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.cityName;
    selectedRow.cells[1].innerHTML = formData.countryName;
    selectedRow.cells[2].innerHTML = formData.timeVisit;
    selectedRow.cells[3].innerHTML = formData.placesVisit;
    selectedRow.cells[4].innerHTML = formData.conversionRate;
}

//Delete the data
function onDelete(td){
    if(confirm('Are you certain you want to delete this entry?')){
        row = td.parentElement.parentElement;
        document.getElementById('travelList').deleteRow(row.rowIndex);
    }
    resetForm();
}

//Reset the data
function resetForm(){
    document.getElementById('cityName').value = '';
    document.getElementById('countryName').value = '';
    document.getElementById('timeVisit').value = '';
    document.getElementById('placesVisit').value = '';
    document.getElementById('conversionRate').value = '';
}
"use strict"
const baseURL = "http://localhost:8080";
{
console.log(data);
    axios
        .post(`${baseURL}/createDestination/`, data)
        .then(
            console.log("in the create axios function, after post"))
        .catch(err => console.error(err));   
        clear();
        document.querySelector("#createDestination").textContent = "Destination Is Created!";
        
}
