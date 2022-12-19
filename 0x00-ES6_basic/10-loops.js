export default function appendToEachArrayValue(array, appendString) {
  const arr = [];

  for (let item of array) {
    item = appendString + item;
    arr.push(item);
  }

  return arr;
}
