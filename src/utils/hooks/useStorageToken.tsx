import AsyncStorage from "@react-native-community/async-storage";
import {getItemFromAsync, setItemToAsync} from "@utils/hooks/useAsyncStorage";
import {axiosInstance} from "@utils/helpers/axiosInstance";

export const getAccessTokenApi = (email: string, provider: string) => {
  return axiosInstance.post('/oauth2', {
    email,
    provider
  })
};

// AsyncStorage get 함수 모듈
const getStorageToken = async (storageName: string) => {
  return getItemFromAsync('token')
};

// AsyncStorage set 함수 모듈
const setStorageToken = async (token: object) => {
 return await setItemToAsync('token', token)
};

export {getStorageToken, setStorageToken}
