import axios from 'axios';
// import {CheckListInterface} from "@utils/interfaces/checkList";
// import {getAccessToken} from "@react-native-seoul/kakao-login";
// import {getStorageUser} from "@utils/hooks/useStorageUser";

import { useQuery } from 'react-query';
import {defaultQueryOptions} from "@query/options";
import {axiosInstance, getJWTHeader} from "@utils/helpers/axiosInstance";
import {getStorageUser} from "@utils/hooks/useStorageUser";

const getCheckListSubjects = () => {
  return axiosInstance.get('/checklist/subjects')
};

const getUserCheckListBySubjectId = (subjectId: string) => async () => {
  const user: any = await getStorageUser()
  const token = user.token? user.token: '';
  return axiosInstance.get(`/user/checklist?subjectId=${subjectId}`, { headers: getJWTHeader(token) })
}

// 유저의 체크리스트 요청 query.
export const useUserCheckList = (subjectId: string) => {
  const {data, status, isFetching} = useQuery(`checklist-${subjectId}`, getUserCheckListBySubjectId(subjectId), defaultQueryOptions);

  return {
    data,
    status,
    isFetching
  }
}

// 모든 체크리스트 주제에 대한 요청 query.
export const useCheckListSubject = () => {
  const {data, status} = useQuery('subjects', getCheckListSubjects, defaultQueryOptions)

  return {
    data,
    status
  }
}
