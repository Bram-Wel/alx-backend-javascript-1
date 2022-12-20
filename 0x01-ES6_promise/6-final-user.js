import signupUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const array = [];

  try {
    const res = await signupUser(firstName, lastName);
    array.push({ status: 'fulfilled', value: res });
  } catch (err) {
    array.push({ status: 'rejected', value: err.toString() });
  }

  try {
    const res = await uploadPhoto(fileName);
    array.push({ status: 'fulfilled', value: res });
  } catch (err) {
    array.push({ status: 'rejected', value: err.toString() });
  }

  return array;
}
