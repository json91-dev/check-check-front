import axios from 'axios';
import { useQuery } from 'react-query';

const dummyData = {

};

const getCheckList = ()=> {
  return axios.get(
    'http://158.247.192.7:8080/api/v1/checklist?subjectTitle=전세 계약!!',
  );;
};

export const useCheckList = () => {
  const { data, isLoading, error, isFetching, status  } = useQuery('posts', getCheckList, {
    staleTime: 6000000, // 100분
    cacheTime: 6000000, // 100분
    keepPreviousData: true,
  });
  console.log(data.data)

  return {
    checkList: data?.data,
    isLoading,
    status,
    error
  }
};
