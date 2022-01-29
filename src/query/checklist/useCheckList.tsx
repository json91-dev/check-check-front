import axios from 'axios';
import { useQuery } from 'react-query';

const dummyData = {

};

const getCheckList = (subjectTitle) => () => {
  return axios.get(
    `http://158.247.192.7:8080/api/v1/checklist?subjectTitle=${subjectTitle}`,
  );;
};

export const useCheckList = (subjectTitle) => {
  const { data, isLoading, error, isFetching, status  } = useQuery('posts', getCheckList(subjectTitle), {
    staleTime: 6000000, // 100분
    cacheTime: 6000000, // 100분
    keepPreviousData: true,
  });


  return {
    checkList: data?.data,
    isLoading,
    status,
    error
  }
};
