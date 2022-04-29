import {getItemFromAsync, setItemToAsync} from "@hooks/useAsyncStorage";
import {axiosInstance} from "@utils/axiosInstance";

export const getAccessTokenApi = (email: string, provider: string) => {
  return axiosInstance.post('/oauth2', {
    email,
    provider
  })
};

// AsyncStorage get 함수 모듈
const getStorageUser = async () => {
  return getItemFromAsync('user')
};

// AsyncStorage set 함수 모듈
const setStorageUser = async (user: any) => {
 return await setItemToAsync('user', user)
};

export {getStorageUser, setStorageUser}
