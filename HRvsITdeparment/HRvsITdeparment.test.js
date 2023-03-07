const getDepartmentsGreaterThan65000 = require('./HRvsITdeparment.js');

describe(`Get All departments greater than 65000 $, Test`, () => {
  const employees = [
    { name: 'John', salary: 50000, department: 'IT' },
    { name: 'Jane', salary: 60000, department: 'HR' },
    { name: 'Bob', salary: 55000, department: 'IT' },
    { name: 'Sophie', salary: 75000, department: 'HR' },
    { name: 'Mike', salary: 65000, department: 'IT' },
    { name: 'Emily', salary: 80000, department: 'HR' },
    { name: 'David', salary: 70000, department: 'IT' },
  ];
  const result = [{ deparment: 'HR', average: 71666 }];
  it(`${employees} should be ${result}`, () => {
    expect(getDepartmentsGreaterThan65000(employees)).toEqual(result);
  });
});
