import axios, {AxiosResponse} from 'axios';
import { useQuery } from 'react-query';
import {defaultQueryOptions} from "@query/options";
import {CheckListInterface} from "@interfaces/UserCheckListInterfaces";

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

const getCheckListBySubjectId = (id: string): any => () => {
  return axios.get(
    `http://158.247.192.7:8080/api/v1/checklist/${id}`,
  );
}

export const useCheckList = (subjectTitle?: string, subjectId?: string) => {
  const getCheckListBySubTitleQuery = subjectTitle? useQuery(subjectTitle, getCheckListBySubTitle(subjectTitle), defaultQueryOptions) : null;

  const getCheckListSubjectsQuery = useQuery('subjects', getCheckListSubjects, defaultQueryOptions)

  const getCheckListBySubjectIdQuery = subjectId? useQuery<CheckListInterface | any>([`checklist`, {subjectId}], getCheckListBySubjectId(subjectId), defaultQueryOptions) : null;

  return {
    getCheckListBySubTitleQuery,
    getCheckListSubjectsQuery,
    getCheckListBySubjectIdQuery
  }
}
