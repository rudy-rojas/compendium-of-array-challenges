## High performing students

### Description

You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students who have an average score above 90.

#### Helpful links

- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

<table>
  <tr>
    <th> Input </th> <th> Result </th>
  </tr>
  <tr>
  <td>

```javascript
const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
];
```
  </td>
  <td>

```javascript
[ 
  { name: 'Jack', average: 100 }
]
```

  </td>
  </tr>
</table>

<hr/>

[URL Exercise](https://www.crocoder.dev/blog/map-filter-reduce-exercises/#high-performing-students)

[Credits: David Abram - crocoder.dev](https://www.crocoder.dev/blog/map-filter-reduce-exercises/)