export default function cleanSet(set, startString) {
  if (startString === '') return '';
  let string = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      string += `${item.slice(startString.length)}-`;
    }
  }
  return string.slice(0, string.length - 1);
}
