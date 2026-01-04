
//export * from '@react-native-async-storage/async-storage/jest/async-storage-mock';

const store = {};

export default {
  setItem: jest.fn(async (key, value) => {
    store[key] = value;
    return Promise.resolve(value);
  }),
  getItem: jest.fn(async (key) => {    
    return Promise.resolve(store[key] ?? null);
  }),
  removeItem: jest.fn(async (key) => {
    delete store[key];
    return Promise.resolve();
  }),
  clear: jest.fn(async () => {
    Object.keys(store).forEach((k) => delete store[k]);
    return Promise.resolve();
  }),
  getAllKeys: jest.fn(async () => {
    return Promise.resolve(Object.keys(store));
  }),
};