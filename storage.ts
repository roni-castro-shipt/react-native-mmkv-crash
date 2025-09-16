import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV();

export const setStorageItem = (key: string, value: any) => {
  try {
    storage.set(key, value);
  } catch (e) {
    console.log('setMMKVItem', e);
  }
};

export const clearAll = () => {
  try {
    storage.clearAll();
  } catch {}
};
