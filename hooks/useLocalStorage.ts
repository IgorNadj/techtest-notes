import {useEffect, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [value, setValue] = useState<T>(initialValue)
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        ;(async () => {
            try {
                setIsLoading(true);
                const valueStr = await AsyncStorage.getItem(key);
                if (valueStr !== null) {
                    setValue(JSON.parse(valueStr))
                }
            } catch (error) {
                console.error('useAsyncStorage getItem error:', error)
            } finally {
                setIsLoading(false);
            }
        })()
    }, [key])

    const updateStoredValue = async (value: T) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
            setValue(value)
        } catch (error) {
            console.error('useAsyncStorage setItem error:', error)
        }
    }

    return {
        value,
        setValue: updateStoredValue,
        isLoading,
    }
}
