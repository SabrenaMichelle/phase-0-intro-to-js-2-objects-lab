const employee = {
    name: 'Sabrena',
    streetAddress: '55 broadway,'}
   
   
    for (const key in employee) 
    delete employee[key];



function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newEmployee = {...employee};

    newEmployee['name'] = 'Sam';

    newEmployee['streetAddress'] = '11 Broadway';

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee['name'] = 'Sam';
    employee['streetAddress'] = '12 Broadway';
    
    return employee
}

function deleteFromEmployeeByKey (employee, name){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey (employee, name){
    delete employee.name;
    return employee;
}
