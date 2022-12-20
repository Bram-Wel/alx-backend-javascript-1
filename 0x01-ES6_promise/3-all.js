import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  uploadPhoto().then((res) => {
    const profile = {};
    profile.photo = res.body;

    createUser().then((res) => {
      console.log(Object.values({ ...profile, ...res }).join(' '));
    }).catch(() => console.log('Signup system offline'));
  }).catch(() => console.log('Signup system offline'));
}
