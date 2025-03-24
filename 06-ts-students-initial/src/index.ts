import data from './data.js' ;

const students = JSON.parse(data);
console.log(students);

function addRow(table) {
    
    let tr = table.querySelector("tbody").insertRow();
    const name = tr.insertCell();
    name.appendChild(document.createTextNode("Elena Garcia"));

    const age = tr.insertCell();
    age.appendChild(document.createTextNode("33"));

    const majors = tr.insertCell();
    majors.appendChild(document.createTextNode("Space Engineering, Civil Engineering"));

    const status = tr.insertCell();
    status.appendChild(document.createTextNode("Active"));
}

// select HTML table
function selectTable() {
    return document.querySelector("#students-table");
}

// add a row
addRow(selectTable());