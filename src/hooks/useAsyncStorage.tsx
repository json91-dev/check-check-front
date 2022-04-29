import AsyncStorage from "@react-native-community/async-storage";

const isEmpty = function (value: any) {
  if (value === '' || value === null || value === undefined || (value !== null && typeof value === 'object' && !Object.keys(value).length)) {
    return true;
  } else {
    return false;
  }
};

// AsyncStorage get 함수 모듈
const getItemFromAsync = (storageName: string) => {
  return new Promise((resolve, reject) => {
    if (isEmpty(storageName)) {
      reject('Storage Name is empty');
    }

    AsyncStorage.getItem(storageName, (err, result) => {
      if (err) {
        reject(err);
      }

      if (typeof result === "string") {
        resolve(JSON.parse(result));
      } else {
        resolve(null)
      }
    });
  });
};

// AsyncStorage set 함수 모듈
const setItemToAsync = (storageName:string, item: object) => {
  return new Promise((resolve, reject) => {
    if (isEmpty(storageName)) {
      reject('Storage Name is empty');
    }

    AsyncStorage.setItem(storageName, JSON.stringify(item), (error) => {
      if (error) {
        reject(error);
      }

      resolve('입력 성공');
    });
  });
};

export {setItemToAsync, getItemFromAsync}
