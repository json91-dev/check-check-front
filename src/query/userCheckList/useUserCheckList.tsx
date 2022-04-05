import axios from 'axios';
// import {CheckListInterface} from "@utils/interfaces/checkList";
// import {getAccessToken} from "@react-native-seoul/kakao-login";
// import {getStorageUser} from "@utils/hooks/useStorageUser";

import {useMutation, useQuery, useQueryClient} from 'react-query';
import {defaultQueryOptions} from "@query/options";
import {axiosInstance, getJWTHeader} from "@utils/helpers/axiosInstance";
import {getStorageUser} from "@utils/hooks/useStorageUser";
import {CheckListElementInterface} from "~/interfaces/UserCheckListInterfaces";
import {CheckListInterface} from "@interfaces/CheckListInterfaces";

/**
 * 모든 체크리스트의 주제를 가져옴.
 */
const getCheckListSubjects = () => {
  return axiosInstance.get('/checklist/subjects')
};

/**
 * SubjectId(주제)를 통해 유저에 대한 해당 주제의 체크리스트 조회.
 * @param subjectId
 */
const getUserCheckListBySubjectId = (subjectId: number) => async () => {
  const user: any = await getStorageUser()
  const token = user.token? user.token: '';
  return axiosInstance.get(`/user/checklist?subjectId=${subjectId}`, { headers: getJWTHeader(token) })
}

/**
 * 유저의 체크리스트 항목의 체크상태 update.
 * @param elementId
 * @param checked
 */
const postUserCheckList: any = async (elementId: number, checked: boolean) => {
  const user: any = await getStorageUser()
  const token = user.token? user.token: '';

  const updateChecked = !checked

  const data = {
    elementId,
    isChecked: updateChecked
  }

  const response = await axiosInstance.put(`/user/checklist`, data ,{ headers: getJWTHeader(token) })
  console.log(JSON.stringify(response.data))

  return axiosInstance.put(`/user/checklist`, data ,{ headers: getJWTHeader(token) })
}

/**
 * 유저의 체크리스트 요청 query.
 * @param subjectId
 */
export const useUserCheckList = (subjectId: number) => {
  const {data, status, isFetching} = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);

  return {
    data,
    status,
    isFetching
  }
}

/**
 * 모든 체크리스트 주제에 대한 요청 query.
 */
export const useCheckListSubject = () => {
  const {data, status} = useQuery('subjects', getCheckListSubjects, defaultQueryOptions)

  return {
    data,
    status
  }
}

/**
 * 체크리스트 주제의 Element에 대한 Check 요청
 * @param subjectId
 */
export const useUserCheckPost = (subjectId: number) => {
  const queryClient = useQueryClient()

  // @ts-ignore
  const userCheckMutation = useMutation((elementId: number, checked: boolean) => postUserCheckList(elementId, checked), {
    onMutate: async (data: {id: number}) => {

      const { id: elementId } = data;

      // Step 1: 기존 checklist에 대한 query를
      await queryClient.cancelQueries([`checklist`, {subjectId}])
      const checkListQuery: any = queryClient.getQueryData([`checklist`, {subjectId}])
      const prevCheckList: any = {...checkListQuery.data};
      const prevCheckListSections = prevCheckList.checkListSections;

      for (const checkListSection of prevCheckListSections) {
        for (const checkListElement of checkListSection.checkListElements) {
          if (checkListElement.id === elementId) {
            checkListElement.checked = !checkListElement.checked
          }
        }
      }

      const updatedCheckList = {
        ...prevCheckList,
      }


      // TODO: 현재 체크된 Element의 체크값만 바꿔서 갱신한다.
      queryClient.setQueryData([`checklist`, {subjectId}], updatedCheckList);

      return {
        prevCheckList,
        subjectId,
      }
    },

    onError: (error, data, { prevCheckList}: any) => {
      queryClient.setQueryData([`checklist`, {subjectId}], prevCheckList);
    },
    onSuccess: (error, data, context) => {
      queryClient.invalidateQueries([`checklist`, {subjectId}]);
    },
  })

  return { userCheckMutation }
}

