import AsyncStorage from "@react-native-async-storage/async-storage";

class Storage {
    static instance =  new Storage()

    list = async (keys) => {
        try {
            return await AsyncStorage.multiGet(keys)
        } catch (error) {
            console.error("storage list error", error)
            throw Error(error)
        }
    }

    //Store only functions with String
    store = async (key, value) => {
        try {
            await AsyncStorage.setItem( key, value )

            return true
        } catch (error) {
            console.error("storage error",error)
            return false
        }
    }

    get = async (key) => {
        try {
            return await AsyncStorage.getItem(key)
        } catch (error) {
            console.error("storage get error", error)
            throw Error(error)
        }
    }

    remove = async (key) => {
        try {
            await AsyncStorage.removeItem(key)
            return true
        } catch (error) {
            console.error("storage remove error", err)
            return false
        }
    }

    //Returns all keys that were saved by setItem method
    getKeys = async () => {
        try {
            return await AsyncStorage.getAllKeys()
        } catch (error) {
            console.log("storage gey Keys", error)
            throw Error(error)
        }
    }
}

export default Storage