export default function createIteratorObject(report) {
  let items = []
  Object.values(report.allEmployees).forEach(item => items = [...items, ...item]);
  return items[Symbol.iterator]();
}
