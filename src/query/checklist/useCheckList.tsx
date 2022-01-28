import axios from 'axios';
import { useQuery } from 'react-query';

const dummyData = {

};

const getCheckList = async (): Promise<Array<string>> => {
  const { data } = await axios.get(
    'http://158.247.192.7:8080/api/v1/checklist?subjectTitle=전세 계약!!',
  );
  return data;
};

export const useCheckList = () => {
  return useQuery('posts', getCheckList);
};
