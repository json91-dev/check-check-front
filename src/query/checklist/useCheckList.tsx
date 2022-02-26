import axios from 'axios';
import { useQuery } from 'react-query';
import {defaultQueryOptions} from "@query/options";

const baseUrl = 'http://158.247.192.7:8080/api/v1'

const getCheckListBySubTitle = (subjectTitle: string) => () => {
  return axios.get(
    `http://158.247.192.7:8080/api/v1/checklist?subjectTitle=${subjectTitle}`,
  );
};

const getCheckListSubjects = () => {
  return axios.get(
    `${baseUrl}/checklist/subjects`,
  );
};

const getCheckListById = (id) => {
  return axios.get(
    `http://158.247.192.7:8080/api/v1/checklist/${id}`,
  );
}

export const useCheckList = (subjectTitle: string, id: string) => {
  const getCheckListBySubTitleQuery = subjectTitle? useQuery(subjectTitle, getCheckListBySubTitle(subjectTitle), defaultQueryOptions) : null;

  const getCheckListSubjectsQuery = useQuery('subjects', getCheckListSubjects, defaultQueryOptions)

  const getCheckListByIdQuery = id? useQuery(id, getCheckListById, defaultQueryOptions) : null;

  return {
    getCheckListBySubTitleQuery,
    getCheckListSubjectsQuery,
    getCheckListByIdQuery
  }
}
