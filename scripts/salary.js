/* The application should have an input form that collects _employee first name, 
last name, ID number, job title, annual salary_.

A 'Submit' button should collect the form information, 
store the information to calculate monthly costs, append information to the DOM and clear the input fields. 
Using the stored information, calculate monthly costs and append this to the to DOM. 
If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.

Create a delete button that removes an employee from the DOM. 
For Base mode, it does **not** need to remove that Employee's salary from the reported total. */

console.log('Salary.js');

$(document).ready(onReady);

let employeeList = [];

function onReady() {
  console.log('Im Ready');

  // On Add Employee button click
  // Will save employee info to array
  $(document).on('click', '#addEmpBtn', onAddEmp);
}

// Grab input from DOM
// create "employee" object
// Push object into employee array
function onAddEmp(evt) {
  evt.preventDefault();

  console.log('ready to add');

  // Grab input data from the DOM
  let firstName = $('#FNinput').val();
  let lastName = $('#LNinput').val();
  let ID = $('#IDinput').val();
  let title = $('#Tinput').val();
  let annualSalary = $('#ASinput').val();

  // Create an "employee" object
  let employee = {
    firstName: firstName,
    lastName: lastName,
    ID: ID,
    title: title,
    annualSalary: Number(annualSalary),
  };
  console.log('got an employee', employee);
}
