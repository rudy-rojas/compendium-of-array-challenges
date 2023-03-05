## Count elements in array of arrays

### Description

Count the occurrences of distinct elements in the given 2D array. The given input is an array, the elements of which are arrays of strings. The result is an object whose property names are the values from the arrays and their value is the number of their occurrences.

#### Helpful links

- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Array.prototype.flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

<table>
  <tr>
    <th> Input </th> <th> Result </th>
  </tr>
  <tr>
  <td>

```javascript
const input = [
  ['a', 'b', 'c'],
  ['c', 'd', 'f'],
  ['d', 'f', 'g'],
];
```

  </td>
  <td>

```javascript
 {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    f: 2,
    g: 1,
  }
```

  </td>
  </tr>
</table>

<hr/>

[URL Exercise](https://www.crocoder.dev/blog/map-filter-reduce-exercises/#count-elements-in-array-of-arrays)

[Credits: David Abram - crocoder.dev](https://www.crocoder.dev/blog/map-filter-reduce-exercises/)
