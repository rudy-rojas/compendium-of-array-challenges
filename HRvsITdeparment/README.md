## HR VS IT Department

### Description

You are given an array of objects representing a collection of employees, each with a name, salary, and department. Your task is to use map, filter, and reduce to calculate the average salary for each department and then return an array of objects containing only the departments that have an average salary above 65000.

#### Helpful links
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.prototype.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
-[Array.prototype.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

<table>
  <tr>
    <th> Input </th> <th> Result </th>
  </tr>
  <tr>
  <td>

```javascript
const employees = [
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
];
```
  </td>
  <td>

```javascript
[
  { department: 'HR', average: 71666 }
]
```

  </td>
  </tr>
</table>

<hr/>

[URL Exercise](https://www.crocoder.dev/blog/map-filter-reduce-exercises/#hr-vs-it-department)

[Credits: David Abram - crocoder.dev](https://www.crocoder.dev/blog/map-filter-reduce-exercises/)