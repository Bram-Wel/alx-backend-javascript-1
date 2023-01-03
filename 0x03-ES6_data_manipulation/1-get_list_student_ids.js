export default function getListStudentIds(objects) {
  if (!Array.isArray(objects)) return [];

  const ids = [];
  objects.map((object) => ids.push(object.id));

  return ids;
}
