import { openDB } from 'idb';

const dbPromise = openDB('clusters-store', 1, {
  upgrade: (db) => {
    db.createObjectStore('users');
  },
});

export const getUser = async (key) => {
  return (await dbPromise).get('users', key)
}
export const setUser = async (key, val) => {
  return (await dbPromise).put('users', val, key)
}
export const delUser = async (key) => {
  return (await dbPromise).delete('users', key)
}
export const clearUser = async () => {
  return (await dbPromise).clear('users')
}
export const GetUserByKeys = async () => {
  return (await dbPromise).getAllKeys('users')
}

export default dbPromise; // Export dbPromise as default
