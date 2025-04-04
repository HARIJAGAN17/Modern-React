import data from "./data.js";

const students = JSON.parse(data);
console.log(students);

interface Student {
  id: string;
  dateAdmission: string;
  firstName: string;
  lastName: string;
  birthYear: string;
  focusArea?: string | string[];
  dateRegistrationSuspended?: string;
}

function addRow(table: HTMLTableElement, student: Student) {
  let tr = table.querySelector("tbody").insertRow();
  const name = tr.insertCell();
  name.appendChild(
    document.createTextNode(`${student.firstName} ${student.lastName}`)
  );

  const age = tr.insertCell();
  age.appendChild(document.createTextNode("33"));

  const majors = tr.insertCell();
  majors.appendChild(
    document.createTextNode("Space Engineering, Civil Engineering")
  );

  const status = tr.insertCell();
  status.appendChild(document.createTextNode("Active"));
}

// select HTML table
function selectTable() {
  return document.querySelector("#students-table") as HTMLTableElement;
}

// add a row
addRow(selectTable(), students[0]);
