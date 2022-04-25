
import {useMutation, useQuery, useQueryClient} from 'react-query';
import {defaultQueryOptions} from "@query/options";
import {axiosInstance, getJWTHeader} from "@utils/helpers/axiosInstance";
import {getStorageUser} from "@utils/hooks/useStorageUser";

/**
 * 모든 체크리스트의 주제를 가져옴.
 */
export const getCheckListSubjects = () => {
  return axiosInstance.get('/checklist/subjects')
};

/**
 * SubjectId(주제)를 통해 유저에 대한 해당 주제의 체크리스트 조회.
 * @param subjectId
 */
export const getUserCheckListBySubjectId = (subjectId: number) => async () => {
  const user: any = await getStorageUser()
  const token = user.token? user.token: '';
  const response = await axiosInstance.get(`/user/checklist?subjectId=${subjectId}`, { headers: getJWTHeader(token) })

  return response.data
}

/**
 * 유저의 체크리스트 항목의 체크상태 update.
 * @param checkedData
 */
export const postUserCheckList: any = async (checkedData: any) => {
  const user: any = await getStorageUser()
  const token = user.token? user.token: '';

  const updateChecked = !checkedData.checked

  const data = {
    elementId: checkedData.id,
    isChecked: updateChecked
  }

  const response = await axiosInstance.put(`/user/checklist`, data ,{ headers: getJWTHeader(token) })
  console.log(response)


  return response.data
}

/**
 * 유저의 체크리스트 요청 query.
 * @param subjectId
 */
export const useUserCheckList = (subjectId: number) => {
  const { data, status, isFetching } = useQuery([`checklist`, {subjectId}], getUserCheckListBySubjectId(subjectId), defaultQueryOptions);

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

  const userCheckMutation = useMutation((checkedData) => postUserCheckList(checkedData), {
    onMutate: async (checkedData: any) => {
      const elementId = checkedData.id;

      await queryClient.cancelQueries([`checklist`, {subjectId}])
      const checkList: any = queryClient.getQueryData([`checklist`, {subjectId}])

      const updatedCheckList = {...checkList}
      updatedCheckList.checkListSections.forEach((checkListSection: any) => {
        checkListSection.checkListElements.forEach((checkListElement: any) => {
            if (checkListElement.id === elementId) {
              checkListElement.checked = !checkListElement.checked
            }
        })
      })

      await queryClient.setQueryData([`checklist`, {subjectId}], updatedCheckList);

      return {
        subjectId,
      }
    },

    onError: (error, data, { prevCheckList}: any) => {
      // queryClient.setQueryData([`checklist`, {subjectId}], prevCheckList);
    },

    onSuccess: (error, data, context) => {
      // queryClient.invalidateQueries([`checklist`, {subjectId}]);
    },
  })

  return { userCheckMutation }
}

