import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  try {
    const { body: photo } = await uploadPhoto();
    const { firstName, lastName } = await createUser();
    console.log(`${photo} ${firstName} ${lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}
