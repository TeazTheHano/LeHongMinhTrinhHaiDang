import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';
import * as FORMATDATA from './interfaceFormat';

const storage = new Storage({
  // maximum capacity, default 1000 key-ids
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // Sync method for retrieving data from the server
  },
});

export default storage;


// TODO: change it every project
const ERROR_SAVE_MESSAGE = 'Save failed';
const ERROR_GET_MESSAGE = 'Data is not exist or get data failed';
const ERROR_CLEAR_MESSAGE = 'Clear data failed';
// END OF DEFAULT STORAGE FUNCTIONS ______________________________________________________

/**
 * Saves the user data to storage.
 *
 * @param data - The user data to be saved.
 * @returns A promise that resolves to `true` if the data was saved successfully, or `false` if there was an error.
 */
export const storageSaveUser = async (data: FORMATDATA.UserFormat): Promise<boolean> => {
  try {
    await storage.save({
      key: 'user',
      data: data,
    });
    return true;
  } catch (error) {
    Alert.alert(ERROR_SAVE_MESSAGE);
    console.log('Failed to save user:', error);
    return false;
  }
};

/**
 * Retrieves the user data from storage.
 *
 * @returns {Promise<FORMATDATA.UserFormat | false>} A promise that resolves to the user data if found, or `false` if an error occurs.
 */
export const storageGetUser = async (): Promise<FORMATDATA.UserFormat | false> => {
  try {
    const ret: FORMATDATA.UserFormat = await storage.load({
      key: 'user',
    });
    return ret;
  } catch (error) {
    console.log('Failed to get user:', error);
    return false;
  }
};

/**
 * Asynchronously removes the user data from storage.
 *
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user data was successfully removed,
 *                             or `false` if an error occurred during the removal process.
 */
export const storageRemoveUser = async (): Promise<boolean> => {
  try {
    await storage.remove({
      key: 'user',
    });
    return true;
  } catch (error) {
    console.log('Failed to remove user:', error);
    return false;
  }
};

// END OF DEFAULT STORAGE FUNCTIONS ______________________________________________________

/**
 * @description Saves an item to storage. Can use to write/overwrite or create a list with key which can retrieve with `storageGetList`
 * 
 * @param key 
 * @param item 
 * @param id can use for creating a list with key
 * @returns 
 */
export const storageSaveAndOverwrite = async <K extends keyof FORMATDATA.StorageItem>(key: K, item: FORMATDATA.StorageItem[K], id?: string): Promise<boolean> => {
  try {
    await storage.save({
      key,
      id,
      data: item,
    });
    console.log(`Save successfully: ${key} - ${id ? id : ''}`);

    return true;
  } catch (error) {
    console.error(`Failed to save ${key}`, error);
    return false;
  }
}

/**
 * @description Adds an item to one Target:Interface[] in storage. Not for creating a list, just add to existing Array item
 * 
 * @param key - The storage key, should reference an array.
 * @param item - The item to be added to the array.
 * @returns A promise that resolves to `true` if added successfully, or `false` on error.
 */
export const storageAddToList = async <K extends keyof FORMATDATA.StorageItem>(
  key: K,
  item: FORMATDATA.StorageItem[K] extends Array<infer T> ? T : never,
): Promise<boolean> => {
  try {
    console.log(item);

    // const existingData = await storage.getAllDataForKey(key);
    const existingData = await storageGetItem(key);
    console.log(existingData);

    if (existingData && Array.isArray(existingData) && existingData.length > 0) {
      const itemList = existingData as FORMATDATA.StorageItem[K];
      // if (Array.isArray(itemList) && Array.isArray(item)) {
      // const updatedList = [...itemList, ...item];
      if (Array.isArray(itemList)) {
        const updatedList = [...itemList, item];
        console.log(updatedList);

        await storage.save({
          key,
          data: updatedList,
        });

        return true;
      } else {
        Alert.alert(ERROR_SAVE_MESSAGE);
        return false;
      }
    }
    return storageSaveAndOverwrite(key, [item] as any);
  } catch (error) {
    console.error(`Failed to add item to list for key: ${key}`, error);
    return false;
  }
}

/**
 * @description Use ONLY to retrieve one item from storage
 * @param key 
 * @param id use if needed
 * @returns 
 */
export const storageGetItem = async <K extends keyof FORMATDATA.StorageItem>(key: K, id?: string): Promise<FORMATDATA.StorageItem[K] | false> => {
  try {
    const ret: FORMATDATA.StorageItem[K] = await storage.load({
      key,
      id,
    });
    return ret;
  } catch (error) {
    console.log(`Failed to get ${key} - ${id ? id : ''}`, error);
    return false;
  }
}

/**
 * @description Use ONLY to retrieve a list of data from all id of one key
 * @param key 
 * @returns an Array which whatever data inside
 */
export const storageGetList = async <K extends keyof FORMATDATA.StorageItem>(key: K): Promise<FORMATDATA.StorageItem[K][] | false> => {
  try {
    const ret = await storage.getAllDataForKey(key) as FORMATDATA.StorageItem[K][];
    return ret;
  } catch (error) {
    console.log(`Failed to get ${key}`, error);
    return false;
  }
}

export const storageRemove = async <K extends keyof FORMATDATA.StorageItem>(key: K, id?: string): Promise<boolean> => {
  try {
    await storage.remove({
      key,
      id,
    });
    return true;
  } catch (error) {
    console.log(`Failed to remove ${key} - ${id ? id : ''}:`, error);
    return false;
  }
}

export const storageClearList = async <K extends keyof FORMATDATA.StorageItem>(key: K): Promise<boolean> => {
  try {
    await storage.clearMapForKey(key);
    return true;
  } catch (error) {
    console.log(`Failed to clear ${key} list:`, error);
    return false;
  }
}

export const storageGetAllIDfromKey = async <K extends keyof FORMATDATA.StorageItem>(key: K): Promise<Array<string> | false> => {
  try {
    const ret = await storage.getIdsForKey(key);
    return ret;
  } catch (error) {
    console.log(`Failed to get all ID from ${key}`, error);
    return false;
  }
}