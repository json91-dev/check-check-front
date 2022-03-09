import axios, {AxiosResponse} from 'axios';
import { useQuery } from 'react-query';
import {defaultQueryOptions} from "@query/options";
import {CheckListInterface} from "@query/queryInterface";

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

const getCheckListById = (id: string): any => () => {
  return axios.get(
    `http://158.247.192.7:8080/api/v1/checklist/${id}`,
  );
}

export const useCheckList = (subjectTitle?: string, subjectId?: string) => {
  const getCheckListBySubTitleQuery = subjectTitle? useQuery(subjectTitle, getCheckListBySubTitle(subjectTitle), defaultQueryOptions) : null;

  const getCheckListSubjectsQuery = useQuery('subjects', getCheckListSubjects, defaultQueryOptions)

  const getCheckListByIdQuery = subjectId? useQuery<CheckListInterface | any>(`checkListSubject-${subjectId}`, getCheckListById(subjectId), defaultQueryOptions) : null;

  return {
    getCheckListBySubTitleQuery,
    getCheckListSubjectsQuery,
    getCheckListByIdQuery
  }
}
