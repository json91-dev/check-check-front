import axios from 'axios';
import { useQuery } from 'react-query';
import {defaultQueryOptions} from "@query/options";
import {CheckListInterface} from "@utils/interfaces/checkList";
import {axiosInstance, getJWTHeader} from "@utils/helpers/axiosInstance";
import {getAccessToken} from "@react-native-seoul/kakao-login";
import {getStorageUser} from "@utils/hooks/useStorageUser";

const getCheckListSubjects = () => {
  return axiosInstance.get('/checklist/subjects')
};

const getUserCheckListBySubjectId = (id: string, token: string): any => async () => {
  return axiosInstance.get(`/checklist/${id}`, { headers: getJWTHeader(token) })
}

export const useUserCheckList = (subjectId: string, token: string) => {
  const {data, status} = useQuery<CheckListInterface | any>(`checkListSubject-${subjectId}`, getUserCheckListBySubjectId(subjectId, token), defaultQueryOptions);

  return {
    data,
    status
  }
}

export const useCheckListSubject = () => {
  const {data, status} = useQuery('subjects', getCheckListSubjects, defaultQueryOptions)

  return {
    data,
    status
  }
}
