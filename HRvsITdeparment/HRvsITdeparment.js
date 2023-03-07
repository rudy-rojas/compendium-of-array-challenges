const getDepartmentsGreaterThan65000 = (employees) => {
  //Get only departments
  let departments = employees.map((el) => el.department);

  // remove duplicates
  let departmentsWithoutDuplicates = departments.filter(
    (el, i) => departments.indexOf(el) == i
  );

  // count how many departments are there? // {deparment: XX, length: 2} // 2 is the quantity of XX
  departmentsWithoutDuplicates = departmentsWithoutDuplicates.reduce(
    (acc, el) => {
      acc.push({
        department: el,
        length: departments.reduce(
          (sum, dep) => (dep == el ? sum + 1 : sum),
          0
        ),
      });
      return acc;
    },
    []
  );

  // calculate de averages of each department
  let averages = departmentsWithoutDuplicates.reduce((acc, el) => {
    acc.push({
      deparment: el.department,
      average: parseInt(
        employees.reduce(
          (sum, emp) =>
            emp.department == el.department ? sum + emp.salary : sum,
          0
        ) / el.length
      ),
    });
    return acc;
  }, []);

  return averages.filter((dep) => dep.average >= 65000);
};

// const employees = [
//   { name: 'John', salary: 50000, department: 'IT' },
//   { name: 'Jane', salary: 60000, department: 'HR' },
//   { name: 'Bob', salary: 55000, department: 'IT' },
//   { name: 'Sophie', salary: 75000, department: 'HR' },
//   { name: 'Mike', salary: 65000, department: 'IT' },
//   { name: 'Emily', salary: 80000, department: 'HR' },
//   { name: 'David', salary: 70000, department: 'IT' },
// ];

module.exports = getDepartmentsGreaterThan65000;
