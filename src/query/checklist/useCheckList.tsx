import axios from 'axios';
import { useQuery } from 'react-query';

const dummyData = {

};

const getCheckList = async (): Promise<Array<string>> => {
  const { data } = await axios.get(
    'http://localhost:8080/api/v1/user/checklist?email=wsnam0507@gmail.com&subjectId=61d9d5b491ed4c53c0b6b5a5',
  );
  return data;
};

export const useCheckList = () => {
  return useQuery('posts', getCheckList);
};
