import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from './logger.util';

export const STORAGE_KEYS = {
  CURRENCIES: '@currency_converter/currencies',
  HISTORY: '@currency_converter/history',
} as const;

class StorageUtil {
  async setItem<T>(key: string, value: T): Promise<boolean> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
      logger(`[Storage] Saved data for key "${key}"`, 'info');
      return true;
    } catch (error) {
      logger(`[Storage] Error saving data for key "${key}": ${error}`, 'error');
      return false;
    }
  }

  async getItem<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue === null) {
        logger(`[Storage] No data found for key "${key}"`, 'warn');
        return null;
      }
      const parsedValue = JSON.parse(jsonValue) as T;
      logger(`[Storage] Retrieved data for key "${key}"`, 'info');
      return parsedValue;
    } catch (error) {
      logger(
        `[Storage] Error getting data for key "${key}": ${error}`,
        'error',
      );
      return null;
    }
  }

  async removeItem(key: string): Promise<boolean> {
    try {
      await AsyncStorage.removeItem(key);
      logger(`[Storage] Removed data for key "${key}"`, 'info');
      return true;
    } catch (error) {
      logger(
        `[Storage] Error removing data for key "${key}": ${error}`,
        'error',
      );
      return false;
    }
  }

  async clear(): Promise<boolean> {
    try {
      await AsyncStorage.clear();
      logger('[Storage] Cleared all data', 'info');
      return true;
    } catch (error) {
      logger(`[Storage] Error clearing all data: ${error}`, 'error');
      return false;
    }
  }

  async getAllKeys(): Promise<readonly string[]> {
    try {
      const keys = await AsyncStorage.getAllKeys();
      logger(`[Storage] Retrieved ${keys.length} keys`, 'info');
      return keys;
    } catch (error) {
      logger(`[Storage] Error getting all keys: ${error}`, 'error');
      return [];
    }
  }

  async multiSet(keyValuePairs: Array<[string, any]>): Promise<boolean> {
    try {
      const serializedPairs: Array<[string, string]> = keyValuePairs.map(
        ([key, value]) => [key, JSON.stringify(value)],
      );
      await AsyncStorage.multiSet(serializedPairs);
      logger(`[Storage] Saved ${keyValuePairs.length} items`, 'info');
      return true;
    } catch (error) {
      logger(`[Storage] Error saving multiple items: ${error}`, 'error');
      return false;
    }
  }

  async multiGet<T>(keys: string[]): Promise<Record<string, T | null>> {
    try {
      const pairs = await AsyncStorage.multiGet(keys);
      const result: Record<string, T | null> = {};

      pairs.forEach(([key, value]) => {
        try {
          result[key] = value ? (JSON.parse(value) as T) : null;
        } catch {
          result[key] = null;
        }
      });

      logger(`[Storage] Retrieved ${keys.length} items`, 'info');
      return result;
    } catch (error) {
      logger(`[Storage] Error getting multiple items: ${error}`, 'error');
      return {};
    }
  }

  async multiRemove(keys: string[]): Promise<boolean> {
    try {
      await AsyncStorage.multiRemove(keys);
      logger(`[Storage] Removed ${keys.length} items`, 'info');
      return true;
    } catch (error) {
      logger(`[Storage] Error removing multiple items: ${error}`, 'error');
      return false;
    }
  }

  async hasItem(key: string): Promise<boolean> {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null;
    } catch (error) {
      logger(
        `[Storage] Error checking if key "${key}" exists: ${error}`,
        'error',
      );
      return false;
    }
  }

  async mergeItem<T extends object>(
    key: string,
    value: Partial<T>,
  ): Promise<boolean> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.mergeItem(key, jsonValue);
      logger(`[Storage] Merged data for key "${key}"`, 'info');
      return true;
    } catch (error) {
      logger(
        `[Storage] Error merging data for key "${key}": ${error}`,
        'error',
      );
      return false;
    }
  }

  async getStorageSize(): Promise<number> {
    try {
      const keys = await this.getAllKeys();
      let totalSize = 0;

      for (const key of keys) {
        const value = await AsyncStorage.getItem(key);
        if (value) {
          totalSize += new Blob([value]).size;
        }
      }

      logger(
        `[Storage] Total size is ${(totalSize / 1024).toFixed(2)} KB`,
        'info',
      );
      return totalSize;
    } catch (error) {
      logger(`[Storage] Error calculating storage size: ${error}`, 'error');
      return 0;
    }
  }
}

export default new StorageUtil();
